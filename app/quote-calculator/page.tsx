import { Metadata } from 'next';
import QuoteCalculatorClient from './QuoteCalculatorClient';

const BASE_URL = 'https://www.silvernestpestcontrol.com';

export const metadata: Metadata = {
  title: "Calculateur de Soumission Gratuit | Exterminateur Montréal | SN Pest Control",
  description: "Obtenez une soumission instantanée pour l'extermination à Montréal. Calculez le coût pour punaises de lit, rats, souris, coquerelles, fourmis, guêpes. Exterminateurs licenciés à Montréal, Laval, Longueuil. Service le jour même. Estimez votre prix maintenant!",
  keywords: "calculateur extermination Montréal, soumission gratuite extermination, coût exterminateur Montréal, prix extermination punaises de lit, coût extermination rats, prix extermination souris, extermination coquerelles Montréal prix, estimation exterminateur, pest control calculator Montreal, extermination quote Montreal, pest control pricing, exterminateur Laval prix, exterminateur Longueuil coût, soumission en ligne extermination",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "/quote-calculator/",
    languages: {
      'en-CA': '/quote-calculator/',
      'fr-CA': '/quote-calculator/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'SN Pest Control Montréal',
    title: 'Calculateur de Soumission Gratuit | Exterminateur Montréal',
    description: 'Obtenez une soumission instantanée pour extermination à Montréal. Punaises de lit, rats, souris, coquerelles, fourmis. Service le jour même disponible!',
    url: '/quote-calculator/',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    images: [
      {
        url: '/images/bedbugs.jpeg',
        width: 1200,
        height: 630,
        alt: 'Calculateur de Soumission Extermination Montréal - SN Pest Control',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculateur de Soumission Gratuit | Exterminateur Montréal',
    description: 'Soumission instantanée pour extermination à Montréal. Punaises de lit, rats, souris, coquerelles. Service le jour même!',
    images: ['/images/bedbugs.jpeg'],
    creator: '@snpestcontrol',
  },
};

const quoteCalculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculateur de Soumission Extermination - SN Pest Control",
  "description": "Calculateur gratuit pour obtenir une estimation du coût d'extermination à Montréal",
  "url": `${BASE_URL}/quote-calculator/`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CAD",
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "SN Pest Control",
    "telephone": "+15145824400",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "Calculateur de Soumission", "item": `${BASE_URL}/quote-calculator/` },
  ],
};

export default function QuoteCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quoteCalculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <QuoteCalculatorClient />
    </>
  );
}
