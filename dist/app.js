const html = document.documentElement;
const langButtons = document.querySelectorAll('[data-lang]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const contactForm = document.querySelector('#contact-form');

function setLanguage(lang) {
  const isArabic = lang === 'ar';
  html.lang = lang;
  html.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'منظمة تناسق للتنمية المستدامة' : 'Tanasuq Organization for Sustainable Development';
  document.querySelectorAll('[data-ar][data-en]').forEach((node) => {
    node.textContent = node.dataset[lang];
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('.main-nav').setAttribute('aria-label', isArabic ? 'التنقل الرئيسي' : 'Main navigation');
  document.querySelector('.language-switch').setAttribute('aria-label', isArabic ? 'اختيار اللغة' : 'Choose language');
  menuButton.setAttribute('aria-label', isArabic ? 'فتح القائمة' : 'Open menu');
}

langButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(contactForm);
  const subject = `${form.get('topic')} — ${form.get('name')}`;
  const body = `${form.get('message')}\n\n${form.get('name')}\n${form.get('email')}`;
  window.location.href = `mailto:info@tanasuq.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
setLanguage('ar');
