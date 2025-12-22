import React from 'react';
import type { InputProps } from '../../types';

const Input: React.FC<InputProps> = ({
  className = '',
  ...rest
}) => {
  const baseStyles = 'h-12 rounded-full border border-gray-300 bg-white px-6 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 dark:border-white/10 dark:bg-white/5 dark:text-white';
  
  const combinedStyles = `${baseStyles} ${className}`;
  
  return (
    <input
      className={combinedStyles}
      {...rest}
    />
  );
};

export default Input;