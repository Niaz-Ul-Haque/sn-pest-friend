'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PestData } from '@/data/pests';

export default function PestPageClient({ pest }: { pest: PestData }) {
  const { t } = useLanguage();

  return (
    <div className="pest-page">
      <Breadcrumbs items={[
        { label: { en: 'Pests', fr: 'Parasites' }, href: '/pests/' },
        { label: pest.title }
      ]} />

      <main id="main-content">
        <section className="pest-hero">
          <div className="container">
            <div className="pest-hero-grid">
              <div className="pest-hero-content">
                <span className="eyebrow">
                  {t("Pest Guide", "Guide Parasite")}
                </span>
                <h1>
                  {t(pest.title.en + " in Montreal: Complete Identification and Extermination Guide", pest.title.fr + " a Montreal: Guide Complet d'Identification et d'Extermination")}
                </h1>
                <p className="lead">
                  {t(pest.heroLead.en, pest.heroLead.fr)}
                </p>
                <div className="pest-cta-group">
                  <Link href="/#contact" className="btn btn-primary">
                    {t("Get a Free Quote", "Obtenez une Soumission Gratuite")}
                  </Link>
                  <a href="tel:+15146127678" className="btn btn-outline">
                    {t("Call Now: (514) 612-7678", "Appelez: (514) 612-7678")}
                  </a>
                </div>
              </div>
              <div className="pest-hero-image">
                <figure>
                  <Image
                    src={pest.image}
                    alt={t(pest.imageAlt.en, pest.imageAlt.fr)}
                    width={600}
                    height={400}
                    priority
                  />
                  <figcaption>{t(pest.imageCaption.en, pest.imageCaption.fr)}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="pest-section">
          <div className="container">
            <br/>
            <h2>{t("Identification", "Identification")}</h2>
            <ul className="pest-list">
              {pest.identification.map((item, idx) => (
                <li key={idx}>{t(item.en, item.fr)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pest-section alt-bg">
          <div className="container">
            <br/>

            <h2>{t("Life Cycle", "Cycle de Vie")}</h2>
            <div className="lifecycle-grid">
              {pest.lifecycle.map((stage, idx) => (
                <div key={idx} className="lifecycle-card">
                  <span className="lifecycle-icon">{stage.icon}</span>
                  <h3>{t(stage.title.en, stage.title.fr)}</h3>
                  <p>{t(stage.description.en, stage.description.fr)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pest-section">
          <div className="container">
            <br/>

            <h2>{t("Behaviour", "Comportement")}</h2>
            <ul className="pest-list">
              {pest.behaviour.map((item, idx) => (
                <li key={idx}>{t(item.en, item.fr)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pest-section alt-bg">
          <div className="container">
            <br/>

            <h2>{t("Health Risks", "Risques pour la Sante")}</h2>
            <ul className="pest-list warning">
              {pest.healthRisks.map((item, idx) => (
                <li key={idx}>{t(item.en, item.fr)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pest-section">
          <div className="container">
            <br/>

            <h2>{t("Common Hiding Spots", "Cachettes Courantes")}</h2>
            <ul className="pest-list">
              {pest.hideSpots.map((item, idx) => (
                <li key={idx}>{t(item.en, item.fr)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pest-section alt-bg">
          <div className="container">
            <br/>

            <h2>{t("Signs of Infestation", "Signes d'Infestation")}</h2>
            <div className="signs-grid">
              {pest.signs.map((sign, idx) => (
                <div key={idx} className="sign-card">
                  <span className="sign-icon">{sign.icon}</span>
                  <h3>{t(sign.title.en, sign.title.fr)}</h3>
                  <p>{t(sign.description.en, sign.description.fr)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pest-section">
          <div className="container">
            <br/>

            <h2>{t("Prevention Tips", "Conseils de Prevention")}</h2>
            <div className="prevention-grid">
              {pest.prevention.map((tip, idx) => (
                <div key={idx} className="prevention-card">
                  <span className="prevention-icon">{tip.icon}</span>
                  <h3>{t(tip.title.en, tip.title.fr)}</h3>
                  <p>{t(tip.description.en, tip.description.fr)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pest-section alt-bg">
          <div className="container">
            <br/>

            <h2>{t("Frequently Asked Questions", "Questions Frequentes")}</h2>
            <div className="faq-accordion">
              {pest.faqs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>{t(faq.question.en, faq.question.fr)}</summary>
                  <p>{t(faq.answer.en, faq.answer.fr)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pest-cta-section">
          <div className="container">
            <br/>

            <h2>{t("Need Help with " + pest.title.en + "?", "Besoin d'aide avec les " + pest.title.fr + "?")}</h2>
            <p>{t("Our licensed technicians are ready to help. Get a free inspection and quote today.", "Nos techniciens agrees sont prets a vous aider. Obtenez une inspection et soumission gratuite aujourd'hui.")}</p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn btn-primary btn-large">
                {t("Get Free Quote", "Soumission Gratuite")}
              </Link>
              <a href="tel:+15146127678" className="btn btn-outline btn-large">
                (514) 612-7678
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
