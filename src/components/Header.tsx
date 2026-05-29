/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2, CalendarRange } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor Scroll for Header Background Change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header background logic:
  // - All pages: transparent (no background) until scrolled
  // - After scroll: white background with shadow on all pages
  const showHeaderBg = isScrolled;
  
  // Logo color logic:
  // - Always orange on all pages (both home and other pages)
  const logoSVGColor = 'text-[#FA8C17]';
  
  // Menu text color logic:
  // - When scrolled or on non-home pages with white background: dark gray text
  // - When transparent background: white text
  const menuTextColor = showHeaderBg ? 'text-gray-700' : 'text-white';
  
  // Mobile menu button color:
  // - When scrolled or on non-home pages with white background: dark gray
  // - When transparent background: white
  const mobileMenuColor = showHeaderBg ? 'text-gray-700' : 'text-white';

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'services', label: 'Our Services' },
    { id: 'property', label: 'Property' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },   
    { id: 'more', label: 'Contact US' }
  ];

  const handleLogoClick = () => {
    if (currentPage === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigation = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        showHeaderBg
          ? 'bg-white shadow-lg border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* SVG Logo Directly Embedded - Always Orange */}
          <div
            onClick={handleLogoClick}
            id="logo-brand-btn"
            className="flex items-center cursor-pointer select-none group"
          >
            <div className={`flex items-center justify-center transition-all group-hover:scale-105 ${
              showHeaderBg ? 'bg-transparent' : 'bg-transparent'
            }`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 680 120" 
                className={`h-12 w-auto transition-all ${logoSVGColor}`}
                fill="currentColor"
              >
                <defs>
                  <mask id="window-mask-header">
                    <rect width="100%" height="100%" fill="white" />
                    <rect x="49" y="26" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="61" y="26" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="49" y="41" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="61" y="41" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="49" y="56" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="61" y="56" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="49" y="71" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="61" y="71" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="49" y="86" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="61" y="86" width="6" height="9" fill="black" rx="0.5" />
                    <rect x="82" y="52" width="6" height="8" fill="black" rx="0.5" />
                    <rect x="92" y="52" width="6" height="8" fill="black" rx="0.5" />
                    <rect x="82" y="66" width="6" height="8" fill="black" rx="0.5" />
                    <rect x="92" y="66" width="6" height="8" fill="black" rx="0.5" />
                    <rect x="82" y="80" width="6" height="8" fill="black" rx="0.5" />
                    <rect x="92" y="80" width="6" height="8" fill="black" rx="0.5" />
                  </mask>
                </defs>
                <g>
                  <path d="M38 32 v73 h-24 v-8 l6 -5 v-8 l-6 -5 v-8 l6 -5 v-8 l-6 -5 v-8 l6 -5 z" />
                  <g mask="url(#window-mask-header)">
                    <rect x="43" y="14" width="30" height="91" rx="1" />
                    <rect x="77" y="42" width="25" height="63" rx="1" />
                  </g>
                  <text 
                    x="120" 
                    y="76" 
                    fontFamily="'Outfit', 'Inter', system-ui, sans-serif" 
                    fontWeight="700" 
                    fontSize="43" 
                    letterSpacing="0.01em"
                  >
                    PSS REAL ESTATE PVT. LTD.
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation - Menu Items */}
          <nav className="hidden lg:flex items-center gap-1.5 font-sans">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                id={`desktop-nav-${item.id}`}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                  currentPage === item.id
                    ? 'text-[#F17300] bg-orange-50/90 font-extrabold'
                    : `${menuTextColor} hover:text-[#F17300] hover:bg-white/10`
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Book Site Tour Button - CURVED SHAPE */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              id="header-cta-book-site-tour"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase text-xs tracking-widest transition-all transform active:scale-95 shadow-lg hover:shadow-xl"
            >
              <CalendarRange className="h-4 w-4" />
              <span>Book Site Tour</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="p-2 rounded-full bg-[#F17300] text-white hover:bg-[#d66500] transition-all sm:hidden shadow-md"
              id="mobile-header-tour-btn"
              title="Book Site Tour"
            >
              <CalendarRange className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="hamburg-menu-toggle-btn"
              className={`p-2 rounded-md focus:outline-none transition-all ${mobileMenuColor} hover:text-[#F17300] hover:bg-white/10`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                id={`mobile-nav-${item.id}`}
                className={`flex w-full items-center px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                  currentPage === item.id
                    ? 'text-[#F17300] bg-orange-50 font-black'
                    : 'text-gray-600 hover:text-[#F17300] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3 px-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-hamburg-site-tour-cta"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase text-xs tracking-widest shadow-lg"
            >
              <CalendarRange className="h-5 w-5" />
              <span>Book Site Tour</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}