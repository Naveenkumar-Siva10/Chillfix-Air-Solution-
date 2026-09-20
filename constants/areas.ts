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
  whatsappPrefill?: string;
  localInsights?: {
    title: string;
    description: string;
  }[];
  commonLocalProblems?: {
    issue: string;
    cause: string;
    solution: string;
  }[];
  pricingTable?: {
    serviceName: string;
    startingPrice: string;
    details: string;
  }[];
}

export const AREA_LOCATIONS: AreaLocation[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. New Perungalathur (Top Priority Local Area)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'new-perungalathur',
    slug: 'new-perungalathur',
    name: 'New Perungalathur',
    zone: 'South Chennai Base Zone',
    postalCode: '600063',
    responseTime: '30–45 Mins Arrival',
    metaTitle: 'AC Service in New Perungalathur | Repair, Cleaning & Gas Filling | ChillFix',
    metaDescription: 'Reliable doorstep AC service & repair in New Perungalathur. General service ₹249, jet wash, gas filling, PCB & water leakage repair. 30–60 min technician arrival.',
    heading: 'AC Service & Repair in New Perungalathur',
    intro: 'ChillFix AC Service provides professional doorstep air conditioner servicing, diagnostic repair, foam jet-wash deep cleaning, and gas leak refilling across New Perungalathur. Operating directly from our local base in Perungalathur (600063), our certified technicians reach residences and apartments along Srinivasa Nagar, RMK Nagar, Kalaignar Nedunsalai, and Old GST Road within 30 to 45 minutes.',
    nearbyHubs: [
      'Srinivasa Nagar',
      'Kalaignar Nedunsalai',
      'RMK Nagar',
      'Old GST Road',
      'Perungalathur Railway Station',
      'Gandhi Road',
      'Goodwill Nagar',
      'Krishna Nagar',
    ],
    whatsappPrefill: 'Hi ChillFix! I need AC service in New Perungalathur.',
    localInsights: [
      {
        title: 'Road & Construction Dust Buildup',
        description:
          'Suburban infrastructure, highway connectivity, and new residential constructions around New Perungalathur generate fine airborne dust that clogs indoor blower wheels and external condenser coils, reducing cooling power by up to 35% and causing the compressor to overheat.',
      },
      {
        title: 'Suburban Evening Voltage Fluctuations',
        description:
          'During peak summer evenings between 6 PM and 10 PM, high neighborhood cooling demand frequently causes voltage dips. Our technicians test running amperes, dual-run capacitors, and inverter PCB power modules to ensure your compressor operates safely without tripping.',
      },
      {
        title: 'Groundwater Hardness & Drainage Scaling',
        description:
          'High mineral content in local groundwater and elevated humidity cause algae and mineral scale to accumulate in condensate drain trays, leading to indoor water dripping and damp walls.',
      },
    ],
    commonLocalProblems: [
      {
        issue: 'AC Water Dripping Inside Room',
        cause: 'Choked condensate drain line or cracked drain pan due to dust and mineral sludge accumulation.',
        solution: 'High-pressure drain line flush, tray leveling, and anti-bacterial sanitization.',
      },
      {
        issue: 'AC Running but Not Cooling',
        cause: 'Micro-leak in copper evaporator coil or clogged cooling fins starving airflow.',
        solution: 'Nitrogen pressure leak detection, copper brazing repair, and precision R32/R410A gas charging.',
      },
      {
        issue: 'Outdoor Unit Not Starting or Tripping MCB',
        cause: 'Faulty start/run capacitor, compressor overload, or inverter PCB circuit fault.',
        solution: 'On-site multimeter diagnostics, genuine OEM capacitor replacement, and 90-day warranty repair.',
      },
    ],
    pricingTable: [
      {
        serviceName: 'General AC Service',
        startingPrice: '₹249',
        details: 'Filter wash, condenser brush cleaning, 21-point electrical and cooling inspection',
      },
      {
        serviceName: 'Foam Jet-Wash Deep Cleaning',
        startingPrice: '₹449',
        details: 'Waterproof wall-jacket setup, chemical foam spray, indoor & outdoor high-pressure jet wash',
      },
      {
        serviceName: 'AC Diagnostic / Breakdown Visit',
        startingPrice: '₹299',
        details: 'Complete mechanical & electrical diagnosis (100% adjusted into final bill if you proceed with repair)',
      },
      {
        serviceName: 'Refrigerant Gas Leak Fix & Refill',
        startingPrice: '₹799',
        details: 'Nitrogen leak testing, copper brazing, vacuum pump evacuation, and pure R32/R410A/R22 gas charging',
      },
      {
        serviceName: 'Split AC Installation / Relocation',
        startingPrice: '₹1,199',
        details: 'Precision wall bracket mounting, core hole drilling, flare jointing, and vacuum leak testing',
      },
    ],
    localFaqs: [
      {
        question: 'How quickly can a ChillFix technician arrive in New Perungalathur?',
        answer:
          'Because our primary team is based locally right here in Perungalathur, our technicians typically arrive at your doorstep in New Perungalathur within 30 to 45 minutes of booking.',
      },
      {
        question: 'What is the diagnostic inspection fee in New Perungalathur?',
        answer:
          'Our doorstep inspection and diagnosis fee is ₹299. If you proceed with the repair work, this ₹299 fee is completely waived and deducted from your final invoice.',
      },
      {
        question: 'Do you service inverter AC brands like Daikin, LG, and Voltas in New Perungalathur?',
        answer:
          'Yes! Our certified technicians specialize in inverter and dual-inverter ACs from Daikin, LG, Voltas, Blue Star, Samsung, Carrier, Panasonic, Hitachi, and Mitsubishi.',
      },
      {
        question: 'Why is my AC leaking water inside the room in New Perungalathur?',
        answer:
          'In New Perungalathur, airborne dust from nearby roads mixes with condensate moisture, forming thick sludge that chokes the narrow drain pipe. Our foam jet wash flushes the entire drain tray and pipe clear.',
      },
      {
        question: 'Do you provide a written warranty for repairs done in New Perungalathur?',
        answer:
          'Yes, every repair and replacement part comes with an authentic 30 to 90-day written warranty covering parts and technician labor.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Perungalathur (Central Operational Hub)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'perungalathur',
    slug: 'perungalathur',
    name: 'Perungalathur',
    zone: 'South Chennai Operational Hub',
    postalCode: '600063',
    responseTime: '30–45 Mins Arrival',
    metaTitle: 'AC Service in Perungalathur | ChillFix AC Service Hub',
    metaDescription: 'ChillFix AC Service is based in Perungalathur (600063). Fast doorstep AC repair, jet wash cleaning, gas leak fixing, and Split/Window AC installation across New & Old Perungalathur.',
    heading: 'AC Service & Repair in Perungalathur',
    intro: 'ChillFix AC Service is headquartered directly in Perungalathur, serving as our central operational base for South Chennai cooling services. We provide comprehensive doorstep AC repair, high-pressure foam jet-wash servicing, gas leak diagnosis, and Split/Window AC installation across Old Perungalathur, New Perungalathur, Peerkankaranai, Kamaraj Nagar, RMK Nagar, and Srinivasa Nagar.',
    nearbyHubs: [
      'New Perungalathur',
      'Old Perungalathur',
      'Peerkankaranai',
      'Kamaraj Nagar',
      'RMK Nagar',
      'Srinivasa Nagar',
      'Nedungundram',
      'Mudichur Road Link',
    ],
    whatsappPrefill: 'Hi ChillFix! I need AC service in Perungalathur.',
    localInsights: [
      {
        title: 'Headquartered Locally in Perungalathur (600063)',
        description:
          'Unlike third-party lead aggregators who dispatch freelance contractors from 20 km away, ChillFix technicians live and operate directly in Perungalathur. This ensures rapid arrival, genuine accountability, and reliable post-service support.',
      },
      {
        title: 'GST Road Dust & Transit Corridor',
        description:
          'As a major transit hub with heavy bus and highway traffic, Perungalathur environments have high ambient soot and particulate matter. This settles on outdoor condenser coils, restricting airflow and causing high compressor discharge temperatures.',
      },
      {
        title: 'Peerkankaranai Lake & Marshland Humidity',
        description:
          'Humidity from the nearby lake area accelerates biological slime in indoor drain pans and causes galvanic oxidation on copper cooling coils, requiring timely chemical jet wash cleaning.',
      },
    ],
    commonLocalProblems: [
      {
        issue: 'Compressor Overheating & Frequent Tripping',
        cause: 'Dense dust film blocking airflow on outdoor condenser fins near the GST Road corridor.',
        solution: 'High-pressure chemical foam jet wash to clear coil obstruction and lower operating temperatures.',
      },
      {
        issue: 'Musty / Damp Odor from AC Blower',
        cause: 'Algae and mold colonies forming on the wet evaporator coil and condensate tray.',
        solution: 'Anti-bacterial foam treatment and blower wheel disassembly wash.',
      },
      {
        issue: 'Low Gas / Refrigerant Depletion',
        cause: 'Vibration stress on flare joints and micro-pinhole leaks in copper tubing.',
        solution: 'Nitrogen pressure holding test, leak brazing, and precision gas top-up.',
      },
    ],
    pricingTable: [
      {
        serviceName: 'General AC Servicing',
        startingPrice: '₹249',
        details: 'Filter wash, electrical check, grill temperature and airflow verification',
      },
      {
        serviceName: 'High-Pressure Jet Wash Deep Clean',
        startingPrice: '₹449',
        details: 'Indoor and outdoor coil pressure wash with wall-protection catch bag',
      },
      {
        serviceName: 'Doorstep Diagnostic Visit',
        startingPrice: '₹299',
        details: 'Full circuit and cooling diagnosis, 100% adjusted into repair invoice',
      },
      {
        serviceName: 'AC Gas Leak Repair & Refill',
        startingPrice: '₹799',
        details: 'Nitrogen leak detection, copper brazing, and factory-spec gas refilling',
      },
      {
        serviceName: 'Annual Maintenance Contract (AMC)',
        startingPrice: '₹1,499',
        details: '3-4 scheduled services per year + unlimited breakdown labor calls',
      },
    ],
    localFaqs: [
      {
        question: 'Where is ChillFix AC Service based in Perungalathur?',
        answer:
          'ChillFix is headquartered right in Perungalathur (PIN 600063). Having our local base here enables our mobile technician vans to reach any street in Perungalathur within 30 to 45 minutes.',
      },
      {
        question: 'What AC services do you provide in Perungalathur?',
        answer:
          'We handle complete AC repair, regular servicing, foam jet wash cleaning, PCB board diagnosis, capacitor replacement, water leakage fixing, copper piping, gas refilling, and new AC installation.',
      },
      {
        question: 'Do you service residential homes and commercial shops in Perungalathur?',
        answer:
          'Yes, we service standalone houses, apartment communities, retail shops, clinics, and small offices throughout Perungalathur and Peerkankaranai.',
      },
      {
        question: 'How does the ₹299 inspection fee adjustment work?',
        answer:
          'Our technician inspects your AC on-site and provides an upfront quote. If you proceed with the repair or service, the ₹299 inspection fee is deducted completely from your bill.',
      },
      {
        question: 'What warranty is provided on parts replaced in Perungalathur?',
        answer:
          'We provide a written 30 to 90-day warranty on all genuine spare parts and repair workmanship.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Vandalur (Priority Expansion)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vandalur',
    slug: 'vandalur',
    name: 'Vandalur',
    zone: 'South Chennai',
    postalCode: '600048',
    responseTime: '30–50 Mins Fast Arrival',
    metaTitle: 'AC Service in Vandalur | Repair, Jet Wash & Gas Filling | ChillFix',
    metaDescription: 'Doorstep AC service in Vandalur, Otteri, Urapakkam & Crescent College Road. Fast local repair for cooling loss, water leaks, gas refilling & installation by ChillFix.',
    heading: 'AC Service & Repair in Vandalur',
    intro: 'ChillFix AC Service provides fast, reliable doorstep AC repair and maintenance throughout Vandalur, Otteri, Urapakkam, and Crescent College Road. Dispatched directly from our nearby Perungalathur headquarters, our certified AC engineers reach your home, apartment, or hostel room within 30 to 50 minutes.',
    nearbyHubs: [
      'Vandalur Junction',
      'Otteri',
      'Urapakkam',
      'Crescent College Road',
      'GST Road Vandalur',
      'Vandalur Zoo Area',
      'Mannivakkam Border',
    ],
    whatsappPrefill: 'Hi ChillFix! I need AC service in Vandalur / Otteri / Urapakkam.',
    localInsights: [
      {
        title: 'GST Highway Dust & Heat Island',
        description:
          'The open GST highway corridor through Vandalur Junction and Otteri generates high ambient heat and road soot, which settles rapidly on outdoor condensing units, causing cooling loss and high electricity bills.',
      },
      {
        title: 'Student Hostels & Rental Apartments',
        description:
          'With Crescent University, SRM proximity, and educational institutes nearby, rental apartments in Vandalur and Urapakkam experience heavy AC usage cycles requiring frequent filter cleanings and periodic refrigerant checks.',
      },
    ],
    commonLocalProblems: [
      {
        issue: 'High Power Consumption & Slow Cooling',
        cause: 'Clogged outdoor coils forced to run continuously in Chennai heat.',
        solution: 'Full foam jet-wash servicing to restore optimum heat exchange.',
      },
      {
        issue: 'Refrigerant Gas Loss (Warm Air Output)',
        cause: 'Vibration on connecting copper pipes causing micro-fractures in flare nuts.',
        solution: 'Nitrogen pressure leak detection, copper brazing, and precision gas refill.',
      },
    ],
    localFaqs: [
      {
        question: 'Do you cover Otteri and Urapakkam under Vandalur service?',
        answer:
          'Yes! Our technicians daily cover Vandalur Junction, Otteri, Urapakkam, and Crescent College Road with fast doorstep response.',
      },
      {
        question: 'Can I get emergency AC repair in Vandalur?',
        answer:
          'Yes, we offer emergency breakdown assistance across Vandalur, dispatching a technician within 45 to 60 minutes.',
      },
      {
        question: 'What is the price of AC servicing in Vandalur?',
        answer:
          'General AC servicing starts at ₹249, and high-pressure foam jet wash starts at ₹449.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Tambaram (Priority Hub)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'tambaram',
    slug: 'tambaram',
    name: 'Tambaram',
    zone: 'South Chennai Hub',
    postalCode: '600045',
    responseTime: '30–45 Mins Arrival',
    metaTitle: 'AC Service in Tambaram | Repair, Cleaning & Gas Filling | ChillFix',
    metaDescription: 'Expert doorstep AC service & repair in Tambaram East, Tambaram West & Sanatorium. General service ₹249, jet wash, gas refilling, PCB repair with 90-day warranty.',
    heading: 'AC Service & Repair in Tambaram',
    intro: 'ChillFix AC Service provides professional doorstep AC repair, maintenance, and installation across Tambaram East, Tambaram West, Tambaram Sanatorium, Selaiyur, and Camp Road. We resolve cooling failures, water leakage, strange noises, and gas leaks for all major AC brands with upfront pricing and written service warranties.',
    nearbyHubs: [
      'Tambaram East',
      'Tambaram West',
      'Tambaram Sanatorium',
      'Selaiyur',
      'Camp Road',
      'MEPZ Area',
      'Kadapperi',
      'Rajakilpakkam',
    ],
    whatsappPrefill: 'Hi ChillFix! I need AC service in Tambaram.',
    localInsights: [
      {
        title: 'Tambaram East vs West Cooling Needs',
        description:
          'Tambaram East (Selaiyur, Camp Road) features high-density residential apartments requiring quiet indoor operations and regular drain maintenance, while commercial hubs in Tambaram West and MEPZ Sanatorium require rapid breakdown turnaround.',
      },
      {
        title: 'Suburban Power Fluctuations',
        description:
          'Sudden voltage spikes during switchovers can damage delicate inverter circuit boards. We diagnose and repair PCBs at component level with authentic replacement parts.',
      },
    ],
    commonLocalProblems: [
      {
        issue: 'Water Dripping from Indoor Split AC',
        cause: 'Algae accumulation in the condensate drain tray or pipe blockage.',
        solution: 'High-pressure drain line flush and anti-bacterial tray clean.',
      },
      {
        issue: 'Inverter AC Showing Blinking Error Code',
        cause: 'Communication error between indoor PCB and outdoor inverter board.',
        solution: 'Diagnostic multimeter test and on-site PCB repair or component replacement.',
      },
    ],
    localFaqs: [
      {
        question: 'How quickly can you dispatch an AC technician to Tambaram?',
        answer:
          'We have dedicated technicians stationed across Tambaram East and West daily, enabling 30 to 45-minute arrival times.',
      },
      {
        question: 'Do you service all areas in Tambaram East including Selaiyur and Camp Road?',
        answer:
          'Yes, we regularly service residential apartments and individual houses in Selaiyur, Camp Road, Rajakilpakkam, and East Tambaram.',
      },
      {
        question: 'What warranty is provided on AC repairs in Tambaram?',
        answer:
          'All repairs and replacement parts carry a 30 to 90-day written warranty for complete peace of mind.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Chromepet
  // ─────────────────────────────────────────────────────────────
  {
    id: 'chromepet',
    slug: 'chromepet',
    name: 'Chromepet',
    zone: 'South Chennai',
    postalCode: '600044',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Chromepet | ChillFix AC Service',
    metaDescription: 'Professional AC service in Chromepet, Chennai. AC repair, jet wash cleaning, gas refilling & installation near Radha Nagar & MIT Campus.',
    heading: 'AC Service & Repair in Chromepet',
    intro: 'ChillFix AC Service provides professional AC repair and maintenance in Chromepet, Radha Nagar, Hasthinapuram, and MIT Campus zone. We diagnose cooling problems on-site with genuine spare parts.',
    nearbyHubs: ['Radha Nagar', 'Hasthinapuram', 'MIT Campus Road', 'Nemilichery', 'CLRI Nagar'],
    localFaqs: [
      { question: 'What is the diagnostic fee for AC repair in Chromepet?', answer: 'Diagnostic fee is ₹349, which is 100% adjusted into your final bill when proceeding with repair.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Pallavaram
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pallavaram',
    slug: 'pallavaram',
    name: 'Pallavaram',
    zone: 'South Chennai',
    postalCode: '600043',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Pallavaram | ChillFix AC Service',
    metaDescription: 'Trusted AC service in Pallavaram, Chennai. Split & Window AC repair, foam jet wash, gas filling & AMC near Zamin Pallavaram & Pammal.',
    heading: 'AC Service & Repair in Pallavaram',
    intro: 'ChillFix AC Service provides complete AC repair, jet wash cleaning, gas leak detection, and new AC installation across Zamin Pallavaram, Old Pallavaram, and Cantonment area.',
    nearbyHubs: ['Zamin Pallavaram', 'Old Pallavaram', 'Keelkattalai', 'Pammal', 'Cantonment Area'],
    localFaqs: [
      { question: 'Do you service ACs in Pammal near Pallavaram?', answer: 'Yes! We cover Pammal, Keelkattalai, and Zamin Pallavaram.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Manivakkam
  // ─────────────────────────────────────────────────────────────
  {
    id: 'manivakkam',
    slug: 'manivakkam',
    name: 'Manivakkam',
    zone: 'South Chennai',
    postalCode: '600048',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Manivakkam | ChillFix AC Service',
    metaDescription: 'Doorstep AC service in Manivakkam, Chennai. Split AC repair, jet wash cleaning, gas refilling & installation by ChillFix AC Service.',
    heading: 'AC Service & Repair in Manivakkam',
    intro: 'ChillFix AC Service delivers complete AC repair, servicing, and installation across Manivakkam, Karasangal, and Mudichur Road. Upfront pricing and written service warranty.',
    nearbyHubs: ['Manivakkam Junction', 'Karasangal', 'Mudichur Road', 'Krishna Nagar', 'Natesan Nagar'],
    localFaqs: [
      { question: 'Do you provide same-day AC service in Manivakkam?', answer: 'Yes! We provide same-day technician visits across Manivakkam and surrounding colonies.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Mudichur
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mudichur',
    slug: 'mudichur',
    name: 'Mudichur',
    zone: 'South Chennai',
    postalCode: '600048',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Mudichur | ChillFix AC Service',
    metaDescription: 'Reliable AC service in Mudichur, Chennai. AC repair, jet wash cleaning, gas leak repair & installation near Attai Company & Maduravoyal bypass.',
    heading: 'AC Service & Repair in Mudichur',
    intro: 'ChillFix AC Service offers comprehensive AC repair and preventive maintenance in Mudichur, Varadharajapuram, and Old Mudichur. Certified technicians at your doorstep.',
    nearbyHubs: ['Varadharajapuram', 'Old Mudichur', 'Attai Company Stop', 'Rayappa Nagar'],
    localFaqs: [
      { question: 'How quickly can I book an AC technician in Mudichur?', answer: 'We dispatch technicians from our Perungalathur center to Mudichur in under 45 minutes.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Selaiyur
  // ─────────────────────────────────────────────────────────────
  {
    id: 'selaiyur',
    slug: 'selaiyur',
    name: 'Selaiyur',
    zone: 'South Chennai',
    postalCode: '600073',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Selaiyur | ChillFix AC Service',
    metaDescription: 'Affordable AC service in Selaiyur, Chennai. Split AC repair, deep jet wash, gas refilling & AMC near Camp Road & Bharat University.',
    heading: 'AC Service & Repair in Selaiyur',
    intro: 'ChillFix AC Service provides expert AC maintenance and breakdown repair in Selaiyur, Camp Road, and Rajakilpakkam. We service all Split, Window, and Inverter AC brands.',
    nearbyHubs: ['Camp Road Junction', 'Bharat University Area', 'Rajakilpakkam', 'Mahalakshmi Nagar', 'Tellus Avenue'],
    localFaqs: [
      { question: 'Do you offer AC installation in Selaiyur?', answer: 'Yes! We provide complete Split and Window AC installation in Selaiyur.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Chitlapakkam
  // ─────────────────────────────────────────────────────────────
  {
    id: 'chitlapakkam',
    slug: 'chitlapakkam',
    name: 'Chitlapakkam',
    zone: 'South Chennai',
    postalCode: '600064',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Chitlapakkam | ChillFix AC Service',
    metaDescription: 'Expert AC service in Chitlapakkam, Chennai. Split & Window AC repair, foam jet cleaning, gas charging & installation near Lake & Sanatorium.',
    heading: 'AC Service & Repair in Chitlapakkam',
    intro: 'ChillFix AC Service delivers prompt doorstep AC servicing in Chitlapakkam, Nehru Colony, and surrounding neighborhoods. Transparent pricing and guaranteed satisfaction.',
    nearbyHubs: ['Chitlapakkam Lake Area', 'Nehru Colony', 'Sethunarayanan Street', 'Sanatorium Border'],
    localFaqs: [
      { question: 'What is the cost of foam jet wash in Chitlapakkam?', answer: 'Foam jet wash AC servicing starts at ₹449 in Chitlapakkam.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Pammal
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pammal',
    slug: 'pammal',
    name: 'Pammal',
    zone: 'South Chennai',
    postalCode: '600075',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Pammal | ChillFix AC Service',
    metaDescription: 'Best AC service in Pammal, Chennai. Doorstep AC repair, jet wash cleaning, gas filling & installation near Pozhichalur & Pallavaram.',
    heading: 'AC Service & Repair in Pammal',
    intro: 'ChillFix AC Service provides reliable AC repair and maintenance services in Pammal, Pozhichalur, and Anakaputhur. Quick technician dispatch and 90-day warranty.',
    nearbyHubs: ['Pozhichalur', 'Anakaputhur', 'Krishna Nagar Pammal', 'Pammal Main Road'],
    localFaqs: [
      { question: 'Do you cover Anakaputhur and Pozhichalur near Pammal?', answer: 'Yes, our mobile technicians cover Pammal, Pozhichalur, and Anakaputhur.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Medavakkam
  // ─────────────────────────────────────────────────────────────
  {
    id: 'medavakkam',
    slug: 'medavakkam',
    name: 'Medavakkam',
    zone: 'South Chennai',
    postalCode: '600100',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Medavakkam | ChillFix AC Service',
    metaDescription: 'Top AC service in Medavakkam, Chennai. Split AC repair, jet wash, gas refilling & AMC near Medavakkam Junction & Velachery Main Road.',
    heading: 'AC Service & Repair in Medavakkam',
    intro: 'ChillFix AC Service offers comprehensive AC repair and servicing in Medavakkam, Vadakkupattu, and Perumbakkam. Certified technicians with genuine spare parts.',
    nearbyHubs: ['Medavakkam Junction', 'Perumbakkam', 'Sowmya Nagar', 'Velachery Main Road'],
    localFaqs: [
      { question: 'How much is AC gas filling in Medavakkam?', answer: 'AC gas top-up starts at ₹799, while complete refilling with leak repair starts at ₹1,499.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Sholinganallur
  // ─────────────────────────────────────────────────────────────
  {
    id: 'sholinganallur',
    slug: 'sholinganallur',
    name: 'Sholinganallur',
    zone: 'OMR / South Chennai',
    postalCode: '600119',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Sholinganallur | ChillFix AC Service',
    metaDescription: 'Professional AC service in Sholinganallur, Chennai. Split AC repair, jet wash cleaning, gas leak fix & AMC near ELCOT SEZ & OMR Junction.',
    heading: 'AC Service & Repair in Sholinganallur',
    intro: 'ChillFix AC Service provides doorstep AC servicing for IT professionals and residents in Sholinganallur, ELCOT SEZ zone, and Medavakkam Link Road.',
    nearbyHubs: ['ELCOT SEZ', 'Sholinganallur Junction', 'Medavakkam Link Road', 'Dollar City', 'Classic Farms'],
    localFaqs: [
      { question: 'Do you provide weekend AC service in Sholinganallur?', answer: 'Yes! We operate 7 days a week, including Saturdays and Sundays in Sholinganallur.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. OMR (Old Mahabalipuram Road)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'omr',
    slug: 'omr',
    name: 'OMR (Old Mahabalipuram Road)',
    zone: 'IT Corridor',
    postalCode: '600096',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in OMR Chennai | ChillFix AC Service',
    metaDescription: 'Trusted AC service along OMR, Chennai. Rapid AC repair, jet wash cleaning, gas filling & commercial AMC from Perungudi to Navalur.',
    heading: 'AC Service & Repair in OMR (IT Corridor)',
    intro: 'ChillFix AC Service covers the entire OMR IT corridor from Thoraipakkam and Karapakkam to Navalur and Siruseri. We provide rapid 2-hour doorstep AC repair for apartments and tech offices.',
    nearbyHubs: ['Thoraipakkam', 'Karapakkam', 'Navalur', 'Siruseri IT Park', 'Perungudi'],
    localFaqs: [
      { question: 'Do you provide AMC contracts for offices on OMR?', answer: 'Yes! We offer corporate and commercial AC AMC contracts across OMR tech parks.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. Velachery
  // ─────────────────────────────────────────────────────────────
  {
    id: 'velachery',
    slug: 'velachery',
    name: 'Velachery',
    zone: 'South Chennai',
    postalCode: '600042',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Velachery | ChillFix AC Service',
    metaDescription: 'Best AC service in Velachery, Chennai. Split & Window AC repair, foam jet wash, gas refilling & installation near Phoenix Mall & Vijaya Nagar.',
    heading: 'AC Service & Repair in Velachery',
    intro: 'ChillFix AC Service delivers expert AC servicing, breakdown diagnostics, and installation in Velachery, Vijaya Nagar, Tansi Nagar, and Baby Nagar.',
    nearbyHubs: ['Vijaya Nagar', 'Phoenix Marketcity Zone', 'Tansi Nagar', 'Baby Nagar', 'Dhandeeswaram'],
    localFaqs: [
      { question: 'How quickly can a technician visit Velachery?', answer: 'Our technician dispatch time to Velachery is within 2 hours of booking.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 16. Porur
  // ─────────────────────────────────────────────────────────────
  {
    id: 'porur',
    slug: 'porur',
    name: 'Porur',
    zone: 'West Chennai',
    postalCode: '600116',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Porur | ChillFix AC Service',
    metaDescription: 'Expert AC service in Porur, Chennai. Split AC repair, jet wash cleaning, gas leak detection & installation near Ramachandra Hospital & Mount-Poonamallee Rd.',
    heading: 'AC Service & Repair in Porur',
    intro: 'ChillFix AC Service offers comprehensive AC repair and maintenance in Porur, Ramapuram, Mugalivakkam, and Iyyappanthangal. Genuine parts with written warranty.',
    nearbyHubs: ['Ramachandra Hospital Area', 'Mugalivakkam', 'Iyyappanthangal', 'Mount-Poonamallee Road'],
    localFaqs: [
      { question: 'Do you service commercial ACs in Porur?', answer: 'Yes, we service residential Split ACs and commercial Cassette / Ductable ACs in Porur.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 17. Guindy
  // ─────────────────────────────────────────────────────────────
  {
    id: 'guindy',
    slug: 'guindy',
    name: 'Guindy',
    zone: 'South-Central Chennai',
    postalCode: '600032',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Guindy | ChillFix AC Service',
    metaDescription: 'Fast AC service in Guindy, Chennai. AC repair, jet wash cleaning, gas charging & commercial AMC near Guindy Industrial Estate & Kathipara.',
    heading: 'AC Service & Repair in Guindy',
    intro: 'ChillFix AC Service provides fast AC repair, maintenance, and AMC services in Guindy Industrial Estate, Ekkatuthangal, and Kathipara junction.',
    nearbyHubs: ['Guindy Industrial Estate', 'Ekkatuthangal', 'Kathipara Junction', 'Race Course Area'],
    localFaqs: [
      { question: 'Do you offer emergency AC repair in Guindy?', answer: 'Yes! We have 24/7 emergency dispatch available across Guindy.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 18. Anna Nagar
  // ─────────────────────────────────────────────────────────────
  {
    id: 'anna-nagar',
    slug: 'anna-nagar',
    name: 'Anna Nagar',
    zone: 'North-West Chennai',
    postalCode: '600040',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Anna Nagar | ChillFix AC Service',
    metaDescription: 'Premium AC service in Anna Nagar, Chennai. Split & Inverter AC repair, chemical jet wash, gas filling & installation near Roundtana & Tower Park.',
    heading: 'AC Service & Repair in Anna Nagar',
    intro: 'ChillFix AC Service delivers premium AC servicing, inverter PCB repair, and foam jet wash across Anna Nagar East, Anna Nagar West, and Shenoy Nagar.',
    nearbyHubs: ['Anna Nagar Roundtana', 'Tower Park', 'Anna Nagar West', 'Shenoy Nagar', 'Shanti Colony'],
    localFaqs: [
      { question: 'Do you service Daikin and Mitsubishi ACs in Anna Nagar?', answer: 'Yes! Our certified technicians specialize in premium Japanese and Korean AC brands.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 19. Adyar
  // ─────────────────────────────────────────────────────────────
  {
    id: 'adyar',
    slug: 'adyar',
    name: 'Adyar',
    zone: 'South Chennai',
    postalCode: '600020',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Adyar | ChillFix AC Service',
    metaDescription: 'Trusted AC service in Adyar, Chennai. AC repair, jet wash cleaning, gas refilling & installation near Gandhi Nagar & Kasturba Nagar.',
    heading: 'AC Service & Repair in Adyar',
    intro: 'ChillFix AC Service provides professional AC maintenance, jet wash cleaning, and gas leak brazing across Adyar, Gandhi Nagar, Kasturba Nagar, and Besant Nagar.',
    nearbyHubs: ['Gandhi Nagar', 'Kasturba Nagar', 'Besant Nagar', 'LB Road Adyar', 'Indira Nagar'],
    localFaqs: [
      { question: 'How quickly can I get AC service in Adyar?', answer: 'We dispatch local service technicians within 2 hours of booking in Adyar.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 20. Mylapore
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mylapore',
    slug: 'mylapore',
    name: 'Mylapore',
    zone: 'Central-South Chennai',
    postalCode: '600004',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Mylapore | ChillFix AC Service',
    metaDescription: 'Expert AC service in Mylapore, Chennai. Split AC repair, jet wash, gas refilling & installation near Kapaleeshwarar Temple & Luz Church Road.',
    heading: 'AC Service & Repair in Mylapore',
    intro: 'ChillFix AC Service offers complete AC servicing, cooling troubleshooting, and installation across Mylapore, Luz Corner, Mandaveli, and Santhome.',
    nearbyHubs: ['Luz Corner', 'Mandaveli', 'Santhome', 'Oliver Road', 'RA Puram'],
    localFaqs: [
      { question: 'Do you offer Window AC repair in Mylapore?', answer: 'Yes! We repair and service Window and Split ACs across Mylapore.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 21. Vadapalani
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vadapalani',
    slug: 'vadapalani',
    name: 'Vadapalani',
    zone: 'Central-West Chennai',
    postalCode: '600026',
    responseTime: 'Fast Local Response',
    metaTitle: 'AC Service in Vadapalani | ChillFix AC Service',
    metaDescription: 'Fast AC service in Vadapalani, Chennai. Split AC repair, foam jet wash, gas leak repair & installation near SIMS Hospital & Forum Mall.',
    heading: 'AC Service & Repair in Vadapalani',
    intro: 'ChillFix AC Service provides prompt doorstep AC repair, jet wash servicing, and gas refilling across Vadapalani, Arcot Road, Saligramam, and Ashok Nagar.',
    nearbyHubs: ['Arcot Road', 'Saligramam', 'Ashok Nagar', 'Forum Mall Zone', 'SIMS Hospital Area'],
    localFaqs: [
      { question: 'Do you provide same-day AC gas filling in Vadapalani?', answer: 'Yes! Nitrogen leak testing and R32/R410A gas refilling are available same-day.' },
    ],
  },
];

// Helper to look up an area by slug (supports 'new-perungalathur', 'perungalathur', and 'ac-service-perungalathur')
export function getAreaBySlug(slug: string): AreaLocation | undefined {
  const normalized = slug.toLowerCase().replace(/^ac-service-/, '');
  return AREA_LOCATIONS.find(
    (area) =>
      area.id === normalized ||
      area.slug === slug ||
      area.slug === `ac-service-${normalized}` ||
      area.id === slug,
  );
}
