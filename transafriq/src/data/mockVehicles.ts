import type { Vehicle } from '../types/vehicle';

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 15000000,
    thumbnail: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Essence',
      transmission: 'Automatique',
      mileage: 45000,
      engineSize: '2.5L',
      doors: 4,
      seats: 5,
      color: 'Noir',
      condition: 'Occasion'
    },
    description: 'Toyota Camry 2020 en excellent état. Véhicule bien entretenu avec historique complet. Idéal pour les déplacements en ville et sur autoroute.',
    features: [
      'Climatisation automatique',
      'Système de navigation GPS',
      'Caméra de recul',
      'Sièges en cuir',
      'Bluetooth',
      'Régulateur de vitesse'
    ],
    category: 'Berline',
    available: true,
    featured: true,
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15'
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'CR-V',
    year: 2021,
    price: 18500000,
    thumbnail: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Essence',
      transmission: 'Automatique',
      mileage: 32000,
      engineSize: '1.5L Turbo',
      doors: 5,
      seats: 5,
      color: 'Blanc',
      condition: 'Occasion'
    },
    description: 'Honda CR-V 2021, SUV spacieux et confortable. Parfait pour les familles. Économique et fiable.',
    features: [
      'Toit ouvrant panoramique',
      'Climatisation tri-zone',
      'Apple CarPlay & Android Auto',
      'Caméra 360°',
      'Sièges chauffants',
      'Hayon électrique'
    ],
    category: 'SUV',
    available: true,
    featured: true,
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14'
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Hilux',
    year: 2022,
    price: 22000000,
    thumbnail: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Diesel',
      transmission: 'Manuel',
      mileage: 25000,
      engineSize: '2.8L',
      doors: 4,
      seats: 5,
      color: 'Gris',
      condition: 'Occasion'
    },
    description: 'Toyota Hilux 2022 Double Cabine. Robuste et fiable, parfait pour tous terrains. Capacité de charge excellente.',
    features: [
      '4x4',
      'Climatisation',
      'Radio MP3',
      'Verrouillage centralisé',
      'Airbags',
      'Barre de protection arrière'
    ],
    category: 'Pick-up',
    available: true,
    featured: false,
    createdAt: '2025-01-13',
    updatedAt: '2025-01-13'
  },
  {
    id: '4',
    brand: 'Mercedes-Benz',
    model: 'GLE 350',
    year: 2021,
    price: 35000000,
    thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Hybride',
      transmission: 'Automatique',
      mileage: 18000,
      engineSize: '3.0L',
      doors: 5,
      seats: 7,
      color: 'Noir',
      condition: 'Occasion'
    },
    description: 'Mercedes-Benz GLE 350 2021, SUV de luxe avec toutes les options. Confort et performance réunis.',
    features: [
      'Système MBUX',
      'Sièges en cuir Nappa',
      'Toit panoramique',
      'Système audio Burmester',
      'Suspension pneumatique',
      'Pack AMG'
    ],
    category: 'SUV',
    available: true,
    featured: true,
    createdAt: '2025-01-12',
    updatedAt: '2025-01-12'
  },
  {
    id: '5',
    brand: 'Nissan',
    model: 'Patrol',
    year: 2020,
    price: 28000000,
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Essence',
      transmission: 'Automatique',
      mileage: 55000,
      engineSize: '5.6L V8',
      doors: 5,
      seats: 8,
      color: 'Blanc',
      condition: 'Occasion'
    },
    description: 'Nissan Patrol 2020, grand SUV familial avec 8 places. Puissant et spacieux.',
    features: [
      '4x4',
      'Climatisation arrière',
      'Écran tactile',
      'Caméra de recul',
      '7 airbags',
      'Jantes 18 pouces'
    ],
    category: 'SUV',
    available: true,
    featured: false,
    createdAt: '2025-01-11',
    updatedAt: '2025-01-11'
  },
  {
    id: '6',
    brand: 'BMW',
    model: 'Série 3',
    year: 2021,
    price: 20000000,
    thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Essence',
      transmission: 'Automatique',
      mileage: 28000,
      engineSize: '2.0L',
      doors: 4,
      seats: 5,
      color: 'Bleu',
      condition: 'Occasion'
    },
    description: 'BMW Série 3 2021, berline sportive et élégante. Performance et confort au rendez-vous.',
    features: [
      'Pack M Sport',
      'Sièges sport',
      'Système iDrive',
      'Éclairage LED',
      'Volant M',
      'Jantes 19 pouces'
    ],
    category: 'Berline',
    available: true,
    featured: false,
    createdAt: '2025-01-10',
    updatedAt: '2025-01-10'
  },
  {
    id: '7',
    brand: 'Ford',
    model: 'Ranger',
    year: 2022,
    price: 19500000,
    thumbnail: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Diesel',
      transmission: 'Automatique',
      mileage: 30000,
      engineSize: '2.0L Bi-Turbo',
      doors: 4,
      seats: 5,
      color: 'Rouge',
      condition: 'Occasion'
    },
    description: 'Ford Ranger 2022, pick-up moderne et puissant. Idéal pour le travail et les loisirs.',
    features: [
      '4x4',
      'Écran SYNC 3',
      'Caméra de recul',
      'Climatisation automatique',
      'Sièges en cuir',
      'Barre de protection'
    ],
    category: 'Pick-up',
    available: true,
    featured: true,
    createdAt: '2025-01-09',
    updatedAt: '2025-01-09'
  },
  {
    id: '8',
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 16500000,
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=900&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=900&fit=crop'
    ],
    specs: {
      fuelType: 'Essence',
      transmission: 'Automatique',
      mileage: 38000,
      engineSize: '2.0L',
      doors: 5,
      seats: 5,
      color: 'Argent',
      condition: 'Occasion'
    },
    description: 'Hyundai Tucson 2021, SUV compact et économique. Design moderne et équipement complet.',
    features: [
      'Écran tactile 10.25"',
      'Caméra 360°',
      'Climatisation bi-zone',
      'Régulateur adaptatif',
      'Détection angle mort',
      'Apple CarPlay'
    ],
    category: 'SUV',
    available: true,
    featured: false,
    createdAt: '2025-01-08',
    updatedAt: '2025-01-08'
  }
];
