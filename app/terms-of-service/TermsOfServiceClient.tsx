'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsOfServiceClient() {
  const { t } = useLanguage();

  return (
    <main id="main-content">
      <section className="section legal-content">
        <div className="container">
          <h1 data-en="Terms of Service" data-fr="Conditions d'Utilisation">
            {t("Terms of Service", "Conditions d'Utilisation")}
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
            <p data-en="These Terms of Service ('Agreement') govern the provision of pest control services by SN Pest Control ('the Company', 'we', or 'our') to the customer ('Customer', 'you', or 'your'). By engaging our services, you agree to be bound by these terms." data-fr="Ces Conditions d'Utilisation (« Entente ») régissent la prestation de services de contrôle parasitaire par SN Pest Control (« l'Entreprise », « nous » ou « notre ») au client (« Client », « vous » ou « votre »). En engageant nos services, vous acceptez d'être lié par ces conditions.">
              {t("These Terms of Service ('Agreement') govern the provision of pest control services by SN Pest Control ('the Company', 'we', or 'our') to the customer ('Customer', 'you', or 'your'). By engaging our services, you agree to be bound by these terms.", "Ces Conditions d'Utilisation (« Entente ») régissent la prestation de services de contrôle parasitaire par SN Pest Control (« l'Entreprise », « nous » ou « notre ») au client (« Client », « vous » ou « votre »). En engageant nos services, vous acceptez d'être lié par ces conditions.")}
            </p>

            <h2 data-en="1. Services Provided" data-fr="1. Services Fournis">
              {t("1. Services Provided", "1. Services Fournis")}
            </h2>

            <h3 data-en="1.1 Scope of Services" data-fr="1.1 Portée des Services">
              {t("1.1 Scope of Services", "1.1 Portée des Services")}
            </h3>
            <p data-en="The Company provides professional pest control and extermination services including, but not limited to:" data-fr="L'Entreprise fournit des services professionnels de contrôle parasitaire et d'extermination incluant, mais sans s'y limiter:">
              {t("The Company provides professional pest control and extermination services including, but not limited to:", "L'Entreprise fournit des services professionnels de contrôle parasitaire et d'extermination incluant, mais sans s'y limiter:")}
            </p>
            <ul>
              <li data-en="Bed bug treatment services" data-fr="Traitement de punaises de lit">
                {t("Bed bug treatment services", "Traitement de punaises de lit")}
              </li>
              <li data-en="Rodent control and elimination (mice, rats)" data-fr="Contrôle et élimination des rongeurs (souris, rats)">
                {t("Rodent control and elimination (mice, rats)", "Contrôle et élimination des rongeurs (souris, rats)")}
              </li>
              <li data-en="Insect control (cockroaches, ants, spiders, wasps, etc.)" data-fr="Contrôle des insectes (coquerelles, fourmis, araignées, guêpes, etc.)">
                {t("Insect control (cockroaches, ants, spiders, wasps, etc.)", "Contrôle des insectes (coquerelles, fourmis, araignées, guêpes, etc.)")}
              </li>
              <li data-en="Property inspection and assessment" data-fr="Inspection et évaluation de propriété">
                {t("Property inspection and assessment", "Inspection et évaluation de propriété")}
              </li>
              <li data-en="Preventive pest management" data-fr="Gestion parasitaire préventive">
                {t("Preventive pest management", "Gestion parasitaire préventive")}
              </li>
              <li data-en="Follow-up treatments and monitoring" data-fr="Traitements de suivi et surveillance">
                {t("Follow-up treatments and monitoring", "Traitements de suivi et surveillance")}
              </li>
            </ul>

            <h3 data-en="1.2 Service Areas" data-fr="1.2 Zones de Service">
              {t("1.2 Service Areas", "1.2 Zones de Service")}
            </h3>
            <p data-en="We provide services throughout Greater Montreal, including Montreal, Laval, Longueuil, and surrounding areas within a 50-kilometer radius of downtown Montreal." data-fr="Nous fournissons des services dans tout le Grand Montréal, incluant Montréal, Laval, Longueuil et les zones environnantes dans un rayon de 50 kilomètres du centre-ville de Montréal.">
              {t("We provide services throughout Greater Montreal, including Montreal, Laval, Longueuil, and surrounding areas within a 50-kilometer radius of downtown Montreal.", "Nous fournissons des services dans tout le Grand Montréal, incluant Montréal, Laval, Longueuil et les zones environnantes dans un rayon de 50 kilomètres du centre-ville de Montréal.")}
            </p>

            <h2 data-en="2. Quotes and Scheduling" data-fr="2. Soumissions et Planification">
              {t("2. Quotes and Scheduling", "2. Soumissions et Planification")}
            </h2>
            <ul>
              <li data-en="All quotes are estimates based on information provided and may be adjusted after on-site inspection" data-fr="Toutes les soumissions sont des estimations basées sur l'information fournie et peuvent être ajustées après l'inspection sur place">
                {t("All quotes are estimates based on information provided and may be adjusted after on-site inspection", "Toutes les soumissions sont des estimations basées sur l'information fournie et peuvent être ajustées après l'inspection sur place")}
              </li>
              <li data-en="Quotes are valid for 30 days from the date of issue" data-fr="Les soumissions sont valides pour 30 jours à partir de la date d'émission">
                {t("Quotes are valid for 30 days from the date of issue", "Les soumissions sont valides pour 30 jours à partir de la date d'émission")}
              </li>
              <li data-en="Appointments are scheduled based on availability" data-fr="Les rendez-vous sont planifiés selon la disponibilité">
                {t("Appointments are scheduled based on availability", "Les rendez-vous sont planifiés selon la disponibilité")}
              </li>
              <li data-en="We strive to provide same-day or next-day service when possible" data-fr="Nous nous efforçons de fournir un service le jour même ou le lendemain lorsque possible">
                {t("We strive to provide same-day or next-day service when possible", "Nous nous efforçons de fournir un service le jour même ou le lendemain lorsque possible")}
              </li>
              <li data-en="Customers must provide minimum 24 hours notice for cancellations or rescheduling" data-fr="Les clients doivent fournir un préavis minimum de 24 heures pour les annulations ou reports">
                {t("Customers must provide minimum 24 hours notice for cancellations or rescheduling", "Les clients doivent fournir un préavis minimum de 24 heures pour les annulations ou reports")}
              </li>
            </ul>

            <h2 data-en="3. Customer Responsibilities" data-fr="3. Responsabilités du Client">
              {t("3. Customer Responsibilities", "3. Responsabilités du Client")}
            </h2>

            <h3 data-en="3.1 Preparation" data-fr="3.1 Préparation">
              {t("3.1 Preparation", "3.1 Préparation")}
            </h3>
            <p data-en="Customers must:" data-fr="Les clients doivent:">
              {t("Customers must:", "Les clients doivent:")}
            </p>
            <ul>
              <li data-en="Follow all preparation instructions provided by the Company" data-fr="Suivre toutes les instructions de préparation fournies par l'Entreprise">
                {t("Follow all preparation instructions provided by the Company", "Suivre toutes les instructions de préparation fournies par l'Entreprise")}
              </li>
              <li data-en="Ensure safe access to treatment areas" data-fr="Assurer un accès sécuritaire aux zones de traitement">
                {t("Ensure safe access to treatment areas", "Assurer un accès sécuritaire aux zones de traitement")}
              </li>
              <li data-en="Remove or protect personal items as instructed" data-fr="Retirer ou protéger les articles personnels tel qu'indiqué">
                {t("Remove or protect personal items as instructed", "Retirer ou protéger les articles personnels tel qu'indiqué")}
              </li>
              <li data-en="Inform the Company of any health conditions, allergies, or sensitivities" data-fr="Informer l'Entreprise de tout problème de santé, allergies ou sensibilités">
                {t("Inform the Company of any health conditions, allergies, or sensitivities", "Informer l'Entreprise de tout problème de santé, allergies ou sensibilités")}
              </li>
              <li data-en="Disclose the presence of pets, children, or vulnerable individuals" data-fr="Divulguer la présence d'animaux, enfants ou personnes vulnérables">
                {t("Disclose the presence of pets, children, or vulnerable individuals", "Divulguer la présence d'animaux, enfants ou personnes vulnérables")}
              </li>
            </ul>

            <h3 data-en="3.2 Safety Requirements" data-fr="3.2 Exigences de Sécurité">
              {t("3.2 Safety Requirements", "3.2 Exigences de Sécurité")}
            </h3>
            <ul>
              <li data-en="Vacate premises as instructed (typically 4-6 hours for interior treatments)" data-fr="Évacuer les lieux tel qu'indiqué (typiquement 4-6 heures pour les traitements intérieurs)">
                {t("Vacate premises as instructed (typically 4-6 hours for interior treatments)", "Évacuer les lieux tel qu'indiqué (typiquement 4-6 heures pour les traitements intérieurs)")}
              </li>
              <li data-en="Keep children and pets away from treated areas as instructed" data-fr="Garder les enfants et animaux loin des zones traitées tel qu'indiqué">
                {t("Keep children and pets away from treated areas as instructed", "Garder les enfants et animaux loin des zones traitées tel qu'indiqué")}
              </li>
              <li data-en="Ventilate premises upon return as instructed" data-fr="Ventiler les lieux au retour tel qu'indiqué">
                {t("Ventilate premises upon return as instructed", "Ventiler les lieux au retour tel qu'indiqué")}
              </li>
            </ul>

            <h2 data-en="4. Pricing and Payment" data-fr="4. Tarification et Paiement">
              {t("4. Pricing and Payment", "4. Tarification et Paiement")}
            </h2>
            <ul>
              <li data-en="All prices are in Canadian dollars (CAD)" data-fr="Tous les prix sont en dollars canadiens (CAD)">
                {t("All prices are in Canadian dollars (CAD)", "Tous les prix sont en dollars canadiens (CAD)")}
              </li>
              <li data-en="Prices exclude applicable taxes (GST/QST)" data-fr="Les prix excluent les taxes applicables (TPS/TVQ)">
                {t("Prices exclude applicable taxes (GST/QST)", "Les prix excluent les taxes applicables (TPS/TVQ)")}
              </li>
              <li data-en="Payment is due upon completion of service unless otherwise agreed" data-fr="Le paiement est dû à la fin du service sauf entente contraire">
                {t("Payment is due upon completion of service unless otherwise agreed", "Le paiement est dû à la fin du service sauf entente contraire")}
              </li>
              <li data-en="We accept cash, credit cards, debit cards, and electronic transfers" data-fr="Nous acceptons l'argent comptant, les cartes de crédit, les cartes de débit et les virements électroniques">
                {t("We accept cash, credit cards, debit cards, and electronic transfers", "Nous acceptons l'argent comptant, les cartes de crédit, les cartes de débit et les virements électroniques")}
              </li>
              <li data-en="Late payments are subject to interest charges of 2% per month" data-fr="Les paiements en retard sont soumis à des frais d'intérêt de 2% par mois">
                {t("Late payments are subject to interest charges of 2% per month", "Les paiements en retard sont soumis à des frais d'intérêt de 2% par mois")}
              </li>
            </ul>

            <h2 data-en="5. Warranties" data-fr="5. Garanties">
              {t("5. Warranties", "5. Garanties")}
            </h2>

            <h3 data-en="5.1 Service Warranty" data-fr="5.1 Garantie de Service">
              {t("5.1 Service Warranty", "5.1 Garantie de Service")}
            </h3>
            <p data-en="We warrant that:" data-fr="Nous garantissons que:">
              {t("We warrant that:", "Nous garantissons que:")}
            </p>
            <ul>
              <li data-en="Services will be performed professionally and in accordance with industry standards" data-fr="Les services seront exécutés de manière professionnelle et conforme aux règles de l'art">
                {t("Services will be performed professionally and in accordance with industry standards", "Les services seront exécutés de manière professionnelle et conforme aux règles de l'art")}
              </li>
              <li data-en="We will comply with all applicable laws and regulations" data-fr="Nous respecterons toutes les lois et réglementations applicables">
                {t("We will comply with all applicable laws and regulations", "Nous respecterons toutes les lois et réglementations applicables")}
              </li>
              <li data-en="Licensed technicians will perform all treatments" data-fr="Des techniciens licenciés effectueront tous les traitements">
                {t("Licensed technicians will perform all treatments", "Des techniciens licenciés effectueront tous les traitements")}
              </li>
              <li data-en="Products used are approved by Health Canada and Quebec regulations" data-fr="Les produits utilisés sont approuvés par Santé Canada et les réglementations québécoises">
                {t("Products used are approved by Health Canada and Quebec regulations", "Les produits utilisés sont approuvés par Santé Canada et les réglementations québécoises")}
              </li>
            </ul>

            <h3 data-en="5.2 Satisfaction Guarantee" data-fr="5.2 Garantie de Satisfaction">
              {t("5.2 Satisfaction Guarantee", "5.2 Garantie de Satisfaction")}
            </h3>
            <ul>
              <li data-en="If pests return during the warranty period, we will re-treat at no additional charge" data-fr="Si les parasites reviennent durant la période de garantie, nous retraiterons sans frais supplémentaires">
                {t("If pests return during the warranty period, we will re-treat at no additional charge", "Si les parasites reviennent durant la période de garantie, nous retraiterons sans frais supplémentaires")}
              </li>
              <li data-en="Warranty periods vary by service type (typically 30-90 days)" data-fr="Les périodes de garantie varient selon le type de service (typiquement 30-90 jours)">
                {t("Warranty periods vary by service type (typically 30-90 days)", "Les périodes de garantie varient selon le type de service (typiquement 30-90 jours)")}
              </li>
              <li data-en="Warranty is void if customer fails to follow preparation or post-treatment instructions" data-fr="La garantie est annulée si le client ne suit pas les instructions de préparation ou post-traitement">
                {t("Warranty is void if customer fails to follow preparation or post-treatment instructions", "La garantie est annulée si le client ne suit pas les instructions de préparation ou post-traitement")}
              </li>
            </ul>

            <h2 data-en="6. Limitation of Liability" data-fr="6. Limitation de Responsabilité">
              {t("6. Limitation of Liability", "6. Limitation de Responsabilité")}
            </h2>
            <p data-en="The Company's total liability for any claim arising from services shall not exceed the amount paid by the Customer for the specific service giving rise to the claim." data-fr="La responsabilité totale de l'Entreprise pour toute réclamation découlant des services ne doit pas dépasser le montant payé par le Client pour le service spécifique donnant lieu à la réclamation.">
              {t("The Company's total liability for any claim arising from services shall not exceed the amount paid by the Customer for the specific service giving rise to the claim.", "La responsabilité totale de l'Entreprise pour toute réclamation découlant des services ne doit pas dépasser le montant payé par le Client pour le service spécifique donnant lieu à la réclamation.")}
            </p>
            <p data-en="The Company is not liable for:" data-fr="L'Entreprise n'est pas responsable de:">
              {t("The Company is not liable for:", "L'Entreprise n'est pas responsable de:")}
            </p>
            <ul>
              <li data-en="Damage caused by pests prior to treatment" data-fr="Dommages causés par les parasites avant le traitement">
                {t("Damage caused by pests prior to treatment", "Dommages causés par les parasites avant le traitement")}
              </li>
              <li data-en="Damage resulting from customer's failure to follow instructions" data-fr="Dommages résultant du non-respect des instructions par le client">
                {t("Damage resulting from customer's failure to follow instructions", "Dommages résultant du non-respect des instructions par le client")}
              </li>
              <li data-en="Consequential, indirect, incidental, or punitive damages" data-fr="Dommages consécutifs, indirects, accessoires ou punitifs">
                {t("Consequential, indirect, incidental, or punitive damages", "Dommages consécutifs, indirects, accessoires ou punitifs")}
              </li>
              <li data-en="Loss of business, profits, or revenue" data-fr="Perte d'affaires, de profits ou de revenus">
                {t("Loss of business, profits, or revenue", "Perte d'affaires, de profits ou de revenus")}
              </li>
            </ul>

            <h2 data-en="7. Contact Information" data-fr="7. Coordonnées">
              {t("7. Contact Information", "7. Coordonnées")}
            </h2>
            <p data-en="For questions about these Terms of Service, please contact us:" data-fr="Pour des questions concernant ces Conditions d'Utilisation, veuillez nous contacter:">
              {t("For questions about these Terms of Service, please contact us:", "Pour des questions concernant ces Conditions d'Utilisation, veuillez nous contacter:")}
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
