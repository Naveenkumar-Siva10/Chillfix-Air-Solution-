import { JsonLd } from './JsonLd';
import { SITE_CONFIG } from '@/constants/site';

/**
 * Organization & WebSite JSON-LD Schema.
 * Enables Google Sitelinks, Sitelinks SearchBox, and Organization identity graph.
 * https://schema.org/Organization
 * https://schema.org/WebSite
 */
export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: 'ChillFix Air Solution',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon.png`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'ta'],
      },
    ],
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.youtube,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={websiteSchema} />
    </>
  );
}
