import { useState } from 'react';
import type { Item } from '../../types/vehicle';
import { formatPrice } from '../../utils/formatters';
import { WHATSAPP_BUSINESS } from '../../utils/constants';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Item;
}

export default function WhatsAppModal({ isOpen, onClose, vehicle }: WhatsAppModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shippingMethod: 'sea',
  });

  if (!isOpen) return null;

  const isVehicle = vehicle.mainCategory === 'vehicles';
  const itemTitle = isVehicle
    ? `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
    : vehicle.name;
  const emoji = isVehicle ? '🚗' : '🔧';
  const itemType = isVehicle ? 'VÉHICULE' : 'ÉQUIPEMENT';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const shippingText =
      formData.shippingMethod === 'air'
        ? '✈️ Aérienne (5-7 jours)'
        : '🚢 Maritime (25-35 jours)';

    const message = `
${emoji} *COMMANDE ${itemType}*

*Client:* ${formData.name}
*Tel:* ${formData.phone}

*${itemType}:* ${itemTitle}
*Prix:* ${formatPrice(vehicle.price)}

*Livraison:* ${shippingText}

---
_Commande via le site web_
    `.trim();

    const url = `https://wa.me/${WHATSAPP_BUSINESS}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl transform transition-all max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-xl font-bold text-gray-900">
              Commander cet {isVehicle ? 'véhicule' : 'équipement'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Item Summary */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex gap-4">
              <img
                src={vehicle.thumbnail}
                alt={itemTitle}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">{itemTitle}</h3>
                <p className="text-gray-600">
                  {isVehicle ? vehicle.year : vehicle.brand}
                </p>
                <p className="text-xl font-bold text-[#1e88e5] mt-1">
                  {formatPrice(vehicle.price)}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Votre nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Jean Dupont"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+237 6XX XXX XXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Shipping Method */}
            <div>
              <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-1">
                Méthode de livraison <span className="text-red-500">*</span>
              </label>
              <select
                id="shipping"
                required
                value={formData.shippingMethod}
                onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e88e5] focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="sea">🚢 Maritime (25-35 jours) - Économique</option>
                <option value="air">✈️ Aérienne (5-7 jours) - Rapide</option>
              </select>
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Paiement:</strong> Acompte de 15% à la commande • Solde à la livraison
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#1FA855] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Envoyer sur WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
