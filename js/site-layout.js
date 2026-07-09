(function () {
  const NAV_ITEMS = [
    { label: 'Home', href: 'index.html', icon: 'bi-house-door' },
    { label: 'About', href: 'about.html', icon: 'bi-info-circle' },
    { label: 'Awards', href: 'awards.html', icon: 'bi-award' },
    { label: 'Gallery', href: 'gallery.html', icon: 'bi-images' },
    { label: 'Committee', href: 'committee.html', icon: 'bi-people' },
    { label: 'Contact', href: 'contact.html', icon: 'bi-envelope-paper' },
  ];

  const QUICK_LINKS = [
    { label: 'About Award', href: 'about.html' },
    { label: 'Award Details', href: 'awards.html' },
    { label: 'Gallery', href: 'gallery.html' },
    { label: 'Committee', href: 'committee.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  const MEDIA_LINKS = [
    { label: 'India TV', href: 'https://tinyurl.com/2s4y45va', image: 'img/media/indiatv.png' },
    { label: 'Lokmat', href: 'https://tinyurl.com/lokmatnews', image: 'img/media/lokmat.png' },
    { label: 'Amar Ujala', href: 'https://tinyurl.com/sbamarujala', image: 'img/media/amarujala.png' },
    { label: 'Dainik Bhaskar', href: 'https://tinyurl.com/dainik-bhasker', image: 'img/media/dainik-bhaskar.png' },
    { label: 'Hindustan', href: 'https://tinyurl.com/sb-hindustan', image: 'img/media/hindustan.png' },
    { label: 'Times of India', href: 'https://tinyurl.com/sbaward-toi', image: 'img/media/timesofindia.png' },
  ];

  const CONTACT_PHONE = '+91 9621487604';
  const CONTACT_EMAIL = 'thesbaward@gmail.com';

  function normalizePath(pathname) {
    const lastSegment = pathname.split('/').filter(Boolean).pop();
    return lastSegment || 'index.html';
  }

  function activeHref() {
    const current = normalizePath(window.location.pathname.toLowerCase());
    return current === '/' || current === 'index.html' ? 'index.html' : current;
  }

  function navItemClass(href, currentHref) {
    return href === currentHref ? 'active' : '';
  }

  function renderHeader(currentHref) {
    return `
      <div class="site-topbar">
        <div class="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div class="d-flex align-items-center gap-2 text-white-50 small fw-medium">
            <i class="bi bi-award-fill text-gold"></i>
            <span>Swami Brahmanand Award</span>
          </div>
          <a class="topbar-call topbar-nominate" href="awards.html#nomination">
            <i class="bi bi-award"></i>
            <span>Nominate Now</span>
          </a>
        </div>
      </div>
      <header class="site-header">
        <div class="container">
          <div class="site-header__bar">
            <a class="site-brand" href="index.html" aria-label="Swami Brahmanand Award home">
              <img src="img/icons/sblogo.svg" alt="Swami Brahmanand Award logo" />
              <span>
                <strong>Swami Brahmanand</strong>
                <small>Award</small>
              </span>
            </a>
            <button class="navbar-toggler site-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse site-nav-collapse" id="siteNav">
            <nav class="site-nav" aria-label="Primary navigation">
              ${NAV_ITEMS.map((item) => `<a class="site-nav__link ${navItemClass(item.href, currentHref)}" href="${item.href}">${item.label}</a>`).join('')}
            </nav>
            <div class="site-nav__cta d-lg-none">
              <a class="btn btn-gold btn-sm w-100" href="tel:${CONTACT_PHONE.replace(/\s+/g, '')}">Call Office</a>
            </div>
          </div>
        </div>
      </header>`;
  }

  function renderFooter() {
    return `
      <footer class="site-footer" id="site-footer">
        <div class="container py-5">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="footer-brand mb-3">
                <img src="img/icons/sblogo.svg" alt="Award logo" />
                <div>
                  <h5 class="mb-0 text-white">Swami Brahmanand Award</h5>
                  <p class="mb-0 text-white-50">Recognizing service in education and Goseva.</p>
                </div>
              </div>
              <p class="text-white-50 mb-3">We promote awareness and encourage contributions from the elite society in the fields of education and cow protection.</p>
              <div class="d-flex gap-2">
                <a class="icon-btn" href="https://tinyurl.com/sbawardsfbpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a class="icon-btn" href="mailto:${CONTACT_EMAIL}" aria-label="Email">
                  <i class="bi bi-envelope"></i>
                </a>
                <a class="icon-btn" href="tel:${CONTACT_PHONE.replace(/\s+/g, '')}" aria-label="Call">
                  <i class="bi bi-telephone"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h6 class="footer-title">Quick Links</h6>
              <div class="footer-links">
                ${QUICK_LINKS.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
              </div>
            </div>
            <div class="col-lg-5 col-md-12">
              <h6 class="footer-title">Media & Contact</h6>
              <div class="row g-2 footer-media-grid">
                ${MEDIA_LINKS.map((item) => `
                  <div class="col-4 col-md-3 col-lg-4">
                    <a class="footer-media" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
                      <img src="${item.image}" alt="${item.label}" />
                    </a>
                  </div>`).join('')}
              </div>
              <div class="footer-contact card-surface mt-3 p-3">
                <div class="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                  <div>
                    <div class="text-white-50 small">Address</div>
                    <div class="text-white">Apex School Building, Main Road, Pathan Pura, Rath, Hamirpur, Uttar Pradesh</div>
                  </div>
                  <div class="text-end">
                    <div class="text-white-50 small">Email</div>
                    <a class="text-gold text-decoration-none" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bar">
          <div class="container d-flex flex-wrap gap-2 justify-content-between align-items-center">
            <small>&copy; <span data-current-year></span> Swami Brahmanand Award. All rights reserved.</small>
            <small class="text-white-50">Recognizing people who work in education and Goseva.</small>
          </div>
        </div>
      </footer>`;
  }

  function renderMobileNav(currentHref) {
    return `
      <nav class="mobile-bottom-nav" aria-label="Mobile navigation">
        ${NAV_ITEMS.slice(0, 2).map((item) => `
          <a class="mobile-bottom-nav__item ${navItemClass(item.href, currentHref)}" href="${item.href}">
            <i class="bi ${item.icon}"></i>
            <span>${item.label}</span>
          </a>`).join('')}
        <a class="mobile-bottom-nav__call" href="tel:${CONTACT_PHONE.replace(/\s+/g, '')}" aria-label="Call office">
          <i class="bi bi-telephone-fill"></i>
        </a>
        ${[NAV_ITEMS[3], NAV_ITEMS[5]].map((item) => `
          <a class="mobile-bottom-nav__item ${navItemClass(item.href, currentHref)}" href="${item.href}">
            <i class="bi ${item.icon}"></i>
            <span>${item.label}</span>
          </a>`).join('')}
      </nav>`;
  }

  function markCurrentNav(currentHref) {
    document.querySelectorAll('.site-nav__link, .mobile-bottom-nav__item').forEach((link) => {
      const isActive = link.getAttribute('href') === currentHref;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function closeMobileNavOnClick() {
    const navCollapse = document.getElementById('siteNav');
    if (!navCollapse) {
      return;
    }

    navCollapse.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        const collapseInstance = bootstrap.Collapse.getInstance(navCollapse);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      });
    });
  }

  function renderLayout() {
    const currentHref = activeHref();
    const headerHost = document.querySelector('[data-site-header]');
    const footerHost = document.querySelector('[data-site-footer]');
    const mobileNavHost = document.querySelector('[data-mobile-nav]');

    if (headerHost) {
      headerHost.innerHTML = renderHeader(currentHref);
    }

    if (footerHost) {
      footerHost.innerHTML = renderFooter();
    }

    if (mobileNavHost) {
      mobileNavHost.innerHTML = renderMobileNav(currentHref);
    }

    document.querySelectorAll('[data-current-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });

    markCurrentNav(currentHref);
    closeMobileNavOnClick();
  }

  document.addEventListener('DOMContentLoaded', renderLayout);
})();