import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ZAW_BRAND_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const cleanNumber = ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    'Hi ZAW Films! I am interested in booking a shoot / inquiry.'
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30"
      aria-label="Contact ZAW Films on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
      </div>
      <div className="hidden sm:block text-left pr-1">
        <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-200 leading-none">
          WhatsApp Us
        </p>
        <p className="text-xs font-bold text-white tracking-wide">
          {ZAW_BRAND_INFO.phone}
        </p>
      </div>
    </a>
  );
};
