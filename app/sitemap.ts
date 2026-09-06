import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site';
import { AREA_LOCATIONS } from '@/constants/areas';
import { getBlogSlugs } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const lastMod = new Date('2026-09-01');

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
    // Temporarily omitted from sitemap while blog is disabled from public navigation:
    // { url: `${baseUrl}/blog`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Top-level Service URLs
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ac-service-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-repair-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-deep-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-gas-filling-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-installation-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-maintenance-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ac-service-price-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Location Landing Pages (/service-areas/[slug])
  const locationPages: MetadataRoute.Sitemap = AREA_LOCATIONS.map((area) => ({
    url: `${baseUrl}/service-areas/${area.id}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Blog Article Pages (/blog/[slug]) — uncomment when articles are ready to publish
  // const blogSlugs = getBlogSlugs();
  // const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
  //   url: `${baseUrl}/blog/${slug}`,
  //   lastModified: lastMod,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // }));

  return [...staticPages, ...servicePages, ...locationPages];
}
