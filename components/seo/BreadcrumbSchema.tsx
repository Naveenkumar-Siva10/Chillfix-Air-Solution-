import { JsonLd } from './JsonLd';
import { SITE_CONFIG } from '@/constants/site';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb JSON-LD schema for sub-pages.
 * Renders breadcrumb trail in Google search results.
 * https://schema.org/BreadcrumbList
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      // Always start with home
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.url,
      },
      // Add provided items starting from position 2
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${SITE_CONFIG.url}${item.href}`,
      })),
    ],
  };

  return <JsonLd schema={schema} />;
}
