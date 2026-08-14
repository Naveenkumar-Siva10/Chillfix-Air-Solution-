'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  /** Size variant: 'default' | 'lg' */
  size?: 'default' | 'lg';
}

/**
 * Reusable section header with animated eyebrow, gradient title, and description.
 * Used consistently across all page sections.
 */
export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
  className,
  size = 'default',
}: SectionHeaderProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50 px-4 py-1.5 text-sm font-semibold text-primary-500 dark:border-secondary-800 dark:bg-secondary-950 dark:text-secondary-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'font-display font-bold tracking-tight text-slate-900 dark:text-white',
          size === 'default' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl',
        )}
      >
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'text-slate-600 dark:text-slate-400',
            size === 'default' ? 'max-w-2xl text-base md:text-lg' : 'max-w-3xl text-lg md:text-xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
