'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, BadgeCheck, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TESTIMONIALS } from '@/constants/testimonials';
import { TestimonialCard } from '@/components/sections/shared/TestimonialCard';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';
import { StarRating } from '@/components/common/StarRating';

const CAROUSEL_INTERVAL = 5000;
const FEATURED_IDX = 2;

const FEATURED = TESTIMONIALS[FEATURED_IDX];
const CAROUSEL_ITEMS = TESTIMONIALS.filter((_, i) => i !== FEATURED_IDX);

const AVG_RATING = (
  TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
).toFixed(1);

function GoogleRatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Google Reviews
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {AVG_RATING}
            </span>
            <StarRating rating={parseFloat(AVG_RATING)} size="sm" />
          </div>
        </div>
      </div>

      <a
        href="https://maps.google.com/?q=ChillFix+AC+Service+Chennai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors shrink-0"
      >
        View Google Reviews
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </motion.div>
  );
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CAROUSEL_ITEMS.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, CAROUSEL_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          >
            <TestimonialCard
              testimonial={CAROUSEL_ITEMS[current]}
              variant="default"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5" role="tablist" aria-label="Review navigation">
          {CAROUSEL_ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === current
                  ? 'w-6 bg-primary-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700',
              )}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary-300 hover:text-primary-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary-300 hover:text-primary-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-slate-50 dark:bg-slate-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-base">

        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Google Reviews"
            title="What Customers Say"
            titleHighlight="About ChillFix"
            description="Reviews from homeowners and businesses across Perungalathur, Tambaram, and Chennai."
            align="left"
            className="max-w-xl"
          />
          <div className="shrink-0">
            <GoogleRatingBadge />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          <ScrollReveal className="lg:col-span-1" direction="left" delay={0.1}>
            <TestimonialCard
              testimonial={FEATURED}
              variant="featured"
              className="h-full"
            />
          </ScrollReveal>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {CAROUSEL_ITEMS.map((t, i) => (
                <ScrollReveal key={t.id} delay={0.1 + i * 0.07} direction="up">
                  <TestimonialCard
                    testimonial={t}
                    variant="default"
                    index={i}
                    className="h-full"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          <ScrollReveal direction="up">
            <TestimonialCard testimonial={FEATURED} variant="featured" />
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>

        <ScrollReveal direction="up" delay={0.2} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-100 bg-white px-8 py-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {AVG_RATING} / 5.0 Google Rating
              </span>
            </div>

            <div className="hidden h-6 w-px bg-slate-200 dark:bg-slate-700 sm:block" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-secondary-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Verified Service Reviews
              </span>
            </div>

            <div className="hidden h-6 w-px bg-slate-200 dark:bg-slate-700 sm:block" aria-hidden="true" />

            <a
              href="https://maps.google.com/?q=ChillFix+AC+Service+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-bold text-primary-500 underline-offset-2 hover:underline"
              aria-label="View Google Reviews for ChillFix AC Service"
            >
              View Google Reviews
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
