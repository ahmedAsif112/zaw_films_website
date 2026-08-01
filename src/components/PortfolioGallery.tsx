import React, { useState, useMemo } from 'react';
import { Camera, Film, Play, Heart, MapPin, Search, Filter, Eye, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { PORTFOLIO_ITEMS, CITY_COVERAGE_DATA } from '../data/portfolioData';
import { CategoryType, GalleryItem } from '../types';

interface PortfolioGalleryProps {
  onSelectItem: (item: GalleryItem) => void;
  onToggleMoodboard: (item: GalleryItem) => void;
  moodboardIds: string[];
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'all', label: 'All Showcase' },
  { id: 'wedding', label: 'Luxury Weddings' },
  { id: 'destination', label: 'Destination & Travel' },
  { id: 'fashion', label: 'Fashion & Brands' },
  { id: 'drone', label: '4K Aerial Drone' },
  { id: 'commercial', label: 'Commercial Ads' },
  { id: 'portrait', label: 'Portraits' }
];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectItem,
  onToggleMoodboard,
  moodboardIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'photo' | 'video'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // City check
      if (selectedCity !== 'all' && item.cityName.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      // Type check
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }
      // Search query check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.cityName.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.clientOrCouple.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedCity, selectedType, searchQuery]);

  return (
    <section id="portfolio-section" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Camera className="w-4 h-4" />
              <span>ZAW Films Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Visual Portfolio Showcase
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-2">
              Explore our curated portfolio of wedding cinematography, editorial fashion shoots, and aerial drone stills across Pakistan.
            </p>
          </div>

          {/* Search Input & Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, tag, wedding..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60"
                id="gallery-search-input"
              />
            </div>

            {/* City Filter Dropdown */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-200 focus:outline-none focus:border-amber-500/60"
              id="gallery-city-filter-select"
            >
              <option value="all">All Pakistan Cities</option>
              {CITY_COVERAGE_DATA.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.shootsDone}+ shoots)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Tabs & Media Type Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/10'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
                id={`cat-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-full border border-zinc-800">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                selectedType === 'all' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
              id="type-all-btn"
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType('photo')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1 transition-all ${
                selectedType === 'photo' ? 'bg-zinc-800 text-amber-400 shadow' : 'text-zinc-400 hover:text-white'
              }`}
              id="type-photo-btn"
            >
              <Camera className="w-3 h-3" /> Photos Only
            </button>
            <button
              onClick={() => setSelectedType('video')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1 transition-all ${
                selectedType === 'video' ? 'bg-zinc-800 text-amber-400 shadow' : 'text-zinc-400 hover:text-white'
              }`}
              id="type-video-btn"
            >
              <Film className="w-3 h-3" /> Videos Only
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800/60">
            <Filter className="w-8 h-8 text-zinc-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No gallery items match your filter</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Try adjusting your city filter or search query to view more photography and cinematography work.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCity('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-zinc-800 text-amber-400 text-xs font-semibold hover:bg-zinc-700"
              id="reset-filters-btn"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isSaved = moodboardIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group relative bg-zinc-900 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  id={`portfolio-card-${item.id}`}
                >
                  {/* Media Aspect Container */}
                  <div
                    onClick={() => onSelectItem(item)}
                    className="relative aspect-[4/3] bg-zinc-950 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-zinc-800 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {item.cityName}
                      </span>

                      <div className="flex items-center gap-2">
                        {item.type === 'video' && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500 text-zinc-950 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                            <Play className="w-3 h-3 fill-zinc-950" /> {item.duration || '4K Film'}
                          </span>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMoodboard(item);
                          }}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isSaved
                              ? 'bg-amber-500 text-zinc-950'
                              : 'bg-zinc-950/70 text-zinc-300 hover:text-amber-400 hover:bg-zinc-900'
                          }`}
                          title={isSaved ? 'Remove from Moodboard' : 'Save to Moodboard'}
                          id={`bookmark-item-${item.id}`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-zinc-950' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Center Hover Action Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 text-zinc-950 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Bottom Title overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <p className="text-[10px] font-mono text-amber-400/90 tracking-wider uppercase">
                        {item.clientOrCouple} • {item.location}
                      </p>
                      <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="p-4 bg-zinc-900/90 space-y-3">
                    <p className="text-xs text-zinc-400 line-clamp-2 font-light">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>{item.cameraSpecs.camera}</span>
                      <span>{item.cameraSpecs.lens}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
