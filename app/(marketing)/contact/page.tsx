import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us — Book AC Service in Chennai',
  description: 'Contact ChillFix Air Solution for AC installation, repair, gas filling, and emergency service in Chennai. Available 24/7 on phone and WhatsApp.',
  canonicalPath: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
