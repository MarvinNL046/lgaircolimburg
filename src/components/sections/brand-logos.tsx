const brands = [
  {
    name: 'Daikin',
    series: 'Comfora, Emura, Stylish, Perfera, Ururu Sarara',
    logo: '/images/daikin-logo.svg'
  },
  {
    name: 'LG',
    series: 'ArtCool, DualCool Premium',
    logo: '/images/lg-logo.svg'
  },
  {
    name: 'Samsung',
    series: 'WindFree series, Luzon',
    logo: '/images/samsung-logo.svg'
  },
  {
    name: 'Mitsubishi',
    series: 'Heavy Industries',
    logo: '/images/mitsubishi-logo.svg'
  },
  {
    name: 'Toshiba',
    series: 'Haori, Daiseikai, Kazumi, Seiya',
    logo: '/images/toshiba-logo.svg'
  },
  {
    name: 'Tosot',
    series: 'Pular, Clivia, Cosmo',
    logo: '/images/tosot-logo.svg'
  }
];

export function BrandLogos() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wij installeren <span className="text-orange-500">alle merken</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van budget tot premium - wij zijn specialist in alle grote airconditioning merken. 
            Kies het merk dat bij u past, wij zorgen voor professionele installatie.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Brand Logo Placeholder - using text for now since images need to be created */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
                <span className="text-gray-600 font-bold text-sm group-hover:text-orange-600">
                  {brand.name.slice(0,2)}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {brand.name}
              </h3>
              
              <p className="text-xs text-gray-500 leading-tight">
                {brand.series}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Ook leverbaar
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📱</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Mobiele Airco's
              </h4>
              <p className="text-gray-600">
                Mobiele airconditioning van LG en Tosot. Perfect voor flexibel gebruik 
                en situaties waar vaste installatie niet mogelijk is.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Airco Covers
              </h4>
              <p className="text-gray-600">
                Beschermhoezen voor uw buitenunit in wit en antraciet. 
                Beschermt tegen weersinvloeden en verlengt de levensduur.
              </p>
            </div>
          </div>
        </div>

        {/* Advice Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Niet zeker welk merk te kiezen?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Onze specialisten adviseren u graag over het beste merk en model 
              voor uw situatie. Elk merk heeft zijn eigen voordelen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0462021430" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Gratis advies: 046-202-1430
              </a>
              <a 
                href="https://wa.me/31636481054" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                WhatsApp advies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}