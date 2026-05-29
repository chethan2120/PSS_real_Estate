/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Building2, Mail, Phone, MapPin, Compass, Shield, Clock, Newspaper } from 'lucide-react';
import { COMPANY_INFO } from '../data';

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

// Social Media Icons
const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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

          {/* Col 1 - SVG Logo directly embedded */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-12 w-auto overflow-hidden">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 680 120" 
                  className="h-12 w-auto text-[#FA8C17]"
                  fill="currentColor"
                >
                  <defs>
                    <mask id="window-mask-footer">
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
                    <g mask="url(#window-mask-footer)">
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

          {/* Col 4 Direct Coordinates + Social Media */}
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

            {/* Social Media Section */}
            <div className="pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F17300] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F17300] transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F17300] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#F17300] transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright - Single line layout */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            {/* Left: Copyright */}
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#F17300]" />
              <span>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</span>
            </div>
            
            {/* Center: Designed and Maintained by WebNxt */}
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
            
            {/* Right: Terms and Privacy */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleNav('more')}
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Representation
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleNav('more')}
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Covenant
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}