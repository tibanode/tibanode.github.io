const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

const closeMenu = () => {
  toggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  document.body.classList.toggle('menu-open', !open);
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    toggle?.focus();
  }
});

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

const contactForm = document.querySelector('[data-contact-form]');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name');
  const email = data.get('email');
  const organization = data.get('organization') || 'Not provided';
  const message = data.get('message');
  const subject = encodeURIComponent(`Partnership enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\n${message}`);
  window.location.href = `mailto:nodetiba@gmail.com?subject=${subject}&body=${body}`;
});
