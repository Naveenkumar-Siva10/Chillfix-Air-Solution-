import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site';
import { AREA_LOCATIONS } from '@/constants/areas';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const lastMod = new Date('2026-09-20');

  // Primary static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/amc-plans`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/pricing`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/faq`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/testimonials`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Top-level Service URLs (All 200 OK, unique self-referencing canonicals)
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ac-service-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-repair-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-deep-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-gas-filling-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-installation-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-maintenance-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
  ];

  // Location Landing Pages (/service-areas/[slug]) - 21 verified Chennai areas
  const locationPages: MetadataRoute.Sitemap = AREA_LOCATIONS.map((area) => ({
    url: `${baseUrl}/service-areas/${area.id}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: area.id === 'new-perungalathur' || area.id === 'perungalathur' ? 0.95 : 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
