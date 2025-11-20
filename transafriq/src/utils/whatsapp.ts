import { formatPrice } from './formatters';

interface OrderData {
  customerName: string;
  phone: string;
  vehicle: {
    brand: string;
    model: string;
    year: number;
    price: number;
  };
  shippingMethod: 'air' | 'sea';
}

export const formatWhatsAppMessage = (data: OrderData): string => {
  const { customerName, phone, vehicle, shippingMethod } = data;

  const shipping = shippingMethod === 'air'
    ? '📦 Aérienne (5-7 jours)'
    : '🚢 Maritime (25-35 jours)';

  return `
🚗 *COMMANDE VÉHICULE*

*Client:* ${customerName}
*Tel:* ${phone}

*Véhicule:* ${vehicle.brand} ${vehicle.model} ${vehicle.year}
*Prix:* ${formatPrice(vehicle.price)}

*Livraison:* ${shipping}

---
_Commande via le site web_
  `.trim();
};

export const sendWhatsAppOrder = (businessPhone: string, message: string): void => {
  const url = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export const sendGeneralWhatsAppMessage = (businessPhone: string, defaultMessage: string = "Bonjour, je suis intéressé par vos véhicules."): void => {
  const url = `https://wa.me/${businessPhone}?text=${encodeURIComponent(defaultMessage)}`;
  window.open(url, '_blank');
};
