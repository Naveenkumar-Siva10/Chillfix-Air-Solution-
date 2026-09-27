/**
 * Authoritative Single Source of Truth for ChillFix Business Facts
 * Any reusable business information across components, pages, schemas,
 * and metadata must consume from this centralized module.
 */

export const BUSINESS_CONFIG = {
  identity: {
    primaryName: 'ChillFix AC Service',
    legalName: 'ChillFix Air Solution',
    tagline: 'Doorstep AC Service & Repair in Chennai — Based in Perungalathur',
    domain: 'chillfixairsolution.in',
    canonicalUrl: 'https://chillfixairsolution.in',
    description:
      'ChillFix AC Service provides professional AC servicing, repair, cleaning, deep cleaning, gas leak diagnosis, gas filling, and installation across Chennai, with focused service coverage around New Perungalathur, Perungalathur, Tambaram, and nearby areas.',
  },

  contact: {
    phone: '+919080495932',
    phoneDisplay: '+91 90804 95932',
    phoneHref: 'tel:+919080495932',
    whatsapp: '+919080495932',
    whatsappDisplay: '+91 90804 95932',
    whatsappHref: 'https://wa.me/919080495932',
    email: 'chennaichillfixacservice@gmail.com',
    emailHref: 'mailto:chennaichillfixacservice@gmail.com',
  },

  location: {
    model: 'Service Area Business (SAB)',
    baseLocality: 'Perungalathur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    postalCode: '600063',
    country: 'India',
    displayLocation: 'Based in Perungalathur and serving Chennai and nearby areas',
    coordinates: {
      lat: 12.9048,
      lng: 80.0886,
    },
  },

  hours: {
    regular: '9:00 AM – 11:00 PM, Monday–Sunday',
    opens: '09:00',
    closes: '23:00',
    weekdays: '9:00 AM – 11:00 PM',
    saturday: '9:00 AM – 11:00 PM',
    sunday: '9:00 AM – 11:00 PM',
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ] as const,
    // Emergency availability must be kept strictly separate from normal hours
    emergency: '24/7 Emergency AC Service Available',
  },

  pricing: {
    startingPrice: 249,
    generalService: 249,
    splitAcService: 299,
    windowAcService: 249,
    acCleaning: 299,
    coilCleaning: 699,
    foamJetWashDeepCleaning: 449,
    fullDeepCleaning: 1199,
    diagnosticInspection: 299, // Adjusted into final bill if repair proceeds
    gasCheck: 'FREE',
    gasTopUp: 799,
    completeGasRefill: '₹1,499–₹2,499',
    splitAcInstallation: 1199,
    priceRangeSchema: '₹249 - ₹1,499',
    notes: {
      diagnostic: '₹299 inspection fee is adjusted into the final bill when proceeding with repair.',
      installation: 'Split AC installation starts at ₹1,199. Additional copper pipe, bracket, or other materials charged separately where required.',
    },
  },

  warranty: {
    policy: 'On-site electrical and cooling performance testing before technician sign-off, with service assurance on all installed replacement components.',
  },

  serviceAreas: [
    'New Perungalathur',
    'Perungalathur',
    'Tambaram',
    'Vandalur',
    'Chromepet',
    'Pallavaram',
    'Manivakkam',
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
  ] as const,

  socialProfiles: {
    facebook: 'https://facebook.com/chillfixairsolution',
    instagram: 'https://instagram.com/chillfixairsolution',
    twitter: 'https://twitter.com/chillfixair',
    youtube: 'https://youtube.com/@chillfixairsolution',
  },
} as const;
