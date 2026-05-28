/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Building2, MapPin, BedDouble, Maximize, Calendar, ShieldCheck, Mail, Phone, 
  ArrowLeft, BadgeCheck, CheckCircle2, ChevronRight, MessageSquare, Sparkles, Share2, Compass, Award
} from 'lucide-react';
import { Property } from '../types';
import { COMPANY_INFO } from '../data';
import BookingFormModal from './BookingFormModal';

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

interface PropertyDetailProps {
  property: Property;
  onBackToMain: () => void;
}

export default function PropertyDetail({ property, onBackToMain }: PropertyDetailProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleWhatsappConsult = () => {
    const text = `Hello PSS Real Estate! I am highly interested in the property on your website:%0A%0A*Property:* ${encodeURIComponent(property.title)}%0A*Price:* ${encodeURIComponent(property.price)}%0A*Location:* ${encodeURIComponent(property.location)}%0A%0APlease connect me with a portfolio advisor to discuss floor layouts and book a VIP site tour.`;
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFF] text-[#1C1C1C] font-sans pb-16">
      
      {/* Dynamic Sub-navigation / Breadcrumb / Back Navigation context */}
      <div className="bg-white border-b border-gray-100 py-4.5 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <span onClick={onBackToMain} className="hover:text-[#F17300] transition-colors cursor-pointer">Home</span>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span onClick={onBackToMain} className="hover:text-[#F17300] transition-colors cursor-pointer">Property</span>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span className="text-[#F17300] font-semibold truncate max-w-[200px] sm:max-w-xs">{property.title}</span>
          </nav>
          
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBackToMain}
              id="back-to-home-btn"
              className="flex items-center gap-1.5 group text-xs font-bold text-gray-600 hover:text-[#F17300] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Listings</span>
            </button>
            
            <span className="h-4 w-px bg-gray-200" />

            <button
              onClick={handleShare}
              className="p-2 px-3 rounded-md bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-600 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5 text-[#F17300]" />
              <span>{isCopied ? 'Link Copied!' : 'Share Details'}</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Dynamic Photo Presentation Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            
            {/* Primary Main Image Frame */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-lg">
              <img
                src={property.images[activePhotoIdx]}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold">
                Image {activePhotoIdx + 1} of {property.images.length}
              </div>
            </div>

            {/* Selector Thumbnails Row */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative shrink-0 rounded-xl overflow-hidden h-20 w-32 border-2 transition-all ${
                    activePhotoIdx === idx ? 'border-[#F17300] scale-102 shadow' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${property.title} gallery thumbnail ${idx}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quick-buy Value Proposition Sidebar */}
          <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${
                property.availability === 'Ready to Move' ? 'bg-emerald-600' : 'bg-[#F17300]'
              }`}>
                {property.availability}
              </span>

              <h1 className="text-2xl font-black text-[#1C1C1C] tracking-tight leading-tight">
                {property.title}
              </h1>

              <div className="flex items-start gap-1.5 text-gray-500 text-sm">
                <MapPin className="h-4.5 w-4.5 text-gray-400 shrink-0 mt-0.5" />
                <span>{property.location}</span>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-1">
                <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Guaranteed Asset Value</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#F17300]">{property.price}</span>
                  <span className="text-xs text-gray-400 font-serif">All-inclusive value</span>
                </div>
              </div>

              {/* Specs parameters */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 text-sm text-gray-600 font-serif">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5 text-[#F17300]" />
                    <div>
                      <p className="font-sans font-bold text-[#1C1C1C]">{property.bedrooms} BHK</p>
                      <p className="text-[10px] text-gray-400 font-sans">Accommodation</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-[#F17300]" />
                  <div>
                    <p className="font-sans font-bold text-[#1C1C1C]">{property.area}</p>
                    <p className="text-[10px] text-gray-400 font-sans">Super Area</p>
                  </div>
                </div>
              </div>

              {property.reraNumber && (
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
                  <BadgeCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold">RERA Registered</span>
                    <span className="block font-mono text-[10px] text-emerald-600 uppercase mt-0.5">{property.reraNumber}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Motivational conversions */}
            <div className="pt-6 space-y-2.5 font-sans">
              <button
                onClick={() => setIsBookingOpen(true)}
                id="btn-detail-book-site-tour"
                className="w-full py-4 px-4 bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-all transform active:scale-[0.98] shadow-lg shadow-[#F17300]/10 flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                <span>BOOK DIRECT SITE TOUR</span>
              </button>

              <button
                onClick={handleWhatsappConsult}
                id="btn-detail-whatsapp-consult"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>CHAT VIA WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F17300]" />
                <span>Direct site developer pricing. No brokerage.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Technical specifications and copy grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Description Segment */}
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <Building2 className="h-5 w-5 text-[#F17300]" />
                <h2 className="text-xl font-bold text-[#1C1C1C]">Executive Property Overview</h2>
              </div>
              <div className="prose prose-orange max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {property.longDescription}
              </div>

              {/* Dynamic Fact Sheet Metadata Block */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1C1C1C] mb-4">Official Property Records</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50/70 p-4 sm:p-5 rounded-xl border border-gray-150">
                  <div className="flex flex-col gap-0.5 text-xs border-b sm:border-b-0 pb-2 sm:pb-0">
                    <span className="text-gray-400 font-medium">Property ID / Ref</span>
                    <span className="font-mono font-bold text-[#1C1C1C] text-sm">{property.id}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-xs border-b sm:border-b-0 pb-2 sm:pb-0">
                    <span className="text-gray-400 font-medium">Property Type</span>
                    <span className="font-bold text-[#1C1C1C]">{property.propertyType}</span>
                  </div>
                  {property.society && (
                    <div className="flex flex-col gap-0.5 text-xs border-b sm:border-b-0 pb-2 sm:pb-0 col-span-1">
                      <span className="text-gray-400 font-medium">Society / Project</span>
                      <span className="font-bold text-[#F17300]">{property.society}</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-0.5 text-xs border-b sm:border-b-0 pb-2 sm:pb-0">
                    <span className="text-gray-400 font-medium">Category Zone</span>
                    <span className="font-bold text-[#1C1C1C] capitalize">{property.category} Use</span>
                  </div>
                  {property.address && (
                    <div className="flex flex-col gap-0.5 text-xs sm:col-span-2 pt-1 border-t border-gray-150/50 mt-1">
                      <span className="text-gray-400 font-medium">Detailed Municipal Address</span>
                      <span className="font-semibold text-gray-700 font-sans leading-relaxed flex items-start gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#F17300] shrink-0 mt-0.5" />
                        <span>{property.address}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Key Amenities */}
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <Award className="h-5 w-5 text-[#F17300]" />
                <h2 className="text-xl font-bold text-[#1C1C1C]">Elite Facilities & Utilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Highlights Section */}
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 sm:p-8 space-y-4 bg-gradient-to-br from-[#FFF0E5] via-white to-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#F17300]" />
                <h2 className="text-xl font-bold text-[#1C1C1C]">Strategic Location Advantage</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {property.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur border border-orange-100/50 p-4 rounded-xl flex gap-3 shadow-sm">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#F17300]/10 text-[#F17300] font-black font-mono">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right side contact assistance panel */}
          <div className="space-y-6">
            
            {/* Quick Relationship Director consultation card */}
            <div className="bg-[#1C1C1C] rounded-2xl text-white p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[#F17300] rounded-full blur-3xl opacity-20" />
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#F17300] font-bold font-mono">Direct Support Line</span>
                <h3 className="text-xl font-black">PSS Portfolio Executive</h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Connect direct with our licensed representative to receive premium blueprint layouts, custom installment programs or gated site visits.
                </p>
              </div>

              <div className="space-y-3.5 font-mono text-sm pt-2">
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-center gap-3 hover:text-[#F17300] transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10"
                >
                  <Phone className="h-5 w-5 text-[#F17300]" />
                  <span>{COMPANY_INFO.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center gap-3 hover:text-[#F17300] transition-colors p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10"
                >
                  <Mail className="h-5 w-5 text-[#F17300]" />
                  <span className="text-xs break-all">{COMPANY_INFO.contact.email}</span>
                </a>
              </div>

              <button
                onClick={() => setIsBookingOpen(true)}
                id="sidebar-detail-tour-booking-btn"
                className="w-full py-3.5 bg-[#F17300] hover:bg-[#d66500] text-white font-bold rounded-sm text-xs tracking-widest uppercase transition-colors"
              >
                SCHEDULE SITE TOUR VISITATION
              </button>
            </div>

            {/* Legals assurance card */}
            <div className="bg-white rounded-xl border border-gray-100/80 shadow-xl shadow-gray-200/50 p-6 space-y-4">
              <h4 className="font-bold text-sm text-[#1C1C1C] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-[#F17300]" />
                <span>Legally Certified Property Desk</span>
              </h4>
              <p className="text-xs text-gray-500 leading-normal">
                At PSS Real Estate Pvt. Ltd., we possess dedicated legal teams auditing every stilt floor structure. We guarantee that titles, approvals, sewage connections, and parking covenants are 100% compliant with MCD and DDA norms.
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Booking Site Tour Portal Dynamic Modal */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPropertyId={property.id}
      />

    </div>
  );
}
