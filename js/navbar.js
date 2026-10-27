export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('navSidebar');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('navClose');

  if (!navbar) return;

  const preferFloating = navbar.classList.contains('scrolled');

  const syncScrolled = () => {
    if (preferFloating) {
      navbar.classList.add('scrolled');
      return;
    }

    const y = window.scrollY || 0;
    const isScrolled = navbar.classList.contains('scrolled');
    // Hysteresis: avoid flicker / hard jumps near the threshold
    if (!isScrolled && y > 56) navbar.classList.add('scrolled');
    else if (isScrolled && y < 18) navbar.classList.remove('scrolled');
  };

  syncScrolled();
  window.addEventListener('scroll', syncScrolled, { passive: true });
  window.addEventListener('resize', syncScrolled, { passive: true });

  const setSidebarOpen = (open) => {
    if (!sidebar || !overlay || !toggle) return;
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    sidebar.setAttribute('aria-hidden', open ? 'false' : 'true');
    // Prevent focusable controls inside a closed aria-hidden tree (malformed a11y tree).
    if ('inert' in sidebar) {
      sidebar.inert = !open;
    }
    document.body.classList.toggle('nav-locked', open);
    if (open) {
      overlay.hidden = false;
    } else {
      window.setTimeout(() => {
        if (!sidebar.classList.contains('open')) overlay.hidden = true;
      }, 320);
    }
  };

  // Closed by default — keep tree well-formed from first paint.
  if (sidebar && !sidebar.classList.contains('open')) {
    if ('inert' in sidebar) sidebar.inert = true;
  }

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

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
