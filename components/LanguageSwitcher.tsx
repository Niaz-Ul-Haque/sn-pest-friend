'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-dropdown">
      <select 
        className="language-select" 
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
