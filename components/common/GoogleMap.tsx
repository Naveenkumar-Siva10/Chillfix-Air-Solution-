'use client';

import { MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, CONTACT_DETAILS } from '@/constants/site';

interface GoogleMapProps {
  className?: string;
  height?: string;
  /** Override embed URL — swap this when you have a real Place ID */
  embedUrl?: string;
  /** Whether to show a business info panel beside the map */
  showPanel?: boolean;
}

/**
 * Reusable Google Maps embed component.
 *
 * --- HOW TO UPDATE ---
 * When you have your Google Maps Place ID or Embed URL:
 * 1. Go to Google Maps → Find your business → Share → Embed a map → Copy HTML
 * 2. Set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL in your .env.local
 * OR
 * 3. Pass the embedUrl prop directly to override without env changes.
 *
 * The component gracefully falls back to a Chennai-centered placeholder
 * when no URL is configured.
 */
export function GoogleMap({
  className,
  height = '450px',
  embedUrl,
  showPanel = false,
}: GoogleMapProps) {
  const defaultUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.7!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703000000000`;

  // Priority: prop > env variable > default placeholder (using || so empty string falls back)
  const resolvedUrl = (embedUrl && embedUrl.trim() !== '')
    ? embedUrl
    : (SITE_CONFIG.googleMaps.embedUrl && SITE_CONFIG.googleMaps.embedUrl.trim() !== '')
    ? SITE_CONFIG.googleMaps.embedUrl
    : defaultUrl;

  const hasRealUrl = Boolean((embedUrl && embedUrl.trim() !== '') || (SITE_CONFIG.googleMaps.embedUrl && SITE_CONFIG.googleMaps.embedUrl.trim() !== ''));

  if (showPanel) {
    return (
      <div className={cn('overflow-hidden rounded-3xl border border-slate-100 shadow-card dark:border-slate-800', className)}>
        <div className="grid lg:grid-cols-[1fr_340px]">
          {/* Map */}
          <div className="relative" style={{ height }}>
            <iframe
              src={resolvedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ChillFix Air Solution location map"
              className="absolute inset-0 h-full w-full"
            />
            {!hasRealUrl && (
              <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-4">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  📍 Placeholder — Update with your business location
                </span>
              </div>
            )}
          </div>

          {/* Business info panel */}
          <div className="flex flex-col justify-between bg-white p-8 dark:bg-slate-900">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{SITE_CONFIG.name}</h3>
                  <p className="text-sm text-slate-500">AC Service Center</p>
                </div>
              </div>

              <div className="space-y-4">
                <InfoRow label="Address" value="Chennai, Tamil Nadu, India" />
                <InfoRow label="Phone" value={CONTACT_DETAILS.phone.display} href={CONTACT_DETAILS.phone.href} />
                <InfoRow label="Email" value={SITE_CONFIG.email} href={`mailto:${SITE_CONFIG.email}`} />
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Business Hours
                  </p>
                  <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <p><span className="font-medium">Mon–Fri:</span> {SITE_CONFIG.businessHours.weekdays}</p>
                    <p><span className="font-medium">Saturday:</span> {SITE_CONFIG.businessHours.saturday}</p>
                    <p><span className="font-medium">Sunday:</span> {SITE_CONFIG.businessHours.sunday}</p>
                    <p className="mt-2 font-semibold text-accent-600">
                      ⚡ {SITE_CONFIG.businessHours.emergency}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(SITE_CONFIG.name + ' Chennai')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-primary-500 px-4 py-3 text-sm font-semibold text-primary-500 transition-all hover:bg-primary-500 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Simple standalone map
  return (
    <div
      className={cn('relative overflow-hidden rounded-3xl border border-slate-100 shadow-card dark:border-slate-800', className)}
      style={{ height }}
    >
      <iframe
        src={resolvedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ChillFix Air Solution location map"
        className="absolute inset-0 h-full w-full"
      />
      {!hasRealUrl && (
        <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-4">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            📍 Placeholder — Update with your business location
          </span>
        </div>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-sm font-medium text-primary-500 hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-slate-700 dark:text-slate-300">{value}</p>
      )}
    </div>
  );
}
