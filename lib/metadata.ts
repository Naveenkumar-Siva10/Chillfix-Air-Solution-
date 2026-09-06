import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generates consistent Next.js Metadata for every page.
 * Handles title, description, Open Graph, Twitter Cards, robots, and canonical URLs.
 */
export function generatePageMetadata({
  title,
  description,
  canonicalPath = '',
  ogImage = '/images/og/default-og.jpg',
  noIndex = false,
  keywords = [],
}: GenerateMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}${canonicalPath}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`;

  const defaultKeywords = [
    'AC service Chennai',
    'air conditioner repair Chennai',
    'AC installation Chennai',
    'split AC repair Chennai',
    'AC maintenance Chennai',
    'ChillFix Air Solution',
    'AC gas filling Chennai',
    'AC deep cleaning Chennai',
  ];

  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [absoluteOgImage],
    },
    verification: {
      google: 'google37f78767d361f72b',
    },
  };
}
