import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça marche ?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Commandez votre véhicule ou équipement en 4 étapes simples
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Steps Section */}
        <section className="mb-16">
          <div className="space-y-12">

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#1e88e5] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Parcourez Notre Catalogue
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Explorez notre large sélection de véhicules et équipements. Utilisez les filtres pour trouver exactement ce que vous cherchez : catégorie, marque, année, prix, etc.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#1e88e5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Plus de 100 véhicules disponibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#1e88e5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Équipements professionnels neufs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#1e88e5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Photos et descriptions détaillées</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                    <span className="text-6xl">🔍</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2">
                      <div className="h-3 bg-blue-200 rounded flex-1"></div>
                      <div className="h-3 bg-blue-200 rounded w-20"></div>
                      <div className="h-3 bg-blue-200 rounded w-16"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Contactez-nous via WhatsApp
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Une fois que vous avez trouvé le véhicule ou l'équipement qui vous intéresse, cliquez sur "Commander" et remplissez le formulaire. Vous serez redirigé vers WhatsApp pour finaliser votre commande.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Message pré-rempli avec les détails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Réponse rapide de notre équipe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Support personnalisé</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="bg-[#25D366] rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">TransAfriq</p>
                        <p className="text-xs text-green-100">En ligne</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-gray-800">
                      <p className="text-sm">🚗 <strong>COMMANDE VÉHICULE</strong></p>
                      <p className="text-xs mt-2">Client: Jean Dupont</p>
                      <p className="text-xs">Véhicule: Toyota Camry 2020</p>
                      <p className="text-xs">Prix: 15,000,000 FCFA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#f9a825] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Payez l'Acompte de 15%
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Pour confirmer votre commande et réserver votre véhicule ou équipement, versez un acompte de 15% du prix total. Nous acceptons plusieurs méthodes de paiement pour votre convenance.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>
                      <strong>Modes de paiement:</strong> Orange Money, MTN Mobile Money, Wave, ou en espèces
                    </span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f9a825] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Confirmation immédiate de la réservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#f9a825] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Reçu de paiement envoyé</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <span className="font-semibold text-gray-800">Orange Money</span>
                      </div>
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <span className="font-semibold text-gray-800">MTN Mobile Money</span>
                      </div>
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <span className="font-semibold text-gray-800">Wave</span>
                      </div>
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">💵</span>
                        </div>
                        <span className="font-semibold text-gray-800">Espèces</span>
                      </div>
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Recevez Votre Commande
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Une fois l'acompte reçu, nous procédons à l'expédition. Vous recevrez des mises à jour régulières sur l'état de votre livraison. À la réception, payez le solde de 85% et profitez de votre achat !
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Suivi en temps réel de votre expédition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Livraison à domicile possible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Tous les documents fournis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Support après-vente disponible</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2">Livraison Réussie!</h3>
                    <p className="text-green-100 mb-6">
                      Votre véhicule est arrivé à destination
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Délai de livraison:</span>
                        <span className="text-sm font-bold">28 jours</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Mode:</span>
                        <span className="text-sm font-bold">🚢 Maritime</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">État:</span>
                        <span className="text-sm font-bold">✓ Parfait</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Timeline Summary */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Délais de Livraison
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🚢</span>
                  <h3 className="text-xl font-bold text-gray-900">Livraison Maritime</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">25-35 jours</p>
                <p className="text-gray-600">
                  Option économique idéale pour les véhicules. Port de Douala.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">✈️</span>
                  <h3 className="text-xl font-bold text-gray-900">Livraison Aérienne</h3>
                </div>
                <p className="text-3xl font-bold text-yellow-600 mb-2">5-7 jours</p>
                <p className="text-gray-600">
                  Option rapide recommandée pour les équipements. Aéroport de Douala.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Puis-je voir le véhicule avant de payer ?
              </h3>
              <p className="text-gray-600">
                Nous fournissons des photos détaillées et pouvons organiser une inspection vidéo en direct si nécessaire.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Les frais de douane sont-ils inclus ?
              </h3>
              <p className="text-gray-600">
                Les prix affichés incluent tous les frais de transport. Les frais de dédouanement sont à la charge du client.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Puis-je annuler ma commande ?
              </h3>
              <p className="text-gray-600">
                Vous pouvez annuler avant l'expédition. L'acompte est remboursé à 80% pour couvrir les frais administratifs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Offrez-vous une garantie ?
              </h3>
              <p className="text-gray-600">
                Les équipements neufs sont garantis par le fabricant. Pour les véhicules, nous garantissons l'état décrit.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Parcourez notre catalogue et trouvez ce que vous cherchez
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-[#1e88e5] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Voir le Catalogue
            </Link>
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1FA855] transition-colors inline-block"
            >
              Nous Contacter
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
