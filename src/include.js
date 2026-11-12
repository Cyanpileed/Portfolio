async function loadPartial(id, file) {
  const container = document.getElementById(id);
  if (!container) return; // Exit safely if the placeholder doesn't exist on this page
  const res = await fetch(file);
  container.innerHTML = await res.text();
}

Promise.all([
  loadPartial('site-header', 'partials/header.html'),
  loadPartial('site-footer', 'partials/footer.html'),
]).then(() => {
  const navToggle = document.getElementById('navToggle');
  const navTabs = document.getElementById('navTabs');
  
  if (!navToggle || !navTabs) return; // Exit if elements aren't loaded yet

  navToggle.addEventListener('click', () => {
    navTabs.classList.toggle('open');
    if (window.innerWidth <= 700) {
      document.body.classList.toggle('menu-open', navTabs.classList.contains('open'));
    }
  });

  navToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navTabs.classList.toggle('open');
    }
  });

  navTabs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) navTabs.classList.remove('open');
    });
  });
});