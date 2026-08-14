import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { PricingSection } from '@/components/sections/home/PricingSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Services in Chennai — Installation, Repair, Gas Filling & AMC',
  description: 'Explore all air conditioner services by ChillFix Air Solution in Chennai. Split AC, Window AC, Cassette AC, Commercial HVAC, PCB repair, and jet-wash deep cleaning.',
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
