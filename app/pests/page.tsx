import { Metadata } from 'next';
import PestsIndexClient from './PestsIndexClient';

export const metadata: Metadata = {
  title: "Guide Complet des Parasites à Montréal | Identification & Extermination",
  description: "Guide complet des parasites à Montréal: punaises de lit, rats, souris, coquerelles, fourmis, guêpes, araignées, puces. Apprenez à identifier les signes d'infestation et découvrez nos solutions d'extermination professionnelles. Appelez (514) 582-4400.",
  keywords: "guide parasites Montréal, identification punaises de lit, identification rats, souris Montréal, coquerelles identification, fourmis charpentières, guêpes Montréal, araignées Québec, puces animaux, signes infestation, extermination parasites, pest identification Montreal",
  alternates: {
    canonical: "/pests/",
    languages: {
      'en-CA': '/pests/',
      'fr-CA': '/pests/',
    },
  },
  openGraph: {
    type: "website",
    siteName: "SN Pest Control Montréal",
    title: "Guide Complet des Parasites à Montréal | SN Pest Control",
    description: "Guide complet pour identifier et éliminer les parasites à Montréal. Punaises de lit, rats, souris, coquerelles, fourmis, guêpes et plus.",
    url: "/pests/",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    images: [
      {
        url: '/images/bedbugs.jpeg',
        width: 1200,
        height: 630,
        alt: 'Guide des Parasites Montréal - SN Pest Control',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet des Parasites à Montréal | SN Pest Control',
    description: 'Apprenez à identifier punaises de lit, rats, souris, coquerelles et autres parasites. Solutions professionnelles disponibles.',
    images: ['/images/bedbugs.jpeg'],
    creator: '@snpestcontrol',
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Guide des Parasites - SN Pest Control",
  "description": "Guide complet des parasites communs à Montréal avec informations d'identification et solutions d'extermination.",
  "url": "https://www.silvernestpestcontrol.com/pests/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "url": "https://www.silvernestpestcontrol.com/pests/bed-bugs/", "name": "Punaises de lit"},
      {"@type": "ListItem", "position": 2, "url": "https://www.silvernestpestcontrol.com/pests/rats/", "name": "Rats"},
      {"@type": "ListItem", "position": 3, "url": "https://www.silvernestpestcontrol.com/pests/mice/", "name": "Souris"},
      {"@type": "ListItem", "position": 4, "url": "https://www.silvernestpestcontrol.com/pests/cockroaches/", "name": "Coquerelles"},
      {"@type": "ListItem", "position": 5, "url": "https://www.silvernestpestcontrol.com/pests/ants/", "name": "Fourmis"},
      {"@type": "ListItem", "position": 6, "url": "https://www.silvernestpestcontrol.com/pests/wasps/", "name": "Guêpes"},
      {"@type": "ListItem", "position": 7, "url": "https://www.silvernestpestcontrol.com/pests/spiders/", "name": "Araignées"},
      {"@type": "ListItem", "position": 8, "url": "https://www.silvernestpestcontrol.com/pests/fleas/", "name": "Puces"}
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.silvernestpestcontrol.com"},
    {"@type": "ListItem", "position": 2, "name": "Parasites", "item": "https://www.silvernestpestcontrol.com/pests/"}
  ]
};

export default function PestsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PestsIndexClient />
    </>
  );
}
