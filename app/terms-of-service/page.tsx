import { Metadata } from 'next';
import TermsOfServiceClient from './TermsOfServiceClient';

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description: "Conditions d'Utilisation de SN Pest Control Montréal. Consultez nos ententes de service, garanties et responsabilités des clients pour les services de contrôle parasitaire dans le Grand Montréal.",
  robots: "noindex, follow",
  alternates: {
    canonical: "/terms-of-service/",
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
