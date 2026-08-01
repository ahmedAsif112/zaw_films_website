import React, { useState, useEffect } from 'react';
import { Camera, Film, Sparkles, Phone, Instagram, Menu, X, Heart, MapPin, Calculator } from 'lucide-react';
import { ZAW_BRAND_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenMoodboard: () => void;
  onOpenBooking: () => void;
  onOpenShowreel: () => void;
  moodboardCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMoodboard,
  onOpenBooking,
  onOpenShowreel,
  moodboardCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group text-left"
          id="brand-logo-btn"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif tracking-wider text-xl font-bold bg-gradient-to-r from-amber-200 via-zinc-100 to-amber-400 bg-clip-text text-transparent">
                ZAW FILMS
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono tracking-widest uppercase">
                4K
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 tracking-widest uppercase font-mono">
              Photography • Cinematography Pakistan
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-zinc-300">
          <button
            onClick={() => scrollToSection('showreel-section')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
            id="nav-showreel"
          >
            <Film className="w-3.5 h-3.5 text-amber-400" />
            Showreel
          </button>
          <button
            onClick={() => scrollToSection('portfolio-section')}
            className="hover:text-amber-400 transition-colors"
            id="nav-gallery"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('calculator-section')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
            id="nav-packages"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Pricing & Quote
          </button>
          <button
            onClick={() => scrollToSection('coverage-map-section')}
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
            id="nav-coverage"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Pakistan Cities
          </button>
          <button
            onClick={() => scrollToSection('about-gear-section')}
            className="hover:text-amber-400 transition-colors"
            id="nav-gear"
          >
            Gear & Story
          </button>
          <button
            onClick={() => scrollToSection('reviews-section')}
            className="hover:text-amber-400 transition-colors"
            id="nav-reviews"
          >
            Reviews
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Moodboard Button */}
          <button
            onClick={onOpenMoodboard}
            className="relative p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-all"
            title="Saved Moodboard"
            id="moodboard-toggle-btn"
          >
            <Heart className="w-4 h-4" />
            {moodboardCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-zinc-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                {moodboardCount}
              </span>
            )}
          </button>

          {/* Instagram direct link */}
          <a
            href={ZAW_BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 hover:text-pink-400 hover:border-pink-500/40 transition-all"
            title="Follow on Instagram @zaw_films"
            id="instagram-header-btn"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Book Session CTA */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            id="book-header-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book Shoot
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenMoodboard}
            className="relative p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
            id="mobile-moodboard-btn"
          >
            <Heart className="w-4 h-4" />
            {moodboardCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-zinc-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                {moodboardCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium uppercase text-zinc-300 tracking-wider">
            <button
              onClick={() => scrollToSection('showreel-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-showreel"
            >
              <Film className="w-4 h-4 text-amber-400" /> Showreel
            </button>
            <button
              onClick={() => scrollToSection('portfolio-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-gallery"
            >
              <Camera className="w-4 h-4 text-amber-400" /> Gallery
            </button>
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-pricing"
            >
              <Calculator className="w-4 h-4 text-amber-400" /> Pricing & Quote
            </button>
            <button
              onClick={() => scrollToSection('coverage-map-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-cities"
            >
              <MapPin className="w-4 h-4 text-amber-400" /> Pan-Pakistan
            </button>
            <button
              onClick={() => scrollToSection('about-gear-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-gear"
            >
              Gear & Team
            </button>
            <button
              onClick={() => scrollToSection('reviews-section')}
              className="p-3 bg-zinc-900 rounded-lg text-left flex items-center gap-2 border border-zinc-800"
              id="mobile-nav-reviews"
            >
              Client Reviews
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              id="mobile-book-btn"
            >
              <Sparkles className="w-4 h-4" /> Book Shoot / Check Availability
            </button>
            <a
              href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ZAW Films! I am interested in booking a photography/videography shoot in Pakistan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              id="mobile-whatsapp-btn"
            >
              <Phone className="w-4 h-4" /> WhatsApp Direct Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
