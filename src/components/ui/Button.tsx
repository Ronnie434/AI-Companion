import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled,
}) => {
  // Base styles
  const baseStyles = 'relative overflow-hidden rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-gradient text-white shadow-lg shadow-primary/25 hover:shadow-glow hover:-translate-y-0.5 border border-white/10',
    secondary: 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-zinc-900 dark:text-white hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-zinc-800/50',
    ghost: 'bg-transparent text-zinc-900 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'h-9 px-4 text-xs tracking-wide',
    md: 'h-11 px-6 text-sm tracking-wide',
    lg: 'h-14 px-8 text-base tracking-wide',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className} ${sizeStyles[size]}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;