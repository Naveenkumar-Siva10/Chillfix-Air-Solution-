import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews & Ratings — ChillFix Air Solution Chennai',
  description: 'Read 4.9-star reviews from verified customers across Anna Nagar, Adyar, Velachery, T. Nagar, OMR, and 25+ areas in Chennai.',
  canonicalPath: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <TestimonialsSection />
    </div>
  );
}
