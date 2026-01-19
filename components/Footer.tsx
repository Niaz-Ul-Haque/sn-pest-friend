'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { PHONE_NUMBER, PHONE_LINK, EMAIL, EMAIL_LINK, ADDRESS } from '@/constants/contact';
import { NAV_LABELS, PEST_NAMES, LEGAL_LABELS, COMMON_LABELS } from '@/constants/translations';

export default function Footer() {
  const { t, tx } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Footer CTA Banner */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h2>{t('Need Pest Control Help?', 'Besoin d\'Aide en Extermination?')}</h2>
            <p>{t('Get your free consultation today', 'Obtenez votre consultation gratuite')}</p>
          </div>
          <div className="footer-cta-actions">
            <a href={PHONE_LINK} className="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {PHONE_NUMBER}
            </a>
            <Link href="/quote-calculator/" className="btn btn-secondary btn-large">
              {tx(COMMON_LABELS.getQuote)}
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/logo.png"
                alt="SN Pest Control"
                width={160}
                height={64}
                className="footer-logo"
              />
            </Link>
            <p>
              {t(
                "Montreal's trusted pest control experts since 2020. Licensed, insured, and committed to eco-friendly pest management solutions.",
                "Experts en contrôle parasitaire de confiance de Montréal depuis 2020. Licencié, assuré et engagé envers des solutions écologiques."
              )}
            </p>
            <div className="footer-badges">
              <div className="footer-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>{t('Licensed & Insured', 'Licencié et Assuré')}</span>
              </div>
              <div className="footer-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <span>{t('Eco-Friendly', 'Écologique')}</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>{tx(NAV_LABELS.quickLinks)}</h3>
            <ul>
              <li><Link href="/#services">{tx(NAV_LABELS.ourServices)}</Link></li>
              <li><Link href="/#process">{tx(NAV_LABELS.ourProcess)}</Link></li>
              <li><Link href="/#areas">{tx(NAV_LABELS.serviceAreas)}</Link></li>
              <li><Link href="/#faq">{tx(COMMON_LABELS.faq)}</Link></li>
              <li><Link href="/quote-calculator/">{tx(COMMON_LABELS.getQuote)}</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>{tx(NAV_LABELS.pests)}</h3>
            <ul>
              <li><Link href="/pests/bed-bugs/">{tx(PEST_NAMES.bedBugs)}</Link></li>
              <li><Link href="/pests/rats/">{tx(PEST_NAMES.rats)}</Link></li>
              <li><Link href="/pests/mice/">{tx(PEST_NAMES.mice)}</Link></li>
              <li><Link href="/pests/cockroaches/">{tx(PEST_NAMES.cockroaches)}</Link></li>
              <li><Link href="/pests/ants/">{tx(PEST_NAMES.ants)}</Link></li>
              <li><Link href="/pests/wasps/">{tx(PEST_NAMES.wasps)}</Link></li>
              <li><Link href="/pests/spiders/">{tx(PEST_NAMES.spiders)}</Link></li>
              <li><Link href="/pests/fleas/">{tx(PEST_NAMES.fleas)}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>{tx(COMMON_LABELS.contact)}</h3>
            <ul>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href={EMAIL_LINK}>{EMAIL}</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{ADDRESS.street}, {tx(ADDRESS.city)}</span>
              </li>
            </ul>
            <div className="footer-hours">
              <p><strong>{t('24/7 Emergency Service', 'Service d\'Urgence 24/7')}</strong></p>
              <p>{t('Mon-Fri: 8AM-6PM', 'Lun-Ven: 8h-18h')}</p>
              <p>{t('Sat-Sun: 8AM-7PM', 'Sam-Dim: 8h-19h')}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{tx(LEGAL_LABELS.copyright)}</p>
          <div className="footer-legal">
            <Link href="/privacy-policy/">{tx(LEGAL_LABELS.privacyPolicy)}</Link>
            <span className="divider">|</span>
            <Link href="/terms-of-service/">{tx(LEGAL_LABELS.termsOfService)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
