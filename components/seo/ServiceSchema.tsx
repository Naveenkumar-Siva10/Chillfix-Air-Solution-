import { JsonLd } from './JsonLd';
import type { Service } from '@/types';
import { SITE_CONFIG } from '@/constants/site';

interface ServiceSchemaProps {
  service: Service;
}

/**
 * Service schema for individual service detail pages.
 * https://schema.org/Service
 */
export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
      containedInPlace: {
        '@type': 'State',
        name: 'Tamil Nadu',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: service.startingPrice,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'INR',
        price: service.startingPrice,
        description: `Starting from ₹${service.startingPrice}`,
      },
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
    serviceOutput: {
      '@type': 'Thing',
      name: `Professional ${service.name}`,
    },
    termsOfService: `${SITE_CONFIG.url}/terms`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Offer',
          name: feature,
        },
      })),
    },
  };

  return <JsonLd schema={schema} />;
}
