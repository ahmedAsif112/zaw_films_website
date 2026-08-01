import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film, MapPin, Sparkles, Share2, Check } from 'lucide-react';
import { FEATURED_SHOWREELS, ZAW_BRAND_INFO } from '../data/portfolioData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!isOpen) return null;

  const currentReel = FEATURED_SHOWREELS[activeReelIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(ZAW_BRAND_INFO.instagram);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Film className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                ZAW Films • 4K Cinema Showreel
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-400" />
                {currentReel.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 flex items-center gap-1.5 transition-colors"
              id="share-reel-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-zinc-400" />}
              {copied ? 'Link Copied' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              id="close-showreel-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Stage Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            poster={currentReel.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="px-3 py-1 rounded bg-black/70 backdrop-blur text-xs font-mono text-amber-400 border border-amber-500/30">
                {currentReel.category} • {currentReel.duration}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  id="showreel-play-toggle-btn"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-zinc-950" /> : <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:text-white"
                  id="showreel-mute-toggle-btn"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div>
                  <h4 className="text-white font-serif font-bold text-lg">{currentReel.title}</h4>
                  <p className="text-xs text-zinc-300">{currentReel.views} views • Ultra HD 4K S-Log3 Color Grade</p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
                id="showreel-book-style-btn"
              >
                <Sparkles className="w-4 h-4" /> Book This Style
              </button>
            </div>
          </div>
        </div>

        {/* Reel Selector Tabs */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 px-2">
            Select Showreel Category:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FEATURED_SHOWREELS.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => {
                  setActiveReelIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  idx === activeReelIndex
                    ? 'bg-amber-500/10 border-amber-500 text-amber-300 ring-1 ring-amber-500/50'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                }`}
                id={`reel-tab-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-400/80 mb-1">
                    <span>{reel.category}</span>
                    <span>{reel.duration}</span>
                  </div>
                  <p className="text-xs font-semibold line-clamp-1">{reel.title}</p>
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 truncate">{reel.location}</p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
