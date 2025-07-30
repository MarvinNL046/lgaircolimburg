import { Wrench, Settings, ShieldCheck, PlayCircle } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Airco Installatie Limburg',
    description: 'Professionele installatie van alle airconditioning merken. Van Daikin tot Samsung - wij installeren het allemaal volgens de hoogste kwaliteitsstandaarden.',
    features: [
      'Gratis offerte en advies',
      'Alle merken: Daikin, LG, Samsung, Mitsubishi',
      'Gecertificeerde monteurs',
      '5 jaar garantie op installatie'
    ]
  },
  {
    icon: Settings,
    title: 'Airco Onderhoud Zuid-Limburg',
    description: 'Regelmatig onderhoud verlengt de levensduur van uw airco en zorgt voor optimale prestaties. Onderhoudscontract vanaf €11 per maand.',
    features: [
      'Onderhoudscontract vanaf €11/mnd',
      'Losse onderhoudsbeurt €149',
      'Reiniging filters en units',
      'Controle werking en koelmiddel'
    ]
  },
  {
    icon: Wrench,
    title: 'Airco Reparatie & Service',
    description: 'Storing aan uw airconditioning? Onze specialisten in Limburg helpen u snel verder. Snelle service en eerlijke prijzen.',
    features: [
      'Snelle diagnose',
      'Reparatie alle merken',
      'Originele onderdelen',
      'Vakkundige monteurs'
    ]
  }
];

export function ServicesOptimized() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Airco Service <span className="text-orange-500">Limburg</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van installatie tot onderhoud - StayCool is uw specialist voor airconditioning 
            in heel Limburg. Bekijk onze diensten en vraag een gratis offerte aan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Zo werken wij bij <span className="text-orange-500">StayCool</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bekijk onze werkwijze en zie hoe professioneel wij te werk gaan bij 
              elke airco installatie in Limburg.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative group cursor-pointer">
              {/* YouTube Embed */}
              <iframe
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="StayCool Airco Limburg - Professionele Installatie"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Play Button Overlay (falls back if iframe doesn't load) */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <PlayCircle className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Klaar voor professionele airconditioning?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vraag een gratis offerte aan en ontdek waarom klanten in Limburg 
            kiezen voor StayCool als hun airco specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0462021430" className="btn-primary">
              Bel nu: 046-202-1430
            </a>
            <a 
              href="https://wa.me/31636481054" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}