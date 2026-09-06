import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'AC Maintenance Guides & Tips — ChillFix Blog',
  description: 'Expert tips on air conditioner maintenance, power saving, gas leakage troubleshooting, and choosing the right AC for Chennai weather.',
  canonicalPath: '/blog',
  noIndex: true, // Temporarily no-indexed while blog is disabled from public navigation
});

const ARTICLES = [
  {
    slug: '5-signs-your-ac-needs-gas-refilling',
    title: '5 Warning Signs Your AC Needs Refrigerant Gas Refilling',
    excerpt: 'Not cooling effectively? Ice forming on copper pipes? Learn how to spot AC gas leaks early before compressor damage occurs.',
    category: 'Troubleshooting',
    date: '2025-07-10',
    readTime: '4 min read',
  },
  {
    slug: 'how-to-reduce-electricity-bill-with-inverter-ac',
    title: 'How to Cut Your Summer Electricity Bill by 30% with an Inverter AC',
    excerpt: 'Practical temperature setting and maintenance tips to optimize your inverter AC performance during peak Chennai summers.',
    category: 'Energy Saving',
    date: '2025-06-25',
    readTime: '5 min read',
  },
  {
    slug: 'why-ac-deep-cleaning-jet-wash-is-essential',
    title: 'Why Foam Jet Wash Deep Cleaning is Essential Once a Year',
    excerpt: 'Discover why standard filter rinsing isn\'t enough and how high-pressure foam jet wash removes toxic mold and restores cooling efficiency.',
    category: 'Maintenance',
    date: '2025-05-18',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-12">
        <SectionHeader
          eyebrow="Knowledge & Tips"
          title="AC Maintenance Guides"
          titleHighlight="& Energy Tips"
          description="Helpful guides from our certified HVAC technicians to help you get the best cooling, lower power bills, and extend your AC lifespan."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {ARTICLES.map((art) => (
            <div key={art.slug} className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-soft hover:shadow-card transition-all dark:border-slate-800 dark:bg-slate-900">
              <div>
                <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 dark:bg-primary-950 dark:text-primary-400 mb-3">
                  {art.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {art.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {art.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
