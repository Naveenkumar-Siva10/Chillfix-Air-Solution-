import { JsonLd } from './JsonLd';
import { SITE_CONFIG, SERVICE_AREAS } from '@/constants/site';

/**
 * LocalBusiness / HVACBusiness Schema.org JSON-LD structured data.
 * Optimizes local pack ranking in Google Maps & Search results for Chennai AC services.
 * https://schema.org/HVACBusiness
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: 'ChillFix AC Service Chennai',
    description:
      'ChillFix Air Solution is Chennai\'s top-rated AC service company specializing in Split AC, Window AC, Cassette AC installation, repair, gas refilling, jet wash deep cleaning, and 24/7 emergency AC repairs.',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    foundingDate: SITE_CONFIG.founded,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    priceRange: '₹₹',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/icon.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${SITE_CONFIG.url}/images/hero-technician.jpg`,
      `${SITE_CONFIG.url}/icon.png`,
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: `${area}, Chennai`,
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
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
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
      name: 'AC Services in Chennai',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Repair in Chennai',
            description: 'Fast diagnosis and repair for all AC brands in Chennai.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Service in Chennai',
            description: 'Comprehensive AC maintenance and jet-wash deep cleaning.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Installation in Chennai',
            description: 'Professional Split & Window AC installation with 90-day warranty.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Gas Filling in Chennai',
            description: 'Eco-friendly R32 / R410A / R22 AC gas leak repair and refilling.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Split AC Service Chennai',
            description: 'Specialized Split AC indoor unit cleaning, PCB repair, and cooling fix.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window AC Service Chennai',
            description: 'Expert Window AC servicing, coil cleaning, and noise fix.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Maintenance (AMC Plans)',
            description: 'Worry-free annual AC maintenance contracts for Chennai homes & offices.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency AC Repair Chennai',
            description: '24/7 emergency technician dispatch within 2 hours across Chennai.',
          },
        },
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
