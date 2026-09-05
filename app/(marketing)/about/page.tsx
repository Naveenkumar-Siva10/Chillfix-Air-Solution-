import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, CONTACT_DETAILS } from '@/constants/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'About ChillFix AC Service | AC Service & Repair in Chennai',
  description: `Learn about ${SITE_CONFIG.name}. Over 10+ years of experience providing reliable AC servicing, repair, cleaning, gas filling, and maintenance across Chennai and Perungalathur.`,
  canonicalPath: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-16">
        {/* Header */}
        <SectionHeader
          eyebrow="About ChillFix AC Service"
          title="Keeping Chennai Cool"
          titleHighlight={`Since ${SITE_CONFIG.founded}`}
          description={`With over ${SITE_CONFIG.yearsOfExperience} years of experience, ChillFix AC Service provides professional residential and commercial air conditioning services across Chennai.`}
        />

        {/* Story Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission: Reliable, Transparent &amp; Fast AC Care
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in {SITE_CONFIG.founded}, ChillFix AC Service was built to eliminate the frustration of unreliable technicians, hidden costs, and delayed service during peak Chennai heat.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Perungalathur, our experienced technicians serve homes, apartments, villas, and corporate offices across Chennai and nearby areas including Tambaram, Vandalur, Manivakkam, and Chromepet.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-primary-500">10+ Years</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">AC Service Experience</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-secondary-500">4.9★</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Google Rating</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white space-y-6 shadow-xl">
            <h4 className="text-xl font-bold">Why Chennai Trusts ChillFix</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <span><strong>Transparent Pricing:</strong> Upfront diagnostic estimates before any repair work begins.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <span><strong>Local Coverage:</strong> Fast response across Perungalathur, Tambaram, Vandalur, Manivakkam, Chromepet &amp; Chennai.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <span><strong>Service Warranty:</strong> Written warranty on spare parts and repair labor.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
              <a
                href={CONTACT_DETAILS.phone.href}
                className="flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-xs font-bold text-white hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />
                Call +91 90804 95932
              </a>
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I would like to learn more about ChillFix AC Service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white hover:bg-[#1ebe5a]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <TrustSection />
      </div>
    </div>
  );
}
