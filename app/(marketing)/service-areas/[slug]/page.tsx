import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAreaBySlug, AREA_LOCATIONS } from '@/constants/areas';
import { SERVICES } from '@/constants/services';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { generatePageMetadata } from '@/lib/metadata';
import { formatPrice, getServiceUrl } from '@/lib/utils';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Clock,
  Wrench,
  AlertTriangle,
  BadgePercent,
  CalendarCheck,
} from 'lucide-react';

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
      canonicalPath: '/services',
    });
  }

  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    canonicalPath: `/service-areas/${area.id}`,
    keywords: [
      `AC service ${area.name}`,
      `AC repair ${area.name}`,
      `air conditioner repair ${area.name}`,
      `split AC service ${area.name}`,
      `AC cleaning ${area.name}`,
      `AC gas filling ${area.name}`,
      `AC installation ${area.name}`,
      `inverter AC repair ${area.name}`,
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
    { label: 'Services', href: '/services' },
    { label: 'Service Areas', href: '/services' },
    { label: area.name, href: `/service-areas/${area.id}` },
  ];

  const otherLocations = AREA_LOCATIONS.filter((l) => l.id !== area.id).slice(0, 8);
  const whatsappUrl = CONTACT_DETAILS.whatsapp.withMessage(
    area.whatsappPrefill ?? `Hi ChillFix! I need AC service in ${area.name}. Please share details and technician availability.`
  );

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema />
      {area.localFaqs.length > 0 && (
        <FAQSchema faqs={area.localFaqs} pageUrl={`${SITE_CONFIG.url}/service-areas/${area.id}`} />
      )}

      <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-12">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-accent-300" />
                  {area.zone} (PIN {area.postalCode})
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/30 px-3.5 py-1 text-xs font-bold text-accent-200 backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5" />
                  {area.responseTime}
                </span>
              </div>

              {/* Single semantic H1 tag */}
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
                {area.heading}
              </h1>

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                {area.intro}
              </p>

              {/* Above the fold CTAs */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary-700 shadow-md hover:bg-slate-100 transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary-600" />
                  Call: +91 90804 95932
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Key Colonies & Hubs Covered */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-500" />
              Key Colonies, Streets &amp; Hubs Served in {area.name}:
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

          {/* Local Insights & Environmental Challenges (When available) */}
          {area.localInsights && area.localInsights.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                  Local Operating Knowledge
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Air Conditioning &amp; Cooling Conditions in {area.name}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Understanding why air conditioners in {area.name} face unique cooling stress, dust accumulation, and electrical demands.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {area.localInsights.map((insight) => (
                  <div
                    key={insight.title}
                    className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {insight.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common AC Problems & Diagnosis in this Location */}
          {area.commonLocalProblems && area.commonLocalProblems.length > 0 && (
            <div className="rounded-3xl bg-slate-900 p-8 text-white space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-400">
                  Doorstep Diagnostics
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  Common AC Problems Reported by Residents in {area.name}
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  How our certified technicians diagnose and resolve recurrent cooling, water leaking, and electrical issues.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {area.commonLocalProblems.map((prob) => (
                  <div
                    key={prob.issue}
                    className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-white text-base flex items-start gap-2">
                        <Wrench className="h-4 w-4 text-primary-400 shrink-0 mt-1" />
                        {prob.issue}
                      </h3>
                      <div className="mt-2 text-xs text-slate-300 space-y-1">
                        <p>
                          <strong className="text-slate-200">Root Cause:</strong> {prob.cause}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900/90 p-3 text-xs text-accent-300 font-medium border border-slate-700/60">
                      <strong>ChillFix Solution:</strong> {prob.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transparent Local Pricing Table (When available) */}
          {area.pricingTable && area.pricingTable.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    Transparent Rates
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    AC Service &amp; Repair Charges in {area.name}
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-3.5 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <BadgePercent className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  ₹299 Inspection fee waived into final repair bill
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold">
                      <th className="py-3 px-4">Service Type</th>
                      <th className="py-3 px-4">Starting Price</th>
                      <th className="py-3 px-4">Scope &amp; Inclusions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                    {area.pricingTable.map((item) => (
                      <tr key={item.serviceName} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                          {item.serviceName}
                        </td>
                        <td className="py-3 px-4 font-extrabold text-primary-600 dark:text-primary-400 whitespace-nowrap">
                          {item.startingPrice}
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                          {item.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Services Available in this Location */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Complete Cooling Solutions
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                AC Services Available in {area.name}
              </h2>
            </div>
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
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-primary-500 hover:text-white dark:bg-slate-800 dark:text-white dark:hover:bg-primary-600 transition-colors"
                  >
                    View Details &amp; Rates <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Supported & Service Process */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary-500" />
                AC Brands Serviced in {area.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Our technicians are equipped with genuine spare parts, capacitor testers, and refrigerant manifolds for all major split, inverter, and window air conditioner brands:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Daikin',
                  'Voltas',
                  'Blue Star',
                  'LG Dual Inverter',
                  'Samsung',
                  'Carrier',
                  'Hitachi',
                  'Panasonic',
                  'Mitsubishi Electric',
                  'Lloyd',
                  'Godrej',
                  'O General',
                ].map((brand) => (
                  <span
                    key={brand}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CalendarCheck className="h-5 w-5 text-primary-500" />
                Step-by-Step Service Booking
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>1. Book Online or Call:</strong> Connect via phone or WhatsApp with your location and symptoms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>2. Rapid Dispatch:</strong> Certified technician reaches your door in {area.name} within {area.responseTime}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>3. Transparent Quote:</strong> Upfront diagnosis provided before work starts. Zero surprise charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>4. Testing &amp; 90-Day Warranty:</strong> Temperature differential verified and written warranty issued.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Call to Action Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-slate-900 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold">Need Immediate AC Repair or Service in {area.name}?</h2>
              <p className="text-sm text-slate-200">
                Technicians available 7 days a week from 8:00 AM to 8:00 PM with emergency dispatch.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <a
                href={CONTACT_DETAILS.phone.href}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary-700 shadow-md hover:bg-slate-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call +91 90804 95932
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* FAQs for this Location */}
          {area.localFaqs.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions in {area.name}
              </h2>
              <div className="space-y-4">
                {area.localFaqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/50 space-y-1.5 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Priority Service Hubs & Other Nearby Areas */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Nearby Service Areas in Chennai
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
              {otherLocations.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/service-areas/${loc.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-bold text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors"
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
