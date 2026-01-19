'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components';
import { PAGE_CONTENT } from '@/constants/translations';

interface ProcessStep {
  number: number;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: { en: 'Free Inspection and Assessment', fr: 'Inspection et Évaluation Gratuites' },
    description: {
      en: 'Complete property evaluation and pest identification by our Montreal certified exterminators.',
      fr: 'Évaluation complète de la propriété et identification des parasites par nos exterminateurs certifiés de Montréal.'
    }
  },
  {
    number: 2,
    title: { en: 'Customized Treatment Plan', fr: 'Plan de Traitement Personnalisé' },
    description: {
      en: 'Detailed treatment strategy based on inspection results and your specific needs.',
      fr: "Stratégie de traitement détaillée basée sur les résultats d'inspection et vos besoins spécifiques."
    }
  },
  {
    number: 3,
    title: { en: 'Professional Implementation', fr: 'Mise en Œuvre Professionnelle' },
    description: {
      en: 'Expert execution of the treatment plan using the latest pest control technology.',
      fr: 'Exécution experte du plan de traitement utilisant la technologie de contrôle parasitaire la plus récente.'
    }
  },
  {
    number: 4,
    title: { en: 'Follow-up and Monitoring', fr: 'Suivi et Surveillance' },
    description: {
      en: 'Ongoing monitoring and maintenance to ensure long-term pest-free results.',
      fr: 'Surveillance et maintenance continues pour assurer des résultats à long terme sans parasites.'
    }
  },
];

/**
 * Process Section - Extracted from HomePageClient (SRP)
 * Single responsibility: Display the 4-step pest control process
 */
export default function ProcessSection() {
  const { tx } = useLanguage();

  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHeader 
          title={PAGE_CONTENT.processTitle}
          subtitle={PAGE_CONTENT.processSubtitle}
        />

        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{tx(step.title)}</h3>
              <p>{tx(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
