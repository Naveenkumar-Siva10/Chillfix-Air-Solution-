import Link from 'next/link';
import {
  Check,
  X,
  MessageCircle,
  PhoneCall,
  Sparkles,
  HelpCircle,
  Building2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { AMC_PLANS } from '@/constants/amc-plans';
import { CONTACT_DETAILS } from '@/constants/site';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { MiniAccordion } from '@/components/sections/pricing/MiniAccordion';
import type { AMCPlan } from '@/types/amc';

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

function PlanCard({ plan }: { plan: AMCPlan }) {
  const colors = COLOR_MAP[plan.color];
  const isCommercial = plan.price === 0;
  const whatsappMsg = `Hi! I'm interested in the ChillFix ${plan.name} AMC Plan. Please share more details.`;

  return (
    <div
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-soft transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-elevated dark:bg-slate-900',
        colors.border,
        plan.popular && 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-950',
      )}
    >
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
              <span className="font-display text-3xl font-extrabold text-white">Custom</span>
              <span className="text-sm font-medium text-white/70">/ custom quote</span>
            </div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold text-white">
                {formatPrice(plan.price)}
              </span>
              <span className="text-sm font-medium text-white/70">
                /{plan.period === 'year' ? 'year' : 'visit'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <ul className="space-y-3 mb-6" role="list">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-2.5 text-sm">
              {feature.included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600" aria-hidden="true" />
              )}
              <span
                className={cn(
                  feature.included
                    ? 'text-slate-700 dark:text-slate-200 font-medium'
                    : 'text-slate-400 dark:text-slate-500 line-through',
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={CONTACT_DETAILS.whatsapp.withMessage(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold shadow-md transition-all',
            colors.button,
          )}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {isCommercial ? 'Get Commercial Quote' : 'Choose Plan'}
        </a>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-padding bg-white dark:bg-slate-950"
      aria-labelledby="pricing-heading"
    >
      <div className="container-base">
        <SectionHeader
          eyebrow="AMC Plans"
          title="Annual Maintenance"
          titleHighlight="Contracts"
          description="Choose the right plan for your home or business. All plans include scheduled servicing, performance reports, and priority emergency support."
          className="mb-4"
        />

        {/* Value proposition strip */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {[
            '✓ No hidden charges',
            '✓ Cancel anytime',
            '✓ Transferable to new home',
            '✓ All brands covered',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* ── Plan cards grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {AMC_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* ── Commercial callout ── */}
        <div className="mt-8">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-white">
                Managing a building, hospital, school, or restaurant?
              </p>
              <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
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
        </div>

        {/* ── Mini FAQ ── */}
        <div className="mt-16">
          <SectionHeader
            eyebrow="Common Questions"
            title="Pricing"
            titleHighlight="FAQs"
            description="Quick answers to the most common questions about our plans and pricing."
            className="mb-8"
          />
          <div>
            <MiniAccordion />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 underline-offset-2 hover:underline"
            >
              See all FAQs
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
