import Header from '../components/layout/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">À propos de TransAfriq</h1>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              TransAfriq facilite l'importation de véhicules de qualité depuis la Chine vers l'Afrique.
              Nous offrons une solution simple, transparente et sécurisée pour acquérir le véhicule de vos rêves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos Valeurs</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary)] mt-1">✓</span>
                <span><strong>Transparence:</strong> Prix clairs, pas de frais cachés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary)] mt-1">✓</span>
                <span><strong>Qualité:</strong> Véhicules inspectés et certifiés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary)] mt-1">✓</span>
                <span><strong>Service:</strong> Support client disponible 7j/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary)] mt-1">✓</span>
                <span><strong>Rapidité:</strong> Livraison express disponible</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Avec plus de 10 ans d'expérience dans l'importation automobile, TransAfriq est votre
              partenaire de confiance. Nous gérons toutes les démarches administratives et logistiques
              pour vous garantir une expérience sans stress.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
