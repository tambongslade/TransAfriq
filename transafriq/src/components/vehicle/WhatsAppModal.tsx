import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import type { Vehicle } from '../../types/vehicle';
import { formatPrice } from '../../utils/formatters';
import { formatWhatsAppMessage, sendWhatsAppOrder } from '../../utils/whatsapp';
import { WHATSAPP_BUSINESS_NUMBER } from '../../utils/constants';

interface WhatsAppModalProps {
  isOpen: boolean;
  vehicle: Vehicle;
  onClose: () => void;
}

const WhatsAppModal = ({ isOpen, vehicle, onClose }: WhatsAppModalProps) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    shippingMethod: 'sea' as 'air' | 'sea'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = formatWhatsAppMessage({
      customerName: formData.customerName,
      phone: formData.phone,
      vehicle: {
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
        price: vehicle.price
      },
      shippingMethod: formData.shippingMethod
    });

    sendWhatsAppOrder(WHATSAPP_BUSINESS_NUMBER, message);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Commander ce véhicule</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Vehicle Summary */}
            <div className="flex gap-4 p-4 bg-gray-50">
              <img
                src={vehicle.thumbnail}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="text-sm text-gray-500">{vehicle.year}</p>
                <p className="text-lg font-bold text-[var(--primary)] mt-1">
                  {formatPrice(vehicle.price)}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Votre nom *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="Ex: Jean Dupont"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+237 6XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Livraison *
                </label>
                <select
                  required
                  value={formData.shippingMethod}
                  onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value as 'air' | 'sea' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                >
                  <option value="sea">🚢 Maritime (25-35 jours)</option>
                  <option value="air">📦 Aérienne (5-7 jours)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-dark)] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <FaWhatsapp className="text-xl" />
                Envoyer sur WhatsApp
              </button>

              <p className="text-sm text-center text-gray-500">
                💡 Acompte de 15% requis à la commande
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppModal;
