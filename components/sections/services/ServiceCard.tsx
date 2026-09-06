'use client';

import Link from 'next/link';
import {
  AirVent,
  Square,
  LayoutGrid,
  Columns,
  Building2,
  Wrench,
  ArrowDownToLine,
  Droplets,
  Thermometer,
  Droplet,
  CircuitBoard,
  Cog,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn, formatPrice, getServiceUrl } from '@/lib/utils';
import type { Service } from '@/types';

// Maps string icon names from the data layer to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  AirVent,
  Square,
  LayoutGrid,
  Columns,
  Building2,
  Wrench,
  ArrowDownToLine,
  Droplets,
  Thermometer,
  Droplet,
  Circuit: CircuitBoard,
  Cog,
  Sparkles,
  CalendarCheck,
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  index?: number;
}

/**
 * Service card component used in the services overview grid and service listing page.
 * Supports three visual variants for different layout contexts.
 */
export function ServiceCard({ service, variant = 'default', className, index = 0 }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? AirVent;
  const serviceHref = getServiceUrl(service.slug);

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Link
          href={serviceHref}
          className={cn(
            'group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4',
            'shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-card',
            'dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-900',
            className,
          )}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-primary-950 dark:text-primary-400">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{service.name}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Starting from <strong className="text-primary-600 dark:text-primary-400">{formatPrice(service.startingPrice)}</strong>
              </span>
              {service.duration && (
                <span className="text-slate-500 dark:text-slate-400">({service.duration})</span>
              )}
            </div>
          </div>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-500" aria-hidden="true" />
        </Link>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn('group relative', className)}
      >
        <Link
          href={serviceHref}
          className="block rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Popular badge */}
          {service.popular && (
            <span className="absolute -right-3 -top-3 z-10 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-md">
              Popular
            </span>
          )}

          {/* Icon header */}
          <div className="gradient-primary flex h-24 items-center justify-start gap-4 rounded-t-3xl px-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/90">
                {service.category}
              </p>
              <p className="text-lg font-bold text-white leading-tight">{service.name}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="mb-5 text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
              {service.shortDescription}
            </p>

            {/* Features */}
            <ul className="mb-6 space-y-2">
              {service.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Structured Metadata Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Starting from</span>
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">{formatPrice(service.startingPrice)}</p>
              </div>
              {service.duration && (
                <div className="text-right">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Duration</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{service.duration}</p>
                </div>
              )}
              {service.warranty && (
                <div className="text-right">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Warranty</span>
                  <p className="text-xs font-semibold text-accent-600 dark:text-accent-400">{service.warranty}</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn('group', className)}
    >
      <Link
        href={serviceHref}
        className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-card dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-900"
      >
        {/* Icon */}
        <div className="mb-4 flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white dark:bg-primary-950">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          {service.popular && (
            <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
              Popular
            </span>
          )}
        </div>

        {/* Text */}
        <h3 className="mb-2 text-base font-bold text-slate-900 group-hover:text-primary-500 dark:text-white dark:group-hover:text-primary-400">
          {service.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
          {service.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs dark:border-slate-800">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Starting from</span>
            <span className="font-extrabold text-primary-600 dark:text-primary-400 text-sm">
              {formatPrice(service.startingPrice)}
            </span>
          </div>
          {service.duration && (
            <div className="text-right">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Duration</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{service.duration}</span>
            </div>
          )}
          {service.warranty && (
            <div className="text-right">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Warranty</span>
              <span className="font-semibold text-accent-600 dark:text-accent-400 text-xs">{service.warranty}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
