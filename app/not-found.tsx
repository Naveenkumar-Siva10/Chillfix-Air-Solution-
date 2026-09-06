import Link from 'next/link';
import { Home, AirVent, Wrench, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/constants/site';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
      <div className="max-w-md w-full space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
          <AlertCircle className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            The page you are looking for might have been moved or doesn&apos;t exist. Explore our main service pages below:
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <Home className="h-4 w-4 text-primary-500 shrink-0" />
            Homepage
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <AirVent className="h-4 w-4 text-primary-500 shrink-0" />
            All Services
          </Link>

          <Link
            href="/ac-service-chennai"
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <AirVent className="h-4 w-4 text-primary-500 shrink-0" />
            AC Service
          </Link>

          <Link
            href="/ac-repair-chennai"
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <Wrench className="h-4 w-4 text-primary-500 shrink-0" />
            AC Repair
          </Link>
        </div>

        {/* Contact CTAs */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <p className="text-xs text-slate-500 font-semibold">Need immediate AC assistance in Chennai?</p>
          <div className="flex gap-2">
            <a
              href={CONTACT_DETAILS.phone.href}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-primary-500 py-2.5 text-xs font-bold text-white hover:bg-primary-600 shadow-sm"
            >
              <Phone className="h-3.5 w-3.5" /> Call Us
            </a>
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I landed on a 404 page and need help with AC service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white hover:bg-[#1ebe5a] shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
