'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PHONE_NUMBER, PHONE_LINK } from '@/constants/contact';

interface CTAButtonsProps {
  showQuote?: boolean;
  showCall?: boolean;
  size?: 'small' | 'medium' | 'large';
  quoteHref?: string;
}

/**
 * Reusable CTA button group - Addresses DRY violation
 * These buttons appear in multiple locations: Hero, Services, Contact sections
 */
export default function CTAButtons({ 
  showQuote = true, 
  showCall = true, 
  size = 'medium',
  quoteHref = '/quote-calculator/'
}: CTAButtonsProps) {
  const { t } = useLanguage();
  
  const sizeClass = size === 'large' ? 'btn-large' : size === 'small' ? 'btn-small' : '';

  return (
    <div className="cta-buttons">
      {showQuote && (
        <Link 
          href={quoteHref} 
          className={`btn btn-primary ${sizeClass}`}
        >
          {t('Free Quote', 'Soumission Gratuite')}
        </Link>
      )}
      {showCall && (
        <a 
          href={PHONE_LINK} 
          className={`btn btn-secondary ${sizeClass}`}
        >
          {t(`Call ${PHONE_NUMBER}`, `Appelez ${PHONE_NUMBER}`)}
        </a>
      )}
    </div>
  );
}
