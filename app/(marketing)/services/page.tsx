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
    <div className="pt-24 pb-8">
      <div className="container-base text-center pt-6 pb-2">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
          Professional AC Services in Chennai
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Doorstep air conditioner repair, jet wash deep cleaning, gas leak diagnosis, and Split/Window AC installation across Chennai.
        </p>
      </div>
      <ServicesSection />
      <PricingSection />
    </div>
  );
}
