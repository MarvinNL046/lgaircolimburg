import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-8">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar voor professionele airconditioning?
          </h2>
          <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
            Vraag vandaag nog een gratis offerte aan en ervaar waarom klanten 
            in Limburg kiezen voor StayCool!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactConfig.phoneClean}`}
              className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{contactConfig.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${contactConfig.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-orange-500">StayCool</span>
                  <span className="text-white">Airco</span>
                </h3>
                <p className="text-gray-400">
                  Dé airconditioning specialist van Limburg sinds 2008
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a href={`tel:${contactConfig.phoneClean}`} className="hover:text-orange-400 transition-colors">
                    {contactConfig.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href={`https://wa.me/${contactConfig.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {contactConfig.whatsapp}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-gray-400 text-sm">
                    <p>{contactConfig.address.street}</p>
                    <p>{contactConfig.address.city}</p>
                    <p className="text-xs italic">{contactConfig.address.note}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Onze Diensten</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#diensten" className="hover:text-orange-400 transition-colors">
                    Airco Installatie Limburg
                  </a>
                </li>
                <li>
                  <a href="#diensten" className="hover:text-orange-400 transition-colors">
                    Airco Onderhoud vanaf €11/mnd
                  </a>
                </li>
                <li>
                  <a href="#diensten" className="hover:text-orange-400 transition-colors">
                    Airco Reparatie Service
                  </a>
                </li>
                <li>
                  <a href="#merken" className="hover:text-orange-400 transition-colors">
                    Alle Merken: Daikin, Samsung, LG
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-400 transition-colors">  
                    Gratis Advies & Offerte
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Werkgebied Limburg</h3>
              <ul className="space-y-3 text-gray-400">
                {contactConfig.serviceArea.slice(0, 6).map((city) => (
                  <li key={city}>
                    <a href={`#${city.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                      Airco {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Openingstijden</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-white font-medium">Kantooruren</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ma - Di</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wo - Do</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vrijdag</span>
                    <span>09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span className="text-red-400">Gesloten</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3 mt-4">
                  <p className="text-xs text-gray-300">
                    💡 <strong>Tip:</strong> WhatsApp ons buiten kantooruren voor snelle reactie!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} {contactConfig.companyName}. Alle rechten voorbehouden.</p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">⭐</span>
                  <span>{contactConfig.reviews.rating}/5 ({contactConfig.reviews.count} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🏆</span>
                  <span>15+ jaar ervaring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>F-gassen gecertificeerd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}