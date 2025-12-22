import type { ReactNode, InputHTMLAttributes } from 'react';

// Content types
export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface PrivacyPoint {
  text: string;
}

// Component prop types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}