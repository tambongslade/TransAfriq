import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiShare } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/layout/Header';
import ImageGallery from '../components/vehicle/ImageGallery';
import WhatsAppModal from '../components/vehicle/WhatsAppModal';
import { mockVehicles } from '../data/mockVehicles';
import { formatPrice } from '../utils/formatters';

const VehicleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Véhicule non trouvé</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[var(--primary)] hover:underline"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
          text: `Découvrez ce véhicule: ${vehicle.brand} ${vehicle.model} à ${formatPrice(vehicle.price)}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Top Navigation */}
      <div className="sticky top-[61px] z-30 bg-white border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            <span className="font-medium">Retour</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            <HiShare className="text-xl" />
            <span className="font-medium">Partager</span>
          </button>
        </div>
      </div>

      <main className="container mx-auto max-w-4xl">
        {/* Image Gallery */}
        <ImageGallery images={vehicle.images} alt={`${vehicle.brand} ${vehicle.model}`} />

        {/* Vehicle Info */}
        <div className="bg-white p-4 md:p-6">
          {/* Title & Price */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {vehicle.brand} {vehicle.model} {vehicle.year}
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
              {formatPrice(vehicle.price)}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 Caractéristiques</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span>⛽</span>
                <span>{vehicle.specs.fuelType}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>🔧</span>
                <span>{vehicle.specs.transmission}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>📏</span>
                <span>{vehicle.specs.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>🎨</span>
                <span>{vehicle.specs.color}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>🚪</span>
                <span>{vehicle.specs.doors} portes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>💺</span>
                <span>{vehicle.specs.seats} places</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>🏷️</span>
                <span>{vehicle.specs.condition}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>⚙️</span>
                <span>{vehicle.specs.engineSize}</span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">📦 Livraison</h2>
            <div className="space-y-2 text-gray-700">
              <p>🚢 Maritime: 25-35 jours</p>
              <p>✈️ Aérienne: 5-7 jours</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mb-6 bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">💰 Paiement</h2>
            <div className="space-y-2 text-gray-700">
              <p>• 15% à la commande</p>
              <p>• 85% à la livraison</p>
              <p className="text-sm mt-2">Moyens acceptés: Orange Money, MTN, Wave</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">📝 Description</h2>
            <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
          </div>

          {/* Features */}
          {vehicle.features.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">✨ Équipements</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[var(--primary)]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-dark)] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Commander sur WhatsApp
          </button>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={modalOpen} vehicle={vehicle} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default VehicleDetail;
