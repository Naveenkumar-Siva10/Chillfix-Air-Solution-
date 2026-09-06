import Link from 'next/link';
import {
  Snowflake,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { SITE_CONFIG, CONTACT_DETAILS, SERVICE_AREAS } from '@/constants/site';
import { FOOTER_NAV } from '@/constants/navigation';
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton';

export function Footer() {
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
              className="flex items-center gap-1 text-white hover:text-primary-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{CONTACT_DETAILS.phone.display}</span>
            </a>
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I need emergency AC repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-base py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 shadow-md">
                <Snowflake className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-extrabold text-white">ChillFix</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-primary-400">AC Service</span>
              </div>
            </Link>
            <p className="max-w-sm text-sm text-slate-300 leading-relaxed font-normal">
              Chennai's trusted AC service provider. Professional servicing, repair, cleaning, deep cleaning, gas leak diagnosis, gas filling and installation across Chennai &amp; Perungalathur.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 font-medium">
                <ShieldCheck className="h-4 w-4 text-accent-400" />
                <span>Service Warranty</span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 font-medium">
                <Star className="h-4 w-4 text-amber-400" />
                <span>4.9★ Google Rating</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Our Services</p>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Contact Us</p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Perungalathur, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                <a href={CONTACT_DETAILS.phone.href} className="text-slate-300 hover:text-white font-bold">
                  {CONTACT_DETAILS.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <Clock className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                <span>Mon–Sun: 8:00 AM – 9:00 PM (Emergency 24/7)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Local Hubs Tag Cloud */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-300">Popular Service Areas</p>
          <div className="flex flex-wrap gap-2">
            {FOOTER_NAV.locations.slice(0, 10).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg border border-slate-800 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 pb-24 sm:pb-8 sm:pr-28 text-xs text-slate-300 sm:flex-row">
          <p className="text-slate-300 font-medium text-center sm:text-left">
            © 2026 {SITE_CONFIG.name}. All rights reserved. Serving Chennai and nearby areas.
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
            <ScrollToTopButton />
          </div>
        </div>

      </div>
    </footer>
  );
}
