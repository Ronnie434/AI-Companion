import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScreenshotCarousel } from './ScreenshotCarousel';
import { ThemeTogglePills } from './ThemeTogglePills';
import { NavigationDots } from './NavigationDots';
import { useCarousel } from './useCarousel';
import { screenshots } from '../../data/screenshots';

interface ScreenshotShowcaseProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1] as const,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ScreenshotShowcase: React.FC<ScreenshotShowcaseProps> = ({
  className = '',
}) => {
  const [showcaseTheme, setShowcaseTheme] = useState<'dark' | 'light'>('dark');
  
  const {
    currentIndex,
    direction,
    goToSlide,
    nextSlide,
    prevSlide,
    containerProps,
  } = useCarousel({
    totalSlides: screenshots.length,
    autoPlayInterval: 5000,
    pauseOnHover: true,
  });

  const handleSwipe = (swipeDirection: number) => {
    if (swipeDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const screenshotLabels = screenshots.map((s) => s.label);

  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...containerProps}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.08) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Carousel section */}
      <motion.div variants={itemVariants}>
        <ScreenshotCarousel
          screenshots={screenshots}
          currentIndex={currentIndex}
          direction={direction}
          showcaseTheme={showcaseTheme}
          onSwipe={handleSwipe}
        />
      </motion.div>

      {/* Navigation dots */}
      <motion.div variants={itemVariants} className="mt-8">
        <NavigationDots
          total={screenshots.length}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
          labels={screenshotLabels}
        />
      </motion.div>

      {/* Theme toggle pills */}
      <motion.div variants={itemVariants} className="mt-6">
        <ThemeTogglePills
          currentTheme={showcaseTheme}
          onThemeChange={setShowcaseTheme}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScreenshotShowcase;