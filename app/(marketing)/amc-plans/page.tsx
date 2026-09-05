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
    <div className="pt-20">
      <PricingSection />
    </div>
  );
}
