import React from 'react';
import { motion } from 'framer-motion';

interface ThemeTogglePillsProps {
  currentTheme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
  className?: string;
}

export const ThemeTogglePills: React.FC<ThemeTogglePillsProps> = ({
  currentTheme,
  onThemeChange,
  className = '',
}) => {
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      <motion.button
        onClick={() => onThemeChange('light')}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          transition-colors duration-300 overflow-hidden
          ${
            currentTheme === 'light'
              ? 'bg-white text-gray-900 shadow-lg shadow-white/20'
              : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-gray-300'
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-pressed={currentTheme === 'light'}
        aria-label="Show light mode screenshots"
      >
        {currentTheme === 'light' && (
          <motion.div
            className="absolute inset-0 bg-white"
            layoutId="activeThemePill"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Light
        </span>
      </motion.button>

      <motion.button
        onClick={() => onThemeChange('dark')}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          transition-colors duration-300 overflow-hidden
          ${
            currentTheme === 'dark'
              ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/50 ring-1 ring-white/20'
              : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-gray-300'
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-pressed={currentTheme === 'dark'}
        aria-label="Show dark mode screenshots"
      >
        {currentTheme === 'dark' && (
          <motion.div
            className="absolute inset-0 bg-gray-900"
            layoutId="activeThemePill"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          Dark
        </span>
      </motion.button>
    </div>
  );
};

export default ThemeTogglePills;