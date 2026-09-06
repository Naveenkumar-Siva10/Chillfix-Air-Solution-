import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  Headphones,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { GoogleMap } from '@/components/common/GoogleMap';

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: 'Call Us Now',
    subtitle: 'Direct technician dispatch line',
    value: CONTACT_DETAILS.phone.display,
    href: CONTACT_DETAILS.phone.href,
    action: 'Call Now',
    color: 'text-primary-500 bg-primary-50 dark:bg-primary-950/50',
    btnClass: 'bg-primary-500 hover:bg-primary-600 text-white',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Chat',
    subtitle: 'Instant response in 5 minutes',
    value: 'Chat on WhatsApp',
    href: CONTACT_DETAILS.whatsapp.withMessage('Hi! I need AC service in Chennai. Please assist me.'),
    action: 'Open WhatsApp',
    color: 'text-[#25D366] bg-emerald-50 dark:bg-emerald-950/50',
    btnClass: 'bg-[#25D366] hover:bg-[#1ebe5a] text-white',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'For AMC queries & quotations',
    value: SITE_CONFIG.email,
    href: CONTACT_DETAILS.email.href,
    action: 'Send Email',
    color: 'text-secondary-500 bg-secondary-50 dark:bg-secondary-950/50',
    btnClass: 'bg-secondary-500 hover:bg-secondary-600 text-white',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    subtitle: 'Emergency calls open 24/7',
    value: `${SITE_CONFIG.businessHours.weekdays} (Mon–Fri)`,
    href: '#contact-form',
    action: 'Book Service',
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50',
    btnClass: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700',
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="contact-heading"
    >
      <div className="container-base space-y-16">

        {/* Section Header */}
        <SectionHeader
          eyebrow="Get In Touch"
          title="Fast Local"
          titleHighlight="AC Service in Chennai"
          description="Have an AC issue or need routine servicing? Reach out by phone, WhatsApp, email, or fill out the quick booking form."
        />

        {/* ── 4 Key Contact Cards Grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            const isExternal = 'external' in card && card.external;
            return (
              <div
                key={card.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className={cn('mb-4 flex h-12 w-12 items-center justify-center rounded-2xl', card.color)}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mb-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {card.subtitle}
                  </p>
                  <p className="font-extrabold text-slate-900 dark:text-white break-words text-sm">
                    {card.value}
                  </p>
                </div>

                <a
                  href={card.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all shadow-md',
                    card.btnClass,
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{card.action}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Contact Form + Map Side-by-Side ── */}
        <div className="grid gap-8 lg:grid-cols-12 items-start" id="contact-form">

          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-500">
                <Headphones className="h-4 w-4" aria-hidden="true" />
                <span>Instant Service Booking Form</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Request a Callback in 30 Minutes
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below for service requests, AMC inquiries, or general questions.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Google Map + Location Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-secondary-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Our Location & Coverage</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Serving All 25+ Chennai Hubs
              </h3>

              {/* Map Component */}
              <GoogleMap height="360px" showPanel={false} />

              {/* Quick highlights card */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-500 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-extrabold text-slate-900 dark:text-white">Same-Day Service Guaranteed</p>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Book before 12 PM for guaranteed same-day technician visit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-extrabold text-slate-900 dark:text-white">24/7 Emergency Dispatch</p>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Night breakdown? We have emergency units ready in Chennai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Emergency Callout Strip ── */}
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-primary-600 to-primary-800 p-8 sm:p-10 text-white shadow-xl">
            <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-3">
                  ⚡ 24/7 Emergency Service Line
                </span>
                <h3 className="text-2xl font-bold font-display sm:text-3xl text-white">
                  Need AC Repair Urgently in Chennai?
                </h3>
                <p className="mt-2 text-sm text-slate-100 font-medium">
                  Compressor failure, gas leakage, or cooling stopped completely? Call our emergency team right now.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-primary-600 shadow-lg transition-all hover:bg-slate-100 hover:scale-105"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {CONTACT_DETAILS.phone.display}</span>
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage('EMERGENCY: My AC stopped cooling. Please send a technician urgently.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-[#1ebe5a] hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Emergency WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
