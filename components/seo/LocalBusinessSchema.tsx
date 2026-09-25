import { JsonLd } from './JsonLd';
import { SITE_CONFIG, SERVICE_AREAS } from '@/constants/site';

/**
 * LocalBusiness / HVACBusiness Schema.org JSON-LD structured data.
 * Fully validated against Google Search Console & Rich Results guidelines.
 * Complies with Google's policy prohibiting self-serving AggregateRating for local business sites.
 * Matches exact Google Business Profile name: 'ChillFix AC Service Chennai'
 * https://schema.org/HVACBusiness
 */
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.gbpName,
    alternateName: [SITE_CONFIG.legalName, 'ChillFix'],
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '23:00',
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
            description: 'Fast diagnosis and repair for Split, Window, and Cassette ACs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Service in Chennai',
            description: 'Foam jet-wash deep cleaning and preventative AC servicing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Installation in Chennai',
            description: 'Professional AC uninstallation and installation with post-fitting testing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Gas Filling in Chennai',
            description: 'R32 / R410A / R22 gas leak fix and precision refilling.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Split AC Service Chennai',
            description: 'Indoor coil cleaning, PCB repair, and cooling performance optimization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window AC Service Chennai',
            description: 'Window unit servicing, filter wash, and compressor noise reduction.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AMC Maintenance',
            description: 'Annual Maintenance Contracts for residential and commercial ACs in Chennai.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency AC Repair',
            description: '24/7 emergency AC service and repair dispatch across Chennai.',
          },
        },
      ],
    },
  };

  return <JsonLd schema={schema} />;
}
