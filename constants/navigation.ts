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
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Split AC Service', href: '/services/split-ac-service' },
      { label: 'Window AC Service', href: '/services/window-ac-service' },
      { label: 'Cassette AC Service', href: '/services/cassette-ac-service' },
      { label: 'Commercial AC', href: '/services/commercial-ac-service' },
      { label: 'AC Installation', href: '/services/ac-installation' },
      { label: 'Gas Filling', href: '/services/gas-filling' },
      { label: 'Cooling Repair', href: '/services/cooling-repair' },
      { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
      { label: 'PCB Repair', href: '/services/pcb-repair' },
      { label: 'Compressor Repair', href: '/services/compressor-repair' },
      { label: 'Water Leakage Fix', href: '/services/water-leakage-repair' },
      { label: 'Annual Maintenance', href: '/services/annual-maintenance' },
    ],
  },
  {
    label: 'AMC Plans',
    href: '/amc-plans',
    badge: 'Popular',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Blog',
    href: '/blog',
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
    { label: 'Split AC Service', href: '/services/split-ac-service' },
    { label: 'Window AC Service', href: '/services/window-ac-service' },
    { label: 'AC Installation', href: '/services/ac-installation' },
    { label: 'Gas Filling', href: '/services/gas-filling' },
    { label: 'AC Deep Cleaning', href: '/services/deep-cleaning' },
    { label: 'Compressor Repair', href: '/services/compressor-repair' },
    { label: 'AMC Plans', href: '/amc-plans' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/about#process' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
