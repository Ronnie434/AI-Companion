import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const baseStyles = 'rounded-3xl border border-gray-200 bg-white transition-all duration-300 dark:border-white/5 dark:bg-white/[0.03]';
  const hoverStyles = hover ? 'hover:bg-gray-50 dark:hover:bg-white/[0.06]' : '';
  
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;
  
  return (
    <div className={combinedStyles}>
      {children}
    </div>
  );
};

export default Card;