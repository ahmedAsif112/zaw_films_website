import React, { useState, useMemo } from 'react';
import { Calculator, Check, Sparkles, MapPin, Phone, ShieldCheck, Info, Calendar } from 'lucide-react';
import { ZAW_BRAND_INFO, CITY_COVERAGE_DATA } from '../data/portfolioData';

interface PackageCalculatorProps {
  onOpenBookingWithQuote: (quoteText: string) => void;
}

const EVENT_TYPES = [
  { id: 'wedding_3day', name: 'Full Royal Wedding (3 Days: Mehndi, Baraat, Walima)', basePKR: 450000 },
  { id: 'wedding_2day', name: 'Signature Wedding (2 Days: Baraat & Walima)', basePKR: 320000 },
  { id: 'wedding_1day', name: 'Single Event (Nikkah / Qawwali / Engagement)', basePKR: 180000 },
  { id: 'commercial', name: 'Commercial Brand / Fashion Campaign (1 Day)', basePKR: 150000 },
  { id: 'destination', name: 'Destination Shoot (Skardu / Hunza / Fairy Meadows)', basePKR: 380000 }
];

const COVERAGE_LEVELS = [
  { id: 'hybrid', name: 'Signature Hybrid (2 Senior Cinematographers + 2 Photographers)', multiplier: 1.0, popular: true },
  { id: 'royal', name: 'Royal Cinema Crew (3 Cinematographers + 3 Photographers + Drone)', multiplier: 1.35, popular: false },
  { id: 'video_only', name: 'Cinematography & Video Only (2 Senior Cinematographers)', multiplier: 0.75, popular: false },
  { id: 'photo_only', name: 'Photography & Albums Only (2 Senior Photographers)', multiplier: 0.65, popular: false }
];

const ADDONS = [
  { id: 'same_day_edit', name: 'Same-Day Edit Teaser Reel (Delivered at Venue)', pricePKR: 45000 },
  { id: 'luxury_album', name: '2x Premium Italian Flush Mount Photobooks', pricePKR: 50000 },
  { id: 'drone_4k', name: 'Dedicated 4K Aerial Drone Operator', pricePKR: 35000 },
  { id: 'crane_gimbal', name: 'Heavy Gimbal & Cinema Lighting Rig', pricePKR: 30000 },
  { id: 'raw_drive', name: '1TB SSD Drive with All Unedited RAW Footage', pricePKR: 20000 }
];

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onOpenBookingWithQuote }) => {
  const [selectedEventType, setSelectedEventType] = useState('wedding_3day');
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [selectedCoverage, setSelectedCoverage] = useState('hybrid');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['same_day_edit', 'drone_4k']);
  const [eventDays, setEventDays] = useState(3);

  const cityInfo = useMemo(() => {
    return CITY_COVERAGE_DATA.find((c) => c.name.toLowerCase().includes(selectedCity.toLowerCase())) || {
      name: selectedCity,
      travelFeePolicy: 'Standard travel logistics apply'
    };
  }, [selectedCity]);

  const calculation = useMemo(() => {
    const eventObj = EVENT_TYPES.find((e) => e.id === selectedEventType) || EVENT_TYPES[0];
    const covObj = COVERAGE_LEVELS.find((c) => c.id === selectedCoverage) || COVERAGE_LEVELS[0];

    let base = eventObj.basePKR * covObj.multiplier;

    // Addon totals
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const item = ADDONS.find((a) => a.id === addonId);
      return sum + (item ? item.pricePKR : 0);
    }, 0);

    // Travel logistics estimate for destination cities
    let travelEstimate = 0;
    if (selectedCity === 'Skardu & Hunza' || selectedCity === 'Karachi') {
      travelEstimate = 60000;
    } else if (selectedCity === 'Multan' || selectedCity === 'Faisalabad') {
      travelEstimate = 20000;
    }

    const grandTotal = Math.round(base + addonsTotal + travelEstimate);

    return {
      eventName: eventObj.name,
      coverageName: covObj.name,
      baseAmount: Math.round(base),
      addonsTotal,
      travelEstimate,
      grandTotal
    };
  }, [selectedEventType, selectedCoverage, selectedAddons, selectedCity]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formattedQuoteText = `ZAW Films Estimate: ${calculation.eventName} in ${selectedCity} (${calculation.coverageName}). Total PKR ${calculation.grandTotal.toLocaleString()}`;

  const whatsappLink = `https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi ZAW Films! I used your website calculator to build a custom package:\n- Event: ${calculation.eventName}\n- City: ${selectedCity}\n- Coverage: ${calculation.coverageName}\n- Add-ons: ${selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).join(', ')}\n- Estimated Total: PKR ${calculation.grandTotal.toLocaleString()}\n\nIs this date available?`
  )}`;

  return (
    <section id="calculator-section" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Calculator className="w-4 h-4" />
            <span>Transparent Pricing Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Custom Package & Quote Builder
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Customize your shoot specifications, event locations across Pakistan, crew size, and add-ons to generate an instant transparent PKR estimate.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options Column (8 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* Step 1: Select Event Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                1. Select Event / Shoot Type:
              </label>
              <div className="space-y-2">
                {EVENT_TYPES.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setSelectedEventType(e.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedEventType === e.id
                        ? 'bg-amber-500/10 border-amber-500 text-white font-medium ring-1 ring-amber-500/40'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    }`}
                    id={`calc-event-${e.id}`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">{e.name}</span>
                    <span className="text-xs font-mono text-amber-400 font-bold shrink-0 ml-2">
                      PKR {e.basePKR.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Pakistan City */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                2. Select City / Location in Pakistan:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Lahore', 'Islamabad', 'Karachi', 'Skardu & Hunza', 'Faisalabad', 'Multan'].map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                      selectedCity === city
                        ? 'bg-amber-500 text-zinc-950 font-bold border-amber-500 shadow-md'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    }`}
                    id={`calc-city-${city}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {cityInfo.travelFeePolicy}
              </p>
            </div>

            {/* Step 3: Coverage Level & Crew Size */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                3. Crew Size & Coverage Type:
              </label>
              <div className="space-y-2">
                {COVERAGE_LEVELS.map((cov) => (
                  <button
                    key={cov.id}
                    onClick={() => setSelectedCoverage(cov.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedCoverage === cov.id
                        ? 'bg-amber-500/10 border-amber-500 text-white font-medium ring-1 ring-amber-500/40'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    }`}
                    id={`calc-cov-${cov.id}`}
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-semibold">{cov.name}</span>
                      {cov.popular && (
                        <span className="ml-2 px-2 py-0.5 rounded bg-amber-500 text-zinc-950 font-mono text-[9px] font-bold uppercase">
                          Most Requested
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Upgrades */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                4. Select Optional Add-ons & Extras:
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        checked
                          ? 'bg-amber-500/10 border-amber-500/60 text-white'
                          : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                      }`}
                      id={`calc-addon-${addon.id}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-xs transition-colors ${
                            checked ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-transparent'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-300 font-semibold">
                        +PKR {addon.pricePKR.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Estimate Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-24">
            
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                Live Cost Breakdown
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">Estimated Quote</h3>
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-xs text-zinc-300 font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-400">Base Coverage ({selectedCity}):</span>
                <span className="text-white font-semibold">PKR {calculation.baseAmount.toLocaleString()}</span>
              </div>

              {calculation.addonsTotal > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Selected Add-ons ({selectedAddons.length}):</span>
                  <span className="text-amber-300 font-semibold">+PKR {calculation.addonsTotal.toLocaleString()}</span>
                </div>
              )}

              {calculation.travelEstimate > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Crew Logistics ({selectedCity}):</span>
                  <span className="text-amber-300 font-semibold">+PKR {calculation.travelEstimate.toLocaleString()}</span>
                </div>
              )}

              <div className="pt-3 border-t border-zinc-800 flex items-baseline justify-between text-base">
                <span className="font-sans font-bold text-white uppercase text-xs tracking-wider">Estimated Total</span>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    PKR {calculation.grandTotal.toLocaleString()}
                  </span>
                  <span className="block text-[10px] text-zinc-500 font-mono">Tax & Full Crew Included</span>
                </div>
              </div>
            </div>

            {/* Included Value Highlights */}
            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2 text-[11px] text-zinc-300">
              <p className="font-semibold text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> ZAW Films Signature Deliverables:
              </p>
              <ul className="space-y-1 text-zinc-400 font-light pl-4 list-disc">
                <li>Master 4K Cinematic Highlights Film (Color Graded in S-Log3)</li>
                <li>Full Length HD Coverage of Speeches, Rituals & Stages</li>
                <li>High-Res Edited Photographs with Cloud Gallery Access</li>
                <li>No Hidden Charges across Pakistan shoots</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                id="calc-whatsapp-send-btn"
              >
                <Phone className="w-4 h-4 fill-zinc-950" /> Send Custom Quote to WhatsApp
              </a>

              <button
                onClick={() => onOpenBookingWithQuote(formattedQuoteText)}
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-500/20"
                id="calc-form-book-btn"
              >
                <Sparkles className="w-4 h-4" /> Submit Booking Form Directly
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
