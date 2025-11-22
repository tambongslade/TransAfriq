import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Import de véhicules et équipements professionnels de qualité depuis les États-Unis
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Import Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services d'Import
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous facilitons l'importation de véhicules et équipements professionnels pour nos clients au Cameroun
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vehicles */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#1e88e5]">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Import de Véhicules
              </h3>
              <p className="text-gray-600 mb-6">
                Large sélection de véhicules d'occasion et neufs provenant des États-Unis
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Voitures, SUV, pick-up et camions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Inspection complète avant expédition</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Documentation complète fournie</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantie de qualité</span>
                </li>
              </ul>
            </div>

            {/* Equipment */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#f9a825]">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Équipements Professionnels
              </h3>
              <p className="text-gray-600 mb-6">
                Équipements de qualité pour restaurants, hôtels et commerces
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Réfrigérateurs et congélateurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Machines à shawarma professionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fours, cuisinières et friteuses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Équipement neuf et garanti</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Méthodes de Livraison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la méthode de livraison qui correspond à vos besoins et budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sea Shipping */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🚢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Livraison Maritime
                  </h3>
                  <p className="text-blue-600 font-semibold">Économique</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Délai de livraison</span>
                  <span className="font-bold text-gray-900">25-35 jours</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Idéal pour</span>
                  <span className="font-bold text-gray-900">Véhicules lourds</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Avantage</span>
                  <span className="font-bold text-green-600">Prix réduit</span>
                </div>
              </div>
            </div>

            {/* Air Shipping */}
            <div className="bg-white rounded-2xl shadow-lg p-8 ring-2 ring-[#f9a825]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">✈️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Livraison Aérienne
                  </h3>
                  <p className="text-[#f9a825] font-semibold">Rapide</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Délai de livraison</span>
                  <span className="font-bold text-gray-900">5-7 jours</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Idéal pour</span>
                  <span className="font-bold text-gray-900">Équipements</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Avantage</span>
                  <span className="font-bold text-green-600">Ultra rapide</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalités de Paiement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Paiement flexible et sécurisé avec nos partenaires de confiance
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Acompte de 15%
                  </h4>
                  <p className="text-gray-600">
                    À la confirmation de la commande pour réserver votre véhicule ou équipement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Solde de 85%
                  </h4>
                  <p className="text-gray-600">
                    À la livraison à Douala ou dans votre ville
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Moyens de Paiement Acceptés
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <p className="text-sm font-semibold text-gray-700">Espèces</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-sm font-semibold text-gray-700">Orange Money</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-sm font-semibold text-gray-700">MTN Mobile Money</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-sm font-semibold text-gray-700">Wave</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Supplémentaires
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Inspection Complète
              </h3>
              <p className="text-gray-600">
                Vérification minutieuse avant expédition
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Livraison à Domicile
              </h3>
              <p className="text-gray-600">
                Livraison directement à votre porte
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Support Client 24/7
              </h3>
              <p className="text-gray-600">
                Assistance à chaque étape du processus
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commander ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Parcourez notre catalogue et trouvez le véhicule ou équipement parfait pour vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-[#1e88e5] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              🚗 Voir les Véhicules
            </Link>
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1FA855] transition-colors inline-block"
            >
              💬 Nous Contacter
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
