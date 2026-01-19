'use client';

import { ChevronUpIcon } from '@/components/icons';

export default function BackToTop() {
  return (
    <a href="#" className="back-to-top" aria-label="Retour en haut">
      <ChevronUpIcon />
    </a>
  );
}
