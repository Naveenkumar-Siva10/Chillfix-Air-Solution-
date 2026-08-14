import type { FAQ } from '@/types/faq';

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How much does AC service cost in Chennai?',
    answer:
      'Our AC service starts at ₹299 for basic cleaning and maintenance. Gas refilling starts at ₹799, and installation from ₹599. We offer transparent pricing with no hidden charges. Contact us for a free quote based on your specific requirements.',
    category: 'pricing',
  },
  {
    id: 'faq-2',
    question: 'Do you provide emergency AC repair services in Chennai?',
    answer:
      'Yes! ChillFix Air Solution offers 24/7 emergency AC repair services across Chennai. Our technicians can reach you within 2 hours for emergency calls. Contact us on WhatsApp or call our emergency helpline anytime.',
    category: 'service',
  },
  {
    id: 'faq-3',
    question: 'Which AC brands do you service?',
    answer:
      'We service all major AC brands including Samsung, LG, Daikin, Voltas, Hitachi, Carrier, Blue Star, Whirlpool, Panasonic, O\'General, Godrej, and many more. Our technicians are trained and certified for all brands.',
    category: 'service',
  },
  {
    id: 'faq-4',
    question: 'How often should I service my AC?',
    answer:
      'We recommend servicing your AC at least twice a year — once before summer (March–April) and once after monsoon (October). If you use it heavily, quarterly servicing ensures peak efficiency and extends the lifespan of your unit.',
    category: 'maintenance',
  },
  {
    id: 'faq-5',
    question: 'What is included in an AC Annual Maintenance Contract (AMC)?',
    answer:
      'Our AMC includes 2–4 scheduled servicing visits per year, priority emergency support, free labour charges on covered repairs, discounts on spare parts, and a detailed performance report after each service. We offer plans for single units to entire commercial buildings.',
    category: 'amc',
  },
  {
    id: 'faq-6',
    question: 'Why is my AC not cooling properly?',
    answer:
      'The most common reasons are: low refrigerant gas, dirty air filters, blocked coils, faulty thermostat, or compressor issues. Our technicians diagnose the root cause and fix it efficiently. Most cooling issues are resolved in a single visit.',
    category: 'troubleshooting',
  },
  {
    id: 'faq-7',
    question: 'Do you provide a warranty on repairs?',
    answer:
      'Yes. All our repairs come with a warranty — 30 days for gas refilling, 60 days for general repairs, 90 days for major repairs and installations, and 1 year for compressor replacements. Our workmanship warranty ensures your peace of mind.',
    category: 'warranty',
  },
  {
    id: 'faq-8',
    question: 'How long does AC installation take?',
    answer:
      'A standard split AC installation typically takes 2–3 hours. This includes wall mounting, copper pipe work, electrical connections, and performance testing. We offer same-day installation if you book before noon.',
    category: 'installation',
  },
  {
    id: 'faq-9',
    question: 'What areas in Chennai do you cover?',
    answer:
      'We cover all major areas in Chennai including Anna Nagar, Adyar, Velachery, T. Nagar, Nungambakkam, Tambaram, Porur, Mylapore, Sholinganallur, OMR, ECR, and 25+ more locations. If you\'re unsure, just call or WhatsApp us with your pin code.',
    category: 'coverage',
  },
  {
    id: 'faq-10',
    question: 'Do you service commercial buildings and offices?',
    answer:
      'Absolutely. We specialize in commercial AC services for offices, hospitals, schools, restaurants, and commercial buildings. We handle cassette ACs, tower ACs, central AC systems, and multi-unit installations with dedicated maintenance contracts.',
    category: 'service',
  },
  {
    id: 'faq-11',
    question: 'How do I book an AC service?',
    answer:
      'Booking is easy! You can call us directly, send us a WhatsApp message, or fill in the booking form on our website. We respond within 30 minutes and schedule your service at your preferred time slot.',
    category: 'booking',
  },
  {
    id: 'faq-12',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, UPI (PhonePe, Google Pay, Paytm), NEFT/RTGS bank transfer, and all major debit/credit cards. For AMC contracts, we offer monthly, quarterly, and annual payment options.',
    category: 'payment',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All FAQs' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'service', label: 'Services' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'amc', label: 'AMC Plans' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'warranty', label: 'Warranty' },
  { id: 'installation', label: 'Installation' },
  { id: 'booking', label: 'Booking' },
  { id: 'coverage', label: 'Coverage' },
  { id: 'payment', label: 'Payment' },
] as const;
