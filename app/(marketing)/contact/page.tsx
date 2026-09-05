import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact ChillFix AC Service in Chennai',
  description: 'Contact ChillFix AC Service for AC installation, repair, gas filling, and emergency servicing across Chennai and Perungalathur. Available 24/7 via phone and WhatsApp.',
  canonicalPath: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
