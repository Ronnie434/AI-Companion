import React from 'react';
import type { BadgeProps } from '../../types';

const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
}) => {
  const baseStyles = 'rounded-full py-1 px-4 border border-primary/20 bg-primary/5 text-primary uppercase tracking-widest text-xs font-medium';
  
  const combinedStyles = `${baseStyles} ${className}`;
  
  return (
    <span className={combinedStyles}>
      {children}
    </span>
  );
};

export default Badge;