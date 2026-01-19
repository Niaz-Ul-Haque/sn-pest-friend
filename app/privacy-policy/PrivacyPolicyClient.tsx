'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicyClient() {
  const { t } = useLanguage();

  return (
    <main id="main-content">
      <section className="section legal-content">
        <div className="container">
          <h1 data-en="Privacy Policy" data-fr="Politique de Confidentialité">
            {t("Privacy Policy", "Politique de Confidentialité")}
          </h1>
          <p className="legal-intro">
            <strong data-en="Effective Date:" data-fr="Date d'Entrée en Vigueur:">
              {t("Effective Date:", "Date d'Entrée en Vigueur:")}
            </strong>{' '}
            <span data-en="October 5, 2025" data-fr="5 octobre 2025">
              {t("October 5, 2025", "5 octobre 2025")}
            </span>
          </p>
          <p className="legal-intro">
            <strong data-en="Last Updated:" data-fr="Dernière Mise à Jour:">
              {t("Last Updated:", "Dernière Mise à Jour:")}
            </strong>{' '}
            <span data-en="October 5, 2025" data-fr="5 octobre 2025">
              {t("October 5, 2025", "5 octobre 2025")}
            </span>
          </p>

          <div className="legal-text">
            <p data-en="SN Pest Control ('we', 'our', or 'the Company') is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec's Law 25." data-fr="SN Pest Control (« nous », « notre » ou « la Société ») s'engage à protéger votre vie privée et vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles en conformité avec la LPRPDE du Canada et la Loi 25 du Québec.">
              {t("SN Pest Control ('we', 'our', or 'the Company') is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec's Law 25.", "SN Pest Control (« nous », « notre » ou « la Société ») s'engage à protéger votre vie privée et vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles en conformité avec la LPRPDE du Canada et la Loi 25 du Québec.")}
            </p>

            <h2 data-en="1. Information We Collect" data-fr="1. Informations que Nous Collectons">
              {t("1. Information We Collect", "1. Informations que Nous Collectons")}
            </h2>

            <h3 data-en="1.1 Personal Information" data-fr="1.1 Informations Personnelles">
              {t("1.1 Personal Information", "1.1 Informations Personnelles")}
            </h3>
            <p data-en="We collect personal information that you provide directly to us, including:" data-fr="Nous collectons les informations personnelles que vous nous fournissez directement, incluant:">
              {t("We collect personal information that you provide directly to us, including:", "Nous collectons les informations personnelles que vous nous fournissez directement, incluant:")}
            </p>
            <ul>
              <li>
                <strong data-en="Contact Information:" data-fr="Informations de Contact:">
                  {t("Contact Information:", "Informations de Contact:")}
                </strong>{' '}
                <span data-en="Name, address, email, phone number" data-fr="Nom, adresse, courriel, numéro de téléphone">
                  {t("Name, address, email, phone number", "Nom, adresse, courriel, numéro de téléphone")}
                </span>
              </li>
              <li>
                <strong data-en="Property Information:" data-fr="Informations sur la Propriété:">
                  {t("Property Information:", "Informations sur la Propriété:")}
                </strong>{' '}
                <span data-en="Property type, size, location details" data-fr="Type de propriété, taille, détails de localisation">
                  {t("Property type, size, location details", "Type de propriété, taille, détails de localisation")}
                </span>
              </li>
              <li>
                <strong data-en="Service Information:" data-fr="Informations de Service:">
                  {t("Service Information:", "Informations de Service:")}
                </strong>{' '}
                <span data-en="Pest control service requests, treatment history, service preferences" data-fr="Demandes de services de contrôle parasitaire, historique de traitement, préférences de service">
                  {t("Pest control service requests, treatment history, service preferences", "Demandes de services de contrôle parasitaire, historique de traitement, préférences de service")}
                </span>
              </li>
              <li>
                <strong data-en="Payment Information:" data-fr="Informations de Paiement:">
                  {t("Payment Information:", "Informations de Paiement:")}
                </strong>{' '}
                <span data-en="Billing address, payment method details (processed securely through third-party payment processors)" data-fr="Adresse de facturation, détails de méthode de paiement (traités de manière sécurisée par des processeurs de paiement tiers)">
                  {t("Billing address, payment method details (processed securely through third-party payment processors)", "Adresse de facturation, détails de méthode de paiement (traités de manière sécurisée par des processeurs de paiement tiers)")}
                </span>
              </li>
            </ul>

            <h3 data-en="1.2 Technical Information" data-fr="1.2 Informations Techniques">
              {t("1.2 Technical Information", "1.2 Informations Techniques")}
            </h3>
            <p data-en="When you visit our website, we may automatically collect:" data-fr="Lorsque vous visitez notre site Web, nous pouvons collecter automatiquement:">
              {t("When you visit our website, we may automatically collect:", "Lorsque vous visitez notre site Web, nous pouvons collecter automatiquement:")}
            </p>
            <ul>
              <li>
                <strong data-en="Device Information:" data-fr="Informations sur l'Appareil:">
                  {t("Device Information:", "Informations sur l'Appareil:")}
                </strong>{' '}
                <span data-en="IP address, browser type, operating system" data-fr="Adresse IP, type de navigateur, système d'exploitation">
                  {t("IP address, browser type, operating system", "Adresse IP, type de navigateur, système d'exploitation")}
                </span>
              </li>
              <li>
                <strong data-en="Usage Data:" data-fr="Données d'Utilisation:">
                  {t("Usage Data:", "Données d'Utilisation:")}
                </strong>{' '}
                <span data-en="Pages visited, time spent on pages, click patterns" data-fr="Pages visitées, temps passé sur les pages, modèles de clics">
                  {t("Pages visited, time spent on pages, click patterns", "Pages visitées, temps passé sur les pages, modèles de clics")}
                </span>
              </li>
              <li>
                <strong data-en="Cookies:" data-fr="Témoins:">
                  {t("Cookies:", "Témoins:")}
                </strong>{' '}
                <span data-en="Information collected through cookies and similar tracking technologies" data-fr="Informations collectées via des témoins et technologies de suivi similaires">
                  {t("Information collected through cookies and similar tracking technologies", "Informations collectées via des témoins et technologies de suivi similaires")}
                </span>
              </li>
            </ul>

            <h2 data-en="2. How We Use Your Information" data-fr="2. Comment Nous Utilisons Vos Informations">
              {t("2. How We Use Your Information", "2. Comment Nous Utilisons Vos Informations")}
            </h2>
            <p data-en="We use your personal information for the following purposes:" data-fr="Nous utilisons vos informations personnelles aux fins suivantes:">
              {t("We use your personal information for the following purposes:", "Nous utilisons vos informations personnelles aux fins suivantes:")}
            </p>
            <ul>
              <li>
                <strong data-en="Service Delivery:" data-fr="Prestation de Services:">
                  {t("Service Delivery:", "Prestation de Services:")}
                </strong>{' '}
                <span data-en="To provide pest control services, schedule appointments, and perform treatments" data-fr="Pour fournir des services de contrôle parasitaire, planifier des rendez-vous et effectuer des traitements">
                  {t("To provide pest control services, schedule appointments, and perform treatments", "Pour fournir des services de contrôle parasitaire, planifier des rendez-vous et effectuer des traitements")}
                </span>
              </li>
              <li>
                <strong data-en="Communication:" data-fr="Communication:">
                  {t("Communication:", "Communication:")}
                </strong>{' '}
                <span data-en="To respond to inquiries, provide quotes, send service reminders" data-fr="Pour répondre aux demandes, fournir des soumissions, envoyer des rappels de service">
                  {t("To respond to inquiries, provide quotes, send service reminders", "Pour répondre aux demandes, fournir des soumissions, envoyer des rappels de service")}
                </span>
              </li>
              <li>
                <strong data-en="Billing and Payment:" data-fr="Facturation et Paiement:">
                  {t("Billing and Payment:", "Facturation et Paiement:")}
                </strong>{' '}
                <span data-en="To process payments and maintain billing records" data-fr="Pour traiter les paiements et maintenir les dossiers de facturation">
                  {t("To process payments and maintain billing records", "Pour traiter les paiements et maintenir les dossiers de facturation")}
                </span>
              </li>
              <li>
                <strong data-en="Legal Compliance:" data-fr="Conformité Légale:">
                  {t("Legal Compliance:", "Conformité Légale:")}
                </strong>{' '}
                <span data-en="To comply with applicable laws, regulations, and licensing requirements" data-fr="Pour respecter les lois, réglementations et exigences de licence applicables">
                  {t("To comply with applicable laws, regulations, and licensing requirements", "Pour respecter les lois, réglementations et exigences de licence applicables")}
                </span>
              </li>
            </ul>

            <h2 data-en="3. Your Privacy Rights" data-fr="3. Vos Droits à la Vie Privée">
              {t("3. Your Privacy Rights", "3. Vos Droits à la Vie Privée")}
            </h2>
            <p data-en="Under Quebec's Law 25 and PIPEDA, you have the right to:" data-fr="En vertu de la Loi 25 du Québec et de la LPRPDE, vous avez le droit de:">
              {t("Under Quebec's Law 25 and PIPEDA, you have the right to:", "En vertu de la Loi 25 du Québec et de la LPRPDE, vous avez le droit de:")}
            </p>
            <ul>
              <li>
                <strong data-en="Access:" data-fr="Accès:">
                  {t("Access:", "Accès:")}
                </strong>{' '}
                <span data-en="Request a copy of the personal information we hold about you" data-fr="Demander une copie des informations personnelles que nous détenons à votre sujet">
                  {t("Request a copy of the personal information we hold about you", "Demander une copie des informations personnelles que nous détenons à votre sujet")}
                </span>
              </li>
              <li>
                <strong data-en="Correction:" data-fr="Correction:">
                  {t("Correction:", "Correction:")}
                </strong>{' '}
                <span data-en="Request correction of inaccurate or incomplete information" data-fr="Demander la correction d'informations inexactes ou incomplètes">
                  {t("Request correction of inaccurate or incomplete information", "Demander la correction d'informations inexactes ou incomplètes")}
                </span>
              </li>
              <li>
                <strong data-en="Deletion:" data-fr="Suppression:">
                  {t("Deletion:", "Suppression:")}
                </strong>{' '}
                <span data-en="Request deletion of your personal information (subject to legal retention requirements)" data-fr="Demander la suppression de vos informations personnelles (sous réserve des exigences de conservation légales)">
                  {t("Request deletion of your personal information (subject to legal retention requirements)", "Demander la suppression de vos informations personnelles (sous réserve des exigences de conservation légales)")}
                </span>
              </li>
              <li>
                <strong data-en="Withdraw Consent:" data-fr="Retrait du Consentement:">
                  {t("Withdraw Consent:", "Retrait du Consentement:")}
                </strong>{' '}
                <span data-en="Withdraw your consent for consent-based processing" data-fr="Retirer votre consentement pour le traitement basé sur le consentement">
                  {t("Withdraw your consent for consent-based processing", "Retirer votre consentement pour le traitement basé sur le consentement")}
                </span>
              </li>
            </ul>
            <p data-en="To exercise these rights, contact us at: snpest20@gmail.com or call (514) 582-4400" data-fr="Pour exercer ces droits, contactez-nous à: snpest20@gmail.com ou appelez (514) 582-4400">
              {t("To exercise these rights, contact us at:", "Pour exercer ces droits, contactez-nous à:")}{' '}
              <a href="mailto:snpest20@gmail.com">snpest20@gmail.com</a>{' '}
              {t("or call", "ou appelez")}{' '}
              <a href="tel:+15145824400">(514) 582-4400</a>
            </p>

            <h2 data-en="4. Security Measures" data-fr="4. Mesures de Sécurité">
              {t("4. Security Measures", "4. Mesures de Sécurité")}
            </h2>
            <p data-en="We implement appropriate technical and organizational security measures to protect your personal information, including:" data-fr="Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles, incluant:">
              {t("We implement appropriate technical and organizational security measures to protect your personal information, including:", "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles, incluant:")}
            </p>
            <ul>
              <li data-en="Encryption of data in transit and at rest" data-fr="Chiffrement des données en transit et au repos">
                {t("Encryption of data in transit and at rest", "Chiffrement des données en transit et au repos")}
              </li>
              <li data-en="Secure payment processing through PCI-DSS compliant providers" data-fr="Traitement de paiement sécurisé via des fournisseurs conformes PCI-DSS">
                {t("Secure payment processing through PCI-DSS compliant providers", "Traitement de paiement sécurisé via des fournisseurs conformes PCI-DSS")}
              </li>
              <li data-en="Access controls and authentication measures" data-fr="Contrôles d'accès et mesures d'authentification">
                {t("Access controls and authentication measures", "Contrôles d'accès et mesures d'authentification")}
              </li>
              <li data-en="Regular security assessments and updates" data-fr="Évaluations et mises à jour de sécurité régulières">
                {t("Regular security assessments and updates", "Évaluations et mises à jour de sécurité régulières")}
              </li>
            </ul>

            <h2 data-en="5. Contact Information" data-fr="5. Coordonnées">
              {t("5. Contact Information", "5. Coordonnées")}
            </h2>
            <p data-en="For questions, concerns, or requests regarding this Privacy Policy, please contact us:" data-fr="Pour des questions, préoccupations ou demandes concernant cette Politique de Confidentialité, veuillez nous contacter:">
              {t("For questions, concerns, or requests regarding this Privacy Policy, please contact us:", "Pour des questions, préoccupations ou demandes concernant cette Politique de Confidentialité, veuillez nous contacter:")}
            </p>

            <div className="contact-box">
              <p><strong>SN Pest Control</strong></p>
              <p>
                2311 RUE LISE<br />
                {t("Montreal, QC H8N 1M7", "Montréal, QC H8N 1M7")}<br />
                Canada
              </p>
              <p>
                {t("Email:", "Courriel:")} <a href="mailto:snpest20@gmail.com">snpest20@gmail.com</a><br />
                {t("Phone:", "Téléphone:")} <a href="tel:+15145824400">(514) 582-4400</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
