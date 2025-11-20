export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  thumbnail: string;
  images: string[];
  specs: {
    fuelType: 'Essence' | 'Diesel' | 'Électrique' | 'Hybride';
    transmission: 'Manuel' | 'Automatique';
    mileage: number;
    engineSize: string;
    doors: number;
    seats: number;
    color: string;
    condition: 'Neuf' | 'Occasion';
  };
  description: string;
  features: string[];
  category: 'SUV' | 'Berline' | 'Pick-up' | 'Camionnette' | 'Sport';
  available: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
