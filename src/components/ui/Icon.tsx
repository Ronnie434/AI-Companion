import React from 'react';
import type { IconProps } from '../../types';

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
}) => {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};

export default Icon;