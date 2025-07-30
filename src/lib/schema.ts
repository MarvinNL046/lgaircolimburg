import { contactConfig } from "@/config/contact";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": contactConfig.companyName,
  "description": "Specialist in airconditioning installatie, onderhoud en reparatie in heel Limburg. Alle merken: Daikin, Samsung, LG, Mitsubishi, Toshiba.",
  "url": "https://lgaircolimburg.nl",
  "logo": "https://lgaircolimburg.nl/staycool-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": `+31${contactConfig.phoneClean}`,
    "contactType": "customer service",
    "areaServed": contactConfig.serviceArea,
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": contactConfig.address.street,
    "addressLocality": "Nieuwstadt",
    "addressRegion": "Limburg",
    "postalCode": "6118 AS",
    "addressCountry": "NL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": contactConfig.reviews.rating,
    "reviewCount": contactConfig.reviews.count
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": contactConfig.companyName,
  "image": "https://lgaircolimburg.nl/images/staycool-hero.webp",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": contactConfig.address.street,
    "addressLocality": "Nieuwstadt",
    "addressRegion": "Limburg",
    "postalCode": "6118 AS",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.9097,
      "longitude": 5.9426
    },
    "geoRadius": 50000
  },
  "url": "https://lgaircolimburg.nl",
  "telephone": `+31${contactConfig.phoneClean}`,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": ["Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00", 
      "closes": "16:00"
    }
  ],
  "areaServed": contactConfig.serviceArea,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": contactConfig.reviews.rating,
    "reviewCount": contactConfig.reviews.count
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Airconditioning Services Limburg",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airco Installatie Limburg",
          "description": "Professionele installatie van alle airconditioning merken: Daikin, Samsung, LG, Mitsubishi, Toshiba"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Airco Onderhoud Zuid-Limburg",
          "description": "Onderhoudscontract vanaf €11 per maand of losse onderhoudsbeurt €149"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airco Reparatie Service",
          "description": "Snelle reparatie van alle airconditioning merken door vakkundige monteurs"
        }
      }
    ]
  }
};