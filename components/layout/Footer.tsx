'use client';

import Link from 'next/link';
import {
  Snowflake,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { SITE_CONFIG, CONTACT_DETAILS, SERVICE_AREAS } from '@/constants/site';
import { FOOTER_NAV } from '@/constants/navigation';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800 dark:bg-slate-950">

      {/* Top Emergency Callout Banner */}
      <div className="border-b border-slate-800 bg-slate-950/80 py-4">
        <div className="container-base flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
            </span>
            <span className="text-sm font-semibold text-white">
              24/7 Emergency AC Service &amp; Repairs Available Across Chennai
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={CONTACT_DETAILS.phone.href}
              className="flex items-center gap-1.5 text-primary-400 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT_DETAILS.phone.display}
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I need AC service / repair in Chennai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-base py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">

          {/* Col 1: Brand & Factual Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="ChillFix AC Service Home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white shadow-md shadow-primary-500/30">
                <Snowflake className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold tracking-tight text-white leading-none">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  AC Service &amp; Repair Experts
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-200 font-medium">
              Based in Perungalathur, Chennai, serving customers across Chennai and nearby areas including Tambaram, Vandalur, Manivakkam and Chromepet. Over 10+ years of AC service experience.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                <ShieldCheck className="h-4 w-4 text-accent-400" />
                <span>Service Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span>4.9★ Google Rating</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                <Clock className="h-4 w-4 text-secondary-400" />
                <span>Fast Local Response</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our AC Services</h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 font-medium hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Areas We Serve</h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.locations.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 font-medium hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact &amp; Base</h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1 shrink-0" aria-hidden="true" />
                <span className="text-slate-200">Perungalathur, Chennai, Tamil Nadu — 600063</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400 shrink-0" aria-hidden="true" />
                <a href={CONTACT_DETAILS.phone.href} className="text-slate-200 hover:text-white transition-colors">
                  {CONTACT_DETAILS.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400 shrink-0" aria-hidden="true" />
                <a href={CONTACT_DETAILS.email.href} className="text-slate-200 hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <Clock className="h-4 w-4 text-secondary-400 mt-1 shrink-0" aria-hidden="true" />
                <div className="text-xs space-y-1 text-slate-200">
                  <p><strong className="text-white">Mon–Fri:</strong> {SITE_CONFIG.businessHours.weekdays}</p>
                  <p><strong className="text-white">Saturday:</strong> {SITE_CONFIG.businessHours.saturday}</p>
                  <p><strong className="text-white">Sunday:</strong> {SITE_CONFIG.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Service Areas Hub Strip */}
        <div className="mt-14 border-t border-slate-800 pt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-300">
            Service Coverage Across Chennai &amp; Nearby Areas
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="rounded-md bg-slate-800 px-2.5 py-1 text-slate-200 font-medium">
                {area} AC Service
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-300 sm:flex-row">
          <p className="text-slate-300 font-medium">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Serving Chennai and nearby areas.
          </p>

          <div className="flex items-center gap-6">
            {FOOTER_NAV.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-primary-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
