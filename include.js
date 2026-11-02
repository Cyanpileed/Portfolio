async function loadPartial(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

Promise.all([
  loadPartial('site-header', 'partials/header.html'),
  //loadPartial('site-footer', 'partials/footer.html'),
]).then(() => {
  const navToggle = document.getElementById('navToggle');
  const navTabs = document.getElementById('navTabs');
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
  // Optional: close menu on link click (mobile UX)
  navTabs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) navTabs.classList.remove('open');
    });
  });
});