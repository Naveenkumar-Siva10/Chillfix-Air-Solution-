import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews & Testimonials | ChillFix AC Service Chennai',
  description: 'Read genuine customer reviews and service feedback for ChillFix AC Service Chennai across Perungalathur, Tambaram, Vandalur, and South Chennai.',
  canonicalPath: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-8">
      <div className="container-base text-center pt-6 pb-2">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
          Customer Reviews &amp; Testimonials
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Genuine feedback and experiences from homeowners and businesses across Perungalathur, Tambaram, Vandalur, and Chennai.
        </p>
      </div>
      <TestimonialsSection />
    </div>
  );
}
