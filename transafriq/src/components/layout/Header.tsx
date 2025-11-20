import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="TransAfriq Logo"
              className="h-4 w-auto md:h-5 lg:h-6"
            />
          </Link>

          <button
            className="text-2xl p-2 text-gray-700 hover:text-[var(--primary)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
