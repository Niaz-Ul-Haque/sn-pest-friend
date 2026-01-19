import { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de Confidentialité de SN Pest Control Montréal. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles en conformité avec la Loi 25 du Québec et la LPRPDE.",
  robots: "noindex, follow",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
