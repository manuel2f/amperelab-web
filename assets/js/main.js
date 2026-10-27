(() => {
  // --- THEME TOGGLE LOGIC ---
  const THEME_KEY = 'amperelab-theme';
  const html = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      const sunIcon = themeBtn.querySelector('.icon-sun');
      const moonIcon = themeBtn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
      }
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || getSystemTheme();
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --- MOBILE MENU TOGGLE ---
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- VIDEO MODAL ---
  const modalBackdrop = document.querySelector('[data-video-modal]');
  const openVideoBtns = document.querySelectorAll('[data-open-video]');
  const closeVideoBtn = document.querySelector('[data-close-video]');
  const videoFrameContainer = document.querySelector('[data-video-frame]');

  function openVideo(videoSrc, isYoutube = false) {
    if (!modalBackdrop || !videoFrameContainer) return;
    if (isYoutube) {
      videoFrameContainer.innerHTML = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${videoSrc}?autoplay=1&rel=0" 
          title="AmpereLab Demo" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>`;
    } else {
      videoFrameContainer.innerHTML = `
        <video controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;background:#000;">
          <source src="${videoSrc}" type="video/mp4">
          Tu navegador no soporta el formato de vídeo.
        </video>`;
    }
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    if (!modalBackdrop || !videoFrameContainer) return;
    modalBackdrop.classList.remove('is-open');
    videoFrameContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  openVideoBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = btn.getAttribute('data-video-src') || '/assets/video/demo-720p.mp4';
      const youtubeId = btn.getAttribute('data-youtube-id');
      if (youtubeId) {
        openVideo(youtubeId, true);
      } else {
        openVideo(videoSrc, false);
      }
    });
  });

  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeVideo();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('is-open')) {
      closeVideo();
    }
  });
})();
