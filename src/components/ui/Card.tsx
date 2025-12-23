import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const baseStyles = 'rounded-2xl glass-card transition-all duration-300';
  const hoverStyles = hover ? 'hover:-translate-y-1 hover:shadow-glow-sm hover:border-primary/20' : '';
  
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;
  
  return (
    <div className={combinedStyles}>
      {children}
    </div>
  );
};

export default Card;