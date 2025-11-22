import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de TransAfriq
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'import de véhicules et équipements depuis les États-Unis
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Chez <span className="font-bold text-[#1e88e5]">TransAfriq</span>, notre mission est de faciliter l'accès aux véhicules et équipements professionnels de qualité pour les entreprises et particuliers au Cameroun.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Nous croyons que chaque entrepreneur mérite d'avoir accès aux meilleurs outils pour développer son activité, et chaque famille mérite un véhicule fiable et abordable.
              </p>
              <p className="text-lg text-gray-600">
                C'est pourquoi nous avons créé un service d'import transparent, rapide et sécurisé qui vous permet d'acheter directement depuis les États-Unis sans les tracas habituels.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e88e5] mb-2">500+</div>
                  <p className="text-gray-600">Véhicules Importés</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e88e5] mb-2">300+</div>
                  <p className="text-gray-600">Clients Satisfaits</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e88e5] mb-2">5+</div>
                  <p className="text-gray-600">Années d'Expérience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e88e5] mb-2">100%</div>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1e88e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transparence
              </h3>
              <p className="text-gray-600">
                Prix clairs, sans frais cachés. Nous vous tenons informés à chaque étape du processus d'import.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Qualité
              </h3>
              <p className="text-gray-600">
                Inspection rigoureuse de chaque véhicule et équipement avant expédition pour garantir votre satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#f9a825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rapidité
              </h3>
              <p className="text-gray-600">
                Délais d'expédition respectés. Options de livraison maritime et aérienne pour répondre à vos besoins.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Service Client
              </h3>
              <p className="text-gray-600">
                Support disponible 24/7 via WhatsApp pour répondre à toutes vos questions et préoccupations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fiabilité
              </h3>
              <p className="text-gray-600">
                Plus de 5 ans d'expérience et des centaines de clients satisfaits qui nous font confiance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prix Compétitifs
              </h3>
              <p className="text-gray-600">
                Meilleurs prix du marché grâce à nos partenariats directs avec les fournisseurs américains.
              </p>
            </div>

          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Notre Histoire
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
              <p className="text-lg">
                <span className="font-bold text-[#1e88e5]">TransAfriq</span> a été fondée en 2019 par une équipe d'entrepreneurs camerounais passionnés par l'import-export et déterminés à simplifier l'accès aux véhicules et équipements américains de qualité.
              </p>
              <p className="text-lg">
                Tout a commencé lorsque nous avons réalisé à quel point il était difficile et coûteux pour les Camerounais d'importer des véhicules et équipements fiables depuis les États-Unis. Entre les intermédiaires multiples, les frais cachés, et le manque de transparence, beaucoup abandonnaient leur projet ou se retrouvaient avec des produits ne correspondant pas à leurs attentes.
              </p>
              <p className="text-lg">
                Nous avons donc décidé de créer une solution simple, transparente et fiable. En établissant des partenariats directs avec des fournisseurs américains de confiance et en optimisant notre chaîne logistique, nous avons pu réduire les coûts tout en améliorant la qualité du service.
              </p>
              <p className="text-lg">
                Aujourd'hui, après plus de <span className="font-bold text-[#1e88e5]">500 véhicules</span> et équipements importés avec succès, nous sommes fiers d'être le choix privilégié de centaines d'entreprises et de familles à travers le Cameroun.
              </p>
              <p className="text-lg font-semibold text-[#1e88e5]">
                Notre engagement reste le même : vous offrir le meilleur service d'import au meilleur prix, avec la tranquillité d'esprit que vous méritez.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Pourquoi Nous Choisir ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🇺🇸</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Import Direct depuis les USA
                </h3>
                <p className="text-gray-600">
                  Partenariats avec les plus grandes plateformes américaines pour vous garantir le meilleur choix et les meilleurs prix.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Documentation Complète
                </h3>
                <p className="text-gray-600">
                  Tous les papiers nécessaires fournis pour faciliter l'immatriculation et la mise en circulation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Inspection Professionnelle
                </h3>
                <p className="text-gray-600">
                  Vérification complète de l'état mécanique et esthétique avant expédition avec rapport détaillé.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Suivi en Temps Réel
                </h3>
                <p className="text-gray-600">
                  Mises à jour régulières sur WhatsApp à chaque étape : achat, expédition, arrivée au port.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Livraison à Domicile
                </h3>
                <p className="text-gray-600">
                  Service de livraison dans toutes les grandes villes du Cameroun pour plus de confort.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Paiement Flexible
                </h3>
                <p className="text-gray-600">
                  Acompte de 15% seulement à la commande. Solde à la livraison. Plusieurs modes de paiement acceptés.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Notre Équipe
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              TransAfriq, c'est une équipe de <span className="font-bold text-[#1e88e5]">10 professionnels passionnés</span> répartis entre le Cameroun et les États-Unis, travaillant ensemble pour vous offrir le meilleur service.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl mb-3">👨‍💼</div>
                <h4 className="font-bold text-gray-900 mb-1">Équipe Cameroun</h4>
                <p className="text-sm text-gray-600">Service client, logistique locale</p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍🔧</div>
                <h4 className="font-bold text-gray-900 mb-1">Équipe USA</h4>
                <p className="text-sm text-gray-600">Sourcing, inspection, expédition</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-900 mb-1">Partenaires</h4>
                <p className="text-sm text-gray-600">Transporteurs, douaniers certifiés</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Faites confiance à TransAfriq pour votre prochain import
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
