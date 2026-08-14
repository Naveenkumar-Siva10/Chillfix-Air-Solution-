import { JsonLd } from './JsonLd';
import type { FAQ } from '@/types';
import { SITE_CONFIG } from '@/constants/site';

interface FAQSchemaProps {
  faqs: FAQ[];
  pageUrl?: string;
}

/**
 * FAQ schema for the FAQ page and FAQ preview sections.
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
