import { Metadata } from "next";
import { notFound } from "next/navigation";
import PestPageClient from "./PestPageClient";
import { pestsData, PestData } from "@/data/pests";

const BASE_URL = 'https://www.silvernestpestcontrol.com';

export function generateStaticParams() {
  return Object.keys(pestsData).map((slug) => ({ slug }));
}

// Generate JSON-LD structured data for pest pages
function generatePestSchemas(pest: PestData, slug: string) {
  const pestUrl = `${BASE_URL}/pests/${slug}/`;
  
  // Article schema for the pest guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${pest.title.fr} à Montréal - Guide Complet d'Identification et Extermination`,
    "description": pest.description.fr,
    "image": `${BASE_URL}${pest.image}`,
    "author": {
      "@type": "Organization",
      "name": "SN Pest Control",
      "url": BASE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "SN Pest Control Montréal",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/images/logo.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pestUrl,
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
  };

  // FAQ schema from pest FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pest.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question.fr,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.fr,
      },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": BASE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Parasites",
        "item": `${BASE_URL}/pests/`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pest.title.fr,
        "item": pestUrl,
      },
    ],
  };

  // Service schema for the pest extermination service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Extermination ${pest.title.fr}`,
    "name": `Extermination ${pest.title.fr} Montréal - SN Pest Control`,
    "description": `Service professionnel d'extermination de ${pest.title.fr.toLowerCase()} à Montréal, Laval et Longueuil. Résultats garantis.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "SN Pest Control",
      "telephone": "+15145824400",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "addressCountry": "CA",
      },
    },
    "areaServed": [
      { "@type": "City", "name": "Montréal" },
      { "@type": "City", "name": "Laval" },
      { "@type": "City", "name": "Longueuil" },
    ],
  };

  return { articleSchema, faqSchema, breadcrumbSchema, serviceSchema };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pest = pestsData[slug];
  
  if (!pest) {
    return { title: "Pest Not Found" };
  }

  const pestUrl = `${BASE_URL}/pests/${slug}/`;
  const pestImage = `${BASE_URL}${pest.image}`;

  return {
    title: `Extermination ${pest.title.fr} Montréal | Guide Complet & Traitement Professionnel`,
    description: `${pest.description.fr} Service d'extermination professionnel à Montréal, Laval et Longueuil. Appelez (514) 582-4400 pour une estimation gratuite.`,
    keywords: `${pest.metaKeywords}, extermination ${pest.title.fr.toLowerCase()} Montréal, traitement ${pest.title.fr.toLowerCase()}, ${pest.title.en.toLowerCase()} Montreal, éliminer ${pest.title.fr.toLowerCase()}, exterminateur ${pest.title.fr.toLowerCase()}`,
    alternates: {
      canonical: `/pests/${slug}/`,
      languages: {
        'en-CA': `/pests/${slug}/`,
        'fr-CA': `/pests/${slug}/`,
      },
    },
    openGraph: {
      type: 'article',
      siteName: 'SN Pest Control Montréal',
      title: `Extermination ${pest.title.fr} Montréal | SN Pest Control`,
      description: pest.description.fr,
      url: pestUrl,
      locale: 'fr_CA',
      alternateLocale: 'en_CA',
      images: [
        {
          url: pestImage,
          width: 1200,
          height: 630,
          alt: pest.imageAlt.fr,
          type: 'image/jpeg',
        },
      ],
      publishedTime: '2024-01-01',
      modifiedTime: new Date().toISOString(),
      authors: ['SN Pest Control'],
      section: 'Pest Control',
      tags: [pest.title.fr, pest.title.en, 'Extermination', 'Montréal', 'Parasites'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Extermination ${pest.title.fr} Montréal | SN Pest Control`,
      description: `${pest.description.fr} Appelez (514) 582-4400`,
      images: [pestImage],
      creator: '@snpestcontrol',
    },
  };
}

export default async function PestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pest = pestsData[slug];

  if (!pest) {
    notFound();
  }

  const schemas = generatePestSchemas(pest, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.serviceSchema) }}
      />
      <PestPageClient pest={pest} />
    </>
  );
}
