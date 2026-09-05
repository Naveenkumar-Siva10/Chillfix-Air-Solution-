import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews & Testimonials | ChillFix AC Service',
  description: 'Read verified customer reviews and 4.9-star ratings for ChillFix AC Service across Perungalathur, Tambaram, Vandalur, Chromepet, and Chennai.',
  canonicalPath: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <TestimonialsSection />
    </div>
  );
}
