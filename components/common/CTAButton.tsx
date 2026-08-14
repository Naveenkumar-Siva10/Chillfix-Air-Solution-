'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type CTAVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'white';
type CTASize = 'sm' | 'md' | 'lg' | 'xl';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CTAVariant;
  size?: CTASize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<CTAVariant, string> = {
  primary: [
    'bg-primary-500 text-white',
    'hover:bg-primary-600',
    'shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30',
    'active:bg-primary-700',
  ].join(' '),
  secondary: [
    'bg-secondary-400 text-white',
    'hover:bg-secondary-500',
    'shadow-md shadow-secondary-400/20',
  ].join(' '),
  accent: [
    'bg-accent-500 text-white',
    'hover:bg-accent-600',
    'shadow-md shadow-accent-500/25',
  ].join(' '),
  outline: [
    'border-2 border-primary-500 text-primary-500 bg-transparent',
    'hover:bg-primary-500 hover:text-white',
  ].join(' '),
  ghost: [
    'text-primary-500 bg-transparent',
    'hover:bg-primary-50 dark:hover:bg-primary-950/50',
  ].join(' '),
  white: [
    'bg-white text-primary-500',
    'hover:bg-slate-50',
    'shadow-md',
  ].join(' '),
};

const sizeStyles: Record<CTASize, string> = {
  sm: 'h-9 gap-1.5 px-4 text-sm',
  md: 'h-11 gap-2 px-6 text-sm font-semibold',
  lg: 'h-13 gap-2.5 px-8 text-base font-semibold',
  xl: 'h-14 gap-3 px-10 text-lg font-bold',
};

/**
 * Brand-specific CTA button component.
 * For navigation actions, use standard <a> or <Link>.
 * For form submissions and modal triggers, use CTAButton.
 */
export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          'active:scale-[0.98]',
          'disabled:cursor-not-allowed disabled:opacity-60',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  },
);

CTAButton.displayName = 'CTAButton';
