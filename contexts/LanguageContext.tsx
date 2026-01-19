'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import type { Language, TranslatableText } from '@/types';

// Re-export types for convenience
export type { Language, TranslatableText };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Translate using two separate strings */
  t: (en: string, fr: string) => string;
  /** Translate using a TranslatableText object - cleaner API */
  tx: (text: TranslatableText) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  // Apply language to all data-en/data-fr elements (for compatibility with existing HTML)
  useEffect(() => {
    document.querySelectorAll('[data-en]').forEach((element) => {
      const el = element as HTMLElement;
      const text = language === 'en' ? el.dataset.en : el.dataset.fr;
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          (el as HTMLInputElement).placeholder = text;
        } else if (el.tagName === 'IMG') {
          (el as HTMLImageElement).alt = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }, [language]);

  // Traditional translation function with two string parameters
  const t = useCallback((en: string, fr: string) => {
    return language === 'en' ? en : fr;
  }, [language]);

  // Cleaner translation function using TranslatableText object
  // Reduces repetition and improves type safety
  const tx = useCallback((text: TranslatableText) => {
    return language === 'en' ? text.en : text.fr;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
