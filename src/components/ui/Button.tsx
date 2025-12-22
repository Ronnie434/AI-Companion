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
  const baseStyles = 'font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-background-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105',
    secondary: 'border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'h-10 px-6 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
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