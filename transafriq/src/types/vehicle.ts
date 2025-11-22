// Main category types
export type MainCategory = 'vehicles' | 'equipment';

// Vehicle Interface
export interface Vehicle {
  id: string;
  mainCategory: 'vehicles';

  // Basic Info
  brand: string; // e.g., "GMC"
  model: string; // e.g., "TERRAIN SLE AWD"
  year: number; // e.g., 2021
  price: number; // in XAF

  // Full title (optional, for scraped data)
  title?: string; // e.g., "2021 GMC TERRAIN SLE AWD"

  // Images
  thumbnail: string;
  images: string[];

  // Specifications (all optional for flexibility with scraped data)
  specs: {
    fuelType?: 'Essence' | 'Diesel' | 'Électrique' | 'Hybride';
    transmission?: 'Manuel' | 'Automatique' | 'Automatic' | 'Manual';
    mileage?: number; // in km
    engineSize?: string; // e.g., "4 cylinder", "V6", "2.0L"
    driveType?: string; // e.g., "AWD", "FWD", "4WD", "RWD"
    doors?: number;
    seats?: number;
    color?: string;
    condition: 'Neuf' | 'Occasion';
    vin?: string; // Vehicle Identification Number
    location?: string; // e.g., "Delivered to Ouaga HT by order"
  };

  // Description
  description: string;
  features: string[];

  // Category
  category: 'SUV' | 'Berline' | 'Pick-up' | 'Camionnette' | 'Sport' | 'Autre';

  // Status
  available: boolean;
  featured: boolean;

  // Source info (for scraped vehicles)
  source?: string; // e.g., "AuctionExport", "Facebook"
  sourceUrl?: string; // Original listing URL

  // Metadata
  createdAt: string;
  updatedAt: string;
}

// Equipment Interface
export interface Equipment {
  id: string;
  mainCategory: 'equipment';

  // Basic Info
  name: string;
  brand: string;
  model?: string;
  price: number; // in XAF

  // Images
  thumbnail: string;
  images: string[];

  // Specifications
  specs: {
    power?: string; // e.g., "220V", "380V"
    capacity?: string; // e.g., "500L", "200kg"
    dimensions?: string; // e.g., "180x80x200cm"
    weight?: string;
    condition: 'Neuf' | 'Occasion';
  };

  // Description
  description: string;
  features: string[];

  // Category
  category: 'Réfrigérateur' | 'Machine à Shawarma' | 'Glacière' | 'Four' | 'Cuisinière' | 'Autre';

  // Status
  available: boolean;
  featured: boolean;

  // Metadata
  createdAt: string;
  updatedAt: string;
}

// Union type for all items
export type Item = Vehicle | Equipment;

export type VehicleCategory = 'Tout' | 'SUV' | 'Berline' | 'Pick-up' | 'Camionnette' | 'Sport';
export type EquipmentCategory = 'Tout' | 'Réfrigérateur' | 'Machine à Shawarma' | 'Glacière' | 'Four' | 'Cuisinière' | 'Autre';
