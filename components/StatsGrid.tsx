'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface StatItem {
  value: string;
  label: { en: string; fr: string };
}

// Stats data - Single source of truth (DRY)
const STATS: StatItem[] = [
  { value: '500+', label: { en: 'Satisfied Customers', fr: 'Clients Satisfaits' } },
  { value: '5+', label: { en: 'Years Serving Montreal', fr: 'Années à Desservir Montréal' } },
  { value: '24/7', label: { en: 'Emergency Response', fr: "Réponse d'Urgence" } },
  { value: '100%', label: { en: 'Satisfaction Guarantee', fr: 'Garantie de Satisfaction' } },
];

/**
 * Stats grid component - Single source of truth for company metrics
 */
export default function StatsGrid() {
  const { t } = useLanguage();

  return (
    <div className="stats-grid">
      {STATS.map((stat, index) => (
        <div key={index} className="stat">
          <div className="stat-number">{stat.value}</div>
          <div className="stat-label">{t(stat.label.en, stat.label.fr)}</div>
        </div>
      ))}
    </div>
  );
}
