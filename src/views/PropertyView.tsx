/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Building2, Home, Crown, ArrowRight, Search } from 'lucide-react';
import { PROPERTIES } from '../data';
import PropertyCard from '../components/PropertyCard';

interface PropertyViewProps {
  onOpenBooking: (propertyId?: string) => void;
}

export default function PropertyView({ onOpenBooking }: PropertyViewProps) {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Use PROPERTIES directly
  const propertiesArray = PROPERTIES || [];

  // Extract city from location field (since city field might not exist)
  const getCityFromProperty = (property: any) => {
    if (property.city) return property.city;
    const location = property.location || '';
    if (location.includes('Delhi')) return 'Delhi';
    if (location.includes('Saharanpur')) return 'Saharanpur';
    if (location.includes('Ghaziabad')) return 'Ghaziabad';
    if (location.includes('Gurgaon')) return 'Gurgaon';
    if (location.includes('Gandhinagar')) return 'Gandhinagar';
    if (location.includes('Ahmedabad')) return 'Ahmedabad';
    return 'Other';
  };

  // Filter properties by city and search query
  const filteredProperties = propertiesArray.filter(property => {
    // City filter
    if (selectedCity !== 'All') {
      const propertyCity = getCityFromProperty(property);
      if (propertyCity !== selectedCity) return false;
    }
    
    // Search filter - search in title, location, and description
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const titleMatch = property.title?.toLowerCase().includes(searchLower);
      const locationMatch = property.location?.toLowerCase().includes(searchLower);
      const descriptionMatch = property.description?.toLowerCase().includes(searchLower);
      if (!titleMatch && !locationMatch && !descriptionMatch) return false;
    }
    
    return true;
  });

  // City-wise property counts
  const cityCounts = {
    Delhi: propertiesArray.filter(p => getCityFromProperty(p) === 'Delhi').length,
    Saharanpur: propertiesArray.filter(p => getCityFromProperty(p) === 'Saharanpur').length,
    Ghaziabad: propertiesArray.filter(p => getCityFromProperty(p) === 'Ghaziabad').length,
    Gurgaon: propertiesArray.filter(p => getCityFromProperty(p) === 'Gurgaon').length,
  };

  // Get total count for display
  const getCount = (city: string) => {
    if (city === 'Delhi') return cityCounts.Delhi;
    if (city === 'Saharanpur') return cityCounts.Saharanpur;
    if (city === 'Ghaziabad') return cityCounts.Ghaziabad;
    if (city === 'Gurgaon') return cityCounts.Gurgaon;
    return 0;
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Property Portfolio"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <span>Home</span>
              <ArrowRight className="h-3 w-3" />
              <span className="text-[#F17300]">Property Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Property Portfolio
            </h1>
            <p className="text-base text-gray-200 leading-relaxed max-w-2xl">
              The page lists hot properties from the various city. These properties are exclusively made 
              available for our valuable clients. So choose the one that suits your requirement, and let us serve you once.
            </p>
          </div>
        </div>
      </section>

      {/* City Stats Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Delhi Button */}
            <button
              onClick={() => setSelectedCity(selectedCity === 'Delhi' ? 'All' : 'Delhi')}
              className={`text-center p-4 rounded-xl transition-all cursor-pointer ${
                selectedCity === 'Delhi' 
                  ? 'bg-[#F17300] text-white shadow-lg scale-105' 
                  : 'bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-md'
              }`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 ${selectedCity === 'Delhi' ? 'bg-white/20' : 'bg-[#F17300]/10'}`}>
                <Building2 className={`h-5 w-5 ${selectedCity === 'Delhi' ? 'text-white' : 'text-[#F17300]'}`} />
              </div>
              <p className={`text-2xl font-black ${selectedCity === 'Delhi' ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {getCount('Delhi')}
              </p>
              <p className={`text-xs font-bold uppercase tracking-wider ${selectedCity === 'Delhi' ? 'text-white/90' : 'text-[#F17300]'}`}>
                DELHI
              </p>
              <p className={`text-[10px] ${selectedCity === 'Delhi' ? 'text-white/70' : 'text-gray-400'}`}>
                Active Listings
              </p>
            </button>

            {/* Saharanpur Button */}
            <button
              onClick={() => setSelectedCity(selectedCity === 'Saharanpur' ? 'All' : 'Saharanpur')}
              className={`text-center p-4 rounded-xl transition-all cursor-pointer ${
                selectedCity === 'Saharanpur' 
                  ? 'bg-[#F17300] text-white shadow-lg scale-105' 
                  : 'bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-md'
              }`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 ${selectedCity === 'Saharanpur' ? 'bg-white/20' : 'bg-[#F17300]/10'}`}>
                <Home className={`h-5 w-5 ${selectedCity === 'Saharanpur' ? 'text-white' : 'text-[#F17300]'}`} />
              </div>
              <p className={`text-2xl font-black ${selectedCity === 'Saharanpur' ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {getCount('Saharanpur')}
              </p>
              <p className={`text-xs font-bold uppercase tracking-wider ${selectedCity === 'Saharanpur' ? 'text-white/90' : 'text-[#F17300]'}`}>
                SAHARANPUR
              </p>
              <p className={`text-[10px] ${selectedCity === 'Saharanpur' ? 'text-white/70' : 'text-gray-400'}`}>
                Active Listings
              </p>
            </button>

            {/* Ghaziabad Button */}
            <button
              onClick={() => setSelectedCity(selectedCity === 'Ghaziabad' ? 'All' : 'Ghaziabad')}
              className={`text-center p-4 rounded-xl transition-all cursor-pointer ${
                selectedCity === 'Ghaziabad' 
                  ? 'bg-[#F17300] text-white shadow-lg scale-105' 
                  : 'bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-md'
              }`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 ${selectedCity === 'Ghaziabad' ? 'bg-white/20' : 'bg-[#F17300]/10'}`}>
                <Building2 className={`h-5 w-5 ${selectedCity === 'Ghaziabad' ? 'text-white' : 'text-[#F17300]'}`} />
              </div>
              <p className={`text-2xl font-black ${selectedCity === 'Ghaziabad' ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {getCount('Ghaziabad')}
              </p>
              <p className={`text-xs font-bold uppercase tracking-wider ${selectedCity === 'Ghaziabad' ? 'text-white/90' : 'text-[#F17300]'}`}>
                GHAZIABAD
              </p>
              <p className={`text-[10px] ${selectedCity === 'Ghaziabad' ? 'text-white/70' : 'text-gray-400'}`}>
                Active Listings
              </p>
            </button>

            {/* Gurgaon Button */}
            <button
              onClick={() => setSelectedCity(selectedCity === 'Gurgaon' ? 'All' : 'Gurgaon')}
              className={`text-center p-4 rounded-xl transition-all cursor-pointer ${
                selectedCity === 'Gurgaon' 
                  ? 'bg-[#F17300] text-white shadow-lg scale-105' 
                  : 'bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-md'
              }`}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 ${selectedCity === 'Gurgaon' ? 'bg-white/20' : 'bg-[#F17300]/10'}`}>
                <Crown className={`h-5 w-5 ${selectedCity === 'Gurgaon' ? 'text-white' : 'text-[#F17300]'}`} />
              </div>
              <p className={`text-2xl font-black ${selectedCity === 'Gurgaon' ? 'text-white' : 'text-[#1C1C1C]'}`}>
                {getCount('Gurgaon')}
              </p>
              <p className={`text-xs font-bold uppercase tracking-wider ${selectedCity === 'Gurgaon' ? 'text-white/90' : 'text-[#F17300]'}`}>
                GURGAON
              </p>
              <p className={`text-[10px] ${selectedCity === 'Gurgaon' ? 'text-white/70' : 'text-gray-400'}`}>
                Active Listings
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* Search Bar and Results Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by property name, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] outline-none transition-all"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-[#F17300]">{filteredProperties.length}</span> matching properties
          </p>
        </div>
      </section>

      {/* Property Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">No Properties Found</h3>
            <p className="text-sm text-gray-500">Try adjusting your search or city filter to find more properties.</p>
          </div>
        )}
      </section>

    </div>
  );
}