/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Award, Shield, Users, ArrowRight, ArrowUpRight, Compass, HelpCircle, Flame, Star, 
  MapPin, CheckCircle2, ChevronRight, MessageSquare, Sparkles, TrendingUp, Crown, 
  FileText, Briefcase, Phone
} from 'lucide-react';
import { COMPANY_INFO, PROPERTIES, PROJECTS, LOCALITIES, TESTIMONIALS, FAQS } from '../data';
import PropertyCard from '../components/PropertyCard';

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

interface HomeViewProps {
  onOpenBooking: (propertyId?: string) => void;
  onNavigateToTab: (tabId: string) => void;
}

export default function HomeView({ onOpenBooking, onNavigateToTab }: HomeViewProps) {
  
  // Highlight only top 3 featured properties
  const featuredProperties = PROPERTIES.slice(0, 3);

  // Setup WhatsApp redirect link
  const handleGeneralWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello!%20I%20came%20across%20The%20PSS%20Real%20Estates%20website%20and%20I'm%20interested%20in%20your%20premium%20properties.%20Could%20you%20please%20assist%20me%3F`, '_blank');
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Value Proposition Stats strip */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="pt-6 lg:pt-0 lg:px-4 space-y-1">
                <p className="text-4xl font-extrabold text-[#F17300] tracking-tight">{stat.value}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Client Trust Anchors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F17300] font-mono">
              Uncompromising Quality Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight leading-none">
              Why PSS Stands Absolute
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed font-sans max-w-md">
              In real estate, security is everything. We construct trust through rigid verification of documents, uncompromising materials, and a customer-centric code of ethics.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigateToTab('profile')}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#F17300] hover:text-[#1C1C1C] transition-colors"
              >
                <span>Read Corporate Profile</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#F17300]/10 text-[#F17300]">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">25-Point Paperwork Check</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Every builder floor, commercial shop, and highrise flat undergoes deep legal title searches.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#F17300]/10 text-[#F17300]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Certified Premium Builders</h3>
              <p className="text-xs text-gray-500 leading-relaxed">We only partner with developers with immaculate quality records.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#F17300]/10 text-[#F17300]">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">Zero Brokerage Friction</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Direct builder rates and zero-brokerage models.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#F17300]/10 text-[#F17300]">
                <Flame className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C]">RERA Compliant Directory</h3>
              <p className="text-xs text-gray-500 leading-relaxed">100% official RERA state registration mapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Properties Segment */}
      <section className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F17300] font-mono">Breathtaking Spaces</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">Featured Properties Showcase</h2>
              <p className="text-xs sm:text-sm text-gray-500 max-w-lg">Sovereign builder floors and premium retail spots presenting elite design.</p>
            </div>
            <button onClick={() => onNavigateToTab('property')} className="px-5 py-2.5 rounded-sm border border-gray-200 hover:border-[#1C1C1C] text-[#1C1C1C] font-bold text-xs tracking-wider uppercase transition-all shrink-0 flex items-center gap-1.5">
              <span>Explore All Listings</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onOpenBooking={onOpenBooking} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Localities Bento Grid - CREAM ORANGE BACKGROUND */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F17300] font-mono bg-white/80 px-3 py-1 rounded-full inline-block">
              Strategic Neighborhoods
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">
              Premier Localities We Anchor
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
              Discover core micro-markets across NCR displaying unparalleled infrastructure development and rapid value appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCALITIES.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:border-orange-200"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-[#F17300]" />
                      </div>
                      <span className="font-sans font-bold text-base text-[#1C1C1C]">{loc.name}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#F17300] text-[10px] font-black text-white uppercase">
                      {loc.count}
                    </span>
                  </div>
                  <p className="text-xs text-[#F17300] font-bold uppercase tracking-widest">{loc.rating}</p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-1">{loc.desc}</p>
                </div>
                
                <div className="pt-3 pb-5 px-6 border-t border-orange-100 mt-2">
                  <button
                    onClick={() => onNavigateToTab('property')}
                    className="text-xs font-bold text-[#F17300] group-hover:text-[#d66500] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Explore Properties</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Active Projects Teaser */}
      <section className="bg-[#1C1C1C] text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F17300] font-mono">Flagship Developments</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none">Featured NCR Masterpieces</h2>
              <p className="text-sm text-gray-400 leading-relaxed">PSS coordinates directly with premier contractors to present signature developments.</p>
              <ul className="space-y-3.5 text-xs text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-[#F17300] shrink-0 mt-0.5" /><span>Maxvel Alvista: 4 BHK premium luxury independent complexes</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-[#F17300] shrink-0 mt-0.5" /><span>Noble Ayra: Ready-to-move-in independent designer floors</span></li>
              </ul>
              <button onClick={() => onNavigateToTab('projects')} className="px-6 py-3 rounded-sm bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase tracking-widest text-xs">Inspect Projects Details</button>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/5 shadow-2xl">
                  <img src={proj.images[0]} alt={proj.name} referrerPolicy="no-referrer" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 space-y-1.5 text-white">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-[#F17300] text-white">{proj.status}</span>
                    <h3 className="text-lg font-bold">{proj.name}</h3>
                    <p className="text-[11px] text-gray-300 flex items-center gap-1"><MapPin className="h-3 w-3 text-[#F17300]" /><span>{proj.location}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Property Intelligence Section */}
      <section className="bg-orange-50 py-20 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-white bg-[#F17300] px-4 py-1.5 rounded-full inline-block mb-4">Intelligence Desk</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1C1C] tracking-tight mb-4">Property Intelligence for <span className="text-[#F17300]">Buyers, Investors & NRIs</span></h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Read market research guidance from real estate, legal, and investment firms.</p>
          </div>
          
          {/* Equal Height Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Card 1 - GIFT City */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-orange-200 h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-[#F17300] to-orange-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5 text-[#F17300]" />
                    </div>
                    <span className="text-[10px] font-black text-[#F17300] uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Investment Outlook</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#F17300] transition-colors leading-tight">
                    GIFT City Investment Outlook 2025: What Smart Investors Should Track
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    A global leader in real estate investment data, GIFT City provides a comprehensive view of the global real estate market with focus on data-driven insights.
                  </p>
                </div>
                <button className="text-sm font-bold text-[#F17300] flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 - Luxury Villa */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-orange-200 h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-[#F17300] to-orange-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <Crown className="h-5 w-5 text-[#F17300]" />
                    </div>
                    <span className="text-[10px] font-black text-[#F17300] uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Buyers Guide</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#F17300] transition-colors leading-tight">
                    Luxury Villa Buying Checklist for Athambad and Vithalnagar Corridors
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    A comprehensive guide to buying luxury villas covering market trends, property types, verification steps, and high-ROI investment opportunities.
                  </p>
                </div>
                <button className="text-sm font-bold text-[#F17300] flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 - Legal Guide */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-orange-200 h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-[#F17300] to-orange-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-[#F17300]" />
                    </div>
                    <span className="text-[10px] font-black text-[#F17300] uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">Legal Guide</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#F17300] transition-colors leading-tight">
                    Property Legal Documents Explained: RERA, Title Chain, and Regulations
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    A detailed guide to property legal documents, including RERA compliance, 30-year title chain searches, and municipal regulation checks.
                  </p>
                </div>
                <button className="text-sm font-bold text-[#F17300] flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Career Openings Section - WHITE BACKGROUND */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 border border-orange-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Left Content */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-200 shadow-sm">
                  <Briefcase className="h-4 w-4 text-[#F17300]" />
                  <span className="text-xs font-black text-[#F17300] uppercase tracking-wider">Career Opportunities</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight">
                  Professional Career Openings
                </h3>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Build your professional career with insights from our expert contributors. 
                  We offer professional development opportunities, job listings, and networking events 
                  for real estate professionals.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#F17300]" />
                    <span>Real Estate Sales & Marketing Professionals</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#F17300]" />
                    <span>Legal & Documentation Experts</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#F17300]" />
                    <span>Property Valuation & Investment Analysts</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => onNavigateToTab('Contact US')}
                  className="px-8 py-3.5 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#F17300]/20 inline-flex items-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  Apply for Position
                </button>
              </div>
              
              {/* Right Content - Contact Card */}
              <div className="bg-orange-50 rounded-2xl p-8 shadow-md border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-[#F17300]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#1C1C1C]">Contact Us</h4>
                    <p className="text-xs text-gray-500">We're here to help</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  For any questions or inquiries regarding property investments, legal documentation, 
                  or career opportunities, please reach out to our team.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Phone className="h-4 w-4 text-[#F17300]" />
                    </div>
                    <a href={`tel:${COMPANY_INFO.contact.phoneDisplay}`} className="text-gray-600 hover:text-[#F17300] font-medium">
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-[#F17300]" />
                    </div>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-gray-600 hover:text-[#F17300] font-medium">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={handleGeneralWhatsApp}
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Enquiry
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F17300] font-mono">Verified Experiences</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">Client Tributes and Reviews</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />))}</div>
              <p className="text-sm text-gray-600 italic mb-4">"{test.content}"</p>
              <div className="border-t pt-4"><h4 className="font-bold">{test.name}</h4><p className="text-xs text-gray-400">{test.location}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F17300] font-mono">Frictionless Discoverability</span>
            <h2 className="text-3xl font-black text-[#1C1C1C]">Frequently Queried Information</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border p-5">
                <div className="flex gap-2 font-bold"><HelpCircle className="h-5 w-5 text-[#F17300] shrink-0" /><span>{faq.q}</span></div>
                <p className="text-sm text-gray-500 pl-7 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-xl border border-orange-100 p-6 flex flex-col md:flex-row justify-between gap-4">
            <div><h3 className="font-bold">Ready to schedule a VIP Site visit?</h3><p className="text-xs text-gray-400">Book with transport facilities.</p></div>
            <div className="flex gap-3">
              <button onClick={() => onOpenBooking()} className="px-6 py-2 rounded-full bg-[#F17300] text-white text-xs font-bold">Book Site Tour</button>
              <button onClick={handleGeneralWhatsApp} className="px-6 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center gap-1"><WhatsAppIcon className="h-4 w-4" />WhatsApp</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}