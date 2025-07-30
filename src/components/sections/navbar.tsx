import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#diensten', label: 'Diensten' },
    { href: '#waarom-ons', label: 'Waarom StayCool' },
    { href: '#merken', label: 'Merken' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold">
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-orange-500' : 'text-white'
                }`}>
                  StayCool
                </span>
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-gray-300'
                }`}>
                  Airco
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 hover:text-orange-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white hover:text-orange-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:0462021430"
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'text-orange-600 hover:bg-orange-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>046-202-1430</span>
              </a>
              <a
                href="https://wa.me/31636481054"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Gratis Offerte
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <a
                    href="tel:0462021430"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>046-202-1430</span>
                  </a>
                  <a
                    href="https://wa.me/31636481054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    WhatsApp Offerte
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-lg">
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:0462021430"
            className="flex items-center justify-center space-x-2 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Bel Nu</span>
          </a>
          <a
            href="https://wa.me/31636481054"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile bottom padding to prevent content overlap */}
      <div className="h-16 lg:hidden"></div>
    </>
  );
}