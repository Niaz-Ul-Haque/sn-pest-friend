// Quote Calculator Configuration - Extracted for DRY and maintainability
// All pricing, multipliers, and packages in one place (Single Source of Truth)

export type Severity = 'low' | 'medium' | 'high' | 'no-idea';
export type PropertyType = 'apartment' | 'townhouse' | 'detached-small' | 'detached-large' | 'commercial';
export type ServiceFrequency = 'one-time' | 'seasonal' | 'monthly';
export type ProtectionPlan = 'none' | '4-month' | '6-month' | '1-year';
export type Language = 'en' | 'fr' | 'es' | 'zh' | 'it' | 'fa' | 'ar';

// Pricing per property type and service
export const PRICING: Record<PropertyType, Record<string, number>> = {
  apartment: {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 150, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  townhouse: {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 200, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  'detached-small': {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 250, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  'detached-large': {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 250, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  commercial: {
    mice: 80, rats: 80, ants: 69, spiders: 69, cockroaches: 80,
    wasps: 100, bedbugs: 100, fleas: 80, silverfish: 69, earwigs: 69,
    centipedes: 69, 'carpenter-ants': 80, 'fruit-flies': 69,
    'rodent-family': 150, 'crawling-defense': 180, 'general-guard': 160,
  },
};

// Package compositions
export const PACKAGES: Record<string, string[]> = {
  'rodent-family': ['mice', 'rats'],
  'crawling-defense': ['ants', 'spiders', 'cockroaches'],
  'general-guard': ['ants', 'spiders', 'mice'],
};

// Severity multipliers for pricing
export const SEVERITY_MULTIPLIERS: Record<Severity, number> = {
  low: 1.0,
  medium: 1.2,
  high: 1.5,
  'no-idea': 1.25,
};

// Protection plan pricing
export const PROTECTION_PLAN_PRICING: Record<ProtectionPlan, number> = {
  none: 0,
  '4-month': 40,
  '6-month': 50,
  '1-year': 60,
};

// Valid promo codes and their discounts
export const PROMO_CODES: Record<string, number> = {
  'SILVER10': 0.10,
  'SAVE20': 0.20,
};

// Plan discounts
export const PLAN_DISCOUNTS: Record<ServiceFrequency, number> = {
  'one-time': 0,
  'seasonal': 0.20,
  'monthly': 0.30,
};

// Services list with images
export const SERVICES = [
  { id: 'ants', image: '/images/ants.jpeg' },
  { id: 'mice', image: '/images/mice.jpeg' },
  { id: 'spiders', image: '/images/spiders.jpeg' },
  { id: 'cockroaches', image: '/images/cockroaches.jpeg' },
  { id: 'rats', image: '/images/rats.jpeg' },
  { id: 'wasps', image: '/images/wasps.jpeg' },
  { id: 'bedbugs', image: '/images/bedbugs.jpeg' },
  { id: 'fleas', image: '/images/fleas.jpeg' },
  { id: 'silverfish', image: '/images/silverfish.jpeg' },
  { id: 'earwigs', image: '/images/earwigs.jpeg' },
  { id: 'centipedes', image: '/images/centipedes.jpeg' },
  { id: 'carpenter-ants', image: '/images/carpenter-ants.jpeg' },
  { id: 'fruit-flies', image: '/images/fruit-flies.jpeg' },
] as const;
