// Centralized type definitions
export type Language = 'en' | 'fr';

export interface TranslatableText {
  en: string;
  fr: string;
}

// Common component prop patterns
export interface WithLanguageProps {
  lang?: Language;
}

// Contact information
export interface ContactInfo {
  phone: string;
  email: string;
  address: TranslatableText;
}
