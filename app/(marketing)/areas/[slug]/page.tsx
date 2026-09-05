import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { AREA_LOCATIONS } from '@/constants/areas';
import { SERVICES } from '@/constants/services';
import { CONTACT_DETAILS } from '@/constants/site';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import {
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREA_LOCATIONS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = AREA_LOCATIONS.find((a) => a.slug === slug);
  if (!area) return {};

  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    canonicalPath: `/areas/${area.slug}`,
    keywords: [
      `AC service ${area.name}`,
      `AC repair ${area.name}`,
      `AC cleaning ${area.name}`,
      `AC technician ${area.name}`,
      `AC gas filling ${area.name}`,
    ],
  });
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = AREA_LOCATIONS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const whatsappMsg = `Hi ChillFix! I need AC service in ${area.name}, Chennai (${area.postalCode}). Please assist me.`;

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/#why-us' },
    { label: `${area.name} AC Service`, href: `/areas/${area.slug}` },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {area.localFaqs && (
        <FAQSchema faqs={area.localFaqs} pageUrl={`https://chillfixairsolution.in/areas/${area.slug}`} />
      )}

      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Banner for Location */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-slate-950 p-8 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 px-3.5 py-1 text-xs font-bold text-accent-300 border border-accent-400/30">
                  <MapPin className="h-3.5 w-3.5" />
                  {area.name} Zone ({area.postalCode})
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90">
                  <Clock className="h-3.5 w-3.5 text-secondary-300" />
                  Response Time: {area.responseTime}
                </span>
              </div>

              {/* Single H1 for SEO */}
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                {area.heading}
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                {area.intro}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-primary-600 font-bold hover:bg-slate-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call {area.name} Unit: +91 90804 95932
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-white font-bold hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Technician
                </a>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Column: Services in Area (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Coverage Hubs Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Local Service Coverage Hubs in {area.name}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our mobile service vans operate daily across all residential colonies and commercial hubs in {area.name}:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {area.nearbyHubs.map((hub) => (
                    <span key={hub} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary-50 dark:bg-slate-800 text-xs font-semibold text-primary-700 dark:text-primary-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                      {hub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services Available */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  AC Services Provided in {area.name}
                </h2>
                <div className="grid gap-4">
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary-500 transition-colors">
                          {service.name} in {area.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">{service.shortDescription}</p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <span className="text-xs font-bold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-slate-700 px-3 py-1 rounded-lg">
                          From {formatPrice(service.startingPrice)}
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Area FAQs */}
              {area.localFaqs && area.localFaqs.length > 0 && (
                <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                  <div className="flex items-center gap-2 text-primary-500 font-bold text-xl">
                    <HelpCircle className="h-6 w-6" />
                    <h2>Frequently Asked Questions — {area.name} AC Service</h2>
                  </div>
                  <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
                    {area.localFaqs.map((faq) => (
                      <div key={faq.question} className="pt-4 first:pt-0">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Quick Booking Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                <div>
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Fast Technician Dispatch</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Book AC Service in {area.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Our local technician reaches your doorstep in {area.name} within 60 minutes. Guaranteed same-day service.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={CONTACT_DETAILS.phone.href}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary-500 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-600 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call {area.name} Unit (+91 90804 95932)
                  </a>
                  <a
                    href={CONTACT_DETAILS.whatsapp.withMessage(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] py-4 text-base font-bold text-white shadow-lg hover:bg-[#1ebe5a] transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-2">
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-accent-500 shrink-0" />
                    <span>30–90 Day Service Warranty on all repairs</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-secondary-500 shrink-0" />
                    <span>{area.responseTime} arrival in {area.name}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
