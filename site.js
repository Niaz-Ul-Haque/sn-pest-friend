let currentLanguage = 'fr';

function changeLanguage(newLanguage) {
  currentLanguage = newLanguage;
  updateLanguage();
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage === 'fr' ? 'fr-CA' : 'en-CA';

  document.querySelectorAll('[data-en]').forEach((element) => {
    const translation = element.dataset[currentLanguage];
    if (!translation) return;

    if (['INPUT', 'TEXTAREA'].includes(element.tagName)) {
      element.placeholder = translation;
    } else if (element.tagName === 'IMG') {
      element.alt = translation;
    } else {
      element.textContent = translation;
    }
  });

  const languageSelect = document.querySelector('.language-select');
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
}

function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isActive));
    });

    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const dropdowns = document.querySelectorAll('.nav-item.has-dropdown');
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown');

    if (!toggle || !menu) return;

    const closeDropdown = () => {
      toggle.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('open');
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
        toggle.focus();
      }
    });
  });

  document.addEventListener('click', (event) => {
    const activeDropdowns = document.querySelectorAll('.nav-item.has-dropdown.open');
    activeDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function initLanguageDropdown() {
  const languageSelect = document.querySelector('.language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => {
      changeLanguage(event.target.value);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageDropdown();
  initNavigation();
  updateLanguage();
});
