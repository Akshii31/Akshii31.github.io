(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const opening = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(opening));
      mobileNav.hidden = !opening;
      const icon = menuButton.querySelector('.menu-icon');
      if (icon) icon.textContent = opening ? '−' : '＋';
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      const icon = menuButton.querySelector('.menu-icon');
      if (icon) icon.textContent = '＋';
    }));
  }

  const optionalLinks = [
    { id: 'email-link', value: config.email, href: value => `mailto:${value}` },
    { id: 'linkedin-link', value: config.linkedin, href: value => value },
    { id: 'resume-link', value: config.resume, href: value => value }
  ];
  optionalLinks.forEach(item => {
    const element = document.getElementById(item.id);
    if (!element || typeof item.value !== 'string' || !item.value.trim()) return;
    element.href = item.href(item.value.trim());
    element.hidden = false;
  });

  const note = document.getElementById('contact-note');
  if (note && (config.email || config.linkedin)) {
    note.textContent = 'Choose the contact option that works best for you.';
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
