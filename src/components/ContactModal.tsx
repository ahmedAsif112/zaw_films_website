import React, { useState } from 'react';
import { X, Sparkles, Calendar, MapPin, Phone, Mail, User, CheckCircle2, MessageSquare } from 'lucide-react';
import { ZAW_BRAND_INFO, CITY_COVERAGE_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Royal Wedding (Baraat & Walima)',
    city: 'Lahore',
    date: '',
    notes: initialNotes
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ZAW Films! I filled out the booking request:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Event: ${formData.eventType}\n- City: ${formData.city}\n- Date: ${formData.date || 'TBD'}\n- Notes: ${formData.notes || 'N/A'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Book Shoot & Check Dates
              </h3>
              <p className="text-[11px] text-zinc-400">ZAW Films • Pan-Pakistan Services</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            id="close-booking-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-white">Booking Inquiry Submitted!</h4>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. The ZAW Films creative desk has received your event request for <strong className="text-amber-300">{formData.city}</strong>. We will contact you on WhatsApp shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  id="confirm-whatsapp-btn"
                >
                  <Phone className="w-4 h-4 fill-zinc-950" /> Instant Chat on WhatsApp
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
                  id="done-booking-modal-btn"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Event Type & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/60"
                    id="book-form-event-select"
                  >
                    <option value="Royal Wedding (3-Day Baraat/Walima)">Royal Wedding (3-Day Baraat/Walima)</option>
                    <option value="Single Day Nikkah / Qawwali">Single Day Nikkah / Qawwali</option>
                    <option value="Destination Shoot (Skardu/Hunza)">Destination Shoot (Skardu/Hunza)</option>
                    <option value="Commercial Brand Shoot">Commercial Brand Shoot</option>
                    <option value="Fashion Editorial / Portrait">Fashion Editorial / Portrait</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">City in Pakistan</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/60"
                    id="book-form-city-select"
                  >
                    {CITY_COVERAGE_DATA.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other Pakistan City">Other Pakistan City</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hamza Chaudhry"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60"
                      id="book-form-name-input"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">WhatsApp / Phone</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60"
                      id="book-form-phone-input"
                    />
                  </div>
                </div>
              </div>

              {/* Event Date & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Event Date (Approx)</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/60"
                      id="book-form-date-input"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60"
                      id="book-form-email-input"
                    />
                  </div>
                </div>
              </div>

              {/* Special Notes / Venue */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400 uppercase">Venue & Special Requests</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your venue (e.g. Haveli Barood Khana, Serena Islamabad), shoot vision, or estimated timing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60"
                  id="book-form-notes-input"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                  id="book-form-submit-btn"
                >
                  <Sparkles className="w-4 h-4" /> Submit Booking Request
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
