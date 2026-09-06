'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { StarRating } from '@/components/common/StarRating';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  index?: number;
  variant?: 'default' | 'featured';
}

/**
 * Testimonial card with star rating, quote, and customer metadata.
 * Used in the home page slider and testimonials page grid.
 */
export function TestimonialCard({
  testimonial,
  className,
  index = 0,
  variant = 'default',
}: TestimonialCardProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          'relative overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-500 to-secondary-500 p-8 text-white shadow-primary',
          className,
        )}
      >
        <Quote
          className="absolute -right-4 -top-4 h-24 w-24 rotate-180 text-white/10"
          aria-hidden="true"
        />
        <StarRating rating={testimonial.rating} className="mb-4" />
        <blockquote className="mb-6 text-lg leading-relaxed text-white/95">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              {testimonial.verified && (
                <BadgeCheck className="h-4 w-4 text-secondary-300" aria-label="Verified customer" />
              )}
            </div>
            <p className="text-sm text-white/75">{testimonial.location}</p>
          </div>
        </div>
        <div className="mt-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 w-fit">
          {testimonial.service}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6',
        'shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
        'dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
    >
      {/* Quote icon */}
      <Quote
        className="absolute right-5 top-5 h-8 w-8 text-primary-100 transition-colors group-hover:text-primary-200 dark:text-slate-800"
        aria-hidden="true"
      />

      {/* Rating */}
      <StarRating rating={testimonial.rating} className="mb-4" />

      {/* Review text */}
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-600 dark:bg-primary-950 dark:text-primary-400">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </p>
            {testimonial.verified && (
              <BadgeCheck
                className="h-4 w-4 shrink-0 text-secondary-500"
                aria-label="Verified customer"
              />
            )}
          </div>
          <p className="truncate text-xs text-slate-500">{testimonial.location}</p>
        </div>
        <div className="ml-auto shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {testimonial.service}
        </div>
      </div>
    </motion.div>
  );
}
