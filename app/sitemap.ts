import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;
  const lastMod = new Date('2026-09-01');

  // Primary canonical pages
  return [
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

    // Top-level Service URLs
    { url: `${baseUrl}/ac-service-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-repair-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-deep-cleaning-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-gas-filling-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-installation-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-maintenance-chennai`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/ac-service-price-chennai`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },

    // Top-level Location URLs
    { url: `${baseUrl}/ac-service-perungalathur`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/ac-service-tambaram`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ac-service-vandalur`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-service-manivakkam`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ac-service-chromepet`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
