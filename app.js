(() => {
  'use strict';

  const CONTENT_KEY = 'stairsDemoContentV3';
  const LANG_KEY = 'stairsUiLanguage';
  const THEME_KEY = 'stairsUiTheme';

  const defaults = {
    settings: {
      heroTitleId: 'Saatnya<br><span>step out</span> dari yang biasa.',
      heroTitleEn: 'A place to<br><span>step out</span> of ordinary.',
      heroSubtitleId: 'Global-inspired food, cocktails, late night, dan ruang yang terasa berbeda di setiap langkah.',
      heroSubtitleEn: 'Global-inspired food, cocktails, late nights, and a space built to be experienced one step at a time.',
      openingHoursShort: '11.00 — 01.00',
      openingHoursId: 'Senin–Jumat 11.00 — 01.00 · Sabtu–Minggu 11.00 — 02.00',
      openingHoursEn: 'Mon–Fri 11.00 — 01.00 · Sat–Sun 11.00 — 02.00',
      location: 'Jl. Prawirotaman, Brontokusuman, Mergangsan, Yogyakarta 55153',
      phone: '+62 852-1565-5565',
      mapsUrl: 'https://www.google.com/maps/place/STAIRS+by+Seken+Living/@-7.8191966,110.3696288,21z/data=!4m6!3m5!1s0x2e7a57835710d665:0x88af7340ff73c90b!8m2!3d-7.8191034!4d110.3695626!16s%2Fg%2F11v3h5kb1l?entry=ttu',
      instagramUrl: 'https://www.instagram.com/stairsprawirotaman/',
      reservationUrl: 'https://linktr.ee/stairsprawirotaman',
      defaultLanguage: 'id',
      defaultTheme: 'dark'
    },
    menu: [
      { id:"m1", name:"Bananarama", category:"Breakfast", price:"Rp60K", descriptionId:"Menu all-day breakfast manis untuk brunch santai.", descriptionEn:"A sweet all-day breakfast pick for a slow brunch." },
      { id:"m2", name:"French Toast", category:"Breakfast", price:"Rp65K", descriptionId:"French toast untuk brunch dengan karakter manis dan buttery.", descriptionEn:"Buttery, sweet French toast made for brunch." },
      { id:"m3", name:"Eggs Benedict", category:"Breakfast", price:"Rp95K", descriptionId:"Pilihan brunch klasik dari menu STAIRS.", descriptionEn:"A classic brunch choice from the STAIRS menu." },
      { id:"m4", name:"Homemade Croissants, Butter & Jams", category:"Breakfast", price:"Rp40K", descriptionId:"Croissant rumahan dengan butter dan selai.", descriptionEn:"House croissants served with butter and jam." },
      { id:"m5", name:"Tuna Mayo Croissant", category:"Breakfast", price:"Rp50K", descriptionId:"Croissant gurih dengan tuna mayo.", descriptionEn:"A savoury croissant filled with tuna mayo." },
      { id:"m6", name:"Big Breakfast", category:"Breakfast", price:"Rp85K", descriptionId:"Sarapan lengkap untuk porsi yang lebih mengenyangkan.", descriptionEn:"A fuller breakfast plate for a bigger appetite." },
      { id:"m7", name:"Tapioka Fritters", category:"Bites", price:"Rp30K", descriptionId:"Camilan ringan berbasis tapioka untuk sharing.", descriptionEn:"Light tapioca fritters made for sharing." },
      { id:"m8", name:"Fried Corn Bakwan", category:"Bites", price:"Rp30K", descriptionId:"Bakwan jagung renyah untuk teman nongkrong.", descriptionEn:"Crispy corn fritters for the table." },
      { id:"m9", name:"Fried Banana Fritters", category:"Bites", price:"Rp35K", descriptionId:"Pisang goreng sebagai sweet bite.", descriptionEn:"Fried banana fritters as a sweet bite." },
      { id:"m10", name:"BBQ Chili Wings", category:"Bites", price:"Rp50K", descriptionId:"Chicken wings dengan sentuhan BBQ dan chili.", descriptionEn:"Chicken wings with BBQ and chilli notes." },
      { id:"m11", name:"Cheese Twist", category:"Bites", price:"Rp45K", descriptionId:"Snack keju renyah yang cocok untuk sharing.", descriptionEn:"A crisp, cheesy snack built for sharing." },
      { id:"m12", name:"Cromboloni", category:"Bites", price:"—", descriptionId:"Pastry crunchy dengan filling, disebut dalam liputan pengunjung.", descriptionEn:"A crunchy filled pastry mentioned in visitor coverage." },
      { id:"m13", name:"Barbeque Chicken Pizza", category:"Pizza", price:"Rp90K", descriptionId:"Pizza chicken dengan karakter barbeque.", descriptionEn:"Chicken pizza with a barbecue profile." },
      { id:"m14", name:"Mushroom Pizza", category:"Pizza", price:"Rp85K", descriptionId:"Pizza mushroom untuk sharing.", descriptionEn:"A mushroom pizza made for sharing." },
      { id:"m15", name:"Margherita Pizza", category:"Pizza", price:"Rp85K", descriptionId:"Pizza klasik dengan profil rasa sederhana.", descriptionEn:"A simple, classic Margherita-style pizza." },
      { id:"m16", name:"Smoked Beef Pizza", category:"Pizza", price:"—", descriptionId:"Smoked beef pizza yang disebut dalam liputan kuliner STAIRS.", descriptionEn:"Smoked beef pizza mentioned in STAIRS dining coverage." },
      { id:"m17", name:"STAIRS Chicken Salad", category:"Salads", price:"Rp65K", descriptionId:"Salad chicken dari pilihan greens STAIRS.", descriptionEn:"Chicken salad from the STAIRS greens selection." },
      { id:"m18", name:"Thai Beef Salad", category:"Salads", price:"Rp85K", descriptionId:"Salad beef dengan profil rasa Thai.", descriptionEn:"A beef salad with Thai-inspired flavours." },
      { id:"m19", name:"Caesar Salad", category:"Salads", price:"Rp55K", descriptionId:"Caesar salad klasik.", descriptionEn:"A classic Caesar salad." },
      { id:"m20", name:"Grilled Salmon Add-on", category:"Salads", price:"Rp30K", descriptionId:"Tambahan grilled salmon untuk salad.", descriptionEn:"Grilled salmon add-on for salads." },
      { id:"m21", name:"Grilled Chicken Add-on", category:"Salads", price:"Rp10K", descriptionId:"Tambahan grilled chicken untuk salad.", descriptionEn:"Grilled chicken add-on for salads." },
      { id:"m22", name:"Wild Mushroom Soup", category:"Comfort", price:"Rp60K", descriptionId:"Sup jamur hangat dari kategori comfort food.", descriptionEn:"A warm mushroom soup from the comfort-food selection." },
      { id:"m23", name:"Singaporean Laksa", category:"Comfort", price:"Rp85K", descriptionId:"Laksa bergaya Singapura.", descriptionEn:"Singapore-style laksa." },
      { id:"m24", name:"Hungarian Beef Goulash", category:"Comfort", price:"Rp85K", descriptionId:"Beef goulash untuk pilihan comfort food yang lebih hearty.", descriptionEn:"A hearty beef goulash comfort dish." },
      { id:"m25", name:"Prawn Tom Yum Goong", category:"Comfort", price:"Rp70K", descriptionId:"Tom yum udang dengan karakter asam-pedas.", descriptionEn:"Prawn tom yum with a bright hot-and-sour profile." },
      { id:"m26", name:"Linguini Pescatore", category:"Pasta", price:"Rp125K", descriptionId:"Linguini seafood dari lini pasta STAIRS.", descriptionEn:"Seafood linguini from the STAIRS pasta selection." },
      { id:"m27", name:"Risotto con Pollo ai Funghi Porcini", category:"Pasta", price:"Rp85K", descriptionId:"Risotto chicken dan porcini.", descriptionEn:"Chicken and porcini risotto." },
      { id:"m28", name:"Spaghetti Sambal Matah", category:"Pasta", price:"Rp85K", descriptionId:"Spaghetti dengan twist sambal matah.", descriptionEn:"Spaghetti finished with an Indonesian sambal matah twist." },
      { id:"m29", name:"Fusilli con Pollo Affumicato", category:"Pasta", price:"Rp85K", descriptionId:"Fusilli dengan smoked chicken.", descriptionEn:"Fusilli paired with smoked chicken." },
      { id:"m30", name:"Gnocchi alla Ragu", category:"Pasta", price:"Rp85K", descriptionId:"Gnocchi dengan ragù.", descriptionEn:"Gnocchi served with ragù." },
      { id:"m31", name:"Beef Lasagna", category:"Pasta", price:"Rp70K", descriptionId:"Lasagna beef dari pilihan pasta.", descriptionEn:"Beef lasagna from the pasta selection." },
      { id:"m32", name:"Crispy Skin Salmon", category:"Mains", price:"Rp151K", descriptionId:"Salah satu signature main yang disebut dalam liputan terbaru.", descriptionEn:"One of the signature mains highlighted in recent coverage." },
      { id:"m33", name:"Iga Bakar Bumbu Bali", category:"Mains", price:"Rp173K", descriptionId:"Iga bakar dengan bumbu Bali.", descriptionEn:"Grilled ribs with Balinese seasoning." },
      { id:"m34", name:"Wagyu Beef Burger", category:"Mains", price:"Rp135K", descriptionId:"Burger wagyu untuk pilihan main yang lebih hearty.", descriptionEn:"A hearty wagyu beef burger main." },
      { id:"m35", name:"Scaloppine Chicken Stairs", category:"Mains", price:"Rp85K", descriptionId:"Chicken dish signature STAIRS.", descriptionEn:"A STAIRS signature chicken main." },
      { id:"m36", name:"Fish & Chips Chicken", category:"Mains", price:"—", descriptionId:"Menu fish & chips/chicken yang muncul dalam liputan Prawirotaman.", descriptionEn:"A fish & chips/chicken item mentioned in Prawirotaman coverage." },
      { id:"m37", name:"Espresso", category:"Coffee", price:"Rp25K", descriptionId:"Espresso klasik.", descriptionEn:"Classic espresso." },
      { id:"m38", name:"Cappuccino", category:"Coffee", price:"Rp25K", descriptionId:"Espresso dan milk foam.", descriptionEn:"Espresso with steamed milk and foam." },
      { id:"m39", name:"Flat White", category:"Coffee", price:"Rp25K", descriptionId:"Kopi susu dengan tekstur halus.", descriptionEn:"Smooth espresso with textured milk." },
      { id:"m40", name:"Cafe Latte", category:"Coffee", price:"Rp25K", descriptionId:"Latte klasik.", descriptionEn:"Classic café latte." },
      { id:"m41", name:"Long Black", category:"Coffee", price:"Rp25K", descriptionId:"Kopi hitam berbasis espresso.", descriptionEn:"Espresso-based black coffee." },
      { id:"m42", name:"Macchiato", category:"Coffee", price:"Rp25K", descriptionId:"Espresso dengan sedikit milk foam.", descriptionEn:"Espresso marked with a touch of milk foam." },
      { id:"m43", name:"Americano", category:"Coffee", price:"Rp30K", descriptionId:"Americano klasik.", descriptionEn:"Classic Americano." },
      { id:"m44", name:"Brown Iced Coffee", category:"Coffee", price:"Rp30K", descriptionId:"Iced coffee dari daftar minuman STAIRS.", descriptionEn:"An iced coffee from the STAIRS drinks list." },
      { id:"m45", name:"Affogato", category:"Coffee", price:"Rp25K", descriptionId:"Espresso dengan es krim.", descriptionEn:"Espresso served over ice cream." },
      { id:"m46", name:"Hazelnut Iced Coffee", category:"Coffee", price:"Rp30K", descriptionId:"Iced coffee dengan rasa hazelnut.", descriptionEn:"Iced coffee with hazelnut flavour." },
      { id:"m47", name:"Vanilla Iced Coffee", category:"Coffee", price:"Rp30K", descriptionId:"Iced coffee dengan rasa vanilla.", descriptionEn:"Iced coffee with vanilla flavour." },
      { id:"m48", name:"Baileys Iced Coffee", category:"Coffee", price:"Rp30K", descriptionId:"Iced coffee varian Baileys yang tercantum di referensi menu publik.", descriptionEn:"Baileys-flavoured iced coffee listed in public menu references." },
      { id:"m49", name:"Es Kopi Susu Rumahan", category:"Coffee", price:"Rp30K", descriptionId:"Es kopi susu rumahan.", descriptionEn:"House-style iced milk coffee." },
      { id:"m50", name:"Classic Iced Tea", category:"Tea", price:"Rp20K", descriptionId:"Es teh klasik.", descriptionEn:"Classic iced tea." },
      { id:"m51", name:"Iced Lemon Tea", category:"Tea", price:"Rp25K", descriptionId:"Es teh lemon yang segar.", descriptionEn:"Refreshing iced lemon tea." },
      { id:"m52", name:"Peach Iced Tea", category:"Tea", price:"Rp25K", descriptionId:"Es teh peach.", descriptionEn:"Peach-flavoured iced tea." },
      { id:"m53", name:"Green Mist", category:"Fermented", price:"Rp40K", descriptionId:"Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.", descriptionEn:"One of the fermented/health drinks listed in public menu references." },
      { id:"m54", name:"Bee Brave", category:"Fermented", price:"Rp40K", descriptionId:"Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.", descriptionEn:"One of the fermented/health drinks listed in public menu references." },
      { id:"m55", name:"Joy Peach", category:"Fermented", price:"Rp40K", descriptionId:"Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.", descriptionEn:"One of the fermented/health drinks listed in public menu references." },
      { id:"m56", name:"Matcha Pistachio", category:"Non Coffee", price:"—", descriptionId:"Minuman yang disebut populer di ringkasan ulasan publik.", descriptionEn:"A drink highlighted as popular in public review summaries." },
      { id:"m57", name:"Fresh Juice Selection", category:"Non Coffee", price:"—", descriptionId:"Aneka jus segar yang muncul di liputan pengunjung.", descriptionEn:"Fresh juice selections seen in visitor coverage." },
      { id:"m58", name:"Signature Cocktail Selection", category:"Cocktails", price:"—", descriptionId:"Pilihan cocktail menjadi bagian dari identitas late-night STAIRS.", descriptionEn:"A cocktail selection forms part of STAIRS’ late-night identity." }
    ],
    gallery: [
      {
        id:'g1', type:'image',
        url:'https://image.idntimes.com/post/20240305/2023-10-25-11zon-a9b86914ba33fca85ab078094226c771-befb7adf121bb364245db37c100f80c3.jpg',
        titleId:'Suasana STAIRS', titleEn:'STAIRS Atmosphere',
        captionId:'Foto pengunjung dari listing Google Maps STAIRS, dipakai sebagai referensi visual untuk demo website.',
        captionEn:'A visitor photo from the STAIRS Google Maps listing, used as a visual reference for this website demo.',
        source:'Google Maps / im maya · via IDN Times'
      },
      {
        id:'g2', type:'image',
        url:'https://image.idntimes.com/post/20240506/img-5011-15fe9b9bfabc636515b6203565331b9a-ffeb8ae543a355cb2c7b2fa28ae5fdaf.jpeg',
        titleId:'Table Culture', titleEn:'Table Culture',
        captionId:'Suasana makan bersama yang dipublikasikan dalam liputan Prawirotaman dan dikreditkan ke Instagram STAIRS.',
        captionEn:'A communal dining moment published in Prawirotaman coverage and attributed to STAIRS’ Instagram.',
        source:'Instagram @stairsprawirotaman via IDN Times'
      },
      {
        id:'g3', type:'image',
        url:'https://ak-d.tripcdn.com/images/1mi5s224x8ym7uj762755.jpg?proc=source%2Ftrip',
        titleId:'Night Mood', titleEn:'Night Mood',
        captionId:'Referensi suasana dan hospitality STAIRS dari foto traveler publik.',
        captionEn:'A STAIRS atmosphere and hospitality reference from a public traveler photo.',
        source:'STAIRS public venue photo · traveler reference'
      },
      {
        id:'g4', type:'image',
        url:'https://ak-d.tripcdn.com/images/1mi68224x8ym87kz7D46C.jpg?proc=source%2Ftrip',
        titleId:'Food & Drinks', titleEn:'Food & Drinks',
        captionId:'Referensi venue STAIRS dari foto traveler publik untuk melengkapi slider demo.',
        captionEn:'A public traveler reference of the STAIRS venue used to complete the demo slider.',
        source:'STAIRS public venue photo · traveler reference'
      }
    ],
    reviews: [
      { id:'r1', name:'Google visitor', textId:'Tempatnya nyaman dengan banyak pilihan seating. Suasananya jadi nilai paling kuat.', textEn:'A comfortable place with plenty of seating options, with atmosphere as a clear highlight.', rating:5 },
      { id:'r2', name:'Google visitor', textId:'Pelayanan, makanan, dan tempatnya terasa cocok untuk dinner dan chill.', textEn:'Service, food and the overall place work especially well for dinner and a relaxed night out.', rating:5 },
      { id:'r3', name:'Public review summary', textId:'Pizza, beef, coffee, dekorasi dan ambience sering muncul sebagai hal yang disukai pengunjung.', textEn:'Pizza, beef, coffee, décor and atmosphere are frequently mentioned positively by visitors.', rating:5 }
    ]
  };

  const i18n = {
    id: {
      navStory:'Cerita', navMenu:'Menu', navSpace:'Suasana', navVisit:'Lokasi', reserve:'Reservasi', themeDark:'Gelap', themeLight:'Terang',
      exploreMenu:'Lihat Menu', openMaps:'Buka Maps ↗', googleRating:'rating Google', opensDaily:'buka setiap hari', lateNights:'sampai larut',
      photoReference:'Referensi foto publik', openDaily:'BUKA SETIAP HARI', weekendHours:'Sabtu–Minggu sampai 02.00', storyLabel:'CERITA',
      storyTitle:'Salah satu tangga<br><em>paling ikonik di Prawirotaman.</em>',
      storyP1:'STAIRS memadukan beton ekspos, permukaan hitam, dan aksen merah dengan pengalaman dining indoor–outdoor. Saat malam, suasananya berubah menjadi restoran dan bar yang hidup sampai larut.',
      storyP2:'Konsep website ini menerjemahkan identitas fisik tersebut lewat layer tangga, gerak yang terarah, referensi venue asli, dan transisi berbeda di setiap section.',
      menuLabel:'MENU', menuTitle:'Dari brunch sampai late night.',
      menuIntro:'Referensi menu disusun dari listing menu publik STAIRS dan liputan yang terhubung dengan Instagram. Harga dapat berubah.',
      officialMenu:'Menu Resmi ↗', menuDisclaimer:'Ini adalah website demo/pitching. Konfirmasi menu dan harga terbaru langsung dengan STAIRS sebelum digunakan sebagai website resmi.',
      spaceLabel:'SUASANA & HIDANGAN', spaceTitle:'Concrete by day.<br><span>Electric after dark.</span>',
      spaceIntro:'Referensi visual di bawah memakai foto publik yang terindeks dan terkait langsung dengan STAIRS, termasuk liputan yang mengkreditkan Instagram mereka.',
      reviewLabel:'KATA PENGUNJUNG', reviewSummary:'Dikenal karena ambience, late-night dining, pizza, kopi, dan arsitektur yang berbeda.', readGoogle:'Baca di Google Maps ↗',
      visitLabel:'KUNJUNGI', visitTitle:'Ketemu<br>di tangga.', address:'ALAMAT', hours:'JAM BUKA', phone:'TELEPON', directions:'Buka Petunjuk Arah',
      demoCredit:'Konsep demo. Referensi venue/menu publik digunakan untuk pitching; ganti dengan aset resmi berlisensi sebelum production.',
      all:'Semua', Breakfast:'Breakfast', Bites:'Snack', Pizza:'Pizza', Salads:'Salad', Comfort:'Soup & Comfort', Pasta:'Pasta', Mains:'Main Course', Coffee:'Coffee', Tea:'Tea', Fermented:'Fermentasi', 'Non Coffee':'Non Coffee', Cocktails:'Cocktail'
    },
    en: {
      navStory:'Story', navMenu:'Menu', navSpace:'Space', navVisit:'Visit', reserve:'Reserve', themeDark:'Dark', themeLight:'Light',
      exploreMenu:'Explore Menu', openMaps:'Open Maps ↗', googleRating:'Google rating', opensDaily:'opens daily', lateNights:'late nights',
      photoReference:'Public photo reference', openDaily:'OPEN DAILY', weekendHours:'Sat–Sun until 02.00', storyLabel:'THE STORY',
      storyTitle:'One of Prawirotaman\'s<br><em>most recognisable steps.</em>',
      storyP1:'STAIRS pairs exposed concrete, black surfaces and bold red details with an indoor–outdoor dining experience. After dark, the atmosphere shifts into a late-night restaurant and bar mood.',
      storyP2:'This concept site mirrors that physical identity through layered stairs, directional motion, real venue references, and section-by-section transitions.',
      menuLabel:'MENU', menuTitle:'From brunch to late night.',
      menuIntro:'Menu references are compiled from STAIRS’ public menu listings and Instagram-linked coverage. Prices may change.',
      officialMenu:'Official Menu ↗', menuDisclaimer:'This is a pitching/demo website. Confirm the latest official menu and prices with STAIRS before publishing as the official site.',
      spaceLabel:'SPACE & PLATES', spaceTitle:'Concrete by day.<br><span>Electric after dark.</span>',
      spaceIntro:'Visual references below use publicly indexed photos associated with STAIRS, including Instagram-attributed coverage and venue listings.',
      reviewLabel:'WHAT PEOPLE SAY', reviewSummary:'Known for atmosphere, late-night dining, pizza, coffee and a distinctive space.', readGoogle:'Read on Google Maps ↗',
      visitLabel:'VISIT', visitTitle:'Meet us<br>on the steps.', address:'ADDRESS', hours:'HOURS', phone:'PHONE', directions:'Get Directions',
      demoCredit:'Demo concept. Public venue/menu references are used for pitching only; replace with licensed official assets before production.',
      all:'All', Breakfast:'Breakfast', Bites:'Bites', Pizza:'Pizza', Salads:'Salads', Comfort:'Soup & Comfort', Pasta:'Pasta', Mains:'Mains', Coffee:'Coffee', Tea:'Tea', Fermented:'Fermented', 'Non Coffee':'Non Coffee', Cocktails:'Cocktails'
    }
  };

  const clone = value => typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const esc = (value='') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  function loadData() {
    try {
      const raw = localStorage.getItem(CONTENT_KEY);
      const saved = raw ? JSON.parse(raw) : null;
      if (!saved) return clone(defaults);
      return {
        settings: { ...defaults.settings, ...(saved.settings || {}) },
        menu: Array.isArray(saved.menu) ? saved.menu : clone(defaults.menu),
        gallery: Array.isArray(saved.gallery) ? saved.gallery : clone(defaults.gallery),
        reviews: Array.isArray(saved.reviews) ? saved.reviews : clone(defaults.reviews)
      };
    } catch (error) {
      console.warn('STAIRS demo content reset to defaults.', error);
      return clone(defaults);
    }
  }

  const data = loadData();
  let language = localStorage.getItem(LANG_KEY) || data.settings.defaultLanguage || 'id';
  let theme = localStorage.getItem(THEME_KEY) || data.settings.defaultTheme || 'dark';
  if (!['id','en'].includes(language)) language = 'id';
  if (!['dark','light'].includes(theme)) theme = 'dark';
  let activeCategory = 'All';
  let galleryIndex = 0;
  let galleryTimer = null;

  function tr(key) { return i18n[language]?.[key] ?? i18n.en[key] ?? key; }

  function applySettings() {
    $$('[data-setting]').forEach(el => {
      const key = el.dataset.setting;
      if (key === 'heroTitle') {
        const value = language === 'id' ? data.settings.heroTitleId : data.settings.heroTitleEn;
        el.innerHTML = value || data.settings.heroTitleEn || '';
      } else if (key === 'heroSubtitle') {
        el.textContent = (language === 'id' ? data.settings.heroSubtitleId : data.settings.heroSubtitleEn) || '';
      } else if (key === 'openingHours') {
        el.textContent = (language === 'id' ? data.settings.openingHoursId : data.settings.openingHoursEn) || '';
      } else {
        el.textContent = data.settings[key] || '';
      }
    });
    $$('[data-setting-link]').forEach(el => {
      const key = el.dataset.settingLink;
      if (data.settings[key]) el.href = data.settings[key];
    });
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    $$('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = tr(el.dataset.i18nHtml); });
    const current = $('.lang-current');
    const other = $('.lang-other');
    if (current) current.textContent = language.toUpperCase();
    if (other) other.textContent = (language === 'id' ? 'EN' : 'ID');
    const themeLabel = $('.theme-label');
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? tr('themeDark') : tr('themeLight');
    applySettings();
    renderMenu();
    renderGallery();
    renderReviews();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#090909' : '#eeeae2');
    const label = $('.theme-label');
    if (label) label.textContent = theme === 'dark' ? tr('themeDark') : tr('themeLight');
  }

  function setLanguage(next) {
    language = next;
    localStorage.setItem(LANG_KEY, language);
    applyLanguage();
  }

  function setTheme(next) {
    theme = next;
    localStorage.setItem(THEME_KEY, theme);
    applyTheme();
  }

  function renderMenu() {
    const filter = $('#menuFilter');
    const grid = $('#menuGrid');
    if (!filter || !grid) return;
    const categories = ['All', ...new Set(data.menu.map(item => item.category).filter(Boolean))];
    if (!categories.includes(activeCategory)) activeCategory = 'All';

    filter.innerHTML = categories.map(category => {
      const label = category === 'All' ? tr('all') : tr(category);
      return `<button type="button" class="${category === activeCategory ? 'active' : ''}" data-cat="${esc(category)}">${esc(label)}</button>`;
    }).join('');

    const items = activeCategory === 'All' ? data.menu : data.menu.filter(item => item.category === activeCategory);
    grid.innerHTML = items.map((item,index) => {
      const description = language === 'id' ? (item.descriptionId || item.description || '') : (item.descriptionEn || item.description || '');
      return `<article class="menu-card">
        <div class="menu-index">${String(index+1).padStart(2,'0')}</div>
        <div class="menu-copy"><span>${esc(tr(item.category))}</span><h3>${esc(item.name)}</h3><p>${esc(description)}</p></div>
        <strong>${esc(item.price || '—')}</strong>
      </article>`;
    }).join('') || `<p class="empty-state">${language === 'id' ? 'Belum ada menu di kategori ini.' : 'No menu items in this category yet.'}</p>`;

    $$('button[data-cat]', filter).forEach(button => button.addEventListener('click', () => {
      activeCategory = button.dataset.cat;
      renderMenu();
    }));
  }

  function bindImageFallbacks(context = document) {
    $$('img', context).forEach(img => {
      if (img.dataset.fallbackBound === '1') return;
      img.dataset.fallbackBound = '1';
      img.addEventListener('error', () => {
        const media = img.closest('.gallery-media');
        if (media) media.classList.add('media-broken');
        img.hidden = true;
      });
    });
  }

  function renderGallery() {
    const track = $('#galleryTrack');
    const dots = $('#galleryDots');
    if (!track || !dots) return;
    if (galleryIndex >= data.gallery.length) galleryIndex = 0;

    track.innerHTML = data.gallery.map((item,index) => {
      const title = language === 'id' ? (item.titleId || item.title || 'STAIRS') : (item.titleEn || item.title || 'STAIRS');
      const caption = language === 'id' ? (item.captionId || item.caption || '') : (item.captionEn || item.caption || '');
      const media = item.type === 'video'
        ? `<video src="${esc(item.url)}" muted loop playsinline preload="metadata"></video>`
        : `<img src="${esc(item.url)}" alt="${esc(title)}" loading="${index === 0 ? 'eager' : 'lazy'}" referrerpolicy="no-referrer">`;
      return `<article class="gallery-slide ${index === galleryIndex ? 'active' : ''}" aria-hidden="${index === galleryIndex ? 'false' : 'true'}">
        <div class="gallery-media">${media}</div>
        <div class="gallery-slide-copy"><span class="gallery-no">${String(index+1).padStart(2,'0')} / ${String(data.gallery.length).padStart(2,'0')}</span><h3>${esc(title)}</h3><p>${esc(caption)}</p><span class="gallery-source">${esc(item.source || '')}</span></div>
      </article>`;
    }).join('');

    dots.innerHTML = data.gallery.map((_,index) => `<button type="button" class="${index === galleryIndex ? 'active' : ''}" data-gallery-dot="${index}" aria-label="Slide ${index+1}"></button>`).join('');
    bindImageFallbacks(track);
    updateGallery(false);
    $$('[data-gallery-dot]', dots).forEach(button => button.addEventListener('click', () => goGallery(Number(button.dataset.galleryDot), true)));
  }

  function updateGallery(animate = true) {
    const track = $('#galleryTrack');
    if (!track || !data.gallery.length) return;
    if (!animate) track.style.transition = 'none';
    track.style.transform = `translateX(-${galleryIndex * 100}%)`;
    requestAnimationFrame(() => { if (!animate) track.style.removeProperty('transition'); });
    $$('.gallery-slide', track).forEach((slide,index) => {
      slide.classList.toggle('active', index === galleryIndex);
      slide.setAttribute('aria-hidden', index === galleryIndex ? 'false' : 'true');
      const video = $('video', slide);
      if (video) {
        if (index === galleryIndex) video.play().catch(() => {});
        else { video.pause(); video.currentTime = 0; }
      }
    });
    $$('[data-gallery-dot]').forEach((button,index) => button.classList.toggle('active', index === galleryIndex));
  }

  function goGallery(index, restart = false) {
    if (!data.gallery.length) return;
    galleryIndex = (index + data.gallery.length) % data.gallery.length;
    updateGallery(true);
    if (restart) startGalleryAutoplay();
  }

  function startGalleryAutoplay() {
    if (galleryTimer) clearInterval(galleryTimer);
    if (reduceMotion || data.gallery.length < 2) return;
    galleryTimer = setInterval(() => goGallery(galleryIndex + 1, false), 5500);
  }

  function renderReviews() {
    const list = $('#reviewList');
    if (!list) return;
    list.innerHTML = data.reviews.map(review => {
      const text = language === 'id' ? (review.textId || review.text || '') : (review.textEn || review.text || '');
      return `<blockquote class="review-card"><div class="quote-mark">“</div><p>${esc(text)}</p><footer><span>${esc(review.name)}</span><b>${'★'.repeat(Math.max(1,Math.min(5,Number(review.rating)||5)))}</b></footer></blockquote>`;
    }).join('');
  }

  function initSlideMotion() {
    const slides = $$('.slide-section');
    if (!slides.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      slides.forEach(slide => slide.classList.add('is-active'));
      return;
    }
    // Progressive enhancement: konten tetap terlihat jika JS/observer gagal.
    document.documentElement.classList.add('motion-ready');
    slides[0]?.classList.add('is-active');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-active');
        else if (entry.boundingClientRect.top > 0 && entry.target !== slides[0]) entry.target.classList.remove('is-active');
      });
    }, { threshold: .08, rootMargin:'8% 0px -5% 0px' });
    slides.forEach(slide => observer.observe(slide));
  }

  function initCursorMotion() {
    if (reduceMotion || !window.matchMedia?.('(pointer:fine)').matches) return;
    const root = document.documentElement;
    const visual = $('#heroVisual');
    let tx = window.innerWidth * .72, ty = window.innerHeight * .26, x = tx, y = ty;
    let frame = 0;
    const draw = () => {
      x += (tx - x) * .11;
      y += (ty - y) * .11;
      root.style.setProperty('--cursor-x', `${x}px`);
      root.style.setProperty('--cursor-y', `${y}px`);
      if (visual) {
        const nx = x / Math.max(window.innerWidth,1) - .5;
        const ny = y / Math.max(window.innerHeight,1) - .5;
        visual.style.setProperty('--mx', `${nx * 14}px`);
        visual.style.setProperty('--my', `${ny * 10}px`);
        visual.style.setProperty('--rx', `${ny * -1.7}deg`);
        visual.style.setProperty('--ry', `${nx * 2.2}deg`);
      }
      frame = requestAnimationFrame(draw);
    };
    window.addEventListener('pointermove', event => { tx = event.clientX; ty = event.clientY; }, { passive:true });
    frame = requestAnimationFrame(draw);
    window.addEventListener('pagehide', () => cancelAnimationFrame(frame), { once:true });
  }

  function initMobileNav() {
    const toggle = $('.menu-toggle');
    const nav = $('#mobileNav');
    if (!toggle || !nav) return;
    const close = () => { nav.classList.remove('open'); nav.setAttribute('aria-hidden','true'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => { nav.classList.add('open'); nav.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); });
    $('.mobile-close', nav)?.addEventListener('click', close);
    $$('a', nav).forEach(link => link.addEventListener('click', close));
  }

  $('#langToggle')?.addEventListener('click', () => setLanguage(language === 'id' ? 'en' : 'id'));
  $('#themeToggle')?.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  $('[data-mobile-lang]')?.addEventListener('click', () => setLanguage(language === 'id' ? 'en' : 'id'));
  $('[data-mobile-theme]')?.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  $('#galleryPrev')?.addEventListener('click', () => goGallery(galleryIndex - 1, true));
  $('#galleryNext')?.addEventListener('click', () => goGallery(galleryIndex + 1, true));
  $('#gallerySlider')?.addEventListener('mouseenter', () => { if (galleryTimer) clearInterval(galleryTimer); });
  $('#gallerySlider')?.addEventListener('mouseleave', startGalleryAutoplay);

  window.addEventListener('storage', event => {
    if (event.key === CONTENT_KEY) location.reload();
    if (event.key === LANG_KEY && event.newValue) { language = event.newValue; applyLanguage(); }
    if (event.key === THEME_KEY && event.newValue) { theme = event.newValue; applyTheme(); }
  });

  const safeRun = (name, task) => {
    try { return task(); }
    catch (error) { console.error(`[STAIRS] ${name} failed`, error); return null; }
  };

  safeRun('settings', applySettings);
  safeRun('theme', applyTheme);
  safeRun('language', applyLanguage);
  safeRun('slide motion', initSlideMotion);
  safeRun('cursor motion', initCursorMotion);
  safeRun('mobile navigation', initMobileNav);
  safeRun('gallery autoplay', startGalleryAutoplay);
})();
