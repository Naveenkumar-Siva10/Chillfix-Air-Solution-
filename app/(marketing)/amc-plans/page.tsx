import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PricingSection } from '@/components/sections/home/PricingSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC AMC Plans & Maintenance in Chennai | ChillFix AC Service',
  description: 'Worry-free AC Annual Maintenance Contracts (AMC) for homes and offices in Chennai. Scheduled wet servicing, priority 2-hour response, free labor, and gas coverage.',
  canonicalPath: '/amc-plans',
});

export default function AMCPlansPage() {
  return (
    <div className="pt-24 pb-8">
      <div className="container-base text-center pt-6 pb-2">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
          AC Annual Maintenance Contracts (AMC) in Chennai
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Worry-free preventative maintenance for homes and commercial offices across Chennai. Scheduled jet wash servicing, priority emergency breakdown repair, and discounted spare parts.
        </p>
      </div>
      <PricingSection />
    </div>
  );
}
