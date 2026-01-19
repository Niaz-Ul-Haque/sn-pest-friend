// Centralized translation content - Addresses DRY violation
// Instead of repeating strings everywhere, define them once here

import { TranslatableText } from '@/types';

// Common UI labels used across multiple components
export const COMMON_LABELS = {
  freeQuote: { en: 'Free Quote', fr: 'Soumission Gratuite' },
  getQuote: { en: 'Get a Quote', fr: 'Obtenir une Soumission' },
  callNow: { en: 'Call Now', fr: 'Appelez Maintenant' },
  learnMore: { en: 'Learn More', fr: 'En Savoir Plus' },
  contact: { en: 'Contact', fr: 'Contact' },
  services: { en: 'Services', fr: 'Services' },
  home: { en: 'Home', fr: 'Accueil' },
  faq: { en: 'FAQ', fr: 'FAQ' },
} as const satisfies Record<string, TranslatableText>;

// Navigation labels
export const NAV_LABELS = {
  pests: { en: 'Pests', fr: 'Parasites' },
  allPests: { en: 'All Pests', fr: 'Tous les Parasites' },
  ourProcess: { en: 'Our Process', fr: 'Notre Processus' },
  serviceAreas: { en: 'Service Areas', fr: 'Secteurs Desservis' },
  quickLinks: { en: 'Quick Links', fr: 'Liens Rapides' },
  ourServices: { en: 'Our Services', fr: 'Nos Services' },
} as const satisfies Record<string, TranslatableText>;

// Pest names
export const PEST_NAMES = {
  bedBugs: { en: 'Bed Bugs', fr: 'Punaises de lit' },
  rats: { en: 'Rats', fr: 'Rats' },
  mice: { en: 'Mice', fr: 'Souris' },
  cockroaches: { en: 'Cockroaches', fr: 'Coquerelles' },
  ants: { en: 'Ants', fr: 'Fourmis' },
  wasps: { en: 'Wasps', fr: 'Guêpes' },
  spiders: { en: 'Spiders', fr: 'Araignées' },
  fleas: { en: 'Fleas', fr: 'Puces' },
} as const satisfies Record<string, TranslatableText>;

// Page titles and meta
export const PAGE_CONTENT = {
  heroTitle: { 
    en: '#1 Bed Bug Extermination Experts in Montreal | All Pest Control Services', 
    fr: 'Experts #1 en Extermination de Punaises de Lit à Montréal | Tous Services de Contrôle Parasitaire' 
  },
  heroText: {
    en: '★★★★★ Specialized in bed bug elimination with guaranteed results. Professional pest control for rodents, cockroaches, ants and all pests. Licensed exterminators with 5+ years experience serving Greater Montreal. Same-day emergency service available with 100% satisfaction guarantee.',
    fr: "★★★★★ Spécialisés en élimination de punaises de lit avec résultats garantis. Contrôle parasitaire professionnel pour rongeurs, coquerelles, fourmis et tous les parasites. Exterminateurs licenciés avec plus de 5 ans d'expérience desservant le Grand Montréal. Service d'urgence le jour même disponible avec garantie de satisfaction à 100%."
  },
  servicesTitle: {
    en: 'Professional Pest Control Services in Montreal - Bed Bug Specialists',
    fr: 'Services Professionnels de Contrôle Parasitaire à Montréal - Spécialistes des Punaises de Lit'
  },
  servicesSubtitle: {
    en: 'Expert bed bug extermination plus comprehensive solutions for all pest problems across Greater Montreal',
    fr: 'Extermination experte de punaises de lit plus solutions complètes pour tous les problèmes de parasites à travers le Grand Montréal'
  },
  processTitle: {
    en: 'Our Proven 4-Step Pest Control Process',
    fr: 'Notre Processus de Contrôle Parasitaire en 4 Étapes Éprouvées'
  },
  processSubtitle: {
    en: 'Professional pest control made simple and effective',
    fr: 'Contrôle parasitaire professionnel rendu simple et efficace'
  },
  serviceAreasTitle: {
    en: 'Serving Greater Montreal and Surrounding Areas',
    fr: 'Desservant le Grand Montréal et les Environs'
  },
  serviceAreasSubtitle: {
    en: 'Complete pest control coverage across the entire Montreal region',
    fr: 'Couverture complète de contrôle parasitaire dans toute la région de Montréal'
  },
  faqTitle: {
    en: 'Frequently Asked Questions - Bed Bugs and Pest Control',
    fr: 'Questions Fréquemment Posées - Punaises de Lit et Contrôle Parasitaire'
  },
  contactTitle: {
    en: 'Contact SN Pest Control Montreal',
    fr: 'Contacter SN Pest Control Montréal'
  },
  contactSubtitle: {
    en: 'Get your free consultation today – serving all of Greater Montreal',
    fr: 'Obtenez votre consultation gratuite aujourd\'hui – desservant tout le Grand Montréal'
  },
} as const satisfies Record<string, TranslatableText>;

// Legal pages
export const LEGAL_LABELS = {
  privacyPolicy: { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
  termsOfService: { en: 'Terms of Service', fr: "Conditions d'Utilisation" },
  copyright: { 
    en: '© 2025 SN Pest Control Montreal. All rights reserved.', 
    fr: '© 2025 SN Pest Control Montréal. Tous droits réservés.' 
  },
} as const satisfies Record<string, TranslatableText>;

// Trust badges text
export const TRUST_BADGES_TEXT = {
  licensed: { en: 'Licensed & Insured', fr: 'Licencié et Assuré' },
  experience: { en: '5+ Years Experience', fr: "5+ Ans d'Expérience" },
  emergency: { en: '24/7 Emergency Response', fr: "Réponse d'Urgence 24/7" },
  ecoFriendly: { en: 'Eco-Friendly Options', fr: 'Options Écologiques' },
} as const satisfies Record<string, TranslatableText>;
