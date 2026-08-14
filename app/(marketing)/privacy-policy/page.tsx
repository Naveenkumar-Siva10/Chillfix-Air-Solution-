import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy — ChillFix Air Solution',
  description: `Privacy policy and data protection principles of ${SITE_CONFIG.name}.`,
  canonicalPath: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base max-w-3xl space-y-6 text-slate-700 dark:text-slate-300">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: January 2026</p>

        <p className="leading-relaxed">
          At {SITE_CONFIG.name}, we value your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website or book our AC services in Chennai.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">1. Information We Collect</h2>
        <p className="leading-relaxed">
          We collect personal details such as your name, mobile phone number, email address, and service location in Chennai when you fill out our contact or service booking forms.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">2. How We Use Your Information</h2>
        <p className="leading-relaxed">
          Your information is strictly used to dispatch technicians to your address, provide cost estimates, communicate service status, and send AMC renewal reminders. We do NOT sell your data to third parties.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">3. Data Security</h2>
        <p className="leading-relaxed">
          We implement secure data practices to ensure your personal and location details remain confidential and protected.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">4. Contact Us</h2>
        <p className="leading-relaxed">
          For any privacy inquiries, email us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-500 hover:underline">{SITE_CONFIG.email}</a>.
        </p>
      </div>
    </div>
  );
}
