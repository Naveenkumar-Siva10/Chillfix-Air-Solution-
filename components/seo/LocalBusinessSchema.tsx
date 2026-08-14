import { JsonLd } from './JsonLd';
import { SITE_CONFIG, SERVICE_AREAS } from '@/constants/site';

/**
 * LocalBusiness schema for the homepage and contact page.
 * Tells Google this is a local AC service business in Chennai.
 * https://schema.org/LocalBusiness
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    foundingDate: SITE_CONFIG.founded,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
    priceRange: '₹₹',
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'City',
        name: 'Chennai',
        containedInPlace: {
          '@type': 'State',
          name: 'Tamil Nadu',
          containedInPlace: {
            '@type': 'Country',
            name: 'India',
          },
        },
      },
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chennai',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.googleMaps.defaultCenter.lat,
      longitude: SITE_CONFIG.googleMaps.defaultCenter.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.youtube,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AC Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Gas Filling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Deep Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '850',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return <JsonLd schema={schema} />;
}
