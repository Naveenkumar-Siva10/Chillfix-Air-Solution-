import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { PricingSection } from '@/components/sections/home/PricingSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Service & Repair Rates in Chennai — Transparent Pricing',
  description: 'View transparent pricing for AC installation, repair, gas refilling, jet cleaning, and AMC maintenance in Chennai. No hidden charges.',
  canonicalPath: '/pricing',
});

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingSection />
    </div>
  );
}
