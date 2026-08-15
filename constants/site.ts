/**
 * Site-wide configuration constants
 * Update these values for production deployment
 */

export const SITE_CONFIG = {
  name: 'ChillFix Air Solution',
  tagline: 'Chennai\'s Most Trusted AC Service Experts',
  description:
    'Professional air conditioner installation, repair, gas filling, deep cleaning, and annual maintenance services in Chennai, Tamil Nadu. Available 24/7 for emergency AC repairs.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chillfix-air-solution-ok6k.vercel.app',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'chennaichillfixacservice@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+919080495932',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '+919080495932',
  address: {
    street: 'Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    postalCode: '600001',
  },
  businessHours: {
    weekdays: '8:00 AM – 8:00 PM',
    saturday: '8:00 AM – 6:00 PM',
    sunday: '10:00 AM – 4:00 PM',
    emergency: '24/7 Emergency Service Available',
  },
  social: {
    facebook: 'https://facebook.com/chillfixairsolution',
    instagram: 'https://instagram.com/chillfixairsolution',
    twitter: 'https://twitter.com/chillfixac',
    youtube: 'https://youtube.com/@chillfixairsolution',
  },
  // Google Maps — replace with actual Place ID when available
  googleMaps: {
    placeId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID ?? '',
    embedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? '',
    // Default coordinates for Chennai city center
    defaultCenter: {
      lat: 13.0827,
      lng: 80.2707,
    },
  },
  founded: '2015',
  yearsOfExperience: new Date().getFullYear() - 2015,
  stats: {
    customersServed: '10,000+',
    yearsInBusiness: `${new Date().getFullYear() - 2015}+`,
    techniciansCertified: '50+',
    citiesServed: '1',
    responseTime: '< 2 Hours',
    satisfactionRate: '98%',
  },
} as const;

export const CONTACT_DETAILS = {
  phone: {
    display: '+91 90804 95932',
    href: `tel:${SITE_CONFIG.phone}`,
    raw: SITE_CONFIG.phone,
  },
  whatsapp: {
    display: '+91 90804 95932',
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}`,
    withMessage: (msg: string) =>
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`,
  },
  email: {
    display: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
} as const;

export const SERVICE_AREAS = [
  'Anna Nagar',
  'Adyar',
  'Velachery',
  'Tambaram',
  'Porur',
  'Nungambakkam',
  'T. Nagar',
  'Vadapalani',
  'Kodambakkam',
  'Mylapore',
  'Perambur',
  'Egmore',
  'Royapettah',
  'Kilpauk',
  'Guindy',
  'Sholinganallur',
  'OMR (Old Mahabalipuram Road)',
  'ECR (East Coast Road)',
  'Chromepet',
  'Pallavaram',
  'Avadi',
  'Poonamallee',
  'Ambattur',
  'Kolathur',
  'Perungudi',
] as const;

export type ServiceArea = (typeof SERVICE_AREAS)[number];
