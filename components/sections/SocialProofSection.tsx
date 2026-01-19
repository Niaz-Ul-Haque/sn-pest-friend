'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { StatsGrid } from '@/components';

interface Testimonial {
  quote: { en: string; fr: string };
  author: { en: string; fr: string };
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: {
      en: '"SN Pest Control solved our bed bug problem quickly and professionally. Their Montreal team was knowledgeable and the treatment was highly effective. Highly recommended!"',
      fr: '"SN Pest Control a résolu notre problème de punaises de lit rapidement et professionnellement. Leur équipe de Montréal était compétente et le traitement était très efficace. Hautement recommandé!"'
    },
    author: { en: '— Marie D., Montreal, QC', fr: '— Marie D., Montréal, QC' }
  },
  {
    quote: {
      en: '"Excellent service for our downtown Montreal restaurant. They work around our schedule and their treatments are food-safe. Professional and reliable every time."',
      fr: '"Service excellent pour notre restaurant du centre-ville de Montréal. Ils travaillent selon notre horaire et leurs traitements sont sécuritaires pour les aliments. Professionnels et fiables à chaque fois."'
    },
    author: { en: '— Jean-Pierre M., Restaurant Owner, Montreal', fr: '— Jean-Pierre M., Propriétaire de Restaurant, Montréal' }
  },
  {
    quote: {
      en: '"Fast response for our rodent emergency in Laval. The technician was professional and explained everything clearly. Problem completely solved!"',
      fr: '"Réponse rapide pour notre problème d\'urgence de rongeurs à Laval. Le technicien était professionnel et a tout expliqué clairement. Problème complètement résolu!"'
    },
    author: { en: '— Sarah J., Laval, QC', fr: '— Sarah J., Laval, QC' }
  },
];

/**
 * Social Proof Section - Extracted from HomePageClient (SRP)
 * Single responsibility: Display stats and testimonials
 */
export default function SocialProofSection() {
  const { tx } = useLanguage();

  return (
    <section className="section proof">
      <div className="container">
        <StatsGrid />

        <div className="testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <blockquote key={index} className="testimonial">
              <p>{tx(testimonial.quote)}</p>
              <cite>{tx(testimonial.author)}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
