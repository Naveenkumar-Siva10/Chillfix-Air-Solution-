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
    href: '/services',
    children: [
      { label: 'AC Service Perungalathur', href: '/service-areas/perungalathur' },
      { label: 'AC Service Tambaram', href: '/service-areas/tambaram' },
      { label: 'AC Service Chromepet', href: '/service-areas/chromepet' },
      { label: 'AC Service Pallavaram', href: '/service-areas/pallavaram' },
      { label: 'AC Service Vandalur', href: '/service-areas/vandalur' },
      { label: 'AC Service Manivakkam', href: '/service-areas/manivakkam' },
      { label: 'AC Service Selaiyur', href: '/service-areas/selaiyur' },
      { label: 'AC Service Medavakkam', href: '/service-areas/medavakkam' },
      { label: 'AC Service OMR', href: '/service-areas/omr' },
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
  // Temporarily hidden until articles are published:
  // {
  //   label: 'Blog',
  //   href: '/blog',
  // },
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
    { label: 'Perungalathur AC Service', href: '/service-areas/perungalathur' },
    { label: 'Tambaram AC Service', href: '/service-areas/tambaram' },
    { label: 'Chromepet AC Service', href: '/service-areas/chromepet' },
    { label: 'Pallavaram AC Service', href: '/service-areas/pallavaram' },
    { label: 'Vandalur AC Service', href: '/service-areas/vandalur' },
    { label: 'Manivakkam AC Service', href: '/service-areas/manivakkam' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    // Temporarily hidden until articles are published:
    // { label: 'Blog Articles', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
