import { useState, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/home/SearchBar';
import QuickFilterChips from '../components/home/QuickFilterChips';
import VehicleCard from '../components/home/VehicleCard';
import FloatingWhatsAppButton from '../components/home/FloatingWhatsAppButton';
import PartnerLogos from '../components/common/PartnerLogos';
import { mockVehicles } from '../data/mockVehicles';
import { mockEquipment } from '../data/mockEquipment';
import type { VehicleCategory, EquipmentCategory, MainCategory, Item } from '../types/vehicle';

export default function Home() {
  const [mainCategory, setMainCategory] = useState<MainCategory>('vehicles');
  const [activeVehicleCategory, setActiveVehicleCategory] = useState<VehicleCategory>('Tout');
  const [activeEquipmentCategory, setActiveEquipmentCategory] = useState<EquipmentCategory>('Tout');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Get current data source and category based on main category
  const currentItems = mainCategory === 'vehicles' ? mockVehicles : mockEquipment;
  const activeCategory = mainCategory === 'vehicles' ? activeVehicleCategory : activeEquipmentCategory;

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    let filtered: Item[] = currentItems;

    // Filter by category
    if (activeCategory !== 'Tout') {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((item) => {
        if (item.mainCategory === 'vehicles') {
          return (
            item.brand.toLowerCase().includes(query) ||
            item.model.toLowerCase().includes(query) ||
            `${item.brand} ${item.model}`.toLowerCase().includes(query) ||
            item.year.toString().includes(query)
          );
        } else {
          return (
            item.name.toLowerCase().includes(query) ||
            item.brand.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
          );
        }
      });
    }

    return filtered;
  }, [currentItems, activeCategory, searchQuery]);

  // Limit to 8 items initially, show all when clicked
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 8);
  const hasMore = filteredItems.length > 8;

  // Handle main category change
  const handleMainCategoryChange = (category: MainCategory) => {
    setMainCategory(category);
    setShowAll(false);
    setSearchQuery('');
  };

  // Handle subcategory change
  const handleCategoryChange = (category: VehicleCategory | EquipmentCategory) => {
    if (mainCategory === 'vehicles') {
      setActiveVehicleCategory(category as VehicleCategory);
    } else {
      setActiveEquipmentCategory(category as EquipmentCategory);
    }
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Category Switcher */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex gap-2 py-3">
            <button
              onClick={() => handleMainCategoryChange('vehicles')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                mainCategory === 'vehicles'
                  ? 'bg-[#1e88e5] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🚗 Véhicules
            </button>
            <button
              onClick={() => handleMainCategoryChange('equipment')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                mainCategory === 'equipment'
                  ? 'bg-[#1e88e5] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🔧 Équipements
            </button>
          </div>
        </div>
      </div>

      <QuickFilterChips
        mainCategory={mainCategory}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6">
        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filteredItems.length}</span>{' '}
            {mainCategory === 'vehicles'
              ? filteredItems.length === 1
                ? 'véhicule trouvé'
                : 'véhicules trouvés'
              : filteredItems.length === 1
              ? 'équipement trouvé'
              : 'équipements trouvés'}
          </p>
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayedItems.map((item) => (
            <VehicleCard key={item.id} vehicle={item} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && !showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#1e88e5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1976d2] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Voir plus {mainCategory === 'vehicles' ? 'de véhicules' : "d'équipements"} (
              {filteredItems.length - 8} restants)
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {mainCategory === 'vehicles' ? 'Aucun véhicule trouvé' : 'Aucun équipement trouvé'}
            </h3>
            <p className="text-gray-500">
              Essayez une autre catégorie ou contactez-nous sur WhatsApp
            </p>
          </div>
        )}
      </main>

      {/* Footer with Partner Logos */}
      <footer className="mt-16">
        <PartnerLogos />

        {/* Footer Links */}
        <div className="bg-[#1a1d2e] text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* About */}
              <div>
                <h4 className="font-semibold mb-3">TransAfriq</h4>
                <p className="text-sm text-gray-300">
                  Achetez à l'international et recevez en Afrique avec confiance.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-3">Liens rapides</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#accueil" className="hover:text-[#f9a825] transition-colors">
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a href="#comment-ca-marche" className="hover:text-[#f9a825] transition-colors">
                      Comment ça marche
                    </a>
                  </li>
                  <li>
                    <a href="#a-propos" className="hover:text-[#f9a825] transition-colors">
                      À propos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✈️ Transport Aérien</li>
                  <li>🚢 Fret Maritime</li>
                  <li>🚚 Transport Routier</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>📧 contact@transafriq.com</li>
                  <li>📱 +237 XXX XXX XXX</li>
                  <li>📍 Douala, Cameroun</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
              <p>© 2025 TransAfriq. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
