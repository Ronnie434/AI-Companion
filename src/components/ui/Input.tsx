import React from 'react';
import type { InputProps } from '../../types';

const Input: React.FC<InputProps> = ({
  className = '',
  ...rest
}) => {
  const baseStyles = 'h-12 rounded-full border border-white/10 bg-white/5 px-6 text-white placeholder-gray-500 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50';
  
  const combinedStyles = `${baseStyles} ${className}`;
  
  return (
    <input
      className={combinedStyles}
      {...rest}
    />
  );
};

export default Input;