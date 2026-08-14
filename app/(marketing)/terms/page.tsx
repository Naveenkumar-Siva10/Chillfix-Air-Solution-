import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms & Conditions — ChillFix Air Solution',
  description: `Service terms, warranty conditions, and AMC rules for ${SITE_CONFIG.name} in Chennai.`,
  canonicalPath: '/terms',
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base max-w-3xl space-y-6 text-slate-700 dark:text-slate-300">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Last updated: January 2026</p>

        <p className="leading-relaxed">
          Welcome to {SITE_CONFIG.name}. By booking our AC services or purchasing an Annual Maintenance Contract (AMC), you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">1. Service & Quotations</h2>
        <p className="leading-relaxed">
          Technicians evaluate the AC on-site and provide an upfront quotation before commencing repair work. Service fees are payable upon completion of work via cash, UPI, or card.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">2. Service Warranty</h2>
        <p className="leading-relaxed">
          Our repairs carry a 30 to 90-day warranty depending on the service type. Gas refilling carries a 30-day warranty, and compressor replacements carry up to a 1-year warranty. Warranty applies to the specific issue repaired.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">3. AMC Plans</h2>
        <p className="leading-relaxed">
          Annual Maintenance Contracts cover scheduled visits, labour discounts, and priority emergency dispatch as specified in the plan tier. Parts are charged separately unless specified in writing.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">4. Cancellations</h2>
        <p className="leading-relaxed">
          You may reschedule or cancel a service visit at least 2 hours before the agreed time slot at no charge.
        </p>
      </div>
    </div>
  );
}
