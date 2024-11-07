import { TimelineEvent } from "@/components/timeline/timeline-event";

const timelineEvents = [
  {
    year: 1947,
    title: "Oprichting Lucky Chemical",
    description: "Lucky Chemical, de voorloper van LG, wordt opgericht. Dit markeert het begin van wat later zou uitgroeien tot een wereldwijd technologiebedrijf.",
    category: "Oprichting"
  },
  {
    year: 1968,
    title: "Eerste LG Airconditioner",
    description: "GoldStar (later LG) introduceert zijn eerste airconditioner op de markt, wat het begin betekent van LG's reis in klimaatbeheersing.",
    category: "Innovatie"
  },
  {
    year: 1970,
    title: "Start Commerciële Airconditioning",
    description: "LG breidt uit naar de commerciële airconditioningmarkt, waarmee het bedrijf zijn expertise in klimaatbeheersing verder ontwikkelt.",
    category: "Expansie"
  },
  {
    year: 1995,
    title: "Geboorte van LG",
    description: "Lucky-GoldStar wordt omgedoopt tot LG, wat een nieuw tijdperk inluidt voor het bedrijf en zijn merkidentiteit.",
    category: "Mijlpaal"
  },
  {
    year: 1999,
    title: "Wereldwijde Erkenning",
    description: "LG groeit uit tot 's werelds op één na grootste fabrikant van airconditioners, wat de technologische vooruitgang en marktsucces van het bedrijf bevestigt.",
    category: "Groei"
  },
  {
    year: 2006,
    title: "LG ARTCOOL Revolutie",
    description: "Introductie van de LG ARTCOOL, 's werelds eerste airconditioner met fotolijst-design, wat een nieuwe standaard zet in design en functionaliteit.",
    category: "Innovatie"
  },
  {
    year: 2019,
    title: "Erkenning voor Excellence",
    description: "LG wint 19 industrieprijzen voor zijn VRF-serie airconditioners, wat de technologische superioriteit en innovatiekracht van het bedrijf bevestigt.",
    category: "Mijlpaal"
  },
  {
    year: 2024,
    title: "Europese Innovatie Hub",
    description: "Opening van een nieuw Air Solution R&D Lab in Europa, wat LG's toewijding aan innovatie en lokale marktontwikkeling onderstreept.",
    category: "Innovatie"
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Pioniers in Klimaatbeheersing
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Van een bescheiden start als Lucky Chemical tot een wereldleider in klimaattechnologie. 
            Ontdek de mijlpalen die LG hebben gevormd tot de innovatieve klimaatspecialist van vandaag.
          </p>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                category={event.category}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}