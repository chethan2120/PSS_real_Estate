/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SlideshowHero from './components/SlideshowHero';
import BookingFormModal from './components/BookingFormModal';
import PropertyDetail from './components/PropertyDetail';
import ProjectDetail from './components/ProjectDetail';


// Views
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import ServicesView from './views/ServicesView';
import PropertyView from './views/PropertyView';
import ProjectsView from './views/ProjectsView';
import MoreView from './views/MoreView';
import BlogView from './views/BlogView';

// Data
import { COMPANY_INFO, PROPERTIES, PROJECTS } from './data';
import { MessageCircle, ArrowUp } from 'lucide-react';

// Helper Component for original WhatsApp brand SVG icon
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPropertyTourId, setSelectedPropertyTourId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Deep linking state check: allows properties and projects to open in custom full views!
  const [deepLinkedPropertyId, setDeepLinkedPropertyId] = useState<string | null>(null);
  const [deepLinkedProjectId, setDeepLinkedProjectId] = useState<string | null>(null);

  useEffect(() => {
    // Parse URL on init and handle window pops
    const parseUrlParams = () => {
      const params = new URLSearchParams(window.location.search);
      const propId = params.get('property');
      const projId = params.get('project');
      
      if (propId) {
        setDeepLinkedPropertyId(propId);
        setDeepLinkedProjectId(null);
      } else if (projId) {
        setDeepLinkedProjectId(projId);
        setDeepLinkedPropertyId(null);
      } else {
        setDeepLinkedPropertyId(null);
        setDeepLinkedProjectId(null);
      }
    };

    parseUrlParams();
    window.addEventListener('popstate', parseUrlParams);
    
    // Scroll top visibility check
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', parseUrlParams);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenBooking = (propertyId?: string) => {
    setSelectedPropertyTourId(propertyId);
    setIsBookingOpen(true);
  };

  const handleCloseDetail = () => {
    // Remove query params without triggering page reload
    const url = new URL(window.location.href);
    url.searchParams.delete('property');
    url.searchParams.delete('project');
    window.history.pushState({}, '', url.pathname);
    setDeepLinkedPropertyId(null);
    setDeepLinkedProjectId(null);
    window.scrollTo({ top: 0 });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Master rendering layout
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFF] text-[#1C1C1C]">
      
      {/* Sticky Header Nav */}
      <Header
        currentPage={deepLinkedPropertyId ? 'property' : deepLinkedProjectId ? 'projects' : currentPage}
        setCurrentPage={(page) => {
          if (deepLinkedPropertyId || deepLinkedProjectId) {
            handleCloseDetail();
          }
          setCurrentPage(page);
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main section presentation router */}
      <main className="flex-1">
        {deepLinkedPropertyId ? (
          (() => {
            const propertyObj = PROPERTIES.find(p => p.id === deepLinkedPropertyId);
            return propertyObj ? (
              <PropertyDetail 
                property={propertyObj} 
                onBackToMain={handleCloseDetail} 
              />
            ) : null;
          })()
        ) : deepLinkedProjectId ? (
          (() => {
            const projectObj = PROJECTS.find(p => p.id === deepLinkedProjectId);
            return projectObj ? (
              <ProjectDetail 
                project={projectObj} 
                onBackToMain={handleCloseDetail}
                onOpenBooking={handleOpenBooking}
              />
            ) : null;
          })()
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <SlideshowHero
                  onOpenBooking={() => handleOpenBooking()}
                  onExploreProperties={() => {
                    setCurrentPage('property');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
                <HomeView
                  onOpenBooking={handleOpenBooking}
                  onNavigateToTab={(tabId) => {
                    setCurrentPage(tabId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </>
            )}

            {currentPage === 'profile' && <ProfileView />}
            
            {currentPage === 'services' && <ServicesView />}
            
            {currentPage === 'property' && (
              <PropertyView onOpenBooking={handleOpenBooking} />
            )}
            {currentPage === 'blogs' && <BlogView />}
            {currentPage === 'projects' && (
              <ProjectsView onOpenBooking={() => handleOpenBooking()} />
            )}
            
            {currentPage === 'more' && <MoreView />}
          </>
        )}
      </main>

      {/* Bottom Sticky Footer */}
      <Footer setCurrentPage={(page) => {
        if (deepLinkedPropertyId || deepLinkedProjectId) {
          handleCloseDetail();
        }
        setCurrentPage(page);
      }} />

      {/* Booking site tour pop-up window portal */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPropertyId={selectedPropertyTourId}
      />

      {/* Bottom Right Floating Core Controls Action */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-center">
        
        {/* Scroll To Top button: is only visible after scroll */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            id="action-btn-scroll-top"
            title="Scroll to Top"
            className="p-3 bg-white hover:bg-gray-100 text-[#1C1C1C] border border-gray-200 shadow-xl rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* WhatsApp Button: bottom right pulse green circle with original color and icon */}
        <a
          href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello!%20I%20came%20across%20The%20PSS%20Real%20Estates%20website%20and%20I'm%20interested%20in%20your%20premium%20properties.%20Could%20you%20please%20assist%20me%3F`}
          target="_blank"
          rel="noopener noreferrer"
          id="action-btn-whatsapp-floating"
          title="Direct Consult WhatsApp"
          className="relative h-14 w-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group cursor-pointer"
        >
          {/* Ripple pulse wave layers */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
          <span className="absolute -inset-1 rounded-full border border-[#25D366]/30 animate-pulse" />
          
          <WhatsAppIcon className="h-7 w-7 text-white relative z-10 transition-transform group-hover:rotate-12 duration-300" />
        </a>

      </div>

    </div>
  );
}
