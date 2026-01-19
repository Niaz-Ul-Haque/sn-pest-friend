'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

const pests = [
  {
    slug: 'bed-bugs',
    image: '/images/bedbugs.jpeg',
    title: { en: 'Bed Bugs', fr: 'Punaises de lit' },
    alt: { en: 'Adult bed bug on fabric', fr: 'Punaise de lit adulte sur tissu' },
    description: {
      en: 'Small, reddish-brown insects that feed on human blood. Common in bedrooms and can spread quickly between units.',
      fr: 'Petits insectes brun-rougeâtre qui se nourrissent de sang humain. Communs dans les chambres et peuvent se propager rapidement entre les unités.'
    }
  },
  {
    slug: 'rats',
    image: '/images/rats.jpeg',
    title: { en: 'Rats', fr: 'Rats' },
    alt: { en: 'Brown rat', fr: 'Rat brun' },
    description: {
      en: 'Large rodents that can cause significant property damage and spread diseases. Norway rats are the most common species in Montreal.',
      fr: "Gros rongeurs qui peuvent causer des dommages importants à la propriété et propager des maladies. Les rats de Norvège sont l'espèce la plus commune à Montréal."
    }
  },
  {
    slug: 'mice',
    image: '/images/mice.jpeg',
    title: { en: 'Mice', fr: 'Souris' },
    alt: { en: 'House mouse', fr: 'Souris domestique' },
    description: {
      en: 'Small rodents that can squeeze through tiny openings. They contaminate food, damage structures, and reproduce rapidly.',
      fr: 'Petits rongeurs qui peuvent se faufiler par de petites ouvertures. Ils contaminent la nourriture, endommagent les structures et se reproduisent rapidement.'
    }
  },
  {
    slug: 'cockroaches',
    image: '/images/cockroaches.jpeg',
    title: { en: 'Cockroaches', fr: 'Coquerelles' },
    alt: { en: 'German cockroach', fr: 'Coquerelle germanique' },
    description: {
      en: 'Resilient insects that thrive in warm, humid environments. They spread bacteria and can trigger allergies and asthma.',
      fr: "Insectes résistants qui prospèrent dans les environnements chauds et humides. Ils propagent des bactéries et peuvent déclencher des allergies et de l'asthme."
    }
  },
  {
    slug: 'ants',
    image: '/images/ants.jpeg',
    title: { en: 'Ants', fr: 'Fourmis' },
    alt: { en: 'Carpenter ant', fr: 'Fourmi charpentière' },
    description: {
      en: 'Social insects that form large colonies. Carpenter ants can damage wood structures, while pavement ants invade kitchens.',
      fr: 'Insectes sociaux qui forment de grandes colonies. Les fourmis charpentières peuvent endommager les structures en bois, tandis que les fourmis de pavé envahissent les cuisines.'
    }
  },
  {
    slug: 'wasps',
    image: '/images/wasps.jpeg',
    title: { en: 'Wasps', fr: 'Guêpes' },
    alt: { en: 'Wasp on nest', fr: 'Guêpe sur nid' },
    description: {
      en: 'Stinging insects that build nests around homes. They can be aggressive when threatened and pose risks to those with allergies.',
      fr: "Insectes piqueurs qui construisent des nids autour des maisons. Ils peuvent être agressifs lorsqu'ils se sentent menacés et présentent des risques pour les personnes allergiques."
    }
  },
  {
    slug: 'spiders',
    image: '/images/spiders.jpeg',
    title: { en: 'Spiders', fr: 'Araignées' },
    alt: { en: 'House spider', fr: 'Araignée domestique' },
    description: {
      en: 'Eight-legged arachnids that often enter homes seeking prey. Most species in Montreal are harmless but can cause concern.',
      fr: "Arachnides à huit pattes qui entrent souvent dans les maisons à la recherche de proies. La plupart des espèces à Montréal sont inoffensives mais peuvent causer de l'inquiétude."
    }
  },
  {
    slug: 'fleas',
    image: '/images/fleas.jpeg',
    title: { en: 'Fleas', fr: 'Puces' },
    alt: { en: 'Flea on pet', fr: 'Puce sur animal' },
    description: {
      en: 'Tiny, jumping parasites that feed on blood from pets and humans. They can quickly infest homes and cause itchy bites.',
      fr: 'Minuscules parasites sauteurs qui se nourrissent du sang des animaux et des humains. Ils peuvent rapidement infester les maisons et causer des piqûres qui démangent.'
    }
  }
];

export default function PestsIndexClient() {
  const { t } = useLanguage();

  return (
    <div className="pest-page">
      <Breadcrumbs items={[{ label: { en: 'Pests', fr: 'Parasites' } }]} />

      <main id="main-content">
        <section className="pests-library">
          <div className="container">
            <div className="pests-intro">
              <h1 data-en="Pest Identification Guide for Montreal" data-fr="Guide d'Identification des Parasites pour Montréal">
                {t("Pest Identification Guide for Montreal", "Guide d'Identification des Parasites pour Montréal")}
              </h1>
              <p data-en="Learn to identify common pests found in the Greater Montreal area. Our comprehensive guides include identification tips, lifecycle information, prevention strategies, and professional treatment options." data-fr="Apprenez à identifier les parasites communs dans la région du Grand Montréal. Nos guides complets incluent des conseils d'identification, des informations sur le cycle de vie, des stratégies de prévention et des options de traitement professionnel.">
                {t("Learn to identify common pests found in the Greater Montreal area. Our comprehensive guides include identification tips, lifecycle information, prevention strategies, and professional treatment options.", "Apprenez à identifier les parasites communs dans la région du Grand Montréal. Nos guides complets incluent des conseils d'identification, des informations sur le cycle de vie, des stratégies de prévention et des options de traitement professionnel.")}
              </p>
            </div>

            <div className="pests-grid">
              {pests.map((pest) => (
                <Link key={pest.slug} href={`/pests/${pest.slug}/`} className="pest-card">
                  <Image
                    src={pest.image}
                    alt={t(pest.alt.en, pest.alt.fr)}
                    width={400}
                    height={180}
                    style={{ objectFit: 'cover', width: '100%', height: '180px' }}
                  />
                  <div className="pest-card-content">
                    <h2 data-en={pest.title.en} data-fr={pest.title.fr}>
                      {t(pest.title.en, pest.title.fr)}
                    </h2>
                    <p data-en={pest.description.en} data-fr={pest.description.fr}>
                      {t(pest.description.en, pest.description.fr)}
                    </p>
                    <span className="learn-more" data-en="Learn more →" data-fr="En savoir plus →">
                      {t('Learn more →', 'En savoir plus →')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="cta-card" style={{ marginTop: '3rem' }}>
              <h3 data-en="Need Professional Pest Control?" data-fr="Besoin d'un Contrôle Parasitaire Professionnel?">
                {t("Need Professional Pest Control?", "Besoin d'un Contrôle Parasitaire Professionnel?")}
              </h3>
              <p data-en="Our licensed exterminators are ready to help you eliminate any pest problem in your Montreal home or business." data-fr="Nos exterminateurs licenciés sont prêts à vous aider à éliminer tout problème de parasites dans votre maison ou entreprise à Montréal.">
                {t("Our licensed exterminators are ready to help you eliminate any pest problem in your Montreal home or business.", "Nos exterminateurs licenciés sont prêts à vous aider à éliminer tout problème de parasites dans votre maison ou entreprise à Montréal.")}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/quote-calculator/" className="btn btn-primary" data-en="Get a Free Quote" data-fr="Obtenir une Soumission Gratuite">
                  {t("Get a Free Quote", "Obtenir une Soumission Gratuite")}
                </Link>
                <a href="tel:+15145824400" className="btn btn-secondary" style={{ background: 'white', color: 'var(--color-primary)' }} data-en="Call (514) 582-4400" data-fr="Appelez (514) 582-4400">
                  {t("Call (514) 582-4400", "Appelez (514) 582-4400")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
