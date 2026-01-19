'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeader } from '@/components';
import { PAGE_CONTENT, COMMON_LABELS } from '@/constants/translations';
import { SERVICE_RADIUS_KM, RESPONSE_TIME_HOURS } from '@/constants/contact';

interface AreaGroup {
  title: { en: string; fr: string };
  areas: Array<{ en: string; fr: string } | string>;
}

const AREA_GROUPS: AreaGroup[] = [
  {
    title: { en: 'Montreal Boroughs', fr: 'Arrondissements de Montréal' },
    areas: [
      { en: 'Downtown Montreal', fr: 'Centre-ville de Montréal' },
      'Plateau-Mont-Royal',
      'Ville-Marie',
      'Notre-Dame-de-Grâce',
      'Côte-des-Neiges',
      'Verdun',
      'Saint-Laurent',
      'Rosemont',
    ]
  },
  {
    title: { en: 'Greater Montreal', fr: 'Grand Montréal' },
    areas: [
      'Laval',
      'Longueuil',
      'Brossard',
      { en: 'West Island', fr: "Ouest-de-l'Île" },
      { en: 'South Shore', fr: 'Rive-Sud' },
      { en: 'North Shore', fr: 'Rive-Nord' },
      'Dollard-des-Ormeaux',
      'Pointe-Claire',
    ]
  }
];

/**
 * Service Areas Section - Extracted from HomePageClient (SRP)
 * Single responsibility: Display service coverage areas
 */
export default function ServiceAreasSection() {
  const { t, tx } = useLanguage();

  return (
    <section id="areas" className="section service-areas">
      <div className="container">
        <SectionHeader 
          title={PAGE_CONTENT.serviceAreasTitle}
          subtitle={PAGE_CONTENT.serviceAreasSubtitle}
        />

        <div className="areas-content">
          <div className="areas-text">
            <p>
              {t(
                `SN Pest Control offers professional extermination and pest management services throughout Greater Montreal. Our service area extends ${SERVICE_RADIUS_KM} kilometers from downtown Montreal.`,
                `SN Pest Control offre des services professionnels d'extermination et de gestion parasitaire dans tout le Grand Montréal. Notre zone de service s'étend à ${SERVICE_RADIUS_KM} kilomètres du centre-ville de Montréal.`
              )}
            </p>

            <div className="areas-columns">
              {AREA_GROUPS.map((group, groupIndex) => (
                <div key={groupIndex} className="area-group">
                  <h3>{tx(group.title)}</h3>
                  <ul>
                    {group.areas.map((area, areaIndex) => (
                      <li key={areaIndex}>
                        {typeof area === 'string' ? area : tx(area)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="coverage-info">
              <p>
                <strong>{t('Service Radius:', 'Rayon de Service:')}</strong>{' '}
                <span>
                  {t(
                    `${SERVICE_RADIUS_KM} kilometers from downtown Montreal`,
                    `${SERVICE_RADIUS_KM} kilomètres du centre-ville de Montréal`
                  )}
                </span>
              </p>
              <p>
                <strong>{t('Response Time:', 'Temps de Réponse:')}</strong>{' '}
                <span>
                  {t(
                    `${RESPONSE_TIME_HOURS} hours for emergency calls, same-day service available`,
                    `${RESPONSE_TIME_HOURS} heures pour appels d'urgence, service le jour même disponible`
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
