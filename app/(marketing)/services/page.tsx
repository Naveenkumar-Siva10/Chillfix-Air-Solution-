import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { PricingSection } from '@/components/sections/home/PricingSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Services in Chennai | ChillFix AC Service',
  description: 'Explore all air conditioning services by ChillFix AC Service in Chennai. Split AC, Window AC, PCB repair, gas filling, jet wash deep cleaning, and AMC plans.',
  canonicalPath: '/services',
});

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
      <PricingSection />
    </div>
  );
}
