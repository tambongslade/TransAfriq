import { Link } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiPhone, HiQuestionMarkCircle } from 'react-icons/hi';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { to: '/', icon: HiHome, label: 'Accueil' },
    { to: '/comment-ca-marche', icon: HiQuestionMarkCircle, label: 'Comment ça marche' },
    { to: '/a-propos', icon: HiInformationCircle, label: 'À propos' },
    { to: '/contact', icon: HiPhone, label: 'Contact' }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Menu */}
      <nav className="fixed top-[61px] right-0 w-64 h-[calc(100vh-61px)] bg-white z-50 shadow-lg transform transition-transform">
        <ul className="py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors min-h-[44px]"
                  onClick={onClose}
                >
                  <Icon className="text-xl flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
