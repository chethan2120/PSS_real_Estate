/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Project } from '../types';
import { COMPANY_INFO } from '../data';
import { 
  ArrowLeft, MapPin, BadgeCheck, CheckCircle2, Share2, Phone, Calendar, Building2, Layout, Maximize2, Layers, Check, ChevronRight, Image as ImageIcon, Map
} from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBackToMain: () => void;
  onOpenBooking: (projectId?: string) => void;
}

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

export default function ProjectDetail({ project, onBackToMain, onOpenBooking }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'unitConfig' | 'amenities' | 'gallery' | 'locationMap'>('overview');
  const [isCopied, setIsCopied] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleContactWhatsApp = () => {
    const text = `Hello! I am highly interested in "${project.name}" located at ${project.address || project.location}. Please provide pricing slabs, availability, and schedule a private visit.`;
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFF] text-[#1C1C1C] font-sans pb-16">
      
      {/* Breadcrumb / Action header bar */}
      <div className="bg-white border-b border-gray-100 py-4.5 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <span onClick={onBackToMain} className="hover:text-[#F17300] transition-colors cursor-pointer">Home</span>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span onClick={onBackToMain} className="hover:text-[#F17300] transition-colors cursor-pointer">Projects</span>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span className="text-[#F17300] font-semibold truncate max-w-[200px] sm:max-w-xs">{project.name}</span>
          </nav>
          
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBackToMain}
              className="flex items-center gap-1.5 group text-xs font-bold text-gray-600 hover:text-[#F17300] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Projects</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Project Title / Header Summary Block */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F17300]/10 text-[#F17300] text-[10px] font-black uppercase tracking-wider">
              {project.status}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight">{project.name}</h1>
            <p className="font-sans text-gray-500 text-sm sm:text-base font-medium flex items-center gap-1.5">
              <MapPin className="h-4.5 w-4.5 text-[#F17300] shrink-0" />
              <span>{project.address || project.location}</span>
            </p>
            {project.areaRange && (
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Area Range : <span className="text-[#1C1C1C] font-semibold font-mono">{project.areaRange}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleContactWhatsApp}
              className="px-6 py-3.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Contact Seller</span>
            </button>
            <button
              onClick={() => onOpenBooking(project.id)}
              className="px-6 py-3.5 rounded bg-[#1C1C1C] hover:bg-[#F17300] text-white font-bold text-xs tracking-widest uppercase transition-colors shadow-md cursor-pointer"
            >
              Schedule Site visit
            </button>
          </div>
        </div>

        {/* Gallery / Showcase Grid with +More overlays */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          
          {/* Main Selected Image */}
          <div className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
            <img 
              src={project.images[selectedImageIndex] || project.images[0]} 
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
            />
            {project.reraRegistration && project.reraRegistration !== "Agricultural Approved" && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 text-[10px] sm:text-xs">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>RERA ID: <strong>{project.reraRegistration}</strong></span>
              </div>
            )}
          </div>

          {/* Side Row Grid list */}
          <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3 md:max-h-[450px]">
            {project.images.slice(0, 4).map((img, i) => {
              const isLast = i === 3 && project.images.length > 4;
              return (
                <div 
                  key={i}
                  onClick={() => {
                    if (isLast) {
                      setActiveTab('gallery');
                    } else {
                      setSelectedImageIndex(i);
                    }
                  }}
                  className={`relative aspect-[4/3] md:aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden border cursor-pointer transition-all ${
                    selectedImageIndex === i ? 'border-[#F17300] ring-2 ring-[#F17300]/20' : 'border-gray-205 hover:opacity-90'
                  }`}
                >
                  <img 
                    src={img} 
                    alt="Gallery item preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {isLast && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center text-white p-2">
                      <span className="text-sm font-black font-mono">+{project.images.length - 3} more</span>
                      <span className="text-[10px] text-gray-300 font-extrabold uppercase tracking-wide">View Gallery</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Master Details Content Section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Tab content block */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Nav Tabs layout buttons banner */}
            <div className="bg-white border border-gray-150 rounded-lg p-1.5 flex flex-wrap gap-1 shadow-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 min-w-[100px] text-center text-xs font-black uppercase tracking-wider py-3 px-4 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'overview' ? 'bg-[#1C1C1C] text-white' : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-gray-50'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('unitConfig')}
                className={`flex-1 min-w-[100px] text-center text-xs font-black uppercase tracking-wider py-3 px-4 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'unitConfig' ? 'bg-[#1C1C1C] text-white' : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-gray-50'
                }`}
              >
                <Layout className="h-3.5 w-3.5" />
                <span>Unit Config</span>
              </button>
              <button
                onClick={() => setActiveTab('amenities')}
                className={`flex-1 min-w-[100px] text-center text-xs font-black uppercase tracking-wider py-3 px-4 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'amenities' ? 'bg-[#1C1C1C] text-white' : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-gray-50'
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Amenities</span>
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex-1 min-w-[100px] text-center text-xs font-black uppercase tracking-wider py-3 px-4 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'gallery' ? 'bg-[#1C1C1C] text-white' : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-gray-50'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" />
                <span>Gallery</span>
              </button>
              <button
                onClick={() => setActiveTab('locationMap')}
                className={`flex-1 min-w-[100px] text-center text-xs font-black uppercase tracking-wider py-3 px-4 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'locationMap' ? 'bg-[#1C1C1C] text-white' : 'text-gray-500 hover:text-[#1C1C1C] hover:bg-gray-50'
                }`}
              >
                <Map className="h-3.5 w-3.5" />
                <span>Location Map</span>
              </button>
            </div>

            {/* TAB PANES */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-xs min-h-[350px]">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-[#1C1C1C] mb-3">{project.name}</h3>
                    {project.description && (
                      <h4 className="text-sm font-bold text-[#F17300] mb-4 uppercase tracking-widest">{project.description}</h4>
                    )}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium font-sans">
                      {project.longDescription}
                    </p>
                  </div>

                  {project.highlightsDetail && (
                    <div className="pt-6 border-t border-gray-100 space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Project Highlights</h3>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-150 flex items-start gap-3">
                        <BadgeCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-semibold leading-relaxed">{project.highlightsDetail}</span>
                      </div>
                    </div>
                  )}

                  {/* Comprehensive Facilities Segments */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    
                    {project.outdoorAmenities && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F17300]">Outdoor Amenities</span>
                        <p className="text-xs text-gray-600 leading-relaxed font-sans">{project.outdoorAmenities}</p>
                      </div>
                    )}

                    {project.indoorAmenities && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F17300]">Indoor Amenities</span>
                        <p className="text-xs text-gray-600 leading-relaxed font-sans">{project.indoorAmenities}</p>
                      </div>
                    )}

                    {project.towerAmenities && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F17300]">Tower Amenities</span>
                        <p className="text-xs text-gray-600 leading-relaxed font-sans">{project.towerAmenities}</p>
                      </div>
                    )}

                    {project.otherFacilities && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#F17300]">Other Facilities</span>
                        <p className="text-xs text-gray-600 leading-relaxed font-sans">{project.otherFacilities}</p>
                      </div>
                    )}

                  </div>
                </div>
              )}

              {/* TAB 2: UNIT CONFIGURATION */}
              {activeTab === 'unitConfig' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-[#1C1C1C] tracking-tight">{project.name} Unit Configuration</h3>
                    <p className="text-xs text-gray-400 font-medium">Detailed sizes, super area dimensions and pricing cards.</p>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-gray-150">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider">
                          <th className="p-4">Type</th>
                          <th className="p-4">Super Area</th>
                          <th className="p-4">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        {project.unitConfigs && project.unitConfigs.length > 0 ? (
                          project.unitConfigs.map((cfg, cidx) => (
                            <tr key={cidx} className="hover:bg-gray-50 font-sans font-semibold">
                              <td className="p-4 text-[#1C1C1C] flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-[#F17300] shrink-0" />
                                <span>{cfg.type}</span>
                              </td>
                              <td className="p-4 text-gray-600 font-mono text-xs">{cfg.area}</td>
                              <td className="p-4">
                                <span className="px-2.5 py-1 rounded bg-[#F17300]/10 text-[#F17300] font-black text-xs">
                                  {cfg.price}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="hover:bg-gray-50 font-sans font-semibold">
                            <td className="p-4 text-[#1C1C1C] flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-[#F17300] shrink-0" />
                              <span>{project.projectType}</span>
                            </td>
                            <td className="p-4 text-gray-600 font-mono text-xs">{project.areaRange || 'Custom Sizes'}</td>
                            <td className="p-4">
                              <span className="px-2.5 py-1 rounded bg-[#F17300]/10 text-[#F17300] font-black text-xs">
                                Call for Price
                              </span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-gray-50/70 border border-all-rounded border-gray-150 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F17300] block">Special Guarantee</span>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-medium">
                      All units listed in construction stages come with fixed super-area calculations verified directly by architect blueprints. No hidden changes or layout updates before key handovers.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: AMENITIES LIST */}
              {activeTab === 'amenities' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-[#1C1C1C] tracking-tight">Luxury Amenities List</h3>
                    <p className="text-xs text-gray-400 font-medium">Standard structural, protection, and outdoor luxury networks.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {(project.amenitiesList || project.amenities).map((amn, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-orange-100 hover:bg-orange-50/20 text-[#1C1C1C] font-semibold text-xs leading-none transition-all">
                        <div className="h-4.5 w-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700 truncate">{amn}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: COMPLETE GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-[#1C1C1C] tracking-tight">{project.name} Photo Album</h3>
                    <p className="text-xs text-gray-400 font-medium">Explore beautiful spatial arrangements, facades, and layout frames.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.images.map((img, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImageIndex(i)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden border cursor-pointer group ${
                          selectedImageIndex === i ? 'ring-2 ring-[#F17300]' : ''
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Gallery view item ${i + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-[10px] font-black uppercase bg-[#1C1C1C] px-2 py-1 rounded">Preview</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: LOCATION MAP */}
              {activeTab === 'locationMap' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-[#1C1C1C] tracking-tight">Location Map & Boundaries</h3>
                    <p className="text-xs text-gray-400 font-medium">Verify direct road junctions and municipal boundaries.</p>
                  </div>

                  <div className="p-5 sm:p-6 bg-gray-50 border border-gray-150 rounded-xl space-y-4">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-sm text-[#1C1C1C] block">Official Site Address</span>
                        <span className="text-xs text-gray-500 leading-relaxed block font-semibold">{project.address || project.location}</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 leading-relaxed font-sans bg-white p-4 rounded-lg border border-gray-100 font-medium whitespace-pre-line">
                      {project.locationMapDesc || `Adjacent to well planned high density municipal highways. Offers unmatched central access linkages to elite regional schools, high performance clinical zones and rapid transportation metros.`}
                    </div>

                    {/* Styled Interactive Frame Placeholder for Maps */}
                    <div className="h-60 w-full rounded-lg bg-orange-50 border border-orange-100 relative overflow-hidden flex flex-col items-center justify-center p-4">
                      {/* Sub-grid lines mimicking maps */}
                      <div className="absolute inset-x-0 top-1/3 h-px bg-orange-150/50" />
                      <div className="absolute inset-x-0 top-2/3 h-px bg-orange-150/50" />
                      <div className="absolute inset-y-0 left-1/3 w-px bg-orange-150/50" />
                      <div className="absolute inset-y-0 left-2/3 w-px bg-orange-150/50" />
                      <div className="absolute top-[45%] left-[55%] h-5 w-5 bg-[#F17300]/25 rounded-full animate-ping" />
                      <div className="absolute top-[45%] left-[55%] h-6 w-6 bg-[#F17300] text-white rounded-full flex items-center justify-center shadow-md">
                        <MapPin className="h-3.5 w-3.5" />
                      </div>
                      
                      <div className="relative text-center space-y-1.5 p-4 bg-white/95 rounded-lg max-w-xs border border-orange-150 shadow-md">
                        <span className="text-xs font-black text-[#1C1C1C]">{project.name} Map Marker</span>
                        <span className="text-[10px] text-gray-400 font-bold block bg-gray-50 py-1 rounded">RERA Verified Coordinates</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Sidebar facts list block */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick specifications sheet */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#1C1C1C] pb-3 border-b border-gray-100">Project Highlights</h3>
              
              <div className="space-y-4 text-xs font-semibold">
                
                {project.reraRegistration && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-400 shrink-0 font-medium">RERA No.</span>
                    <span className="font-bold text-[#1C1C1C] text-right font-mono text-xs">{project.reraRegistration}</span>
                  </div>
                )}

                <div className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 shrink-0 font-medium">Project Type</span>
                  <span className="font-bold text-[#1C1C1C] text-right">{project.projectType}</span>
                </div>

                {project.areaRange && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-400 shrink-0 font-medium">Area Range</span>
                    <span className="font-bold text-[#1C1C1C] text-right font-mono">{project.areaRange}</span>
                  </div>
                )}

                <div className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 shrink-0 font-medium">Location</span>
                  <span className="font-bold text-[#1C1C1C] text-right">{project.location}</span>
                </div>

                {project.possessionDate && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-400 shrink-0 font-medium">Possession Status</span>
                    <span className="font-bold text-[#F17300] text-right">{project.possessionDate}</span>
                  </div>
                )}

                {project.units && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-400 shrink-0 font-medium">Unit</span>
                    <span className="font-bold text-[#1C1C1C] text-right">{project.units}</span>
                  </div>
                )}

              </div>

            </div>

            {/* Seller profile booster */}
            <div className="bg-gradient-to-br from-[#FFF0E5]/50 to-white rounded-xl border border-orange-100/60 p-6 sm:p-8 shadow-xs space-y-4 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 h-24 w-24 bg-[#F17300]/10 rounded-full blur-xl" />
              
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] font-black uppercase tracking-wider border border-emerald-100">
                Official RERA partner
              </span>

              <div className="space-y-1">
                <span className="text-sm font-black text-[#1C1C1C] block">{COMPANY_INFO.name}</span>
                <span className="text-[11px] text-gray-500 block leading-snug font-medium font-sans">
                  Enjoy zero markup pricing, direct developer floor slots allocations, and comprehensive regulatory legality vetting on every reservation.
                </span>
              </div>

              <div className="pt-2 grid grid-cols-1 gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="py-2.5 px-3 rounded border border-gray-200 hover:border-[#1C1C1C] text-[#1C1C1C] font-bold text-center text-[10px] tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call {COMPANY_INFO.contact.phone}</span>
                </a>
                <button
                  onClick={handleContactWhatsApp}
                  className="py-2.5 px-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-center text-[10px] tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Chat over WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
