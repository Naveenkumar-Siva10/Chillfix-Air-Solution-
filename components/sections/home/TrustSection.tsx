import {
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Wrench,
  ThumbsUp,
  PhoneCall,
  Search,
  ClipboardCheck,
  Star,
  Zap,
  CalendarDays,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';

const STATS = [
  {
    value: '10+',
    suffix: 'Years',
    label: 'AC Service Experience',
    icon: CalendarDays,
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950/50',
  },
  {
    value: '4.9★',
    suffix: '',
    label: 'Google Rating',
    icon: Star,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
  },
  {
    value: 'Fast',
    suffix: '',
    label: 'Local Chennai Response',
    icon: Clock3,
    color: 'text-secondary-500',
    bg: 'bg-secondary-50 dark:bg-secondary-950/50',
  },
  {
    value: '100%',
    suffix: '',
    label: 'Upfront Transparent Pricing',
    icon: ThumbsUp,
    color: 'text-accent-600',
    bg: 'bg-accent-50 dark:bg-accent-950/50',
  },
] as const;

const WHY_US = [
  {
    icon: Clock3,
    title: 'Fast Local Service',
    description:
      'Prompt technician dispatch across Perungalathur, Tambaram, Vandalur, Manivakkam, Chromepet and nearby Chennai areas.',
    accent: 'bg-primary-500',
  },
  {
    icon: CalendarDays,
    title: '10+ Years Experience',
    description:
      'Over a decade of hands-on experience in Split, Window, and Inverter AC installation, repair, and gas refilling.',
    accent: 'bg-secondary-500',
  },
  {
    icon: ShieldCheck,
    title: 'Service Warranty',
    description:
      'We stand behind our repair work with a written service warranty on spare parts and labor.',
    accent: 'bg-accent-500',
  },
  {
    icon: Wrench,
    title: 'Multiple AC Brands Supported',
    description:
      'Daikin, LG, Voltas, Blue Star, Samsung, Carrier, Hitachi, Panasonic, Mitsubishi — we service all major brands.',
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
    title: '4.9★ Google Rating',
    description:
      'Genuine customer reviews from homeowners and businesses who trust ChillFix AC Service in Chennai.',
    accent: 'bg-amber-500',
  },
] as const;

const PROCESS_STEPS = [
  {
    step: 1,
    icon: PhoneCall,
    title: 'Call or WhatsApp',
    description: 'Reach us by phone or WhatsApp. Describe your AC issue and get an initial estimate.',
  },
  {
    step: 2,
    icon: Zap,
    title: 'Fast Dispatch',
    description: 'We dispatch a technician to your location across Perungalathur, Tambaram & Chennai.',
  },
  {
    step: 3,
    icon: Search,
    title: 'On-Site Diagnosis',
    description: 'The technician inspects your AC thoroughly and gives you a clear quote before starting.',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Fix & Warranty',
    description: 'Repair completed with genuine parts. You get a service warranty on the completed job.',
  },
] as const;

function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map(({ value, suffix, label, icon: Icon, color, bg }) => (
        <div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <span className={cn('flex h-12 w-12 items-center justify-center rounded-2xl', bg)}>
            <Icon className={cn('h-6 w-6', color)} aria-hidden="true" />
          </span>
          <div>
            <p className={cn('font-display text-3xl font-bold md:text-4xl', color)}>
              {value}{suffix}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhyUsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {WHY_US.map(({ icon: Icon, title, description, accent }) => (
        <div key={title} className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900">
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
      ))}
    </div>
  );
}

function ProcessSteps() {
  return (
    <div className="relative">
      <div
        className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800 lg:block"
        aria-hidden="true"
      />

      <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map(({ step, icon: Icon, title, description }) => (
          <div key={step} className="flex flex-col items-center gap-4 text-center">
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
        ))}
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section
      id="why-us"
      className="section-padding bg-white dark:bg-slate-950"
      aria-labelledby="trust-heading"
    >
      <div className="container-base space-y-20">

        {/* 1. Stats */}
        <div>
          <SectionHeader
            eyebrow="10+ Years Experience"
            title="Trusted AC Service"
            titleHighlight="in Chennai"
            description="Based in Perungalathur, serving customers across Chennai and nearby areas with transparent pricing and reliable service."
            className="mb-12"
          />
          <StatsRow />
        </div>

        {/* 2. Why Choose Us */}
        <div>
          <SectionHeader
            eyebrow="Why ChillFix"
            title="Reasons to"
            titleHighlight="Choose Us"
            description="Here is why homeowners and businesses across Chennai trust ChillFix AC Service."
            className="mb-12"
          />
          <WhyUsGrid />
        </div>

        {/* 3. How It Works */}
        <div>
          <SectionHeader
            eyebrow="Our Process"
            title="Service in"
            titleHighlight="4 Simple Steps"
            description="Getting your AC serviced or repaired is easy and transparent."
            className="mb-14"
          />
          <ProcessSteps />
        </div>

        {/* 4. Service Area Strip */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Serving Chennai &amp; Nearby Areas
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Perungalathur', 'Tambaram', 'Vandalur', 'Manivakkam', 'Chromepet',
              'Pallavaram', 'Mudichur', 'Selaiyur', 'Chitlapakkam', 'Pammal',
              'Medavakkam', 'Sholinganallur', 'OMR', 'Anna Nagar', 'Adyar',
              'Velachery', 'Porur', 'Guindy', 'Mylapore', 'Vadapalani',
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {area} AC Service
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
