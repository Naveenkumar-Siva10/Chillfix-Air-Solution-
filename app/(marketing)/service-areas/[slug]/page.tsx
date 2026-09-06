import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAreaBySlug, AREA_LOCATIONS } from '@/constants/areas';
import { SERVICES } from '@/constants/services';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { generatePageMetadata } from '@/lib/metadata';
import { formatPrice, getServiceUrl, getAreaUrl } from '@/lib/utils';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREA_LOCATIONS.map((area) => ({
    slug: area.id,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return generatePageMetadata({
      title: 'Location Not Found',
      description: 'Service area not found.',
      canonicalPath: '/service-areas',
    });
  }

  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    canonicalPath: `/service-areas/${area.id}`,
    keywords: [
      `AC service ${area.name}`,
      `AC repair ${area.name}`,
      `AC cleaning ${area.name}`,
      `AC gas filling ${area.name}`,
      `AC installation ${area.name}`,
    ],
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/services' },
    { label: area.name, href: `/service-areas/${area.id}` },
  ];

  const otherLocations = AREA_LOCATIONS.filter((l) => l.id !== area.id).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema />
      {area.localFaqs.length > 0 && (
        <FAQSchema faqs={area.localFaqs} pageUrl={`https://chillfixairsolution.in/service-areas/${area.id}`} />
      )}

      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-12">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-accent-300" />
                {area.zone} Doorstep Service
              </span>
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                {area.heading}
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium">
                {area.intro}
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary-600 shadow-md hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4" />
                  Call: +91 90804 95932
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage(`Hi ChillFix! I need AC service in ${area.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Landmarks / Hubs Covered */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-500" />
              Key Colonies &amp; Hubs Served in {area.name}:
            </h2>
            <div className="flex flex-wrap gap-2">
              {area.nearbyHubs.map((hub) => (
                <span
                  key={hub}
                  className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                >
                  {hub}
                </span>
              ))}
            </div>
          </div>

          {/* Services Available in this Location */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              AC Services Available in {area.name}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.slice(0, 6).map((service) => (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.name}</h3>
                    <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800 pt-3">
                      <span className="font-semibold text-slate-600 dark:text-slate-400">Starting from</span>
                      <span className="font-extrabold text-primary-600 dark:text-primary-400 text-sm">
                        {formatPrice(service.startingPrice)}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={getServiceUrl(service.slug)}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-primary-500 hover:text-white dark:bg-slate-800 dark:text-white dark:hover:bg-primary-600"
                  >
                    View Details &amp; Rates <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose ChillFix in this Location */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold">Why Choose ChillFix in {area.name}?</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base">Upfront Pricing</h3>
                  <p className="text-xs text-slate-300 mt-1">Diagnostic quote provided before work starts. Zero hidden charges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base">90-Day Warranty</h3>
                  <p className="text-xs text-slate-300 mt-1">Written warranty on spare parts and repair labor across {area.name}.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base">2-Hour Technician Dispatch</h3>
                  <p className="text-xs text-slate-300 mt-1">Certified AC technicians equipped with genuine spare parts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs for this Location */}
          {area.localFaqs.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions in {area.name}
              </h2>
              <div className="space-y-4">
                {area.localFaqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/50 space-y-1.5">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Nearby Service Locations */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Nearby Service Areas in Chennai
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {otherLocations.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/service-areas/${loc.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  AC Service {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
