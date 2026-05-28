/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '../data';

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

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPropertyId?: string;
}

export default function BookingFormModal({ isOpen, onClose, selectedPropertyId }: BookingFormModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyId, setPropertyId] = useState(selectedPropertyId || 'general');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [tourType, setTourType] = useState<'in-person' | 'virtual'>('in-person');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync on open/change
  React.useEffect(() => {
    if (selectedPropertyId) {
      setPropertyId(selectedPropertyId);
    }
  }, [selectedPropertyId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate backend submission
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const selectedProp = PROPERTIES.find(p => p.id === propertyId);
    const propTitle = selectedProp ? selectedProp.title : 'General Properties Site Tour';
    const message = `Hello PSS Real Estate! I would like to book a site tour.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email || 'Not Provided')}%0A*Property:* ${encodeURIComponent(propTitle)}%0A*Date:* ${encodeURIComponent(date || 'Soon')}%0A*Mode:* ${tourType === 'in-person' ? 'Guided Physical Tour' : 'Virtual Video Call'}`;
    
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#FAFAFF] shadow-2xl border border-gray-100 text-[#1C1C1C]"
          >
            {/* Header Theme - Gradient Bar */}
            <div className="h-2 bg-[#F17300]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="btn-close-modal"
              className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 text-gray-400 hover:bg-gray-200 hover:text-[#1C1C1C] transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="inline-block rounded-full bg-[#FFF0E5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F17300]">
                    Direct Scheduling Portal
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-[#1C1C1C] tracking-tight">
                    Schedule Your Premium Site Tour
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Experience state-of-the-art architectures in real-time. Choose your slots and let us handle your VIP transport.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Property Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Target Property / Purpose
                    </label>
                    <select
                      value={propertyId}
                      onChange={(e) => setPropertyId(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-[#1C1C1C] focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                    >
                      <option value="general">💼 General Property Consultation / Builder Floors</option>
                      {PROPERTIES.map(p => (
                        <option key={p.id} value={p.id}>
                          🏠 {p.title} ({p.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Your Full Name <span className="text-[#F17300]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        WhatsApp/Mobile <span className="text-[#F17300]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tour Type Buttons */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Preferred Tour Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTourType('in-person')}
                        className={`flex flex-col items-center justify-center p-3 rounded-sm border text-center transition-all ${
                          tourType === 'in-person'
                            ? 'border-[#F17300] bg-[#FFF0E5] text-[#F17300] font-bold shadow-sm'
                            : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xs uppercase tracking-wider font-bold">⚡ Guided Site Visit</span>
                        <span className="text-[9px] text-gray-400 mt-0.5">Complimentary Mercedes Pickup</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTourType('virtual')}
                        className={`flex flex-col items-center justify-center p-3 rounded-sm border text-center transition-all ${
                          tourType === 'virtual'
                            ? 'border-[#F17300] bg-[#FFF0E5] text-[#F17300] font-bold shadow-sm'
                            : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xs uppercase tracking-wider font-bold">📳 Live Video Call</span>
                        <span className="text-[9px] text-gray-400 mt-0.5">Zoom, Meet, or WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Preferred Time Window
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] focus:outline-none transition-colors"
                      >
                        <option>10:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 03:00 PM</option>
                        <option>03:00 PM - 05:00 PM</option>
                        <option>05:00 PM - 07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission and Action Buttons */}
                  <div className="pt-4 space-y-2">
                    <button
                      type="submit"
                      id="btn-confirm-site-tour"
                      className="w-full py-3 px-4 bg-[#F17300] hover:bg-[#d66500] text-white font-bold uppercase tracking-widest text-xs rounded-sm shadow-md hover:shadow-lg transition-all transform active:scale-[0.98]"
                    >
                      Instant Booking Affirmation
                    </button>
                    <p className="text-center text-[10px] text-gray-400 space-y-1">
                      🛡️ Strictly encrypted. No cold marketing. Only transparent luxury.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#1C1C1C]">Booking Confirmed!</h3>
                <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
                  Namaste {name}. Your VIP {tourType === 'in-person' ? 'Site Tour' : 'Video Tour'} request for{' '}
                  <span className="font-semibold text-[#F17300]">
                    {PROPERTIES.find(p => p.id === propertyId)?.title || 'PSS Portfolio'}
                  </span>{' '}
                  is successfully logged for {date || 'the requested slot'}.
                </p>

                <div className="mt-8 border-t border-gray-100 pt-6 space-y-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Highly Recommended Next Step
                  </p>
                  <p className="text-xs text-gray-500">
                    Connect instantly with our Relationship Director on WhatsApp to secure premium transport or dynamic floor configurations under 2 minutes.
                  </p>
                  <button
                    onClick={handleWhatsAppRedirect}
                    id="btn-whatsapp-redirect-booking"
                    className="flex items-center justify-center w-full gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase tracking-widest text-xs rounded-sm shadow transition-all"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Secure Booking on WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="text-xs text-gray-400 hover:text-gray-600 underline"
                  >
                    Close Booking Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
