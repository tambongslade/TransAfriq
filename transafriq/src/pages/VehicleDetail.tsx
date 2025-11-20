import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiCalendar } from 'react-icons/hi';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { MdSpeed, MdSettings } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/layout/Header';
import { mockVehicles } from '../data/mockVehicles';
import { formatPrice } from '../utils/formatters';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 text-lg">Véhicule non trouvé</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je suis intéressé par le ${vehicle.brand} ${vehicle.model} (${vehicle.year}) au prix de ${formatPrice(vehicle.price)}.`;
    const whatsappUrl = `https://wa.me/237690000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-4 min-h-[44px]"
        >
          <HiArrowLeft className="text-xl" />
          <span className="font-medium">Retour</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-primary-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Aperçu ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="space-y-6">
            {/* Header with Price */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {vehicle.brand} {vehicle.model}
                  </h1>
                  <p className="text-gray-600">{vehicle.year}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary-600">{formatPrice(vehicle.price)}</p>
                  {vehicle.available ? (
                    <span className="inline-block mt-2 px-3 py-1 bg-success-500 text-white text-sm font-medium rounded-full">
                      Disponible
                    </span>
                  ) : (
                    <span className="inline-block mt-2 px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                      Vendu
                    </span>
                  )}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <HiCalendar className="text-2xl text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-500">Année</p>
                    <p className="font-semibold text-gray-900">{vehicle.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdSpeed className="text-2xl text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-500">Kilométrage</p>
                    <p className="font-semibold text-gray-900">{vehicle.specs.mileage.toLocaleString()} km</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BsFillFuelPumpFill className="text-2xl text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-500">Carburant</p>
                    <p className="font-semibold text-gray-900">{vehicle.specs.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdSettings className="text-2xl text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold text-gray-900">{vehicle.specs.transmission}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full mt-6 px-6 py-4 bg-success-500 text-white font-semibold rounded-lg hover:bg-success-600 transition-colors shadow-md flex items-center justify-center gap-3 min-h-[44px]"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Contacter via WhatsApp</span>
              </button>
            </div>

            {/* Additional Specs */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Moteur</p>
                  <p className="font-semibold text-gray-900">{vehicle.specs.engineSize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Portes</p>
                  <p className="font-semibold text-gray-900">{vehicle.specs.doors}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Places</p>
                  <p className="font-semibold text-gray-900">{vehicle.specs.seats}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Couleur</p>
                  <p className="font-semibold text-gray-900">{vehicle.specs.color}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">État</p>
                  <p className="font-semibold text-gray-900">{vehicle.specs.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Catégorie</p>
                  <p className="font-semibold text-gray-900">{vehicle.category}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Features */}
            {vehicle.features.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Équipements</h2>
                <ul className="grid grid-cols-1 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehicleDetail;
