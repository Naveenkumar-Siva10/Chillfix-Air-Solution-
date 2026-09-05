export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AC Service in Chennai', href: '/ac-service-chennai' },
      { label: 'AC Repair in Chennai', href: '/ac-repair-chennai' },
      { label: 'AC Cleaning in Chennai', href: '/ac-cleaning-chennai' },
      { label: 'AC Deep Cleaning', href: '/ac-deep-cleaning-chennai' },
      { label: 'AC Gas Filling & Leak Fix', href: '/ac-gas-filling-chennai' },
      { label: 'AC Installation in Chennai', href: '/ac-installation-chennai' },
      { label: 'AC Maintenance (AMC)', href: '/ac-maintenance-chennai' },
    ],
  },
  {
    label: 'Areas We Serve',
    href: '/#why-us',
    children: [
      { label: 'AC Service Perungalathur', href: '/ac-service-perungalathur' },
      { label: 'AC Service Tambaram', href: '/ac-service-tambaram' },
      { label: 'AC Service Vandalur', href: '/ac-service-vandalur' },
      { label: 'AC Service Manivakkam', href: '/ac-service-manivakkam' },
      { label: 'AC Service Chromepet', href: '/ac-service-chromepet' },
      { label: 'AC Service Pallavaram', href: '/areas/ac-service-pallavaram' },
      { label: 'AC Service Selaiyur', href: '/areas/ac-service-selaiyur' },
      { label: 'AC Service Medavakkam', href: '/areas/ac-service-medavakkam' },
      { label: 'AC Service OMR', href: '/areas/ac-service-omr' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_NAV = {
  services: [
    { label: 'AC Service Chennai', href: '/ac-service-chennai' },
    { label: 'AC Repair Chennai', href: '/ac-repair-chennai' },
    { label: 'AC Cleaning Chennai', href: '/ac-cleaning-chennai' },
    { label: 'AC Deep Cleaning', href: '/ac-deep-cleaning-chennai' },
    { label: 'AC Gas Filling', href: '/ac-gas-filling-chennai' },
    { label: 'AC Installation', href: '/ac-installation-chennai' },
    { label: 'AC Service Price List', href: '/pricing' },
  ],
  locations: [
    { label: 'Perungalathur AC Service', href: '/ac-service-perungalathur' },
    { label: 'Tambaram AC Service', href: '/ac-service-tambaram' },
    { label: 'Vandalur AC Service', href: '/ac-service-vandalur' },
    { label: 'Manivakkam AC Service', href: '/ac-service-manivakkam' },
    { label: 'Chromepet AC Service', href: '/ac-service-chromepet' },
    { label: 'Pallavaram AC Service', href: '/areas/ac-service-pallavaram' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/about#process' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
