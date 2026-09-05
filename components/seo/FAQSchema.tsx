import { JsonLd } from './JsonLd';
import { SITE_CONFIG } from '@/constants/site';

export interface FAQItem {
  question: string;
  answer: string;
  id?: string;
  category?: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

/**
 * FAQ schema for the FAQ page, service pages, location pages, and pricing page.
 * Enables Google's rich FAQ results in search.
 * https://schema.org/FAQPage
 */
export function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: pageUrl ?? `${SITE_CONFIG.url}/faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd schema={schema} />;
}
