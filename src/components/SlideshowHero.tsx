/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarRange, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import fallback1 from '../assets/images/ChatGPT_Image_1.png';
import fallback2 from '../assets/images/ChatGPT_Image_2.png';
import fallback3 from '../assets/images/ChatGPTImage_3.png';

interface SlideshowHeroProps {
  onOpenBooking: () => void;
  onExploreProperties: () => void;
}

// Default slide text content (images are loaded dynamically from `src/assets/images/slideshow` when available)
const DEFAULT_SLIDE_TEXTS = [
  {
    tagline: "Ultra-Premium Lifestyles",
    heading: "Sovereign Builder Floors",
    highlight: "In Sector 32, Rohini",
    desc: "Experience wide-front layouts, independent multi-car parks, soundproof acoustics, and luxury Italian-modular culinary zones crafted for Delhi's elite."
  },
  {
    tagline: "Curated Growth Arenas",
    heading: "High-yield Retail Outlets",
    highlight: "In Sector 18, Rohini",
    desc: "Capitalize on high footfalls with strategically positioned corner retail showrooms featuring double road frontage and zero-maintenance overheads."
  },
  {
    tagline: "Uncompromised Build Trust",
    heading: "15+ Years of Structural Excellence",
    highlight: "Delhi NCR Focus",
    desc: "From legal title diligence checks to final physical possession keys, PSS Real Estate stands as your secure, transparent investment anchor."
  }
];

// Attempt to dynamically import any slideshow images placed in `src/assets/images/slideshow`.
// If none are present, fall back to bundled images.
const slideModules = (import.meta as any).glob('../../SlideShow Image/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const imageFiles = Object.keys(slideModules).sort().map((k) => slideModules[k]);

const FALLBACK_IMAGES = [fallback1, fallback2, fallback3];

const SLIDES = (imageFiles.length > 0
  ? imageFiles.map((img, i) => ({ image: img, ...DEFAULT_SLIDE_TEXTS[i % DEFAULT_SLIDE_TEXTS.length] }))
  : FALLBACK_IMAGES.map((img, i) => ({ image: img, ...DEFAULT_SLIDE_TEXTS[i % DEFAULT_SLIDE_TEXTS.length] }))
);

export default function SlideshowHero({ onOpenBooking, onExploreProperties }: SlideshowHeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative h-screen w-full bg-[#1C1C1C] overflow-hidden">
      {/* Background Slideshow with Motion Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0.3, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3, scale: 0.98 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={SLIDES[current].image}
              alt="Luxury Real Estate Slideshow Background"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            {/* Multi-layered cinematic dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Core Copy Frame */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          
          {/* Animated Tagline Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${current}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F17300]/10 border border-[#F17300]/30 backdrop-blur-md px-4 py-1.5"
            >
              <div className="h-2 w-2 rounded-full bg-[#F17300] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                {SLIDES[current].tagline}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Animated Main Headers */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`headers-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {SLIDES[current].heading}
              </h2>
              <h3 className="text-[#F17300] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {SLIDES[current].highlight}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Animated Main Body Copy Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans"
            >
              {SLIDES[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* Static conversion motivators - Core Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={onOpenBooking}
              id="hero-book-site-tour-btn"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase text-xs sm:text-sm tracking-widest shadow-xl shadow-[#F17300]/20 hover:shadow-[#F17300]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <CalendarRange className="h-5 w-5" />
              <span>Book Site Tour</span>
            </button>
            
            <button
              onClick={onExploreProperties}
              id="hero-explore-properties-btn"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="h-5 w-5 text-[#F17300]" />
              <span>Explore Properties</span>
            </button>
          </div>

          {/* Trust markers */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">15+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Years Diligence</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#F17300] leading-none">100%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Title Verified</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">RERA</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Approved Projects</p>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-[#F17300] transition-all hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-[#F17300] transition-all hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all rounded-full ${current === idx ? 'w-8 bg-[#F17300]' : 'w-2 bg-white/30 hover:bg-white/55'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}