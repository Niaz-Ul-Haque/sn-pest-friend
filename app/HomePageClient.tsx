'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePageClient() {
  const { t } = useLanguage();

  return (
    <main id="main-content">
      {/* Hero Section - Statement Design */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Trust Badge */}
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{t('Trusted by 500+ Montreal homeowners', 'Fait confiance par 500+ propriétaires montréalais')}</span>
            </div>

            <h1>
              {t('Montreal\'s', 'Les')}{' '}
              <span>{t('Premier', 'Experts')}</span>{' '}
              {t('Pest Control Experts', 'en Contrôle Parasitaire de Montréal')}
            </h1>

            <p className="hero-text">
              {t(
                'Professional, eco-friendly pest elimination with guaranteed results. From bed bugs to rodents, we protect Montreal homes and businesses with industry-leading expertise.',
                'Élimination professionnelle et écologique des parasites avec des résultats garantis. Des punaises de lit aux rongeurs, nous protégeons les maisons et entreprises de Montréal avec une expertise de pointe.'
              )}
            </p>

            <div className="hero-actions">
              <Link href="/quote-calculator/" className="btn btn-primary btn-large">
                {t('Get Free Estimate', 'Obtenir une Estimation Gratuite')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a href="tel:+15145824400" className="btn btn-secondary btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (514) 582-4400
              </a>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>{t('Licensed & Insured', 'Licencié et Assuré')}</span>
              </div>
              <div className="badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>{t('5+ Years Experience', '5+ Ans d\'Expérience')}</span>
              </div>
              <div className="badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{t('24/7 Emergency', 'Urgence 24/7')}</span>
              </div>
              <div className="badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <span>{t('Eco-Friendly', 'Écologique')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('What We Do', 'Nos Services')}</span>
            <h2>{t('Complete Pest Protection', 'Protection Complète Contre les Parasites')}</h2>
            <p>
              {t(
                'From inspection to elimination and prevention, we provide comprehensive pest control solutions tailored to your needs.',
                'De l\'inspection à l\'élimination et à la prévention, nous offrons des solutions complètes de contrôle parasitaire adaptées à vos besoins.'
              )}
            </p>
          </div>

          <div className="services-grid">
            {/* Featured: Bed Bug Service */}
            <article className="service-card featured">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>{t('Bed Bug Specialists', 'Spécialistes des Punaises de Lit')}</h3>
              <p>
                {t(
                  'Montreal\'s most trusted bed bug experts. We use proven heat and chemical treatments with a 100% elimination guarantee.',
                  'Les experts en punaises de lit les plus fiables de Montréal. Nous utilisons des traitements thermiques et chimiques éprouvés avec une garantie d\'élimination à 100%.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Complete inspection & assessment', 'Inspection et évaluation complètes')}</li>
                <li>{t('100% elimination guarantee', 'Garantie d\'élimination à 100%')}</li>
                <li>{t('Follow-up treatments included', 'Traitements de suivi inclus')}</li>
                <li>{t('Same-day emergency service', 'Service d\'urgence le jour même')}</li>
              </ul>
            </article>

            {/* Rodent Control */}
            <article className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3>{t('Rodent Control', 'Contrôle de Rongeurs')}</h3>
              <p>
                {t(
                  'Complete elimination of mice and rats with entry point sealing for permanent protection.',
                  'Élimination complète des souris et rats avec scellement des points d\'entrée pour une protection permanente.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Entry point identification', 'Identification des points d\'entrée')}</li>
                <li>{t('Humane removal methods', 'Méthodes d\'élimination humaines')}</li>
                <li>{t('Prevention measures', 'Mesures de prévention')}</li>
              </ul>
            </article>

            {/* Cockroach */}
            <article className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3>{t('Cockroach Extermination', 'Extermination de Coquerelles')}</h3>
              <p>
                {t(
                  'Professional cockroach treatment using targeted gel baits and family-safe applications.',
                  'Traitement professionnel utilisant des appâts en gel ciblés et des applications sécuritaires.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Targeted gel bait treatment', 'Traitement par appât en gel')}</li>
                <li>{t('Safe for families & pets', 'Sécuritaire pour familles')}</li>
                <li>{t('Long-term protection', 'Protection à long terme')}</li>
              </ul>
            </article>

            {/* Ant & Spider */}
            <article className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3>{t('Ant & Spider Control', 'Contrôle Fourmis et Araignées')}</h3>
              <p>
                {t(
                  'Effective treatment for ants, spiders, and crawling insects with eco-friendly solutions.',
                  'Traitement efficace pour fourmis, araignées et insectes rampants avec des solutions écologiques.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Indoor & outdoor treatment', 'Traitement intérieur et extérieur')}</li>
                <li>{t('Seasonal prevention', 'Prévention saisonnière')}</li>
                <li>{t('Eco-friendly solutions', 'Solutions écologiques')}</li>
              </ul>
            </article>

            {/* Wasp */}
            <article className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                </svg>
              </div>
              <h3>{t('Wasp & Hornet Removal', 'Enlèvement Guêpes et Frelons')}</h3>
              <p>
                {t(
                  'Safe and professional wasp nest removal for residential and commercial properties.',
                  'Enlèvement sécuritaire de nids de guêpes pour propriétés résidentielles et commerciales.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Safe nest removal', 'Enlèvement sécuritaire')}</li>
                <li>{t('Licensed technicians', 'Techniciens licenciés')}</li>
                <li>{t('Same-day service', 'Service le jour même')}</li>
              </ul>
            </article>

            {/* Residential */}
            <article className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>{t('Residential Pest Control', 'Contrôle Parasitaire Résidentiel')}</h3>
              <p>
                {t(
                  'Comprehensive pest management for apartments, condos, and houses across Montreal.',
                  'Gestion complète des parasites pour appartements, condos et maisons à travers Montréal.'
                )}
              </p>
              <ul className="service-features">
                <li>{t('Complete home inspection', 'Inspection complète')}</li>
                <li>{t('Multi-pest treatment', 'Traitement multi-parasites')}</li>
                <li>{t('Annual programs', 'Programmes annuels')}</li>
              </ul>
            </article>
          </div>

          <div className="services-cta">
            <h3>{t('Not sure which service you need?', 'Pas sûr du service dont vous avez besoin?')}</h3>
            <p>
              {t(
                'Get a free inspection and customized treatment plan from our pest control experts.',
                'Obtenez une inspection gratuite et un plan de traitement personnalisé de nos experts.'
              )}
            </p>
            <Link href="/quote-calculator/" className="btn btn-primary">
              {t('Get Your Free Quote', 'Obtenir Votre Soumission Gratuite')}
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section process">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('How We Work', 'Notre Méthode')}</span>
            <h2>{t('Simple 4-Step Process', 'Processus Simple en 4 Étapes')}</h2>
            <p>{t('Professional pest control made easy and effective', 'Contrôle parasitaire professionnel rendu simple et efficace')}</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>{t('Free Inspection', 'Inspection Gratuite')}</h3>
              <p>{t('Complete property evaluation and pest identification by certified experts.', 'Évaluation complète et identification des parasites par des experts certifiés.')}</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>{t('Custom Plan', 'Plan Personnalisé')}</h3>
              <p>{t('Tailored treatment strategy based on your specific situation and needs.', 'Stratégie de traitement adaptée à votre situation et vos besoins spécifiques.')}</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>{t('Treatment', 'Traitement')}</h3>
              <p>{t('Expert execution using latest technology and eco-friendly methods.', 'Exécution experte utilisant les dernières technologies et méthodes écologiques.')}</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>{t('Follow-Up', 'Suivi')}</h3>
              <p>{t('Ongoing monitoring to ensure lasting, pest-free results.', 'Surveillance continue pour des résultats durables sans parasites.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section proof">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t('Happy Customers', 'Clients Satisfaits')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">{t('Years Experience', 'Années d\'Expérience')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('Emergency Service', 'Service d\'Urgence')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t('Satisfaction Rate', 'Taux de Satisfaction')}</div>
            </div>
          </div>

          <div className="testimonials">
            <blockquote className="testimonial">
              <p>
                {t(
                  '"SN Pest Control solved our bed bug problem quickly and professionally. Highly recommended!"',
                  '"SN Pest Control a résolu notre problème de punaises rapidement et professionnellement. Hautement recommandé!"'
                )}
              </p>
              <cite>— Marie D., Montreal</cite>
            </blockquote>

            <blockquote className="testimonial">
              <p>
                {t(
                  '"Excellent service for our restaurant. They work around our schedule and their treatments are food-safe."',
                  '"Service excellent pour notre restaurant. Ils travaillent selon notre horaire et leurs traitements sont sécuritaires."'
                )}
              </p>
              <cite>— Jean-Pierre M., {t('Restaurant Owner', 'Propriétaire de Restaurant')}</cite>
            </blockquote>

            <blockquote className="testimonial">
              <p>
                {t(
                  '"Fast response for our rodent emergency. Professional technician, problem completely solved!"',
                  '"Réponse rapide pour notre problème de rongeurs. Technicien professionnel, problème complètement résolu!"'
                )}
              </p>
              <cite>— Sarah J., Laval</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="section service-areas">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('Coverage', 'Couverture')}</span>
            <h2>{t('Serving Greater Montreal', 'Desservant le Grand Montréal')}</h2>
            <p>{t('Complete pest control coverage across the entire Montreal region', 'Couverture complète dans toute la région de Montréal')}</p>
          </div>

          <div className="areas-content">
            <div className="areas-text">
              <p>
                {t(
                  'SN Pest Control offers professional extermination services throughout Greater Montreal. Our service area extends 50 kilometers from downtown.',
                  'SN Pest Control offre des services professionnels d\'extermination dans tout le Grand Montréal. Notre zone s\'étend à 50 km du centre-ville.'
                )}
              </p>

              <div className="areas-columns">
                <div className="area-group">
                  <h3>{t('Montreal Boroughs', 'Arrondissements de Montréal')}</h3>
                  <ul>
                    <li>{t('Downtown Montreal', 'Centre-ville')}</li>
                    <li>Plateau-Mont-Royal</li>
                    <li>Ville-Marie</li>
                    <li>Notre-Dame-de-Grâce</li>
                    <li>Côte-des-Neiges</li>
                    <li>Verdun</li>
                    <li>Saint-Laurent</li>
                    <li>Rosemont</li>
                  </ul>
                </div>

                <div className="area-group">
                  <h3>{t('Greater Montreal', 'Grand Montréal')}</h3>
                  <ul>
                    <li>Laval</li>
                    <li>Longueuil</li>
                    <li>Brossard</li>
                    <li>{t('West Island', 'Ouest-de-l\'Île')}</li>
                    <li>{t('South Shore', 'Rive-Sud')}</li>
                    <li>{t('North Shore', 'Rive-Nord')}</li>
                    <li>Dollard-des-Ormeaux</li>
                    <li>Pointe-Claire</li>
                  </ul>
                </div>
              </div>

              <div className="coverage-info">
                <p><strong>{t('Service Radius:', 'Rayon de Service:')}</strong> {t('50 km from downtown Montreal', '50 km du centre-ville de Montréal')}</p>
                <p><strong>{t('Response Time:', 'Temps de Réponse:')}</strong> {t('2-4 hours for emergencies', '2-4 heures pour les urgences')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('Questions', 'Questions')}</span>
            <h2>{t('Frequently Asked Questions', 'Questions Fréquemment Posées')}</h2>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary>
                <h3>{t('How do I know if I have bed bugs?', 'Comment savoir si j\'ai des punaises de lit?')}</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="faq-answer">
                <p>
                  {t(
                    'Common signs include: small red/brown spots on bedding, dark spots on mattresses, itchy bites in lines or clusters, and seeing live bugs (apple seed size, reddish-brown).',
                    'Les signes courants incluent: petites taches rouges/brunes sur la literie, taches sombres sur les matelas, piqûres qui démangent en lignes ou groupes, et voir des insectes vivants.'
                  )}
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <h3>{t('How fast can you respond to emergencies?', 'À quelle vitesse pouvez-vous répondre aux urgences?')}</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="faq-answer">
                <p>
                  {t(
                    'We offer 24/7 emergency services throughout Greater Montreal with typical response times of 2-4 hours for urgent situations.',
                    'Nous offrons des services d\'urgence 24/7 dans tout le Grand Montréal avec des temps de réponse de 2-4 heures pour les situations urgentes.'
                  )}
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <h3>{t('Are your treatments safe for children and pets?', 'Vos traitements sont-ils sécuritaires pour les enfants et animaux?')}</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="faq-answer">
                <p>
                  {t(
                    'Yes, safety is our priority. We use eco-friendly, low-toxicity solutions that are effective yet safe for families and pets when applied by our licensed professionals.',
                    'Oui, la sécurité est notre priorité. Nous utilisons des solutions écologiques à faible toxicité, efficaces et sécuritaires pour les familles et animaux.'
                  )}
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                <h3>{t('Do you guarantee your services?', 'Garantissez-vous vos services?')}</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="faq-answer">
                <p>
                  {t(
                    'Yes, we offer a 100% satisfaction guarantee. If pests return during the warranty period, we\'ll return at no additional cost.',
                    'Oui, nous offrons une garantie de satisfaction à 100%. Si les parasites reviennent pendant la période de garantie, nous reviendrons sans coût supplémentaire.'
                  )}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('Get In Touch', 'Contactez-Nous')}</span>
            <h2>{t('Contact SN Pest Control', 'Contacter SN Pest Control')}</h2>
            <p>{t('Get your free consultation today – serving all of Greater Montreal', 'Obtenez votre consultation gratuite – desservant tout le Grand Montréal')}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card emergency-card">
              <div className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>{t('24/7 Emergency', 'Urgence 24/7')}</h3>
              <p>{t('Immediate response for urgent pest problems', 'Réponse immédiate pour problèmes urgents')}</p>
              <a href="tel:+15145824400" className="contact-button">(514) 582-4400</a>
              <p className="contact-note">{t('Avg. response: 2-4 hours', 'Réponse moy: 2-4 heures')}</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h3>{t('Email Us', 'Écrivez-nous')}</h3>
                  <a href="mailto:snpest20@gmail.com">snpest20@gmail.com</a>
                  <p>{t('We respond within 2-3 hours', 'Nous répondons en 2-3 heures')}</p>
                </div>
              </div>

              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <h3>{t('Business Hours', 'Heures d\'Ouverture')}</h3>
                  <table className="hours-table">
                    <tbody>
                      <tr>
                        <td>{t('Monday – Friday:', 'Lundi – Vendredi:')}</td>
                        <td>8:00 – 18:00</td>
                      </tr>
                      <tr>
                        <td>{t('Saturday – Sunday:', 'Samedi – Dimanche:')}</td>
                        <td>8:00 – 19:00</td>
                      </tr>
                    </tbody>
                  </table>
                  <p><strong>{t('24/7 emergency available', 'Urgence 24/7 disponible')}</strong></p>
                </div>
              </div>

              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h3>{t('Location', 'Emplacement')}</h3>
                  <address>
                    2311 RUE LISE<br />
                    {t('Montreal, QC H8N 1M7', 'Montréal, QC H8N 1M7')}<br />
                    Canada
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-cta">
            <h3>{t('Ready to get started?', 'Prêt à commencer?')}</h3>
            <p>
              {t(
                'Use our online quote calculator for an instant estimate, or call us to speak with an expert.',
                'Utilisez notre calculateur pour une estimation instantanée, ou appelez-nous pour parler à un expert.'
              )}
            </p>
            <div className="cta-buttons">
              <Link href="/quote-calculator/" className="btn btn-primary btn-large">
                {t('Get Free Quote', 'Soumission Gratuite')}
              </Link>
              <a href="tel:+15145824400" className="btn btn-secondary btn-large">
                {t('Call (514) 582-4400', 'Appelez (514) 582-4400')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
