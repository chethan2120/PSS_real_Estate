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
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Side */}
          <div
            onClick={handleLogoClick}
            id="logo-brand-btn"
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className={`flex items-center justify-center h-10 w-10 rounded-lg transition-all group-hover:scale-105 ${
              isScrolled ? 'bg-[#F17300]' : 'bg-[#F17300]'
            } text-white shadow-lg shadow-[#F17300]/20`}>
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-black tracking-tight text-lg sm:text-xl md:text-2xl flex items-center leading-none">
                <span className={isScrolled ? 'text-[#1C1C1C]' : 'text-white'}>
                  PSS
                </span>
                <span className="font-light ml-1.5 text-sm sm:text-base tracking-widest uppercase text-[#F17300]">
                  Real Estate
                </span>
              </h1>
              <p className={`text-[9px] font-mono tracking-widest uppercase leading-none mt-0.5 ${
                isScrolled ? 'text-gray-400' : 'text-white/80'
              }`}>
                Pvt. Ltd.
              </p>
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
                    : isScrolled 
                      ? 'text-gray-600 hover:text-[#F17300] hover:bg-gray-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
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
              className={`p-2 rounded-md focus:outline-none transition-all ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#1C1C1C] hover:bg-gray-100' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
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