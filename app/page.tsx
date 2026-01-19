import Link from 'next/link';
import HomePageClient from './HomePageClient';

const BASE_URL = 'https://www.silvernestpestcontrol.com';

// Organization Schema - establishes brand identity
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "SN Pest Control",
  "alternateName": ["Silver Nest Pest Control", "SN Pest Control Montréal", "Exterminateur SN"],
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/images/logo.png`,
    "width": "180",
    "height": "60",
  },
  "image": `${BASE_URL}/images/bedbugs.jpeg`,
  "description": "Service professionnel d'extermination et contrôle parasitaire à Montréal. Spécialistes des punaises de lit, rats, souris, coquerelles, fourmis et tous types de parasites.",
  "telephone": "+15145824400",
  "email": "snpest20@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2311 RUE LISE",
    "addressLocality": "Montréal",
    "addressRegion": "QC",
    "postalCode": "H8N 1M7",
    "addressCountry": "CA",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+15145824400",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"],
      "areaServed": ["CA-QC"],
    },
    {
      "@type": "ContactPoint",
      "telephone": "+15145824400",
      "contactType": "emergency",
      "availableLanguage": ["French", "English"],
      "areaServed": ["CA-QC"],
    },
  ],
  "sameAs": [],
  "foundingDate": "2018",
  "slogan": "Exterminateur professionnel à Montréal - Résultats garantis",
};

// WebSite Schema - for sitelinks searchbox potential
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "SN Pest Control Montréal",
  "description": "Exterminateur professionnel à Montréal, Laval et Longueuil. Punaises de lit, rats, souris, coquerelles, fourmis.",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": ["fr-CA", "en-CA"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/pests/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD Structured Data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "SN Pest Control",
  "alternateName": "Silver Nest Pest Control Montréal",
  "description": "Exterminateur professionnel à Montréal spécialisé dans l'élimination des punaises de lit, rats, souris, coquerelles, fourmis, guêpes et tous types de parasites. Service résidentiel et commercial dans le Grand Montréal.",
  "url": BASE_URL,
  "telephone": "+15145824400",
  "email": "snpest20@gmail.com",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, E-Transfer",
  "currenciesAccepted": "CAD",
  "image": `${BASE_URL}/images/bedbugs.jpeg`,
  "logo": `${BASE_URL}/images/logo.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2311 RUE LISE",
    "addressLocality": "Montréal",
    "addressRegion": "QC",
    "postalCode": "H8N 1M7",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5017",
    "longitude": "-73.5673"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Montréal", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Laval", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Longueuil", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Brossard", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Terrebonne", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Repentigny", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Saint-Jérôme", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Châteauguay", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Blainville", "addressRegion": "QC", "addressCountry": "CA" },
    { "@type": "City", "name": "Mirabel", "addressRegion": "QC", "addressCountry": "CA" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services d'Extermination",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extermination Punaises de Lit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extermination Rats" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extermination Souris" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extermination Coquerelles" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extermination Fourmis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retrait Nids de Guêpes" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const bedBugServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Extermination de Punaises de Lit",
  "name": "Extermination Professionnelle de Punaises de Lit Montréal",
  "description": "Service expert d'élimination de punaises de lit à Montréal. Inspection complète, traitement professionnel et suivi inclus. Résultats garantis.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "SN Pest Control",
    "priceRange": "$$",
    "telephone": "+15145824400"
  },
  "areaServed": [
    { "@type": "City", "name": "Montréal", "addressRegion": "QC" },
    { "@type": "City", "name": "Laval", "addressRegion": "QC" },
    { "@type": "City", "name": "Longueuil", "addressRegion": "QC" },
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "CAD",
    },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "À quelle vitesse pouvez-vous répondre aux situations d'urgence parasitaires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous offrons des services de contrôle parasitaire d'urgence 24/7 dans tout le Grand Montréal avec des temps de réponse typiques de 2 à 4 heures pour les situations urgentes. Appelez-nous au (514) 582-4400."
      }
    },
    {
      "@type": "Question",
      "name": "Vos traitements de contrôle parasitaire sont-ils sécuritaires pour les enfants et les animaux?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, la sécurité est notre priorité absolue. Nous utilisons des solutions écologiques à faible toxicité qui sont efficaces contre les parasites tout en étant sécuritaires pour les familles et les animaux de compagnie."
      }
    },
    {
      "@type": "Question",
      "name": "Garantissez-vous vos services de contrôle parasitaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous offrons une garantie de satisfaction à 100% sur tous nos services de contrôle parasitaire. Si les parasites reviennent pendant la période de garantie, nous revenons gratuitement."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte l'extermination de punaises de lit à Montréal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le coût varie selon la taille de l'infestation et de la propriété. Pour un appartement, comptez entre 300$ et 800$. Pour une maison, entre 600$ et 1500$. Contactez-nous pour une estimation gratuite."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles régions desservez-vous à Montréal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous desservons tout le Grand Montréal incluant Montréal, Laval, Longueuil, Brossard, Terrebonne, Repentigny, Blainville, et les régions environnantes dans un rayon de 50 km."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bedBugServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
