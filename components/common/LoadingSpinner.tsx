'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-[3px]',
};

/**
 * Accessible loading spinner with ARIA label support.
 */
export function LoadingSpinner({ size = 'md', className, label = 'Loading…' }: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('flex items-center justify-center', className)}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-slate-200 border-t-primary-500',
          sizeMap[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Full-page loading overlay with fade animation.
 */
export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-sm font-medium text-slate-500">Loading…</p>
      </div>
    </motion.div>
  );
}
