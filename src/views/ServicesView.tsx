/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data';
import { 
  Home as HomeIcon, Search, Briefcase, CheckCircle2, ChevronRight, HelpCircle, 
  MessageSquare, User, Phone, Check, X, Send, ArrowRight, FileText,
  Building, Crown, TrendingUp, Globe, BarChart3, Percent, Users, Sparkle, DollarSign,
  Clock, ShieldCheck, Award, Zap
} from 'lucide-react';

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SERVICE_DETAILS_MAP = [
  {
    badge: "HOME / ADVISORY",
    headline: "Residential Consultation",
    tagline: "Buy confidently with layout, legal, and neighborhood intelligence.",
    longerText: "We shortlist premium residences across Vaishnodevi, SG Highway, and growth corridors with full legal and valuation checks before you commit.",
    pills: ["Project shortlisting", "Family layout matching", "RERA-first vetting"],
    btnBook: "BOOK RESIDENTIAL SESSION",
    btnView: "VIEW RESIDENTIAL PROPERTIES",
    stats: [
      { label: "FAMILIES ADVISED", value: "1200+" },
      { label: "AVG. SHORTLIST CYCLE", value: "7 Days" },
      { label: "LEGAL ESCALATIONS", value: "0%" }
    ],
    process: [
      { id: 1, title: "Discovery call & preferences log" },
      { id: 2, title: "Curated shortlist & pricing audit" },
      { id: 3, title: "On-site tours & technical reviews" },
      { id: 4, title: "Sovereign registry & smooth closure" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "RETAIL & CORE / CORPORATE ADVISORY",
    headline: "Commercial Property Advisory",
    tagline: "Strategic corporate property acquisition and investments for stable yield.",
    longerText: "Unlock premium commercial real estate returns with tailored analysis across main high-density retail corridors, corporate office suites, and logistics warehousing.",
    pills: ["Pedestrian footfall density", "Optimized yield profiles", "Anchor lease compliance checks"],
    btnBook: "BOOK COMMERCIAL STRATEGY SESSION",
    btnView: "VIEW PREMIUM CORPORATE SITES",
    stats: [
      { label: "CORPORATE PARTNERS", value: "350+" },
      { label: "FEASIBILITY TIMELINE", value: "15 Days" },
      { label: "AVERAGE PORTFOLIO YIELD", value: "8.4%" }
    ],
    process: [
      { id: 1, title: "Corporate requirements analysis" },
      { id: 2, title: "Footfall algorithm scanning" },
      { id: 3, title: "Layout vetting & developer negotiation" },
      { id: 4, title: "Joint anchor lease execution" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "LUXURY PORTFOLIO / PREMIUM CORRIDORS",
    headline: "Luxury Villa Investments",
    tagline: "Exclusive collection of boutique estates, bespoke farmhouses and mansions.",
    longerText: "Acquire spectacular private estates, premium land plots and heritage homesteads in ultra-peaceful, green suburban locations optimized for complete seclusion.",
    pills: ["Elite gated compounds", "Soil & ecological clearances", "Absolute structural integrity audits"],
    btnBook: "BOOK BESPOKE ESTATE TOUR",
    btnView: "VIEW LUXURY PORTFOLIO LISTINGS",
    stats: [
      { label: "BOUTIQUE ESTATES MANAGED", value: "85+" },
      { label: "AVG ESTATE SIZE LOGGED", value: "650 sqy" },
      { label: "SECURE BOUNDARY CLEARANCE", value: "100%" }
    ],
    process: [
      { id: 1, title: "Confidential wealth discovery Call" },
      { id: 2, title: "Bespoke estate dossier presentation" },
      { id: 3, title: "Ecological and zoning review" },
      { id: 4, title: "Exclusive boundary handover" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "SEZ CODES / GLOBAL ACQUISITION",
    headline: "GIFT City Investment Advisory",
    tagline: "Master-level regulatory guidance and corporate asset sourcing inside the SEZ.",
    longerText: "Establish seamless enterprise footprints or lock in capital-appreciating tech office assets inside India's premier international smart finance gateway.",
    pills: ["SEZ tax-rebate alignment", "FEMA regulatory frameworks", "IFSC business compliance maps"],
    btnBook: "BOOK EXPERT SEZ SESSION",
    btnView: "VIEW AVAILABLE SMART WORKSPACES",
    stats: [
      { label: "OFFSHORE FUNDS ADVISED", value: "45+" },
      { label: "REGULATORY COMPLIANCE", value: "100%" },
      { label: "ACQUIRED OFFICES FLOOR", value: "60k+ sqf" }
    ],
    process: [
      { id: 1, title: "Feasibility scoping & SEZ alignment" },
      { id: 2, title: "Administrative authority check" },
      { id: 3, title: "Office space allocation mapping" },
      { id: 4, title: "Business permit & transaction lock" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "CIVIL LAWS / COMPLIANCE DESK",
    headline: "Legal & Documentation Support",
    tagline: "Error-free 30-year chain searches, title deed scanning and RERA assistance.",
    longerText: "Insulated by leading industry regulatory attorneys, we examine stilt clearances, municipal hypothecations, and layout compliance parameters with complete meticulousness.",
    pills: ["Exhaustive chain deed logs", "Municipal tax-clearance audits", "Developer-creditor due diligence"],
    btnBook: "REQUEST ORIGINAL CODE SEARCH",
    btnView: "VIEW COMPLIANT TITLE SAMPLES",
    stats: [
      { label: "COMPLIANCE SEARCHES RUN", value: "4800+" },
      { label: "DOCUMENT VETTING CYCLE", value: "48 Hrs" },
      { label: "CLIENT TITLE DISPUTE RATE", value: "0%" }
    ],
    process: [
      { id: 1, title: "Deed chains compilation & logging" },
      { id: 2, title: "Sovereign revenue records check" },
      { id: 3, title: "Developer hypothecation audit" },
      { id: 4, title: "Final certified compliance report" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "LEVERAGE / CAPITAL ACSTRUTURING",
    headline: "Home Loan Assistance",
    tagline: "Accelerated credit sanctions via major top-tier public & private bank ties.",
    longerText: "Accelerate your property purchase loops through customized debt vehicles with optimized rate-of-interest brackets and reduced collateral friction.",
    pills: ["Preferred public lender rates", "Fast income survey clearance", "Flexible long-repayment frames"],
    btnBook: "CHECK LOAN PRE-APPROVAL ELIGIBILITY",
    btnView: "VIEW LATEST COLLATERAL COEFFICIENTS",
    stats: [
      { label: "MORTGAGE CAPITAL DISBURSED", value: "₹240Cr+" },
      { label: "PARTNER FINANCE OUTLETS", value: "12+ Banks" },
      { label: "LOAN PROCESS TIME-FRAME", value: "5 Days" }
    ],
    process: [
      { id: 1, title: "Personal debt profile matching" },
      { id: 2, title: "Optimal bank-ROI list review" },
      { id: 3, title: "Immediate property appraisal loop" },
      { id: 4, title: "Pre-approved loan sanction logging" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "GLOBAL INDIAN CLIENTS / REMOTE DESK",
    headline: "NRI Property Assistance",
    tagline: "100% video-mapped surveys, remote power of attorney, and tax repatriation.",
    longerText: "Distance becomes zero with real-time video tours, FEMA compliance, and dedicated client-representatives managing exits, leasing, or acquisitions.",
    pills: ["Live 4K walk-verify runs", "Compliant FEMA legal structures", "Remote power of attorney files"],
    btnBook: "BOOK REMOTE ADVISORY BRIEF",
    btnView: "VIEW ENTIRE REMOTE PORTFOLIO",
    stats: [
      { label: "NRI SUBSCRIBERS ACTIVE", value: "650+" },
      { label: "REMOTE VERBAL MUTATIONS", value: "100%" },
      { label: "REPATRIATED FUNDS PROCESSED", value: "₹45L+" }
    ],
    process: [
      { id: 1, title: "Global online brief logging" },
      { id: 2, title: "Assisted virtual Walkthrough" },
      { id: 3, title: "PoA registration alignment" },
      { id: 4, title: "Direct escrow transfer audit" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "WEALTH ADVISORY / MULTIPLIER CORE",
    headline: "Investment Portfolio Planning",
    tagline: "Dynamic equity allocations, capital gains defense, and yield audits.",
    longerText: "Our wealth professionals construct optimized long-term portfolios to thrive across multi-decade market cycles, targeting micro-markets destined for major appreciation.",
    pills: ["Calculated IRR forecast index", "Coordinated capital gains offset", "Semi-Annual rebalancing logs"],
    btnBook: "REQUEST PORTFOLIO METRIC SESSION",
    btnView: "VIEW PRE-APPROVED PROJECTS MAP",
    stats: [
      { label: "REAL ASSETS MANAGED", value: "₹850Cr+" },
      { label: "HISTORIC PORTFOLIO CAGR", value: "14.2%" },
      { label: "MARKET ADAPTIVE INTERVALS", value: "180 Days" }
    ],
    process: [
      { id: 1, title: "Historic capital health survey" },
      { id: 2, title: "Growth vs immediate yield allocation" },
      { id: 3, title: "Transit-oriented core purchases" },
      { id: 4, title: "Exit strategy finalization" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "ASSET DEPLOYMENT / MAXIMUM RETURN",
    headline: "Property Resale & Leasing",
    tagline: "High-integrity listing promotions and rigorous candidate tenant verification.",
    longerText: "Minimize vacancy loss, secure verified premium tenants, and execute absolute pricing checks to ensure maximum passive monthly returns with zero lag.",
    pills: ["Professional high-reach staging", "Comprehensive candidate KYC", "Legally recorded multi-tier leases"],
    btnBook: "LIST RESALE / LEASE ASSIGNED",
    btnView: "VIEW MATCHING TENANT DEMANDS",
    stats: [
      { label: "KYC VERIFIED TENANTS", value: "1400+" },
      { label: "AVERAGE TRANSITION WINDOW", value: "18 Days" },
      { label: "RECURRING VALUE RISE", value: "+12%" }
    ],
    process: [
      { id: 1, title: "Professional media shoot & listing" },
      { id: 2, title: "Multi-channel buyer/tenant matching" },
      { id: 3, title: "KYC check & employment review" },
      { id: 4, title: "Lease signing & collateral log" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    badge: "ALLIANCES / CAPITALIZATION MONETIZE",
    headline: "Builder Partnership Consulting",
    tagline: "Coordinating capital-efficient joint development ventures and acquisitions.",
    longerText: "Combining prime land owners with highly credible developmental teams, leveraging optimized FAR frameworks to maximize returns and lower default risks.",
    pills: ["Pre-negotiated joint frameworks", "Localized FAR optimization indexes", "Exclusive model distribution"],
    btnBook: "SCHEDULE JOINT VENTURE WORKSHOP",
    btnView: "VIEW SUCCESSFUL BRAND ALLIANCES",
    stats: [
      { label: "DEVELOPER ALLIANCES ACTIVE", value: "22+" },
      { label: "LAND MONETIZED CO-VENTURE", value: "180 Acres" },
      { label: "JOINT VENTURES LOGGED", value: "35+" }
    ],
    process: [
      { id: 1, title: "Appraisal & FAR analysis" },
      { id: 2, title: "Joint venture feasibility profile" },
      { id: 3, title: "Developer screening & bidding" },
      { id: 4, title: "Alliance lock & layout marketing" }
    ],
    bgPhoto: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesView() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'tabs' | 'all'>('tabs');
  
  // Enquiry state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <HomeIcon className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Search': return <Search className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Briefcase': return <Briefcase className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Building': return <Building className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Crown': return <Crown className="h-5 w-5 md:h-6 md:w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />;
      case 'FileText': return <FileText className="h-5 w-5 md:h-6 md:w-6" />;
      case 'DollarSign': return <DollarSign className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Globe': return <Globe className="h-5 w-5 md:h-6 md:w-6" />;
      case 'BarChart3': return <BarChart3 className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Percent': return <Percent className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Users': return <Users className="h-5 w-5 md:h-6 md:w-6" />;
      default: return <HomeIcon className="h-5 w-5 md:h-6 md:w-6" />;
    }
  };

  const handleOpenEnquiry = (serviceTitle: string) => {
    setModalService(serviceTitle);
    setCustomerMessage(`Hello, I want to make an enquiry regarding the "${serviceTitle}" service at PSS Real Estate.`);
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waText = `*PSS Real Estate - Service Enquiry* %0A%0A*Name:* ${encodeURIComponent(customerName || 'Interested Customer')}%0A*Phone:* ${encodeURIComponent(customerPhone || 'Not Provided')}%0A*Service:* ${encodeURIComponent(modalService)}%0A%0A*Message:* ${encodeURIComponent(customerMessage)}`;
    
    setSubmitSuccess(true);
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${waText}`, '_blank');
      setIsModalOpen(false);
      setCustomerName('');
      setCustomerPhone('');
      setCustomerMessage('');
      setSubmitSuccess(false);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-16 font-sans bg-gray-50/50">
      
      {/* Banner portion - LARGER HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[650px] w-full overflow-hidden bg-gray-900 border-b border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Real Estate Consulting Background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl space-y-3 z-10 text-white">
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#F17300] bg-orange-500/10 px-2.5 py-1 rounded-full font-mono">
              Professional Portfolios
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Real Estate Consultancy
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium max-w-xl">
              Delhi based real estate agents providing end-to-end purchasing, selling, renting and leasing assistance with absolute legal transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Mode Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-center sm:text-left">
            <h2 className="text-xs font-black text-[#1C1C1C] uppercase tracking-wider">Display Optimization</h2>
            <p className="text-[10px] text-gray-400 font-medium">Toggle view style dynamically to suit your current screen</p>
          </div>
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setViewMode('tabs')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-black rounded-lg transition-all ${
                viewMode === 'tabs'
                  ? 'bg-indigo-900 text-white shadow'
                  : 'text-gray-500 hover:text-gray-900 bg-transparent'
              }`}
            >
              Interactive Dual-Pane
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-black rounded-lg transition-all ${
                viewMode === 'all'
                  ? 'bg-indigo-900 text-white shadow'
                  : 'text-gray-500 hover:text-gray-900 bg-transparent'
              }`}
            >
              View All Sections stacked
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Grid Section */}
      <section id="service-detail-section" className="relative scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {viewMode === 'tabs' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-1">
                <p className="text-[10px] font-black text-indigo-700 uppercase tracking-widest font-mono">
                  OUR PORTFOLIO MENU
                </p>
                <h2 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight leading-tight mt-0.5">
                  Select Advisory Desk
                </h2>
              </div>
              
              {/* Mobile Scroll */}
              <div className="block lg:hidden w-full overflow-x-auto pb-2 -mx-1 flex gap-2 scrollbar-none snap-x">
                {SERVICES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveTabIdx(idx);
                      const detailSection = document.getElementById('active-pane-detail-card');
                      if (detailSection) detailSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }}
                    className={`snap-center shrink-0 px-4 py-3 rounded-xl border-2 text-xs font-black transition-all font-sans ${
                      activeTabIdx === idx
                        ? 'bg-indigo-950 text-white border-indigo-950 shadow-md scale-95'
                        : 'bg-white text-slate-600 border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {idx + 1}. {s.title}
                  </button>
                ))}
              </div>

              {/* Desktop Stack Button list - ICON HIGHLIGHTS ON HOVER */}
              <div className="hidden lg:block space-y-3 sticky top-24 max-h-[75vh] overflow-y-auto pr-2 scrollbar-thin">
                {SERVICES.map((serv, index) => (
                  <button
                    key={serv.id}
                    onClick={() => setActiveTabIdx(index)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 group relative overflow-hidden ${
                      activeTabIdx === index
                        ? 'border-indigo-600 bg-indigo-50/40 shadow-md text-slate-900'
                        : 'border-slate-100 bg-white hover:bg-slate-50/60 hover:border-[#F17300]/40 text-slate-600'
                    }`}
                  >
                    {activeTabIdx === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600" />
                    )}

                    {/* ICON - Highlights on hover with orange background */}
                    <div className={`p-2.5 rounded-xl shrink-0 transition-all duration-300 ${
                      activeTabIdx === index 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-50 text-slate-400 group-hover:bg-[#F17300] group-hover:text-white group-hover:scale-110'
                    }`}>
                      {getIcon(serv.iconName)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm tracking-tight text-slate-800 leading-tight">
                        {serv.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold tracking-tight uppercase font-mono">
                        {SERVICE_DETAILS_MAP[index].badge}
                      </p>
                      <p className="text-[11px] text-slate-500 font-semibold line-clamp-1 leading-normal italic">
                        "{SERVICE_DETAILS_MAP[index].tagline}"
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div id="active-pane-detail-card" className="lg:col-span-8 space-y-8">
              
              <div 
                className="relative overflow-hidden rounded-3.5xl text-white shadow-xl min-h-[300px] border border-[#0D233A]"
                style={{
                  backgroundImage: `url(${SERVICE_DETAILS_MAP[activeTabIdx].bgPhoto})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-[#0a1c2e]/90 backdrop-blur-[1px]" />
                
                <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-between h-full min-h-[300px] gap-8">
                  
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start w-full">
                    
                    <div className="xl:col-span-8 space-y-4">
                      <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black font-mono tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/40 uppercase">
                        {SERVICE_DETAILS_MAP[activeTabIdx].badge}
                      </span>
                      <h2 className="text-xl sm:text-3.5xl md:text-4xl font-black font-sans tracking-tight text-white leading-tight">
                        {SERVICE_DETAILS_MAP[activeTabIdx].headline}
                      </h2>
                      <p className="text-xs sm:text-base font-bold text-amber-300 leading-snug font-sans max-w-2xl">
                        {SERVICE_DETAILS_MAP[activeTabIdx].tagline}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-semibold max-w-xl">
                        {SERVICE_DETAILS_MAP[activeTabIdx].longerText}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {SERVICE_DETAILS_MAP[activeTabIdx].pills.map((pill, pIdx) => (
                          <span key={pIdx} className="text-[10px] font-bold text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full shadow">
                            ✓ {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="xl:col-span-4 flex flex-col gap-3.5 w-full">
                      {SERVICE_DETAILS_MAP[activeTabIdx].stats.map((item, idStat) => (
                        <div key={idStat} className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between transition-all hover:bg-white/10">
                          <span className="text-[9px] font-black tracking-wider text-slate-300 uppercase font-mono">
                            {item.label}
                          </span>
                          <span className="text-lg sm:text-xl md:text-2xl font-black text-amber-400 tracking-tight leading-tight mt-1">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 border-t border-white/10 mt-auto">
                    <button
                      onClick={() => handleOpenEnquiry(SERVICE_DETAILS_MAP[activeTabIdx].headline)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-xs tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-400/10 active:scale-[0.98]"
                    >
                      <Clock className="h-4 w-4 text-slate-900" />
                      <span>{SERVICE_DETAILS_MAP[activeTabIdx].btnBook}</span>
                    </button>
                    
                    <button
                      onClick={() => handleOpenEnquiry(`${SERVICE_DETAILS_MAP[activeTabIdx].headline} In-depth Details`)}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-white/50 hover:border-white hover:bg-white/10 text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <span>{SERVICE_DETAILS_MAP[activeTabIdx].btnView}</span>
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>
                  </div>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                
                <div className="md:col-span-7 bg-[#FAF7F5] rounded-3xl p-6 sm:p-8 border border-amber-100/30 shadow-md flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-amber-700 uppercase font-mono">
                      SERVICE PROCESS
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-sans text-slate-800 tracking-tight leading-snug">
                      Structured execution from advisory to closure.
                    </h3>
                  </div>

                  <div className="space-y-3.5 mt-6">
                    {SERVICE_DETAILS_MAP[activeTabIdx].process.map((stepNode) => (
                      <div key={stepNode.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm transition-all hover:translate-x-1">
                        <span className="h-8 w-8 rounded-full bg-[#0D233A] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm font-mono">
                          {stepNode.id}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                          {stepNode.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#0D233A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-normal shadow-lg border border-slate-800">
                  <span className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase font-mono mb-4 block">
                    TRUST SIGNALS
                  </span>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                      <ShieldCheck className="h-4.5 w-4.5 text-amber-400 shrink-0" />
                      <span className="text-xs font-bold text-slate-100">RERA verified & compliant</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                      <CheckCircle2 className="h-4.5 w-4.5 text-amber-400 shrink-0" />
                      <span className="text-xs font-bold text-slate-100">Title chain search certified</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                      <Award className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                      <span className="text-xs font-bold text-slate-100">Complete developer audit loop</span>
                    </div>
                  </div>

                  <div className="bg-amber-400/[0.04] border border-amber-400/20 rounded-2xl p-4 mt-auto">
                    <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                      <Zap className="h-3.5 w-3.5 fill-current shrink-0" />
                      <span className="text-[9px] font-black tracking-widest font-mono uppercase">PREMIUM ADVISORY NETWORK</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
                      Each mandate is coordinated with direct market intelligence, absolute legal clarity, and professional execution-level tracking.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* VIEW ALL SECTIONS STACKED */
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((s, index) => (
              <div key={s.id} className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-lg space-y-6">
                <div className="py-2.5 px-4 bg-gray-50 border border-gray-100 rounded-lg inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 font-sans">
                  <span className="text-slate-500">Home</span>
                  <ChevronRight className="h-3 w-3 text-gray-300" />
                  <span className="text-[#F17300]">{s.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-[#F17300] font-mono uppercase block">{SERVICE_DETAILS_MAP[index].badge}</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#1C1C1C] tracking-tight">
                        {index + 1}. {s.title}
                      </h2>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-normal italic font-semibold border-l-2 border-indigo-600 pl-3">
                      "{SERVICE_DETAILS_MAP[index].tagline}"
                    </p>

                    <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                      {s.detailedContent.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                    <img 
                      src={SERVICE_DETAILS_MAP[index].bgPhoto} 
                      alt={s.title}
                      className="rounded-xl w-full h-40 object-cover shadow-sm mb-2"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICE_DETAILS_MAP[index].stats.slice(0, 2).map((st, sId) => (
                        <div key={sId} className="bg-white border border-slate-100 p-2.5 rounded-lg">
                          <span className="text-[9px] font-black text-gray-400 uppercase font-mono block leading-none">{st.label}</span>
                          <span className="text-xs font-black text-indigo-900 block mt-1">{st.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-100">
                  {s.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-700 border border-slate-100 shadow-tiny">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F17300]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-between items-center bg-indigo-950 text-white p-5 rounded-2xl gap-4">
                  <div className="text-left">
                    <p className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider font-mono">DIRECT INQUIRY DESK</p>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">Need immediate consultancy regarding {s.title}?</p>
                  </div>
                  
                  <button
                    onClick={() => handleOpenEnquiry(s.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:scale-[0.99]"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="h-4 w-4 text-slate-950" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Checklist section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1C] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 h-48 w-48 bg-[#F17300]/20 rounded-full blur-3xl" />
          
          <div className="max-w-3xl space-y-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F17300] font-black font-mono">Uncompromising Integrity Blueprint</span>
            <h3 className="text-xl sm:text-3xl font-black">Our Regulatory Due-Diligence Process</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Before we ever list a builder floor, shop, or flat on our website or show it to our private clients, our internal legal team performs rigorous diligence loops. This guarantees zero post-possession friction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-xs font-sans">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#F17300] font-bold">
                  <FileText className="h-4 w-4 text-[#F17300]" strokeWidth={2.5} />
                  <span>01. Title Verification Check</span>
                </div>
                <p className="text-[11px] text-gray-400">Verifying chain deeds and structural bank mortgage logs spanning back 30 years.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#F17300] font-bold">
                  <CheckCircle2 className="h-4 w-4 text-[#F17300]" />
                  <span>02. DDA & MCD Compliance</span>
                </div>
                <p className="text-[11px] text-gray-400">Auditing stilt clearances, exact building height logs, and green zone compliance indices.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#F17300] font-bold">
                  <Briefcase className="h-4 w-4 text-[#F17300]" />
                  <span>03. Market Value Auditing</span>
                </div>
                <p className="text-[11px] text-gray-400">Running competitive indices so you buy exclusively at direct structural developer prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
            <div className="bg-[#1C1C1C] text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-black text-sm tracking-widest text-[#F17300] uppercase">ENQUIRY REGISTRATION DESK</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Service: {modalService}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 px-2.5 rounded bg-white/10 hover:bg-white/20 text-white font-black text-xs transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              {submitSuccess ? (
                <div className="py-6 text-center space-y-3">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-6 w-6" strokeWidth={3} />
                  </div>
                  <h4 className="text-sm font-black text-gray-900 uppercase">Enquiry Initialized!</h4>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Connecting you to PSS Real Estate via WhatsApp. Please finalize the submission.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Your Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Raman Sharma"
                        className="block w-full pl-9 pr-3 py-2.5 sm:py-2 text-xs border border-gray-200 rounded-lg bg-gray-50/50 focus:bg-white focus:ring-1 focus:ring-[#F17300] focus:border-[#F17300] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Your Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+91 9XXXX XXXXX"
                        className="block w-full pl-9 pr-3 py-2.5 sm:py-2 text-xs border border-gray-200 rounded-lg bg-gray-50/50 focus:bg-white focus:ring-1 focus:ring-[#F17300] focus:border-[#F17300] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block">Inquiry Brief</label>
                    <textarea
                      rows={3}
                      value={customerMessage}
                      onChange={(e) => setCustomerMessage(e.target.value)}
                      placeholder="Specify your target location, budget or query here..."
                      className="block w-full p-3 text-xs border border-gray-200 rounded-lg bg-gray-50/50 focus:bg-white focus:ring-1 focus:ring-[#F17300] focus:border-[#F17300] outline-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="h-4.5 w-4.5" />
                      <span>Proceed to WhatsApp</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-lg transition-all text-center"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}