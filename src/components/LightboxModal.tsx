import React, { useState } from 'react';
import { X, Play, Pause, Heart, Share2, MapPin, Camera, Calendar, Sparkles, Check, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { GalleryItem } from '../types';
import { ZAW_BRAND_INFO } from '../data/portfolioData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onToggleMoodboard: (item: GalleryItem) => void;
  isSaved: boolean;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onToggleMoodboard,
  isSaved,
  onOpenBooking
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ZAW Films! I saw your "${item.title}" shoot at ${item.location} in ${item.cityName} on your portfolio. I would like to inquire about similar photography/videography for my event!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[92vh]">
        
        {/* Close Button Top Right for Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white lg:hidden"
          id="lightbox-mobile-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Canvas Column (Left/Top) */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden group min-h-[300px] lg:min-h-[550px]">
          {item.type === 'video' && item.videoUrl ? (
            <video
              src={item.videoUrl}
              poster={item.poster || item.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain max-h-[75vh]"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-contain max-h-[75vh]"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Information & EXIF Sidebar Column (Right) */}
        <div className="w-full lg:w-96 bg-zinc-950 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 overflow-y-auto">
          
          <div className="space-y-6">
            {/* Header Title & Close Button */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono tracking-wider uppercase">
                  {item.category} • {item.type.toUpperCase()}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
                  {item.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="hidden lg:flex p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white"
                id="lightbox-desktop-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Shoot Details */}
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">{item.location}</span>
                <span className="text-zinc-500">({item.cityName})</span>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Client / Couple: <strong className="text-white">{item.clientOrCouple}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Shoot Date: {item.date}</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800/80">
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>

            {/* Camera Technical Specs (EXIF) */}
            <div className="space-y-2">
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400" /> Cinema Technical Specs
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[9px] uppercase">Camera System</span>
                  <span className="text-amber-300 font-semibold">{item.cameraSpecs.camera}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[9px] uppercase">Lens / Glass</span>
                  <span className="text-amber-300 font-semibold">{item.cameraSpecs.lens}</span>
                </div>

                {item.cameraSpecs.setting && (
                  <div className="col-span-2 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[9px] uppercase">Exposure / Color Profile</span>
                    <span className="text-zinc-300">{item.cameraSpecs.setting}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs Bottom */}
          <div className="pt-6 border-t border-zinc-800 space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleMoodboard(item)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSaved
                    ? 'bg-amber-500 text-zinc-950 shadow-md'
                    : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200'
                }`}
                id="lightbox-moodboard-btn"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-zinc-950' : ''}`} />
                {isSaved ? 'Saved in Moodboard' : 'Add to Moodboard'}
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300"
                title="Share link"
                id="lightbox-share-btn"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              id="lightbox-whatsapp-inquire-btn"
            >
              <Phone className="w-4 h-4" /> Inquire Shoot via WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
