(() => {
  'use strict';

  const KEY = 'stairsDemoContentV4';
  const SESSION_KEY = 'stairsDemoAdminSessionV4';
  const ADMIN_LANG_KEY = 'stairsAdminLanguage';
  const ADMIN_THEME_KEY = 'stairsAdminTheme';

  const settingsDefault = {
    heroTitleId:'FOOD.<br><span>COCKTAILS.</span><br>LATE NIGHTS.', heroTitleEn:'FOOD.<br><span>COCKTAILS.</span><br>LATE NIGHTS.',
    heroSubtitleId:'Global-inspired food, cocktails, guest bars, musik, dan energi malam Prawirotaman dalam satu tempat.', heroSubtitleEn:'Global-inspired food, cocktails, guest bars, music and Prawirotaman late-night energy in one place.',
    openingHoursShort:'11.00 — 01.00', openingHoursId:'Buka setiap hari 11.00 — 01.00 · akhir pekan sampai 02.00', openingHoursEn:'Open daily 11.00 — 01.00 · weekends until 02.00',
    location:'Jl. Prawirotaman, Brontokusuman, Mergangsan, Yogyakarta 55153', phone:'+62 852-1565-5565',
    mapsUrl:'https://www.google.com/maps/place/STAIRS+by+Seken+Living/@-7.8191966,110.3696288,21z/data=!4m6!3m5!1s0x2e7a57835710d665:0x88af7340ff73c90b!8m2!3d-7.8191034!4d110.3695626!16s%2Fg%2F11v3h5kb1l?entry=ttu',
    instagramUrl:'https://www.instagram.com/stairsprawirotaman/', reservationUrl:'https://linktr.ee/stairsprawirotaman',
    linktreeUrl:'https://linktr.ee/stairsprawirotaman', workFromStairsUrl:'https://linktr.ee/stairsprawirotaman', allRedPromoUrl:'https://linktr.ee/stairsprawirotaman',
    gofoodUrl:'https://linktr.ee/stairsprawirotaman', grabfoodUrl:'https://dineout.grab.com/id/en/restaurants/stairs-prawirotaman--6-C6E3ABMDR8ATJE',
    foodMenuUrl:'https://linktr.ee/stairsprawirotaman', barMenuUrl:'https://linktr.ee/stairsprawirotaman', tableBookingUrl:'https://linktr.ee/stairsprawirotaman',
    venueReservationUrl:'https://linktr.ee/stairsprawirotaman', tiktokUrl:'https://www.tiktok.com/@stairsprawirotaman', displayFont:'Bricolage Grotesque', bodyFont:'Manrope', accentColor:'#ef2d27', secondaryColor:'#2118a8', defaultLanguage:'id', defaultTheme:'dark'
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


  const MENU_IMAGE_FALLBACKS = {
    m3:'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=78',
    m10:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=78',
    m13:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=78',
    m18:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=78',
    m28:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=78',
    m32:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=78',
    m34:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=78',
    m44:'assets/ig-cocktail.png'
  };
  const CATEGORY_IMAGE_FALLBACKS = {
    Breakfast:'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=78',
    Bites:'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=78',
    Pizza:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=78',
    Salads:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=78',
    Comfort:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=78',
    Pasta:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=78',
    Mains:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=78',
    Coffee:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=78',
    Tea:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=78',
    Fermented:'assets/ig-cocktail.png','Non Coffee':'assets/ig-cocktail.png',Cocktails:'assets/ig-cocktail.png'
  };
  const getMenuImage = item => item.image || MENU_IMAGE_FALLBACKS[item.id] || CATEGORY_IMAGE_FALLBACKS[item.category] || 'assets/ig-cocktail.png';
  const FONT_STACKS = {
    'Bricolage Grotesque':"'Bricolage Grotesque',system-ui,sans-serif",'Manrope':"'Manrope',system-ui,sans-serif",'Space Grotesk':"'Space Grotesk',system-ui,sans-serif",'Plus Jakarta Sans':"'Plus Jakarta Sans',system-ui,sans-serif",'DM Sans':"'DM Sans',system-ui,sans-serif",'Sora':"'Sora',system-ui,sans-serif",'Outfit':"'Outfit',system-ui,sans-serif",'Syne':"'Syne',system-ui,sans-serif"
  };

  const galleryDefault = [
    {id:'g1',type:'image',url:'https://image.idntimes.com/post/20240305/2023-10-25-11zon-a9b86914ba33fca85ab078094226c771-befb7adf121bb364245db37c100f80c3.jpg',titleId:'Suasana STAIRS',titleEn:'STAIRS Atmosphere',captionId:'Foto pengunjung dari listing Google Maps STAIRS, dipakai sebagai referensi visual untuk demo website.',captionEn:'A visitor photo from the STAIRS Google Maps listing, used as a visual reference for this website demo.',source:'Google Maps / im maya · via IDN Times'},
    {id:'g2',type:'image',url:'https://image.idntimes.com/post/20240506/img-5011-15fe9b9bfabc636515b6203565331b9a-ffeb8ae543a355cb2c7b2fa28ae5fdaf.jpeg',titleId:'Table Culture',titleEn:'Table Culture',captionId:'Suasana makan bersama yang dipublikasikan dalam liputan Prawirotaman dan dikreditkan ke Instagram STAIRS.',captionEn:'A communal dining moment published in Prawirotaman coverage and attributed to STAIRS’ Instagram.',source:'Instagram @stairsprawirotaman via IDN Times'},
    {id:'g3',type:'image',url:'assets/ig-night-crowd.png',titleId:'Late Night Energy',titleEn:'Late Night Energy',captionId:'Potongan feed Instagram yang kamu kirim, menampilkan energi malam STAIRS.',captionEn:'A crop from the Instagram feed you supplied, showing STAIRS late-night energy.',source:'Instagram @stairsprawirotaman · supplied feed reference'},
    {id:'g4',type:'image',url:'assets/ig-cocktail.png',titleId:'Cocktail Culture',titleEn:'Cocktail Culture',captionId:'Visual cocktail dari feed Instagram yang kamu kirim untuk menguatkan karakter bar.',captionEn:'A cocktail visual from the supplied Instagram feed to reinforce the bar identity.',source:'Instagram @stairsprawirotaman · supplied feed reference'}
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

  function getInstagramInfo(value='') {
    if(!value) return null;
    try {
      const url=new URL(String(value).trim(),window.location.href);
      const host=url.hostname.toLowerCase().replace(/^www\./,'').replace(/^m\./,'');
      if(!['instagram.com','instagr.am'].includes(host)) return null;
      const segments=url.pathname.split('/').filter(Boolean);
      const mediaIndex=['p','reel','reels','tv'].includes((segments[0]||'').toLowerCase())?0:-1;
      if(mediaIndex===0 && segments[1]) {
        const rawKind=segments[mediaIndex].toLowerCase();
        const kind=rawKind==='reels'?'reel':rawKind;
        const shortcode=segments[mediaIndex+1].replace(/[^A-Za-z0-9_-]/g,'');
        if(shortcode) return {isInstagram:true,isCanonical:true,canonical:`https://www.instagram.com/${kind}/${shortcode}/`,original:url.href};
      }
      if(segments[0]?.toLowerCase()==='share') return {isInstagram:true,isCanonical:false,canonical:'',original:url.href};
      return {isInstagram:true,isCanonical:false,canonical:'',original:url.href};
    } catch { return null; }
  }

  function isInstagramMediaUrl(value='') {
    return Boolean(getInstagramInfo(value)?.isInstagram);
  }

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
    renderMenu(); renderGallery(); renderReviews(); renderSettings(); renderAppearance();
  }

  function setViewTitle(view) {
    const mapping = {overview:'overview',menu:'menu',gallery:'gallery',reviews:'reviews',appearance:'appearance',settings:'settings'};
    $('#viewTitle').textContent = adminText[adminLanguage][mapping[view]] || (view === 'appearance' ? 'Appearance' : view);
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
    table.innerHTML=data.menu.map(item=>`<tr><td><div class="menu-thumb"><img src="${esc(getMenuImage(item))}" alt="${esc(item.name)}" referrerpolicy="no-referrer"></div></td><td><strong>${esc(item.name)}</strong></td><td><span class="tag">${esc(item.category)}</span></td><td>${esc(item.price)}</td><td class="muted-cell">${esc(item.descriptionId||'')}</td><td class="muted-cell">${esc(item.descriptionEn||'')}</td><td><div class="row-actions"><button type="button" data-edit-menu="${esc(item.id)}">Edit</button><button type="button" class="danger" data-del-menu="${esc(item.id)}">Delete</button></div></td></tr>`).join('')||'<tr><td colspan="7" class="empty-row">No menu items yet.</td></tr>';
    $$('img',table).forEach(img=>img.addEventListener('error',()=>{img.hidden=true;img.closest('.menu-thumb')?.classList.add('media-broken');}));
    $$('[data-edit-menu]',table).forEach(button=>button.addEventListener('click',()=>openEditor('menu',button.dataset.editMenu)));
    $$('[data-del-menu]',table).forEach(button=>button.addEventListener('click',()=>removeItem('menu',button.dataset.delMenu)));
  }

  function renderGallery() {
    const wrap=$('#adminGallery'); if(!wrap)return;
    wrap.innerHTML=data.gallery.map(item=>{
      const instagram=isInstagramMediaUrl(item.url);
      const preview=instagram
        ? `<a class="instagram-admin-preview" href="${esc(item.url)}" target="_blank" rel="noreferrer"><span>INSTAGRAM</span><b>REEL / POST</b><small>Open ↗</small></a>`
        : item.type==='video'
          ? `<video src="${esc(item.url)}" muted controls playsinline preload="metadata"></video><span>VIDEO</span>`
          : `<img src="${esc(item.url)}" alt="${esc(item.titleId||'STAIRS')}" referrerpolicy="no-referrer">`;
      return `<article class="media-admin-card"><div class="media-thumb">${preview}</div><div class="media-admin-copy"><b>${esc(item.titleId||item.titleEn||'Untitled')}</b><small>${esc(item.source||'No source label')}</small><small>${esc(item.captionId||'')}</small><div class="row-actions"><button type="button" data-edit-gallery="${esc(item.id)}">Edit</button><button type="button" class="danger" data-del-gallery="${esc(item.id)}">Delete</button></div></div></article>`;
    }).join('')||'<p class="empty-row">No media yet.</p>';
    $$('img',wrap).forEach(img=>img.addEventListener('error',()=>{img.hidden=true;img.closest('.media-thumb')?.classList.add('media-broken');}));
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


  function renderAppearance() {
    const form=$('#appearanceForm'); if(!form)return;
    ['displayFont','bodyFont','accentColor','secondaryColor'].forEach(key=>{if(form.elements[key])form.elements[key].value=data.settings[key]||settingsDefault[key];});
    updateAppearancePreview();
  }
  function updateAppearancePreview() {
    const form=$('#appearanceForm'); const preview=$('#appearancePreview'); if(!form||!preview)return;
    const display=form.elements.displayFont?.value||data.settings.displayFont||'Bricolage Grotesque';
    const body=form.elements.bodyFont?.value||data.settings.bodyFont||'Manrope';
    const accent=form.elements.accentColor?.value||data.settings.accentColor||'#ef2d27';
    const secondary=form.elements.secondaryColor?.value||data.settings.secondaryColor||'#2118a8';
    preview.style.setProperty('--preview-display',FONT_STACKS[display]||FONT_STACKS['Bricolage Grotesque']);
    preview.style.setProperty('--preview-body',FONT_STACKS[body]||FONT_STACKS['Manrope']);
    preview.style.setProperty('--preview-accent',accent); preview.style.setProperty('--preview-secondary',secondary);
  }
  $('#appearanceForm')?.addEventListener('input',updateAppearancePreview);
  $('#saveAppearanceBtn')?.addEventListener('click',()=>{
    const form=$('#appearanceForm'); if(!form)return; const fd=new FormData(form);
    for(const [key,value] of fd.entries()) data.settings[key]=String(value).trim();
    save('Website appearance updated.');
  });

  $('#saveSettingsBtn')?.addEventListener('click',()=>{
    const form=$('#settingsForm'); if(!form)return;
    const fd=new FormData(form); for(const [key,value] of fd.entries()) data.settings[key]=String(value).trim();
    save();
  });

  $('#exportCmsBtn')?.addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a');
    a.href=url; a.download='stairs-cms-content.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),500); showToast('Exported','CMS JSON downloaded.');
  });
  $('#importCmsInput')?.addEventListener('change',async event=>{
    const file=event.target.files?.[0]; if(!file)return;
    try { const parsed=JSON.parse(await file.text()); if(!parsed||!Array.isArray(parsed.menu)||!Array.isArray(parsed.gallery)||!parsed.settings) throw new Error('Invalid CMS file'); data={settings:{...settingsDefault,...parsed.settings},menu:parsed.menu,gallery:parsed.gallery,reviews:Array.isArray(parsed.reviews)?parsed.reviews:[]}; save('CMS JSON imported.'); }
    catch(error){showToast('Import failed','File JSON tidak sesuai format STAIRS CMS.');}
    event.target.value='';
  });
  $('#resetCmsBtn')?.addEventListener('click',()=>{
    if(!confirm(adminLanguage==='id'?'Reset seluruh konten demo ke bawaan?':'Reset all demo content to defaults?'))return; data=clone(defaults); save('Demo content reset.');
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
  function optionalField(name,label,value='',type='text',full=false) { return `<label class="${full?'full':''}"><span>${label}</span><input name="${name}" type="${type}" value="${esc(value||'')}" placeholder="Optional"></label>`; }
  function fileField(name,label,full=true) { return `<label class="${full?'full':''}"><span>${label}</span><input name="${name}" type="file" accept="image/*"><small class="upload-note">Upload akan dikompres untuk demo CMS lokal.</small></label>`; }
  function selectField(name,label,value,options) { return `<label><span>${label}</span><select name="${name}">${options.map(option=>`<option value="${esc(option)}" ${option===value?'selected':''}>${esc(option)}</option>`).join('')}</select></label>`; }

  async function imageFileToDataUrl(file,max=1200,quality=.82) {
    if(!file||!file.type?.startsWith('image/'))return '';
    const img=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=reader.result;};reader.onerror=reject;reader.readAsDataURL(file);});
    const ratio=Math.min(1,max/Math.max(img.width,img.height)); const canvas=document.createElement('canvas'); canvas.width=Math.max(1,Math.round(img.width*ratio)); canvas.height=Math.max(1,Math.round(img.height*ratio)); const ctx=canvas.getContext('2d'); ctx.drawImage(img,0,0,canvas.width,canvas.height); return canvas.toDataURL('image/jpeg',quality);
  }

  function fieldsFor(type,item={}) {
    if(type==='menu') return [optionalField('image','Menu image URL',item.image,'url',true),fileField('imageUpload','Atau upload foto menu',true),field('name','Item name',item.name),selectField('category','Category',item.category||'Breakfast',['Breakfast','Bites','Pizza','Salads','Comfort','Pasta','Mains','Coffee','Tea','Fermented','Non Coffee','Cocktails']),field('price','Price',item.price),field('descriptionId','Description ID',item.descriptionId,'textarea',true),field('descriptionEn','Description EN',item.descriptionEn,'textarea',true)];
    if(type==='gallery') return [selectField('type','Media type',isInstagramMediaUrl(item.url)?'instagram':(item.type||'image'),['image','video','instagram']),optionalField('url','Media URL — gambar, direct video, atau URL Instagram Reel/Post',item.url,'url',true),fileField('mediaUpload','Atau upload foto',true),field('titleId','Title ID',item.titleId),field('titleEn','Title EN',item.titleEn),field('captionId','Caption ID',item.captionId,'textarea',true),field('captionEn','Caption EN',item.captionEn,'textarea',true),field('source','Source / credit',item.source,'text',true)];
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
  $('#editorForm')?.addEventListener('submit',async event=>{
    event.preventDefault(); const fd=new FormData(event.currentTarget); const existing=editing.id?data[editing.type].find(item=>item.id===editing.id)||{}:{}; const object={};
    for(const [key,value] of fd.entries()) if(!(value instanceof File)) object[key]=String(value).trim();
    const imageUpload=fd.get('imageUpload'); const mediaUpload=fd.get('mediaUpload');
    try {
      if(editing.type==='menu') { const uploaded=await imageFileToDataUrl(imageUpload); if(uploaded)object.image=uploaded; else if(!object.image&&existing.image)object.image=existing.image; }
      if(editing.type==='gallery') {
        const uploaded=await imageFileToDataUrl(mediaUpload);
        if(uploaded){ object.url=uploaded; object.type='image'; }
        else {
          if(!object.url&&existing.url)object.url=existing.url;
          const instagramInfo=getInstagramInfo(object.url);
          if(object.type==='instagram' || instagramInfo) {
            if(!instagramInfo) {
              showToast('Instagram URL','Gunakan URL Instagram publik seperti /reel/... atau /p/...');
              return;
            }
            object.type='instagram';
            // Remove tracking parameters from canonical Reel/Post URLs. Share URLs
            // remain intact and are resolved by the Vercel /api/instagram endpoint.
            if(instagramInfo.canonical) object.url=instagramInfo.canonical;
          }
        }
      }
    } catch { showToast('Image error','Foto gagal diproses. Gunakan URL gambar atau file lain.'); return; }
    if(editing.type==='reviews')object.rating=Math.max(1,Math.min(5,Number(object.rating)||5));
    if(editing.id){object.id=editing.id;data[editing.type]=data[editing.type].map(item=>item.id===editing.id?{...existing,...object}:item);} else {object.id=`${editing.type[0]}${Date.now()}`;data[editing.type].push(object);}
    closeEditor(); save();
  });

  applyAdminTheme(); applyAdminLanguage();
  if(sessionStorage.getItem(SESSION_KEY)==='1')openDashboard();
})();
