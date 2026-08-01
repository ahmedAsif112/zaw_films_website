import { GalleryItem, CityCoverage, Review, GearItem } from '../types';

import heroWedding from '../assets/images/zaw_hero_wedding_1785585348257.jpg';
import fashionShoot from '../assets/images/zaw_fashion_shoot_1785585363936.jpg';
import destinationSkardu from '../assets/images/zaw_destination_skardu_1785585379927.jpg';
import droneLahore from '../assets/images/zaw_drone_lahore_1785585394915.jpg';

export const ZAW_BRAND_INFO = {
  name: "ZAW Films",
  tagline: "Cinematic Storytelling & Luxury Photography Across Pakistan",
  owner: "Zohaib & ZAW Creative Team",
  instagram: "https://www.instagram.com/zaw_films/",
  instagramHandle: "@zaw_films",
  whatsappNumber: "+923425514316",
  email: "contact@zawfilms.com",
  phone: "+92 342 5514316",
  primaryLocations: ["Lahore", "Islamabad", "Karachi", "Skardu", "Hunza", "Faisalabad", "Multan"],
  experienceYears: "7+",
  eventsCompleted: "350+",
  combinedViews: "15M+",
  rating: "4.95"
};

export const FEATURED_SHOWREELS = [
  {
    id: 'sr-1',
    title: 'Royal Baraat & Nikkah Symphony',
    location: 'Haveli Barood Khana, Walled City Lahore',
    duration: '03:45',
    category: 'Wedding Film',
    poster: heroWedding,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'A grand cinematic wedding film featuring candlelit night processions, traditional qawwali music, and emotional heirloom portraits.',
    views: '240K'
  },
  {
    id: 'sr-2',
    title: 'Majestic Shangrila Couple Pre-Wedding',
    location: 'Skardu & Katpana Desert, Gilgit-Baltistan',
    duration: '02:30',
    category: 'Destination Film',
    poster: destinationSkardu,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'Ultra 4K drone videography capturing reflections over Shangrila Lake and sunset sand dunes in Northern Pakistan.',
    views: '410K'
  },
  {
    id: 'sr-3',
    title: 'Heritage Couture Fashion Campaign',
    location: 'Mohatta Palace, Karachi',
    duration: '01:50',
    category: 'Commercial Ad',
    poster: fashionShoot,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    description: 'Slow-motion 120fps cinematography highlighting hand-embroidered velvet and gold accents for a premium Pakistani fashion house.',
    views: '180K'
  },
  {
    id: 'sr-4',
    title: 'Pakistan Above: 4K Drone Reel',
    location: 'Lahore, Islamabad, Hunza & Swat',
    duration: '04:10',
    category: 'Aerial Drone',
    poster: droneLahore,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    description: 'High-altitude aerial cinematography showcasing iconic monuments, winding mountain passes, and historic Pakistani architecture.',
    views: '520K'
  }
];

export const PORTFOLIO_ITEMS: GalleryItem[] = [
  {
    id: 'item-1',
    title: 'The Golden Hour Royal Baraat',
    category: 'wedding',
    type: 'photo',
    src: heroWedding,
    location: 'Haveli Barood Khana',
    cityName: 'Lahore',
    clientOrCouple: 'Amina & Hamza',
    date: 'October 2025',
    description: 'Atmospheric candid portrait under golden fairy lights and traditional brass lanterns. Captured using 85mm prime at f/1.4 for soft cinematic bokeh.',
    cameraSpecs: {
      camera: 'Sony A7S III',
      lens: 'FE 85mm f/1.4 GM',
      setting: '1/250s | f/1.4 | ISO 400'
    },
    views: '12.4k',
    tags: ['Royal Wedding', 'Baraat', 'Lahore', 'Candlelight', 'Candid'],
    featured: true
  },
  {
    id: 'item-2',
    title: 'Shangrila Lake Mirror Reflection',
    category: 'destination',
    type: 'video',
    src: destinationSkardu,
    poster: destinationSkardu,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    location: 'Skardu Resort',
    cityName: 'Skardu',
    clientOrCouple: 'Zainab & Bilal',
    date: 'September 2025',
    description: 'Breathtaking 4K drone panning shot across the mirror-like waters of Shangrila Resort surrounded by towering snow-capped peaks.',
    cameraSpecs: {
      camera: 'DJI Mavic 3 Cine',
      lens: '24mm Hasselblad 4K',
      setting: '4K D-Log | 60fps'
    },
    duration: '02:15',
    views: '45.2k',
    tags: ['Destination', 'Skardu', 'Drone 4K', 'Gilgit-Baltistan', 'Pre-Wedding'],
    featured: true
  },
  {
    id: 'item-3',
    title: 'Velvet & Gold Couture Campaign',
    category: 'fashion',
    type: 'photo',
    src: fashionShoot,
    location: 'Mohatta Palace',
    cityName: 'Karachi',
    clientOrCouple: 'Zari Couture Label',
    date: 'November 2025',
    description: 'Editorial fashion studio shoot for a luxury bridal collection emphasizing intricate zardozi craftsmanship and rich velvet textures.',
    cameraSpecs: {
      camera: 'Sony FX3',
      lens: 'FE 50mm f/1.2 GM',
      setting: '1/400s | f/2.0 | ISO 100'
    },
    views: '18.9k',
    tags: ['Fashion Editorial', 'Karachi', 'Bridal Couture', 'Studio Lighting'],
    featured: true
  },
  {
    id: 'item-4',
    title: 'Twilight Heritage Aerial Still',
    category: 'drone',
    type: 'photo',
    src: droneLahore,
    location: 'Badshahi Mosque Courtyard',
    cityName: 'Lahore',
    clientOrCouple: 'Tourism & Architecture Heritage',
    date: 'December 2025',
    description: 'Symmetrical overhead panorama of Badshahi Mosque bathed in warm sunset hues with birds gracefully passing through the frame.',
    cameraSpecs: {
      camera: 'DJI Inspire 3',
      lens: 'Zenmuse X9 24mm',
      setting: 'RAW 8K CinemaDNG'
    },
    views: '34.1k',
    tags: ['Drone 4K', 'Lahore', 'Heritage', 'Architecture', 'Sunset'],
    featured: true
  },
  {
    id: 'item-5',
    title: 'Serena Capital Nikkah Ceremony',
    category: 'wedding',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    location: 'Serena Hotel Grand Ballroom',
    cityName: 'Islamabad',
    clientOrCouple: 'Mahnoor & Saad',
    date: 'August 2025',
    description: 'Intimate Nikkah highlights video capturing tears of joy, mirror peek moments, and traditional white & gold decor elegance.',
    cameraSpecs: {
      camera: 'Sony FX6',
      lens: 'FE 24-70mm f/2.8 GM II',
      setting: '4K S-Log3 | 10-bit 4:2:2'
    },
    duration: '03:10',
    views: '29.8k',
    tags: ['Nikkah', 'Islamabad', 'Wedding Film', 'Emotional', 'Serena Hotel'],
    featured: true
  },
  {
    id: 'item-6',
    title: 'Attabad Lake Turquoise Vows',
    category: 'destination',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
    location: 'Attabad Lake Wooden Pier',
    cityName: 'Hunza Valley',
    clientOrCouple: 'Sara & Omar',
    date: 'July 2025',
    description: 'Scenic couple shoot on a traditional wooden boat gliding over the crystal turquoise waters of Hunza.',
    cameraSpecs: {
      camera: 'Sony A7 IV',
      lens: 'FE 35mm f/1.4 GM',
      setting: '1/1000s | f/2.8 | ISO 100'
    },
    views: '22.5k',
    tags: ['Hunza', 'Attabad Lake', 'Destination Wedding', 'Couple Shoot'],
    featured: false
  },
  {
    id: 'item-7',
    title: 'Qawwali Night & Marigold Radiance',
    category: 'wedding',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    location: 'Royal Palm Club',
    cityName: 'Lahore',
    clientOrCouple: 'Fatima & Shahzaib',
    date: 'November 2025',
    description: 'High-energy celebration featuring live Qawwali performance, vibrant marigold flower showers, and traditional dholak beats.',
    cameraSpecs: {
      camera: 'Sony A7S III',
      lens: 'FE 85mm f/1.4 GM',
      setting: '1/320s | f/1.4 | ISO 1600'
    },
    views: '15.7k',
    tags: ['Qawwali Night', 'Mehndi', 'Lahore', 'Cultural', 'Festive'],
    featured: false
  },
  {
    id: 'item-8',
    title: 'Luxury Automotive Brand Commercial',
    category: 'commercial',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    location: 'Margalla Hills Expressway',
    cityName: 'Islamabad',
    clientOrCouple: 'Exotic Drive Pakistan',
    date: 'January 2026',
    description: 'Cinematic tracking shots using specialized car rig and gimbal setup through mountain twists at golden hour.',
    cameraSpecs: {
      camera: 'Sony FX6 + DJI RS 3 Pro',
      lens: 'FE 16-35mm f/2.8 GM II',
      setting: '4K 120fps'
    },
    duration: '01:15',
    views: '62.0k',
    tags: ['Commercial Ad', 'Automotive', 'Islamabad', 'Gimbal', '4K 120fps'],
    featured: true
  },
  {
    id: 'item-9',
    title: 'High-Fashion Royal Silk Editorial',
    category: 'fashion',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200',
    location: 'Faisalabad Textile Pavilion',
    cityName: 'Faisalabad',
    clientOrCouple: 'Silk Dynasty Apparel',
    date: 'December 2025',
    description: 'Clean studio lighting highlighting flowing luxury silk fabrics with high dynamic range color grading.',
    cameraSpecs: {
      camera: 'Sony A7 IV',
      lens: 'FE 90mm f/2.8 Macro G',
      setting: '1/200s | f/8.0 | ISO 100'
    },
    views: '9.3k',
    tags: ['Fashion', 'Faisalabad', 'Textile', 'Studio Portrait'],
    featured: false
  },
  {
    id: 'item-10',
    title: 'Fairy Meadows Milky Way Nightscape',
    category: 'destination',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    location: 'Fairy Meadows Viewpoint',
    cityName: 'Diamer / Nanga Parbat',
    clientOrCouple: 'Pakistan Travel Expedition',
    date: 'June 2025',
    description: 'Long exposure night photography of Nanga Parbat beneath the shimmering arms of the Milky Way galaxy.',
    cameraSpecs: {
      camera: 'Sony A7S III',
      lens: 'FE 14mm f/1.8 GM',
      setting: '15s | f/1.8 | ISO 3200'
    },
    views: '41.6k',
    tags: ['Destination', 'Astrophotography', 'Nanga Parbat', 'Milky Way'],
    featured: false
  },
  {
    id: 'item-11',
    title: 'Sufi Soul Qawwali Documentary',
    category: 'commercial',
    type: 'video',
    src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200',
    poster: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    location: 'Shrine of Shah Rukn-e-Alam',
    cityName: 'Multan',
    clientOrCouple: 'Cultural Heritage Series',
    date: 'May 2025',
    description: 'Deep acoustic live recording and slow-mo multi-angle camera coverage of spiritual Sufi music in Multan.',
    cameraSpecs: {
      camera: 'Sony FX3 (Dual Setup)',
      lens: 'FE 50mm + 85mm GM',
      setting: '4K S-Cinetone'
    },
    duration: '04:00',
    views: '38.4k',
    tags: ['Multan', 'Sufi Music', 'Documentary', 'Cultural'],
    featured: false
  },
  {
    id: 'item-12',
    title: 'The Modern Bride Studio Session',
    category: 'portrait',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
    location: 'ZAW Studio Studio A',
    cityName: 'Lahore',
    clientOrCouple: 'Anum K.',
    date: 'January 2026',
    description: 'Soft Rembrandt lighting portrait emphasizing natural skin tones, intricate jewelry details, and delicate veil draping.',
    cameraSpecs: {
      camera: 'Sony A7 IV',
      lens: 'FE 85mm f/1.4 GM',
      setting: '1/160s | f/2.0 | ISO 100'
    },
    views: '11.2k',
    tags: ['Bridal Portrait', 'Studio', 'Lahore', 'Jewelry Detail'],
    featured: false
  }
];

export const CITY_COVERAGE_DATA: CityCoverage[] = [
  {
    id: 'city-lahore',
    name: 'Lahore',
    province: 'Punjab',
    shootsDone: 180,
    highlightedVenues: ['Haveli Barood Khana', 'Royal Palm', 'Garrison Golf Club', 'Monal Lahore', 'Pervaiz Elahi Garden'],
    travelFeePolicy: 'Home City Base (No extra travel fee)',
    popularType: 'Royal Baraats, Qawwali Nights & Fashion Shoots',
    lat: 31.5204,
    lng: 74.3587,
    image: heroWedding
  },
  {
    id: 'city-islamabad',
    name: 'Islamabad / Rawalpindi',
    province: 'Capital Territory',
    shootsDone: 95,
    highlightedVenues: ['Serena Hotel', 'Marriott Islamabad', 'Margalla Hills Viewpoints', 'Islamabad Club', 'Monal Capital'],
    travelFeePolicy: 'Complimentary travel for Signature Packages',
    popularType: 'Outdoor Lawn Weddings & Cinematic Pre-Weddings',
    lat: 33.6844,
    lng: 73.0479,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'city-karachi',
    name: 'Karachi',
    province: 'Sindh',
    shootsDone: 45,
    highlightedVenues: ['Mohatta Palace', 'Pearl Continental', 'Beach Luxury Hotel', 'French Beach', 'Marriott Karachi'],
    travelFeePolicy: 'Actual flight & logistics only',
    popularType: 'Luxury Beachside Walimas & Brand Commercials',
    lat: 24.8607,
    lng: 67.0011,
    image: fashionShoot
  },
  {
    id: 'city-skardu',
    name: 'Skardu & Hunza',
    province: 'Gilgit-Baltistan',
    shootsDone: 28,
    highlightedVenues: ['Shangrila Resort', 'Katpana Cold Desert', 'Attabad Lake', 'Passu Cones', 'Khaplu Palace'],
    travelFeePolicy: 'All-inclusive destination crew package',
    popularType: 'Epic 4K Drone Pre-Wedding & Couple Story Films',
    lat: 35.2971,
    lng: 75.6333,
    image: destinationSkardu
  },
  {
    id: 'city-faisalabad',
    name: 'Faisalabad',
    province: 'Punjab',
    shootsDone: 22,
    highlightedVenues: ['Serena Hotel Faisalabad', 'Chenab Club', 'Garment Studio Complex'],
    travelFeePolicy: 'Nominal fuel transfer fee',
    popularType: 'Textile Brand Commercials & Grand Weddings',
    lat: 31.4504,
    lng: 73.1350,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'city-multan',
    name: 'Multan',
    province: 'Punjab',
    shootsDone: 18,
    highlightedVenues: ['Ramada Multan', 'Shrine Precincts', 'Sufi Heritage Mansions'],
    travelFeePolicy: 'Nominal travel charge',
    popularType: 'Traditional Heritage Weddings & Sufi Documentaries',
    lat: 30.1575,
    lng: 71.5249,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=600'
  }
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Amina & Hamza Shah',
    eventType: 'Full Royal Wedding (3 Days)',
    location: 'Lahore',
    rating: 5,
    comment: 'ZOHAIB AND THE ZAW FILMS CREW ARE absolute wizards! Watching our wedding film felt like watching a Netflix movie. The lighting, drone shots over Haveli Barood Khana, and emotional framing brought tears to everyone. Best decision we made!',
    date: 'Nov 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-2',
    clientName: 'Bilal Chaudhry',
    eventType: 'Destination Shoot in Skardu',
    location: 'Skardu, Gilgit-Baltistan',
    rating: 5,
    comment: 'We flew ZAW Films to Skardu for our pre-wedding shoot. The drone work over Katpana Desert and Shangrila is breathtaking! They handled all logistics smoothly and delivered our teasers within 48 hours.',
    date: 'Sep 2025',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-3',
    clientName: 'Sara Khan (Zari Couture)',
    eventType: 'Fashion Campaign Shoot',
    location: 'Karachi',
    rating: 5,
    comment: 'As a brand owner, colors and fabric detail mean everything. ZAW Films delivered crisp, 4K high-speed video and photography that boosted our Instagram engagement by 300%. Super professional crew!',
    date: 'Dec 2025',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-4',
    clientName: 'Mahnoor & Saad',
    eventType: 'Nikkah & Reception',
    location: 'Serena Hotel, Islamabad',
    rating: 5,
    comment: 'The team was so polite and unobtrusive during our Nikkah ritual, yet they caught every single glance and smile. The album print quality is world-class.',
    date: 'Aug 2025',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];

export const GEAR_ARSENAL: GearItem[] = [
  {
    id: 'g-1',
    category: 'Cameras & Lenses',
    name: 'Sony FX6 & FX3 Cinema Line',
    specs: 'Full-Frame 4K 120fps | 15+ Stops Dynamic Range | S-Cinetone',
    description: 'Netflix-approved cinema cameras providing organic color reproduction and unmatched low-light performance.'
  },
  {
    id: 'g-2',
    category: 'Cameras & Lenses',
    name: 'Sony G-Master Prime Lenses',
    specs: '24mm f/1.4, 35mm f/1.4, 50mm f/1.2, 85mm f/1.4 GM',
    description: 'Ultra-fast razor-sharp glass yielding creamy background separation and magical lighting flare.'
  },
  {
    id: 'g-3',
    category: 'Drones & Stabilization',
    name: 'DJI Mavic 3 Pro Cine 4K',
    specs: 'Triple Camera System | Apple ProRes 422 HQ | Hasselblad 4K',
    description: 'Licensed aerial drone platform capturing majestic landscape panoramas and smooth dynamic tracking shots.'
  },
  {
    id: 'g-4',
    category: 'Drones & Stabilization',
    name: 'DJI RS 3 Pro Electronic Gimbal',
    specs: 'Carbon Fiber Arms | LiDAR Focus System | Automated Locks',
    description: 'Flawless camera stabilization for cinematic continuous handheld walking and running takes.'
  },
  {
    id: 'g-5',
    category: 'Audio & Lighting',
    name: 'Aputure & Godox Cinema Lighting',
    specs: '600d Pro Daylight | Amaran RGB Tubes | Softboxes & Grids',
    description: 'Custom soft studio key lighting and ambient accent tube lights to illuminate venue decor and portraits.'
  },
  {
    id: 'g-6',
    category: 'Audio & Lighting',
    name: 'RØDE Wireless PRO & Zoom Recorders',
    specs: '32-Bit Float Audio | Dual Lavalier | Direct Soundboard Tap',
    description: 'Crystal-clear 32-bit float audio capture ensuring zero clipped audio during Qawwali beats, speeches, and vows.'
  }
];
