import React from 'react';
import { Camera, Instagram, Phone, Mail, MapPin, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { ZAW_BRAND_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to Capture Your Unforgettable Story?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light">
              Now booking for the 2026-2027 Royal Wedding & Festival season across all cities in Pakistan.
            </p>
          </div>

          <a
            href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ZAW Films! I am interested in booking a shoot.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-transform shrink-0 flex items-center gap-2"
            id="footer-whatsapp-cta"
          >
            <Phone className="w-4 h-4 fill-zinc-950" /> Chat on WhatsApp Now
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Camera className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-serif font-bold text-lg text-white tracking-wider">
                ZAW FILMS
              </span>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">
              Luxury wedding cinematography, editorial fashion photography, and 4K aerial drone filmmaking across Pakistan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ZAW_BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                title="Instagram @zaw_films"
                id="footer-ig-link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="WhatsApp Direct"
                id="footer-wa-link"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Jump */}
          <div className="space-y-3">
            <h4 className="font-mono text-amber-400 uppercase text-[11px] tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-zinc-300">
              <li><a href="#showreel-section" className="hover:text-amber-400 transition-colors">4K Cinema Showreel</a></li>
              <li><a href="#portfolio-section" className="hover:text-amber-400 transition-colors">Portfolio Gallery</a></li>
              <li><a href="#calculator-section" className="hover:text-amber-400 transition-colors">Package Estimator</a></li>
              <li><a href="#coverage-map-section" className="hover:text-amber-400 transition-colors">Pan-Pakistan Cities</a></li>
              <li><a href="#about-gear-section" className="hover:text-amber-400 transition-colors">Camera Gear Arsenal</a></li>
            </ul>
          </div>

          {/* Pakistan City Hubs */}
          <div className="space-y-3">
            <h4 className="font-mono text-amber-400 uppercase text-[11px] tracking-widest font-bold">
              Pakistan Coverage
            </h4>
            <ul className="space-y-1.5 text-zinc-300 font-light">
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> Lahore (Home Base)</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> Islamabad & Rawalpindi</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> Karachi</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> Skardu & Hunza Valley</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> Multan & Faisalabad</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="font-mono text-amber-400 uppercase text-[11px] tracking-widest font-bold">
              Contact Desk
            </h4>
            <div className="space-y-2 text-zinc-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> {ZAW_BRAND_INFO.phone}
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400" /> {ZAW_BRAND_INFO.instagramHandle}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> {ZAW_BRAND_INFO.email}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} ZAW Films. All Rights Reserved. Serving All Over Pakistan.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
            id="scroll-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
