'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS } from '@/constants/site';

interface PhoneButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  /** Show pulsing dot to indicate availability */
  showAvailability?: boolean;
}

/**
 * Call Now phone button.
 * Links to tel: for mobile users to call directly.
 */
export function PhoneButton({
  variant = 'solid',
  size = 'md',
  label,
  className,
  showAvailability = false,
}: PhoneButtonProps) {
  const href = CONTACT_DETAILS.phone.href;

  const sizeClasses = {
    sm: 'gap-1.5 px-3 py-1.5 text-sm',
    md: 'gap-2 px-5 py-2.5 text-sm font-semibold',
    lg: 'gap-2.5 px-7 py-3.5 text-base font-semibold',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const variantClasses = {
    solid: cn(
      'bg-primary-500 text-white shadow-md shadow-primary-500/25',
      'hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30',
    ),
    outline: cn(
      'border-2 border-primary-500 text-primary-500',
      'hover:bg-primary-500 hover:text-white',
    ),
    ghost: cn(
      'text-primary-500',
      'hover:bg-primary-50 dark:hover:bg-primary-950',
    ),
  };

  return (
    <Link
      href={href}
      aria-label={label ?? `Call ${CONTACT_DETAILS.phone.display}`}
      className={cn(
        'relative inline-flex items-center rounded-xl',
        'transition-all duration-200 active:scale-95',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {showAvailability && (
        <span
          className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-500 ring-2 ring-white dark:ring-slate-900"
          aria-label="Available now"
        >
          <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75" />
        </span>
      )}
      <Phone className={cn(iconSizes[size])} aria-hidden="true" />
      {label ?? 'Call Now'}
    </Link>
  );
}
