import React, { useState } from 'react';
import { MapPin, Compass, Award, CheckCircle2, ChevronRight, Camera, Film, Sparkles } from 'lucide-react';
import { CITY_COVERAGE_DATA } from '../data/portfolioData';

interface PakistanCoverageMapProps {
  onSelectCityFilter: (cityName: string) => void;
}

export const PakistanCoverageMap: React.FC<PakistanCoverageMapProps> = ({ onSelectCityFilter }) => {
  const [activeCityId, setActiveCityId] = useState(CITY_COVERAGE_DATA[0].id);

  const activeCity = CITY_COVERAGE_DATA.find((c) => c.id === activeCityId) || CITY_COVERAGE_DATA[0];

  return (
    <section id="coverage-map-section" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4" />
              <span>Nationwide Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Providing Services All Over Pakistan
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-2 font-light">
              ZAW Films travels everywhere for luxury weddings and commercial films — from historic havelis in Punjab to mountain lakes in Gilgit-Baltistan and coastal Karachi.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">350+ Shoots Across 15+ Cities</span>
              <span className="text-zinc-400">Zero Travel Charge for Lahore & Islamabad Base</span>
            </div>
          </div>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* City Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              Select City / Region:
            </p>

            <div className="space-y-2">
              {CITY_COVERAGE_DATA.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                    city.id === activeCityId
                      ? 'bg-amber-500/10 border-amber-500 text-white ring-1 ring-amber-500/40'
                      : 'bg-zinc-900/70 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                  }`}
                  id={`city-tab-${city.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        city.id === activeCityId ? 'bg-amber-500 text-zinc-950 font-bold' : 'bg-zinc-800 text-amber-400'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{city.name}</h4>
                      <p className="text-[11px] text-zinc-400">{city.province} • {city.shootsDone}+ Events</p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      city.id === activeCityId ? 'text-amber-400 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Active City Detail Card (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Image Preview */}
            <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto bg-zinc-950 overflow-hidden">
              <img
                src={activeCity.image}
                alt={activeCity.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-amber-300 border border-amber-500/30">
                  {activeCity.province}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-mono text-amber-400 tracking-wider uppercase">
                  Featured Destination
                </p>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {activeCity.name}
                </h3>
              </div>
            </div>

            {/* Content Specs */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Popular Shoot Style
                  </span>
                  <p className="text-xs font-semibold text-amber-300 mt-0.5">
                    {activeCity.popularType}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Featured Venues & Locations
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {activeCity.highlightedVenues.map((v, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
                  <span className="text-zinc-500 block text-[10px] font-mono uppercase">Logistics & Travel Policy</span>
                  <span className="text-zinc-200 font-medium">{activeCity.travelFeePolicy}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectCityFilter(activeCity.name);
                  const el = document.getElementById('portfolio-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                id={`view-shoots-${activeCity.id}`}
              >
                <Camera className="w-4 h-4" /> View {activeCity.name} Shoots in Gallery
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
