import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: '🔍',
      title: 'Parcourez le catalogue',
      description: 'Plus de 100 véhicules disponibles'
    },
    {
      number: '2',
      icon: '💬',
      title: 'Commandez via WhatsApp',
      description: 'Simple et rapide'
    },
    {
      number: '3',
      icon: '💰',
      title: "Payez 15% d'acompte",
      description: 'Orange Money, MTN, Wave acceptés'
    },
    {
      number: '4',
      icon: '🚢',
      title: 'Expédition Chine → Afrique',
      description: '5-7 jours (aérien) ou 25-35 jours (maritime)'
    },
    {
      number: '5',
      icon: '🎉',
      title: 'Réception & paiement du solde',
      description: 'Vous payez le reste à la livraison'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Comment ça marche ?
        </h1>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-lg transition-colors shadow-md"
          >
            Voir les véhicules
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
