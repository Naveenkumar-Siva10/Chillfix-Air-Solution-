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
      { label: 'AC Service in Chennai', href: '/services/ac-service-chennai' },
      { label: 'AC Repair in Chennai', href: '/services/ac-repair-chennai' },
      { label: 'AC Deep Cleaning', href: '/services/ac-deep-cleaning-chennai' },
      { label: 'AC Gas Filling', href: '/services/ac-gas-filling-chennai' },
      { label: 'AC Installation', href: '/services/ac-installation-chennai' },
      { label: 'Split AC Service', href: '/services/split-ac-service-chennai' },
      { label: 'Window AC Service', href: '/services/window-ac-service-chennai' },
      { label: 'AC Maintenance (AMC)', href: '/services/ac-maintenance-chennai' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/#why-us',
    children: [
      { label: 'AC Service Tambaram', href: '/areas/ac-service-tambaram' },
      { label: 'AC Service Chromepet', href: '/areas/ac-service-chromepet' },
      { label: 'AC Service Pallavaram', href: '/areas/ac-service-pallavaram' },
      { label: 'AC Service Velachery', href: '/areas/ac-service-velachery' },
      { label: 'AC Service Porur', href: '/areas/ac-service-porur' },
      { label: 'AC Service Adyar', href: '/areas/ac-service-adyar' },
      { label: 'AC Service Anna Nagar', href: '/areas/ac-service-anna-nagar' },
      { label: 'AC Service Sholinganallur', href: '/areas/ac-service-sholinganallur' },
      { label: 'AC Service OMR', href: '/areas/ac-service-omr' },
    ],
  },
  {
    label: 'AMC Plans',
    href: '/amc-plans',
    badge: 'Popular',
  },
  {
    label: 'Pricing',
    href: '/pricing/ac-service-price-chennai',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_NAV = {
  services: [
    { label: 'AC Service Chennai', href: '/services/ac-service-chennai' },
    { label: 'AC Repair Chennai', href: '/services/ac-repair-chennai' },
    { label: 'AC Deep Cleaning', href: '/services/ac-deep-cleaning-chennai' },
    { label: 'AC Gas Filling', href: '/services/ac-gas-filling-chennai' },
    { label: 'AC Installation', href: '/services/ac-installation-chennai' },
    { label: 'Split AC Service', href: '/services/split-ac-service-chennai' },
    { label: 'Window AC Service', href: '/services/window-ac-service-chennai' },
    { label: 'AC Price List', href: '/pricing/ac-service-price-chennai' },
  ],
  locations: [
    { label: 'Tambaram AC Service', href: '/areas/ac-service-tambaram' },
    { label: 'Chromepet AC Service', href: '/areas/ac-service-chromepet' },
    { label: 'Velachery AC Service', href: '/areas/ac-service-velachery' },
    { label: 'Porur AC Service', href: '/areas/ac-service-porur' },
    { label: 'Adyar AC Service', href: '/areas/ac-service-adyar' },
    { label: 'Anna Nagar AC Service', href: '/areas/ac-service-anna-nagar' },
    { label: 'Sholinganallur AC Service', href: '/areas/ac-service-sholinganallur' },
    { label: 'OMR AC Service', href: '/areas/ac-service-omr' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/about#process' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
