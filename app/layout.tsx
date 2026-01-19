import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import SkipLink from '@/components/SkipLink';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const BASE_URL = 'https://www.silvernestpestcontrol.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e3a5f',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Exterminateur Montréal | SN Pest Control | Punaises de Lit, Rats, Souris, Coquerelles',
    template: '%s | SN Pest Control Montréal',
  },
  description: '★★★★★ Exterminateur #1 à Montréal, Laval & Longueuil. Spécialistes punaises de lit, rats, souris, coquerelles, fourmis. Service le jour même. Résultats garantis. Licencié CNESST. Appelez (514) 582-4400 pour une estimation gratuite!',
  keywords: 'exterminateur Montréal, extermination punaises de lit Montréal, extermination rats Montréal, extermination souris Montréal, extermination coquerelles Montréal, pest control Montreal, exterminateur Laval, exterminateur Longueuil, traitement punaises de lit, élimination parasites, service urgence parasites Montréal, exterminateur près de moi',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'fr-CA': '/',
    },
  },
  verification: {
    google: 'd1004c921250f82c',
  },
  category: 'Pest Control Services',
  creator: 'SN Pest Control',
  publisher: 'SN Pest Control Montréal',
  openGraph: {
    type: 'website',
    siteName: 'SN Pest Control Montréal - Exterminateur Professionnel',
    title: 'Exterminateur Montréal | SN Pest Control | Service le Jour Même',
    description: "Exterminateur #1 dans le Grand Montréal. Spécialistes punaises de lit, rats, souris, coquerelles, fourmis, guêpes. Résultats garantis. Appelez (514) 582-4400",
    url: '/',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    images: [
      {
        url: '/images/bedbugs.jpeg',
        width: 1200,
        height: 630,
        alt: "Service Professionnel d'Extermination Montréal - SN Pest Control",
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterminateur Montréal | SN Pest Control | Punaises de Lit & Parasites',
    description: "Exterminateur professionnel à Montréal. Punaises de lit, rats, souris, coquerelles. Service le jour même. Résultats garantis. Appelez (514) 582-4400",
    images: ['/images/bedbugs.jpeg'],
    creator: '@snpestcontrol',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CA">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>
        <LanguageProvider>
          <LanguageSwitcher />
          <SkipLink />
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
