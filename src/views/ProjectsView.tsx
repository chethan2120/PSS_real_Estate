/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, MapPin, Building2, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import ProjectDetail from '../components/ProjectDetail';

interface ProjectsViewProps {
  onOpenBooking: () => void;
}

export default function ProjectsView({ onOpenBooking }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const statuses = ['All', ...new Set(PROJECTS.map(p => p.status))];

  const filteredProjects = PROJECTS.filter(project => {
    if (filterStatus !== 'All' && project.status !== filterStatus) return false;
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !project.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const featuredProjects = PROJECTS.slice(0, 3);

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBackToMain={() => setSelectedProject(null)}
        onOpenBooking={onOpenBooking}
      />
    );
  }

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section - NO MOUSE ICON */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[650px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="Projects"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <span>Home</span>
              <ArrowRight className="h-3 w-3" />
              <span className="text-[#F17300]">Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Our Flagship Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Discover our premium residential and commercial developments across prime locations in Delhi NCR and beyond. Each project is crafted with excellence and attention to detail.
            </p>
          </div>
        </div>
        
        {/* MOUSE ICON REMOVED - DELETED */}
        
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#F17300] bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
            Featured Developments
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight mb-3">
            Premium Projects Showcase
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Explore our curated collection of flagship projects that redefine modern living and commercial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F17300] text-white text-[10px] font-black uppercase tracking-wider">
                  {project.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                  <MapPin className="h-3.5 w-3.5 text-[#F17300]" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#F17300] transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4 text-[#F17300]" />
                    <span className="text-xs text-gray-500">{project.units}</span>
                  </div>
                  <button className="text-[#F17300] text-sm font-semibold flex items-center gap-1">
                    View Details <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by project name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] outline-none transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    filterStatus === status
                      ? 'bg-[#F17300] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-[#1C1C1C]">All Projects</h2>
          <p className="text-sm text-gray-500">Showing {filteredProjects.length} projects</p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-white text-[9px] font-black uppercase tracking-wider ${
                    project.status === 'Ready to Move' ? 'bg-emerald-600' : 
                    project.status === 'Possession Soon' ? 'bg-[#F17300]' : 'bg-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] mb-1">
                    <MapPin className="h-3 w-3 text-[#F17300]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1C1C1C] mb-2 line-clamp-1 group-hover:text-[#F17300] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        <Building2 className="h-3 w-3 text-[#F17300]" />
                        <span className="text-[10px] text-gray-500">{project.units}</span>
                      </div>
                    </div>
                    <button className="text-[#F17300] text-[11px] font-semibold flex items-center gap-1">
                      View Details <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">No Projects Found</h3>
            <p className="text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center border border-orange-100">
          <Sparkles className="h-12 w-12 text-[#F17300] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] mb-3">
            Interested in Our Projects?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Schedule a site visit to experience the excellence firsthand. Our team will be happy to assist you.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Book a Site Visit
          </button>
        </div>
      </section>

    </div>
  );
}