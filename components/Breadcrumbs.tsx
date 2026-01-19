'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: { en: string; fr: string };
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useLanguage();

  return (
    <div className="breadcrumbs">
      <div className="container">
        <nav aria-label="Fil d'Ariane">
          <Link href="/" data-en="Home" data-fr="Accueil">
            {t('Home', 'Accueil')}
          </Link>
          {items.map((item, index) => (
            <span key={index}>
              <span className="separator" aria-hidden="true">/</span>
              {item.href ? (
                <Link href={item.href} data-en={item.label.en} data-fr={item.label.fr}>
                  {t(item.label.en, item.label.fr)}
                </Link>
              ) : (
                <span aria-current="page" data-en={item.label.en} data-fr={item.label.fr}>
                  {t(item.label.en, item.label.fr)}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
