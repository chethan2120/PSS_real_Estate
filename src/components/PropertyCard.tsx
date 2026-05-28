/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BedDouble, Maximize, MapPin, BadgeCheck, ExternalLink, Sparkles } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onOpenBooking: (propertyId?: string) => void;
}

export default function PropertyCard({ property, onOpenBooking }: PropertyCardProps) {
  // Use first image or fallback
  const displayImage = property.images[0] || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80";

  return (
    <div
      id={`property-card-${property.id}`}
      className="group relative flex flex-col h-full rounded-xl bg-white border border-gray-100/80 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={displayImage}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-md uppercase tracking-wider text-white ${
            property.availability === 'Ready to Move' 
              ? 'bg-emerald-600' 
              : property.availability === 'Possession Soon'
                ? 'bg-[#F17300]'
                : 'bg-blue-600'
          }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            {property.availability}
          </span>
        </div>

        {/* Category Label */}
        <div className="absolute top-3 right-3 z-10">
          <span className="rounded-md bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#FAFAFF] border border-white/10">
            {property.category}
          </span>
        </div>

        {/* Hover Sparkle Effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-xs font-medium flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#F17300]" />
            Click to discover luxury dimensions
          </p>
        </div>
      </div>

      {/* Core Details Panel */}
      <div className="flex-1 flex flex-col p-5">
        
        {/* Metric / Price Strip */}
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-extrabold text-[#F17300] tracking-tight">
            {property.price}
          </h4>
          <p className="text-xs text-gray-400 font-mono flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />
            <span>{property.area}</span>
          </p>
        </div>

        {/* Card Heading Title */}
        <h3 className="text-base font-bold text-[#1C1C1C] tracking-tight group-hover:text-[#F17300] transition-colors leading-snug line-clamp-1 mb-1">
          {property.title}
        </h3>

        {/* Location Pointer */}
        <div className="flex items-start gap-1.5 text-gray-500 text-xs mb-3">
          <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Snippet Description */}
        <p className="text-xs text-gray-500 font-normal leading-relaxed mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 text-xs text-gray-500 font-serif mb-5">
          {property.bedrooms && (
            <div className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-[#F17300] shrink-0" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
          )}
          {property.reraNumber ? (
            <div className="flex items-center gap-1.5 col-span-1">
              <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="font-mono text-[10px] uppercase line-clamp-1">RERA Registered</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 col-span-1">
              <BadgeCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="font-mono text-[10px] uppercase">Legally Assured</span>
            </div>
          )}
        </div>

        {/* Button controls */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          
          {/* Deep link open in the same page/tab */}
          <a
            href={`?property=${property.id}`}
            onClick={(e) => {
              e.preventDefault();
              const url = new URL(window.location.href);
              url.searchParams.set('property', property.id);
              window.history.pushState({}, '', `${url.pathname}${url.search}`);
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id={`btn-open-prop-page-${property.id}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm border border-gray-200 hover:border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
          >
            <span>View Info</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          {/* Book Site Tour selector */}
          <button
            onClick={() => onOpenBooking(property.id)}
            id={`btn-book-prop-tour-${property.id}`}
            className="py-2.5 px-3 bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-xs tracking-wider uppercase rounded-sm transition-colors shadow-sm"
          >
            Book Tour
          </button>

        </div>

      </div>
    </div>
  );
}
