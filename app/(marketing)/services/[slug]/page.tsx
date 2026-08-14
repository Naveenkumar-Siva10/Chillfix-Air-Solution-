import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { SERVICES } from '@/constants/services';
import { CONTACT_DETAILS } from '@/constants/site';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { CheckCircle2, Clock, ShieldCheck, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.name} in Chennai — Starting ${formatPrice(service.startingPrice)}`,
    description: service.shortDescription,
    canonicalPath: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappMsg = `Hi! I am looking for ${service.name} in Chennai. Can you please share details and book a service?`;

  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-12">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Link>

        {/* Hero Banner for Service */}
        <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-900 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {service.category} Service
            </span>
            <h1 className="font-display text-3xl font-bold sm:text-5xl">{service.name}</h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">{service.description}</p>

            <div className="pt-4 flex flex-wrap gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent-400" />
                <span>Warranty: <strong>{service.warranty}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary-300" />
                <span>Time: <strong>{service.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-accent-400">Starting from {formatPrice(service.startingPrice)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Booking Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: What's Included */}
          <div className="lg:col-span-7 space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              What is included in {service.name}?
            </h3>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-500">
              <p>📍 Available across all 25+ service areas in Chennai (Anna Nagar, Adyar, Velachery, OMR, etc.)</p>
            </div>
          </div>

          {/* Right: Booking CTA */}
          <div className="lg:col-span-5 space-y-6 rounded-3xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Book {service.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Our technician will reach your location within 2 hours. Transparent quote before work begins.
              </p>

              <div className="my-6 rounded-2xl bg-white p-4 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500">Starting Price</p>
                <p className="text-3xl font-bold text-primary-500">{formatPrice(service.startingPrice)}</p>
                <p className="text-xs text-slate-400 mt-1">Includes diagnosis & service labour</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={CONTACT_DETAILS.phone.href}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />
                Call Now — Free Diagnosis
              </a>
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a]"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
