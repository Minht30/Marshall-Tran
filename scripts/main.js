document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-ready');

  // "Show all projects" toggle
  const projectsSection = document.getElementById('projects');
  const moreToggle = document.getElementById('toggle-more-projects');
  if (projectsSection && moreToggle) {
    const label = moreToggle.querySelector('.projects-toggle-label');
    const icon = moreToggle.querySelector('.iconify');
    moreToggle.addEventListener('click', () => {
      const showing = projectsSection.classList.toggle('show-all');
      moreToggle.setAttribute('aria-expanded', showing ? 'true' : 'false');
      if (label) label.textContent = showing ? 'Show fewer projects' : 'Show all 12 projects';
      if (icon) icon.setAttribute('data-icon', showing ? 'mdi:minus-circle-outline' : 'mdi:plus-circle-outline');
    });
  }

  // Contact sidebar collapse toggle with localStorage persistence
  const sidebar = document.querySelector('.social-sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebar && sidebarToggle) {
    const setIcon = (collapsed) => {
      // Swap the data-icon so Iconify re-renders a chevron pointing the right way.
      // Iconify replaces the <span> with an <svg> — try both.
      const target = sidebarToggle.querySelector('[data-icon], svg');
      if (!target) return;
      const iconName = collapsed ? 'mdi:chevron-right' : 'mdi:chevron-left';
      target.setAttribute('data-icon', iconName);
    };
    let sidebarStored;
    try { sidebarStored = localStorage.getItem('mt-sidebar'); } catch (e) { sidebarStored = null; }
    if (sidebarStored === 'collapsed') {
      sidebar.classList.add('is-collapsed');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.setAttribute('aria-label', 'Expand contact bar');
      sidebarToggle.setAttribute('title', 'Expand contact bar');
      setIcon(true);
    }
    sidebarToggle.addEventListener('click', () => {
      const collapsed = sidebar.classList.toggle('is-collapsed');
      sidebarToggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      sidebarToggle.setAttribute('aria-label', collapsed ? 'Expand contact bar' : 'Collapse contact bar');
      sidebarToggle.setAttribute('title', collapsed ? 'Expand contact bar' : 'Collapse contact bar');
      setIcon(collapsed);
      try { localStorage.setItem('mt-sidebar', collapsed ? 'collapsed' : 'expanded'); } catch (e) { /* ignore */ }
    });
  }

  // Theme toggle (light / dark) with localStorage + prefers-color-scheme
  const themeToggle = document.getElementById('theme-toggle');
  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };
  let stored;
  try { stored = localStorage.getItem('mt-theme'); } catch (e) { stored = null; }
  const initial = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(initial);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('mt-theme', next); } catch (e) { /* ignore */ }
    });
  }
});
