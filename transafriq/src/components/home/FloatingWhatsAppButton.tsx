import { FaWhatsapp } from 'react-icons/fa';
import { sendGeneralWhatsAppMessage } from '../../utils/whatsapp';
import { WHATSAPP_BUSINESS_NUMBER } from '../../utils/constants';

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    sendGeneralWhatsAppMessage(WHATSAPP_BUSINESS_NUMBER);
  };

  return (
    <button
      className="fixed bottom-5 right-5 w-14 h-14 md:w-16 md:h-16 bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-dark)] rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 active:scale-95"
      onClick={handleClick}
      aria-label="Contact WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl md:text-3xl" />
    </button>
  );
};

export default FloatingWhatsAppButton;
