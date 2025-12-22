import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const baseStyles = 'rounded-3xl bg-white/[0.03] border border-white/5 transition-all duration-300';
  const hoverStyles = hover ? 'hover:bg-white/[0.06]' : '';
  
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;
  
  return (
    <div className={combinedStyles}>
      {children}
    </div>
  );
};

export default Card;