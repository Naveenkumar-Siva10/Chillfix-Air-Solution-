import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { PricingSection } from '@/components/sections/home/PricingSection';
import { AcSalesComingSoonSection } from '@/components/sections/home/AcSalesComingSoonSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Service in Chennai | AC Repair & Cleaning | ChillFix Air Solution',
  description:
    'Looking for AC service in Chennai? ChillFix provides AC repair, cleaning, gas leak diagnosis, installation and maintenance with fast technician support across Chennai.',
  canonicalPath: '/',
  keywords: [
    'AC service Chennai',
    'AC repair Chennai',
    'AC cleaning Chennai',
    'AC deep cleaning Chennai',
    'AC gas filling Chennai',
    'AC installation Chennai',
    'Split AC service Chennai',
    'Window AC service Chennai',
    'AC service near me',
    'AC repair near me',
    'ChillFix Air Solution',
  ],
});

/**
 * Home page — server component.
 * Optimized for local SEO and high-conversion AC service inquiries across Chennai.
 */
export default function HomePage() {
  return (
    <>
      {/* SEO: Local Business & Organization Schemas */}
      <LocalBusinessSchema />
      <OrganizationSchema />

      {/* Step 5: Hero */}
      <HeroSection />

      {/* Step 6: Services */}
      <ServicesSection />

      {/* Step 7: Why Choose Us / Trust */}
      <TrustSection />

      {/* Step 8: Testimonials */}
      <TestimonialsSection />

      {/* Step 9: Pricing / AMC Plans */}
      <PricingSection />

      {/* Coming Soon: AC Sales Preview */}
      <AcSalesComingSoonSection />

      {/* Step 10: Contact & Location */}
      <ContactSection />
    </>
  );
}
