/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS, COMPANY_INFO } from '../data';
import { 
  Building2, MapPin, BadgeCheck, CheckCircle2, ChevronRight, MessageSquare, Compass, ShieldAlert, Sparkles, ArrowRight
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

interface ProjectsViewProps {
  onOpenBooking: () => void;
}

export default function ProjectsView({ onOpenBooking }: ProjectsViewProps) {

  const handleWhatsappProject = (projectName: string) => {
    const text = `Hello PSS Real Estate! I am visiting your webpage and am highly interested in your featured project: %0A%0A*Project:* ${encodeURIComponent(projectName)}%0A%0APlease share the detailed PDF brochure, payment scheme structures and direct floor layouts.`;
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleNavigateToProject = (projectId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('project', projectId);
    window.history.pushState({}, '', `${url.pathname}${url.search}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      
      {/* Banner portion */}
      <section className="relative h-60 w-full overflow-hidden bg-gray-50 border-b border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Landmark Developments Backdrop"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-white/90 md:hidden block" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl space-y-1.5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F17300] font-mono">
              Home › Projects
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#1C1C1C] tracking-tight leading-none">
              Projects
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold max-w-xl">
              Explore the pinnacle of luxury apartments, premium highrises, and commercial hubs. Handpicked by PSS Real Estates for exceptional returns.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid layout to perfectly match specified listing attributes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden flex flex-col h-full relative"
            >
              {/* Image banner inside card */}
              <div className="relative aspect-[16/10] bg-gray-150 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10 flex gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/5">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Data body containing custom elements */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-3.5">
                  <div>
                    <h3 className="text-xl font-black text-[#1C1C1C] tracking-tight group-hover:text-[#F17300] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                      {project.name}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs font-semibold font-sans">
                    <p className="text-[#1C1C1C] flex items-center gap-1.5">
                      <span className="text-gray-400 font-medium">Type :</span>
                      <span className="text-[#F17300] font-bold">{project.projectType}</span>
                    </p>
                    <p className="text-gray-600 flex items-start gap-1">
                      <span className="text-gray-400 font-medium shrink-0">Location :</span>
                      <span className="text-gray-700 leading-snug font-medium flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-[#F17300] shrink-0" />
                        <span>{project.location}</span>
                      </span>
                    </p>
                  </div>

                  {project.description && (
                    <p className="text-xs sm:text-xs font-extrabold text-[#1C1C1C] leading-relaxed bg-orange-50/40 p-2.5 rounded border border-orange-100/50">
                      {project.description}
                    </p>
                  )}

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 font-medium">
                    {project.longDescription}
                  </p>
                </div>

                {/* Direct Detail navigational trigger action button */}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href={`?project=${project.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigateToProject(project.id);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded bg-[#1C1C1C] hover:bg-[#F17300] text-white font-black text-xs tracking-widest uppercase transition-all shadow-sm cursor-pointer"
                  >
                    <span>View Detail</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>
              
            </div>
          ))}

        </div>
      </section>

      {/* Consult advisory bottom section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-gradient-to-br from-[#FFF0E5]/40 to-white rounded-xl border border-orange-100/60 p-8 text-center space-y-4 max-w-3xl mx-auto shadow-xl shadow-gray-200/50 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 h-32 w-32 bg-[#F17300]/10 rounded-full blur-2xl" />
          <Sparkles className="h-8 w-8 text-[#F17300] mx-auto animate-pulse" />
          
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#1C1C1C]">Expert Project Vetting Assistance</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
              Our investment advisory board helps you analyze cash flow statements, RERA escrow books, and downpayment schedules of major NCR builders. Connect with us instantly.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleWhatsappProject('Full Landmark Projects Advisory')}
              className="px-6 py-3 rounded bg-[#1C1C1C] hover:bg-[#F17300] text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              Consult with Investment Director
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
