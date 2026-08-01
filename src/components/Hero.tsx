import React, { useState, useEffect } from 'react';
import { Play, Sparkles, MapPin, Calculator, ChevronRight, Award, Film, Camera, ShieldCheck } from 'lucide-react';
import { ZAW_BRAND_INFO, FEATURED_SHOWREELS } from '../data/portfolioData';

import heroWedding from '../assets/images/zaw_hero_wedding_1785585348257.jpg';
import destinationSkardu from '../assets/images/zaw_destination_skardu_1785585379927.jpg';
import droneLahore from '../assets/images/zaw_drone_lahore_1785585394915.jpg';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenBooking: () => void;
  onScrollToQuote: () => void;
}

const HERO_IMAGES = [
  {
    url: heroWedding,
    caption: 'Royal Wedding Baraat Symphony • Walled City Lahore',
    tag: 'Wedding Photography'
  },
  {
    url: destinationSkardu,
    caption: 'Shangrila Lake Mirror Reflection • Skardu Destination Shoot',
    tag: '4K Drone & Cinematography'
  },
  {
    url: droneLahore,
    caption: 'Badshahi Mosque Sunset Aerial • Heritage Drone Still',
    tag: 'Aerial Cinematography'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenShowreel,
  onOpenBooking,
  onScrollToQuote
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      {/* Background Image Carousel with Overlay */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-7000`}
        >
          <img
            src={img.url}
            alt={img.caption}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Radial Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Pan-Pakistan Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider shadow-xl backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>PROVIDING SERVICES ALL OVER PAKISTAN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="hidden sm:inline text-zinc-400 font-sans">Lahore • Karachi • Islamabad • Skardu • Hunza</span>
        </div>

        {/* Main Title & Subhead */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1]">
            Cinematic Photography & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Films Across Pakistan
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            From royal heritage weddings in Lahore & Karachi to epic 4K drone destination films in Skardu & Hunza. 
            <span className="text-amber-200 font-medium"> ZAW Films</span> crafts luxury visual memories with cinema-grade gear and artistic color grading.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary CTA - Showreel */}
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-zinc-950 font-bold text-sm tracking-wide uppercase shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
            id="hero-play-showreel-btn"
          >
            <div className="w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400 ml-0.5" />
            </div>
            Watch 2026 Showreel
          </button>

          {/* Secondary CTA - Calculate Quote */}
          <button
            onClick={onScrollToQuote}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/30 text-zinc-200 font-semibold text-sm tracking-wide uppercase hover:border-amber-400 transition-all flex items-center justify-center gap-2.5 shadow-lg backdrop-blur-sm"
            id="hero-quote-btn"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            Calculate Package Quote
          </button>

          {/* Tertiary CTA - Direct Booking */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-700/80 text-zinc-300 font-medium text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
            id="hero-check-dates-btn"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Check Booking Dates
          </button>
        </div>

        {/* Live Slide Caption Indicator */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-amber-300/80 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
            {HERO_IMAGES[currentSlide].caption}
          </span>
        </div>

        {/* Statistics Metric Bar */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-zinc-800/80">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">350+</p>
            <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-1">Weddings & Events</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">15+ Cities</p>
            <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-1">Pan-Pakistan Coverage</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">15 Million+</p>
            <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-1">Video & Reel Views</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">4.95 ★</p>
            <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
