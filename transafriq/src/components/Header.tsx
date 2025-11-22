import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-[#1a1d2e] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logor.png"
                alt="TransAfriq Logo"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  <span className="text-white">TRANS</span>
                  <span className="text-[#f9a825]">AFRIQ</span>
                </span>
                <span className="text-[10px] text-gray-300 -mt-1 hidden sm:block">
                  Achetez à l'international et recevez en Afrique
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#f9a825] transition-colors duration-200 font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-[#f9a825] transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              to="/comment-ca-marche"
              className="text-gray-300 hover:text-[#f9a825] transition-colors duration-200 font-medium"
            >
              Comment ça marche
            </Link>
            <Link
              to="/a-propos"
              className="text-gray-300 hover:text-[#f9a825] transition-colors duration-200 font-medium"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-[#f9a825] transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-[#f9a825] text-[#1a1d2e] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#fbb040] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 hover:bg-[#2a2d3e] rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-[#f9a825] hover:bg-[#2a2d3e] px-4 py-2.5 rounded-lg transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                Accueil
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-[#f9a825] hover:bg-[#2a2d3e] px-4 py-2.5 rounded-lg transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/comment-ca-marche"
                className="text-gray-300 hover:text-[#f9a825] hover:bg-[#2a2d3e] px-4 py-2.5 rounded-lg transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                Comment ça marche
              </Link>
              <Link
                to="/a-propos"
                className="text-gray-300 hover:text-[#f9a825] hover:bg-[#2a2d3e] px-4 py-2.5 rounded-lg transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-[#f9a825] hover:bg-[#2a2d3e] px-4 py-2.5 rounded-lg transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-[#f9a825] text-[#1a1d2e] px-4 py-2.5 rounded-lg font-semibold hover:bg-[#fbb040] transition-all duration-200 text-center mt-2"
                onClick={toggleMobileMenu}
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
