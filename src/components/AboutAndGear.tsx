import React from 'react';
import { Camera, Film, Sparkles, Cpu, ShieldCheck, Zap, Layers, Award, CheckCircle2 } from 'lucide-react';
import { ZAW_BRAND_INFO, GEAR_ARSENAL } from '../data/portfolioData';

export const AboutAndGear: React.FC = () => {
  return (
    <section id="about-gear-section" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About ZAW Films</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Cinematic Storytelling Rooted in <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Passion & Precision
              </span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Founded by Zohaib, <strong className="text-white font-semibold">ZAW Films</strong> is a premier photography and videography studio dedicated to capturing the grandeur, emotion, and intricate details of Pakistani celebrations and fashion editorial campaigns.
              </p>
              <p>
                Whether it is a candlelit Baraat in Lahore's historic havelis, an opulent beachside Walima in Karachi, or a dream destination pre-wedding shoot amidst Skardu's mountain lakes, we believe every frame should feel like a motion picture standard.
              </p>
            </div>

            {/* Core Values / Why Choose ZAW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Zap className="w-4 h-4" /> 48-Hour Teaser Delivery
                </div>
                <p className="text-xs text-zinc-400">
                  Receive your cinematic Instagram teaser reel within 48 hours while the excitement is still fresh.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Layers className="w-4 h-4" /> S-Log3 Custom Color Grade
                </div>
                <p className="text-xs text-zinc-400">
                  Every photo and film is individually graded to achieve rich skin tones and filmic highlight roll-off.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" /> 100% Data Redundancy
                </div>
                <p className="text-xs text-zinc-400">
                  Dual-card simultaneous recording on-set ensures your priceless memories are twice backed up instantly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Award className="w-4 h-4" /> Unobtrusive Candid Crew
                </div>
                <p className="text-xs text-zinc-400">
                  Our crew captures natural, unforced smiles and raw emotion without getting in the way of your guests.
                </p>
              </div>
            </div>
          </div>

          {/* Right Instagram & Brand Stats Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-white">{ZAW_BRAND_INFO.name} Studio</h3>
                <p className="text-xs font-mono text-amber-400">{ZAW_BRAND_INFO.instagramHandle}</p>
              </div>
              <a
                href={ZAW_BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Follow IG
              </a>
            </div>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-400">Experience in Field:</span>
                <span className="font-bold text-amber-300 font-mono">{ZAW_BRAND_INFO.experienceYears} Years</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-400">Events & Campaigns:</span>
                <span className="font-bold text-amber-300 font-mono">{ZAW_BRAND_INFO.eventsCompleted}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-400">Total Reel & Film Views:</span>
                <span className="font-bold text-amber-300 font-mono">{ZAW_BRAND_INFO.combinedViews}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-400">Client Rating:</span>
                <span className="font-bold text-amber-300 font-mono">{ZAW_BRAND_INFO.rating} ★★★★★</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 italic text-center font-serif">
              "Capturing moments today that will bring smiles for generations across Pakistan."
            </p>
          </div>

        </div>

        {/* Gear Arsenal Grid Section */}
        <div className="space-y-8 pt-8 border-t border-zinc-900">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>Cinema-Grade Technology</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Our Professional Gear Arsenal
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              We invest in Netflix-approved cinema systems, precision prime lenses, and 4K drones to deliver uncompromising visual fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEAR_ARSENAL.map((gear) => (
              <div
                key={gear.id}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/40 transition-all space-y-3"
              >
                <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono uppercase tracking-wider border border-amber-500/20">
                  {gear.category}
                </span>

                <h4 className="text-base font-serif font-bold text-white">
                  {gear.name}
                </h4>

                <p className="text-xs font-mono text-zinc-400 font-medium">
                  {gear.specs}
                </p>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {gear.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
