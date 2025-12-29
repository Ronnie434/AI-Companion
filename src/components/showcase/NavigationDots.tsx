import React from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  labels?: string[];
  className?: string;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  total,
  currentIndex,
  onDotClick,
  labels,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Dots */}
      <div className="flex justify-center items-center gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={`
              relative h-2 rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-400/40 hover:bg-gray-400/60 w-2'
              }
            `}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to screenshot ${index + 1}${labels?.[index] ? `: ${labels[index]}` : ''}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                layoutId="activeDot"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Current label */}
      {labels && labels[currentIndex] && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {labels[currentIndex]}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default NavigationDots;