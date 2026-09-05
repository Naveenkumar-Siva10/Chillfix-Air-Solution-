import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { SERVICES, SERVICE_SLUG_ALIASES } from '@/constants/services';
import { CONTACT_DETAILS, SERVICE_AREAS } from '@/constants/site';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowLeft,
  AlertCircle,
  Wrench,
  Sparkles,
  MapPin,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const primarySlugs = SERVICES.map((service) => ({ slug: service.slug }));
  const aliasSlugs = Object.keys(SERVICE_SLUG_ALIASES).map((alias) => ({ slug: alias }));
  return [...primarySlugs, ...aliasSlugs];
}

function resolveService(slug: string) {
  let targetSlug = slug;
  if (SERVICE_SLUG_ALIASES[slug]) {
    targetSlug = SERVICE_SLUG_ALIASES[slug];
  }
  return SERVICES.find((s) => s.slug === targetSlug) ?? SERVICES[0];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = resolveService(slug);
  if (!service) return {};

  const title = service.metaTitle ?? `${service.name} | ChillFix Air Solution`;
  const description = service.metaDescription ?? `${service.shortDescription} Starting from ${formatPrice(service.startingPrice)}. Call +91 90804 95932.`;

  return generatePageMetadata({
    title,
    description,
    canonicalPath: `/services/${slug}`,
    keywords: [
      service.name,
      `${service.name} Chennai`,
      `best ${service.name} Chennai`,
      'AC service Chennai',
      'AC repair Chennai',
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = resolveService(slug);

  if (!service) {
    notFound();
  }

  const whatsappMsg = `Hi ChillFix! I need ${service.name} in Chennai. Please share details and book a technician visit.`;

  // Get related services (excluding current)
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service.name, href: `/services/${slug}` },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <ServiceSchema service={service} />
      <BreadcrumbSchema items={breadcrumbItems} />
      {service.faqs && service.faqs.length > 0 && (
        <FAQSchema faqs={service.faqs} pageUrl={`https://chillfixairsolution.in/services/${slug}`} />
      )}

      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-12">
          {/* Breadcrumb Navigation */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Banner for Service */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Certified {service.category} Service
              </span>

              {/* Single H1 for SEO */}
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                {service.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent-400" />
                  <span>Warranty: <strong>{service.warranty}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary-300" />
                  <span>Est. Time: <strong>{service.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-accent-300">
                    Starting from {formatPrice(service.startingPrice)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Column: Details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Symptoms / Problems Section */}
              {service.symptoms && service.symptoms.length > 0 && (
                <div className="rounded-3xl border border-amber-200/80 bg-amber-50/50 p-8 dark:border-amber-900/30 dark:bg-amber-950/20 space-y-4">
                  <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400 font-bold text-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Common Signs You Need {service.name}</span>
                  </div>
                  <ul className="grid gap-3">
                    {service.symptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                        <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Service Features & Inclusions */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  What is included in our {service.name}?
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Process Steps */}
              {service.process && service.process.length > 0 && (
                <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Our 4-Step {service.name} Process
                  </h2>
                  <div className="grid gap-4">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white font-bold text-sm">
                          {step.step}
                        </span>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supported Brands */}
              {service.brandsSupported && (
                <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">AC Brands We Service</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.brandsSupported.map((brand) => (
                      <span key={brand} className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                  <div className="flex items-center gap-2 text-primary-500 font-bold text-xl">
                    <HelpCircle className="h-6 w-6" />
                    <h2>Frequently Asked Questions — {service.name}</h2>
                  </div>
                  <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
                    {service.faqs.map((faq) => (
                      <div key={faq.question} className="pt-4 first:pt-0">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Booking CTA & Coverage (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              {/* Booking Card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Book {service.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Our certified technician will arrive within 2 hours across Chennai. Transparent diagnosis &amp; upfront pricing.
                  </p>

                  <div className="my-6 rounded-2xl bg-primary-50 p-5 dark:bg-slate-800 border border-primary-100 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Transparent Price</p>
                    <p className="text-3xl font-extrabold text-primary-600 dark:text-primary-400 mt-1">{formatPrice(service.startingPrice)}</p>
                    <p className="text-xs text-slate-500 mt-1">Includes diagnosis &amp; labor charges</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={CONTACT_DETAILS.phone.href}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary-500 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-600 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now — Free Diagnosis
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
                    <span>{service.warranty} warranty on work &amp; spare parts</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-secondary-500 shrink-0" />
                    <span>Same-day service guaranteed across Chennai</span>
                  </p>
                </div>
              </div>

              {/* Coverage Areas Quick Links */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  <span>Available Across Chennai Areas</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {SERVICE_AREAS.slice(0, 10).map((area) => (
                    <span key={area} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Related Services Section */}
          {relatedServices.length > 0 && (
            <div className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Explore Related AC Services</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-card hover:border-primary-400 transition-all dark:border-slate-800 dark:bg-slate-900"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary-500 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{rel.shortDescription}</p>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-primary-500">
                      <span>Starting {formatPrice(rel.startingPrice)}</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
