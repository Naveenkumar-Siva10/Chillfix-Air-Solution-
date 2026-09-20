import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { SERVICES, SERVICE_SLUG_ALIASES } from '@/constants/services';
import { formatPrice, getServiceUrl } from '@/lib/utils';

export function getServiceMetadata(slug: string): Metadata {
  let targetSlug = slug;
  if (SERVICE_SLUG_ALIASES[slug]) {
    targetSlug = SERVICE_SLUG_ALIASES[slug];
  }
  const service = SERVICES.find((s) => s.slug === targetSlug) ?? SERVICES[0];

  const title = service.metaTitle ?? `${service.name} | ChillFix AC Service`;
  const description =
    service.metaDescription ??
    `${service.shortDescription} Starting from ${formatPrice(service.startingPrice)}. Call +91 90804 95932.`;

  return generatePageMetadata({
    title,
    description,
    canonicalPath: getServiceUrl(service.slug),
    keywords: [
      service.name,
      `${service.name} Chennai`,
      'AC service Chennai',
      'AC repair Chennai',
      'air conditioner service Chennai',
    ],
  });
}
