/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COMPANY_INFO } from '../data';
import { 
  ShieldCheck, Award, Users, Target, CheckCircle2, History, Landmark, HeartHandshake, 
  Building2, TrendingUp, Globe, FileCheck, Briefcase, Clock, Star, Quote, Zap,
  ArrowRight, ChevronRight, Home, HandshakeIcon, Gavel, FileText
} from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Hero Section with Background Image - NO MOUSE ANIMATION */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Corporate Building"
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Trust Badge - NO ANIMATION */}
            <div className="inline-flex items-center gap-2 bg-[#F17300]/20 backdrop-blur-sm border border-[#F17300]/40 rounded-full px-4 py-1.5 mb-6">
              <div className="h-2 w-2 rounded-full bg-[#F17300]"></div>
              <span className="text-xs font-black uppercase tracking-widest text-white">
                {COMPANY_INFO.founded} • Established Trust
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              Built for investors, guided by compliance, designed for legacy.
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mb-8">
              The Real Estate Investment Trust (REIT) is a leading company providing a range of investment opportunities, 
              including residential, commercial, and industrial properties, as well as alternative investments.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-sm uppercase tracking-wider transition-all">
                SPREAD TO A LISTENING AUDIENCE
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all">
                OPEN CURRENCY ADVISORY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Below Hero - Company Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Top Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-gradient-to-r from-orange-50 to-amber-50 p-6">
            <div className="text-center py-3">
              <p className="text-2xl md:text-3xl font-black text-[#F17300]">15+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="text-center py-3">
              <p className="text-2xl md:text-3xl font-black text-[#F17300]">1,200+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Happy Families</p>
            </div>
            <div className="text-center py-3">
              <p className="text-2xl md:text-3xl font-black text-[#F17300]">100%</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Legal Compliance</p>
            </div>
            <div className="text-center py-3">
              <p className="text-2xl md:text-3xl font-black text-[#F17300]">₹450Cr+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Asset Under Advisory</p>
            </div>
          </div>

          {/* Our Foundational Pillar - REDESIGNED (Short, Scannable, Customer-Focused) */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#F17300] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] tracking-tight">
                Our Foundational Pillar: <span className="text-[#F17300]">Absolute Integrity</span>
              </h2>
              <div className="flex justify-center gap-1 mt-3">
                <div className="h-1 w-12 bg-[#F17300] rounded-full"></div>
                <div className="h-1 w-4 bg-orange-300 rounded-full"></div>
              </div>
            </div>

            {/* 3 Key Benefits - Easy to Scan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              <div className="bg-orange-50 rounded-xl p-5 text-center border border-orange-100">
                <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="h-6 w-6 text-[#F17300]" />
                </div>
                <h3 className="text-base font-bold text-[#1C1C1C] mb-2">100% Legal Safety</h3>
                <p className="text-xs text-gray-500">
                  Every property has pre-verified legal title with zero encumbrances
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 text-center border border-orange-100">
                <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-3">
                  <HandshakeIcon className="h-6 w-6 text-[#F17300]" />
                </div>
                <h3 className="text-base font-bold text-[#1C1C1C] mb-2">Zero Pressure Consult</h3>
                <p className="text-xs text-gray-500">
                  No hidden fees, no pushy sales. Just transparent guidance
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 text-center border border-orange-100">
                <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-6 w-6 text-[#F17300]" />
                </div>
                <h3 className="text-base font-bold text-[#1C1C1C] mb-2">Premium Locations</h3>
                <p className="text-xs text-gray-500">
                  Exclusive properties in Sector 32 & 18, Rohini - North Delhi's prime micro-markets
                </p>
              </div>

            </div>

            {/* Short Description - Easy to Read */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded in <strong className="text-[#F17300]">2010</strong>, PSS Real Estate has helped <strong className="text-[#F17300]">1,200+ families</strong> find their dream homes 
                with complete transparency and legal certainty. We don't just sell properties — we build <strong>lifetime trust</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] tracking-tight mb-3">
            Our Core Offerings
          </h2>
          <div className="flex justify-center gap-1">
            <div className="h-1 w-12 bg-[#F17300] rounded-full"></div>
            <div className="h-1 w-4 bg-orange-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-12 w-12 rounded-xl bg-[#F17300]/10 flex items-center justify-center mb-4 group-hover:bg-[#F17300] transition-colors">
              <ShieldCheck className="h-6 w-6 text-[#F17300] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">Transparency Platform Program</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our mission is to provide investors with a transparent and reliable platform to invest in real estate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-12 w-12 rounded-xl bg-[#F17300]/10 flex items-center justify-center mb-4 group-hover:bg-[#F17300] transition-colors">
              <TrendingUp className="h-6 w-6 text-[#F17300] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">Premium Control: TrailGems</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Leading provider of trail solutions for outdoor enthusiasts with premium products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-12 w-12 rounded-xl bg-[#F17300]/10 flex items-center justify-center mb-4 group-hover:bg-[#F17300] transition-colors">
              <Award className="h-6 w-6 text-[#F17300] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">Verified REIT Authority</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Verified by NAREIT, ensuring transparency, accountability, and compliance.
            </p>
          </div>

        </div>
      </section>

      {/* Our Decadal Milestones - Simplified Timeline */}
      <section className="bg-gray-50/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight mb-3">
              Our Journey
            </h2>
            <div className="flex justify-center gap-1">
              <div className="h-1 w-12 bg-[#F17300] rounded-full"></div>
              <div className="h-1 w-4 bg-orange-300 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500 mt-3">15+ years of excellence in real estate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-[#F17300] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#F17300]/10 flex items-center justify-center">
                  <span className="text-sm font-black text-[#F17300]">1</span>
                </div>
                <span className="text-xs font-bold text-[#F17300]">2008 - 2010</span>
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C] mb-2">Incorporation & Launch</h3>
              <p className="text-xs text-gray-500">PSS Real Estate established with zero-hidden-brokerage philosophy in North Delhi.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#F17300] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#F17300]/10 flex items-center justify-center">
                  <span className="text-sm font-black text-[#F17300]">2</span>
                </div>
                <span className="text-xs font-bold text-[#F17300]">2017</span>
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C] mb-2">RERA Integration</h3>
              <p className="text-xs text-gray-500">100% certified portfolios with strict RERA compliance checks.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#F17300] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#F17300]/10 flex items-center justify-center">
                  <span className="text-sm font-black text-[#F17300]">3</span>
                </div>
                <span className="text-xs font-bold text-[#F17300]">2024 - Present</span>
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C] mb-2">Landmark Deliveries</h3>
              <p className="text-xs text-gray-500">1,200+ families homed. Sovereign Builder Floors & Maxvel Series launched.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Registry & Covenants - Side by Side */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Corporate Registry */}
          <div className="bg-white rounded-xl border border-gray-100/80 p-6 sm:p-8 shadow-xl shadow-gray-200/50">
            <h3 className="text-lg font-bold text-[#1C1C1C] flex items-center gap-2 mb-6">
              <Landmark className="h-5 w-5 text-[#F17300]" />
              <span>Corporate Registry</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400">Name of CEO</span>
                <span className="text-sm font-bold text-[#1C1C1C]">Prince Verma</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400">Business Type</span>
                <span className="text-sm font-bold text-[#1C1C1C]">Real Estate Consultant</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400">Year of Establishment</span>
                <span className="text-sm font-bold text-[#1C1C1C]">2010</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-xs text-gray-400">Legal Status</span>
                <span className="text-sm font-bold text-[#1C1C1C]">Individual (Sole Proprietorship)</span>
              </div>
              <div className="pt-2">
                <span className="text-xs text-gray-400 block mb-2">Operating Cities</span>
                <div className="flex flex-wrap gap-2">
                  {['Delhi', 'Faridabad', 'Ghaziabad', 'Greater Noida'].map((city) => (
                    <span key={city} className="px-3 py-1 bg-[#FFF0E5] text-[#F17300] text-[10px] rounded-full font-bold">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Corporate Covenants */}
          <div className="bg-white rounded-xl border border-gray-100/80 p-6 sm:p-8 shadow-xl shadow-gray-200/50">
            <h3 className="text-lg font-bold text-[#1C1C1C] flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-[#F17300]" />
              <span>Our Corporate Covenants</span>
            </h3>
            
            <div className="space-y-5">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1C1C1C]">100% Legal Sanctity</h4>
                  <p className="text-xs text-gray-500">No grey areas, no unauthorized layouts. Full audit of parking, terrace rights, and MCD clearances.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1C1C1C]">Zero Pressure Consults</h4>
                  <p className="text-xs text-gray-500">Objective data and clarity over conversion. No pushy sales tactics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1C1C1C]">Builder Accountability</h4>
                  <p className="text-xs text-gray-500">Construction programs stay on time with industrial warranties and compliance.</p>
                </div>
              </div>
            </div>

            {/* Accreditations */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3">Official Licenses</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <Award className="h-5 w-5 text-[#F17300] mx-auto mb-1" />
                  <p className="text-[10px] font-bold">ISO 9001:2015</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <Landmark className="h-5 w-5 text-[#F17300] mx-auto mb-1" />
                  <p className="text-[10px] font-bold">RERA Authorized</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Endorsements Section */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              What Our Clients Say
            </h2>
            <div className="flex justify-center gap-1">
              <div className="h-1 w-12 bg-[#F17300] rounded-full"></div>
              <div className="h-1 w-4 bg-orange-500/50 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <Quote className="h-8 w-8 text-[#F17300] mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "The platform is a game-changer for investors looking to streamline their property ownership process."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-[#F17300]">— Senior Investment Partner</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <Quote className="h-8 w-8 text-[#F17300] mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We are delighted with the platform's ability to provide a seamless and efficient property ownership experience."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-[#F17300]">— Institutional Shareholder</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <Quote className="h-8 w-8 text-[#F17300] mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "The platform's commitment to compliance and transparency sets it apart from other providers."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-[#F17300]">— Regulatory Board Member</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}