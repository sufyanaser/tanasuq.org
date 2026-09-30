const html = document.documentElement;
const menu = document.querySelector('#mega-menu');
const menuButton = document.querySelector('.menu-toggle');
const searchDialog = document.querySelector('#search-dialog');
let language = 'ar';
let activeMenu = null;
let menuTrigger = null;
const bilingual = (ar, en) => ({ar, en});
const menuData = {
  about: {title:bilingual('من نحن','Who we are'),copy:bilingual('تناسق منظمة مجتمع مدني مستقلة تجمع المعرفة الميدانية والشراكات الفاعلة للاستجابة للأولويات المحلية.','Tanasuq is an independent civil society organization connecting field knowledge and effective partnerships to respond to local priorities.'),image:'story-community-dialogue.png',links:[['about','عن تناسق','About Tanasuq'],['values','قيمنا','Our values'],['partners','شركاء الأثر','Our partners'],['contact','تواصل معنا','Contact us']]},
  work: {title:bilingual('ماذا نعمل','What we do'),copy:bilingual('نعمل عبر أربعة مسارات تتقاطع فيها احتياجات المجتمع مع فرص المستقبل، من المناخ إلى تمكين الشباب.','Four connected pathways bring community needs together with future opportunities, from climate resilience to youth empowerment.'),image:'story-smart-agriculture.png',links:[['programs','مجالات العمل','Areas of work'],['program-1','المرونة المناخية','Climate resilience'],['program-2','تمكين الشباب','Youth empowerment'],['program-3','التحول الرقمي','Digital transformation'],['program-4','التماسك المجتمعي','Social cohesion']]},
  impact: {title:bilingual('أثرنا','Our impact'),copy:bilingual('اكتشف المشاريع والقصص والنتائج. المحتوى والأرقام الحالية نماذج تجريبية وليست نتائج موثقة للمنظمة.','Explore projects, stories and results. Current content and figures are illustrative samples, not verified organizational results.'),image:'story-green-skills.png',links:[['projects','مشاريعنا','Our projects'],['impact','الأثر بالأرقام','Impact in numbers'],['news','الأخبار والقصص','News and stories'],['publications','المنشورات','Publications']]},
  join: {title:bilingual('شارك معنا','Get involved'),copy:bilingual('نبني شراكات تربط الاحتياج المحلي بالخبرة والموارد. تواصل معنا للتعاون أو التطوع أو الاستفسارات الإعلامية.','We connect local needs with expertise and resources. Get in touch about partnerships, volunteering or media inquiries.'),image:'story-community-dialogue.png',links:[['partners','الشراكات','Partnerships'],['contact','التطوع','Volunteering'],['contact','الإعلام','Media inquiries'],['contact','تواصل معنا','Contact us']]}
};
function translatedElement(tag, ar, en, className) {
  const element = document.createElement(tag);
  element.dataset.ar = ar;
  element.dataset.en = en;
  element.textContent = language === 'ar' ? ar : en;
  if (className) element.className = className;
  return element;
}
document.querySelector('.values').id = 'values';
document.querySelector('.impact').id = 'impact';
const partners = document.querySelector('.partners');
partners.id = 'partners';
const main = document.querySelector('main');
main.insertBefore(partners, document.querySelector('.impact'));
main.insertBefore(document.querySelector('#publications'), document.querySelector('#news'));
const partnerLink = translatedElement('a','تعاون معنا ←','Partner with us →','text-link');
partnerLink.href = '#contact';
partners.querySelector('.shell').append(partnerLink);
const programImages = ['story-smart-agriculture.png','story-green-skills.png','story-green-skills.png','story-community-dialogue.png'];
document.querySelectorAll('.program-grid article').forEach((article,index) => {
  article.id = `program-${index+1}`;
  const img = document.createElement('img');
  img.src = `assets/${programImages[index]}`;
  img.alt = article.querySelector('h3').textContent;
  img.loading = 'lazy';
  img.className = 'program-image';
  article.append(img);
});
document.querySelectorAll('.project-card').forEach((article,index) => {
  const img = article.querySelector('img');
  img.src = `assets/${index === 0 ? 'story-green-skills.png' : 'story-smart-agriculture.png'}`;
  const link = translatedElement('a','تفاصيل المشروع ←','Project details →','text-link');
  link.href = index === 0 ? '#story-skills' : '#story-agriculture';
  article.querySelector('.card-body').append(link);
});
const projectsLink = document.querySelector('#projects .section-head>a');
projectsLink.href = '#news';
projectsLink.dataset.ar = 'الأخبار والقصص ←';
projectsLink.dataset.en = 'News and stories →';
const storyBack = translatedElement('a','الرئيسية / الأخبار والقصص ←','Home / News and stories →','text-link story-back');
storyBack.href = '#news';
document.querySelector('.story-list>.shell').prepend(storyBack);
document.querySelectorAll('.story-detail').forEach(article => {
  article.querySelector('div').append(translatedElement('p','قصة تجريبية وصورة توضيحية؛ لا تمثل تقريراً عن نشاط موثّق.','Sample story and illustrative image; this is not a report of verified activity.','story-notice'));
});
const footer = document.querySelector('footer');
footer.replaceChildren();
const footerGrid = document.createElement('div');
footerGrid.className = 'shell footer-grid';
const brand = document.createElement('div');
brand.className = 'footer-brand';
const brandLink = document.createElement('a');
brandLink.href = '#home';
brandLink.className = 'footer-logo';
const brandImg = document.createElement('img');
brandImg.className = 'brand-logo';
brandImg.src = 'assets/tanasuq-mark-white.png';
brandImg.alt = 'تناسق';
brandLink.append(brandImg);
brand.append(brandLink, translatedElement('p','منظمة تناسق للتنمية المستدامة · الأنبار، العراق','Tanasuq Organization for Sustainable Development · Anbar, Iraq'));
footerGrid.append(brand);
Object.values(menuData).forEach(data => {
  const column = document.createElement('div');
  column.className = 'footer-column';
  column.append(translatedElement('h3',data.title.ar,data.title.en));
  data.links.forEach(([id,ar,en]) => {
    const link = translatedElement('a',ar,en);
    link.href = `#${id}`;
    column.append(link);
  });
  footerGrid.append(column);
});
const footerBottom = document.createElement('div');
footerBottom.className = 'shell footer-bottom';
footerBottom.append(translatedElement('p','© 2026 منظمة تناسق للتنمية المستدامة','© 2026 Tanasuq Organization for Sustainable Development'));
const topLink = translatedElement('a','العودة إلى الأعلى ↑','Back to top ↑');
topLink.href = '#home';
footerBottom.append(topLink);
footer.append(footerGrid,footerBottom);
const mobileTabs = document.createElement('div');
mobileTabs.className = 'mobile-menu-tabs';
Object.entries(menuData).forEach(([key,data]) => {
  const button = translatedElement('button',data.title.ar,data.title.en);
  button.type = 'button';
  button.dataset.category = key;
  button.addEventListener('click',() => openMenu(key,button));
  mobileTabs.append(button);
});
document.querySelector('.mega-layout').prepend(mobileTabs);
function closeMenu(restoreFocus = false) {
  menu.hidden = true;
  activeMenu = null;
  document.querySelectorAll('[data-menu]').forEach(button => button.setAttribute('aria-expanded','false'));
  menuButton.setAttribute('aria-expanded','false');
  if (restoreFocus && menuTrigger) menuTrigger.focus();
}
function openMenu(key,trigger) {
  activeMenu = key;
  if (!trigger?.dataset.category) menuTrigger = trigger || menuTrigger;
  const data = menuData[key];
  menu.hidden = false;
  menu.querySelector('h2').textContent = data.title[language];
  menu.querySelector('.mega-copy p').textContent = data.copy[language];
  menu.querySelector('.mega-layout>img').src = `assets/${data.image}`;
  const links = menu.querySelector('.mega-links');
  links.replaceChildren();
  data.links.forEach(([id,ar,en]) => {
    const link = translatedElement('a',ar,en);
    link.href = `#${id}`;
    links.append(link);
  });
  document.querySelectorAll('[data-menu]').forEach(button => button.setAttribute('aria-expanded',String(button.dataset.menu === key)));
  mobileTabs.querySelectorAll('button').forEach(button => {button.classList.toggle('active',button.dataset.category === key);button.setAttribute('aria-pressed',String(button.dataset.category === key));});
  menuButton.setAttribute('aria-expanded','true');
}
document.querySelectorAll('[data-menu]').forEach(button => button.addEventListener('click',() => activeMenu === button.dataset.menu ? closeMenu() : openMenu(button.dataset.menu,button)));
menuButton.addEventListener('click',() => menu.hidden ? openMenu('about',menuButton) : closeMenu());
document.querySelector('.mega-close').addEventListener('click',() => closeMenu(true));
document.addEventListener('click',event => {if (!event.target.closest('.site-header')) closeMenu();});
document.addEventListener('keydown',event => {if(event.key === 'Escape' && !menu.hidden) closeMenu(true);});
document.querySelector('.site-header').addEventListener('focusout',() => {setTimeout(() => {if(!document.querySelector('.site-header').contains(document.activeElement)) closeMenu();},0);});
function updateRoute() {
  const id = location.hash.slice(1);
  const story = [...document.querySelectorAll('.story-detail')].find(article => article.id === id);
  document.body.classList.toggle('reading-story',Boolean(story));
  document.querySelectorAll('.story-detail').forEach(article => article.classList.toggle('current',article === story));
  closeMenu();
  const title = language === 'ar' ? 'منظمة تناسق للتنمية المستدامة' : 'Tanasuq Organization for Sustainable Development';
  document.title = story ? `${story.querySelector('h3').textContent} | ${title}` : title;
  if(story) window.scrollTo({top:0,behavior:'instant'});
  else if(id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
}
window.addEventListener('hashchange',updateRoute);
document.addEventListener('click',event => {
  const link = event.target.closest('a[href^="#"]');
  if(!link) return;
  closeMenu();
  if(searchDialog.open) searchDialog.close();
  if(link.hash === location.hash) updateRoute();
});
const searchInput = document.querySelector('#site-search');
const searchResults = document.querySelector('#search-results');
const searchEntries = [...document.querySelectorAll('main section[id], .program-grid article[id], .story-detail[id]')];
function renderSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  searchResults.replaceChildren();
  if(!query){searchResults.append(translatedElement('p','اكتب كلمة للبحث في الموقع.','Enter a word to search the site.'));return;}
  const matches = searchEntries.filter(section => [...section.querySelectorAll('[data-ar][data-en]')].some(node => `${node.dataset.ar} ${node.dataset.en}`.toLocaleLowerCase().includes(query))).slice(0,12);
  matches.forEach(section => {
    const title = section.querySelector('h1,h2,h3');
    if(!title) return;
    const link = document.createElement('a');
    link.href = `#${section.id}`;
    link.textContent = title.textContent;
    searchResults.append(link);
  });
  if(!searchResults.children.length) searchResults.append(translatedElement('p','لا توجد نتائج. جرّب كلمة أخرى.','No results. Try another word.'));
}
searchInput.addEventListener('input',renderSearch);
document.querySelector('.search-toggle').addEventListener('click',() => {closeMenu();searchDialog.showModal();renderSearch();searchInput.focus();});
document.querySelector('.search-close').addEventListener('click',() => searchDialog.close());
function setLanguage(lang) {
  language = lang === 'en' ? 'en' : 'ar';
  html.lang = language;
  html.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar][data-en]').forEach(node => node.textContent = node.dataset[language]);
  document.querySelectorAll('[data-lang]').forEach(button => {const selected = button.dataset.lang === language;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});
  document.querySelectorAll('.brand-logo').forEach(img => {img.alt = language === 'ar' ? 'تناسق للتنمية المستدامة' : 'Tanasuq for Sustainable Development';});
  const labels = [['.search-toggle','بحث','Search'],['.search-close','إغلاق البحث','Close search'],['.mega-close','إغلاق القائمة','Close menu'],['.menu-toggle','القائمة','Menu'],['.main-nav','التنقل الرئيسي','Main navigation'],['.mega-links','روابط القسم','Section links'],['.language-switch','اختيار اللغة','Choose language']];
  labels.forEach(([selector,ar,en]) => {const node = document.querySelector(selector);node.setAttribute('aria-label',language === 'ar' ? ar : en);if(node.tagName === 'BUTTON') node.title = node.getAttribute('aria-label');});
  document.querySelectorAll('.program-grid article').forEach(article => article.querySelector('img').alt = article.querySelector('h3').textContent);
  try{localStorage.setItem('tanasuq-language',language);}catch{}
  if(activeMenu) openMenu(activeMenu);
  if(searchDialog.open) renderSearch();
  const story = document.querySelector('.story-detail.current');
  const title = language === 'ar' ? 'منظمة تناسق للتنمية المستدامة' : 'Tanasuq Organization for Sustainable Development';
  document.title = story ? `${story.querySelector('h3').textContent} | ${title}` : title;
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
document.querySelector('#contact-form').addEventListener('submit',event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `${data.get('topic')} - ${data.get('name')}`;
  const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
  window.location.href = `mailto:info@tanasuq.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
let savedLanguage = 'ar';
try{savedLanguage = localStorage.getItem('tanasuq-language') || 'ar';}catch{}
setLanguage(savedLanguage);
updateRoute();
