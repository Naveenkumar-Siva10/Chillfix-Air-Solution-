'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  MessageCircle,
  PhoneCall,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { AMC_PLANS } from '@/constants/amc-plans';
import { FAQS } from '@/constants/faqs';
import { CONTACT_DETAILS } from '@/constants/site';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/sections/shared/ScrollReveal';
import type { AMCPlan } from '@/types/amc';

// ─────────────────────────────────────────────────────────────
// Color map for plan accents
// ─────────────────────────────────────────────────────────────
const COLOR_MAP = {
  blue: {
    border: 'border-blue-200 dark:border-blue-800',
    header: 'from-blue-500 to-blue-700',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    icon: 'text-blue-500',
    button: 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/25',
  },
  primary: {
    border: 'border-primary-300 dark:border-primary-700',
    header: 'from-primary-500 to-primary-700',
    badge: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
    icon: 'text-primary-500',
    button: 'bg-primary-500 hover:bg-primary-600 text-white shadow-primary-500/25',
  },
  gold: {
    border: 'border-amber-300 dark:border-amber-700',
    header: 'from-amber-500 to-orange-600',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    icon: 'text-amber-500',
    button: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25',
  },
  slate: {
    border: 'border-slate-200 dark:border-slate-700',
    header: 'from-slate-600 to-slate-800',
    badge: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    icon: 'text-slate-500',
    button: 'bg-slate-700 hover:bg-slate-800 text-white shadow-slate-700/25',
  },
} as const;

// ─────────────────────────────────────────────────────────────
// Individual Plan Card
// ─────────────────────────────────────────────────────────────
function PlanCard({ plan, index }: { plan: AMCPlan; index: number }) {
  const colors = COLOR_MAP[plan.color];
  const isCommercial = plan.price === 0;
  const whatsappMsg = `Hi! I'm interested in the ChillFix ${plan.name} AMC Plan. Please share more details.`;

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <div
        className={cn(
          'relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-soft transition-all duration-300',
          'hover:-translate-y-1 hover:shadow-elevated dark:bg-slate-900',
          colors.border,
          plan.popular && 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-950',
        )}
      >
        {/* Popular badge */}
        {plan.popular && (
          <div className="absolute right-5 top-0 z-10">
            <span className="flex items-center gap-1 rounded-b-xl bg-primary-500 px-3 py-1.5 text-xs font-bold text-white shadow-md">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Most Popular
            </span>
          </div>
        )}

        {/* Header */}
        <div className={cn('bg-gradient-to-br px-6 pb-5 pt-6', colors.header)}>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            {plan.tagline}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white">
            {plan.name}
          </h3>

          {/* Price */}
          <div className="mt-4">
            {isCommercial ? (
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-white">Custom</span>
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">
                  {formatPrice(plan.price)}
                </span>
                {plan.pricePerUnit && (
                  <span className="text-sm text-white/70">/unit/year</span>
                )}
              </div>
            )}
            <p className="mt-1 text-xs text-white/60">{plan.description}</p>
          </div>
        </div>

        {/* Feature list */}
        <ul className="flex-1 space-y-3 px-6 py-5">
          {plan.features.map(({ label, value, included }) => (
            <li key={label} className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  included
                    ? 'bg-accent-100 dark:bg-accent-900'
                    : 'bg-slate-100 dark:bg-slate-800',
                )}
                aria-hidden="true"
              >
                {included ? (
                  <Check className="h-3 w-3 text-accent-600 dark:text-accent-400" />
                ) : (
                  <X className="h-3 w-3 text-slate-400" />
                )}
              </span>
              <span
                className={cn(
                  'text-sm',
                  included
                    ? 'text-slate-700 dark:text-slate-300'
                    : 'text-slate-400 dark:text-slate-600',
                )}
              >
                <span className="font-medium">{label}</span>
                {included && value && (
                  <span className={cn('ml-1.5 text-xs font-semibold', colors.icon)}>
                    — {value}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="px-6 pb-6">
          {isCommercial ? (
            <a
              href={CONTACT_DETAILS.phone.href}
              className={cn(
                'flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5',
                'text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
                colors.button,
              )}
              aria-label="Call for commercial AMC quote"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {plan.cta}
            </a>
          ) : (
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5',
                'text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
                colors.button,
              )}
              aria-label={`WhatsApp to enquire about ${plan.name} AMC plan`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {plan.cta}
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────
// Mini FAQ accordion (Pricing-specific FAQs)
// ─────────────────────────────────────────────────────────────
const PRICING_FAQS = FAQS.filter((f) =>
  ['pricing', 'amc', 'payment', 'warranty'].includes(f.category),
).slice(0, 4);

function MiniAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
      {PRICING_FAQS.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              className="flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
            >
              <HelpCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-400"
                aria-hidden="true"
              />
              <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              ) : (
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              )}
            </button>
            <motion.div
              id={`faq-answer-${faq.id}`}
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 pl-15 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Pricing Section Root
// ─────────────────────────────────────────────────────────────
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-padding bg-white dark:bg-slate-950"
      aria-labelledby="pricing-heading"
    >
      <div className="container-base">

        {/* ── Header ── */}
        <SectionHeader
          eyebrow="AMC Plans"
          title="Annual Maintenance"
          titleHighlight="Contracts"
          description="Choose the right plan for your home or business. All plans include scheduled servicing, performance reports, and priority emergency support."
          className="mb-4"
        />

        {/* Value proposition strip */}
        <ScrollReveal delay={0.15} direction="up">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {[
              '✓ No hidden charges',
              '✓ Cancel anytime',
              '✓ Transferable to new home',
              '✓ All brands covered',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Plan cards grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {AMC_PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Commercial callout ── */}
        <ScrollReveal delay={0.2} direction="up" className="mt-8">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-white">
                Managing a building, hospital, school, or restaurant?
              </p>
              <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                We design custom AMC contracts for 5+ units with a dedicated technician, SLA guarantees, and monthly performance reports.
              </p>
            </div>
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage(
                'Hi! I need a commercial AMC quote for multiple AC units. Please help.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-2xl bg-primary-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-600 hover:-translate-y-0.5"
              aria-label="WhatsApp for commercial AMC quote"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Get Custom Quote
            </a>
          </div>
        </ScrollReveal>

        {/* ── Mini FAQ ── */}
        <div className="mt-16">
          <SectionHeader
            eyebrow="Common Questions"
            title="Pricing"
            titleHighlight="FAQs"
            description="Quick answers to the most common questions about our plans and pricing."
            className="mb-8"
          />
          <StaggerContainer staggerDelay={0.07}>
            <StaggerItem>
              <MiniAccordion />
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.15} direction="up" className="mt-6 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 underline-offset-2 hover:underline"
            >
              See all FAQs
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
