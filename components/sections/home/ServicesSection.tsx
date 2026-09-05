'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from '@/constants/services';
import { ServiceCard } from '@/components/sections/services/ServiceCard';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { CONTACT_DETAILS } from '@/constants/site';

// ─────────────────────────────────────────────────────────────
// How many cards to show before "See All"
// ─────────────────────────────────────────────────────────────
const DEFAULT_VISIBLE = 6;

// ─────────────────────────────────────────────────────────────
// Category filter tab button
// ─────────────────────────────────────────────────────────────
interface FilterTabProps {
  label: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}

function FilterTab({ label, isActive, count, onClick }: FilterTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold',
        'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
        isActive
          ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700',
      )}
    >
      {label}
      <span
        className={cn(
          'flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1 text-xs font-bold',
          isActive
            ? 'bg-white/25 text-white'
            : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400',
        )}
        aria-label={`${count} services`}
      >
        {count}
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Services Section
// ─────────────────────────────────────────────────────────────
export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [showAll, setShowAll] = useState(false);

  // Filter + memoize
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Count per category (for badges)
  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: SERVICES.length };
    for (const s of SERVICES) {
      counts[s.category] = (counts[s.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  // Reset showAll when category changes
  const handleCategoryChange = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, DEFAULT_VISIBLE);
  const hasMore = filteredServices.length > DEFAULT_VISIBLE && !showAll;

  return (
    <section
      id="services"
      className="section-padding bg-slate-50 dark:bg-slate-950"
      aria-labelledby="services-heading"
    >
      <div className="container-base">

        {/* ── Section Header ── */}
        <SectionHeader
          eyebrow="Our Services"
          title="Complete AC Solutions"
          titleHighlight="for Chennai"
          description="From installation to annual maintenance — our certified technicians handle all AC brands and types across 25+ areas in Chennai. Transparent pricing, same-day service available."
          className="mb-10"
        />

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filter services by category"
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <FilterTab
              key={cat.id}
              label={cat.label}
              isActive={activeCategory === cat.id}
              count={countByCategory[cat.id] ?? 0}
              onClick={() => handleCategoryChange(cat.id as ServiceCategory)}
            />
          ))}
        </motion.div>

        {/* ── Services Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {filteredServices.length === 0 ? (
              <div className="py-20 text-center text-slate-500">
                No services found in this category.
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence>
                    {visibleServices.map((service, i) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        variant="default"
                        index={i}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Show All / Collapse */}
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-10 flex justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white px-8 py-3 text-sm font-semibold text-primary-600 transition-all hover:border-primary-500 hover:bg-primary-50 dark:border-primary-800 dark:bg-slate-900 dark:text-primary-400"
                    >
                      Show all {filteredServices.length} services
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Not sure which service you need?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Call us for a free diagnosis — our technician will identify the problem at no cost.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT_DETAILS.phone.href}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-primary-600 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl active:scale-[0.98]"
              aria-label="Call for free diagnosis"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Free Diagnosis Call
            </a>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-white bg-white/25 px-6 py-3 text-sm font-extrabold text-white shadow-md backdrop-blur-sm transition-all hover:bg-white/40"
            >
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
