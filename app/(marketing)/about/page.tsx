import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { TrustSection } from '@/components/sections/home/TrustSection';
import { ShieldCheck, Users, Wrench, Award, Clock } from 'lucide-react';
import { SITE_CONFIG, CONTACT_DETAILS } from '@/constants/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us — Chennai\'s Most Trusted AC Service Team',
  description: `Learn about ${SITE_CONFIG.name}. Over ${SITE_CONFIG.stats.yearsInBusiness} years of experience providing reliable AC installation, repair, and AMC services in Chennai.`,
  canonicalPath: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-16">
        {/* Header */}
        <SectionHeader
          eyebrow="About ChillFix Air Solution"
          title="Keeping Chennai Cool"
          titleHighlight={`Since ${SITE_CONFIG.founded}`}
          description={`With over ${SITE_CONFIG.yearsOfExperience} years of experience, ChillFix Air Solution is Chennai's premier choice for residential and commercial air conditioning services.`}
        />

        {/* Story Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission: Reliable, Transparent & Fast AC Care
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in {SITE_CONFIG.founded}, ChillFix Air Solution was built to eliminate the frustration of unreliable technicians, hidden costs, and delayed service during peak Chennai heat.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, our team of {SITE_CONFIG.stats.techniciansCertified} background-verified technicians serves over {SITE_CONFIG.stats.customersServed} homes, apartments, villas, and corporate offices across 25+ areas in Chennai.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-primary-500">10,000+</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Happy Customers</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="font-display text-3xl font-bold text-secondary-500">&lt; 2 Hours</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Average Response</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Our Core Commitments</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white">Up to 90-Day Service Warranty</h5>
                  <p className="text-xs text-slate-500">Every repair is backed by a 30 to 90-day guarantee.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white">100% Genuine Spare Parts</h5>
                  <p className="text-xs text-slate-500">We source directly from OEMs like Daikin, LG, Samsung, Voltas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white">Certified Technicians</h5>
                  <p className="text-xs text-slate-500">Regularly trained on inverter ACs, PCBs, and eco-friendly gas refilling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reuse Trust Section */}
        <TrustSection />
      </div>
    </div>
  );
}
