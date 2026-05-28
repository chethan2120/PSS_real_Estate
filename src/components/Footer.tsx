/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Building2, Mail, Phone, MapPin, Compass, Shield, Clock, Newspaper } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import LogoImage from '../assets/images/Logo of PSS.jpeg';

const UKFlag = () => (
  <svg viewBox="0 0 50 30" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-3.5 border border-white/20 shadow-xs inline-block bg-[#012169]">
    <line x1="0" y1="0" x2="50" y2="30" stroke="#FFFFFF" strokeWidth="3.5" />
    <line x1="50" y1="0" x2="0" y2="30" stroke="#FFFFFF" strokeWidth="3.5" />
    <line x1="0" y1="0" x2="50" y2="30" stroke="#C8102E" strokeWidth="1.5" />
    <line x1="50" y1="0" x2="0" y2="30" stroke="#C8102E" strokeWidth="1.5" />
    <rect x="21" y="0" width="8" height="30" fill="#FFFFFF" />
    <rect x="0" y="11" width="50" height="8" fill="#FFFFFF" />
    <rect x="23" y="0" width="4" height="30" fill="#C8102E" />
    <rect x="0" y="13" width="50" height="4" fill="#C8102E" />
  </svg>
);

const FrenchFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5.5 h-3.5 border border-white/20 shadow-xs inline-block">
    <rect width="1" height="2" fill="#00209F" />
    <rect x="1" width="1" height="2" fill="#FFFFFF" />
    <rect x="2" width="1" height="2" fill="#E1000F" />
  </svg>
);

const GermanFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5.5 h-3.5 border border-white/20 shadow-xs inline-block">
    <rect width="3" height="0.67" fill="#000000" />
    <rect y="0.67" width="3" height="0.67" fill="#DD0000" />
    <rect y="1.34" width="3" height="0.67" fill="#FFCE00" />
  </svg>
);

const IndiaFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5.5 h-3.5 border border-white/20 shadow-xs inline-block">
    <rect width="3" height="0.67" fill="#FF9933" />
    <rect y="0.67" width="3" height="0.67" fill="#FFFFFF" />
    <rect y="1.34" width="3" height="0.67" fill="#138808" />
    <circle cx="1.5" cy="1" r="0.18" fill="none" stroke="#000080" strokeWidth="0.02" />
    <circle cx="1.5" cy="1" r="0.04" fill="#000080" />
    <line x1="1.5" y1="0.82" x2="1.5" y2="1.18" stroke="#000080" strokeWidth="0.015" />
    <line x1="1.32" y1="1" x2="1.68" y2="1" stroke="#000080" strokeWidth="0.015" />
  </svg>
);

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<string>('2042');
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('pss_visitor_counter');
      let count = 2042;
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed)) {
          count = parsed;
        }
      }
      const countIncremented = count + 1;
      localStorage.setItem('pss_visitor_counter', countIncremented.toString());
      setVisitorCount(countIncremented.toString().padStart(4, '0'));
    } catch (e) {
      setVisitorCount('2042');
    }
  }, []);

  const handleNav = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-app-footer" className="bg-[#1C1C1C] text-white pt-0 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Visual Ambient Element */}
      <div className="h-1 bg-gradient-to-r from-[#F17300] via-orange-500 to-[#1C1C1C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 - Logo Image instead of text */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-12 w-auto overflow-hidden">
                <img 
                  src={LogoImage} 
                  alt="PSS Real Estate Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              PSS REAL ESTATE PVT. LTD. represents the gold standard of real estate transaction execution and legal title diligence across North Delhi, Rohini, Gurgaon, and Faridabad.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-gray-400">
              <Clock className="h-4 w-4 text-[#F17300]" />
              <span>{COMPANY_INFO.contact.hours}</span>
            </div>
          </div>

          {/* Col 2 Quick Index Maps */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F17300] flex items-center gap-1.5">
              <Compass className="h-4 w-4" />
              <span>Explore Portals</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors duration-200">
                  Home Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profile')} className="hover:text-white transition-colors duration-200">
                  Corporate Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors duration-200">
                  Services Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('property')} className="hover:text-white transition-colors duration-200">
                  Showcase Properties
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors duration-200">
                  Active Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blogs')} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                 
                  Blogs & Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 Prime NCR Localities */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Target Markets Focused
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sector 32, Rohini, Delhi</span>
                <span className="text-emerald-500 font-bold uppercase text-[9px] font-mono">Core Hub</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sector 18, Rohini, Delhi</span>
                <span className="text-[#F17300] font-bold uppercase text-[9px] font-mono">Commercial</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Golf Course Rd, Gurgaon</span>
                <span className="text-gray-400 font-bold uppercase text-[9px]">High-Rise</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Dwarka, Central Delhi</span>
                <span className="text-gray-400 font-bold uppercase text-[9px]">Residential</span>
              </li>
            </ul>
          </div>

          {/* Col 4 Direct Coordinates */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Direct Coordinates
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#F17300] shrink-0 mt-0.5" />
                <span className="font-sans leading-relaxed">{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-[#F17300]" />
                <span>{COMPANY_INFO.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5 font-sans">
                <Mail className="h-4.5 w-4.5 text-[#F17300]" />
                <span className="break-all text-[11px] font-mono">{COMPANY_INFO.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and requested attribution */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#F17300]" />
            <span>© {currentYear} {COMPANY_INFO.name}. All legal rights reserved.</span>
          </div>
          
          {/* Requested Attibution: Designed and Maintained by WebNxt */}
          <div id="attribution-footer-block" className="flex items-center text-[11px] font-medium tracking-wide">
            <span>Designed and Maintained by&nbsp;</span>
            <a 
              href="https://webnxt.co/"
              target="_blank"
              rel="noopener noreferrer"
              id="webnxt-attribution-link"
              className="text-[#F17300] hover:text-[#FAFAFF] font-bold underline underline-offset-4 decoration-orange-500/30 hover:decoration-white transition-all duration-200"
            >
              WebNxt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}