/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, Project, Service, Testimonial } from './types';

import pavilionExteriorSunset from './assets/images/pavilion_exterior_sunset_1779942811248.png';
import pavilionRetailNight from './assets/images/pavilion_retail_night_1779942846970.png';
import pavilionRestaurantsCollage from './assets/images/pavilion_restaurants_collage_1779942870311.png';
import pavilionInteriorsCollage from './assets/images/pavilion_interiors_collage_1779942894246.png';
import pavilionLeaguePoster from './assets/images/pavilion_league_poster_1779942912817.png';

import gmaxValleyLogo from './assets/images/gmax_valley_logo_1779943579363.png';
import gmaxValleyLayoutPlan from './assets/images/gmax_valley_layout_plan_1779943595889.png';
import gmaxValleyBadshahiBagh from './assets/images/gmax_valley_badshahi_bagh_1779943614230.png';
import gmaxValleyPlotFeatures from './assets/images/gmax_valley_plot_features_1779943629492.png';
import gmaxValleyTouristDestinations from './assets/images/gmax_valley_tourist_destinations_1779943644591.png';

export const PAVILION_IMAGES = [
  pavilionExteriorSunset,
  pavilionRetailNight,
  pavilionRestaurantsCollage,
  pavilionInteriorsCollage,
  pavilionLeaguePoster
];

export const GMAX_VALLEY_IMAGES = [
  gmaxValleyLogo,
  gmaxValleyLayoutPlan,
  gmaxValleyBadshahiBagh,
  gmaxValleyPlotFeatures,
  gmaxValleyTouristDestinations
];

export const COMPANY_INFO = {
  name: "PSS REAL ESTATE PVT. LTD.",
  shortName: "PSS Real Estate",
  founded: "2010",
  tagline: "Building Trusts, Delivering Excellence.",
  taglineSecondary: "Discover your absolute dream home or high-yield commercial space across Delhi, Gurgaon, and Faridabad.",
  headerLogoText: "PSS REAL ESTATE",
  contact: {
    phone: "+91 98101 25425",
    phoneDisplay: "+91-9810125425",
    whatsapp: "919810125425",
    email: "contact@pssrealestate.co.in",
    address: "Plot No. 12, Sector 32, Rohini, Delhi - 110085",
    hours: "10:00 AM - 7:30 PM (All Days Open)",
    gmapLink: "https://maps.google.com/?q=Sector+32,+Rohini,+Delhi"
  },
  stats: [
    { value: "15+", label: "Years of Trust" },
    { value: "1,200+", label: "Happy Families Homed" },
    { value: "45+", label: "Premium Projects Delivered" },
    { value: "₹500Cr+", label: "Transactions Facilitated" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "residential-consultation",
    title: "Residential Consultation",
    tagline: "Home Advisory",
    description: "Personalized residential consulting guiding you through selection, site inspections, and possession of premium homes.",
    iconName: "Home",
    features: ["Bespoke Location Mapping", "Structural Concrete Verifications", "Immaculate Pricing Checks", "End-to-End Handover Supervision"],
    detailedContent: "At PSS Real Estate, our residential consultation desk specializes in guiding home buyers toward their dream properties with zero friction. We carry out deep assessments of your family's space requirements, location preferences, and style aesthetics to present only the finest pre-screened flats, builder floors, and luxury residential apartments.\n\nOur extensive network across major developmental belts ensures exclusive access to high-demand local communities. We personally accompany you on deep physical inspect-loops, checking masonry, electrical routings, and compliance specs. From early booking agreements through registration to physical keys delivery, we work tirelessly as your fiduciary advisor to secure optimal terms."
  },
  {
    id: "commercial-property-advisory",
    title: "Commercial Property Advisory",
    tagline: "Corporate Advisory",
    description: "Strategic corporate property acquisition and investments tailored for high-density retail, warehousing, and premium offices.",
    iconName: "Building",
    features: ["Footfall Density Analytics", "Anchor Tenant Evaluation", "Optimized Cap-Rate Projections", "Commercial Zone Sanction Checks"],
    detailedContent: "Our Corporate Advisory department serves as a beacon of growth for commercial investors, corporations, and enterprise entities. We offer tactical guidance across high-visibility retail hubs, industrial spaces, corporate office buildings, and logistic hubs to lock in stable recurring rental yields and high long-term capital appreciation.\n\nWe employ analytics to study pedestrian traffic, regional development indicators, and future transport corridors. Our team takes care of direct developer negotiations, anchor lease agreements drafting, and thorough verification of master layout approvals. Partner with PSS to construct a resilient commercial real estate portfolio built on verified market data."
  },
  {
    id: "luxury-villa-investments",
    title: "Luxury Villa Investments",
    tagline: "Luxury Portfolio",
    description: "Exclusive collection of boutique estates, bespoke farmhouses, and high-end residential mansions in peaceful elite corridors.",
    iconName: "Crown",
    features: ["Elite Compound Shortlists", "Custom Landscape Review", "Secure Boundary Inspections", "Architectural Integrity Audits"],
    detailedContent: "For discerning clients looking to build a heritage of leisure, our Luxury Villa Investments team curated the country's most spectacular private estates. We deal in rare residential villas, heritage estates, and country farmhouses (including premium plots inside green belts like Gmax Valley, Saharanpur and peaceful luxury sub-urban terrains) with serene physical boundaries and scenic vistas.\n\nEvery listing undergoes meticulous scrutiny for legal title clarity, ecological zoning rules, and secure boundary fencing layouts. We advise on custom spatial elevations, landscaping indices, and water security systems to ensure your elite homestead remains a private sanctuary for generations. Leverage our high-integrity services to add absolute masterpieces to your private estate reserves."
  },
  {
    id: "gift-city-investment",
    title: "GIFT City Investment Advisory",
    tagline: "SEZ Intelligence",
    description: "Navigating regulatory structures, tax exemptions, and prime office spaces in Gujarat International Finance Tec-City.",
    iconName: "TrendingUp",
    features: ["SEZ Tax Rebate Mapping", "Corporate Relocation Audits", "Elite Workspace Sourcing", "Global Financial Zone S&P"],
    detailedContent: "GIFT City has emerged as India's premier global financial gateway, showcasing high-growth potential and world-class smart infrastructure. PSS Real Estate provides specialized SEZ intelligence to global funds, fintech companies, MNCs, and private HNIs planning to establish presence or acquire high-yield assets in this state-of-the-art special economic zone.\n\nWe perform deep dives into regulatory frameworks, tax-incentive plans, and developmental masterplans. Our specialists handle space allocation audits, legal business licensing prerequisites, and coordinate with administrative panels, ensuring your enterprise scales with the maximum ease and fully legally inside GIFT City's boundaries."
  },
  {
    id: "legal-documentation-support",
    title: "Legal & Documentation Support",
    tagline: "Compliance Desk",
    description: "Exemplary legal verification, title searches, RERA filing, and dynamic registry support for error-free property handovers.",
    iconName: "FileText",
    features: ["30-Year Chain Deed Searches", "Encumbrance Certificate Audits", "RERA Document Checks", "Direct Registrar Execution Logs"],
    detailedContent: "Legal safety is the ultimate foundation of a successful real estate transaction. Our Compliance Desk houses leading industry legal experts devoted to reviewing property document bundles to eliminate the slightest risk of title disputes, building layout deviations, or financial encumbrances.\n\nWe execute exhaustive 30-year chain checks, verify tax clearance certificates, audit municipal utility approvals, and inspect developer-bank connection profiles. We draft bulletproof seller agreements, power of attorney documents, and lease templates. PSS provides you with the peace of mind that every square inch you own is perfectly registered with zero legal liabilities."
  },
  {
    id: "home-loan-assistance",
    title: "Home Loan Assistance",
    tagline: "Finance Structuring",
    description: "Bridging dreams to reality with multi-bank tie-ups, customized financial structuring, and fast collateral approval loops.",
    iconName: "DollarSign",
    features: ["Pre-Approved Home Cash Loans", "Extremely Low ROI Access", "Fast Credit Processing Loops", "Minimal Collateral Verification"],
    detailedContent: "Leveraging financial capital efficiently can transform a property asset acquisition into a lucrative lifestyle investment. Our Home Loan Assistance desk partners with top-tier public and private banking institutions to arrange tailored funding packages for our retail and ultra-high-net-worth investors.\n\nWe analyze credit parameters to identify the most competitive rates of interest (ROI) and flexible repayment structures. Our service handles document compilations, income survey verification, and property valuation certifications on your behalf. We streamline file processing and verification loops to ensure immediate disbursements, making property purchasing swift and effortless."
  },
  {
    id: "nri-property-assistance",
    title: "NRI Property Assistance",
    tagline: "Global Client Desk",
    description: "Dedicated end-to-end management, repatriation consulting, and legal representation for Non-Resident Indian investors.",
    iconName: "Globe",
    features: ["Remote Site Video Surveys", "NRE/NRO Bank Transactions", "Sovereign Repatriation Counsel", "Local Power of Attorney Support"],
    detailedContent: "PSS Real Estate understands that managing property assets from overseas demands absolute, unwavering trust and real-time updates. Our Global Client Desk is specifically structured to offer a dedicated operational axis for Non-Resident Indians (NRIs) looking to lease, exit, or acquire premium Indian real estate.\n\nWe coordinate detailed real-time virtual walkthroughs, draft legally compliant Power of Attorney structures, and perform strict compliance check loops under FEMA regulations. We set up tax-optimized payment rails through NRE or NRO accounts, guaranteeing complete transparency, rapid communications, and zero distance-based delay for our beloved global clients."
  },
  {
    id: "investment-portfolio-planning",
    title: "Investment Portfolio Planning",
    tagline: "Wealth Advisory",
    description: "Data-driven capital allocation models, portfolio rebalancing, and high-yield property investment syndicates.",
    iconName: "BarChart3",
    features: ["Risk-Adjusted Yield Audits", "Regional Asset Diversification", "Exit Capital Gains Strategy", "Micro-market Forecast Indexes"],
    detailedContent: "Real estate is a major component of comprehensive estate planning and personal wealth accumulation. Our Wealth Advisory squad formulates personalized long-term real estate allocation policies based on your risk profile, liquidity desires, and capital growth objectives.\n\nWe employ predictive modeling of upcoming commercial nodes, infrastructural transit lines, and land-use changes to design optimal asset-rebalancing strategies. Whether you are aiming for immediate rental cash flows or multi-decade land appreciation, we organize high-integrity investment portfolios designed to thrive across various market cycles."
  },
  {
    id: "property-resale-leasing",
    title: "Property Resale & Leasing",
    tagline: "Asset Management",
    description: "High-integrity listing promotion, tenant verification, rental optimization, and fast resale turnarounds with absolute pricing trust.",
    iconName: "Percent",
    features: ["Premium Professional Photography", "Exhaustive Tenant KYC Checks", "Legal Lease Registration Log", "High-Reach Digital Promotion"],
    detailedContent: "Acquiring a high-potential asset is only the first step; maximizing its operational performance is where true value is unlocked. Our Asset Management division specializes in minimizing vacancy rates, securing highly verified premium corporate or family tenants, and negotiating highly profitable long-term lease renewals.\n\nFor property owners wishing to exit, we implement targeted high-integrity marketing campaigns across selected digital networks, ensuring competitive resale prices and rapid deals. We manage comprehensive tenant check-loops, utility split verifications, and timely rent deposits so your investment yields completely passive and secure returns."
  },
  {
    id: "builder-partnership-consulting",
    title: "Builder Partnership Consulting",
    tagline: "Developer Alliances",
    description: "Expert advisory for land development joint ventures, project feasibility indexing, and direct exclusive layout distribution.",
    iconName: "Users",
    features: ["Joint Venture Structuring", "Micro-feasibility Research", "Exclusive Master Launch Deals", "Capitalization Underwriting"],
    detailedContent: "At PSS, we bridge the gap between prominent developers and land holding families. Our Builder Partnership Consulting desk is the primary catalyst for organizing highly capital-efficient joint development ventures, land acquisitions, and premium brand collaborations.\n\nWe carry out rigorous technical and financial feasibility index checks, analyze localized floor-area-ratio (FAR) options, and prepare complete market demand mapping reports. For upcoming projects, we offer exclusive underwriting and marketing distribution partnerships to guarantee high pre-sales and a successful build cycle, securing robust values for our builder allies and land-owning patrons."
  }
];

const RESIDENTIAL_IMAGES = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
];

const COMMERCIAL_IMAGES = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582037919863-441147f2c25e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
];

const AGRICULTURAL_IMAGES = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80"
];

export const PROPERTIES: Property[] = [
  // 1. Dwarka Sector 10 Shop
  {
    id: "REI1416803",
    title: "208 Sq.ft. Commercial Shops for Sale in Sector 10, Dwarka, Delhi",
    location: "Sector 10, Dwarka, Delhi",
    sector: "Sector 10",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "208 Sq.ft.",
    areaNum: 208,
    description: "Highly visible premium commercial shop available for sale in Dwarka Sector 10.",
    longDescription: "PSS REAL ESTATE PVT. LTD. presents a premium commercial development situated in the high-density metropolitan corridor of Sector 10, Dwarka, Delhi. This premium 208 Sq.ft. retail shop boasts elegant glass frontage, heavy electrical routing, and strategic visibility to high-footfall walking plazas.",
    images: PAVILION_IMAGES,
    society: "Maxvel Pavilion",
    amenities: ["Power Back Up", "Water Storage", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Located in the main Dwarka Sector 10 Market complex", "Adjacent to metro station gateway", "Direct commercial possession registry ready"],
    availability: "Ready to Move",
    address: "Sector 10 Dwarka, Delhi"
  },
  // 2. Saharanpur Behat Farm Land (400 Sq. Yards)
  {
    id: "REI1416802",
    title: "400 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹33.96 Lac",
    priceNum: 33.96,
    area: "400 Sq. Yards",
    areaNum: 400,
    description: "Prime agricultural farm land with rich soil and sweet water access in Behat, Saharanpur.",
    longDescription: "A glorious suburban farm land holding located in the peaceful greenery of Behat, Saharanpur. Perfectly flat outline, direct wide approach road connectivity, clear registry, sweet underground water sources, and immediate boundary construction allowance.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Rich fertile black alluvial soil", "Direct access to local irrigation canals", "100% boundary secure gating ready"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 3. Saharanpur Behat Farm Land (300 Sq. Yards)
  {
    id: "REI1416801",
    title: "300 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹25.47 Lac",
    priceNum: 25.47,
    area: "300 Sq. Yards",
    areaNum: 300,
    description: "Highly potential agricultural and farm land plot in Behat.",
    longDescription: "PSS Real Estate introduces premium compounding opportunities on fertile agricultural segments in Saharanpur's leading growth zone. Impeccable boundary setups, complete government road connectivity, and robust regional development indices.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security"],
    highlights: ["Phenomenal road connectivity", "Sweet groundwater index", "High investment growth rate expected"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 4. Saharanpur Behat Farm Land (200 Sq. Yards)
  {
    id: "REI1416800",
    title: "200 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹16.98 Lac",
    priceNum: 16.98,
    area: "200 Sq. Yards",
    areaNum: 200,
    description: "Affordable, clear-titled farm/agricultural investment plot.",
    longDescription: "Secure a pocket-friendly retirement farm site or agricultural plot in Behat, Saharanpur with PSS Real Estate's legal consultation. Completely clear title, verified land survey mapping, and easy ownership transfer.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security"],
    highlights: ["Clear title register maps", "Highly fertile agricultural field structure", "Minutes from the regional high-speed bypass"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 5. Saharanpur Behat Farm Land (100 Sq. Yards)
  {
    id: "REI1416799",
    title: "100 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹8.49 Lac",
    priceNum: 8.49,
    area: "100 Sq. Yards",
    areaNum: 100,
    description: "Compact investment agricultural holding in premium location.",
    longDescription: "Excellent small-scale land parcel, ideal for organic farming startups, tree plant farming or personal passive investment. Features double side farm access roads, fully compliant legal document bundle, and peaceful rural surroundings.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage"],
    highlights: ["Most budget-friendly agricultural parcel in Behat", "Immediate ownership registry", "100% clear boundaries"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 6. Saharanpur Behat Farm Land (700 Sq. Yards)
  {
    id: "REI1416798",
    title: "700 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹48.49 Lac",
    priceNum: 48.49,
    area: "700 Sq. Yards",
    areaNum: 700,
    description: "Prestige agricultural farming ground ideal for personal farm villa setups.",
    longDescription: "Enjoy upscale farming and leisure living on this expansive 700 Sq. Yards property. Includes verified regional government canal access points, high strength soil perfect for heavy horticultural plantations, and clear fencing logs.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Perfect rectangular shape dimensions", "Abundant electric grid connection access", "Close to primary Behat markets"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 7. Saharanpur Behat Farm Land (600 Sq. Yards)
  {
    id: "REI1416797",
    title: "600 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹41.99 Lac",
    priceNum: 41.99,
    area: "600 Sq. Yards",
    areaNum: 600,
    description: "Beautifully elevated farming lot with extensive clear road approach.",
    longDescription: "A highly demanded farm site in the Behat valley corridor. Perfect for seasonal vegetable cultivation, wood forest crops, or personal weekend luxury farmhouses with high capital growth potential.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Clear double deeds documents", "Zero regional zoning disputes", "Direct bypass linkages"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 8. Saharanpur Behat Farm Land (500 Sq. Yards)
  {
    id: "REI1416796",
    title: "500 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹34.99 Lac",
    priceNum: 34.99,
    area: "500 Sq. Yards",
    areaNum: 500,
    description: "Elegant green pasture framework with amazing water indices.",
    longDescription: "Experience outstanding organic farming compound options. Structured beautifully near Behat's main water-canal route. Clean demarcations, pristine environment, and premium value-multiplier parameters.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security"],
    highlights: ["Pre-negotiated competitive pricing", "High water table level", "Assured clear boundaries"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 9. Saharanpur Behat Farm Land (1200 Sq. Yards)
  {
    id: "REI1416795",
    title: "1200 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹77.99 Lac",
    priceNum: 77.99,
    area: "1200 Sq. Yards",
    areaNum: 1200,
    description: "Massive farming domain with outstanding highway connectivity.",
    longDescription: "A premier mega farm land lot in Saharanpur's suburban capital corridor. Fits perfectly for establishing commercial nurseries, large agricultural crop processing farms, dairy units, or luxury vacation farm estates.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Enormous corner plot profile", "Direct highway approach allowance", "Complete dynamic legal registry logs ready"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 10. Saharanpur Behat Farm Land (1000 Sq. Yards)
  {
    id: "REI1416794",
    title: "1000 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹64.99 Lac",
    priceNum: 64.99,
    area: "1000 Sq. Yards",
    areaNum: 1000,
    description: "High-potential agricultural field with wide private frontage.",
    longDescription: "A majestic estate-sized land hold. Secure a top tier land title in the highly requested green belts of Behat. Suitable for multiple long-term crop cycles or custom farmhouse infrastructure development.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Beautiful front view layout", "Sweet canal irrigation channels", "Dynamic land security assured"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  // 11. Saharanpur Behat Farm Land (800 Sq. Yards)
  {
    id: "REI1416793",
    title: "800 Sq. Yards Agricultural/Farm Land for Sale in Behat, Saharanpur",
    location: "Behat, Saharanpur",
    sector: "Behat",
    category: "agricultural",
    propertyType: "Agricultural/Farm Land",
    price: "₹51.99 Lac",
    priceNum: 51.99,
    area: "800 Sq. Yards",
    areaNum: 800,
    description: "Spectacular suburban farm territory in Behat, Saharanpur.",
    longDescription: "PSS Real Estate proudly presents a prime 800 Sq. Yards plot perfectly sized for compound farming. Legally verified document bundles, clear coordinates, high ground fertility indices, and a peaceful environment.",
    images: GMAX_VALLEY_IMAGES,
    amenities: ["Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Excellent entry positioning", "High organic soil potential", "100% clean record register files"],
    availability: "Ready to Move",
    address: "Behat, Saharanpur"
  },
  
  // 12. Rama Road, Kirti Nagar 4BHK (4246 Sq.ft.)
  {
    id: "REI1388704",
    title: "4 BHK Flats & Apartments for Sale in Rama Road, Kirti Nagar, Delhi (4246 Sq.ft.)",
    location: "Rama Road, Kirti Nagar, Delhi",
    sector: "Kirti Nagar",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "₹12.74 Cr.",
    priceNum: 1274,
    area: "4246 Sq.ft.",
    areaNum: 4246,
    bedrooms: 4,
    description: "Magnificent presidential 4 BHK home situated in Kirti Nagar's premier highrise complex.",
    longDescription: "Explore ultra-premium highrise lifestyle at Rama Road, Kirti Nagar, West Delhi. Spanning a palatial 4,246 Sq.ft super area, this luxury residence merges cutting edge construction structures with outstanding panoramic views over the Delhi skyline. Features VRV central ventilation, Italian gold marble layouts, expansive modular kitchen setup, and smart digital keys.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Centrally located on Rama Road near metro transit hubs", "Double parking in stilt level layers included", "Approved for immediate home loans"],
    availability: "Possession Soon",
    address: "Rama Road, Kirti Nagar, Delhi"
  },
  // 13. Rama Road, Kirti Nagar 3BHK (3685 Sq.ft.)
  {
    id: "REI1388703",
    title: "3 BHK Flats & Apartments for Sale in Rama Road, Kirti Nagar, Delhi (3685 Sq.ft.)",
    location: "Rama Road, Kirti Nagar, Delhi",
    sector: "Kirti Nagar",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "₹11.06 Cr.",
    priceNum: 1106,
    area: "3685 Sq.ft.",
    areaNum: 3685,
    bedrooms: 3,
    description: "Palatial 3 BHK highrise residence on Kirti Nagar's premier avenue.",
    longDescription: "PSS Real Estate introduces a rare opportunity to own a world-class 3 BHK flat. Impeccably finished to meet highest HNI standards, combining dramatic living heights, heavy bathroom fittings, independent power phases, and continuous municipal water feeds.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Ultra high security biometric gates", "Continuous electricity supply guarantee", "Excellent cross daylighting layout"],
    availability: "Possession Soon",
    address: "Rama Road, Kirti Nagar, Delhi"
  },
  // 14. Rama Road, Kirti Nagar 3BHK (3440 Sq.ft.)
  {
    id: "REI1388702",
    title: "3 BHK Flats & Apartments for Sale in Rama Road, Kirti Nagar, Delhi (3440 Sq.ft.)",
    location: "Rama Road, Kirti Nagar, Delhi",
    sector: "Kirti Nagar",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "₹10.32 Cr.",
    priceNum: 1032,
    area: "3440 Sq.ft.",
    areaNum: 3440,
    bedrooms: 3,
    description: "Fabulous ready-to-move 3 BHK apartment with exceptional wooden detailing.",
    longDescription: "Acquire West Delhi's signature address. Generously layout with expansive master bedrooms, attached toilet blocks, modern double glazing windows to filter noises, and wide running decks for family lounge nights.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Zero transfer fees required", "100% legal title clearance dossier registered", "5 mins check from West Delhi shopping corridors"],
    availability: "Possession Soon",
    address: "Rama Road, Kirti Nagar, Delhi"
  },
  
  // 15. Golf Course Ext Road, Gurgaon (4200 Sq.ft.)
  {
    id: "REI1387284",
    title: "4 BHK Flats & Apartments for Sale in Golf Course Ext Road, Gurgaon (4200 Sq.ft.)",
    location: "Golf Course Ext Road, Gurgaon",
    sector: "Golf Course Ext Road",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "4200 Sq.ft.",
    areaNum: 4200,
    bedrooms: 4,
    description: "Extravagant luxury 4 Bedroom condominium on the direct Golf Course Extension highway.",
    longDescription: "Live in absolute corporate majesty in Gurgaon's most prestigious commercial-residential corridor. Spanning 4200 Sq.ft, this ultra luxury residential layout includes biometric smart entries, solid wood flooring in master chambers, expansive Italian tile kitchen, and direct overlooks to Golf Course zones.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Premium Golf green park view front", "Underground stilt triple car park allocation", "Biometric card activated direct elevator access"],
    availability: "Ready to Move",
    address: "Golf Course Ext Road, Gurgaon"
  },
  // 16. Golf Course Ext Road, Gurgaon (2035 Sq.ft.)
  {
    id: "REI1387283",
    title: "3 BHK Flats & Apartments for Sale in Golf Course Ext Road, Gurgaon (2035 Sq.ft.)",
    location: "Golf Course Ext Road, Gurgaon",
    sector: "Golf Course Ext Road",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "2035 Sq.ft.",
    areaNum: 2035,
    bedrooms: 3,
    description: "Compact luxury 3 BHK unit ideal for modern professional families in Gurgaon.",
    longDescription: "A highly demanded layout offering space optimized luxury on Golf Course Extension Road. Masterfully planned with large daylight windows, pre-fitted VRV cooling systems, and highly durable structural concrete aggregates.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["High-speed passenger lifts index", "Smart home controls integrated", "Excellent high-yield passive rental potential"],
    availability: "Ready to Move",
    address: "Golf Course Ext Road, Gurgaon"
  },
  // 17. Golf Course Ext Road, Gurgaon (3500 Sq.ft.)
  {
    id: "REI1387282",
    title: "3 BHK Flats & Apartments for Sale in Golf Course Ext Road, Gurgaon (3500 Sq.ft.)",
    location: "Golf Course Ext Road, Gurgaon",
    sector: "Golf Course Ext Road",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "3500 Sq.ft.",
    areaNum: 3500,
    bedrooms: 3,
    description: "Massive estate-sized 3 BHK apartment with servant room in Gurgaon.",
    longDescription: "PSS Real Estate presents this premium grand 3 Bedroom residence. Perfectly detailed layout, incorporating dynamic double size living areas, attached private servant suites with separate bathroom access, and Burma teak wooden doors.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Dedicated independent servant entry door", "Vastu compliant north-east entry index", "Clear property transfer ready"],
    availability: "Possession Soon",
    address: "Golf Course Ext Road, Gurgaon"
  },
  // 18. Golf Course Ext Road, Gurgaon (3900 Sq.ft.)
  {
    id: "REI1387281",
    title: "3 BHK Flats & Apartments for Sale in Golf Course Ext Road, Gurgaon (3900 Sq.ft.)",
    location: "Golf Course Ext Road, Gurgaon",
    sector: "Golf Course Ext Road",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "3900 Sq.ft.",
    areaNum: 3900,
    bedrooms: 3,
    description: "Magnificent supreme space 3 BHK flat with luxury fittings.",
    longDescription: "Live grandly in this 3900 Sq.ft majestic high-rise segment on Gurgaon's primary lane. Seamless flow configurations, pre-insulated low heat noise UPVC doors, and outstanding luxury brand plumbing setups.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Double side wide open corridors", "Fully secure gated luxury development", "Mins from Cyber Hub transit routes"],
    availability: "Ready to Move",
    address: "Golf Course Ext Road, Gurgaon"
  },
  
  // 19. Ghaziabad Gagan Vihar Shop 636 (REI1387248)
  {
    id: "REI1387248",
    title: "636 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "636 Sq.ft.",
    areaNum: 636,
    description: "Outstanding commercial showroom floor space with wide main-road frontage.",
    longDescription: "PSS REAL ESTATE PVT. LTD. brings an exciting commercial investment footprint in Gagan Vihar, Ghaziabad. Excellent 636 Sq.ft retail shop area with optimal loading layouts and high ceilings. Strategically positioned next to high traffic residential lanes.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Outstanding main market road exposure", "Independent electricity meter installed", "Low maintenance charges framework"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 20. Ghaziabad Gagan Vihar Shop 607 (REI1387247)
  {
    id: "REI1387247",
    title: "607 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "607 Sq.ft.",
    areaNum: 607,
    description: "Wide storefront premium commercial space in popular retail plaza.",
    longDescription: "PSS Real Estate presents this premium commercial shop holding. Ideal for restaurants, fast food outlets, banks, diagnostic centers, dry cleaner franchises or brand showrooms.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Reserved Parking", "Security"],
    highlights: ["High public parking availability index", "Dynamic corporate growth zone", "Zero-dispute title registry"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 21. Ghaziabad Gagan Vihar Shop 540 (REI1387246)
  {
    id: "REI1387246",
    title: "540 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "540 Sq.ft.",
    areaNum: 540,
    description: "Superb commercial business layout with full loading dock access.",
    longDescription: "Explore this highly viable commercial commercial shop in the center of Gagan Vihar. Highly economical pricing with premium potential ROI. Strong public footfall counts all days of the week.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Reserved Parking", "Security"],
    highlights: ["Wide public entry lane", "Continuous power pipeline backing", "Direct registry delivery"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 22. Ghaziabad Gagan Vihar Shop 520 (REI1387245)
  {
    id: "REI1387245",
    title: "520 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "520 Sq.ft.",
    areaNum: 520,
    description: "Outstanding retail shop in Gagan Vihar commercial center.",
    longDescription: "Exceptional commercial showroom setup in the main business hub. Clean parameters, pre-engineered for cooling splits, fully monitored fire safety sprinkler grids, and massive public walking avenues.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Immediate key transfer allowance", "Dynamic local market connectivity", "MCD compliant construction"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 23. Ghaziabad Gagan Vihar Shop 480 (REI1387244)
  {
    id: "REI1387244",
    title: "480 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "480 Sq.ft.",
    areaNum: 480,
    description: "Compact high footfall commercial shop in Gagan Vihar Ghaziabad.",
    longDescription: "Step into prime returns with this high exposure independent commercial segment. Perfect for pharmacy, dental clinic, corporate retail franchises, apparel boutiques or high volume bank ATMs.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Highly competitive pricing setup", "Unmatched customer density radius", "Ready to customize interiors"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 24. Ghaziabad Gagan Vihar Shop 478 (REI1387243)
  {
    id: "REI1387243",
    title: "478 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "478 Sq.ft.",
    areaNum: 478,
    description: "Highly potential commercial layout for investment.",
    longDescription: "Acquire a robust commercial asset backed by clear MCD structural maps and low monthly maintenance. Generous window spaces for product showcasing.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Direct-builder deal with PSS", "Sweet rental payback parameters", "10M wide frontage road access"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 25. Ghaziabad Gagan Vihar Shop 258 (REI1387242)
  {
    id: "REI1387242",
    title: "258 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "258 Sq.ft.",
    areaNum: 258,
    description: "Elegantly sized 258 Sq.ft commercial shop under sale in Gagan Vihar.",
    longDescription: "A great entry point asset for local investors. Highly optimized layout ideal for cosmetic shops, boutique design studios, stationary hubs, or optical stores.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Extremely low CAM overhead charges", "Surrounded by huge housing clusters", "Ready to move in"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  // 26. Ghaziabad Gagan Vihar Shop 263 (REI1387241)
  {
    id: "REI1387241",
    title: "263 Sq.ft. Commercial Shops for Sale in Gagan Vihar, Ghaziabad",
    location: "Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "263 Sq.ft.",
    areaNum: 263,
    description: "Fabulous ready commercial shop with excellent security frameworks.",
    longDescription: "Secure business returns with this highly economical retail commercial shop. Complete digital security camera tracking around the building, heavy structural pillars, and continuous utilities.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Clear registry indices ready", "Highly demanded commercial block", "Immediate possession"],
    availability: "Ready to Move",
    address: "Gagan Vihar, Ghaziabad"
  },
  
  // 27. Dwarka 19B Shop 1200 (REI1387220)
  {
    id: "REI1387220",
    title: "1200 Sq.ft. Commercial Shops for Sale in Sector 19B, Dwarka, Delhi",
    location: "Sector 19B, Dwarka, Delhi",
    sector: "Sector 19B",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "1200 Sq.ft.",
    areaNum: 1200,
    description: "Mega double front corner commercial showroom in Sector 19B Dwarka.",
    longDescription: "An incredibly rare giant-sized commercial space spanning 1,200 Sq.ft in Dwarka Sector 19B's core trade avenue. Double height ceiling allows flexible formatting for multi level retail setups. Suitable for fine dining hubs, fashion flagships or banking branches.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Premium double front corner visibility", "Huge public car parking yard adjacent", "Biometric and smart electrical parameters ready"],
    availability: "Ready to Move",
    address: "Sector 19B Dwarka, Delhi"
  },
  // 28. Dwarka 19B Shop 200 (REI1387219)
  {
    id: "REI1387219",
    title: "200 Sq.ft. Commercial Shops for Sale in Sector 19B, Dwarka, Delhi",
    location: "Sector 19B, Dwarka, Delhi",
    sector: "Sector 19B",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "200 Sq.ft.",
    areaNum: 200,
    description: "Fabulous ready-to-move-in retail shop in prime commercial complex in Dwarka.",
    longDescription: "Step into Sector 19B's growing business ecosystem. This 200 Sq.ft commercial shop offers dynamic frontage, independent multi line fiber, and heavy stilt support structures.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Perfect rectangular shape layout", "5 Mins from local metro routes", "Zero legal dispute record"],
    availability: "Ready to Move",
    address: "Sector 19B Dwarka, Delhi"
  },
  // 29. Dwarka 19B Shop 190 (REI1387218)
  {
    id: "REI1387218",
    title: "190 Sq.ft. Commercial Shops for Sale in Sector 19B, Dwarka, Delhi",
    location: "Sector 19B, Dwarka, Delhi",
    sector: "Sector 19B",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "190 Sq.ft.",
    areaNum: 190,
    description: "Highly profitable compact commercial shop in Dwarka commercial forum.",
    longDescription: "PSS Real Estate is delighted to unveil a highly suitable business property. Clean titles, pre-registered electrical links, optimal layout configurations.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security"],
    highlights: ["Highly accessible commercial plaza", "MCD licensed parameters", "Assured capital growth"],
    availability: "Ready to Move",
    address: "Sector 19B Dwarka, Delhi"
  },
  // 30. Dwarka 19B Shop 70 (REI1387217)
  {
    id: "REI1387217",
    title: "70 Sq.ft. Commercial Shops for Sale in Sector 19B, Dwarka, Delhi",
    location: "Sector 19B, Dwarka, Delhi",
    sector: "Sector 19B",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "70 Sq.ft.",
    areaNum: 70,
    description: "Micro-sized high yield commercial booth in Sector 19B Dwarka.",
    longDescription: "Excellent small commercial shop space, perfectly matching ATM setup, mobile repair franchises, keyshops, coffee booths or travel counters. Maximum visual reach with minimum maintenance cost.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Security"],
    highlights: ["Extremely central walk lane", "High ROI payback with ATM leasing", "Immediate key registry"],
    availability: "Ready to Move",
    address: "Sector 19B Dwarka, Delhi"
  },
  // 31. Dwarka 19B Shop 50 (REI1387216)
  {
    id: "REI1387216",
    title: "50 Sq.ft. Commercial Shops for Sale in Sector 19B, Dwarka, Delhi",
    location: "Sector 19B, Dwarka, Delhi",
    sector: "Sector 19B",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "50 Sq.ft.",
    areaNum: 50,
    description: "Super micro commercial counter inside premium shopping arcade.",
    longDescription: "Outstanding opportunity to establish a micro trading counter inside Sector 19B's busiest marketplace. High visibility shutter, low common area charges, legally certified documentation.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Security"],
    highlights: ["Most affordable retail entry of Dwarka", "High customer footprint lane", "Immediate dynamic registration"],
    availability: "Ready to Move",
    address: "Sector 19B Dwarka, Delhi"
  },
  
  // 32. Rohini Sec 18 Shop 169 (REI1386863)
  {
    id: "REI1386863",
    title: "169 Sq.ft. Commercial Shops for Sale in Sector 18, Rohini, Delhi",
    location: "Sector 18, Rohini, Delhi",
    sector: "Sector 18",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "169 Sq.ft.",
    areaNum: 169,
    description: "High footfall premium retail commercial shop in Sector 18 Rohini.",
    longDescription: "Ensure ultimate business visibility in Rohini Sector 18. This 169 Sq.ft retail commercial shop features grand full glass facades, continuous corporate power feeds, and low common maintenance overheads.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Located in Rohini Sector 18's prime market line", "Outstanding daily customer traffic count", "Legally pre-vetted titles"],
    availability: "Ready to Move",
    address: "Sector 18 Rohini, Delhi"
  },
  // 33. Rohini Sec 18 Shop 240 (REI1386862)
  {
    id: "REI1386862",
    title: "240 Sq.ft. Commercial Shops for Sale in Sector 18, Rohini, Delhi",
    location: "Sector 18, Rohini, Delhi",
    sector: "Sector 18",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "240 Sq.ft.",
    areaNum: 240,
    description: "Elegant corner position commercial shop in busiest North Delhi plaza.",
    longDescription: "PSS Real Estate proudly presents a prime corner commercial shop in Sector 18. Perfect rectangular footprint, high ceiling block permitting dynamic display boards, and exceptional electrical frameworks.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Corner business exposure multiplier", "Direct and rapid registry delivery", "MCD compliant layout approved"],
    availability: "Ready to Move",
    address: "Sector 18 Rohini, Delhi"
  },
  // 34. Rohini Sec 18 Shop 121 (REI1386861)
  {
    id: "REI1386861",
    title: "121 Sq.ft. Commercial Shops for Sale in Sector 18, Rohini, Delhi",
    location: "Sector 18, Rohini, Delhi",
    sector: "Sector 18",
    category: "commercial",
    propertyType: "Commercial Shops",
    price: "Call for Price",
    priceNum: 0,
    area: "121 Sq.ft.",
    areaNum: 121,
    description: "Super highly-demanded compact retail commercial shop in Sector 18 Rohini.",
    longDescription: "A glorious small shop footprint optimized for extremely high footfalls. Centered in Sector 18, Rohini's top-tier retail market, this 121 Sq.Ft. retail shop boasts a full-front clear glass facade with durable automated shutter setups.",
    images: COMMERCIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Security", "Maintenance Staff"],
    highlights: ["Direct pedestrian lane access", "Low maintenance cost database verified", "Immediate key possession"],
    availability: "Ready to Move",
    address: "Sector 18 Rohini, Delhi"
  },
  
  // 35. Rohini Sec 32 4BHK 3650 (REI1386858)
  {
    id: "REI1386858",
    title: "4 BHK Flats & Apartments for Sale in Sector 32, Rohini, Delhi (3650 Sq.ft.)",
    location: "Sector 32, Rohini, Delhi",
    sector: "Sector 32",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "3650 Sq.ft.",
    areaNum: 3650,
    bedrooms: 4,
    description: "Palatial 4 Bedroom luxury floor in Rohini Sector 32.",
    longDescription: "Experience unmatched residential prestige in North Delhi's premier layout. Fully detailed independent floor spanning 3,650 Sq.ft with premium marble works, biometric smart lift, and double stilt car parking lines.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Overlooks regional green parks", "Turkish sanitary fittings", "Registry keys inside 7 days"],
    availability: "Ready to Move",
    address: "Sector 32, Rohini, Delhi"
  },
  // 36. Rohini Sec 32 4BHK 3450 (REI1386857) - MATCH THE REQUESTED EXAMPLE COMPREHENSIVELY!
  {
    id: "REI1386857",
    title: "4 BHK Flats & Apartments for Sale in Sector 32, Rohini, Delhi (3450 Sq.ft.)",
    location: "Sector 32, Rohini, Delhi",
    sector: "Sector 32",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "3450 Sq.ft.",
    areaNum: 3450,
    bedrooms: 4,
    description: "PSS REAL ESTATE PVT. LTD. is proud to unveil its new venture in the Residential Property real estate . Its Upcoming Noble Ayra project is located in Delhi which is structured and designed beautifully with an amazing site plan. This project offers 4 BHK Flats / Apartments",
    longDescription: "PSS REAL ESTATE PVT. LTD. is proud to unveil its new venture in the Residential Property real estate . Its Upcoming Noble Ayra project is located in Delhi which is structured and designed beautifully with an amazing site plan. This project offers 4 BHK Flats / Apartments",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Upcoming Noble Ayra project beautifully structured", "Direct stilt parking and automated lifts", "100% legal title clear and approved"],
    availability: "Ready to Move",
    society: "Noble Ayra 1",
    address: "Plot No.2a, Pocket 2, Block B, Sector 32, Rohini, Delhi"
  },
  // 37. Rohini Sec 32 4BHK 2650 (REI1386831)
  {
    id: "REI1386831",
    title: "4 BHK Flats & Apartments for Sale in Sector 32, Rohini, Delhi (2650 Sq.ft.)",
    location: "Sector 32, Rohini, Delhi",
    sector: "Sector 32",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "2650 Sq.ft.",
    areaNum: 2650,
    bedrooms: 4,
    description: "Luxury ready-to-move 4 BHK residence in Sector 32, Rohini.",
    longDescription: "Exceptional design and construction. Spans 2650 Sq.ft of beautifully detailed spaces with designer built-in wardrobes, premium modular kitchen, and private stilt multi vehicle parking spaces.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Dynamic cross daylighting", "Ready to move in with zero MCD friction", "Approved by premier institutions for smart financing"],
    availability: "Ready to Move",
    address: "Sector 32, Rohini, Delhi"
  },
  // 38. Rohini Sec 32 4BHK 2450 (REI1386830)
  {
    id: "REI1386830",
    title: "4 BHK Flats & Apartments for Sale in Sector 32, Rohini, Delhi (2450 Sq.ft.)",
    location: "Sector 32, Rohini, Delhi",
    sector: "Sector 32",
    category: "residential",
    propertyType: "Flats & Apartments",
    price: "Call for Price",
    priceNum: 0,
    area: "2450 Sq.ft.",
    areaNum: 2450,
    bedrooms: 4,
    description: "Gorgeous modular 4 Bedroom independent stilt floor in Rohini.",
    longDescription: "PSS Real Estate presents this premium grand 2450 Sq.ft floor merged with elegant stilt double parking, high-speed lift, secure digital keys, and premium wooden false ceiling frameworks.",
    images: RESIDENTIAL_IMAGES,
    amenities: ["Power Back Up", "Water Storage", "Lift", "Reserved Parking", "Security", "Maintenance Staff"],
    highlights: ["Super comfortable metro access link", "100% vastu compliant layout structure", "Zero maintenance stilt levels"],
    availability: "Ready to Move",
    address: "Sector 32, Rohini, Delhi"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-maxvel-alvista",
    name: "Maxvel Alvista",
    location: "Plot No 2a, Block - A - Sector 32, Delhi",
    sector: "Sector 32",
    description: "4 BHK Luxury Apartments And Penthouses - A retreat worthy of a flaunt!",
    longDescription: "Introducing Maxvel Alvista by Maxvel group, the pinnacle of luxury living in Sector 32, Rohini, New Delhi. As the 1st and tallest luxury residential apartment project in Rohini, Maxvel Alvista embodies a realm of exquisite opulence, defining the essence of refined living.",
    highlights: [
      "1st and tallest luxury residential apartment project in Rohini",
      "Semi Furnished Apartments with Fully Fitted Modular Kitchen & Wardrobe",
      "VRV Air Conditioning & 5-Tier Security system",
      "Dedicated basement car parking and modern club house"
    ],
    status: "Under Construction",
    projectType: "Flats & Apartments",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "DLRERA2024P0004",
    amenities: [
      "CCTV Camera",
      "Earthquake Resistant Structure",
      "Gymnasium",
      "Swimming Pool",
      "Power Back Up",
      "Reserved Parking"
    ],
    address: "Plot No 2a, Block - A, Sector 32, Delhi - 110042",
    areaRange: "2450 - 2650 Sq.ft.",
    possessionDate: "Feb 2028",
    units: "4 BHK",
    highlightsDetail: "Semi Furnished Apartments With Fully Fitted Modular Kitchen & Wardrobe, Vrv Air Conditioning, Dedicated Basement Car Parking & Club House",
    outdoorAmenities: "Swimming Pool, Half Basket Ball Court, Badminton Court, Landscaped Gardens, Jogging Track, Kids Play Area, Water Features, Pet Relief Area.",
    indoorAmenities: "Art Studio, Yoga Room, Restaurant, Library, Billiards, Mini Gym, Dance & Music Room, Multipurpose Room.",
    towerAmenities: "Reception, Drivers Lounge, Restrooms.",
    otherFacilities: "5- Tier Security, Car Washing Area, Housekeeping, Round- The Clock Utilities, Covered Parking With Ev Charging.",
    unitConfigs: [
      { type: "4 BHK Flats / Apartments", area: "2450 Sq.ft.", price: "Call for Price" },
      { type: "4 BHK Flats / Apartments", area: "2650 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Earthquake Resistant Structure", "Fire Fighting Equipment", "Security / Fire Alarm", "Gymnasium", "Wi-fi Connectivity", "Intercom", "Indoor Games", "Jogging Track", "Kids Play Area", "Landspace Garden", "Lift", "Maintenance Staff", "Meditation Area", "Power Back Up", "Private Tarrace", "Piped Gas", "Park", "Water purifier", "Play Area", "Reserved Parking", "School", "Swimming Pool", "Security", "Sports Facility", "Visitor Parking", "Vastu Compliant", "Water Storage", "Waste Disposal", "Tennis Court", "Squash Court", "Basket Ball"],
    locationMapDesc: "Plot No 2a, Block - A, Sector 32, Rohini, New Delhi - 110042"
  },
  {
    id: "proj-noble-ayra",
    name: "Noble Ayra",
    location: "Plot No.2a, Pocket 2, Block B - Sector 32, Delhi",
    sector: "Sector 32",
    description: "Luxury Apartments in Delhi",
    longDescription: "Introducing Noble Ayra by CRA Developers, the pinnacle of luxury living in Sector 32, Rohini, New Delhi. As the 1st and tallest luxury residential apartment project in the sector, Noble Ayra embodies a realm of exquisite opulence, defining the essence of refined living.",
    highlights: [
      "1st and tallest luxury residential apartment project in the sector",
      "Semi Furnished Apartments with premium architectural layouts",
      "Beautiful landscaped pathways and scenic horizons",
      "Located in the premium core segment of Rohini Sector 32"
    ],
    status: "Possession Soon",
    projectType: "Flats & Apartments",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "DLRERA2024P0002",
    amenities: [
      "CCTV Camera",
      "Earthquake Resistant Structure",
      "Security / Fire Alarm",
      "Power Back Up",
      "Lift",
      "Water Storage"
    ],
    address: "Plot No.2a, Pocket 2, Block B - Sector 32, Delhi - 110042",
    areaRange: "2200 - 2450 Sq.ft.",
    possessionDate: "Dec 2026",
    units: "3 & 4 BHK",
    highlightsDetail: "Ultra Luxury residential spaces featuring 100% premium flooring, soundproof windows, gated entries, and advanced intercom structures.",
    outdoorAmenities: "Beautiful landscaped peripheral gardens, running tracks, children play swings, senior citizen lounging decks.",
    indoorAmenities: "Art Studio, Dynamic Gymnasium, Visual Books Area, Indoor games room.",
    towerAmenities: "Executive lobby with double height ceiling, Drivers restroom.",
    otherFacilities: "3-Tier Gated Security, Round-the-clock Utilities, EV Smart Charging slots.",
    unitConfigs: [
      { type: "3 BHK Flats / Apartments", area: "2200 Sq.ft.", price: "Call for Price" },
      { type: "4 BHK Flats / Apartments", area: "2450 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Earthquake Resistant Structure", "Fire Fighting Equipment", "Security / Fire Alarm", "Gymnasium", "Wi-fi Connectivity", "Intercom", "Indoor Games", "Jogging Track", "Kids Play Area", "Landspace Garden", "Lift", "Maintenance Staff", "Power Back Up", "Park", "Reserved Parking", "Swimming Pool", "Security", "Visitor Parking", "Vastu Compliant", "Water Storage", "Basket Ball"],
    locationMapDesc: "Plot No.2a, Pocket 2, Block B, Sector 32, Rohini, New Delhi - 110042"
  },
  {
    id: "proj-sawasdee-18",
    name: "Sawasdee 18",
    location: "Plot No – LSC, Block E - Sector 18 Rohini, Delhi",
    sector: "Sector 18",
    description: "Centrally and strategically located in Rohini, Sawasdee 18 will arguably be the sure-shot landmark and the busiest community center of the area.",
    longDescription: "Centrally and strategically located in Rohini, Sawasdee 18 will arguably be the sure-shot landmark and the busiest community center of the area. This place will definitely get businesses to the right place with its huge catchment area and most footfall.",
    highlights: [
      "Centrally and strategically located in core Sector 18 Rohini",
      "Unmatched giant catchment area ensuring maximum business growth",
      "Busiest neighborhood community center profile in North Delhi",
      "Outstanding retail and shopping commercial infrastructure"
    ],
    status: "Ready to Move",
    projectType: "Commercial Shops",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "DLRERA2024P0008",
    amenities: [
      "Power Back Up",
      "Reserved Parking",
      "CCTV Camera",
      "Security",
      "Maintenance Staff"
    ],
    address: "Plot No – LSC, Block E - Sector 18 Rohini, Delhi - 110085",
    areaRange: "150 - 500 Sq.ft.",
    possessionDate: "Immediate Possession",
    units: "Commercial Shops / Retails",
    highlightsDetail: "Premium commercial spaces with wide storefront double glass facades, high ceilings, multiple pathways, and heavy power load support.",
    outdoorAmenities: "Vast public parking zones, dynamic outdoor plaza layouts, heavy duty common utility poles, clean pavements.",
    indoorAmenities: "Central common restrooms, cafeteria junctions, bank ATMs, escalators.",
    towerAmenities: "Multiple security check gates, service entry docks.",
    otherFacilities: "24/7 common sweeping, heavy capacity central generator backing, complete fire-fighting system.",
    unitConfigs: [
      { type: "Commercial Shops / Retails", area: "150 Sq.ft.", price: "Call for Price" },
      { type: "Commercial Shops / Retails", area: "500 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Fire Fighting Equipment", "Security / Fire Alarm", "Power Back Up", "Reserved Parking", "Visitor Parking", "Maintenance Staff", "Lift", "Wi-fi Connectivity", "Intercom", "Water Storage", "Waste Disposal"],
    locationMapDesc: "Plot No – LSC, Block E, Sector 18, Rohini, Delhi - 110085"
  },
  {
    id: "proj-omaxe-state",
    name: "The Omaxe State",
    location: "Close to IGI airport - Sector 19B Dwarka, Delhi",
    sector: "Sector 19B",
    description: "Epicenter for IT/ITES and digital commercial advancements in prime Dwarka Sector 19B.",
    longDescription: "Omaxe is undergoing remarkable transformations, poised to become a hub of innovation and progress. As the new epicenter for IT and ITES advancements, the city is embracing digital transformation like never before. With Omaxe's arrival, Dwarka is set to witness a massive commercial leap.",
    highlights: [
      "Located in the most requested commercial sector of Dwarka",
      "Very close to Indira Gandhi International Airport gateway",
      "Epicenter of modern design and premium shopping centers",
      "Surrounded by a high-density elite housing catchment area"
    ],
    status: "Under Construction",
    projectType: "Commercial Shops",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582037919863-441147f2c25e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "DLRERA2024P0011",
    amenities: [
      "Power Back Up",
      "Reserved Parking",
      "CCTV Camera",
      "Security",
      "Gymnasium"
    ],
    address: "Sector 19B Dwarka, New Delhi - 110075",
    areaRange: "200 - 1500 Sq.ft.",
    possessionDate: "Dec 2028",
    units: "Showrooms / Retails",
    highlightsDetail: "World-class central sports and shopping commercial district close to IGI airport, offering double height screens, wide public arenas, and heavy footfall corridors.",
    outdoorAmenities: "Peripheral sports pathways, municipal fountains, central high-streets walking zones, massive car parks.",
    indoorAmenities: "Central HVAC controls, escalators, multi-cuisine food courts, premier banking sectors.",
    towerAmenities: " concierge desk service portal, service lifts.",
    otherFacilities: "5-tier high Tech safety, EV charging points, professional security monitoring.",
    unitConfigs: [
      { type: "Commercial Shops / Retails", area: "200 Sq.ft.", price: "Call for Price" },
      { type: "Commercial Shops / Retails", area: "1500 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Fire Fighting Equipment", "Security / Fire Alarm", "Power Back Up", "Reserved Parking", "Visitor Parking", "Maintenance Staff", "Lift", "Wi-fi Connectivity", "Intercom", "Water Storage", "Waste Disposal", "Gymnasium", "Piped Gas"],
    locationMapDesc: "Sector 19B Dwarka, New Delhi - 110075"
  },
  {
    id: "proj-oxy-hi-street",
    name: "Oxy Hi Street",
    location: "Koyal Enclave - Gagan Vihar, Ghaziabad",
    sector: "Gagan Vihar",
    description: "Oxy Hi Street is a dynamic commercial project launched in January 2024, strategically located in Koyal Enclave, Bhopura, Ghaziabad.",
    longDescription: "Oxy Hi Street is a dynamic commercial project launched in January 2024, strategically located in Koyal Enclave, Bhopura, Ghaziabad. Developed by Oxy Heightz Infra LLP, this project marks the company’s second venture in the area, spanning exceptional visual frontage and modern layouts designed to yield supreme returns.",
    highlights: [
      "Dynamically planned commercial arcade on the Ghaziabad boundary",
      "Centrally situated within the highly active Koyal Enclave zone",
      "Surrounded by vast residential and high-rise group housing units",
      "Budget friendly commercial entry with highly attractive payback indices"
    ],
    status: "Under Construction",
    projectType: "Commercial Shops",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582037919863-441147f2c25e?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "UPRERAPRJ20240902",
    amenities: [
      "Power Back Up",
      "Security",
      "CCTV Camera",
      "Visitor Parking",
      "Maintenance Staff"
    ],
    address: "Koyal Enclave, Gagan Vihar, Ghaziabad, UP - 201005",
    areaRange: "120 - 450 Sq.ft.",
    possessionDate: "Jun 2027",
    units: "Commercial Shops",
    highlightsDetail: "Excellent retail plaza in Gagan Vihar suburbs, offering custom shutters, firefighting lines, high exposure window views, and robust building structures.",
    outdoorAmenities: "Common open parkings, neat visual pavements, elegant street poles, clean green lanes.",
    indoorAmenities: "Common lounge, diagnostic space provisions, coffee outlets, bank ATM slots.",
    towerAmenities: "Common maintenance room, service stairs.",
    otherFacilities: "Integrated CCTV tracker, continuous common line cleaning, emergency fire systems.",
    unitConfigs: [
      { type: "Commercial Shops", area: "120 Sq.ft.", price: "Call for Price" },
      { type: "Commercial Shops", area: "450 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Fire Fighting Equipment", "Security / Fire Alarm", "Power Back Up", "Reserved Parking", "Visitor Parking", "Maintenance Staff", "Water Storage", "Waste Disposal"],
    locationMapDesc: "Koyal Enclave, Gagan Vihar, Bhopura, Ghaziabad, UP - 201005"
  },
  {
    id: "proj-tarc-ishva",
    name: "Tarc Ishva",
    location: "Tarc ishva - Golf Course Ext Road, Gurgaon",
    sector: "Golf Course Ext Road",
    description: "Welcome to a unique and differentiated luxury development TARC ISHVA - Four-side Open Residences at 63A, Gurgaon.",
    longDescription: "Come & Experience TARC ISHVA Sample Apartment. Welcome to a unique and differentiated luxury development TARC ISHVA - Four-side Open Residences at 63A, Gurgaon. The first of its kind, TARC ISHVA promises a number of unmatched features designed for premium global standard living.",
    highlights: [
      "Extravagant Four-side Open premium elite residences",
      "Situated in the absolute gold stretch of Golf Course Ext Road",
      "Surrounded by global premium corporate MNCs and highrise centers",
      "High tech interiors matched with top brand European bath setups"
    ],
    status: "Under Construction",
    projectType: "Flats & Apartments",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "HRERA2024G0088",
    amenities: [
      "CCTV Camera",
      "Gymnasium",
      "Swimming Pool",
      "Power Back Up",
      "Lift",
      "Sports Facility"
    ],
    address: "Sector 63A, Golf Course Extension Road, Gurgaon, Haryana - 122002",
    areaRange: "2900 - 3900 Sq.ft.",
    possessionDate: "Dec 2029",
    units: "3 & 4 BHK",
    highlightsDetail: "Super ultra highrise towers with four side open layout structures. Massive master bedrooms with independent wooden flooring, and central VRV soundproof air conditioning systems.",
    outdoorAmenities: "Infinity swimming pool, half basketball court, lawn tennis court, jogging trail, landscaped gardens.",
    indoorAmenities: "Private cinema screen hall, yoga deck, indoor pool board, mini gymnasium, visual dance studio.",
    towerAmenities: "Double height fully air conditioned reception block, drivers lounge, guard restrooms.",
    otherFacilities: "5-Tier High Tech security, EV fast charging socket lines, round-the-clock utilities.",
    unitConfigs: [
      { type: "3 BHK Flats / Apartments", area: "2900 Sq.ft.", price: "Call for Price" },
      { type: "4 BHK Flats / Apartments", area: "3900 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Earthquake Resistant Structure", "Fire Fighting Equipment", "Security / Fire Alarm", "Gymnasium", "Wi-fi Connectivity", "Intercom", "Indoor Games", "Jogging Track", "Kids Play Area", "Landspace Garden", "Lift", "Maintenance Staff", "Power Back Up", "Park", "Swimming Pool", "Security", "Sports Facility", "Visitor Parking", "Vastu Compliant", "Water Storage", "Tennis Court", "Squash Court", "Basket Ball"],
    locationMapDesc: "Sector 63A, Golf Course Extension Road, Gurgaon, Haryana - 122002"
  },
  {
    id: "proj-tarc-kailasa",
    name: "Tarc Kailasa",
    location: "Patel Rd. - Rama Road, Delhi",
    sector: "Kirti Nagar",
    description: "Elevating the art of architectural excellence, the facade of Kailasa stands as a testament to refined luxury.",
    longDescription: "TARC KAILASA ELEVATED LIVING: Elevating the art of architectural excellence, the facade of Kailasa stands as a testament to refined luxury. A harmonious blend of contemporary design and plush aesthetics, it captivates West Delhi's central landmark area with outstanding structural brilliance.",
    highlights: [
      "Prestige highrise masterpiece of West Delhi central corridor",
      "Harmonious blend of contemporary design and plush aesthetics",
      "Premium luxury layout with double side panoramic balcony overlays",
      "Outstanding highway centrality near direct transit routes"
    ],
    status: "Possession Soon",
    projectType: "Flats & Apartments",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    reraRegistration: "DLRERA2024P0089",
    amenities: [
      "CCTV Camera",
      "Earthquake Resistant Structure",
      "Gymnasium",
      "Swimming Pool",
      "Power Back Up",
      "Reserved Parking"
    ],
    address: "Patel Road, Rama Road Industrial Area, New Delhi - 110015",
    areaRange: "3440 - 4246 Sq.ft.",
    possessionDate: "Jun 2028",
    units: "3 & 4 BHK",
    highlightsDetail: "Massive estate sized apartments in Central West Delhi, designed around golden marble floors, double glazed glasses, grand drawing layouts, and independent servant blocks.",
    outdoorAmenities: "Olympic pool layout, cascade waterfalls, peripheral jogging tracks, kids adventure layout grounds.",
    indoorAmenities: "Executive business board room, central cafeteria, mini library, fully loaded gym and health center.",
    towerAmenities: "Double height premium lobbies, dedicated service elevator corridors.",
    otherFacilities: "Bio smart entries, EV charging stalls, centralized water pressure regulators.",
    unitConfigs: [
      { type: "3 BHK Flats / Apartments", area: "3440 Sq.ft.", price: "Call for Price" },
      { type: "4 BHK Flats / Apartments", area: "4246 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Earthquake Resistant Structure", "Fire Fighting Equipment", "Security / Fire Alarm", "Gymnasium", "Wi-fi Connectivity", "Intercom", "Indoor Games", "Jogging Track", "Kids Play Area", "Landspace Garden", "Lift", "Maintenance Staff", "Power Back Up", "Park", "Swimming Pool", "Security", "Sports Facility", "Visitor Parking", "Vastu Compliant", "Water Storage", "Tennis Court", "Squash Court", "Basket Ball", "Private Tarrace", "Piped Gas"],
    locationMapDesc: "Patel Rd. - Rama Road, New Delhi - 110015"
  },
  {
    id: "proj-gmax-valley",
    name: "GMAX Valley Phase 1",
    location: "Badshahi Bagh - Behat, Saharanpur",
    sector: "Behat",
    description: "Offering well-planned Agriculture Farm Land with modern amenities in Badshahi Bagh, Behat, Saharanpur.",
    longDescription: "GMAX Valley Phase 1 is a Agriculture Farm Land development, Offering well-planned Agriculture Farm Land Agriculture Farm Land with modern amenities in Badshahi Bagh, Behat, Saharanpur. GMAX Valley Phase 1 will provide skillfully designed Agricultural allotments.",
    highlights: [
      "Excellent investment country farm land plots",
      "Highly fertile alluvial black soil with excellent canal water grids",
      "Tranquil pollution-free surrounding with direct approach roads",
      "Immediate registry and boundary wall construction allowance"
    ],
    status: "Ready to Move",
    projectType: "Agricultural/Farm Land",
    images: GMAX_VALLEY_IMAGES,
    reraRegistration: "Agricultural Approved",
    amenities: [
      "Water Storage",
      "Security",
      "Maintenance Staff",
      "Vastu Compliant"
    ],
    address: "Badshahi Bagh, Behat, Saharanpur, Uttar Pradesh - 247121",
    areaRange: "100 - 1200 Sq. Yards",
    possessionDate: "Immediate Registration",
    units: "Farm Plot holdings",
    highlightsDetail: "Highly demanded agricultural segments in Behat Saharanpur, featuring secure peripheral security, sweet boring groundwater, and easy paperwork support.",
    outdoorAmenities: "Neat irrigation canals, internal approach networks, wide outer security gating.",
    indoorAmenities: "Common security watch room, tool store building.",
    towerAmenities: "Water extraction tank, direct transport deck.",
    otherFacilities: "24/7 boundary monitoring check, complete clear survey documents, zero land disputes.",
    unitConfigs: [
      { type: "Farm Plots / Land", area: "100 Sq. Yards", price: "Call for Price" },
      { type: "Farm Plots / Land", area: "1200 Sq. Yards", price: "Call for Price" }
    ],
    amenitiesList: ["Water Storage", "Security", "Maintenance Staff", "Vastu Compliant", "Visitor Parking", "Landspace Garden"],
    locationMapDesc: "Badshahi Bagh, Behat, Saharanpur, UP - 247121"
  },
  {
    id: "proj-maxvel-pavilion",
    name: "Maxvel Pavilion",
    location: "Maxvel Pavilion - Sector 10 Dwarka, Delhi",
    sector: "Sector 10",
    description: "Retail, shopping and business centre in sector-10, Dwarka, New Delhi.",
    longDescription: "Retail, shopping and business centre in sector-10, Dwarka, New Delhi. Maxvel Pavilion is the ultimate commercial hub that delivers a dynamic mix of shopping, retail, banking, and office spaces to a cross-section of customers.",
    highlights: [
      "Centrally positioned in the core market of Sector 10 Dwarka",
      "Exceptional multi-directional client visual exposure",
      "High density professional surrounding yielding high rental returns",
      "Equipped with modern escalators and multi-row parking bays"
    ],
    status: "Ready to Move",
    projectType: "Commercial Shops",
    images: PAVILION_IMAGES,
    reraRegistration: "DLRERA2024P0012",
    amenities: [
      "Power Back Up",
      "Reserved Parking",
      "CCTV Camera",
      "Security",
      "Maintenance Staff"
    ],
    address: "Sector 10 Dwarka, New Delhi - 110075",
    areaRange: "150 - 650 Sq.ft.",
    possessionDate: "Ready to Move",
    units: "Commercial Shops / Retails",
    highlightsDetail: "Dynamic high density neighborhood premium commercial complex, featuring triple layer structure, central climate pipe corridors, and continuous escalator decks.",
    outdoorAmenities: "Customer open decks, heavy duty street illumination columns, paved multi-row parking slots.",
    indoorAmenities: "Central ventilation, cafeteria setups, multiple restrooms, bank ATMs.",
    towerAmenities: "Common monitoring station, cargo elevator.",
    otherFacilities: "24/7 common sweeping, firefighting tools, heavy duty power backup generators.",
    unitConfigs: [
      { type: "Commercial Shops", area: "208 Sq.ft.", price: "Call for Price" },
      { type: "Commercial Shops", area: "650 Sq.ft.", price: "Call for Price" }
    ],
    amenitiesList: ["CCTV Camera", "Fire Fighting Equipment", "Security / Fire Alarm", "Power Back Up", "Reserved Parking", "Visitor Parking", "Maintenance Staff", "Lift", "Wi-fi Connectivity", "Intercom", "Water Storage", "Waste Disposal"],
    locationMapDesc: "Maxvel Pavilion - Sector 10 Dwarka, New Delhi - 110075"
  }
];

export const LOCALITIES = [
  { name: "Rohini, Delhi", count: "12+ Options", rating: "4.9/5 Star Connectivity", desc: "North Delhi's premium residential sector with planned wide roads, green parks, and high-quality builder floors." },
  { name: "Dwarka, Delhi", count: "8+ Options", rating: "4.8/5 Star Infrastructure", desc: "A perfectly planned sub-city near IGI Airport featuring premium multi-story apartments and standard commercial hubs." },
  { name: "Golf Course Ext Road, Gurgaon", count: "15+ Options", rating: "5.0/5 Star Luxury", desc: "The hotspot of absolute elite high-rises and hyper-luxury duplex structures in Delhi NCR." },
  { name: "Kirti Nagar, Delhi", count: "6+ Options", rating: "4.7/5 Star Centrality", desc: "Centrally located premium residential layouts with unmatched proximity to West and New Delhi trade zones." },
  { name: "Gagan Vihar, Ghaziabad", count: "9+ Options", rating: "4.5/5 Star Affordability", desc: "Highly budget-friendly, tranquil residential blocks with phenomenal road linkages to East Delhi." },
  { name: "Behat, Saharanpur", count: "5+ Options", rating: "4.4/5 Star Investment", desc: "High-potential regional land holdings and suburban commercial plots perfect for long-term compounding." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ramanuj Dwivedi",
    rating: 5,
    date: "June 2025",
    content: "Building trust is simple to say but hard to execute. PSS Real Estate helped us buy our 4 BHK floor in Sector 32. From verified papers to loan disbursal inside 10 days, their professionalism is stellar.",
    location: "Rohini, Delhi",
    role: "HNI Home Owner"
  },
  {
    id: "test-2",
    name: "Meenakshi Sharma",
    rating: 5,
    date: "March 2026",
    content: "As a doctor, my schedule is extremely busy. I was looking for a pre-rented commercial space in Sector 18 Rohini. The consultants at PSS mapped exactly what I needed. Absolute clarity, no calls for fake negotiations.",
    location: "Dwarka Sector 12",
    role: "Diagnostic Lab Operator"
  },
  {
    id: "test-3",
    name: "Rajiv Batra",
    rating: 5,
    date: "January 2026",
    content: "If you want premium builder floors in North Delhi, PSS is the ultimate address. They represent the biggest developers, have transparent pricing structures, and their post-sale handholding is outstanding.",
    location: "Gurgaon",
    role: "Real Estate Investor"
  }
];

export const FAQS = [
  {
    q: "Why should I secure a builder floor through PSS Real Estate?",
    a: "We only list properties going through a strict 25-point legal check. We have 15+ years of local presence, guaranteeing that all properties hold 100% clear legal titles, double-stilt parking, and zero regulatory grey areas."
  },
  {
    q: "Are the listed properties in Sector 32 compliant with Delhi RERA?",
    a: "Yes, absolutely. High-level developments like Maxvel Alvista and Noble Ayra are fully RERA registered and verified on the official RERA portal. We provide registration numbers transparently beforehand."
  },
  {
    q: "In what areas do PSS Real Estate operate extensively?",
    a: "We operate in prime locales across NCR. Our main hubs include Rohini (Sector 32, Sector 18, etc.), Dwarka, Kirti Nagar in Delhi; Golf Course Extension Road in Gurgaon, plus key zones in Faridabad & Ghaziabad."
  },
  {
    q: "How does the 'Book Site Tour' process work?",
    a: "It's smooth and friction-free. Click 'Book Site Tour' in our app, submit your preferred date, and our relationship executive will arrange a private chauffeured visit of active property sites, including layout walk-throughs."
  }
];
