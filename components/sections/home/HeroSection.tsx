'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
  Clock,
  Star,
  Zap,
  BadgeCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { useBooking } from '@/hooks/useBooking';
import { BookingModal } from '@/components/common/BookingModal';

// ─────────────────────────────────────────────────────────────
// Rotating headline words
// ─────────────────────────────────────────────────────────────
const HEADLINE_WORDS = [
  'Installation',
  'Repair',
  'Gas Filling',
  'Deep Cleaning',
  'Maintenance',
] as const;

// ─────────────────────────────────────────────────────────────
// Trust badges shown beneath the headline
// ─────────────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: ShieldCheck, label: '10+ Years Experience', color: 'text-secondary-400' },
  { icon: Star, label: '4.9★ Google Rating', color: 'text-amber-400' },
  { icon: Clock, label: '< 2 Hour Response', color: 'text-accent-400' },
  { icon: BadgeCheck, label: 'Certified Technicians', color: 'text-primary-300' },
] as const;

// ─────────────────────────────────────────────────────────────
// Statistics row
// ─────────────────────────────────────────────────────────────
const STATS = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Expert Technicians' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Emergency Service' },
] as const;

// ─────────────────────────────────────────────────────────────
// Framer Motion variants
// ─────────────────────────────────────────────────────────────
const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay },
});


// ─────────────────────────────────────────────────────────────
// Rotating Word component
// ─────────────────────────────────────────────────────────────
function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HEADLINE_WORDS.length);
        setIsVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300',
        'bg-gradient-to-r from-secondary-300 to-accent-400 bg-clip-text text-transparent',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3',
      )}
      aria-live="polite"
      aria-label={`AC ${HEADLINE_WORDS[index]}`}
    >
      {HEADLINE_WORDS[index]}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Scroll indicator
// ─────────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      {...fadeIn(1.6)}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-white/50">
        Scroll
      </span>
      <motion.div
        className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5"
        aria-hidden="true"
      >
        <motion.div
          className="h-2 w-1 rounded-full bg-white/60"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating Service Tag component
// ─────────────────────────────────────────────────────────────
function FloatingTag({
  label,
  className,
  delay,
}: {
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={cn(
        'absolute hidden rounded-2xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur-md',
        'text-sm font-semibold text-white shadow-lg xl:flex items-center gap-2',
        className,
      )}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: 'backOut' }}
    >
      <Zap className="h-3.5 w-3.5 text-accent-400 shrink-0" aria-hidden="true" />
      {label}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero Section Root
// ─────────────────────────────────────────────────────────────
export function HeroSection() {
  const { isOpen, preselectedService, openBooking, closeBooking } = useBooking();

  const handleBookNow = useCallback(() => openBooking(), [openBooking]);

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col overflow-hidden"
        aria-label="Hero — ChillFix Air Solution"
      >
        {/* ── Background layers ── */}

        {/* Deep gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #061e35 0%, #0F4C81 45%, #1a6fba 75%, #0e3d6a 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero image — right side, partially overlapping */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]" aria-hidden="true">
          <Image
            src="/images/hero-technician.jpg"
            alt="Professional AC service technician"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Left gradient blend on desktop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0F4C81 0%, rgba(15,76,129,0.85) 30%, rgba(15,76,129,0.4) 60%, transparent 100%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #061e35 0%, transparent 40%)',
            }}
          />
        </div>

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* ── Floating tags (ultra-wide screens, positioned on right side image area) ── */}
        <FloatingTag label="Split AC Experts" className="right-[24%] top-[22%] hidden 2xl:flex z-10" delay={0.9} />
        <FloatingTag label="Same Day Service" className="right-[8%] bottom-[28%] hidden 2xl:flex z-10" delay={1.1} />
        <FloatingTag label="Free Diagnosis" className="right-[4%] top-[32%] hidden 2xl:flex z-10" delay={1.3} />

        {/* ── Main content ── */}
        <div className="container-base relative z-10 flex flex-1 flex-col justify-center pt-20 pb-8 lg:pt-28">
          <div className="max-w-2xl">

            {/* Emergency badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-sm font-semibold text-accent-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                24/7 Emergency AC Repair — Chennai
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              {...fadeUp(0.25)}
              className="mb-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Chennai&rsquo;s #1 AC
              <br />
              <RotatingWord />
              <br />
              <span className="text-white">Specialists</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Certified technicians for all brands — Samsung, LG, Daikin, Voltas &amp; more.
              Fast response across 25+ areas in Chennai. Transparent pricing, no hidden charges.
            </motion.p>

            {/* Trust badges row */}
            <motion.div
              {...fadeUp(0.5)}
              className="mb-8 flex flex-wrap gap-x-5 gap-y-2"
            >
              {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className={cn('h-4 w-4 shrink-0', color)} aria-hidden="true" />
                  <span className="text-sm font-medium text-white/85">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Primary CTAs */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              {/* Call Now — largest CTA */}
              <a
                href={CONTACT_DETAILS.phone.href}
                className={cn(
                  'group flex items-center justify-center gap-2.5 rounded-2xl',
                  'bg-white px-7 py-4 text-base font-bold text-primary-600',
                  'shadow-xl shadow-black/20 transition-all duration-200',
                  'hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                )}
                aria-label={`Call ${CONTACT_DETAILS.phone.display} — Free Diagnosis`}
              >
                <Phone className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                Call Now — Free Diagnosis
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage(
                  'Hi! I need AC service in Chennai. Please help.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex items-center justify-center gap-2.5 rounded-2xl',
                  'bg-[#25D366] px-7 py-4 text-base font-bold text-white',
                  'shadow-xl shadow-black/20 transition-all duration-200',
                  'hover:bg-[#1ebe5a] hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                )}
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                WhatsApp Us
              </a>

              {/* Book Service */}
              <button
                type="button"
                onClick={handleBookNow}
                className={cn(
                  'group flex items-center justify-center gap-2.5 rounded-2xl',
                  'border-2 border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white',
                  'backdrop-blur-sm transition-all duration-200',
                  'hover:border-white/60 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                )}
                aria-label="Book an AC service appointment"
              >
                <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                Book Service
              </button>
            </motion.div>

            {/* Phone number display */}
            <motion.p {...fadeUp(0.75)} className="mt-5 text-sm text-white/50">
              📞 {CONTACT_DETAILS.phone.display} &nbsp;·&nbsp;{' '}
              ✉️ {SITE_CONFIG.email}
            </motion.p>
          </div>
        </div>

        {/* ── Stats strip at bottom ── */}
        <motion.div
          className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="container-base py-5">
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {value}
                  </dt>
                  <dd className="mt-0.5 text-xs font-medium text-white/60 sm:text-sm">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* ── Scroll indicator — absolute bottom center ── */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden lg:flex">
          <ScrollIndicator />
        </div>

        {/* ── Decorative blobs ── */}
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(0,200,83,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />
      </section>

      {/* Booking modal */}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        preselectedService={preselectedService}
      />
    </>
  );
}
