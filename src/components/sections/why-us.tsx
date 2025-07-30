import { Award, Clock, Shield, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Gratis Offerte',
    description: 'Vrijblijvende offerte binnen 24 uur. Transparante prijzen zonder verrassingen.',
    highlight: 'Altijd gratis'
  },
  {
    icon: Shield,
    title: 'Gecertificeerde Monteurs',
    description: 'Al onze monteurs zijn F-gassen gecertificeerd en hebben jarenlange ervaring.',
    highlight: '15+ jaar ervaring'
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Wij zijn bereikbaar tijdens kantooruren. Spoedgevallen krijgen prioriteit.',
    highlight: 'Ma-Vr 09:00-17:00'
  },
  {
    icon: Phone,
    title: '5 Jaar Garantie',
    description: 'Volledige garantie op installatie en materialen. U bent verzekerd van kwaliteit.',
    highlight: 'Uitgebreide dekking'
  }
];

export function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Waarom kiezen voor <span className="text-orange-500">StayCool</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Met meer dan 15 jaar ervaring zijn wij dé airconditioning specialist 
            van Limburg. Ontdek waarom klanten ons vertrouwen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {benefit.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">163+</div>
              <div className="text-gray-600">Tevreden klanten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.7/5</div>
              <div className="text-gray-600">Google reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
          </div>
        </div>

        {/* Servicengebied */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Wij werken in heel <span className="text-orange-500">Limburg</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Maastricht', 'Sittard', 'Heerlen', 'Geleen', 'Kerkrade', 
              'Brunssum', 'Landgraaf', 'Voerendaal', 'Hoensbroek', 'Roermond'
            ].map((city) => (
              <span 
                key={city}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-100 hover:text-orange-800 transition-colors duration-200"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to stay cool?
            </h3>
            <p className="text-xl mb-8 text-orange-100">
              Vraag vandaag nog een gratis offerte aan en ervaar de StayCool service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0462021430" 
                className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>046-202-1430</span>
              </a>
              <a 
                href="https://wa.me/31636481054" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}