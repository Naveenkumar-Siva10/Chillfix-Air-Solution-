/**
 * Site-wide configuration constants
 * Update these values for production deployment
 */

export const SITE_CONFIG = {
  name: 'ChillFix AC Service',
  gbpName: 'ChillFix AC Service Chennai',
  tagline: 'AC Service & Repair in Chennai — Based in Perungalathur & Serving Nearby Areas',
  description:
    'ChillFix AC Service provides professional AC servicing, repair, cleaning, deep cleaning, gas leak diagnosis, gas filling and installation across Chennai, with strong service coverage around Perungalathur, Tambaram, Vandalur, Manivakkam, Chromepet and nearby areas.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chillfixairsolution.in',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'chennaichillfixacservice@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+919080495932',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '+919080495932',
  address: {
    street: 'Perungalathur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    postalCode: '600063',
  },
  googleMaps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.068925!3d13.047525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70f6e073ef3!2sPerungalathur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    defaultCenter: { lat: 12.9048, lng: 80.0886 },
  },
  social: {
    facebook: 'https://facebook.com/chillfixairsolution',
    instagram: 'https://instagram.com/chillfixairsolution',
    twitter: 'https://twitter.com/chillfixair',
    youtube: 'https://youtube.com/@chillfixairsolution',
  },
  rating: {
    average: 4.9,
    count: 850,
  },
  yearsOfExperience: '10+',
  stats: {
    yearsInBusiness: '10+',
    techniciansCertified: 'Trained Technicians',
    customersServed: 'Thousands of',
    responseNotice: '< 2 Hour Response',
    pricingNotice: 'Transparent Upfront Quotes',
  },
  businessHours: {
    weekdays: '8:00 AM – 8:00 PM',
    saturday: '8:00 AM – 6:00 PM',
    sunday: '10:00 AM – 4:00 PM',
    emergency: '24/7 Emergency Line Open',
  },
  founded: '2013',
} as const;

export const CONTACT_DETAILS = {
  phone: {
    display: '+91 90804 95932',
    value: '+919080495932',
    href: 'tel:+919080495932',
  },
  whatsapp: {
    display: '+91 90804 95932',
    value: '+919080495932',
    href: 'https://wa.me/919080495932',
    withMessage: (msg: string) =>
      `https://wa.me/919080495932?text=${encodeURIComponent(msg)}`,
  },
  email: {
    display: 'chennaichillfixacservice@gmail.com',
    value: 'chennaichillfixacservice@gmail.com',
    href: 'mailto:chennaichillfixacservice@gmail.com',
  },
} as const;

export const SERVICE_AREAS = [
  'Perungalathur',
  'Tambaram',
  'Vandalur',
  'Manivakkam',
  'Chromepet',
  'Pallavaram',
  'Mudichur',
  'Selaiyur',
  'Chitlapakkam',
  'Pammal',
  'Medavakkam',
  'Sholinganallur',
  'OMR (Old Mahabalipuram Road)',
  'Anna Nagar',
  'Adyar',
  'Velachery',
  'Porur',
  'Nungambakkam',
  'Mylapore',
  'Guindy',
  'Vadapalani',
] as const;
