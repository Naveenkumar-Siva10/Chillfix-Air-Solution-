import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact ChillFix AC Service Chennai | Book AC Service & Repair',
  description: 'Contact ChillFix AC Service Chennai for AC installation, repair, cleaning, gas filling, and emergency servicing across Chennai and Perungalathur. Call +91 90804 95932.',
  canonicalPath: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection as="h1" />
    </div>
  );
}
