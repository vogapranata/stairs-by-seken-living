(() => {
  const KEY = 'stairsDemoContentV1';
  const defaults = {
    settings: {
      heroTitle: 'A place to<br><span>step out</span> of ordinary.',
      heroSubtitle: 'Chill dining, warm light, modern architecture, and long conversations in the heart of Prawirotaman.',
      openingHours: '11.00 — 24.00 · Every day',
      location: 'Jl. Prawirotaman, Brontokusuman, Mergangsan, Yogyakarta 55153',
      mapsUrl: 'https://www.google.com/maps/place/STAIRS+by+Seken+Living/@-7.8191966,110.3696288,21z/data=!4m6!3m5!1s0x2e7a57835710d665:0x88af7340ff73c90b!8m2!3d-7.8191034!4d110.3695626!16s%2Fg%2F11v3h5kb1l?entry=ttu',
      instagramUrl: 'https://www.instagram.com/stairsprawirotaman/',
      reservationUrl: 'https://www.instagram.com/stairsprawirotaman/'
    },
    menu: [
      { id: 'm1', name: 'Eggs Benedict', category: 'Brunch', price: 'Rp58K', description: 'Poached egg, toast, creamy hollandaise.' },
      { id: 'm2', name: 'BBQ Chili Wings', category: 'Bites', price: 'Rp52K', description: 'Sweet-smoky glaze with a warm chili kick.' },
      { id: 'm3', name: 'Wild Mushroom Soup', category: 'Comfort', price: 'Rp48K', description: 'Earthy mushroom, silky cream, toasted bread.' },
      { id: 'm4', name: 'Truffle Mushroom Pizza', category: 'Pizza', price: 'Rp78K', description: 'Mushroom, cheese, aromatic truffle finish.' },
      { id: 'm5', name: 'Aglio Olio', category: 'Pasta', price: 'Rp62K', description: 'Garlic, olive oil, chili, herbs.' },
      { id: 'm6', name: 'STAIRS Iced White', category: 'Coffee', price: 'Rp38K', description: 'Espresso, milk, signature sweet cream.' }
    ],
    gallery: [
      { id: 'g1', type: 'image', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85', caption: 'Warm interior mood' },
      { id: 'g2', type: 'image', url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=85', caption: 'Concrete, steel & light' },
      { id: 'g3', type: 'image', url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85', caption: 'Night dining atmosphere' },
      { id: 'g4', type: 'image', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85', caption: 'Tables made for long talks' }
    ],
    reviews: [
      { id: 'r1', name: 'Guest note', text: 'The atmosphere gets even better after dark. Great spot to slow down and stay a little longer.', rating: 5 },
      { id: 'r2', name: 'Local visitor', text: 'Strong architecture, comfortable ambience, and a menu that works from coffee time into dinner.', rating: 5 },
      { id: 'r3', name: 'Weekend table', text: 'Prawirotaman energy without feeling too crowded. The lighting and outdoor area are the highlight.', rating: 5 }
    ]
  };

  function loadData() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (!saved) return structuredClone ? structuredClone(defaults) : JSON.parse(JSON.stringify(defaults));
      return {
        settings: { ...defaults.settings, ...(saved.settings || {}) },
        menu: Array.isArray(saved.menu) ? saved.menu : defaults.menu,
        gallery: Array.isArray(saved.gallery) ? saved.gallery : defaults.gallery,
        reviews: Array.isArray(saved.reviews) ? saved.reviews : defaults.reviews
      };
    } catch {
      return JSON.parse(JSON.stringify(defaults));
    }
  }

  const data = loadData();
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function applySettings() {
    $$('[data-setting]').forEach(el => {
      const key = el.dataset.setting;
      if (key === 'heroTitle') el.innerHTML = data.settings[key] || '';
      else el.textContent = data.settings[key] || '';
    });
    $$('[data-setting-link]').forEach(el => {
      const key = el.dataset.settingLink;
      if (data.settings[key]) el.href = data.settings[key];
    });
  }

  let activeCategory = 'All';
  function renderMenu() {
    const filter = $('#menuFilter');
    const grid = $('#menuGrid');
    if (!filter || !grid) return;
    const cats = ['All', ...new Set(data.menu.map(x => x.category).filter(Boolean))];
    if (!cats.includes(activeCategory)) activeCategory = 'All';
    filter.innerHTML = cats.map(cat => `<button type="button" class="${cat === activeCategory ? 'active' : ''}" data-cat="${esc(cat)}">${esc(cat)}</button>`).join('');
    const items = activeCategory === 'All' ? data.menu : data.menu.filter(x => x.category === activeCategory);
    grid.innerHTML = items.length ? items.map((item, i) => `
      <article class="menu-card reveal visible" style="--delay:${i * 55}ms">
        <div class="menu-index">${String(i + 1).padStart(2, '0')}</div>
        <div class="menu-copy"><span>${esc(item.category)}</span><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p></div>
        <strong>${esc(item.price)}</strong>
      </article>`).join('') : `<p class="empty-state">No items in this category yet.</p>`;
    filter.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderMenu();
    }));
  }

  function renderGallery() {
    const grid = $('#galleryGrid');
    if (!grid) return;
    grid.innerHTML = data.gallery.length ? data.gallery.map((item, i) => {
      const media = item.type === 'video'
        ? `<video src="${esc(item.url)}" muted loop playsinline preload="metadata"></video><span class="media-badge">VIDEO</span>`
        : `<img src="${esc(item.url)}" alt="${esc(item.caption || 'STAIRS gallery')}" loading="lazy">`;
      return `<figure class="gallery-card reveal ${i === 0 ? 'wide' : ''}">${media}<figcaption><span>${String(i+1).padStart(2,'0')}</span>${esc(item.caption || 'STAIRS')}</figcaption></figure>`;
    }).join('') : '<p class="empty-state">Gallery is waiting for content.</p>';
    grid.querySelectorAll('video').forEach(video => {
      const card = video.closest('.gallery-card');
      card.addEventListener('mouseenter', () => video.play().catch(() => {}));
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
      card.addEventListener('click', () => video.paused ? video.play().catch(() => {}) : video.pause());
    });
  }

  function renderReviews() {
    const list = $('#reviewList');
    if (!list) return;
    list.innerHTML = data.reviews.length ? data.reviews.map((r, i) => `
      <blockquote class="review-card reveal">
        <div class="quote-mark">“</div>
        <p>${esc(r.text)}</p>
        <footer><span>${esc(r.name)}</span><b>${'★'.repeat(Math.max(1, Math.min(5, Number(r.rating) || 5)))}</b></footer>
      </blockquote>`).join('') : '<p class="empty-state">No curated reviews yet.</p>';
  }

  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  }

  function initHeroMotion() {
    const visual = $('#heroVisual');
    if (!visual || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    visual.addEventListener('pointermove', e => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      visual.style.setProperty('--mx', `${x * 18}px`);
      visual.style.setProperty('--my', `${y * 18}px`);
      visual.style.setProperty('--rx', `${y * -3}deg`);
      visual.style.setProperty('--ry', `${x * 4}deg`);
    });
    visual.addEventListener('pointerleave', () => {
      ['--mx','--my','--rx','--ry'].forEach(v => visual.style.removeProperty(v));
    });
  }

  function initMobileNav() {
    const toggle = $('.menu-toggle');
    const nav = $('#mobileNav');
    if (!toggle || !nav) return;
    const close = () => { nav.classList.remove('open'); nav.setAttribute('aria-hidden','true'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => { nav.classList.add('open'); nav.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); });
    $('.mobile-close', nav)?.addEventListener('click', close);
    $$('a', nav).forEach(a => a.addEventListener('click', close));
  }

  applySettings();
  renderMenu();
  renderGallery();
  renderReviews();
  initReveal();
  initHeroMotion();
  initMobileNav();

  window.addEventListener('storage', e => {
    if (e.key === KEY) location.reload();
  });
})();
