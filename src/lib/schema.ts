import { contactConfig } from "@/config/contact";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": contactConfig.companyName,
  "description": "Specialist in LG airconditioningsystemen in Limburg",
  "url": "https://lgaircolimburg.nl",
  "logo": "https://lgaircolimburg.nl/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": `+31${contactConfig.phoneClean}`,
    "contactType": "customer service",
    "areaServed": "Limburg",
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "sameAs": [
    contactConfig.socialMedia.facebook,
    contactConfig.socialMedia.instagram
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": contactConfig.companyName,
  "image": "https://lgaircolimburg.nl/images/lg-artcool-gallery.webp",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 51.2093,
      "longitude": 5.9526
    },
    "geoRadius": 50000
  },
  "url": "https://lgaircolimburg.nl",
  "telephone": `+31${contactConfig.phoneClean}`,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Limburg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Airconditioning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airconditioning Installatie",
          "description": "Professionele installatie van LG airconditioners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airconditioning Onderhoud",
          "description": "Regelmatig onderhoud van uw airconditioningsysteem"
        }
      }
    ]
  }
};