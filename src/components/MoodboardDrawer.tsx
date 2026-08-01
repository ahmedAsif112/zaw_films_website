import React from 'react';
import { X, Heart, Trash2, Phone, MapPin, Sparkles, Share2, Camera } from 'lucide-react';
import { GalleryItem } from '../types';
import { ZAW_BRAND_INFO } from '../data/portfolioData';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: GalleryItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onOpenBooking: () => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onClearAll,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi ZAW Films! I created a moodboard on your website with ${savedItems.length} saved visual references:\n` +
      savedItems.map((item, idx) => `${idx + 1}. ${item.title} (${item.location}, ${item.cityName})`).join('\n') +
      `\n\nI would like to inquire about package rates to achieve this style!`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-zinc-900 border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Saved Client Moodboard
              </h3>
              <p className="text-[11px] text-zinc-400">
                {savedItems.length} {savedItems.length === 1 ? 'Reference' : 'References'} Selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            id="close-moodboard-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {savedItems.length === 0 ? (
            <div className="py-16 text-center space-y-3 text-zinc-500">
              <Heart className="w-10 h-10 mx-auto text-zinc-700 stroke-[1.5]" />
              <h4 className="text-sm font-semibold text-zinc-300">Your Moodboard is empty</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Click the heart icon on any photo or video in the portfolio gallery to build your personalized event moodboard.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                <span>Selected Inspiration Items</span>
                <button
                  onClick={onClearAll}
                  className="text-amber-400 hover:underline text-[10px] uppercase"
                  id="clear-moodboard-btn"
                >
                  Clear All
                </button>
              </div>

              {savedItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3 group"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono text-amber-400 uppercase">
                      {item.category} • {item.cityName}
                    </span>
                    <h5 className="text-xs font-bold text-white truncate">{item.title}</h5>
                    <p className="text-[10px] text-zinc-400 truncate flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                      {item.location}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-zinc-500 hover:text-rose-400 rounded-lg hover:bg-zinc-900"
                    title="Remove item"
                    id={`remove-mb-${item.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {savedItems.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-950 space-y-3">
            <p className="text-[11px] text-zinc-400 font-light text-center">
              Share your moodboard directly with ZAW Films to get a tailored quote for this style.
            </p>

            <a
              href={`https://wa.me/${ZAW_BRAND_INFO.whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              id="moodboard-whatsapp-send-btn"
            >
              <Phone className="w-4 h-4" /> Send Moodboard via WhatsApp
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              id="moodboard-book-form-btn"
            >
              <Sparkles className="w-4 h-4" /> Book Session with Saved Style
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
