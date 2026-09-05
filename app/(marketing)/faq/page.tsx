import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { FAQS } from '@/constants/faqs';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FAQPageClient } from '@/components/sections/faq/FAQPageClient';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Service FAQ in Chennai | ChillFix AC Service',
  description:
    'Frequently asked questions about AC servicing, repair charges, gas filling costs, AMC plans, technician response times, and warranties in Chennai.',
  canonicalPath: '/faq',
  keywords: [
    'AC service FAQ Chennai',
    'AC repair charges FAQ',
    'AC gas filling cost Chennai',
    'ChillFix AC service questions',
  ],
});

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={FAQS} pageUrl="https://chillfixairsolution.in/faq" />
      <FAQPageClient />
    </>
  );
}
