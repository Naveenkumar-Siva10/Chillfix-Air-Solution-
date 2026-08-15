import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { PricingSection } from '@/components/sections/home/PricingSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Installation, Repair & Maintenance in Chennai',
  description:
    "ChillFix Air Solution — Chennai's most trusted AC service company. Split AC, Window AC, Cassette AC, gas filling, deep cleaning & annual maintenance. Available 24/7 for emergencies.",
  canonicalPath: '/',
  keywords: [
    'AC service Chennai',
    'AC repair Chennai',
    'split AC installation Chennai',
    'AC gas filling Chennai',
    'emergency AC repair Chennai',
    'AC deep cleaning Chennai',
    'annual maintenance contract Chennai',
  ],
});

/**
 * Home page — server component.
 * Complete marketing page composition.
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

      {/* Step 10: Contact & Location */}
      <ContactSection />
    </>
  );
}


