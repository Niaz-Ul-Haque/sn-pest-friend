'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDownIcon } from '@/components/icons';

interface FAQItemProps {
  question: { en: string; fr: string };
  answer: { en: string; fr: string } | ReactNode;
}

/**
 * Reusable FAQ accordion item - Reduces repetition (DRY)
 * Used in homepage FAQ and pest pages
 */
export default function FAQItem({ question, answer }: FAQItemProps) {
  const { t } = useLanguage();

  // Type guard to check if answer is a TranslatableText object
  const isTranslatableText = (value: unknown): value is { en: string; fr: string } => {
    return typeof value === 'object' && value !== null && 'en' in value && 'fr' in value;
  };

  return (
    <details className="faq-item">
      <summary>
        <h3>{t(question.en, question.fr)}</h3>
        <ChevronDownIcon />
      </summary>
      <div className="faq-answer">
        {isTranslatableText(answer) ? (
          <p>{t(answer.en, answer.fr)}</p>
        ) : (
          answer
        )}
      </div>
    </details>
  );
}
