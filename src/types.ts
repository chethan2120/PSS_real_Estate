/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  title: string;
  location: string;
  sector: string;
  category: 'residential' | 'commercial' | 'agricultural';
  propertyType: string; // E.g. Flats & Apartments, Commercial Shops, Agricultural/Farm Land
  price: string;
  priceNum: number; // in Lacs for filtering (0 for Call For Price)
  area: string;
  areaNum: number;   // size for filtering
  bedrooms?: number;
  description: string;
  longDescription: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  reraNumber?: string;
  availability: 'Ready to Move' | 'Under Construction' | 'Possession Soon';
  address?: string;
  society?: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  sector: string;
  description: string;
  longDescription: string;
  highlights: string[];
  status: 'Ready to Move' | 'Under Construction' | 'Possession Soon';
  projectType: string;
  images: string[];
  reraRegistration: string;
  amenities: string[];
  address?: string;
  areaRange?: string;
  possessionDate?: string;
  units?: string;
  highlightsDetail?: string;
  outdoorAmenities?: string;
  indoorAmenities?: string;
  towerAmenities?: string;
  otherFacilities?: string;
  unitConfigs?: { type: string; area: string; price: string }[];
  amenitiesList?: string[];
  locationMapDesc?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  detailedContent: string;
  tagline?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  content: string;
  location: string;
  role?: string;
}
