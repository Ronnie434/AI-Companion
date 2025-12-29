import React from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { PhoneFrame } from './PhoneFrame';
import type { Screenshot } from '../../data/screenshots';

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  currentIndex: number;
  direction: number;
  showcaseTheme: 'dark' | 'light';
  onSwipe: (direction: number) => void;
  className?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
    rotateY: direction > 0 ? -20 : 20,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.85,
    rotateY: direction > 0 ? 20 : -20,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
};

const floatVariants = {
  float: {
    y: [0, -8, 0],
    rotateX: [0, 2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  screenshots,
  currentIndex,
  direction,
  showcaseTheme,
  onSwipe,
  className = '',
}) => {
  const currentScreenshot = screenshots[currentIndex];
  const imageSrc = showcaseTheme === 'dark' 
    ? currentScreenshot.src.dark 
    : currentScreenshot.src.light;

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      onSwipe(1);
    } else if (swipe > swipeConfidenceThreshold) {
      onSwipe(-1);
    }
  };

  // Get adjacent screenshots for preview (optional enhancement)
  const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  const nextIndex = (currentIndex + 1) % screenshots.length;
  const prevScreenshot = screenshots[prevIndex];
  const nextScreenshot = screenshots[nextIndex];

  return (
    <div className={`relative ${className}`}>
      {/* 3D perspective container */}
      <div 
        className="relative flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        {/* Side previews - previous (hidden on mobile) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-0">
          <motion.div
            className="opacity-20 scale-[0.65] blur-[2px]"
            animate={{ x: -60 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <PhoneFrame
              imageSrc={showcaseTheme === 'dark' ? prevScreenshot.src.dark : prevScreenshot.src.light}
              alt={prevScreenshot.alt}
              isAnimating={false}
            />
          </motion.div>
        </div>

        {/* Main carousel */}
        <div className="relative z-10 w-full max-w-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${currentIndex}-${showcaseTheme}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              style={{ 
                transformStyle: 'preserve-3d',
                cursor: 'grab',
              }}
              whileDrag={{ cursor: 'grabbing' }}
              className="w-full"
            >
              <motion.div
                variants={floatVariants}
                animate="float"
              >
                <PhoneFrame
                  imageSrc={imageSrc}
                  alt={currentScreenshot.alt}
                  isAnimating={true}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side previews - next (hidden on mobile) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <motion.div
            className="opacity-20 scale-[0.65] blur-[2px]"
            animate={{ x: 60 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <PhoneFrame
              imageSrc={showcaseTheme === 'dark' ? nextScreenshot.src.dark : nextScreenshot.src.light}
              alt={nextScreenshot.alt}
              isAnimating={false}
            />
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => onSwipe(-1)}
          className="absolute left-2 lg:left-[-80px] top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 lg:w-12 lg:h-12 rounded-full 
                     bg-white/10 backdrop-blur-sm border border-white/20
                     flex items-center justify-center
                     text-white/70 hover:text-white hover:bg-white/20
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Previous screenshot"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => onSwipe(1)}
          className="absolute right-2 lg:right-[-80px] top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 lg:w-12 lg:h-12 rounded-full 
                     bg-white/10 backdrop-blur-sm border border-white/20
                     flex items-center justify-center
                     text-white/70 hover:text-white hover:bg-white/20
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Next screenshot"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Screenshot description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentScreenshot.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScreenshotCarousel;