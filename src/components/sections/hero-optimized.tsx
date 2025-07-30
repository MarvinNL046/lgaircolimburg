import { useState, useEffect } from 'react';
import { ContactForm } from './contact-form';
import { Star, Phone, Clock, CheckCircle } from 'lucide-react';

const rotatingHeadlines = [
  'Airco Installatie Limburg',
  'Airco Service Zuid-Limburg',
  'Klimaatbeheersing Specialist',
  'Airco Onderhoud Expert'
];

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const headline = rotatingHeadlines[currentHeadline];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < headline.length) {
        timeout = setTimeout(() => {
          setDisplayText(headline.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentHeadline, displayText, isTyping]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Aanbieding Ribbon */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg transform rotate-12">
          AANBIEDING - Binnen 24u reactie!
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] bg-center bg-repeat"></div>
      </div>

      <div className="relative z-10 container-custom min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Column */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-orange-400">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.7/5 op basis van 163 Google reviews</span>
            </div>

            {/* Dynamic Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-orange-400">StayCool</span>
                <br />
                <span className="text-blue-400 min-h-[1.2em] inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="text-xl text-gray-300 max-w-lg">
              Professionele airconditioning installatie en onderhoud in heel Limburg. 
              Gratis offerte binnen 24 uur!
            </p>

            {/* USP Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Gratis offerte</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Gecertificeerde monteurs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Onderhoud vanaf €11/mnd</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">5 jaar garantie</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0462021430" 
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>046-202-1430</span>
              </a>
              <a 
                href="https://wa.me/31636481054" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Gratis Offerte Aanvragen
                </h2>
                <p className="text-gray-300">
                  Vul het formulier in en ontvang binnen 24u een offerte op maat!
                </p>
              </div>
              <ContactForm variant="hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}