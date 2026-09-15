export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('navSidebar');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('navClose');

  if (!navbar) return;

  const syncScrolled = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };

  syncScrolled();
  window.addEventListener('scroll', syncScrolled, { passive: true });

  const openSidebar = () => {
    if (!sidebar || !overlay || !toggle) return;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    overlay.hidden = false;
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-locked');
  };

  const closeSidebar = () => {
    if (!sidebar || !overlay || !toggle) return;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-locked');
    window.setTimeout(() => {
      if (!sidebar.classList.contains('open')) overlay.hidden = true;
    }, 320);
  };

  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) closeSidebar();
      else openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeSidebar);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
  }
}

export async function loadNavbar(targetId = 'navbar-container') {
  const container = document.getElementById(targetId);
  if (!container) return;

  try {
    const response = await fetch('Navbare.html');
    const html = await response.text();
    container.innerHTML = html;
    initNavbar();
  } catch (err) {
    console.error('Impossible de charger la navbar:', err);
  }
}
