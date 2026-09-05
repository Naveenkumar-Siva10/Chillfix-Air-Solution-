import type { Service } from '@/types/service';

export const SERVICES: Service[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. AC Service Chennai (Primary Service Page)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-service-chennai',
    slug: 'ac-service-chennai',
    name: 'AC Service in Chennai',
    metaTitle: 'AC Service in Chennai | General & Jet Wash AC Servicing',
    metaDescription: 'Book professional AC service in Chennai starting at ₹249. Foam jet-wash cleaning, filter washing, 21-point check, and 2-hour technician dispatch across Chennai.',
    shortDescription: 'Comprehensive AC servicing with high-pressure jet wash, coil inspection, and cooling test for peak performance.',
    description: 'ChillFix Air Solution provides comprehensive AC servicing in Chennai for Split, Window, and Inverter AC units. Regular servicing improves cooling efficiency by up to 30%, reduces electricity bills, and prevents costly breakdown repairs.',
    icon: 'AirVent',
    image: '/images/services/split-ac.jpg',
    category: 'residential',
    startingPrice: 249,
    duration: '1–2 Hours',
    warranty: '30 Days',
    popular: true,
    features: [
      'High-pressure water jet-wash for evaporator & condenser coils',
      'Air filter cleaning & anti-bacterial sanitization',
      'Condensate drain line flush & clog removal',
      'Gas pressure check & electrical safety inspection',
      '21-point performance check & cooling temperature test',
    ],
    symptoms: [
      'AC takes longer than 20 minutes to cool room',
      'Musty or foul smell coming from air vents',
      'Higher electricity bills despite normal usage',
      'Dust or debris blowing out of the AC louvers',
    ],
    process: [
      { step: 1, title: 'Visual & Electrical Inspection', description: 'Technician tests power supply, PCB voltage, and initial cooling performance.' },
      { step: 2, title: 'High-Pressure Jet Wash', description: 'Deep foam spray and water jet wash on indoor coils, blower, and outdoor condenser.' },
      { step: 3, title: 'Drain Clean & Sanitization', description: 'Flushes condensate drain tray and treats coils with anti-bacterial solution.' },
      { step: 4, title: 'Final Testing & Calibration', description: 'Checks gas pressure levels and measures grill temperature output.' },
    ],
    brandsSupported: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Samsung', 'Carrier', 'Hitachi', 'Panasonic', 'Mitsubishi Electric'],
    faqs: [
      { question: 'How much does AC service cost in Chennai?', answer: 'General AC servicing at ChillFix starts at ₹249 for Window AC and ₹299 for Split AC in Chennai.' },
      { question: 'How long does an AC service take?', answer: 'A thorough general AC service with jet-wash coil cleaning typically takes 45 to 90 minutes per unit.' },
      { question: 'Do you provide same-day AC service in Chennai?', answer: 'Yes! We guarantee same-day technician dispatch within 2 hours for bookings made before 5 PM across Chennai.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. AC Repair Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-repair-chennai',
    slug: 'ac-repair-chennai',
    name: 'AC Repair in Chennai',
    metaTitle: 'AC Repair in Chennai | Fast 2-Hour Doorstep AC Technicians',
    metaDescription: 'Expert AC repair service in Chennai for all brands. We fix cooling issues, water leakages, PCB circuit boards, compressor trips, and noise problems with 90-day warranty.',
    shortDescription: 'Fast diagnostic & breakdown repair service by certified technicians across Chennai.',
    description: 'When your AC stops cooling or breaks down in Chennai heat, ChillFix dispatches certified AC repair technicians to your doorstep within 2 hours. We diagnose root causes on-site and repair components with 100% genuine spare parts.',
    icon: 'Wrench',
    image: '/images/services/cooling-repair.jpg',
    category: 'repair',
    startingPrice: 349,
    duration: '1–3 Hours',
    warranty: '90 Days',
    popular: true,
    features: [
      'Comprehensive root-cause breakdown diagnosis',
      'PCB circuit board, relay & capacitor repair',
      'Fan motor, blower & sensor replacement',
      'Water leakage tray & pipe repair',
      'Genuine OEM spare parts with 90-day warranty',
    ],
    symptoms: [
      'AC compressor running but air is not cold',
      'AC repeatedly trips house circuit breaker or MCB',
      'Grinding, buzzing, or rattling noise from indoor/outdoor unit',
      'Error code flashing on AC display panel (e.g. E1, E4, F3)',
    ],
    process: [
      { step: 1, title: 'System Diagnostics', description: 'Technician tests circuit voltage, capacitor ratings, and compressor load.' },
      { step: 2, title: 'Upfront Quote', description: 'Provides a clear breakdown of required repairs and parts cost before starting work.' },
      { step: 3, title: 'Component Repair / Replacement', description: 'Replaces faulty parts using genuine factory components.' },
      { step: 4, title: '90-Day Warranty Issue', description: 'Conducts full operational load test and issues formal service warranty.' },
    ],
    brandsSupported: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Samsung', 'Godrej', 'Whirlpool', 'Lloyd', 'O General'],
    faqs: [
      { question: 'What are common AC repair charges in Chennai?', answer: 'Diagnostic inspection starts at ₹349, which is adjusted into the final bill if you proceed with repair.' },
      { question: 'Do you offer emergency AC repair near me in Chennai?', answer: 'Yes! We operate 24/7 emergency dispatch units across Anna Nagar, Adyar, Velachery, Tambaram, OMR, and 25+ Chennai areas.' },
      { question: 'What warranty do you provide on repairs?', answer: 'All spare parts and repair workmanship carry a 30 to 90-day written warranty.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. AC Cleaning Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-cleaning-chennai',
    slug: 'ac-cleaning-chennai',
    name: 'AC Cleaning in Chennai',
    metaTitle: 'AC Cleaning in Chennai | Dust & Filter Washing Service',
    metaDescription: 'Book AC filter & coil cleaning in Chennai. Removes dust, odors, and fungal growth from Split & Window ACs for fresh air and efficient cooling.',
    shortDescription: 'Professional filter washing, coil dusting, and air quality restoration for home & office ACs.',
    description: 'Chennai humidity and dust accumulate quickly on AC filters and evaporator fins, choking airflow and harboring allergens. Our AC cleaning service restores clean airflow, eliminates musty odors, and improves indoor air hygiene.',
    icon: 'Sparkles',
    image: '/images/services/deep-cleaning.jpg',
    category: 'maintenance',
    startingPrice: 299,
    duration: '45–60 Mins',
    warranty: '30 Days',
    popular: false,
    features: [
      'Indoor mesh filter removal & high-pressure wash',
      'Evaporator coil fin brush & anti-fungal spray',
      'Blower wheel dust extraction',
      'Front panel cleaning & polish',
      'Airflow velocity & cooling test',
    ],
    symptoms: [
      'Dust particles blowing out of AC louvers',
      'Unpleasant damp smell when turning on AC',
      'Weak airflow even at maximum fan speed setting',
    ],
    process: [
      { step: 1, title: 'Preparation & Jacket Setup', description: 'Protects surrounding walls and floor with waterproof service jacket.' },
      { step: 2, title: 'Filter & Blower Cleaning', description: 'Washes mesh filters and deep cleans internal blower fins.' },
      { step: 3, title: 'Anti-Bacterial Treatment', description: 'Applies eco-friendly sanitizer to prevent mold spores.' },
      { step: 4, title: 'Airflow Test', description: 'Verifies smooth airflow and freshness.' },
    ],
    brandsSupported: ['All Split & Window AC Brands'],
    faqs: [
      { question: 'How often should AC cleaning be done in Chennai?', answer: 'Due to Chennai dust levels, filters should be cleaned every 1–2 months, and full servicing done twice a year.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. AC Deep Cleaning / Jet Wash Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-deep-cleaning-chennai',
    slug: 'ac-deep-cleaning-chennai',
    name: 'AC Deep Cleaning Service in Chennai',
    metaTitle: 'AC Deep Cleaning in Chennai | Foam Jet-Wash AC Cleaning',
    metaDescription: 'Heavy-duty foam jet-wash AC deep cleaning in Chennai. Cleans hidden indoor & outdoor coil dirt, restores 30% lost cooling, and eliminates bacteria.',
    shortDescription: 'High-pressure foam jet-wash deep cleaning for indoor coils, blower wheel, and outdoor unit.',
    description: 'Standard cleaning only reaches surface filters. ChillFix AC Deep Cleaning uses high-pressure water jet technology with non-corrosive chemical foam to flush out deep-seated dirt from cooling fins, drain lines, and outdoor condenser coils.',
    icon: 'Sparkles',
    image: '/images/services/deep-cleaning.jpg',
    category: 'maintenance',
    startingPrice: 449,
    duration: '1.5 Hours',
    warranty: '30 Days',
    popular: true,
    features: [
      'Waterproof service bag cover for wall protection',
      'Active chemical foam wash for cooling coils',
      'High-pressure water jet wash (indoor & outdoor unit)',
      'Deep drain tray flush & pipe unclogging',
      'Blower wheel & louvers disassembly wash',
    ],
    symptoms: [
      'AC cooling drop of 20% to 40%',
      'Persistent ice formation on evaporator coils',
      'Water dripping inside room due to choked drain pan',
    ],
    process: [
      { step: 1, title: 'Wall Protection Setup', description: 'Encloses indoor unit with waterproof collection funnel.' },
      { step: 2, title: 'Foam Application', description: 'Sprays active foam deep into coil fins to dissolve grease & grime.' },
      { step: 3, title: 'High-Pressure Jet Wash', description: 'Flushes out dissolved dirt using controlled pressure water pump.' },
      { step: 4, title: 'Outdoor Condenser Jet Cleaning', description: 'Washes outdoor unit coils to ensure heat release efficiency.' },
    ],
    brandsSupported: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Samsung', 'Carrier', 'Hitachi', 'Panasonic', 'O General'],
    faqs: [
      { question: 'What is the price of AC deep cleaning in Chennai?', answer: 'AC Deep Cleaning with jet wash starts at ₹449 for Split ACs.' },
      { question: 'Does jet wash damage wall paint?', answer: 'No! We use specialized waterproof service catch-bags that channel all wash water into a bucket.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. AC Gas Filling Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-gas-filling-chennai',
    slug: 'ac-gas-filling-chennai',
    name: 'AC Gas Filling in Chennai',
    metaTitle: 'AC Gas Filling in Chennai | Gas Leak Repair R32 R410A R22',
    metaDescription: 'Affordable AC gas filling in Chennai. We detect & braze copper pipe gas leaks first, then refill R32, R410A, or R22 gas with pressure testing & 30-day warranty.',
    shortDescription: 'Precision refrigerant gas leak repair & refilling for R-32, R-410A, R-22 & R-600A gases.',
    description: 'If your AC is running but blowing normal room temperature air, low refrigerant gas is the most common cause. ChillFix provides nitrogen pressure testing to pinpoint copper pipe leaks, braze-repair the leak spot, and top up or fully refill gas according to manufacturer PSI standards.',
    icon: 'Droplets',
    image: '/images/services/gas-filling.jpg',
    category: 'repair',
    startingPrice: 799,
    duration: '1–2 Hours',
    warranty: '30 Days',
    popular: true,
    features: [
      'Nitrogen gas pressure leak detection test',
      'Copper pipe brazing & leak spot repair',
      'Vacuum pump evacuation of moisture & air',
      '100% pure virgin refrigerant gas (R32, R410A, R22)',
      'Ampere & standing PSI pressure verification',
    ],
    symptoms: [
      'AC fan is running fine but output air is warm',
      'Ice building up on thin copper pipe near outdoor unit',
      'Hissing noise near indoor unit coil or outdoor joint',
    ],
    process: [
      { step: 1, title: 'Leak Detection', description: 'Tests joints and coils with soap solution & pressure gauge.' },
      { step: 2, title: 'Brazing Repair', description: 'Welds/brazes leaky copper joints and replaces faulty flare nuts.' },
      { step: 3, title: 'System Vacuuming', description: 'Uses vacuum pump to extract moisture before gas injection.' },
      { step: 4, title: 'Precision Gas Charging', description: 'Fills gas by weight and PSI gauge matching factory specs.' },
    ],
    brandsSupported: ['All Inverter & Non-Inverter AC Brands'],
    faqs: [
      { question: 'How much does AC gas filling cost in Chennai?', answer: 'Gas top-up starts at ₹799, while complete gas refilling with leak repair ranges from ₹1,499 to ₹2,499 depending on gas type (R32 / R410A / R22).' },
      { question: 'Why does AC gas leak occur?', answer: 'Chennai coastal salt air causes micro-corrosion on copper coils. Regular servicing & anti-corrosion coating help prevent leaks.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. AC Installation Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-installation-chennai',
    slug: 'ac-installation-chennai',
    name: 'AC Installation in Chennai',
    metaTitle: 'AC Installation in Chennai | Split & Window AC Fitting',
    metaDescription: 'Professional AC installation in Chennai starting at ₹599. Core drilling, heavy-duty outdoor bracket fitting, vacuuming, and testing by certified engineers.',
    shortDescription: 'Same-day Split & Window AC installation with heavy-duty mounting, copper piping, and safety testing.',
    description: 'Improper AC installation causes 80% of premature AC failures, gas leaks, and high power bills. ChillFix delivers precision AC installation in Chennai with wall bracket mounting, core hole drilling, insulation wrapping, and post-fitting vacuum testing.',
    icon: 'Wrench',
    image: '/images/services/installation.jpg',
    category: 'installation',
    startingPrice: 599,
    duration: '2–3 Hours',
    warranty: '90 Days',
    popular: true,
    features: [
      'Indoor unit backplate level mounting & core drilling',
      'Outdoor unit heavy-duty wall bracket or terrace fitting',
      'Copper piping, drain hose & wiring insulation setup',
      'System vacuuming & leak-tight flare jointing',
      'Commissioning & cooling performance demonstration',
    ],
    symptoms: [
      'Relocating to a new home or apartment in Chennai',
      'Purchased a new or used Split / Window / Inverter AC',
    ],
    process: [
      { step: 1, title: 'Location Assessment', description: 'Picks ideal wall location avoiding direct sunlight and ensuring proper air clearance.' },
      { step: 2, title: 'Plate & Hole Drilling', description: 'Mounts metal backplate with spirit level and drills downward slope wall hole.' },
      { step: 3, title: 'Piping & Wiring Connection', description: 'Flares copper pipes, connects electrical wiring, and wraps thermal insulation.' },
      { step: 4, title: 'Vacuum & Commissioning', description: 'Evacuates air from lines and turns on AC to demonstrate sub-18°C grill cooling.' },
    ],
    brandsSupported: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Samsung', 'Carrier', 'Hitachi', 'Panasonic', 'Mitsubishi'],
    faqs: [
      { question: 'What is the price of Split AC installation in Chennai?', answer: 'Split AC installation starts at ₹1,199 (excluding extra copper pipe/bracket materials if required).' },
      { question: 'Is same-day installation available?', answer: 'Yes! We provide same-day AC fitting across Chennai when booked before 1 PM.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Split AC Service Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'split-ac-service-chennai',
    slug: 'split-ac-service-chennai',
    name: 'Split AC Service in Chennai',
    metaTitle: 'Split AC Service in Chennai | Inverter & Non-Inverter Repair',
    metaDescription: 'Specialized Split AC service & repair in Chennai. Foam jet wash, PCB circuit repair, gas filling, and noise fix for 1.0T, 1.5T, and 2.0T Split ACs.',
    shortDescription: 'Specialized Split AC repair, jet wash servicing, inverter PCB repair, and cooling fix.',
    description: 'Split ACs require specialized care due to separate indoor blowers, electronic expansion valves, and inverter drive PCBs. ChillFix provides expert Split AC servicing in Chennai for 1-Star to 5-Star Dual Inverter units.',
    icon: 'AirVent',
    image: '/images/services/split-ac.jpg',
    category: 'residential',
    startingPrice: 299,
    duration: '1–2 Hours',
    warranty: '90 Days',
    popular: true,
    features: [
      'Split AC indoor coil foam jet wash & blower cleaning',
      'Outdoor condenser unit coil pressure washing',
      'Inverter PCB error code diagnosis & module repair',
      'Copper pipe flare nut inspection & gas topping',
      'Vibration damper pad fitting for outdoor unit',
    ],
    symptoms: [
      'Split AC indoor unit dripping water onto floor',
      'Outdoor unit fan running but compressor not starting',
      'Inverter AC displaying error codes or light blinking',
    ],
    process: [
      { step: 1, title: 'Diagnostic Check', description: 'Scans electronic control board and measures intake vs outlet temperature.' },
      { step: 2, title: 'Jet Wash Cleaning', description: 'Cleans indoor cooling fins and outdoor condenser using high-pressure spray.' },
      { step: 3, title: 'Electrical & Gas Check', description: 'Verifies running amperes, capacitor microfarads, and gas PSI.' },
    ],
    brandsSupported: ['Daikin', 'LG Dual Inverter', 'Voltas', 'Blue Star', 'Samsung', 'Hitachi', 'Panasonic', 'Carrier'],
    faqs: [
      { question: 'What is the cost of Split AC service in Chennai?', answer: 'Split AC general jet wash servicing starts at ₹299.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Window AC Service Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'window-ac-service-chennai',
    slug: 'window-ac-service-chennai',
    name: 'Window AC Service in Chennai',
    metaTitle: 'Window AC Service in Chennai | Window AC Cleaning & Repair',
    metaDescription: 'Expert Window AC service & repair in Chennai starting at ₹249. Frame fitting, fan motor repair, coil washing, noise reduction, and gas refilling.',
    shortDescription: 'Dedicated Window AC maintenance, frame fitting, coil cleaning, and compressor repair.',
    description: 'Window ACs accumulate heavy outdoor dust and can suffer from wooden frame vibrations, clogged condensate pans, and fan motor rust. ChillFix offers complete Window AC servicing and repair in Chennai.',
    icon: 'Square',
    image: '/images/services/window-ac.jpg',
    category: 'residential',
    startingPrice: 249,
    duration: '1–2 Hours',
    warranty: '90 Days',
    popular: false,
    features: [
      'Window unit pull-out inspection & tank wash',
      'Front grill & mesh filter washing',
      'Fan motor lubrication & blade alignment',
      'Vibration reduction rubber cushion fitting',
      'Thermostat & rotary selector switch repair',
    ],
    symptoms: [
      'Window AC making loud vibrating noise in window frame',
      'Water pooling on window sill or inside room',
      'Blower fan stuck or turning very slowly',
    ],
    process: [
      { step: 1, title: 'Unit Disassembly', description: 'Safely slides chassis out of outer metal sleeve for inspection.' },
      { step: 2, title: 'Chemical Coil Wash', description: 'Flushes dirt from evaporator and rear condenser coils.' },
      { step: 3, title: 'Frame Re-alignment', description: 'Fixes outer cabinet slope to ensure proper backward water drainage.' },
    ],
    brandsSupported: ['Voltas', 'Blue Star', 'Hitachi', 'Lloyd', 'Godrej', 'Carrier'],
    faqs: [
      { question: 'How much is Window AC service in Chennai?', answer: 'Window AC servicing starts at ₹249.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. AC Maintenance / AMC Plans Chennai
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ac-maintenance-chennai',
    slug: 'ac-maintenance-chennai',
    name: 'AC Maintenance & AMC Contracts in Chennai',
    metaTitle: 'AC Maintenance in Chennai | Annual Maintenance Contracts (AMC)',
    metaDescription: 'Worry-free Annual AC Maintenance Contracts (AMC) in Chennai for home & office. Includes 3-4 free jet wash services, priority emergency repair, and spare discounts.',
    shortDescription: 'Annual AC maintenance contracts for residential & commercial spaces across Chennai.',
    description: 'Avoid sudden AC breakdowns in Chennai summers with a ChillFix Annual Maintenance Contract (AMC). Enjoy scheduled preventive servicing, free breakdown labor calls, and priority 2-hour emergency dispatch all year round.',
    icon: 'CalendarCheck',
    image: '/images/services/amc.jpg',
    category: 'maintenance',
    startingPrice: 1499,
    duration: 'Annual (365 Days)',
    warranty: '1 Year Full Coverage',
    popular: true,
    features: [
      '3 to 4 scheduled wet jet-wash services per year',
      'Unlimited free breakdown repair labor visits',
      'Priority emergency dispatch within 2 hours',
      '15% to 20% discount on spare parts & gas filling',
      'Comprehensive maintenance reports & reminders',
    ],
    symptoms: [
      'Multiple ACs in home or office needing regular maintenance',
      'Wanting zero breakdown anxiety during Chennai peak summer months',
    ],
    process: [
      { step: 1, title: 'Initial Health Checkup', description: 'Conducts full audit of all AC units before contract activation.' },
      { step: 2, title: 'Scheduled Visits', description: 'Automated reminders sent before each quarterly servicing date.' },
      { step: 3, title: 'Priority Emergency Calls', description: 'Immediate technician dispatch whenever a breakdown is logged.' },
    ],
    brandsSupported: ['All Residential & Commercial AC Brands'],
    faqs: [
      { question: 'What is included in an AC AMC contract in Chennai?', answer: 'ChillFix AMC covers 3-4 jet wash services, free labor for all breakdown calls, and discounts on parts/gas.' },
      { question: 'What is the starting price for AC AMC?', answer: 'Residential Split AC AMC starts at ₹1,499 per unit per year.' },
    ],
  },
];

// Slugs mapping to preserve any legacy internal links cleanly
export const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'split-ac-service': 'split-ac-service-chennai',
  'window-ac-service': 'window-ac-service-chennai',
  'cassette-ac-service': 'ac-service-chennai',
  'tower-ac-service': 'ac-service-chennai',
  'commercial-ac-service': 'ac-maintenance-chennai',
  'ac-installation': 'ac-installation-chennai',
  'ac-uninstallation': 'ac-installation-chennai',
  'gas-filling': 'ac-gas-filling-chennai',
  'cooling-repair': 'ac-repair-chennai',
  'water-leakage-repair': 'ac-repair-chennai',
  'pcb-repair': 'ac-repair-chennai',
  'compressor-repair': 'ac-repair-chennai',
  'deep-cleaning': 'ac-deep-cleaning-chennai',
  'annual-maintenance': 'ac-maintenance-chennai',
};

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'installation', label: 'Installation' },
  { id: 'repair', label: 'Repair' },
  { id: 'maintenance', label: 'Maintenance' },
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number]['id'];
