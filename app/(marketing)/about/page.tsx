import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, CONTACT_DETAILS } from '@/constants/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'About ChillFix AC Service Chennai | Professional AC Service & Repair',
  description: `Learn about ${SITE_CONFIG.name}. Reliable doorstep AC servicing, repair, cleaning, gas filling, and maintenance across Chennai, Perungalathur, and Tambaram starting at ₹249.`,
  canonicalPath: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-16">
        {/* Header */}
        <SectionHeader
          as="h1"
          eyebrow="About ChillFix AC Service Chennai"
          title="Keeping Chennai Cool"
          titleHighlight="With Doorstep AC Care"
          description="ChillFix AC Service Chennai provides professional residential and commercial air conditioning services with upfront pricing starting at ₹249."
        />

        {/* Story Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission: Reliable, Transparent &amp; Fast AC Care
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              ChillFix AC Service Chennai was built to provide dependable, straightforward air conditioning care with upfront quotes and prompt doorstep response.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Perungalathur, our skilled technicians serve homes, apartments, villas, and commercial spaces across Chennai, with focused local coverage in New Perungalathur, Perungalathur, Vandalur, and Tambaram.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-primary-500">₹249</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Starting Service Price</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-secondary-500">24/7</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Emergency Support</p>
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
                <span><strong>Local Coverage:</strong> Fast response across New Perungalathur, Perungalathur, Tambaram, Vandalur &amp; Chennai.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <span><strong>Doorstep Diagnosis:</strong> On-site fault inspection and cooling performance testing before job sign-off.</span>
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
