'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface SectionHeaderProps {
  title: { en: string; fr: string };
  subtitle?: { en: string; fr: string };
}

/**
 * Reusable section header component - Reduces repetition (DRY)
 * Pattern: .section-header with h2 and optional p
 */
export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="section-header">
      <h2>{t(title.en, title.fr)}</h2>
      {subtitle && <p>{t(subtitle.en, subtitle.fr)}</p>}
    </div>
  );
}
