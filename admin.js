(() => {
  'use strict';

  const KEY = 'stairsDemoContentV3';
  const SESSION_KEY = 'stairsDemoAdminSessionV3';
  const ADMIN_LANG_KEY = 'stairsAdminLanguage';
  const ADMIN_THEME_KEY = 'stairsAdminTheme';

  const settingsDefault = {
    heroTitleId:'Saatnya<br><span>step out</span> dari yang biasa.', heroTitleEn:'A place to<br><span>step out</span> of ordinary.',
    heroSubtitleId:'Global-inspired food, cocktails, late night, dan ruang yang terasa berbeda di setiap langkah.', heroSubtitleEn:'Global-inspired food, cocktails, late nights, and a space built to be experienced one step at a time.',
    openingHoursShort:'11.00 — 01.00', openingHoursId:'Senin–Jumat 11.00 — 01.00 · Sabtu–Minggu 11.00 — 02.00', openingHoursEn:'Mon–Fri 11.00 — 01.00 · Sat–Sun 11.00 — 02.00',
    location:'Jl. Prawirotaman, Brontokusuman, Mergangsan, Yogyakarta 55153', phone:'+62 852-1565-5565',
    mapsUrl:'https://www.google.com/maps/place/STAIRS+by+Seken+Living/@-7.8191966,110.3696288,21z/data=!4m6!3m5!1s0x2e7a57835710d665:0x88af7340ff73c90b!8m2!3d-7.8191034!4d110.3695626!16s%2Fg%2F11v3h5kb1l?entry=ttu',
    instagramUrl:'https://www.instagram.com/stairsprawirotaman/', reservationUrl:'https://linktr.ee/stairsprawirotaman', defaultLanguage:'id', defaultTheme:'dark'
  };

  const menuDefault = [
    ["m1","Bananarama","Breakfast","Rp60K","Menu all-day breakfast manis untuk brunch santai.","A sweet all-day breakfast pick for a slow brunch." ],
    ["m2","French Toast","Breakfast","Rp65K","French toast untuk brunch dengan karakter manis dan buttery.","Buttery, sweet French toast made for brunch." ],
    ["m3","Eggs Benedict","Breakfast","Rp95K","Pilihan brunch klasik dari menu STAIRS.","A classic brunch choice from the STAIRS menu." ],
    ["m4","Homemade Croissants, Butter & Jams","Breakfast","Rp40K","Croissant rumahan dengan butter dan selai.","House croissants served with butter and jam." ],
    ["m5","Tuna Mayo Croissant","Breakfast","Rp50K","Croissant gurih dengan tuna mayo.","A savoury croissant filled with tuna mayo." ],
    ["m6","Big Breakfast","Breakfast","Rp85K","Sarapan lengkap untuk porsi yang lebih mengenyangkan.","A fuller breakfast plate for a bigger appetite." ],
    ["m7","Tapioka Fritters","Bites","Rp30K","Camilan ringan berbasis tapioka untuk sharing.","Light tapioca fritters made for sharing." ],
    ["m8","Fried Corn Bakwan","Bites","Rp30K","Bakwan jagung renyah untuk teman nongkrong.","Crispy corn fritters for the table." ],
    ["m9","Fried Banana Fritters","Bites","Rp35K","Pisang goreng sebagai sweet bite.","Fried banana fritters as a sweet bite." ],
    ["m10","BBQ Chili Wings","Bites","Rp50K","Chicken wings dengan sentuhan BBQ dan chili.","Chicken wings with BBQ and chilli notes." ],
    ["m11","Cheese Twist","Bites","Rp45K","Snack keju renyah yang cocok untuk sharing.","A crisp, cheesy snack built for sharing." ],
    ["m12","Cromboloni","Bites","—","Pastry crunchy dengan filling, disebut dalam liputan pengunjung.","A crunchy filled pastry mentioned in visitor coverage." ],
    ["m13","Barbeque Chicken Pizza","Pizza","Rp90K","Pizza chicken dengan karakter barbeque.","Chicken pizza with a barbecue profile." ],
    ["m14","Mushroom Pizza","Pizza","Rp85K","Pizza mushroom untuk sharing.","A mushroom pizza made for sharing." ],
    ["m15","Margherita Pizza","Pizza","Rp85K","Pizza klasik dengan profil rasa sederhana.","A simple, classic Margherita-style pizza." ],
    ["m16","Smoked Beef Pizza","Pizza","—","Smoked beef pizza yang disebut dalam liputan kuliner STAIRS.","Smoked beef pizza mentioned in STAIRS dining coverage." ],
    ["m17","STAIRS Chicken Salad","Salads","Rp65K","Salad chicken dari pilihan greens STAIRS.","Chicken salad from the STAIRS greens selection." ],
    ["m18","Thai Beef Salad","Salads","Rp85K","Salad beef dengan profil rasa Thai.","A beef salad with Thai-inspired flavours." ],
    ["m19","Caesar Salad","Salads","Rp55K","Caesar salad klasik.","A classic Caesar salad." ],
    ["m20","Grilled Salmon Add-on","Salads","Rp30K","Tambahan grilled salmon untuk salad.","Grilled salmon add-on for salads." ],
    ["m21","Grilled Chicken Add-on","Salads","Rp10K","Tambahan grilled chicken untuk salad.","Grilled chicken add-on for salads." ],
    ["m22","Wild Mushroom Soup","Comfort","Rp60K","Sup jamur hangat dari kategori comfort food.","A warm mushroom soup from the comfort-food selection." ],
    ["m23","Singaporean Laksa","Comfort","Rp85K","Laksa bergaya Singapura.","Singapore-style laksa." ],
    ["m24","Hungarian Beef Goulash","Comfort","Rp85K","Beef goulash untuk pilihan comfort food yang lebih hearty.","A hearty beef goulash comfort dish." ],
    ["m25","Prawn Tom Yum Goong","Comfort","Rp70K","Tom yum udang dengan karakter asam-pedas.","Prawn tom yum with a bright hot-and-sour profile." ],
    ["m26","Linguini Pescatore","Pasta","Rp125K","Linguini seafood dari lini pasta STAIRS.","Seafood linguini from the STAIRS pasta selection." ],
    ["m27","Risotto con Pollo ai Funghi Porcini","Pasta","Rp85K","Risotto chicken dan porcini.","Chicken and porcini risotto." ],
    ["m28","Spaghetti Sambal Matah","Pasta","Rp85K","Spaghetti dengan twist sambal matah.","Spaghetti finished with an Indonesian sambal matah twist." ],
    ["m29","Fusilli con Pollo Affumicato","Pasta","Rp85K","Fusilli dengan smoked chicken.","Fusilli paired with smoked chicken." ],
    ["m30","Gnocchi alla Ragu","Pasta","Rp85K","Gnocchi dengan ragù.","Gnocchi served with ragù." ],
    ["m31","Beef Lasagna","Pasta","Rp70K","Lasagna beef dari pilihan pasta.","Beef lasagna from the pasta selection." ],
    ["m32","Crispy Skin Salmon","Mains","Rp151K","Salah satu signature main yang disebut dalam liputan terbaru.","One of the signature mains highlighted in recent coverage." ],
    ["m33","Iga Bakar Bumbu Bali","Mains","Rp173K","Iga bakar dengan bumbu Bali.","Grilled ribs with Balinese seasoning." ],
    ["m34","Wagyu Beef Burger","Mains","Rp135K","Burger wagyu untuk pilihan main yang lebih hearty.","A hearty wagyu beef burger main." ],
    ["m35","Scaloppine Chicken Stairs","Mains","Rp85K","Chicken dish signature STAIRS.","A STAIRS signature chicken main." ],
    ["m36","Fish & Chips Chicken","Mains","—","Menu fish & chips/chicken yang muncul dalam liputan Prawirotaman.","A fish & chips/chicken item mentioned in Prawirotaman coverage." ],
    ["m37","Espresso","Coffee","Rp25K","Espresso klasik.","Classic espresso." ],
    ["m38","Cappuccino","Coffee","Rp25K","Espresso dan milk foam.","Espresso with steamed milk and foam." ],
    ["m39","Flat White","Coffee","Rp25K","Kopi susu dengan tekstur halus.","Smooth espresso with textured milk." ],
    ["m40","Cafe Latte","Coffee","Rp25K","Latte klasik.","Classic café latte." ],
    ["m41","Long Black","Coffee","Rp25K","Kopi hitam berbasis espresso.","Espresso-based black coffee." ],
    ["m42","Macchiato","Coffee","Rp25K","Espresso dengan sedikit milk foam.","Espresso marked with a touch of milk foam." ],
    ["m43","Americano","Coffee","Rp30K","Americano klasik.","Classic Americano." ],
    ["m44","Brown Iced Coffee","Coffee","Rp30K","Iced coffee dari daftar minuman STAIRS.","An iced coffee from the STAIRS drinks list." ],
    ["m45","Affogato","Coffee","Rp25K","Espresso dengan es krim.","Espresso served over ice cream." ],
    ["m46","Hazelnut Iced Coffee","Coffee","Rp30K","Iced coffee dengan rasa hazelnut.","Iced coffee with hazelnut flavour." ],
    ["m47","Vanilla Iced Coffee","Coffee","Rp30K","Iced coffee dengan rasa vanilla.","Iced coffee with vanilla flavour." ],
    ["m48","Baileys Iced Coffee","Coffee","Rp30K","Iced coffee varian Baileys yang tercantum di referensi menu publik.","Baileys-flavoured iced coffee listed in public menu references." ],
    ["m49","Es Kopi Susu Rumahan","Coffee","Rp30K","Es kopi susu rumahan.","House-style iced milk coffee." ],
    ["m50","Classic Iced Tea","Tea","Rp20K","Es teh klasik.","Classic iced tea." ],
    ["m51","Iced Lemon Tea","Tea","Rp25K","Es teh lemon yang segar.","Refreshing iced lemon tea." ],
    ["m52","Peach Iced Tea","Tea","Rp25K","Es teh peach.","Peach-flavoured iced tea." ],
    ["m53","Green Mist","Fermented","Rp40K","Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.","One of the fermented/health drinks listed in public menu references." ],
    ["m54","Bee Brave","Fermented","Rp40K","Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.","One of the fermented/health drinks listed in public menu references." ],
    ["m55","Joy Peach","Fermented","Rp40K","Salah satu minuman fermentasi/sehat yang tercantum di referensi menu publik.","One of the fermented/health drinks listed in public menu references." ],
    ["m56","Matcha Pistachio","Non Coffee","—","Minuman yang disebut populer di ringkasan ulasan publik.","A drink highlighted as popular in public review summaries." ],
    ["m57","Fresh Juice Selection","Non Coffee","—","Aneka jus segar yang muncul di liputan pengunjung.","Fresh juice selections seen in visitor coverage." ],
    ["m58","Signature Cocktail Selection","Cocktails","—","Pilihan cocktail menjadi bagian dari identitas late-night STAIRS.","A cocktail selection forms part of STAIRS’ late-night identity." ]
  ].map(([id,name,category,price,descriptionId,descriptionEn]) => ({id,name,category,price,descriptionId,descriptionEn}));

  const galleryDefault = [
    {id:'g1',type:'image',url:'https://images.openai.com/static-rsc-1/piIb15jPn6sxW8-xwRyY5Vgk8txhAlO85H6vnZmSvVb-TQpEbg-QkHJ_tpcd9EeAXX4YDYo14FQHkjYK2W2cpLtEPPhU3CAh6C7yAsVnVI5oumAXF7Fro8CUxDcfgwSmxKDvWXdcYhQYbLJIuScsniIen62N3N2V_VNhnQoGv7o',titleId:'Suasana STAIRS',titleEn:'STAIRS Atmosphere',captionId:'Foto pengunjung dari listing Google Maps STAIRS, dipakai sebagai referensi visual untuk demo website.',captionEn:'A visitor photo from the STAIRS Google Maps listing, used as a visual reference for this website demo.',source:'Google Maps visitor photo · public listing'},
    {id:'g2',type:'image',url:'https://image.idntimes.com/post/20240506/img-5011-15fe9b9bfabc636515b6203565331b9a-ffeb8ae543a355cb2c7b2fa28ae5fdaf.jpeg',titleId:'Table Culture',titleEn:'Table Culture',captionId:'Suasana makan bersama yang dipublikasikan dalam liputan Prawirotaman dan dikreditkan ke Instagram STAIRS.',captionEn:'A communal dining moment published in Prawirotaman coverage and attributed to STAIRS’ Instagram.',source:'Instagram @stairsprawirotaman via IDN Times'},
    {id:'g3',type:'image',url:'https://images.openai.com/static-rsc-1/pf528FKMFyJCk9Cl7g0x-yiug-ekxjYYQ6D8-FOMgOGofUZErhROmUQgOpSSSl14sAOXAAEzkSxmKFPej7nqulzXSmYGGkc_FiB9wPvbAlvH3UhUpT-ZX6qCDdf1WLEKyxpSQFUGmHMLvNbPq6LIduP1_1JjnxuZSdv6dpUDwhc',titleId:'Night Mood',titleEn:'Night Mood',captionId:'Referensi suasana dan hospitality dari foto pengunjung pada listing Google Maps STAIRS.',captionEn:'Atmosphere and hospitality reference from a visitor photo on the STAIRS Google Maps listing.',source:'Google Maps visitor photo · public listing'},
    {id:'g4',type:'image',url:'https://images.openai.com/static-rsc-1/Zi3vB8EmI9hA9KdQXqCWLdXxMkPkFSlRBDZI2vgOrirzjyGiJ9mTFqOz2we4yPhsqpjSSKkf4AevElkQZFzsGzSZGSCvqdrq8Jm0VRNoNbzwdT4JsiMA65u26mC3GNMbYTu4kQY-LYA5hSBOXqdkcxH6U689naRLn7dQjyjf4vE',titleId:'Food & Drinks',titleEn:'Food & Drinks',captionId:'Referensi sajian dari foto pengunjung yang tampil pada listing Google Maps STAIRS.',captionEn:'A food-and-drink reference from a visitor photo shown on the STAIRS Google Maps listing.',source:'Google Maps visitor photo · public listing'}
  ];

  const reviewsDefault = [
    {id:'r1',name:'Google visitor',textId:'Tempatnya nyaman dengan banyak pilihan seating. Suasananya jadi nilai paling kuat.',textEn:'A comfortable place with plenty of seating options, with atmosphere as a clear highlight.',rating:5},
    {id:'r2',name:'Google visitor',textId:'Pelayanan, makanan, dan tempatnya terasa cocok untuk dinner dan chill.',textEn:'Service, food and the overall place work especially well for dinner and a relaxed night out.',rating:5},
    {id:'r3',name:'Public review summary',textId:'Pizza, beef, coffee, dekorasi dan ambience sering muncul sebagai hal yang disukai pengunjung.',textEn:'Pizza, beef, coffee, décor and atmosphere are frequently mentioned positively by visitors.',rating:5}
  ];

  const defaults = { settings:settingsDefault, menu:menuDefault, gallery:galleryDefault, reviews:reviewsDefault };
  const clone = value => typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
  const $ = (selector, context=document) => context.querySelector(selector);
  const $$ = (selector, context=document) => [...context.querySelectorAll(selector)];
  const esc = (value='') => String(value).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      const saved = raw ? JSON.parse(raw) : null;
      if (!saved) return clone(defaults);
      return {
        settings:{...defaults.settings,...(saved.settings||{})},
        menu:Array.isArray(saved.menu)?saved.menu:clone(defaults.menu),
        gallery:Array.isArray(saved.gallery)?saved.gallery:clone(defaults.gallery),
        reviews:Array.isArray(saved.reviews)?saved.reviews:clone(defaults.reviews)
      };
    } catch { return clone(defaults); }
  }

  let data = load();
  let editing = {type:null,id:null};
  let adminLanguage = localStorage.getItem(ADMIN_LANG_KEY) || 'id';
  let adminTheme = localStorage.getItem(ADMIN_THEME_KEY) || 'dark';

  const adminText = {
    id:{overview:'Overview',menu:'Menu',gallery:'Galeri',reviews:'Ulasan',settings:'Pengaturan',viewWebsite:'Lihat website ↗',logout:'Keluar demo',dashboardTitle:'Ringkasan konten.',dashboardIntro:'Semua perubahan demo tersimpan di browser ini dan langsung dibaca website.',openSite:'Buka website ↗',editableContent:'konten dapat diedit',visualRefs:'referensi visual',curatedNotes:'catatan terpilih',featureStatus:'Status fitur',featureLanguage:'Bahasa Indonesia / English',featureTheme:'Dark / Light mode',featureSlides:'Animasi section & gallery slide pada website',featureResponsive:'Tampilan responsive untuk HP',featureAdminStatic:'Dashboard tanpa animasi',sourcePolicy:'Referensi foto & menu',sourceText:'Untuk demo, visual memakai foto publik yang terindeks dan terkait dengan STAIRS/Instagram. Sebelum produksi resmi, ganti dengan aset milik STAIRS atau aset yang sudah diizinkan.',menuManagement:'Kelola menu',menuDesc:'Tambah, edit, atau hapus menu bilingual.',addMenu:'+ Tambah menu',galleryManagement:'Galeri',galleryDesc:'Kelola foto/video, judul bilingual, caption, dan sumber aset.',addMedia:'+ Tambah media',reviewManagement:'Catatan ulasan',reviewDesc:'Review demo disimpan manual. Google Reviews realtime memerlukan API.',addReview:'+ Tambah ulasan',siteSettings:'Pengaturan website',settingsDesc:'Kontrol informasi utama dan default bahasa/theme website.',saveChanges:'Simpan perubahan'},
    en:{overview:'Overview',menu:'Menu',gallery:'Gallery',reviews:'Reviews',settings:'Settings',viewWebsite:'View website ↗',logout:'Exit demo',dashboardTitle:'Content at a glance.',dashboardIntro:'All demo changes are stored in this browser and read directly by the website.',openSite:'Open website ↗',editableContent:'editable content',visualRefs:'visual references',curatedNotes:'curated notes',featureStatus:'Feature status',featureLanguage:'Indonesian / English language',featureTheme:'Dark / Light mode',featureSlides:'Animated website sections & gallery slides',featureResponsive:'Responsive mobile layout',featureAdminStatic:'Dashboard without animation',sourcePolicy:'Photo & menu references',sourceText:'For the demo, visuals use publicly indexed photos associated with STAIRS/Instagram. Before official production, replace them with STAIRS-owned or licensed assets.',menuManagement:'Menu management',menuDesc:'Add, edit or remove bilingual menu items.',addMenu:'+ Add menu',galleryManagement:'Gallery',galleryDesc:'Manage photo/video URLs, bilingual titles, captions and asset sources.',addMedia:'+ Add media',reviewManagement:'Review notes',reviewDesc:'Demo reviews are stored manually. Realtime Google Reviews require an API.',addReview:'+ Add review',siteSettings:'Site settings',settingsDesc:'Control main information and website default language/theme.',saveChanges:'Save changes'}
  };

  function applyAdminLanguage() {
    document.documentElement.lang = adminLanguage;
    $$('[data-admin-i18n]').forEach(el => { el.textContent = adminText[adminLanguage][el.dataset.adminI18n] || el.textContent; });
    $('#adminLangToggle').textContent = adminLanguage === 'id' ? 'ID / EN' : 'EN / ID';
    const active = $('#sideNav .nav-item.active')?.dataset.view || 'overview';
    setViewTitle(active);
  }

  function applyAdminTheme() {
    document.documentElement.dataset.adminTheme = adminTheme;
    $('#adminThemeToggle').textContent = adminTheme === 'dark' ? 'Dark / Light' : 'Light / Dark';
  }

  function save(message='Website content updated.') {
    localStorage.setItem(KEY, JSON.stringify(data));
    renderAll();
    showToast('Saved', message);
  }

  let toastTimer = null;
  function showToast(title, message) {
    const toast = $('#toast');
    if (!toast) return;
    $('b',toast).textContent = title;
    $('small',toast).textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function renderAll() {
    $('#menuCount').textContent = data.menu.length;
    $('#galleryCount').textContent = data.gallery.length;
    $('#reviewCount').textContent = data.reviews.length;
    renderMenu(); renderGallery(); renderReviews(); renderSettings();
  }

  function setViewTitle(view) {
    const mapping = {overview:'overview',menu:'menu',gallery:'gallery',reviews:'reviews',settings:'settings'};
    $('#viewTitle').textContent = adminText[adminLanguage][mapping[view]] || view;
  }

  function switchView(view) {
    $$('#sideNav .nav-item').forEach(button => button.classList.toggle('active',button.dataset.view===view));
    $$('[data-view-panel]').forEach(panel => panel.classList.toggle('active',panel.dataset.viewPanel===view));
    setViewTitle(view);
    document.body.classList.remove('side-open');
  }

  function openDashboard() {
    $('#loginScreen').hidden = true;
    $('#dashboard').hidden = false;
    renderAll();
    applyAdminLanguage();
    applyAdminTheme();
  }

  function closeDashboard() {
    sessionStorage.removeItem(SESSION_KEY);
    $('#dashboard').hidden = true;
    $('#loginScreen').hidden = false;
    $('#demoPassword').value = '';
  }

  $('#loginForm')?.addEventListener('submit',event => {
    event.preventDefault();
    if ($('#demoPassword').value.trim() === 'stairs') {
      sessionStorage.setItem(SESSION_KEY,'1');
      $('#loginMessage').textContent='';
      openDashboard();
    } else $('#loginMessage').textContent = adminLanguage === 'id' ? 'Password belum tepat.' : 'Incorrect password.';
  });
  $('#logoutBtn')?.addEventListener('click',closeDashboard);
  $$('#sideNav .nav-item').forEach(button => button.addEventListener('click',()=>switchView(button.dataset.view)));
  $('#mobileSideToggle')?.addEventListener('click',()=>document.body.classList.toggle('side-open'));
  $('#refreshPreview')?.addEventListener('click',()=>{data=load();renderAll();showToast('Refreshed','Latest browser content loaded.');});
  $('#adminLangToggle')?.addEventListener('click',()=>{adminLanguage=adminLanguage==='id'?'en':'id';localStorage.setItem(ADMIN_LANG_KEY,adminLanguage);applyAdminLanguage();});
  $('#adminThemeToggle')?.addEventListener('click',()=>{adminTheme=adminTheme==='dark'?'light':'dark';localStorage.setItem(ADMIN_THEME_KEY,adminTheme);applyAdminTheme();});

  function renderMenu() {
    const table=$('#menuTable'); if(!table)return;
    table.innerHTML=data.menu.map(item=>`<tr><td><strong>${esc(item.name)}</strong></td><td><span class="tag">${esc(item.category)}</span></td><td>${esc(item.price)}</td><td class="muted-cell">${esc(item.descriptionId||'')}</td><td class="muted-cell">${esc(item.descriptionEn||'')}</td><td><div class="row-actions"><button type="button" data-edit-menu="${esc(item.id)}">Edit</button><button type="button" class="danger" data-del-menu="${esc(item.id)}">Delete</button></div></td></tr>`).join('')||'<tr><td colspan="6" class="empty-row">No menu items yet.</td></tr>';
    $$('[data-edit-menu]',table).forEach(button=>button.addEventListener('click',()=>openEditor('menu',button.dataset.editMenu)));
    $$('[data-del-menu]',table).forEach(button=>button.addEventListener('click',()=>removeItem('menu',button.dataset.delMenu)));
  }

  function renderGallery() {
    const wrap=$('#adminGallery'); if(!wrap)return;
    wrap.innerHTML=data.gallery.map(item=>`<article class="media-admin-card"><div class="media-thumb">${item.type==='video'?`<video src="${esc(item.url)}" muted playsinline preload="metadata"></video><span>VIDEO</span>`:`<img src="${esc(item.url)}" alt="${esc(item.titleId||'STAIRS')}" referrerpolicy="no-referrer">`}</div><div class="media-admin-copy"><b>${esc(item.titleId||item.titleEn||'Untitled')}</b><small>${esc(item.source||'No source label')}</small><small>${esc(item.captionId||'')}</small><div class="row-actions"><button type="button" data-edit-gallery="${esc(item.id)}">Edit</button><button type="button" class="danger" data-del-gallery="${esc(item.id)}">Delete</button></div></div></article>`).join('')||'<p class="empty-row">No media yet.</p>';
    $$('[data-edit-gallery]',wrap).forEach(button=>button.addEventListener('click',()=>openEditor('gallery',button.dataset.editGallery)));
    $$('[data-del-gallery]',wrap).forEach(button=>button.addEventListener('click',()=>removeItem('gallery',button.dataset.delGallery)));
  }

  function renderReviews() {
    const wrap=$('#adminReviewList'); if(!wrap)return;
    wrap.innerHTML=data.reviews.map(item=>`<article class="review-admin-card"><div><span class="stars-mini">${'★'.repeat(Math.max(1,Math.min(5,Number(item.rating)||5)))}</span><p>“${esc(item.textId||'')}”</p><p class="muted-cell">“${esc(item.textEn||'')}”</p><small>${esc(item.name)}</small></div><div class="row-actions"><button type="button" data-edit-review="${esc(item.id)}">Edit</button><button type="button" class="danger" data-del-review="${esc(item.id)}">Delete</button></div></article>`).join('')||'<p class="empty-row">No reviews yet.</p>';
    $$('[data-edit-review]',wrap).forEach(button=>button.addEventListener('click',()=>openEditor('reviews',button.dataset.editReview)));
    $$('[data-del-review]',wrap).forEach(button=>button.addEventListener('click',()=>removeItem('reviews',button.dataset.delReview)));
  }

  function renderSettings() {
    const form=$('#settingsForm'); if(!form)return;
    Object.entries(data.settings).forEach(([key,value])=>{if(form.elements[key])form.elements[key].value=value||'';});
  }

  $('#saveSettingsBtn')?.addEventListener('click',()=>{
    const form=$('#settingsForm'); if(!form)return;
    const fd=new FormData(form); for(const [key,value] of fd.entries()) data.settings[key]=String(value).trim();
    save();
  });

  function removeItem(type,id) {
    if(!confirm(adminLanguage==='id'?'Hapus item ini dari demo?':'Delete this item from the demo?'))return;
    data[type]=data[type].filter(item=>item.id!==id); save();
  }

  $('#addMenuBtn')?.addEventListener('click',()=>openEditor('menu'));
  $('#addGalleryBtn')?.addEventListener('click',()=>openEditor('gallery'));
  $('#addReviewBtn')?.addEventListener('click',()=>openEditor('reviews'));

  function field(name,label,value='',type='text',full=false,min='',max='') {
    const control=type==='textarea'?`<textarea name="${name}" rows="4" required>${esc(value)}</textarea>`:`<input name="${name}" type="${type}" value="${esc(value)}" ${min?`min="${min}"`:''} ${max?`max="${max}"`:''} required>`;
    return `<label class="${full?'full':''}"><span>${label}</span>${control}</label>`;
  }
  function selectField(name,label,value,options) { return `<label><span>${label}</span><select name="${name}">${options.map(option=>`<option value="${esc(option)}" ${option===value?'selected':''}>${esc(option)}</option>`).join('')}</select></label>`; }

  function fieldsFor(type,item={}) {
    if(type==='menu') return [field('name','Item name',item.name),selectField('category','Category',item.category||'Breakfast',['Breakfast','Bites','Pizza','Salads','Comfort','Pasta','Mains','Coffee','Tea','Fermented','Non Coffee','Cocktails']),field('price','Price',item.price),field('descriptionId','Description ID',item.descriptionId,'textarea',true),field('descriptionEn','Description EN',item.descriptionEn,'textarea',true)];
    if(type==='gallery') return [selectField('type','Media type',item.type||'image',['image','video']),field('url','Media URL',item.url,'url',true),field('titleId','Title ID',item.titleId),field('titleEn','Title EN',item.titleEn),field('captionId','Caption ID',item.captionId,'textarea',true),field('captionEn','Caption EN',item.captionEn,'textarea',true),field('source','Source / credit',item.source,'text',true)];
    return [field('name','Display name',item.name),field('rating','Rating 1–5',item.rating||5,'number',false,'1','5'),field('textId','Review ID',item.textId,'textarea',true),field('textEn','Review EN',item.textEn,'textarea',true)];
  }

  function openEditor(type,id=null) {
    editing={type,id}; const item=id?data[type].find(entry=>entry.id===id)||{}:{};
    $('#dialogTitle').textContent=`${id?'Edit':'Add'} ${type==='reviews'?'review':type}`;
    $('#dialogFields').innerHTML=fieldsFor(type,item).join('');
    const dialog=$('#editorDialog'); if(typeof dialog.showModal==='function')dialog.showModal(); else dialog.setAttribute('open','');
  }
  function closeEditor(){const dialog=$('#editorDialog'); if(typeof dialog.close==='function')dialog.close(); else dialog.removeAttribute('open');}
  $('#dialogCancel')?.addEventListener('click',closeEditor);
  $('.dialog-close')?.addEventListener('click',event=>{event.preventDefault();closeEditor();});
  $('#editorForm')?.addEventListener('submit',event=>{
    event.preventDefault(); const object=Object.fromEntries(new FormData(event.currentTarget).entries());
    if(editing.type==='reviews')object.rating=Math.max(1,Math.min(5,Number(object.rating)||5));
    if(editing.id){object.id=editing.id;data[editing.type]=data[editing.type].map(item=>item.id===editing.id?object:item);} else {object.id=`${editing.type[0]}${Date.now()}`;data[editing.type].push(object);}
    closeEditor(); save();
  });

  applyAdminTheme(); applyAdminLanguage();
  if(sessionStorage.getItem(SESSION_KEY)==='1')openDashboard();
})();
