import { ServiceDivision, ProjectItem, TeamMember, ComplianceCert } from '../types';

export const COMPANY_INFO = {
  name: 'KGSONS COMPANY LIMITED',
  tagline: 'Building Quality. Delivering Excellence. Creating Lasting Value.',
  motto: 'Building a Better Tanzania Together',
  slogan: 'Together for a Stronger, Better Tanzania',
  businessType: 'Limited Liability Company',
  country: 'United Republic of Tanzania',
  physicalAddress: 'AICC, Kilimanjaro Hall, Room 341, Arusha, Tanzania',
  warehouseAddress: 'Kizota-Mnada Mpya, Dodoma, Tanzania',
  phone: '+255 769 328 553',
  phoneClean: '255769328553',
  additionalPhones: ['0742 296 631', '0767 172 693'],
  allPhones: [
    { label: 'Headquarters Hotline', phone: '+255 769 328 553', clean: '255769328553' },
    { label: 'Dodoma Desk / Direct Line', phone: '0742 296 631', clean: '255742296631' },
    { label: 'Warehouse & Logistics Desk', phone: '0767 172 693', clean: '255767172693' },
  ],
  email: 'bus@kgsons.co.tz',
  website: 'www.kgsons.co.tz',
  workingHours: 'Mon - Fri: 8:00 AM - 5:30 PM | Sat: 8:30 AM - 2:00 PM',
  emergencySupport: '24/7 Dedicated Client Response',
  profilePdfUrl: 'https://drive.google.com/file/d/15M90qEfj36WnSIJpFHT0LLXZEsRML-kZ/view?usp=drivesdk',
  logos: {
    primaryBlue: '/assets/images/kgsons_logo_horizontal_color.png',
    primaryWhite: '/assets/images/kgsons_logo_horizontal_white_transparent.png',
    primaryDarkBg: '/assets/images/kgsons_logo_horizontal_darkbg.png',
    primaryBlueBg: '/assets/images/kgsons_logo_horizontal_bluebg.png',
    stackedColor: '/assets/images/kgsons_logo_stacked_color.png',
    originalProfile: '/assets/images/kgsons_logo_profile_original.png',
  },
  socialLinks: {
    facebook: 'https://facebook.com/kgsons',
    linkedin: 'https://linkedin.com/company/kgsons-company-limited',
    youtube: 'https://youtube.com/@kgsons',
  },
};

export const DIVISIONS: ServiceDivision[] = [
  {
    id: 'wooden-doors',
    pageId: 'wooden-doors',
    name: 'Wooden Door Manufacturing & Custom Joinery',
    tagline: 'Precision Craftsmanship & Architectural Timber Solutions',
    description:
      'KGSONS COMPANY LIMITED specializes in high-quality wood door manufacturing, delivering durable, elegant and secure doors for residential estates, commercial facilities and institutional developments.',
    heroImage: '/assets/images/concept_african_timber_doors_villa.jpg',
    thumbnail: '/assets/images/service_wooden_doors.jpg',
    icon: 'DoorClosed',
    capabilities: [
      'Custom & Standard Timber Doors',
      'Solid Panel & Modern Flush Doors',
      'Premium Kiln-Dried Hardwood & Teak',
      'Architectural Joinery & Custom Frames',
      'Multi-Coat Protective Durable Finishing',
      'On-Time Site Delivery & Professional Fitting',
    ],
    keyFeatures: [
      {
        title: 'Premium Timber Selection',
        desc: 'Sourced from verified, sustainable forestry concessions across Tanzania including Teak, Mahogany, Rosewood, and indigenous hard timber.',
      },
      {
        title: 'Precision Joinery & Milling',
        desc: 'Advanced computer-guided dimensioning combined with traditional artisan joinery for lifelong structural stability without warping.',
      },
      {
        title: 'Finishes & Hardware Integration',
        desc: 'Available in Natural, Deep Polished, Clear Varnish, and Factory-Sprayed Enamel finishes with precision mortise lock preparations.',
      },
    ],
  },
  {
    id: 'electrical',
    pageId: 'electrical',
    name: 'Electrical Equipment & Components',
    tagline: 'Reliable Power Distribution & Installation Supplies',
    description:
      'KGSONS supplies certified electrical components, installation materials, industrial switchgear, and safety equipment tailored for domestic, commercial, and industrial infrastructure.',
    heroImage: '/assets/images/african_electrician_switchgear.jpg',
    thumbnail: '/assets/images/service_electrical_supplies.jpg',
    icon: 'Zap',
    capabilities: [
      'Pure Copper Wires & Armoured Cables',
      'PVC & Galvanized Conduits & Fittings',
      'Modular Switches, Sockets & Accessories',
      'Industrial Circuit Breakers (MCB / MCCB / RCCB)',
      'Custom Factory Distribution Boards & Panels',
      'Commercial Energy-Efficient LED Lighting Systems',
    ],
    keyFeatures: [
      {
        title: 'Safety First & TBS Compliance',
        desc: 'All electrical supplies strictly comply with Tanzania Bureau of Standards (TBS) and international IEC electrical safety ratings.',
      },
      {
        title: 'Turnkey Supply for Contractors',
        desc: 'Direct bulk procurement for building contractors, civil engineers, electrical installers, and facility managers.',
      },
      {
        title: 'Heavy-Duty Industrial Switchgear',
        desc: 'Engineered for continuous commercial operation with dependable overload, short-circuit, and earth leakage protection.',
      },
    ],
  },
  {
    id: 'plumbing',
    pageId: 'plumbing',
    name: 'Plumbing Fixtures, Pipes & Fittings',
    tagline: 'Modern Water Supply & Drainage Solutions',
    description:
      'KGSONS provides robust plumbing and sanitary solutions designed for long-term performance in residential properties, office buildings, hospitals, and hospitality resorts.',
    heroImage: '/assets/images/plumbing_sanitary_showroom.jpg',
    thumbnail: '/assets/images/service_plumbing_fixtures.jpg',
    icon: 'Droplets',
    capabilities: [
      'Designer Sanitary Ware & High-Pressure Faucets',
      'PPR, PVC, and HDPE Pressure Pipes & Fittings',
      'Heavy-Duty Brass & Stainless Gate Valves',
      'Overhead & Underground Water Storage Tanks',
      'Commercial Drainage & Waste Water Solutions',
      'Water Metering & Pressure Boosting Systems',
    ],
    keyFeatures: [
      {
        title: 'Corrosion & Pressure Resistant',
        desc: 'High-grade virgin polymers and dezincification-resistant brass fittings engineered for high hydrostatic loads.',
      },
      {
        title: 'Complete System Architecture',
        desc: 'From municipal main intake down to final fixture chrome outlets, providing seamless compatibility across all pipe diameters.',
      },
      {
        title: 'Hospitality & Commercial Grade',
        desc: 'Water-saving flow restrictors, sensor taps, and luxury ceramics that maintain aesthetic luster through heavy daily use.',
      },
    ],
  },
  {
    id: 'facility-care',
    pageId: 'facility-care',
    name: 'Facility Care & Cleaning Services',
    tagline: 'Clean Spaces. Healthy Environment.',
    description:
      'KGSONS delivers dedicated corporate housekeeping, post-construction cleanup, window cleaning, compound landscape maintenance, and specialized hygiene management across Tanzania.',
    heroImage: '/assets/images/african_cleaning_team_office.jpg',
    thumbnail: '/assets/images/service_facility_cleaning.jpg',
    icon: 'Sparkles',
    capabilities: [
      'Commercial & Corporate Office Cleaning',
      'Air Conditioner High-Pressure Washing & Annual Maintenance Contracts (AMC)',
      'Comprehensive Post-Construction Handover Cleanup',
      'High-Rise & Storefront Window Cleaning',
      'Compound Grounds & Landscape Maintenance',
      'Terrazzo, Marble & Tile Floor Polishing',
      'Eco-Conscious Waste Segregation & Disposal',
    ],
    keyFeatures: [
      {
        title: 'Trained & Vetted Cleaning Teams',
        desc: 'Our uniformed cleaning professionals undergo strict security vetting and continuous health and hygiene safety training.',
      },
      {
        title: 'Eco-Friendly Cleaning Reagents',
        desc: 'We utilize biodegradable, non-toxic sanitizing solutions that protect occupants, indoor air quality, and surfaces.',
      },
      {
        title: 'Flexible Contract Schedules',
        desc: 'Tailored SLA options including daily janitorial coverage, periodic deep cleaning shifts, or weekend off-peak servicing.',
      },
    ],
  },
];

export const KEY_METRICS = [
  { value: '100%', label: 'Commitment to Quality Materials', detail: 'TBS & ISO certified raw inputs' },
  { value: '3', label: 'Core Business Divisions', detail: 'Manufacturing, Utilities & Facility Care' },
  { value: '50+', label: 'Projects Supported Across Tanzania', detail: 'Commercial, civic & residential' },
  { value: '24/7', label: 'Customer Support & Response', detail: 'Dedicated corporate account managers' },
];

export const COMPANY_VALUES = [
  {
    title: 'Integrity',
    description: 'Doing what is right, always. Transparent contracts, honest pricing, and ethical business conduct in every client engagement.',
  },
  {
    title: 'Quality',
    description: 'Delivering excellence in all we do. Precision manufacturing, certified supplies, and meticulous service execution without compromise.',
  },
  {
    title: 'Reliability',
    description: 'Being dependable in every project. Consistently meeting delivery milestones, contractual specifications, and operational deadlines.',
  },
  {
    title: 'Professionalism',
    description: 'Maintaining the highest corporate standards in technical execution, client communication, site safety, and staff presentation.',
  },
  {
    title: 'Innovation',
    description: 'Embracing modern machinery, efficient utility solutions, and sustainable environmental practices to drive industry progress.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Putting our clients at the center of every decision. Providing tailored solutions that solve complex project challenges.',
  },
];

export const MILESTONES = [
  {
    year: 'Our Foundation',
    title: 'Establishment of KGSONS COMPANY LIMITED',
    description: 'Founded in Arusha with a clear vision to provide high-grade wood door craftsmanship and dependable building solutions for local construction.',
  },
  {
    year: 'NeST Registration',
    title: 'National e-Procurement System of Tanzania',
    description: 'Fully qualified and officially registered as an approved supplier on the government NeST platform, unlocking major public and institutional tenders.',
  },
  {
    year: 'Facility Expansion',
    title: 'Expansion of Arusha Workshop & Machinery',
    description: 'Invested in high-precision woodworking machinery, expanded timber drying storage, and broadened our utility inventory to meet surging regional demand.',
  },
  {
    year: 'Growing Partnerships',
    title: 'Strategic Alliances Across East Africa',
    description: 'Built enduring supply partnerships with tier-1 contractors, architects, property developers, and government infrastructure departments.',
  },
  {
    year: 'Today & Beyond',
    title: 'Multi-Division Industry Leader',
    description: 'Recognized as a versatile, dependable Tanzanian partner across timber door manufacturing, electrical and plumbing supplies, and professional facility care.',
  },
];

export const WOOD_TYPES = [
  { name: 'Teak Wood', description: 'Exceptional natural oil content, outstanding termite and moisture resistance, ideal for luxury exterior entryways.' },
  { name: 'Mahogany Wood', description: 'Rich reddish-brown grain with uniform density, classic elegance, and superior stability under changing humidity.' },
  { name: 'Rosewood', description: 'Striking dark streaked figuring, dense grain structure, and unmatched surface luster for bespoke executive doors.' },
  { name: 'Indigenous Hardwood', description: 'Sustainably harvested Tanzanian timber with high mechanical strength, perfect for heavy-duty commercial framing.' },
];

export const FINISH_TYPES = [
  { name: 'Natural Finish', description: 'Matte or satin clear sealant highlighting raw timber grain variations.' },
  { name: 'Polished Finish', description: 'Hand-buffed mirror gloss finish providing deep depth and radiant sheen.' },
  { name: 'Varnish Finish', description: 'Weather-resistant polyurethane barrier guarding against tropical UV and moisture.' },
  { name: 'Painted Finish', description: 'Opaque polyurethane spray coating available in RAL architectural shades.' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Custom Solid Hardwood Door Installations',
    clientCategory: 'Residential Estates',
    location: 'Arusha, Tanzania',
    year: '2025 - 2026',
    division: 'doors',
    image: '/assets/images/concept_african_timber_doors_villa.jpg',
    description: 'Design, milling, and installation of over 120 custom hardwood entrance and interior solid panel doors for a luxury gated residential development in Arusha.',
    deliverables: ['Custom double entrance doors', 'Precision mortise hardware', 'Weatherproof polyurethane finish', 'On-site installation & alignment'],
    status: 'Completed',
  },
  {
    id: 'proj-2',
    title: 'Commercial Complex Construction Supplies',
    clientCategory: 'Commercial Enterprises',
    location: 'Dar es Salaam, Tanzania',
    year: '2025',
    division: 'electrical',
    image: '/assets/images/concept_african_construction_site.jpg',
    description: 'Turnkey supply of multi-story building electrical distribution boards, heavy-duty industrial switchgear, and safety containment systems for a landmark commercial tower.',
    deliverables: ['Three-phase main distribution boards', 'Armoured feeder cabling', 'Sub-circuit MCB protections', 'TBS certified installations'],
    status: 'Completed',
  },
  {
    id: 'proj-3',
    title: 'Corporate Office Electrical & Lighting Upgrade',
    clientCategory: 'Corporate Facilities',
    location: 'Arusha Central Business District',
    year: '2025',
    division: 'electrical',
    image: '/assets/images/african_electrician_switchgear.jpg',
    description: 'Comprehensive rewiring, modular switchboard retrofit, and energy-efficient commercial architectural LED lighting rollout across three corporate floors.',
    deliverables: ['Energy-efficient LED fixtures', 'Concealed wiring conduit system', 'Emergency backup distribution', 'Energy savings audit compliance'],
    status: 'Completed',
  },
  {
    id: 'proj-4',
    title: 'Hospitality Resort Plumbing & Sanitary Works',
    clientCategory: 'Hotels & Hospitality',
    location: 'Northern Tourism Circuit, Tanzania',
    year: '2024 - 2025',
    division: 'plumbing',
    image: '/assets/images/plumbing_sanitary_showroom.jpg',
    description: 'Supply and installation of premium water delivery networks, thermostatic faucets, luxury sanitary ware, and high-capacity water reservoir storage tanks.',
    deliverables: ['PPR pressure pipe distribution', 'Water-saving sensor faucets', 'High-volume underground storage', 'Pressure equalization booster pumps'],
    status: 'Completed',
  },
  {
    id: 'proj-5',
    title: 'Corporate Headquarters Facility Maintenance',
    clientCategory: 'Government & Banking',
    location: 'Arusha & Dodoma',
    year: 'Ongoing Contract',
    division: 'cleaning',
    image: '/assets/images/african_cleaning_team_office.jpg',
    description: 'Daily operational janitorial coverage, executive office detailing, facade window wash cycles, and environmental waste management for regional headquarters.',
    deliverables: ['Daily uniformed janitorial team', 'Quarterly facade window abseil cleaning', 'Terrazzo floor diamond polishing', 'Certified green cleaning detergents'],
    status: 'Ongoing',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-md',
    name: 'Executive Leadership',
    role: 'Chairman / Managing Director',
    category: 'leadership',
    bio: 'Guiding KGSONS COMPANY LIMITED with a strategic vision for local manufacturing excellence, public sector compliance, and sustainable industrial development across Tanzania.',
    image: '/assets/images/african_executive_director.jpg',
    skills: ['Strategic Planning', 'Corporate Governance', 'Public Procurement', 'Industrial Engineering'],
  },
  {
    id: 'team-carpenter',
    name: 'Master Joinery Craftsmen',
    role: 'Head of Timber Production',
    category: 'carpentry',
    bio: 'Overseeing kiln-drying, precision computer milling, and hand-finished joinery assembly for architectural wooden doors.',
    image: '/assets/images/african_carpenter_workshop.jpg',
    skills: ['Timber Milling', 'Kiln Control', 'Mortise Joinery', 'Architectural Blueprints'],
  },
  {
    id: 'team-electrician',
    name: 'Certified Electrical Engineers',
    role: 'Technical Utilities Lead',
    category: 'electrical',
    bio: 'Directing electrical supply procurement, switchgear board assembly, and field safety compliance in accordance with TBS standards.',
    image: '/assets/images/african_electrician_switchgear.jpg',
    skills: ['Three-Phase Distribution', 'Switchgear Assembly', 'Circuit Diagnostics', 'Safety Auditing'],
  },
  {
    id: 'team-plumber',
    name: 'Professional Hydraulic Technicians',
    role: 'Plumbing Works Supervisor',
    category: 'plumbing',
    bio: 'Specializing in high-pressure water systems, commercial sanitary installations, and municipal drainage integration.',
    image: '/assets/images/african_plumber_installation.jpg',
    skills: ['Pressure Testing', 'PPR Fusion Welding', 'Sanitary Layouts', 'Water Tank Hydraulics'],
  },
  {
    id: 'team-cleaner',
    name: 'Specialized Facility Care Crew',
    role: 'Facility Operations Manager',
    category: 'cleaning',
    bio: 'Managing scheduled corporate housekeeping crews, post-construction cleanup logistics, and eco-friendly hygiene standards.',
    image: '/assets/images/african_cleaning_team_office.jpg',
    skills: ['Corporate Janitorial SLA', 'Floor Crystallization', 'High-Rise Window Care', 'HSE Protocols'],
  },
];

export const COMPLIANCE_ITEMS: ComplianceCert[] = [
  {
    id: 'brela',
    title: 'BRELA Certificate of Incorporation',
    organization: 'Business Registrations and Licensing Agency (BRELA)',
    badgeImage: '/assets/images/cert_brela.png',
    description: 'Fully incorporated under the Companies Act of the United Republic of Tanzania as a Limited Liability commercial company.',
    status: 'Active & Verified',
  },
  {
    id: 'tra',
    title: 'Tax Clearance Certificate & TIN',
    organization: 'Tanzania Revenue Authority (TRA)',
    badgeImage: '/assets/images/cert_tra.png',
    description: 'Complete tax compliance profile, timely electronic filing, active Taxpayer Identification Number (TIN), and current TRA clearance.',
    status: 'Good Standing',
  },
  {
    id: 'nest',
    title: 'NeST Registered Supplier',
    organization: 'National e-Procurement System of Tanzania',
    badgeImage: '/assets/images/cert_nest.png',
    description: 'Accredited government and public institution supplier qualified to bid and execute local and national procurement contracts.',
    status: 'Certified Vendor',
  },
  {
    id: 'quality',
    title: 'Quality & Regulatory Compliance',
    organization: 'National Industry Standards',
    badgeImage: '/assets/images/cert_quality.png',
    description: 'Strict adherence to national manufacturing codes, TBS material ratings, and workplace health, safety, and environmental laws.',
    status: 'Inspected & Compliant',
  },
];

export const CLIENT_SECTORS = [
  { name: 'Government Institutions & Public Organizations', desc: 'Serving national ministries, agencies, and local government authorities.' },
  { name: 'Construction Companies & Civil Contractors', desc: 'Direct supply partner for commercial towers, residential estates, and roads.' },
  { name: 'Property Developers & Real Estate Firms', desc: 'Turnkey door fitouts and utility packages for residential complexes.' },
  { name: 'Hotels & Hospitality Businesses', desc: 'Luxury timber fixtures, sanitary fittings, and immaculate facility upkeep.' },
  { name: 'Schools & Universities', desc: 'Durable institutional doors, lighting systems, and hygiene maintenance.' },
  { name: 'Corporate Offices & Business Enterprises', desc: 'Executive boardrooms, facility cleaning contracts, and power distribution.' },
];
