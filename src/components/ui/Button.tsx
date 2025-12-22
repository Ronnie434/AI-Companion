import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  // Base styles
  const baseStyles = 'rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:scale-105 hover:shadow-xl hover:shadow-primary/30',
    secondary: 'border border-gray-300 bg-gray-100 text-gray-900 backdrop-blur-sm hover:border-gray-400 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10',
    ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/5',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'h-10 px-6 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className} ${sizeStyles[size]}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};

export default Button;