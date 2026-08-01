export type CategoryType = 'all' | 'wedding' | 'commercial' | 'fashion' | 'destination' | 'portrait' | 'drone';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<CategoryType, 'all'>;
  type: 'photo' | 'video';
  src: string;
  poster?: string;
  videoUrl?: string;
  location: string;
  cityName: string;
  clientOrCouple: string;
  date: string;
  description: string;
  cameraSpecs: {
    camera: string;
    lens: string;
    setting?: string;
  };
  duration?: string;
  views?: string;
  tags: string[];
  featured?: boolean;
}

export interface PackageAddon {
  id: string;
  name: string;
  pricePKR: number;
  description: string;
}

export interface CityCoverage {
  id: string;
  name: string;
  province: string;
  shootsDone: number;
  highlightedVenues: string[];
  travelFeePolicy: string;
  popularType: string;
  lat: number;
  lng: number;
  image: string;
}

export interface Review {
  id: string;
  clientName: string;
  eventType: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
}

export interface GearItem {
  id: string;
  category: 'Cameras & Lenses' | 'Drones & Stabilization' | 'Audio & Lighting' | 'Post-Production';
  name: string;
  specs: string;
  description: string;
}

export interface CustomQuoteState {
  eventType: string;
  city: string;
  days: number;
  coverageType: 'photo_only' | 'video_only' | 'hybrid_signature' | 'cinematic_royal';
  addOns: string[];
  clientName: string;
  clientPhone: string;
  eventDate: string;
  specialNotes: string;
}
