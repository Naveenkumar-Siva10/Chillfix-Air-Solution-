import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FAQS } from '@/constants/faqs';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { PricingSection } from '@/components/sections/home/PricingSection';
import { AcSalesComingSoonSection } from '@/components/sections/home/AcSalesComingSoonSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Service & Repair in Chennai | Starting ₹249 | ChillFix AC Service Chennai',
  description:
    'ChillFix AC Service Chennai provides doorstep AC service, repair, jet wash cleaning, and gas filling across Chennai starting at ₹249. Fast technician arrival in Perungalathur, Tambaram, and nearby areas.',
  canonicalPath: '/',
  keywords: [
    'AC service Chennai',
    'AC repair Chennai',
    'AC service near me',
    'AC repair near me',
    'AC cleaning Chennai',
    'AC deep cleaning Chennai',
    'AC gas filling Chennai',
    'AC installation Chennai',
    'AC service Perungalathur',
    'AC service Tambaram',
    'AC service Vandalur',
    'AC service Manivakkam',
    'AC service Chromepet',
    'ChillFix AC Service',
  ],
});

/**
 * Homepage — Main Chennai Authority Landing Page with Perungalathur local base positioning.
 */
export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <FAQSchema faqs={FAQS.slice(0, 4)} pageUrl="https://chillfixairsolution.in" />

      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <PricingSection />
      <AcSalesComingSoonSection />
      <ContactSection />
    </>
  );
}
