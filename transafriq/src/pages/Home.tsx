import { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import QuickFilterChips from '../components/home/QuickFilterChips';
import VehicleCard from '../components/home/VehicleCard';
import FloatingWhatsAppButton from '../components/home/FloatingWhatsAppButton';
import { mockVehicles } from '../data/mockVehicles';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filteredVehicles = useMemo(() => {
    if (activeFilter === 'Tout') {
      return mockVehicles;
    }
    return mockVehicles.filter((vehicle) => vehicle.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <QuickFilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <main className="container mx-auto px-3 py-6 max-w-7xl">
        {/* Vehicle Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun véhicule disponible dans cette catégorie.</p>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredVehicles.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-colors shadow-md">
              Charger plus
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Paiement sécurisé</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <span className="text-2xl">🟧 Orange Money</span>
              <span className="text-2xl">📱 MTN</span>
              <span className="text-2xl">🌊 Wave</span>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 TransAfriq. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsAppButton />
    </div>
  );
};

export default Home;
