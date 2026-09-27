import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Star } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews & Feedback | ChillFix AC Service',
  description: 'Verified customer feedback and Google Business Profile reviews for ChillFix AC Service across Perungalathur, Tambaram, Vandalur, and South Chennai.',
  canonicalPath: '/testimonials',
});

export default function TestimonialsPage() {
  const breadcrumbItems = [
    { label: 'Customer Reviews', href: '/testimonials' },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="pt-24 pb-8 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-6">
          <Breadcrumb items={breadcrumbItems} />

          <div className="rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 text-accent-300" />
                Verified Google Business Profile Reviews
              </span>
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                Customer Reviews &amp; Authentic Feedback
              </h1>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                Genuine feedback and service experiences from homeowners and businesses across Perungalathur, Tambaram, Vandalur, and Chennai.
              </p>
            </div>
          </div>
        </div>

        <TestimonialsSection />
      </div>
    </>
  );
}
