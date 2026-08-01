import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShowreelModal } from './components/ShowreelModal';
import { PortfolioGallery } from './components/PortfolioGallery';
import { LightboxModal } from './components/LightboxModal';
import { PackageCalculator } from './components/PackageCalculator';
import { PakistanCoverageMap } from './components/PakistanCoverageMap';
import { AboutAndGear } from './components/AboutAndGear';
import { ReviewsAndInstagram } from './components/ReviewsAndInstagram';
import { MoodboardDrawer } from './components/MoodboardDrawer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GalleryItem } from './types';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [moodboardOpen, setMoodboardOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [bookingNotes, setBookingNotes] = useState('');
  
  // Moodboard state
  const [moodboardItems, setMoodboardItems] = useState<GalleryItem[]>([]);

  const handleToggleMoodboard = (item: GalleryItem) => {
    setMoodboardItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveMoodboardItem = (id: string) => {
    setMoodboardItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearMoodboard = () => {
    setMoodboardItems([]);
  };

  const handleOpenBookingWithQuote = (quoteText: string) => {
    setBookingNotes(quoteText);
    setBookingOpen(true);
  };

  const handleSelectCityFilterFromMap = (cityName: string) => {
    // Scroll to portfolio gallery
    const el = document.getElementById('portfolio-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const moodboardIds = moodboardItems.map((i) => i.id);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 antialiased">
      
      {/* Navigation Header */}
      <Header
        onOpenMoodboard={() => setMoodboardOpen(true)}
        onOpenBooking={() => {
          setBookingNotes('');
          setBookingOpen(true);
        }}
        onOpenShowreel={() => setShowreelOpen(true)}
        moodboardCount={moodboardItems.length}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenBooking={() => {
            setBookingNotes('');
            setBookingOpen(true);
          }}
          onScrollToQuote={() => {
            const el = document.getElementById('calculator-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured 4K Showreel Section Anchor */}
        <div id="showreel-section" className="scroll-mt-24" />

        {/* Portfolio Gallery Showcase */}
        <PortfolioGallery
          onSelectItem={(item) => setSelectedGalleryItem(item)}
          onToggleMoodboard={handleToggleMoodboard}
          moodboardIds={moodboardIds}
        />

        {/* Interactive PKR Package Estimator */}
        <PackageCalculator onOpenBookingWithQuote={handleOpenBookingWithQuote} />

        {/* Pan-Pakistan Cities Interactive Map */}
        <PakistanCoverageMap onSelectCityFilter={handleSelectCityFilterFromMap} />

        {/* ZAW Films Story & Gear Arsenal */}
        <AboutAndGear />

        {/* Client Reviews & Instagram Feed (@zaw_films) */}
        <ReviewsAndInstagram />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-out Drawers */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenBooking={() => {
          setShowreelOpen(false);
          setBookingOpen(true);
        }}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onToggleMoodboard={handleToggleMoodboard}
        isSaved={selectedGalleryItem ? moodboardIds.includes(selectedGalleryItem.id) : false}
        onOpenBooking={() => {
          setSelectedGalleryItem(null);
          setBookingOpen(true);
        }}
      />

      <MoodboardDrawer
        isOpen={moodboardOpen}
        onClose={() => setMoodboardOpen(false)}
        savedItems={moodboardItems}
        onRemoveItem={handleRemoveMoodboardItem}
        onClearAll={handleClearMoodboard}
        onOpenBooking={() => {
          setMoodboardOpen(false);
          setBookingOpen(true);
        }}
      />

      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialNotes={bookingNotes}
      />

      {/* Persistent Floating WhatsApp Direct Chat */}
      <FloatingWhatsApp />

    </div>
  );
}
