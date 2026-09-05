export interface AreaLocation {
  id: string;
  slug: string;
  name: string;
  zone: string;
  postalCode: string;
  responseTime: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  nearbyHubs: string[];
  localFaqs: { question: string; answer: string }[];
}

export const AREA_LOCATIONS: AreaLocation[] = [
  {
    id: 'tambaram',
    slug: 'ac-service-tambaram',
    name: 'Tambaram',
    zone: 'South Chennai',
    postalCode: '600045',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Tambaram | AC Repair & Cleaning | ChillFix',
    metaDescription: 'Doorstep AC service in Tambaram, Chennai. Split & Window AC repair, foam jet wash cleaning, gas filling & installation. Technician arrives within 60 mins.',
    heading: 'Fast AC Service & Repair in Tambaram, Chennai',
    intro: 'ChillFix Air Solution delivers fast, doorstep AC servicing, jet wash cleaning, gas leak repair, and Split/Window AC installation across Tambaram East, Tambaram West, Sanatorium, and Selaiyur. Our technicians arrive within 60 minutes.',
    nearbyHubs: ['Tambaram East', 'Tambaram West', 'Tambaram Sanatorium', 'Selaiyur', 'Camp Road', 'Padmavathi Nagar'],
    localFaqs: [
      { question: 'How quickly can an AC technician reach Tambaram?', answer: 'We have dedicated mobile service units stationed in Tambaram West near the GST Road signal, allowing technicians to reach any location in Tambaram within 30 to 60 minutes.' },
      { question: 'Do you service Split and Window ACs in Tambaram East?', answer: 'Yes! We service all Split, Window, Inverter, and Cassette AC models across Tambaram East, Selaiyur, and Camp Road.' },
    ],
  },
  {
    id: 'chromepet',
    slug: 'ac-service-chromepet',
    name: 'Chromepet',
    zone: 'South Chennai',
    postalCode: '600044',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Chromepet | AC Repair & Gas Filling | ChillFix',
    metaDescription: 'Professional AC service in Chromepet, Chennai. AC repair, jet wash cleaning, gas refilling & installation near MIT Flyover & Radha Nagar.',
    heading: 'Doorstep AC Service & Repair in Chromepet, Chennai',
    intro: 'ChillFix Air Solution provides certified AC repair and maintenance in Chromepet. Whether your AC has stopped cooling near Radha Nagar or requires jet wash servicing around MIT Campus, our local team reaches you within 1 hour.',
    nearbyHubs: ['Radha Nagar', 'Hasthinapuram', 'MIT Campus Road', 'Nemilichery', 'CLRI Nagar'],
    localFaqs: [
      { question: 'What is the service charge for AC repair in Chromepet?', answer: 'Diagnostic inspection starts at ₹349 in Chromepet, which is fully adjusted into your final bill when proceeding with repair.' },
      { question: 'Are emergency AC technicians available in Chromepet at night?', answer: 'Yes! We operate 24/7 emergency dispatch units along GST Road and Hasthinapuram.' },
    ],
  },
  {
    id: 'pallavaram',
    slug: 'ac-service-pallavaram',
    name: 'Pallavaram',
    zone: 'South Chennai',
    postalCode: '600043',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Pallavaram | Doorstep AC Repair & Cleaning',
    metaDescription: 'Trusted AC service in Pallavaram, Chennai. Fast Split AC & Window AC repair, foam jet wash, gas filling & AMC contracts near Zamin Pallavaram.',
    heading: 'Expert AC Repair & Service in Pallavaram, Chennai',
    intro: 'Looking for reliable AC technicians in Pallavaram? ChillFix offers complete AC repair, jet wash cleaning, gas leak detection, and new AC installation across Zamin Pallavaram, Old Pallavaram, and Cantonment area.',
    nearbyHubs: ['Zamin Pallavaram', 'Old Pallavaram', 'Keelkattalai', 'Pammal', 'Cantonment Area'],
    localFaqs: [
      { question: 'Do you service ACs in Pammal and Keelkattalai near Pallavaram?', answer: 'Yes! Our Pallavaram service hub covers Pammal, Keelkattalai, Zamin Pallavaram, and surrounding residential colonies.' },
    ],
  },
  {
    id: 'velachery',
    slug: 'ac-service-velachery',
    name: 'Velachery',
    zone: 'South Chennai',
    postalCode: '600042',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Velachery | AC Repair & Jet Wash | ChillFix',
    metaDescription: 'Top-rated AC service in Velachery, Chennai. Expert Split & Inverter AC repair, jet-wash deep cleaning, and gas filling near Phoenix Marketcity & Bypass Road.',
    heading: 'Top-Rated AC Service & Repair in Velachery, Chennai',
    intro: 'ChillFix Air Solution is Velachery’s trusted AC service provider. From jet-wash deep cleaning near Phoenix Mall to urgent inverter PCB repairs around Vijay Nagar bus stand, our team delivers fast 60-minute doorstep service.',
    nearbyHubs: ['Vijay Nagar', 'Velachery Bypass Road', 'Baby Nagar', 'Ram Nagar', 'Taramani Link Road'],
    localFaqs: [
      { question: 'Why is AC deep cleaning essential for Velachery apartments?', answer: 'Velachery experience heavy dust and salt air moisture. High-pressure jet wash removes stubborn coil algae and restores 30% lost cooling.' },
    ],
  },
  {
    id: 'porur',
    slug: 'ac-service-porur',
    name: 'Porur',
    zone: 'West Chennai',
    postalCode: '600116',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Porur | Doorstep AC Repair & Gas Filling',
    metaDescription: 'Certified AC service in Porur, Chennai. Fast repair, jet wash cleaning, gas filling & installation near Ramachandra Hospital & Mount Poonamallee Road.',
    heading: 'Doorstep AC Service & Repair in Porur, Chennai',
    intro: 'ChillFix Air Solution provides expert AC repair, servicing, and installation across Porur, Karambakkam, Mugalivakkam, and Mount Poonamallee Road. Technician reaches your doorstep within 60 minutes.',
    nearbyHubs: ['Karambakkam', 'Mugalivakkam', 'Ramachandra Hospital Zone', 'Mount Poonamallee Road', 'Iyyappanthangal'],
    localFaqs: [
      { question: 'Do you service commercial ACs near Porur IT parks?', answer: 'Yes! We handle VRV/VRF, Cassette, and multi-split AC servicing for IT offices and commercial buildings in Porur.' },
    ],
  },
  {
    id: 'adyar',
    slug: 'ac-service-adyar',
    name: 'Adyar',
    zone: 'South Chennai',
    postalCode: '600020',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Adyar | AC Repair & Maintenance | ChillFix',
    metaDescription: 'Premium AC service in Adyar, Chennai. Inverter AC repair, foam jet wash, gas refilling & AMC near Gandhi Nagar, Kasturba Nagar & LB Road.',
    heading: 'Premium AC Service & Repair in Adyar, Chennai',
    intro: 'ChillFix Air Solution delivers high-quality AC servicing and repair in Adyar. Protecting cooling coils from coastal salt air corrosion with specialized anti-rust treatment and chemical foam jet wash across Gandhi Nagar, Kasturba Nagar, and Besant Nagar.',
    nearbyHubs: ['Gandhi Nagar', 'Kasturba Nagar', 'LB Road', 'Besant Nagar', 'Indira Nagar'],
    localFaqs: [
      { question: 'How do you protect ACs in Adyar from coastal salt corrosion?', answer: 'We apply specialized anti-corrosion protective coatings on copper coils after foam jet wash servicing.' },
    ],
  },
  {
    id: 'anna-nagar',
    slug: 'ac-service-anna-nagar',
    name: 'Anna Nagar',
    zone: 'Central Chennai',
    postalCode: '600040',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Anna Nagar | AC Repair & Installation | ChillFix',
    metaDescription: 'Doorstep AC service in Anna Nagar, Chennai. Certified technicians for Split AC, Inverter AC repair, jet wash & AMC near Tower Park & 2nd Avenue.',
    heading: 'Premier AC Service & Repair in Anna Nagar, Chennai',
    intro: 'ChillFix Air Solution provides premier AC repair, servicing, and installation in Anna Nagar. Serving homes, independent bungalows, and corporate offices across Anna Nagar East, West, Shenoy Nagar, and Kilpauk with 90-day warranty.',
    nearbyHubs: ['Anna Nagar East', 'Anna Nagar West', 'Tower Park Zone', 'Shenoy Nagar', 'Kilpauk', 'Shanthi Colony'],
    localFaqs: [
      { question: 'Do you service 5-Star Inverter ACs in Anna Nagar?', answer: 'Yes! Our senior engineers are certified in inverter PCB diagnostics, R32 gas charging, and electronic expansion valves.' },
    ],
  },
  {
    id: 'sholinganallur',
    slug: 'ac-service-sholinganallur',
    name: 'Sholinganallur',
    zone: 'OMR IT Corridor',
    postalCode: '600119',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in Sholinganallur | OMR AC Repair & Jet Wash',
    metaDescription: 'Fast AC service in Sholinganallur, OMR Chennai. AC repair, jet wash, gas refilling & installation for IT park professionals & gated communities.',
    heading: 'Fast AC Service & Repair in Sholinganallur, OMR',
    intro: 'ChillFix Air Solution offers 2-hour doorstep AC servicing and breakdown repairs in Sholinganallur and along the OMR IT Corridor. Perfect for tech professionals living in gated apartments and residential townships.',
    nearbyHubs: ['Elcot SEZ Zone', 'Sholinganallur Junction', 'Semmancheri', 'Perumbakkam', 'Akkarai'],
    localFaqs: [
      { question: 'Do you offer weekend AC service in Sholinganallur?', answer: 'Yes! We are open on Saturdays and Sundays from 8 AM to 8 PM for convenient weekend bookings.' },
    ],
  },
  {
    id: 'omr',
    slug: 'ac-service-omr',
    name: 'OMR (Old Mahabalipuram Road)',
    zone: 'OMR IT Corridor',
    postalCode: '600096',
    responseTime: '< 60 Minutes',
    metaTitle: 'AC Service in OMR Chennai | OMR AC Repair & Maintenance',
    metaDescription: 'AC service across OMR Chennai (Perungudi to Navalur). Fast technician response for Split AC, Cassette AC repair, jet wash & AMC contracts.',
    heading: 'Expert AC Service & Repair Across OMR, Chennai',
    intro: 'ChillFix Air Solution covers the entire OMR stretch from Kandanchavadi and Perungudi down to Navalur, Siruseri, and Kelambakkam. We specialize in residential apartment AC maintenance and commercial office HVAC solutions.',
    nearbyHubs: ['Perungudi', 'Thoraipakkam', 'Kandanchavadi', 'Navalur', 'Siruseri', 'Padur'],
    localFaqs: [
      { question: 'Which areas along OMR do you cover?', answer: 'We cover all areas along OMR including Taramani, Perungudi, Thoraipakkam, Sholinganallur, Navalur, and Siruseri.' },
    ],
  },
];
