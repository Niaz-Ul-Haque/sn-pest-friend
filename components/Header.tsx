'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        hamburgerRef.current &&
        navLinksRef.current &&
        !hamburgerRef.current.contains(e.target as Node) &&
        !navLinksRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }

      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsDropdownOpen(true);
    }
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  // Organized pest categories for mega menu
  const pestCategories = [
    {
      title: t('Rodents', 'Rongeurs'),
      icon: '🐀',
      pests: [
        { href: '/pests/rats/', label: 'Rats' },
        { href: '/pests/mice/', label: t('Mice', 'Souris') },
      ],
    },
    {
      title: t('Crawling Insects', 'Insectes Rampants'),
      icon: '🪳',
      pests: [
        { href: '/pests/bed-bugs/', label: t('Bed Bugs', 'Punaises de lit') },
        { href: '/pests/cockroaches/', label: t('Cockroaches', 'Coquerelles') },
        { href: '/pests/ants/', label: t('Ants', 'Fourmis') },
        { href: '/pests/fleas/', label: t('Fleas', 'Puces') },
        { href: '/pests/ticks/', label: t('Ticks', 'Tiques') },
        { href: '/pests/silverfish/', label: t('Silverfish', 'Poissons d\'argent') },
        { href: '/pests/centipedes/', label: t('Centipedes', 'Centipèdes') },
        { href: '/pests/earwigs/', label: t('Earwigs', 'Perce-oreilles') },
        { href: '/pests/carpet-beetles/', label: t('Carpet Beetles', 'Anthrènes') },
      ],
    },
    {
      title: t('Flying Insects', 'Insectes Volants'),
      icon: '🦟',
      pests: [
        { href: '/pests/wasps/', label: t('Wasps', 'Guêpes') },
        { href: '/pests/hornets/', label: t('Hornets', 'Frelons') },
        { href: '/pests/mosquitoes/', label: t('Mosquitoes', 'Moustiques') },
        { href: '/pests/fruit-flies/', label: t('Fruit Flies', 'Mouches à fruits') },
        { href: '/pests/house-flies/', label: t('House Flies', 'Mouches domestiques') },
        { href: '/pests/drain-flies/', label: t('Drain Flies', 'Mouches des drains') },
        { href: '/pests/moths/', label: t('Moths', 'Mites') },
      ],
    },
    {
      title: t('Other Pests', 'Autres Parasites'),
      icon: '🕷️',
      pests: [
        { href: '/pests/spiders/', label: t('Spiders', 'Araignées') },
        { href: '/pests/boxelder-bugs/', label: t('Boxelder Bugs', 'Punaises de l\'érable') },
        { href: '/pests/termites/', label: t('Termites', 'Termites') },
      ],
    },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container">
          <nav className="nav" role="navigation" aria-label="Navigation principale">
            <Link href="/" className="logo-link" aria-label="SN Pest Control Home">
              <Image
                src="/images/logo.png"
                alt="SN Pest Control Montréal"
                width={180}
                height={60}
                className="logo"
                priority
              />
            </Link>

            <button
              ref={hamburgerRef}
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div ref={navLinksRef} className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link href="/#services" onClick={closeMenu}>
                {t('Services', 'Services')}
              </Link>
              
              <div 
                ref={dropdownRef} 
                className={`nav-item has-dropdown ${isDropdownOpen ? 'open' : ''}`}
              >
                <button
                  className="nav-dropdown-toggle"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  onKeyDown={handleDropdownKeyDown}
                >
                  {t('Pests', 'Parasites')}
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="nav-mega-dropdown" role="menu">
                  <div className="mega-dropdown-header">
                    <Link 
                      href="/pests/" 
                      className="mega-dropdown-all-link"
                      onClick={closeMenu}
                    >
                      {t('View All Pests', 'Voir Tous les Parasites')}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                  <div className="mega-dropdown-grid">
                    {pestCategories.map((category) => (
                      <div key={category.title} className="mega-dropdown-category">
                        <div className="mega-category-header">
                          <span className="mega-category-icon">{category.icon}</span>
                          <span className="mega-category-title">{category.title}</span>
                        </div>
                        <div className="mega-category-links">
                          {category.pests.map((pest) => (
                            <Link 
                              key={pest.href} 
                              href={pest.href} 
                              role="menuitem"
                              onClick={closeMenu}
                            >
                              {pest.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link href="/#process" onClick={closeMenu}>
                {t('Our Process', 'Notre Processus')}
              </Link>
              <Link href="/#areas" onClick={closeMenu}>
                {t('Service Areas', 'Secteurs Desservis')}
              </Link>
              <Link href="/#faq" onClick={closeMenu}>
                FAQ
              </Link>
              <Link href="/#contact" onClick={closeMenu}>
                Contact
              </Link>
              
              <a href="tel:+15145824400" className="btn btn-secondary btn-small">
                {t('(514) 582-4400', '(514) 582-4400')}
              </a>
              <Link href="/quote-calculator/" className="btn btn-primary btn-small">
                {t('Free Quote', 'Soumission Gratuite')}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Emergency Bar - Now appears after fixed header */}
      <div className="emergency-bar" role="alert">
        <div className="container">
          <span>
            <strong>{t('24/7 Emergency Service', 'Service d\'Urgence 24/7')}</strong>
            {' '}&mdash;{' '}
            {t('Call', 'Appelez')}{' '}
            <a href="tel:+15145824400">(514) 582-4400</a>
            {' '}{t('for immediate response', 'pour une réponse immédiate')}
          </span>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
