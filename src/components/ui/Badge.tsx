import React from 'react';
import type { BadgeProps } from '../../types';

const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
}) => {
  const baseStyles = 'rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary';
  
  const combinedStyles = `${baseStyles} ${className}`;
  
  return (
    <span className={combinedStyles}>
      {children}
    </span>
  );
};

export default Badge;