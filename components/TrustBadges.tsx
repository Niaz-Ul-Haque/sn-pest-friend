'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldIcon, CheckCircleIcon, ClockIcon, LeafIcon } from '@/components/icons';

interface TrustBadge {
  icon: React.ReactNode;
  label: { en: string; fr: string };
}

// Trust badges data - Single source of truth
const TRUST_BADGES: TrustBadge[] = [
  { 
    icon: <ShieldIcon />, 
    label: { en: 'Licensed & Insured', fr: 'Licencié et Assuré' } 
  },
  { 
    icon: <CheckCircleIcon />, 
    label: { en: "5+ Years Experience", fr: "5+ Ans d'Expérience" } 
  },
  { 
    icon: <ClockIcon />, 
    label: { en: '24/7 Emergency Response', fr: "Réponse d'Urgence 24/7" } 
  },
  { 
    icon: <LeafIcon />, 
    label: { en: 'Eco-Friendly Options', fr: 'Options Écologiques' } 
  },
];

/**
 * Reusable TrustBadges component
 * Displays company credentials - used in hero and other sections
 */
export default function TrustBadges() {
  const { t } = useLanguage();

  return (
    <div className="trust-badges">
      {TRUST_BADGES.map((badge, index) => (
        <div key={index} className="badge">
          {badge.icon}
          <span>{t(badge.label.en, badge.label.fr)}</span>
        </div>
      ))}
    </div>
  );
}
