'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrustBadges } from '@/components';
import { PHONE_LINK, PHONE_NUMBER } from '@/constants/contact';
import { PAGE_CONTENT, COMMON_LABELS } from '@/constants/translations';

/**
 * Hero Section - Extracted from HomePageClient (SRP)
 * Single responsibility: Display the main hero/landing section
 */
export default function HeroSection() {
  const { tx } = useLanguage();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{tx(PAGE_CONTENT.heroTitle)}</h1>
          <p className="hero-text">{tx(PAGE_CONTENT.heroText)}</p>

          <TrustBadges />

          <div className="hero-actions">
            <Link href="/quote-calculator/" className="btn btn-primary btn-large">
              {tx(COMMON_LABELS.freeQuote)}
            </Link>
            <a href={PHONE_LINK} className="btn btn-secondary btn-large">
              {tx({ en: `Call ${PHONE_NUMBER}`, fr: `Appelez ${PHONE_NUMBER}` })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
