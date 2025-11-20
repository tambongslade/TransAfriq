import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/layout/Header';
import { sendGeneralWhatsAppMessage } from '../utils/whatsapp';
import { WHATSAPP_BUSINESS_NUMBER } from '../utils/constants';

const Contact = () => {
  const handleWhatsAppClick = () => {
    sendGeneralWhatsAppMessage(WHATSAPP_BUSINESS_NUMBER);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Contactez-nous
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 shadow-md space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Nos Coordonnées</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaWhatsapp className="text-2xl text-[var(--whatsapp)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">+237 670 527 426</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-[var(--primary)] hover:underline text-sm mt-1"
                  >
                    Envoyer un message
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+237 670 527 426</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@transafriq.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Douala, Cameroun</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Message Rapide</h2>
            <p className="text-gray-600 mb-6">
              Pour une réponse rapide, contactez-nous directement sur WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-dark)] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <FaWhatsapp className="text-2xl" />
              Contacter sur WhatsApp
            </button>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h2>
          <div className="space-y-2 text-gray-700">
            <p>Lundi - Vendredi: 8h00 - 18h00</p>
            <p>Samedi: 9h00 - 17h00</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
