import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CONTACT_DETAILS } from '@/constants/site';
import { SERVICES } from '@/constants/services';
import { AMC_PLANS } from '@/constants/amc-plans';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import {
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Service Price in Chennai (2026 Rate List) | ChillFix',
  description:
    'Transparent AC service price list in Chennai. General AC service from ₹249, jet wash deep cleaning ₹449, gas filling from ₹799, split AC installation ₹599. Free diagnosis with repair.',
  canonicalPath: '/pricing/ac-service-price-chennai',
  keywords: [
    'AC service price Chennai',
    'AC service cost Chennai',
    'AC cleaning price Chennai',
    'AC repair charges Chennai',
    'AC gas filling price Chennai',
    'Split AC installation charges Chennai',
  ],
});

const PRICING_FAQS = [
  {
    question: 'How much does AC service cost in Chennai?',
    answer: 'General AC servicing in Chennai starts at ₹249 for Window ACs and ₹299 for Split ACs. High-pressure foam jet-wash deep cleaning starts at ₹449.',
  },
  {
    question: 'What are the AC gas filling charges in Chennai?',
    answer: 'AC gas top-up starts at ₹799. Complete refrigerant gas refilling with nitrogen leak testing and copper pipe brazing ranges from ₹1,499 to ₹2,499 depending on gas type (R32, R410A, R22).',
  },
  {
    question: 'Is inspection / diagnostic fee charged if I proceed with repair?',
    answer: 'No! Our initial diagnostic inspection fee of ₹349 is 100% waived off and adjusted into your final repair bill when you proceed with the service.',
  },
  {
    question: 'Are spare parts prices included in the service charges?',
    answer: 'Labor and basic diagnostic testing are included. If hardware components like capacitors, PCB circuit boards, or fan motors require replacement, our technician provides a transparent price quote before fitting genuine OEM parts.',
  },
];

export default function AcPricePage() {
  const breadcrumbItems = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'AC Service Price Chennai', href: '/pricing/ac-service-price-chennai' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={PRICING_FAQS} pageUrl="https://chillfixairsolution.in/pricing/ac-service-price-chennai" />

      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-12">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent-300" />
                100% Upfront Rate Card — No Hidden Charges
              </span>
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                AC Service Price &amp; Repair Charges in Chennai
              </h1>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                Looking for clear AC service cost in Chennai? Check our complete 2026 rate card below for general servicing, jet-wash deep cleaning, gas leak refilling, and installation.
              </p>
            </div>
          </div>

          {/* Pricing Table Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Chennai Standard AC Service &amp; Repair Rate Card
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Rates include certified labor, equipment, and post-service testing across all 25+ Chennai areas.
                </p>
              </div>
              <a
                href={CONTACT_DETAILS.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-600 shrink-0"
              >
                <Phone className="h-4 w-4" />
                Get Quote: +91 90804 95932
              </a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <th className="py-4 px-4">Service Type</th>
                    <th className="py-4 px-4">Description &amp; Inclusions</th>
                    <th className="py-4 px-4">Starting Price</th>
                    <th className="py-4 px-4">Warranty</th>
                    <th className="py-4 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                  {SERVICES.map((s) => (
                    <tr key={s.slug} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900 dark:text-white">
                        <Link href={`/services/${s.slug}`} className="hover:text-primary-500 transition-colors">
                          {s.name}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400 max-w-xs text-xs sm:text-sm">
                        {s.shortDescription}
                      </td>
                      <td className="py-4 px-4 font-extrabold text-primary-600 dark:text-primary-400 text-base">
                        {formatPrice(s.startingPrice)}
                      </td>
                      <td className="py-4 px-4 text-xs font-semibold text-accent-600 dark:text-accent-400">
                        {s.warranty}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary-500 hover:underline"
                        >
                          Details
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Price Disclaimer */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-900/40 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <strong className="font-bold">Transparent Pricing Disclaimer:</strong> Starting prices cover standard diagnostic inspection, labor, and basic cleaning. Final repair cost may vary based on detailed technical diagnosis, required spare parts (e.g., capacitors, PCB circuit boards, fan motors, compressor replacements), and specific AC brand/tonnage. You approve the final cost before any work begins!
              </div>
            </div>
          </div>

          {/* AMC Plans Rate Cards */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Annual Maintenance Contract (AMC) Price List</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Save up to 40% annually with structured preventive AC servicing contracts for homes and commercial offices.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {AMC_PLANS.map((plan) => (
                <div key={plan.id} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{plan.tagline || plan.description}</p>
                    <div className="my-4">
                      <span className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">{formatPrice(plan.price)}</span>
                      <span className="text-xs text-slate-400"> / {plan.billingCycle}</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 mb-6">
                      {plan.features.slice(0, 4).map((f) => (
                        <li key={f.label} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-500 shrink-0" />
                          <span>{f.label}: <strong>{typeof f.value === 'string' ? f.value : f.included ? 'Included' : 'Not Included'}</strong></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={CONTACT_DETAILS.phone.href}
                    className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold text-center hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    Select Plan
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AC Service Price FAQs</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {PRICING_FAQS.map((faq) => (
                <div key={faq.question} className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold">Need an Instant Estimate for Your AC?</h3>
              <p className="text-sm text-white/80 mt-1">Call our technicians or chat on WhatsApp for a fast quote across Chennai.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={CONTACT_DETAILS.phone.href}
                className="px-6 py-3.5 rounded-xl bg-white text-primary-600 font-bold text-sm hover:bg-slate-100"
              >
                Call: +91 90804 95932
              </a>
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I need an AC service price estimate for my home in Chennai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ebe5a]"
              >
                WhatsApp Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
