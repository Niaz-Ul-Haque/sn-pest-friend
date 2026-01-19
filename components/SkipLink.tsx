'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className="skip-link" data-en="Skip to main content" data-fr="Aller au contenu principal">
      {t('Skip to main content', 'Aller au contenu principal')}
    </a>
  );
}
