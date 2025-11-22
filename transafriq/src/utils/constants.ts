export const WHATSAPP_BUSINESS = '+237XXXXXXXXX'; // Replace with actual number

export const VEHICLE_CATEGORIES = [
  'Tout',
  'SUV',
  'Berline',
  'Pick-up',
  'Camionnette',
  'Sport',
] as const;

export const EQUIPMENT_CATEGORIES = [
  'Tout',
  'Réfrigérateur',
  'Machine à Shawarma',
  'Glacière',
  'Four',
  'Cuisinière',
  'Autre',
] as const;

export const PAYMENT_PARTNERS = [
  { name: 'Orange Money', color: '#FF6600' },
  { name: 'MTN Mobile Money', color: '#FFCC00' },
  { name: 'Wave', color: '#00D9FF' },
];

export const SHIPPING_METHODS = {
  air: {
    name: 'Aérienne',
    icon: '✈️',
    duration: '5-7 jours',
  },
  sea: {
    name: 'Maritime',
    icon: '🚢',
    duration: '25-35 jours',
  },
};
