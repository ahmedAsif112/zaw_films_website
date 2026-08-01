import React from 'react';
import { Star, Instagram, Quote, ExternalLink, CheckCircle2, Heart, Film } from 'lucide-react';
import { CLIENT_REVIEWS, ZAW_BRAND_INFO } from '../data/portfolioData';

import heroWedding from '../assets/images/zaw_hero_wedding_1785585348257.jpg';
import fashionShoot from '../assets/images/zaw_fashion_shoot_1785585363936.jpg';
import destinationSkardu from '../assets/images/zaw_destination_skardu_1785585379927.jpg';
import droneLahore from '../assets/images/zaw_drone_lahore_1785585394915.jpg';

export const ReviewsAndInstagram: React.FC = () => {
  const mockInstagramPosts = [
    {
      id: 'ig-1',
      type: 'REEL',
      views: '142K',
      likes: '18.4K',
      img: heroWedding,
      caption: 'When golden hour hits Haveli Barood Khana... ✨ #ZAWFilms #LahoreWeddings'
    },
    {
      id: 'ig-2',
      type: 'REEL',
      views: '210K',
      likes: '34.2K',
      img: destinationSkardu,
      caption: 'Pre-wedding magic in Skardu Gilgit-Baltistan 🏔️ #SkarduDestination #PakistanTourism'
    },
    {
      id: 'ig-3',
      type: 'POST',
      views: '89K',
      likes: '12.1K',
      img: fashionShoot,
      caption: 'Luxury bridal editorial for @zaricouture in Karachi 💎 #FashionCampaign'
    },
    {
      id: 'ig-4',
      type: 'REEL',
      views: '350K',
      likes: '48.9K',
      img: droneLahore,
      caption: 'Lahore sunset from above in 4K 🚁 Badshahi Mosque Aerial #DronePakistan'
    }
  ];

  return (
    <section id="reviews-section" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Reviews Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Loved by Couples & Brands
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            Read real feedback from our clients across Lahore, Islamabad, Karachi, Skardu, and Multan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-amber-500/20" />

                <p className="text-xs sm:text-sm text-zinc-200 font-light italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white">{rev.clientName}</h4>
                      {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <p className="text-[10px] font-mono text-zinc-400">
                      {rev.eventType} • {rev.location}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-300 font-mono">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Grid (@zaw_films) */}
        <div className="pt-12 border-t border-zinc-900 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-pink-400 uppercase tracking-widest mb-1">
                <Instagram className="w-4 h-4" />
                <span>Live Instagram Showcase</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Follow {ZAW_BRAND_INFO.instagramHandle} on Instagram
              </h3>
            </div>

            <a
              href={ZAW_BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              id="instagram-feed-direct-btn"
            >
              <Instagram className="w-4 h-4" /> Visit @zaw_films Instagram
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Reel Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mockInstagramPosts.map((post) => (
              <a
                key={post.id}
                href={ZAW_BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl bg-zinc-950 overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-all shadow-lg"
                id={`ig-post-${post.id}`}
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono text-amber-300">
                    <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-700">
                      {post.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-pink-500 text-pink-500" /> {post.likes}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-200 line-clamp-2 font-light">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
