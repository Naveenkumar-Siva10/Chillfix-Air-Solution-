'use client';

import { useCallback } from 'react';
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
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { useBooking } from '@/hooks/useBooking';
import { BookingModal } from '@/components/common/BookingModal';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: '10+ Years Experience', color: 'text-secondary-400' },
  { icon: Star, label: '4.9★ Google Rating', color: 'text-amber-400' },
  { icon: Clock, label: 'Fast Local Response', color: 'text-accent-400' },
] as const;

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Upfront Quotes' },
  { value: '24/7', label: 'Emergency Support' },
] as const;

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

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
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: 'backOut' }}
    >
      <Zap className="h-3.5 w-3.5 text-accent-400 shrink-0" aria-hidden="true" />
      {label}
    </motion.div>
  );
}

export function HeroSection() {
  const { isOpen, preselectedService, openBooking, closeBooking } = useBooking();

  const handleBookNow = useCallback(() => openBooking(), [openBooking]);

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col overflow-hidden"
        aria-label="Hero — ChillFix AC Service in Chennai & Perungalathur"
      >
        {/* Deep gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #061e35 0%, #0F4C81 45%, #1a6fba 75%, #0e3d6a 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero image — right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]" aria-hidden="true">
          <Image
            src="/images/hero-technician.jpg"
            alt="ChillFix AC Service technician in Chennai"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0F4C81 0%, rgba(15,76,129,0.85) 30%, rgba(15,76,129,0.4) 60%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #061e35 0%, transparent 40%)',
            }}
          />
        </div>

        {/* Floating tags */}
        <FloatingTag label="Serving Perungalathur & Chennai" className="right-[24%] top-[22%] hidden 2xl:flex z-10" delay={0.9} />
        <FloatingTag label="Fast Local AC Repair" className="right-[8%] bottom-[28%] hidden 2xl:flex z-10" delay={1.1} />
        <FloatingTag label="Transparent Pricing" className="right-[4%] top-[32%] hidden 2xl:flex z-10" delay={1.3} />

        {/* Main content */}
        <div className="container-base relative z-10 flex flex-1 flex-col justify-center pt-20 pb-8 lg:pt-28">
          <div className="max-w-2xl">

            {/* Emergency badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-sm font-semibold text-accent-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                24/7 AC Service &amp; Repair — Chennai &amp; Perungalathur
              </span>
            </motion.div>

            {/* Exact H1 requested by Task 2 */}
            <motion.h1
              {...fadeUp(0.25)}
              className="mb-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-sm"
            >
              AC Service &amp; Repair in Chennai
            </motion.h1>

            {/* Exact Supporting Text requested by Task 2 */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-slate-100 font-medium"
            >
              ChillFix AC Service provides professional AC servicing, repair, cleaning, deep cleaning, gas leak diagnosis, gas filling and installation across Chennai, with strong service coverage around Perungalathur, Tambaram, Vandalur, Manivakkam, Chromepet and nearby areas.
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
              <a
                href={CONTACT_DETAILS.phone.href}
                className={cn(
                  'group flex items-center justify-center gap-2.5 rounded-2xl',
                  'bg-white px-7 py-4 text-base font-bold text-primary-600',
                  'shadow-xl shadow-black/20 transition-all duration-200',
                  'hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                )}
                aria-label={`Call ${CONTACT_DETAILS.phone.display} for AC service in Chennai`}
              >
                <Phone className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                Call Now — Free Diagnosis
              </a>

              <a
                href={CONTACT_DETAILS.whatsapp.withMessage(
                  'Hi ChillFix! I need AC service / repair in Chennai. Please assist me.',
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
                aria-label="Chat with us on WhatsApp for AC service"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                WhatsApp Us
              </a>

              <button
                type="button"
                onClick={handleBookNow}
                className={cn(
                  'group flex items-center justify-center gap-2.5 rounded-2xl',
                  'border-2 border-white bg-white/25 px-7 py-4 text-base font-extrabold text-white',
                  'shadow-lg backdrop-blur-sm transition-all duration-200',
                  'hover:bg-white/40 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                )}
                aria-label="Book an AC service appointment in Chennai"
              >
                <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                Book Service
              </button>
            </motion.div>

            {/* Contact row */}
            <motion.p {...fadeUp(0.75)} className="mt-5 text-sm font-semibold text-slate-100">
              📞 <a href={CONTACT_DETAILS.phone.href} className="hover:underline font-extrabold text-white">{CONTACT_DETAILS.phone.display}</a> &nbsp;·&nbsp;{' '}
              ✉️ <a href={CONTACT_DETAILS.email.href} className="hover:underline font-extrabold text-white">{SITE_CONFIG.email}</a>
            </motion.p>
          </div>
        </div>

        {/* Stats strip at bottom — Factual stats only */}
        <motion.div
          className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 1, y: 0 }}
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
