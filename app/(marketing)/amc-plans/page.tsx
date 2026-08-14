import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PricingSection } from '@/components/sections/home/PricingSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Annual Maintenance Contracts (AMC) in Chennai — Basic, Standard & Premium',
  description: 'Worry-free AC maintenance contracts for residential and commercial spaces in Chennai. Scheduled services, priority response, free labour & gas refill coverage.',
  canonicalPath: '/amc-plans',
});

export default function AMCPlansPage() {
  return (
    <div className="pt-20">
      <PricingSection />
    </div>
  );
}
