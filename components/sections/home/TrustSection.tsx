'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  HeartHandshake,
  Wrench,
  ThumbsUp,
  PhoneCall,
  Search,
  ClipboardCheck,
  Star,
  Users,
  Zap,
  CalendarDays,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/sections/shared/AnimatedCounter';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/sections/shared/ScrollReveal';

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────

const STATS = [
  {
    end: 10000,
    suffix: '+',
    label: 'Happy Customers',
    icon: Users,
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950/50',
  },
  {
    end: 11,
    suffix: '+',
    label: 'Years of Experience',
    icon: CalendarDays,
    color: 'text-secondary-500',
    bg: 'bg-secondary-50 dark:bg-secondary-950/50',
  },
  {
    end: 50,
    suffix: '+',
    label: 'Certified Technicians',
    icon: BadgeCheck,
    color: 'text-accent-600',
    bg: 'bg-accent-50 dark:bg-accent-950/50',
  },
  {
    end: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: ThumbsUp,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
  },
] as const;

const WHY_US = [
  {
    icon: Clock3,
    title: 'Fast Response',
    description:
      'We arrive within 2 hours of your call. Same-day service guaranteed for most repairs across 25+ Chennai locations.',
    accent: 'bg-primary-500',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    description:
      'Every technician is brand-certified, trained on the latest AC models, and background-verified for your safety.',
    accent: 'bg-secondary-500',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty on All Work',
    description:
      'We stand behind every job with a 30–90 day service warranty. If the issue returns, we fix it at no extra cost.',
    accent: 'bg-accent-500',
  },
  {
    icon: Wrench,
    title: 'All Brands Supported',
    description:
      'Samsung, LG, Daikin, Voltas, Hitachi, Blue Star, Carrier, Mitsubishi — we service every major brand.',
    accent: 'bg-purple-500',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Pricing',
    description:
      'Upfront quotes before any work begins — no hidden charges, no surprise bills. You approve the cost first.',
    accent: 'bg-rose-500',
  },
  {
    icon: Star,
    title: '4.9★ Google Rated',
    description:
      'Hundreds of verified 5-star reviews from Chennai homeowners and businesses who trust ChillFix every day.',
    accent: 'bg-amber-500',
  },
] as const;

const PROCESS_STEPS = [
  {
    step: 1,
    icon: PhoneCall,
    title: 'Call or WhatsApp',
    description: 'Reach us by phone or WhatsApp. Describe your AC issue and get an instant estimate.',
  },
  {
    step: 2,
    icon: Zap,
    title: 'Same-Day Dispatch',
    description: 'We dispatch a certified technician to your location within 2 hours — no waiting.',
  },
  {
    step: 3,
    icon: Search,
    title: 'Free Diagnosis',
    description: 'The technician inspects your AC thoroughly and gives you a detailed quote before starting.',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Fix & Warranty',
    description: 'Repair completed with genuine parts. You get a service warranty and a detailed job report.',
  },
] as const;

// ─────────────────────────────────────────────────────────────
// Stats Row
// ─────────────────────────────────────────────────────────────
function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map(({ end, suffix, label, icon: Icon, color, bg }, i) => (
        <ScrollReveal key={label} delay={i * 0.1} direction="up">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <span className={cn('flex h-12 w-12 items-center justify-center rounded-2xl', bg)}>
              <Icon className={cn('h-6 w-6', color)} aria-hidden="true" />
            </span>
            <div>
              <p className={cn('font-display text-3xl font-bold md:text-4xl', color)}>
                <AnimatedCounter end={end} suffix={suffix} duration={2000} />
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Why Choose Us Grid
// ─────────────────────────────────────────────────────────────
function WhyUsGrid() {
  return (
    <StaggerContainer
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      staggerDelay={0.08}
    >
      {WHY_US.map(({ icon: Icon, title, description, accent }) => (
        <StaggerItem key={title}>
          <div className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900">
            {/* Icon with coloured accent bar */}
            <div className="flex items-center gap-4">
              <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white', accent)}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

// ─────────────────────────────────────────────────────────────
// How It Works — Process Steps
// ─────────────────────────────────────────────────────────────
function ProcessSteps() {
  return (
    <div className="relative">
      {/* Connector line — desktop only */}
      <div
        className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800 lg:block"
        aria-hidden="true"
      />

      <StaggerContainer
        className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.12}
      >
        {PROCESS_STEPS.map(({ step, icon: Icon, title, description }) => (
          <StaggerItem key={step}>
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Circle with step number */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-500 shadow-md shadow-primary-500/30 dark:border-slate-900">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                  {step}
                </span>
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-bold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Trust Section Root — composes all three sub-sections
// ─────────────────────────────────────────────────────────────
export function TrustSection() {
  return (
    <section
      id="why-us"
      className="section-padding bg-white dark:bg-slate-950"
      aria-labelledby="trust-heading"
    >
      <div className="container-base space-y-20">

        {/* ── 1. Stats ── */}
        <div>
          <SectionHeader
            eyebrow="By the Numbers"
            title="Trusted by"
            titleHighlight="10,000+ Customers"
            description="Over a decade of reliable AC service across Chennai — our numbers reflect our commitment to quality and customer satisfaction."
            className="mb-12"
          />
          <StatsRow />
        </div>

        {/* ── 2. Why Choose Us ── */}
        <div>
          <SectionHeader
            eyebrow="Why ChillFix"
            title="6 Reasons to"
            titleHighlight="Choose Us"
            description="We don't just fix ACs — we build lasting relationships. Here's what sets ChillFix apart from every other AC service company in Chennai."
            className="mb-12"
          />
          <WhyUsGrid />
        </div>

        {/* ── 3. How It Works ── */}
        <div>
          <SectionHeader
            eyebrow="Our Process"
            title="Service in"
            titleHighlight="4 Simple Steps"
            description="Getting your AC fixed has never been easier. From your first call to the final warranty — we handle everything."
            className="mb-14"
          />
          <ProcessSteps />
        </div>

        {/* ── 4. Service Area Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            We Serve Across Chennai
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Anna Nagar', 'Adyar', 'Velachery', 'T. Nagar', 'Tambaram',
              'Porur', 'Nungambakkam', 'Vadapalani', 'Mylapore', 'Kilpauk',
              'Guindy', 'Sholinganallur', 'OMR', 'ECR', 'Chromepet',
              'Ambattur', 'Perambur', 'Egmore', 'Royapettah', 'Kolathur',
              'Perungudi', 'Poonamallee', 'Avadi', 'Pallavaram', '+ more',
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
