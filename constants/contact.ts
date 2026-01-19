// Centralized contact information - Single source of truth (DRY)
export const PHONE_NUMBER = '(514) 582-4400';
export const PHONE_LINK = 'tel:+15145824400';
export const EMAIL = 'snpest20@gmail.com';
export const EMAIL_LINK = 'mailto:snpest20@gmail.com';

export const ADDRESS = {
  street: '2311 RUE LISE',
  city: { en: 'Montreal, QC', fr: 'Montréal, QC' },
  postalCode: 'H8N 1M7',
  country: 'Canada',
} as const;

export const SERVICE_RADIUS_KM = 50;
export const RESPONSE_TIME_HOURS = '2-4';

export const BUSINESS_HOURS = {
  weekdays: { en: 'Monday – Friday:', fr: 'Lundi – Vendredi:' },
  weekdayHours: { en: '8:00 AM – 6:00 PM', fr: '8h00 – 18h00' },
  weekend: { en: 'Saturday – Sunday:', fr: 'Samedi – Dimanche:' },
  weekendHours: { en: '8:00 AM – 7:00 PM', fr: '8h00 – 19h00' },
} as const;
