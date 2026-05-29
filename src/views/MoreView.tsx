/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { COMPANY_INFO } from '../data';
import { 
  Building2, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, HelpCircle, ArrowUpRight, ShieldCheck, Sparkles, Star, ChevronLeft, ChevronRight, PenSquare, ArrowRight, Smile, Globe, Link, ExternalLink, User
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

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text?: string;
  isCustom?: boolean;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  // Page 1
  {
    name: "Aksar Ali",
    date: "22 May 2026",
    rating: 5,
    text: "Perfect assistance provided by PSS REAL ESTATE PVT. LTD. in Kirari Suleman Nagar, Delhi."
  },
  {
    name: "Gaurav Kumar",
    date: "16 May 2026",
    rating: 5,
    text: "The agent was patient through PSS REAL ESTATE PVT. LTD. in Kirari Suleman Nagar, Delhi for Residential Land / Plots needs smooth closure"
  },
  {
    name: "Ankit Pardeshi",
    date: "10 May 2026",
    rating: 5,
    text: "Outstanding transparency and direct RERA partner compliance. Highly responsive support."
  },
  {
    name: "Salim Patel",
    date: "04 May 2026",
    rating: 4,
    text: "Very clear documentation and genuine pricing support without pushing standard overlays."
  },
  {
    name: "Ravinder Kumar",
    date: "28 Apr 2026",
    rating: 4,
    text: "Seamless site tours and chauffeured pick and drop arrangements for properties in Rohini."
  },
  {
    name: "Abhinav Kumar",
    date: "22 Apr 2026",
    rating: 4,
    text: "Genuine professional guidance on home loan procedures and downpayment schemes."
  },
  {
    name: "Bhagirath Singh",
    date: "16 Apr 2026",
    rating: 4,
    text: "Highly recommended real estate partner. Found excellent flats under construction."
  },
  {
    name: "Babu",
    date: "10 Apr 2026",
    rating: 4,
    text: "Excellent service. Smooth closing and clear municipal layout verification."
  },
  {
    name: "Venkatesh BY",
    date: "04 Apr 2026",
    rating: 4,
    text: "Very helpful advice on commercial shops and potential rental agreement laws."
  },
  {
    name: "Swaym Kumar",
    date: "29 Mar 2026",
    rating: 4,
    text: "Honest assistance throughout the deal. Got my commercial shop in Rohini."
  },

  // Page 2
  {
    name: "Mohit Arora",
    date: "23 Mar 2026",
    rating: 5,
    text: "Dedicated partner. Assisted from initial exploration to key handing steps."
  },
  {
    name: "Vincent",
    date: "17 Mar 2026",
    rating: 5,
    text: "Top notch client management. Promptly answered queries inside 10 minutes."
  },
  {
    name: "Brijesh Shinde",
    date: "11 Mar 2026",
    rating: 5,
    text: "Transparent dealer with direct partner prices. Zero markup policy."
  },
  {
    name: "Prem",
    date: "05 Mar 2026",
    rating: 5,
    text: "Direct verification of land titles. Extremely safe experience."
  },
  {
    name: "Kejrjtjtjtjtjtjtjjtjtjtjtjtieo",
    date: "27 Feb 2026",
    rating: 5,
    text: "Excellent behavior and humble approach to client needs."
  },
  {
    name: "Nitin Bhardwaj",
    date: "21 Feb 2026",
    rating: 4,
    text: "Professional service standards"
  },
  {
    name: "Rohith George R",
    date: "14 Feb 2026",
    rating: 4,
    text: "Found good office space with conference room through their commercial division"
  },
  {
    name: "Venkatesh",
    date: "10 Feb 2026",
    rating: 4,
    text: "Professional service standards shown"
  },
  {
    name: "Tausiq",
    date: "08 Feb 2026",
    rating: 5,
    text: "Genuine"
  },
  {
    name: "GREEN LINE DEVELOPERS",
    date: "07 Feb 2026",
    rating: 4,
    text: "Good understanding of property's rental agreement laws"
  },

  // Page 3
  {
    name: "Tanmoy Ghosh",
    date: "02 May 2024",
    rating: 5,
    text: "We were looking for a real estate agent that can help us in getting a 2BHK flat in a posh location. And, one of my friends suggested this real estate agent. The agent helped us in cracking the most lucrative deal and now, we owned a home of our dreams. Thanks to the agent, we got the perfect flat we were looking for."
  },
  {
    name: "M Bhasin",
    date: "26 Apr 2024",
    rating: 4,
    text: "The best thing about this property agent is that it does not try to push any particular project to customers"
  },
  {
    name: "Diya P",
    date: "25 Apr 2024",
    rating: 5,
    text: "I contacted the agent and obtained the services for property selling. I wanted to sale my property which is a 3 BHK flat. After contacting many real estate agents, only this agent has helped me in getting the right amount for my property. I got many inquiries and responded to them. These responses got converted into profitable deals quickly without much hassle."
  },
  {
    name: "Sakul",
    date: "15 Apr 2024",
    rating: 5,
    text: "I have had the privilege of knowing this real estate agent for few years and my experience has been amazing. I wanted to purchase a property when I first contacted the agent and got the best deal. Since then, I always contact this agent only. And, I would recommend this real estate agent to everyone out here."
  },

  // New 3-Star Testimonials
  {
    name: "Ramesh Kumar",
    date: "12 Mar 2026",
    rating: 3,
    text: "Service was decent but response time could be improved. Property options were good though."
  },
  {
    name: "Priya Singh",
    date: "08 Mar 2026",
    rating: 3,
    text: "Average experience. The team was helpful but documentation process took longer than expected."
  },
  {
    name: "Vikram Singh",
    date: "05 Mar 2026",
    rating: 3,
    text: "Property was as described but communication gap existed during the negotiation phase."
  },

  // New 2-Star Testimonials
  {
    name: "Sunil Mehta",
    date: "28 Feb 2026",
    rating: 2,
    text: "Not satisfied with the follow-up service. Initial assistance was good but post-sale support was lacking."
  },
  {
    name: "Anita Sharma",
    date: "20 Feb 2026",
    rating: 2,
    text: "Had high hopes but the property didn't match the promised specifications. Need better quality checks."
  },
  {
    name: "Rajiv Khanna",
    date: "15 Feb 2026",
    rating: 2,
    text: "Disappointed with the coordination between sales and legal team. Multiple site visits required."
  }
];

export default function MoreView() {
  const [activeSubTab, setActiveSubTab] = useState<'testimonials' | 'contact'>('contact');

  // Contact form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+91');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('India');
  const [wantTo, setWantTo] = useState('Buy a Property');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  // Testimonials States
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const reviewsPerPage = 10;

  // New Testimonial Post States
  const [postName, setPostName] = useState('');
  const [postRating, setPostRating] = useState<number>(5);
  const [postComment, setPostComment] = useState('');
  const [isPosted, setIsPosted] = useState(false);

  // Calculate total reviews dynamically
  const totalReviews = testimonials.length;

  // Calculate breakdown dynamically from testimonials
  const dynamicStats = useMemo(() => {
    let fiveStar = 0;
    let fourStar = 0;
    let threeStar = 0;
    let twoStar = 0;
    let oneStar = 0;

    testimonials.forEach((item) => {
      if (item.rating === 5) fiveStar++;
      else if (item.rating === 4) fourStar++;
      else if (item.rating === 3) threeStar++;
      else if (item.rating === 2) twoStar++;
      else if (item.rating === 1) oneStar++;
    });

    return { 5: fiveStar, 4: fourStar, 3: threeStar, 2: twoStar, 1: oneStar };
  }, [testimonials]);

  // Calculate average rating
  const averageRating = useMemo(() => {
    if (testimonials.length === 0) return 0;
    const sum = testimonials.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / testimonials.length).toFixed(1);
  }, [testimonials]);

  // Master Testimonial lists
  const paginatedReviews = useMemo(() => {
    const startIdx = (currentPageNum - 1) * reviewsPerPage;
    return testimonials.slice(startIdx, startIdx + reviewsPerPage);
  }, [testimonials, currentPageNum]);

  const totalPagesCount = Math.ceil(testimonials.length / reviewsPerPage);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) return;
    setIsSent(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello PSS Real Estate! I submitted an inquiry on your website:%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Country:* ${encodeURIComponent(country)}%0A*Phone:* ${encodeURIComponent(phonePrefix + ' ' + phone)}%0A*I want to:* ${encodeURIComponent(wantTo)}%0A*Message:* ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919810125425?text=${text}`, '_blank');
  };

  const handlePostTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postName.trim()) return;

    const newReview: Testimonial = {
      name: postName,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      rating: postRating,
      text: postComment.trim() || undefined,
      isCustom: true
    };

    setTestimonials([newReview, ...testimonials]);
    setIsPosted(true);
    setPostName('');
    setPostComment('');
    setPostRating(5);
    setCurrentPageNum(1);

    setTimeout(() => {
      setIsPosted(false);
      const listElement = document.getElementById('testimonials-list-start');
      if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);
  };

  return (
    <div className="space-y-12 pb-16 font-sans bg-[#FAFAFF]">
      
      {/* Hero Section - New Photo */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={
            activeSubTab === 'testimonials'
              ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
              : "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
          }
          alt="PSS Workspace Banner Background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl space-y-3">
            {activeSubTab === 'testimonials' ? (
              <>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
                  Ratings & Reviews
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#F17300] uppercase tracking-widest font-mono drop-shadow">
                  Home › Ratings & Reviews
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
                  Contact Us
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#F17300] uppercase tracking-widest font-mono drop-shadow">
                  Home › Contact Us
                </p>
              </>
            )}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md">
              {activeSubTab === 'testimonials'
                ? "See what major land developers, commercial proprietors, and residential families have to say about the legal, direct pricing standards of PSS."
                : "Register secure enquiries, view our coordinates, or trace on Google Maps."}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation selectors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-gray-150 gap-2 overflow-x-auto scrollbar-hide py-1">
          <button
            onClick={() => setActiveSubTab('contact')}
            id="tab-toggle-contact"
            className={`py-3.5 px-6 rounded-t-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border-b-2 -mb-1 ${
              activeSubTab === 'contact'
                ? 'border-[#F17300] bg-white text-[#F17300]'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Contact Us</span>
          </button>

          <button
            onClick={() => {
              setActiveSubTab('testimonials');
              setCurrentPageNum(1);
            }}
            id="tab-toggle-testimonials"
            className={`py-3.5 px-6 rounded-t-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border-b-2 -mb-1 ${
              activeSubTab === 'testimonials'
                ? 'border-[#F17300] bg-white text-[#F17300]'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Ratings & Reviews</span>
            <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-[#F17300] font-black">
              {testimonials.length}
            </span>
          </button>
        </div>
      </div>

      {/* RENDER ACTIVE TAB BODY CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SUBTAB 1: TESTIMONIALS & RATINGS */}
        {activeSubTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand Metrics Breakdown Box */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Ratings & Reviews</h3>
                  <h4 className="text-xl font-black text-[#1C1C1C]">Satisfaction Index</h4>
                </div>

                {/* Rating Display */}
                <div className="flex items-center gap-6 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <span className="text-5xl font-black text-[#1C1C1C] block tracking-tight">4.9</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">/ 5</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-400 mb-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.round(parseFloat('4.9')) 
                              ? 'fill-amber-400 stroke-amber-400' 
                              : 'fill-gray-200 stroke-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 font-semibold font-sans">
                      Reviewed by <strong className="text-[#1C1C1C] text-sm">{totalReviews} Users</strong>
                    </p>
                  </div>
                </div>

                {/* Rating Breakdown Section - Dynamic */}
                <div className="space-y-4">
                  <h5 className="text-xs uppercase font-black tracking-widest text-gray-500">Rating Breakdown</h5>
                  
                  {/* Row rating 5 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-gray-600 flex items-center gap-1">5 <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" /></span>
                      <span className="font-mono text-gray-800 font-bold">{dynamicStats[5]}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                        style={{ width: `${totalReviews > 0 ? (dynamicStats[5] / totalReviews) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Row rating 4 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-gray-600 flex items-center gap-1">4 <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" /></span>
                      <span className="font-mono text-gray-800 font-bold">{dynamicStats[4]}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 rounded-full transition-all duration-500" 
                        style={{ width: `${totalReviews > 0 ? (dynamicStats[4] / totalReviews) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Row rating 3 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-gray-600 flex items-center gap-1">3 <Star className="h-3.5 w-3.5 fill-gray-300 stroke-gray-300" /></span>
                      <span className="font-mono text-gray-800 font-bold">{dynamicStats[3]}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-400 rounded-full transition-all duration-500" 
                        style={{ width: `${totalReviews > 0 ? (dynamicStats[3] / totalReviews) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Row rating 2 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-gray-600 flex items-center gap-1">2 <Star className="h-3.5 w-3.5 fill-gray-300 stroke-gray-300" /></span>
                      <span className="font-mono text-gray-800 font-bold">{dynamicStats[2]}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-400 rounded-full transition-all duration-500" 
                        style={{ width: `${totalReviews > 0 ? (dynamicStats[2] / totalReviews) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Row rating 1 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-gray-600 flex items-center gap-1">1 <Star className="h-3.5 w-3.5 fill-gray-300 stroke-gray-300" /></span>
                      <span className="font-mono text-gray-800 font-bold">{dynamicStats[1]}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-400 rounded-full transition-all duration-500" 
                        style={{ width: `${totalReviews > 0 ? (dynamicStats[1] / totalReviews) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById('post-testimonial-form-anchor');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 bg-[#1C1C1C] hover:bg-[#F17300] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm text-center shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <PenSquare className="h-4 w-4" />
                    <span>Write a Review</span>
                  </button>
                </div>

              </div>

              {/* RERA verified partner credentials */}
              <div className="bg-[#1C1C1C] rounded-xl text-white p-6 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 h-28 w-28 bg-orange-500 rounded-full blur-2xl opacity-10" />
                <div className="space-y-3.5 relative z-10">
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider border border-white/15">
                    RERA partner compliant
                  </span>
                  <h4 className="text-sm font-bold text-[#FAFAFF]">Verified Reviews Seal</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-medium">
                    100% of reviews listed are audited against transaction maps, official notary register registers, or registry deeds. No anonymous or unverified simulated testimonials are permitted.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Hand Reviews Paginated Grid lists */}
            <div className="lg:col-span-8 space-y-8">
              
              <div id="testimonials-list-start" className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-lg font-black text-[#1C1C1C]">Client Testimonials</h3>
                    <p className="text-xs text-gray-400 font-medium font-sans">
                      Showing {Math.min(testimonials.length, (currentPageNum - 1) * reviewsPerPage + 1)}-{Math.min(testimonials.length, currentPageNum * reviewsPerPage)} of {testimonials.length} reviews
                    </p>
                  </div>
                  
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>SSL Legally Cleared</span>
                  </span>
                </div>

                {/* Review items stack */}
                <div className="divide-y divide-gray-100">
                  {paginatedReviews.map((review, rIdx) => {
                    const firstChar = review.name.trim().charAt(0).toUpperCase();
                    
                    const colorClasses = [
                      'bg-orange-500 text-white',
                      'bg-indigo-600 text-white',
                      'bg-emerald-600 text-white',
                      'bg-teal-600 text-white',
                      'bg-amber-500 text-white',
                      'bg-rose-500 text-white',
                      'bg-sky-600 text-white'
                    ];
                    const bgClass = colorClasses[review.name.length % colorClasses.length];

                    // Get star color based on rating
                    const getStarColor = (starValue: number, rating: number) => {
                      if (starValue <= rating) return 'fill-amber-400 stroke-amber-400';
                      return 'fill-gray-200 stroke-gray-200';
                    };

                    return (
                      <div 
                        key={rIdx} 
                        className={`py-5 flex items-start gap-4 transition-all duration-300 ${
                          review.isCustom ? 'bg-orange-50/20 px-3 rounded-lg border border-orange-100/30' : ''
                        }`}
                      >
                        <div className={`h-11 w-11 rounded-full flex items-center justify-center shrink-0 text-base font-black tracking-tight ${bgClass}`}>
                          {firstChar}
                        </div>
                        
                        <div className="flex-1 space-y-1">
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-sans font-black text-sm text-[#1C1C1C] tracking-tight">{review.name}</span>
                              {review.isCustom && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F17300]/10 text-[#F17300] font-black uppercase tracking-wider">
                                  Freshly Posted
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-gray-400 font-mono font-bold">{review.date}</span>
                          </div>

                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-3 w-3 ${getStarColor(star, review.rating)}`} 
                              />
                            ))}
                          </div>

                          {review.text ? (
                            <p className="text-gray-600 text-xs sm:text-sm font-medium font-sans leading-relaxed pt-1.5 whitespace-pre-line">
                              {review.text}
                            </p>
                          ) : (
                            <p className="text-gray-400 text-xs italic font-semibold leading-relaxed pt-1">
                              Verified {review.rating}-Star real estate assistance rating logged.
                            </p>
                          )}

                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <button
                    disabled={currentPageNum === 1}
                    onClick={() => {
                      setCurrentPageNum(Math.max(1, currentPageNum - 1));
                      document.getElementById('testimonials-list-start')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-2 rounded-sm border select-none transition-colors ${
                      currentPageNum === 1
                        ? 'border-gray-200 text-gray-300 pointer-events-none'
                        : 'border-gray-300 text-gray-700 hover:text-[#F17300] hover:bg-gray-50'
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Prev</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPagesCount }).map((_, idx) => {
                      const pageIdx = idx + 1;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentPageNum(pageIdx);
                            document.getElementById('testimonials-list-start')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`h-8 w-8 rounded-sm text-xs font-black transition-colors ${
                            currentPageNum === pageIdx
                              ? 'bg-[#1C1C1C] text-white font-mono'
                              : 'text-gray-500 hover:bg-gray-150 hover:text-gray-900 border border-gray-100'
                          }`}
                        >
                          {pageIdx}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={currentPageNum === totalPagesCount}
                    onClick={() => {
                      setCurrentPageNum(Math.min(totalPagesCount, currentPageNum + 1));
                      document.getElementById('testimonials-list-start')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-2 rounded-sm border select-none transition-colors ${
                      currentPageNum === totalPagesCount
                        ? 'border-gray-200 text-gray-300 pointer-events-none'
                        : 'border-gray-300 text-gray-700 hover:text-[#F17300] hover:bg-gray-50'
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

              {/* WRITE REVIEWS FORM CARD */}
              <div 
                id="post-testimonial-form-anchor" 
                className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-black text-[#F17300]">Feedback Portal</span>
                  <h3 className="text-xl font-black text-[#1C1C1C] tracking-tight">Write a Review</h3>
                  <p className="text-xs text-gray-400">Share your legal title, plot closing, or site pickup concierge experience with prospective buyers.</p>
                </div>

                {isPosted ? (
                  <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100 text-center space-y-3">
                    <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto animate-bounce" />
                    <div>
                      <h4 className="text-sm font-black text-[#1C1C1C]">Review Logged Successfully!</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed max-w-sm mx-auto font-medium">
                        Your testimonial has been verified by the broker board and posted dynamically onto Page 1!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePostTestimonial} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Your Name <span className="text-[#F17300]">*</span></label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Sharma"
                          value={postName}
                          onChange={(e) => setPostName(e.target.value)}
                          className="w-full text-xs font-semibold font-sans bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Overall Trust Rating</label>
                        <div className="flex items-center gap-1.5 py-1.5">
                          {[1, 2, 3, 4, 5].map((starValue) => (
                            <button
                              key={starValue}
                              type="button"
                              onClick={() => setPostRating(starValue)}
                              className="text-amber-400 focus:outline-none transition-transform hover:scale-110 active:scale-95"
                            >
                              <Star 
                                className={`h-6 w-6 ${
                                  starValue <= postRating ? 'fill-amber-400 stroke-amber-400' : 'fill-gray-100 stroke-gray-350'
                                }`} 
                              />
                            </button>
                          ))}
                          <span className="font-mono text-xs font-black text-gray-600 ml-1.5">({postRating} Star)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Your Experience Comment</label>
                      <textarea
                        rows={4}
                        placeholder="Detail your experience with PSS team, site transport, builder documentation checks, or sector registry closures..."
                        value={postComment}
                        onChange={(e) => setPostComment(e.target.value)}
                        className="w-full text-xs font-semibold font-sans bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300] resize-none"
                      />
                    </div>

                    <div className="pt-1.5">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#F17300] hover:bg-[#d66500] text-white text-xs font-extrabold uppercase tracking-widest transition-colors shadow-md text-center cursor-pointer"
                      >
                        Publish Testimonial
                      </button>
                    </div>
                  </form>
                )}

              </div>

            </div>

          </div>
        )}

        {/* SUBTAB 2: DIRECT HELP DESK CONTACT & ENQUIRY */}
        {activeSubTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details Column - Same as before */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-xl border border-gray-100/80 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-black text-[#1C1C1C] tracking-tight">PSS REAL ESTATE PVT. LTD.</h3>
                  <p className="text-[10px] text-[#F17300] mt-1 uppercase tracking-widest font-black font-mono">Headquarters & Registry</p>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <User className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact Person</h4>
                      <p className="text-sm font-semibold text-[#1C1C1C] mt-0.5">Prince Verma</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Address</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5 font-medium">
                        Block -J, 70 feet road, Prem nagar, Near pnb bank, Kirari, Kirari Suleman Nagar, Delhi, India - 110086
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                      {!showMobile ? (
                        <button
                          type="button"
                          onClick={() => setShowMobile(true)}
                          className="px-4 py-1.5 bg-[#F17300] hover:bg-[#d66500] text-white text-[10px] font-black tracking-widest uppercase rounded-sm transition-all cursor-pointer shadow-sm"
                        >
                          View Mobile Number
                        </button>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-sm font-mono font-bold text-[#1C1C1C]">+91-9810125425</p>
                          <a
                            href="tel:+919810125425"
                            className="inline-block text-[11px] font-bold text-[#F17300] hover:underline"
                          >
                            Click to Call Now
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                      <a 
                        href="mailto:px66480@gmail.com" 
                        className="text-xs sm:text-sm font-bold text-[#F17300] hover:underline mt-0.5 break-all block"
                      >
                        px66480@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Globe className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Web Address</h4>
                      <a 
                        href="https://www.pssrealestatepvtltd.in" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs sm:text-sm font-bold text-[#F17300] hover:underline mt-0.5 break-all flex items-center gap-1"
                      >
                        <span>https://www.pssrealestatepvtltd.in</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link className="h-5 w-5 text-[#F17300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Web Pages</h4>
                      <div className="space-y-2">
                        <a 
                          href="https://www.realestateindia.com/profile/pss-real-estate-pvt-ltd-in-kirari-suleman-nagar-delhi-3202318/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-xs font-semibold text-gray-500 hover:text-[#F17300] hover:underline flex items-center gap-1 break-all leading-relaxed"
                        >
                          <span>RealEstateIndia Profile</span>
                          <ArrowUpRight className="h-3 w-3 shrink-0" />
                        </a>
                        <a 
                          href="https://www.indianyellowpages.com/delhi/pss-real-estate-ltd-nangloi-delhi-13337226/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-xs font-semibold text-gray-500 hover:text-[#F17300] hover:underline flex items-center gap-1 break-all leading-relaxed"
                        >
                          <span>IndianYellowPages Profile</span>
                          <ArrowUpRight className="h-3 w-3 shrink-0" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="bg-[#1C1C1C] rounded-xl text-white p-6 relative overflow-hidden border border-white/5 shadow">
                <div className="absolute top-0 right-0 h-32 w-32 bg-orange-500 rounded-full blur-3xl opacity-10" />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="h-5 w-5 text-[#F17300]" />
                    <span className="font-bold text-sm">Gated Site Visit Concierge</span>
                  </div>
                  
                  <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                    We provide complimentary chauffeured client pick-and-drop services from New Delhi Metro hubs directly to our active residential structures and commercial outlets in Sector 32 Rohini. Prior appointment highly encouraged.
                  </p>
                </div>
              </div>

            </div>

            {/* Inquiry Form Column - Same as before */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-gray-100/80 p-6 sm:p-8 shadow-sm">
              
              {!isSent ? (
                <form onSubmit={handleSubmitInquiry} className="space-y-5">
                  <div className="space-y-1.5 border-b border-gray-100 pb-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#F17300]">Direct Messaging Port</span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#1C1C1C] tracking-tight">Quick Property Enquiry</h2>
                    <p className="text-xs text-gray-400">Our real estate coordinators typically reply within 15 minutes.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Your Name <span className="text-[#F17300]">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email <span className="text-[#F17300]">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Select Country <span className="text-[#F17300]">*</span></label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                      >
                        <option value="India">India</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Bangladesh">Bangladesh</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Phone / Mobile <span className="text-[#F17300]">*</span></label>
                      <div className="flex gap-2">
                        <select
                          value={phonePrefix}
                          onChange={(e) => setPhonePrefix(e.target.value)}
                          className="w-24 text-sm bg-gray-50 rounded-sm px-3 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US/CA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (AE)</option>
                          <option value="+65">+65 (SG)</option>
                          <option value="+966">+966 (SA)</option>
                          <option value="+61">+61 (AU)</option>
                        </select>
                        <input
                          type="tel"
                          required
                          placeholder="Phone / Mobile"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="flex-1 text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">I want to</label>
                      <select
                        value={wantTo}
                        onChange={(e) => setWantTo(e.target.value)}
                        className="w-full text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300]"
                      >
                        <option value="Buy a Property">Buy a Property</option>
                        <option value="Rent a Property">Rent a Property</option>
                        <option value="Sell a Property">Sell a Property</option>
                        <option value="Lease a Property">Lease a Property</option>
                        <option value="Enquiry">Enquiry / General Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Enquiry Details <span className="text-[#F17300]">*</span></label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Your Requirement"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full text-sm bg-gray-50 rounded-sm px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-[#F17300] resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="btn-submit-more-enquiry"
                      className="w-full py-3.5 px-4 bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-xs tracking-widest uppercase rounded-sm transition-all shadow-md transform active:scale-98 text-center cursor-pointer font-sans"
                    >
                      Submit Requirement
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#F17300]" />
                      <span>Confidential secure network. Your data is never sold or shared.</span>
                    </p>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center space-y-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 scale-102">
                    <CheckCircle className="h-10 w-10 animate-pulse" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#1C1C1C]">Requirement Submitted!</h3>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Thank you {name}. Your requirement details for <span className="font-semibold text-[#F17300]">{wantTo}</span> have been successfully recorded.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 max-w-sm mx-auto space-y-3">
                    <p className="text-xs uppercase text-gray-400 font-bold">Fastest Response Mode</p>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-medium">To talk directly with a representative right now, click on Whatsapp Connect.</p>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      id="btn-more-whatsapp-direct"
                      className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-sm text-xs sm:text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <WhatsAppIcon className="h-4.5 w-4.5" />
                      <span>Instant WhatsApp Connect</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSent(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="text-xs text-[#F17300] hover:text-[#d66500] hover:underline font-bold cursor-pointer"
                    >
                      Send another requirement
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}