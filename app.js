(() => {
  'use strict';

  const CONTENT_KEY = 'stairsDemoContentV4';
  const ADMIN_PREVIEW_KEY = 'stairsAdminPreviewContentV1';
  const LANG_KEY = 'stairsUiLanguage';
  const THEME_KEY = 'stairsUiTheme';
  const isAdminPreview = new URLSearchParams(window.location.search).get('adminPreview') === '1';

  const defaults = {
    settings: {
      heroTitleId: 'Food.<br><span>Cocktails.</span><br>Late nights.',
      heroTitleEn: 'Food.<br><span>Cocktails.</span><br>Late nights.',
      heroSubtitleId: 'Global-inspired food, cocktails, guest bars, musik, dan energi malam Prawirotaman dalam satu tempat.',
      heroSubtitleEn: 'Global-inspired food, cocktails, guest bars, music and Prawirotaman late-night energy in one place.',
      openingHoursShort: '11.00 — 01.00',
      openingHoursId: 'Buka setiap hari 11.00 — 01.00 · akhir pekan sampai 02.00',
      openingHoursEn: 'Open daily 11.00 — 01.00 · weekends until 02.00',
      location: 'Jl. Prawirotaman, Brontokusuman, Mergangsan, Yogyakarta 55153',
      phone: '+62 852-1565-5565',
      mapsUrl: 'https://www.google.com/maps/place/STAIRS+by+Seken+Living/@-7.8191966,110.3696288,21z/data=!4m6!3m5!1s0x2e7a57835710d665:0x88af7340ff73c90b!8m2!3d-7.8191034!4d110.3695626!16s%2Fg%2F11v3h5kb1l?entry=ttu',
      instagramUrl: 'https://www.instagram.com/stairsprawirotaman/',
      reservationUrl: 'https://linktr.ee/stairsprawirotaman',
      linktreeUrl: 'https://linktr.ee/stairsprawirotaman',
      workFromStairsUrl: 'https://linktr.ee/stairsprawirotaman',
      allRedPromoUrl: 'https://linktr.ee/stairsprawirotaman',
      gofoodUrl: 'https://linktr.ee/stairsprawirotaman',
      grabfoodUrl: 'https://dineout.grab.com/id/en/restaurants/stairs-prawirotaman--6-C6E3ABMDR8ATJE',
      foodMenuUrl: 'https://linktr.ee/stairsprawirotaman',
      barMenuUrl: 'https://linktr.ee/stairsprawirotaman',
      tableBookingUrl: 'https://linktr.ee/stairsprawirotaman',
      venueReservationUrl: 'https://linktr.ee/stairsprawirotaman',
      tiktokUrl: 'https://www.tiktok.com/@stairsprawirotaman',
      displayFont: 'Inter Tight',
      bodyFont: 'Instrument Sans',
      typographyProfile: 'pear-v2',
      accentColor: '#ef2d27',
      secondaryColor: '#2118a8',
      defaultLanguage: 'id',
      defaultTheme: 'dark'
    },
    orbit: [
      { id:'o1', url:'assets/ig-pour-show-poster.png', shape:'portrait', alt:'STAIRS Pour and Show event poster', angle:0, radius:1.00 },
      { id:'o2', url:'assets/ig-cocktail.png', shape:'square', alt:'STAIRS cocktail visual', angle:45, radius:.87 },
      { id:'o3', url:'assets/ig-must21.png', shape:'portrait', alt:'STAIRS Must 21 Plus festival poster', angle:90, radius:1.03 },
      { id:'o4', url:'assets/ig-pour-show-photo.png', shape:'square', alt:'STAIRS late night guest bar atmosphere', angle:135, radius:.88 },
      { id:'o5', url:'assets/ig-greatest-showman.png', shape:'portrait', alt:'STAIRS The Greatest Showman event poster', angle:180, radius:1.02 },
      { id:'o6', url:'assets/ig-night-crowd.png', shape:'square', alt:'STAIRS late night crowd', angle:225, radius:.88 },
      { id:'o7', url:'assets/ig-drysol.png', shape:'portrait', alt:'STAIRS Drysol event poster', angle:270, radius:1.02 },
      { id:'o8', url:'assets/ig-craft.png', shape:'square', alt:'STAIRS bar craft visual', angle:315, radius:.86 },
      { id:'o9', url:'assets/ig-madlab.png', shape:'mini', alt:'STAIRS Mad Lab event poster', angle:22, radius:.58 },
      { id:'o10', url:'assets/ig-crowd.png', shape:'square secondary', alt:'STAIRS crowd and nightlife atmosphere', angle:338, radius:.68 }
    ],
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
        url:'assets/ig-night-crowd.png',
        titleId:'Late Night Energy', titleEn:'Late Night Energy',
        captionId:'Potongan feed Instagram yang kamu kirim, menampilkan energi malam STAIRS.',
        captionEn:'A crop from the Instagram feed you supplied, showing STAIRS late-night energy.',
        source:'Instagram @stairsprawirotaman · supplied feed reference'
      },
      {
        id:'g4', type:'image',
        url:'assets/ig-cocktail.png',
        titleId:'Cocktail Culture', titleEn:'Cocktail Culture',
        captionId:'Visual cocktail dari feed Instagram yang kamu kirim untuk menguatkan karakter bar.',
        captionEn:'A cocktail visual from the supplied Instagram feed to reinforce the bar identity.',
        source:'Instagram @stairsprawirotaman · supplied feed reference'
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
      quickActions:'Akses cepat', mobileNavigation:'Navigasi mobile', openMenu:'Buka menu', closeMenu:'Tutup menu', directionsShort:'Arah',
      exploreMenu:'Lihat Menu', openMaps:'Buka Maps ↗', googleRating:'rating Google', opensDaily:'buka setiap hari', lateNights:'sampai larut',
      photoReference:'Referensi foto publik', openDaily:'BUKA SETIAP HARI', weekendHours:'Sabtu–Minggu sampai 02.00', storyLabel:'CERITA',
      storyTitle:'Salah satu tangga<br><em>paling ikonik di Prawirotaman.</em>',
      storyP1:'STAIRS memadukan beton ekspos, permukaan hitam, dan aksen merah dengan pengalaman dining indoor–outdoor. Saat malam, suasananya berubah menjadi restoran dan bar yang hidup sampai larut.',
      storyP2:'Konsep website ini menerjemahkan identitas fisik tersebut lewat layer tangga, gerak yang terarah, referensi venue asli, dan transisi berbeda di setiap section.',
      menuLabel:'MENU', menuTitle:'Dari brunch sampai late night.',
      menuIntro:'Referensi menu disusun dari listing menu publik STAIRS dan liputan yang terhubung dengan Instagram. Harga dapat berubah.',
      officialMenu:'Menu Resmi ↗', fullFoodMenu:'Lihat menu makanan lengkap ↗', fullBarMenu:'Lihat bar menu ↗', Featured:'Pilihan', menuDisclaimer:'Ini adalah website demo/pitching. Konfirmasi menu dan harga terbaru langsung dengan STAIRS sebelum digunakan sebagai website resmi.',
      spaceLabel:'SUASANA & HIDANGAN', spaceTitle:'Concrete by day.<br><span>Electric after dark.</span>',
      spaceIntro:'Referensi visual di bawah memakai foto publik yang terindeks dan terkait langsung dengan STAIRS, termasuk liputan yang mengkreditkan Instagram mereka.',
      reviewLabel:'KATA PENGUNJUNG', reviewSummary:'Dikenal karena ambience, late-night dining, pizza, kopi, dan arsitektur yang berbeda.', readGoogle:'Baca di Google Maps ↗',
      visitLabel:'KUNJUNGI', visitTitle:'Ketemu<br>di tangga.', address:'ALAMAT', hours:'JAM BUKA', phone:'TELEPON', directions:'Buka Petunjuk Arah',
      demoCredit:'Konsep demo. Referensi venue/menu publik digunakan untuk pitching; ganti dengan aset resmi berlisensi sebelum production.',
      all:'Semua', Breakfast:'Breakfast', Bites:'Snack', Pizza:'Pizza', Salads:'Salad', Comfort:'Soup & Comfort', Pasta:'Pasta', Mains:'Main Course', Coffee:'Coffee', Tea:'Tea', Fermented:'Fermentasi', 'Non Coffee':'Non Coffee', Cocktails:'Cocktail'
    },
    en: {
      navStory:'Story', navMenu:'Menu', navSpace:'Space', navVisit:'Visit', reserve:'Reserve', themeDark:'Dark', themeLight:'Light',
      quickActions:'Quick actions', mobileNavigation:'Mobile navigation', openMenu:'Open menu', closeMenu:'Close menu', directionsShort:'Directions',
      exploreMenu:'Explore Menu', openMaps:'Open Maps ↗', googleRating:'Google rating', opensDaily:'opens daily', lateNights:'late nights',
      photoReference:'Public photo reference', openDaily:'OPEN DAILY', weekendHours:'Sat–Sun until 02.00', storyLabel:'THE STORY',
      storyTitle:'One of Prawirotaman\'s<br><em>most recognisable steps.</em>',
      storyP1:'STAIRS pairs exposed concrete, black surfaces and bold red details with an indoor–outdoor dining experience. After dark, the atmosphere shifts into a late-night restaurant and bar mood.',
      storyP2:'This concept site mirrors that physical identity through layered stairs, directional motion, real venue references, and section-by-section transitions.',
      menuLabel:'MENU', menuTitle:'From brunch to late night.',
      menuIntro:'Menu references are compiled from STAIRS’ public menu listings and Instagram-linked coverage. Prices may change.',
      officialMenu:'Official Menu ↗', fullFoodMenu:'View full food menu ↗', fullBarMenu:'View bar menu ↗', Featured:'Featured', menuDisclaimer:'This is a pitching/demo website. Confirm the latest official menu and prices with STAIRS before publishing as the official site.',
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
  const reduceMotion = false; // Desktop keeps the full-motion art direction.
  const mobilePerformance = Boolean(
    window.matchMedia?.('(max-width: 900px)').matches ||
    ((navigator.maxTouchPoints || 0) > 0 && window.innerWidth <= 1024)
  );
  document.documentElement.classList.add('force-motion');
  document.documentElement.classList.toggle('mobile-performance', mobilePerformance);

  const FONT_STACKS = {
    'Inter Tight': "'Inter Tight','Helvetica Neue',Arial,sans-serif",
    'Instrument Sans': "'Instrument Sans','Helvetica Neue',Arial,sans-serif",
    'Bricolage Grotesque': "'Bricolage Grotesque',system-ui,sans-serif",
    'Manrope': "'Manrope',system-ui,sans-serif",
    'Space Grotesk': "'Space Grotesk',system-ui,sans-serif",
    'Plus Jakarta Sans': "'Plus Jakarta Sans',system-ui,sans-serif",
    'DM Sans': "'DM Sans',system-ui,sans-serif",
    'Sora': "'Sora',system-ui,sans-serif",
    'Outfit': "'Outfit',system-ui,sans-serif",
    'Syne': "'Syne',system-ui,sans-serif"
  };
  const MENU_IMAGE_FALLBACKS = {
    m3:'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=82',
    m10:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=82',
    m13:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=82',
    m18:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=82',
    m28:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82',
    m32:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=82',
    m34:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=82',
    m44:'assets/ig-cocktail.png',
    m22:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82',
    m12:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82'
  };
  const CATEGORY_IMAGE_FALLBACKS = {
    Breakfast:'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=82',
    Bites:'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=900&q=82',
    Pizza:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=82',
    Salads:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=82',
    Comfort:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82',
    Pasta:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82',
    Mains:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=82',
    Coffee:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=82',
    Tea:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=82',
    Fermented:'assets/ig-cocktail.png',
    'Non Coffee':'assets/ig-cocktail.png',
    Cocktails:'assets/ig-cocktail.png'
  };
  const getMenuImage = item => {
    let url = item.image || MENU_IMAGE_FALLBACKS[item.id] || CATEGORY_IMAGE_FALLBACKS[item.category] || 'assets/ig-cocktail.png';
    if (mobilePerformance && /images\.unsplash\.com/i.test(url)) {
      url = url.replace(/([?&])w=\d+/i, '$1w=560').replace(/([?&])q=\d+/i, '$1q=72');
    }
    return url;
  };

  function applyAppearance() {
    const root = document.documentElement;
    const display = FONT_STACKS[data.settings.displayFont] || FONT_STACKS['Inter Tight'];
    const body = FONT_STACKS[data.settings.bodyFont] || FONT_STACKS['Instrument Sans'];
    root.style.setProperty('--font-display', display);
    root.style.setProperty('--font-body', body);
    if (/^#[0-9a-f]{6}$/i.test(data.settings.accentColor || '')) root.style.setProperty('--red', data.settings.accentColor);
    if (/^#[0-9a-f]{6}$/i.test(data.settings.secondaryColor || '')) root.style.setProperty('--blue', data.settings.secondaryColor);
  }

  function loadData() {
    try {
      const previewRaw = isAdminPreview ? sessionStorage.getItem(ADMIN_PREVIEW_KEY) : null;
      const raw = previewRaw || localStorage.getItem(CONTENT_KEY);
      const saved = raw ? JSON.parse(raw) : null;
      if (!saved) return clone(defaults);
      const savedSettings = { ...(saved.settings || {}) };
      // v6.2 typography migration: old default stacks move to the closer Pear-like pair.
      // If the user deliberately picked another font in CMS, keep that choice.
      if (savedSettings.typographyProfile !== 'pear-v2') {
        if (!savedSettings.displayFont || ['Bricolage Grotesque','DM Sans'].includes(savedSettings.displayFont)) savedSettings.displayFont = 'Inter Tight';
        if (!savedSettings.bodyFont || ['Manrope','DM Sans'].includes(savedSettings.bodyFont)) savedSettings.bodyFont = 'Instrument Sans';
        savedSettings.typographyProfile = 'pear-v2';
      }
      return {
        settings: { ...defaults.settings, ...savedSettings },
        menu: Array.isArray(saved.menu) ? saved.menu : clone(defaults.menu),
        orbit: Array.isArray(saved.orbit) ? saved.orbit : clone(defaults.orbit),
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
  let activeCategory = 'Featured';
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

  function applyPhotoCopy() {
    $$('[data-photo-description-id]').forEach(card => {
      const title = language === 'id' ? (card.dataset.photoTitleId || card.dataset.photoTitleEn || 'STAIRS') : (card.dataset.photoTitleEn || card.dataset.photoTitleId || 'STAIRS');
      const description = language === 'id' ? (card.dataset.photoDescriptionId || card.dataset.photoDescriptionEn || '') : (card.dataset.photoDescriptionEn || card.dataset.photoDescriptionId || '');
      const caption = $('[data-photo-caption]', card);
      if (!caption) return;
      const titleNode = $('strong, b', caption);
      const descNode = $('small', caption);
      if (titleNode) titleNode.textContent = title;
      if (descNode) descNode.textContent = description;
    });
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    $$('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = tr(el.dataset.i18nHtml); });
    $$('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', tr(el.dataset.i18nAriaLabel)); });
    const mobileToggle = $('.menu-toggle');
    if (mobileToggle) mobileToggle.setAttribute('aria-label', tr(mobileToggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu'));
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
    applyPhotoCopy();
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

  const FEATURED_MENU_IDS = ['m3','m10','m13','m18','m28','m32','m34','m44'];
  const FEATURED_LIMIT = 8;
  const CATEGORY_LIMIT = 4;

  function renderMenu() {
    const filter = $('#menuFilter');
    const grid = $('#menuGrid');
    const status = $('#menuCompactStatus');
    if (!filter || !grid) return;

    const categories = ['Featured', ...new Set(data.menu.map(item => item.category).filter(Boolean))];
    if (!categories.includes(activeCategory)) activeCategory = 'Featured';

    filter.innerHTML = categories.map(category => {
      const label = category === 'Featured' ? tr('Featured') : tr(category);
      return `<button type="button" class="${category === activeCategory ? 'active' : ''}" data-cat="${esc(category)}">${esc(label)}</button>`;
    }).join('');

    let sourceItems;
    if (activeCategory === 'Featured') {
      const byId = new Map(data.menu.map(item => [item.id, item]));
      sourceItems = FEATURED_MENU_IDS.map(id => byId.get(id)).filter(Boolean);
      if (sourceItems.length < FEATURED_LIMIT) {
        const used = new Set(sourceItems.map(item => item.id));
        sourceItems.push(...data.menu.filter(item => !used.has(item.id)).slice(0, FEATURED_LIMIT - sourceItems.length));
      }
      sourceItems = sourceItems.slice(0, FEATURED_LIMIT);
    } else {
      sourceItems = data.menu.filter(item => item.category === activeCategory).slice(0, CATEGORY_LIMIT);
    }

    grid.innerHTML = sourceItems.map((item,index) => {
      const description = language === 'id' ? (item.descriptionId || item.description || '') : (item.descriptionEn || item.description || '');
      const image = getMenuImage(item);
      const driftX = index % 2 === 0 ? -22 : 22;
      const driftY = 18 + (index % 3) * 7;
      return `<article class="menu-card menu-card-photo" data-kinetic data-depth="${(.35 + (index%4)*.08).toFixed(2)}" data-drift-x="${driftX}" data-drift-y="${driftY}" data-photo-title="${esc(item.name)}" data-photo-description="${esc(description)}" data-photo-source="${esc(tr(item.category))} · ${esc(item.price || '—')}">
        <div class="menu-photo"><img src="${esc(image)}" alt="${esc(item.name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"><span>${esc(tr(item.category))}</span></div>
        <div class="menu-card-body">
          <div class="menu-index">${String(index+1).padStart(2,'0')}</div>
          <div class="menu-copy"><span>${esc(tr(item.category))}</span><h3>${esc(item.name)}</h3><p>${esc(description)}</p></div>
          <strong>${esc(item.price || '—')}</strong>
        </div>
      </article>`;
    }).join('') || `<p class="empty-state">${language === 'id' ? 'Belum ada menu di kategori ini.' : 'No menu items in this category yet.'}</p>`;
    bindImageFallbacks(grid);
    requestAnimationFrame(() => { const viewport = $('#menuCarouselViewport'); if (viewport) viewport.scrollTo({left:0,behavior:'auto'}); updateMenuCarouselControls(); });

    if (status) {
      const total = activeCategory === 'Featured' ? data.menu.length : data.menu.filter(item => item.category === activeCategory).length;
      status.textContent = language === 'id'
        ? (activeCategory === 'Featured' ? `Menampilkan ${sourceItems.length} pilihan dari ${total} menu.` : `Menampilkan ${sourceItems.length} dari ${total} item kategori ini.`)
        : (activeCategory === 'Featured' ? `Showing ${sourceItems.length} featured picks from ${total} menu items.` : `Showing ${sourceItems.length} of ${total} items in this category.`);
    }

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
        const media = img.closest('.gallery-media, .menu-photo, .location-card, .kinetic-card, .feed-track figure');
        if (media) media.classList.add('media-broken');
        img.hidden = true;
      });
    });
  }

  function getInstagramInfo(value = '') {
    if (!value) return null;
    try {
      const url = new URL(String(value).trim(), window.location.href);
      const host = url.hostname.toLowerCase().replace(/^www\./, '').replace(/^m\./, '');
      if (!['instagram.com','instagr.am'].includes(host)) return null;

      const segments = url.pathname.split('/').filter(Boolean);
      // Canonical Instagram media URLs supported by Meta embeds.
      // We also accept /reels/{code}/ and normalize it to /reel/{code}/.
      const mediaIndex = ['p','reel','reels','tv'].includes((segments[0] || '').toLowerCase()) ? 0 : -1;
      if (mediaIndex === 0 && segments[1]) {
        const kindRaw = segments[mediaIndex].toLowerCase();
        const kind = kindRaw === 'reels' ? 'reel' : kindRaw;
        const shortcode = segments[mediaIndex + 1].replace(/[^A-Za-z0-9_-]/g, '');
        if (shortcode) {
          return {
            isInstagram: true,
            isCanonical: true,
            kind,
            shortcode,
            original: url.href,
            canonical: `https://www.instagram.com/${kind}/${shortcode}/`
          };
        }
      }

      // Instagram can return /share/reel/... links from the Share sheet.
      // Those need a server-side redirect/oEmbed resolution before they can be rendered.
      if (segments[0]?.toLowerCase() === 'share') {
        return { isInstagram:true, isCanonical:false, original:url.href, canonical:'' };
      }
      return { isInstagram:true, isCanonical:false, original:url.href, canonical:'' };
    } catch {
      return null;
    }
  }

  function isInstagramMediaUrl(value = '') {
    return Boolean(getInstagramInfo(value)?.isInstagram);
  }

  function instagramFallbackMarkup(url, title, message = '') {
    const copy = message || (language === 'id'
      ? 'Jika player Instagram tidak tampil, buka Reel/Post langsung di Instagram.'
      : 'If the Instagram player does not appear, open the Reel/Post directly on Instagram.');
    return `<div class="instagram-fallback"><span>${esc(copy)}</span><a href="${esc(url)}" target="_blank" rel="noreferrer">Instagram ↗</a></div>`;
  }

  async function resolveInstagramCanonical(rawUrl) {
    const info = getInstagramInfo(rawUrl);
    if (!info) return '';
    if (info.canonical) return info.canonical;

    // Instagram /share/... links do not contain the real shortcode.
    // On Vercel the lightweight endpoint below follows the redirect and
    // returns the canonical /reel/... or /p/... permalink without using
    // Meta Graph/oEmbed tokens.
    try {
      const response = await fetch(`/api/instagram?url=${encodeURIComponent(rawUrl)}`, {
        headers: { 'Accept':'application/json' },
        cache: 'no-store'
      });
      if (response.ok) {
        const payload = await response.json();
        if (payload?.canonical) return String(payload.canonical);
      }
    } catch {}
    return '';
  }

  function instagramIframeMarkup(canonical, title) {
    const clean = String(canonical || '').replace(/[?#].*$/, '').replace(/\/+$/, '');
    const src = `${clean}/embed/`;
    return `<iframe
      class="instagram-embed-frame"
      src="${esc(src)}"
      title="${esc(title || 'Instagram Reel / Post')}"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowfullscreen
      frameborder="0"
      scrolling="no"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  }

  function fitInstagramShell(shell) {
    if (!shell || !shell.classList.contains('instagram-embed-ready')) return;
    const media = shell.closest('.gallery-media') || shell;
    const rect = media.getBoundingClientRect();
    const baseWidth = 540;
    const baseHeight = 700;
    const pad = 12;
    const availableWidth = Math.max(220, rect.width - pad * 2);
    const availableHeight = Math.max(260, rect.height - pad * 2);
    const scale = Math.min(1, availableWidth / baseWidth, availableHeight / baseHeight);
    shell.style.setProperty('--ig-fit', String(Math.max(.34, scale)));
  }

  function bindInstagramFit(shell) {
    if (!shell || shell.dataset.instagramFitBound === '1') return;
    shell.dataset.instagramFitBound = '1';
    const update = () => fitInstagramShell(shell);
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(update);
      ro.observe(shell.closest('.gallery-media') || shell);
      shell._stairsInstagramResizeObserver = ro;
    } else {
      window.addEventListener('resize', update, { passive:true });
    }
    requestAnimationFrame(update);
  }

  async function hydrateInstagramShell(shell, force = false) {
    if (!shell || shell.dataset.instagramHydrated === '1') return;
    if (mobilePerformance && !force) {
      shell.classList.add('instagram-deferred');
      if (!shell.querySelector('[data-load-instagram]')) {
        shell.innerHTML = `<button type="button" class="instagram-load-button" data-load-instagram>${language === 'id' ? 'Putar Reel Instagram' : 'Play Instagram Reel'} <span>↗</span></button>`;
        shell.querySelector('[data-load-instagram]')?.addEventListener('click', () => hydrateInstagramShell(shell, true), { once:true });
      }
      return;
    }
    shell.dataset.instagramHydrated = '1';
    shell.classList.remove('instagram-deferred');

    const rawUrl = shell.dataset.instagramUrl || '';
    const title = shell.dataset.instagramTitle || 'Instagram';
    const canonical = await resolveInstagramCanonical(rawUrl);

    if (!canonical) {
      shell.innerHTML = instagramFallbackMarkup(
        rawUrl,
        title,
        language === 'id'
          ? 'Gunakan URL Reel/Post publik dengan format instagram.com/reel/... atau instagram.com/p/....'
          : 'Use a public Reel/Post URL in the instagram.com/reel/... or instagram.com/p/... format.'
      );
      shell.classList.add('instagram-embed-failed');
      return;
    }

    shell.innerHTML = `
      <div class="instagram-frame-wrap">
        ${instagramIframeMarkup(canonical, title)}
      </div>
      <a class="instagram-open-pill" href="${esc(canonical)}" target="_blank" rel="noreferrer">Instagram ↗</a>
    `;
    shell.classList.add('instagram-embed-ready');
    bindInstagramFit(shell);
  }

  function hydrateInstagramEmbeds(context = document) {
    $$('[data-instagram-embed]', context).forEach(shell => hydrateInstagramShell(shell));
  }

  function renderGalleryMedia(item, title, index = 0, context = 'gallery') {
    const url = item?.url || '';
    const instagramInfo = getInstagramInfo(url);
    if (instagramInfo) {
      if (context === 'feed') {
        return `<a class="instagram-feed-card" href="${esc(url)}" target="_blank" rel="noreferrer" aria-label="Open ${esc(title)} on Instagram"><span>INSTAGRAM</span><strong>${esc(title)}</strong><small>${language === 'id' ? 'Buka Reel / post' : 'Open Reel / post'} ↗</small></a>`;
      }
      return `<div class="instagram-embed-shell" data-instagram-embed data-instagram-url="${esc(url)}" data-instagram-title="${esc(title)}"><div class="instagram-embed-loading"><i></i><span>${language === 'id' ? 'Memuat Reel / Post Instagram…' : 'Loading Instagram Reel / Post…'}</span></div></div>`;
    }
    if (item?.type === 'video') {
      return `<video src="${esc(url)}" controls playsinline preload="${mobilePerformance ? 'none' : 'metadata'}"></video>`;
    }
    return `<img src="${esc(url)}" alt="${esc(title)}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async" referrerpolicy="no-referrer">`;
  }

  function renderFeed() {
    const track = $('#feedTrack');
    if (!track) return;
    const items = data.gallery.length ? data.gallery : defaults.gallery;
    track.innerHTML = items.map((item,index) => {
      const title = language === 'id' ? (item.titleId || item.title || `STAIRS ${index+1}`) : (item.titleEn || item.title || `STAIRS ${index+1}`);
      const caption = language === 'id' ? (item.captionId || item.caption || '') : (item.captionEn || item.caption || '');
      const media = renderGalleryMedia(item, title, index, 'feed');
      return `<figure data-photo-title="${esc(title)}" data-photo-description="${esc(caption)}" data-photo-source="${esc(item.source || 'Instagram @stairsprawirotaman')}">${media}<figcaption><strong>${esc(title)}</strong><small>${esc(caption)}</small></figcaption></figure>`;
    }).join('');
    track.dataset.loopReady = '';
    bindImageFallbacks(track);
    initFeedLoop();
  }

  function renderGallery() {
    const track = $('#galleryTrack');
    const dots = $('#galleryDots');
    if (!track || !dots) return;
    if (galleryIndex >= data.gallery.length) galleryIndex = 0;

    track.innerHTML = data.gallery.map((item,index) => {
      const title = language === 'id' ? (item.titleId || item.title || 'STAIRS') : (item.titleEn || item.title || 'STAIRS');
      const caption = language === 'id' ? (item.captionId || item.caption || '') : (item.captionEn || item.caption || '');
      const media = renderGalleryMedia(item, title, index, 'gallery');
      const mediaClass = getInstagramInfo(item?.url || '') ? ' is-instagram-slide' : (item?.type === 'video' ? ' is-video-slide' : '');
      return `<article class="gallery-slide${mediaClass} ${index === galleryIndex ? 'active' : ''}" aria-hidden="${index === galleryIndex ? 'false' : 'true'}" data-photo-title="${esc(title)}" data-photo-description="${esc(caption)}" data-photo-source="${esc(item.source || '')}">
        <div class="gallery-media">${media}</div>
        <div class="gallery-slide-copy"><span class="gallery-no">${String(index+1).padStart(2,'0')} / ${String(data.gallery.length).padStart(2,'0')}</span><h3>${esc(title)}</h3><p>${esc(caption)}</p><span class="gallery-source">${esc(item.source || '')}</span></div>
      </article>`;
    }).join('');

    dots.innerHTML = data.gallery.map((_,index) => `<button type="button" class="${index === galleryIndex ? 'active' : ''}" data-gallery-dot="${index}" aria-label="Slide ${index+1}"></button>`).join('');
    bindImageFallbacks(track);
    updateGallery(false);
    const activeSlide = $('.gallery-slide.active', track);
    if (activeSlide) hydrateInstagramEmbeds(activeSlide);
    $$('[data-gallery-dot]', dots).forEach(button => button.addEventListener('click', () => goGallery(Number(button.dataset.galleryDot), true)));
    renderFeed();
  }

  function updateGallery(animate = true) {
    const track = $('#galleryTrack');
    if (!track || !data.gallery.length) return;
    if (!animate) track.style.transition = 'none';
    track.style.transform = `translateX(-${galleryIndex * 100}%)`;
    requestAnimationFrame(() => { if (!animate) track.style.removeProperty('transition'); });
    $$('.gallery-slide', track).forEach((slide,index) => {
      const isActive = index === galleryIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      const video = $('video', slide);
      if (video) {
        if (isActive && !mobilePerformance) video.play().catch(() => {});
        else { video.pause(); if (!isActive) video.currentTime = 0; }
      }
      if (isActive) {
        hydrateInstagramEmbeds(slide);
      } else if (mobilePerformance) {
        const shell = $('[data-instagram-embed]', slide);
        const frame = $('.instagram-embed-frame', slide);
        if (shell && frame) {
          shell.dataset.instagramHydrated = '';
          shell.classList.remove('instagram-embed-ready','instagram-embed-failed');
          shell.innerHTML = `<button type="button" class="instagram-load-button" data-load-instagram>${language === 'id' ? 'Putar Reel Instagram' : 'Play Instagram Reel'} <span>↗</span></button>`;
          shell.querySelector('[data-load-instagram]')?.addEventListener('click', () => hydrateInstagramShell(shell, true), { once:true });
        }
      }
    });
    $$('[data-gallery-dot]').forEach((button,index) => button.classList.toggle('active', index === galleryIndex));
  }

  function goGallery(index, restart = false) {
    if (!data.gallery.length) return;
    galleryIndex = (index + data.gallery.length) % data.gallery.length;
    updateGallery(true);
    if (isInstagramMediaUrl(data.gallery[galleryIndex]?.url)) {
      if (galleryTimer) clearInterval(galleryTimer);
      galleryTimer = null;
      return;
    }
    if (restart) startGalleryAutoplay();
  }

  function startGalleryAutoplay() {
    if (galleryTimer) clearInterval(galleryTimer);
    galleryTimer = null;
    if (reduceMotion || mobilePerformance || data.gallery.length < 2 || isInstagramMediaUrl(data.gallery[galleryIndex]?.url)) return;
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



  function renderHeroOrbitCards() {
    const layer = $('#orbitCards');
    if (!layer) return;
    const items = Array.isArray(data.orbit) && data.orbit.length ? data.orbit : defaults.orbit;
    const total = Math.max(1, items.length);
    layer.innerHTML = items.map((item, index) => {
      const rawShape = String(item.shape || (index % 2 ? 'square' : 'portrait'));
      const classes = rawShape.split(/\s+/).filter(Boolean).map(x => `orbit-${esc(x)}`).join(' ');
      const angle = Number.isFinite(Number(item.angle)) ? Number(item.angle) : (index * 360 / total);
      const radius = Number.isFinite(Number(item.radius)) ? Number(item.radius) : (rawShape.includes('mini') ? .62 : index % 2 ? .88 : 1.0);
      const eager = index < 4 ? 'eager' : 'lazy';
      return `<figure class="orbit-card ${classes}" data-orbit-card data-angle="${angle}" data-radius="${radius}">
        <img src="${esc(item.url || '')}" alt="${esc(item.alt || `STAIRS orbit visual ${index + 1}`)}" decoding="async" loading="${eager}">
      </figure>`;
    }).join('');
    $$('img', layer).forEach(img => img.addEventListener('error', () => {
      const card = img.closest('.orbit-card');
      if (card) card.classList.add('orbit-image-missing');
      img.hidden = true;
    }, { once:true }));
  }

  function initHeroOrbit() {
    const stage = $('#heroOrbit');
    if (!stage) return;
    const cards = $$('[data-orbit-card]', stage);
    if (!cards.length) return;

    const visual = $('#heroVisual');
    const deg = Math.PI / 180;
    const isTouchOrbit = mobilePerformance || window.matchMedia?.('(pointer:coarse)').matches;
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    let raf = 0;
    let visible = true;
    let lastTime = performance.now();
    let lastRenderedAt = 0;
    let orbitAngle = 0;
    let orbitVelocity = 0;
    let pointerAngle = 0;
    let pointerAngleTarget = 0;
    let pointerX = 0;
    let pointerY = 0;
    let pointerXTarget = 0;
    let pointerYTarget = 0;
    let centerX = 0;
    let centerY = 0;
    let centerXTarget = 0;
    let centerYTarget = 0;
    let hovering = false;
    let dragging = false;
    let dragPointerId = null;
    let lastDragX = 0;
    let lastDragY = 0;
    let lastDragAt = performance.now();

    const pointerTargetFromPoint = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const localX = clamp((clientX - rect.left) / rect.width, 0, 1);
      const localY = clamp((clientY - rect.top) / rect.height, 0, 1);
      const nx = localX * 2 - 1;
      const ny = localY * 2 - 1;
      pointerXTarget = nx;
      pointerYTarget = ny;
      pointerAngleTarget = nx * (isTouchOrbit ? .42 : 1.18) + ny * .12;
      centerXTarget = nx * Math.min(isTouchOrbit ? 18 : 46, rect.width * .06);
      centerYTarget = ny * Math.min(isTouchOrbit ? 12 : 30, rect.height * .05);
    };

    if (!isTouchOrbit && !reduceMotion && window.matchMedia?.('(pointer:fine)').matches) {
      stage.addEventListener('pointerenter', event => {
        hovering = true;
        pointerTargetFromPoint(event.clientX, event.clientY);
        stage.classList.add('is-orbiting');
      }, { passive:true });
      stage.addEventListener('pointermove', event => pointerTargetFromPoint(event.clientX, event.clientY), { passive:true });
      stage.addEventListener('pointerleave', () => {
        hovering = false;
        pointerAngleTarget = pointerXTarget = pointerYTarget = centerXTarget = centerYTarget = 0;
        stage.classList.remove('is-orbiting');
      }, { passive:true });
    }

    if (isTouchOrbit && !reduceMotion) {
      stage.classList.add('mobile-orbit-live');
      const orbitLabel = $('.orbit-label b', stage);
      if (orbitLabel) orbitLabel.textContent = 'SWIPE · STAIRS NIGHTS';
      stage.addEventListener('pointerdown', event => {
        if (event.pointerType === 'mouse') return;
        dragging = true;
        dragPointerId = event.pointerId;
        lastDragX = event.clientX;
        lastDragY = event.clientY;
        lastDragAt = performance.now();
        pointerTargetFromPoint(event.clientX, event.clientY);
        try { stage.setPointerCapture(event.pointerId); } catch {}
      });
      stage.addEventListener('pointermove', event => {
        if (!dragging || event.pointerId !== dragPointerId) return;
        const now = performance.now();
        const dt = Math.max(8, now - lastDragAt);
        const dx = event.clientX - lastDragX;
        const dy = event.clientY - lastDragY;
        pointerTargetFromPoint(event.clientX, event.clientY);
        // Horizontal finger drag rotates the ring. Vertical movement remains free for page scroll.
        if (Math.abs(dx) > Math.abs(dy) * .75) {
          orbitAngle += dx * .0065;
          orbitVelocity += clamp((dx / dt) * .0018, -.008, .008);
        }
        lastDragX = event.clientX;
        lastDragY = event.clientY;
        lastDragAt = now;
      }, { passive:true });
      const release = event => {
        if (dragPointerId !== null && event.pointerId !== undefined && event.pointerId !== dragPointerId) return;
        dragging = false;
        dragPointerId = null;
        pointerAngleTarget *= .35;
        pointerXTarget *= .35;
        pointerYTarget *= .35;
        centerXTarget = centerYTarget = 0;
      };
      stage.addEventListener('pointerup', release, { passive:true });
      stage.addEventListener('pointercancel', release, { passive:true });
    }

    const render = (time = performance.now()) => {
      const dt = clamp(time - lastTime, 0, 50);
      lastTime = time;
      const autoSpeed = isTouchOrbit ? .00017 : (hovering ? .000105 : .00034);
      orbitAngle += autoSpeed * dt + orbitVelocity * dt;
      orbitVelocity *= Math.pow(isTouchOrbit ? .90 : .86, dt / 16.67);

      const follow = 1 - Math.pow(isTouchOrbit ? .88 : .82, dt / 16.67);
      const centerFollow = 1 - Math.pow(.88, dt / 16.67);
      pointerAngle += (pointerAngleTarget - pointerAngle) * follow;
      pointerX += (pointerXTarget - pointerX) * follow;
      pointerY += (pointerYTarget - pointerY) * follow;
      centerX += (centerXTarget - centerX) * centerFollow;
      centerY += (centerYTarget - centerY) * centerFollow;

      const rect = stage.getBoundingClientRect();
      const rx = isTouchOrbit
        ? Math.max(100, Math.min(rect.width * .31, 150))
        : Math.max(124, Math.min(rect.width * .35, 242));
      const ryBase = isTouchOrbit
        ? Math.max(76, Math.min(rect.height * .24, 116))
        : Math.max(100, Math.min(rect.height * .31, 186));
      const ry = ryBase * (1 - Math.abs(pointerY) * .07);
      const tilt = pointerY * (isTouchOrbit ? .18 : .44);
      const sideLean = pointerX * (isTouchOrbit ? .07 : .13);

      stage.style.setProperty('--orbit-cx', `${centerX.toFixed(2)}px`);
      stage.style.setProperty('--orbit-cy', `${centerY.toFixed(2)}px`);
      stage.style.setProperty('--orbit-tilt', `${(pointerY * (isTouchOrbit ? 2.2 : 6)).toFixed(2)}deg`);
      stage.style.setProperty('--orbit-lean', `${(pointerX * (isTouchOrbit ? 2 : 4)).toFixed(2)}deg`);

      cards.forEach((card, index) => {
        const base = (Number(card.dataset.angle) || index * (360 / cards.length)) * deg;
        const radius = clamp(Number(card.dataset.radius) || 1, .45, 1.12);
        const angle = base + orbitAngle + pointerAngle;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = cos * rx * radius + centerX + sin * sideLean * 18;
        const y = (sin * ry + cos * tilt * 44) * radius + centerY;
        const depth = (Math.sin(angle + tilt * .3) + 1) / 2;
        const eased = depth * depth * (3 - 2 * depth);
        const scale = isTouchOrbit ? (.61 + eased * .38) : (.55 + eased * .72);
        const rotation = cos * (isTouchOrbit ? 1.1 : 2.2) + pointerX * (isTouchOrbit ? .5 : 1.4);
        card.style.setProperty('--ox', `${x.toFixed(2)}px`);
        card.style.setProperty('--oy', `${y.toFixed(2)}px`);
        card.style.setProperty('--os', scale.toFixed(3));
        card.style.setProperty('--or', `${rotation.toFixed(2)}deg`);
        card.style.opacity = (isTouchOrbit ? .68 + eased * .32 : .42 + eased * .58).toFixed(3);
        card.style.filter = isTouchOrbit ? 'none' : `saturate(${(.78 + eased * .38).toFixed(2)}) brightness(${(.72 + eased * .34).toFixed(2)}) blur(${((1-eased)*1.15).toFixed(2)}px)`;
        card.style.zIndex = String(6 + Math.round(eased * 48));
      });
    };

    if (reduceMotion) {
      render(performance.now());
      return;
    }

    const loop = time => {
      if (visible) {
        // ~24fps on phones; full refresh on desktop. This keeps Android/iPhone smooth enough without burning GPU.
        if (!isTouchOrbit || time - lastRenderedAt >= 40) {
          render(time);
          lastRenderedAt = time;
        }
      } else {
        lastTime = time;
      }
      raf = requestAnimationFrame(loop);
    };

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
      }, { rootMargin:'100px 0px 100px' });
      io.observe(stage);
    }
    raf = requestAnimationFrame(loop);
    window.addEventListener('pagehide', () => cancelAnimationFrame(raf), { once:true });
  }

  function initFeedLoop() {
    const track = $('.feed-track');
    if (!track || track.dataset.loopReady === '1') return;
    track.dataset.loopReady = '1';
    if (mobilePerformance) return; // Swipe natively on phones; do not duplicate the whole feed.
    const originals = [...track.children];
    originals.forEach(node => track.appendChild(node.cloneNode(true)));
  }

  function initKineticScroll() {
    if (reduceMotion) return;
    const items = $$('[data-kinetic]');
    if (!items.length) return;
    let ticking = false;
    const update = () => {
      const vh = Math.max(window.innerHeight, 1);
      items.forEach((item,index) => {
        const rect = item.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - vh / 2) / (vh * .68)));
        const depth = Math.max(.05, Math.min(1.5, Number(item.dataset.depth) || .5));
        const driftX = Number(item.dataset.driftX) || (index % 2 ? 18 : -18);
        const driftY = Number(item.dataset.driftY) || 24;
        item.style.setProperty('--kin-x', `${(-progress * driftX * depth).toFixed(2)}px`);
        item.style.setProperty('--kin-y', `${(-progress * driftY * depth).toFixed(2)}px`);
        item.style.setProperty('--kin-r', `${(progress * depth * (index % 2 ? 1.6 : -1.3)).toFixed(2)}deg`);
        item.style.setProperty('--kin-s', `${(1 - Math.abs(progress) * .018 * depth).toFixed(4)}`);
      });
      ticking = false;
    };
    const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', request, {passive:true});
    window.addEventListener('resize', request, {passive:true});
    update();
  }



  function updateMenuCarouselControls() {
    const viewport = $('#menuCarouselViewport');
    const track = $('#menuGrid');
    const progress = $('#menuCarouselProgress');
    const count = $('#menuCarouselCount');
    const prev = $('#menuCarouselPrev');
    const next = $('#menuCarouselNext');
    if (!viewport || !track || !progress || !count || !prev || !next) return;

    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const ratio = max > 1 ? Math.max(0, Math.min(1, viewport.scrollLeft / max)) : 0;
    const cards = $$('.menu-card', track);
    const card = cards[0];
    const step = card ? card.getBoundingClientRect().width + 16 : Math.max(viewport.clientWidth,1);
    const current = Math.min(cards.length, Math.floor((viewport.scrollLeft + step * .42) / Math.max(step,1)) + 1);

    const visible = Math.max(1, Math.round(viewport.clientWidth / Math.max(step,1)));
    const thumbWidth = Math.min(100, Math.max(22, visible / Math.max(cards.length,1) * 100));
    progress.style.width = `${thumbWidth}%`;
    progress.style.transform = `translateX(${ratio * ((100 / Math.max(thumbWidth,1)) * (100-thumbWidth))}%)`;
    count.textContent = `${String(current).padStart(2,'0')} / ${String(Math.max(cards.length,1)).padStart(2,'0')}`;
    prev.disabled = viewport.scrollLeft <= 3;
    next.disabled = viewport.scrollLeft >= max - 3;
  }

  function initMenuCarousel() {
    const viewport = $('#menuCarouselViewport');
    const prev = $('#menuCarouselPrev');
    const next = $('#menuCarouselNext');
    if (!viewport || !prev || !next) return;

    const move = direction => {
      const amount = Math.max(240, viewport.clientWidth * .92);
      viewport.scrollBy({left: direction * amount, behavior: reduceMotion ? 'auto' : 'smooth'});
    };
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    viewport.addEventListener('scroll', updateMenuCarouselControls, {passive:true});
    window.addEventListener('resize', updateMenuCarouselControls, {passive:true});
    requestAnimationFrame(updateMenuCarouselControls);
  }

  function initMyntScrollMotion() {
    if (reduceMotion) return;

    const sections = $$('.slide-section');
    if (!sections.length) return;

    document.documentElement.classList.remove('motion-ready','mynt-motion');
    document.documentElement.classList.add('reference-motion');

    const hero = $('.hero');
    const microSelectors = '.feed-track figure,.cocktail-grid article,.quick-links a,.review-card';
    let raf = 0;

    const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
    const smooth = t => t * t * (3 - 2 * t);
    const expo = t => t === 1 ? 1 : 1 - Math.pow(2,-8*t);

    const setVar = (node,name,value) => node?.style.setProperty(name,value);

    const draw = () => {
      raf = 0;
      const vh = Math.max(window.innerHeight,1);
      const vw = Math.max(window.innerWidth,320);
      const mobile = vw <= 720;

      /* Hero exits like the supplied reference: copy drifts upward and the visual floats back. */
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const exit = smooth(clamp((-rect.top + vh * .03) / Math.max(vh * .74,1),0,1));
        const copy = $('.hero-copy',hero);
        const visual = $('.hero-visual',hero);
        setVar(copy,'--hero-copy-y',`${(-exit * (mobile ? 54 : 118)).toFixed(2)}px`);
        setVar(copy,'--hero-copy-scale',(.995 - exit * .055).toFixed(4));
        setVar(copy,'--hero-copy-opacity',(1 - exit * .74).toFixed(4));
        setVar(copy,'--hero-copy-blur',`${(exit * 7).toFixed(2)}px`);
        setVar(visual,'--hero-visual-y',`${(exit * (mobile ? 28 : 72)).toFixed(2)}px`);
        setVar(visual,'--hero-visual-scale',(1 - exit * .065).toFixed(4));
        setVar(visual,'--hero-visual-opacity',(1 - exit * .58).toFixed(4));
        setVar(visual,'--hero-visual-blur',`${(exit * 5).toFixed(2)}px`);
      }

      sections.forEach((section,sectionIndex) => {
        if (section === hero) return;
        const rect = section.getBoundingClientRect();

        /* Entry runs for a large portion of the viewport, so the movement is obvious while scrolling. */
        const enter = expo(clamp((vh * .96 - rect.top) / Math.max(vh * .68,1),0,1));
        const leave = smooth(clamp((vh * .22 - rect.bottom) / Math.max(vh * .48,1),0,1));
        const direction = section.dataset.motion || (sectionIndex % 2 ? 'left' : 'right');

        // Whole-section choreography: rise + scale into place, then gently lift away.
        const sectionLift = (1-enter) * (mobile ? 42 : 86) - leave * (mobile ? 30 : 58);
        const sectionScale = .965 + enter * .035 - leave * .012;
        const sectionOpacity = clamp(.34 + enter * .66 - leave * .28, .08, 1);
        setVar(section,'--section-lift',`${sectionLift.toFixed(2)}px`);
        setVar(section,'--section-scale',sectionScale.toFixed(4));
        setVar(section,'--section-opacity',sectionOpacity.toFixed(4));

        $$('.slide-content:not([data-kinetic])',section).forEach((item,index) => {
          const lag = Math.min(.32,index * .075);
          const local = expo(clamp((enter-lag) / Math.max(1-lag,.001),0,1));
          const side = direction === 'left' ? -1 : direction === 'right' ? 1 : (index % 2 ? 1 : -1);
          const startX = direction === 'up' ? side * (mobile ? 34 : 68) : side * (mobile ? 72 : 156);
          const startY = direction === 'up' ? (mobile ? 92 : 176) : (mobile ? 58 : 104);
          const x = (1-local)*startX + leave*(-side * (mobile ? 18 : 50));
          const y = (1-local)*startY - leave*(mobile ? 52 : 96);
          const scale = .86 + local*.14 - leave*.045;
          const opacity = clamp((.03 + local*.97) * (1-leave*.76),0,1);
          const blur = (1-local)*(mobile ? 7 : 16) + leave*(mobile ? 5 : 10);

          setVar(item,'--ref-x',`${x.toFixed(2)}px`);
          setVar(item,'--ref-y',`${y.toFixed(2)}px`);
          setVar(item,'--ref-scale',scale.toFixed(4));
          setVar(item,'--ref-opacity',opacity.toFixed(4));
          setVar(item,'--ref-blur',`${blur.toFixed(2)}px`);
        });

        /* Smaller elements fan in independently, closer to the cards in the reference recording. */
        $$(microSelectors,section).forEach((item,index) => {
          const lag = Math.min(.52,.10 + (index % 8)*.055);
          const local = expo(clamp((enter-lag)/Math.max(1-lag,.001),0,1));
          const side = index % 2 ? 1 : -1;
          const x = (1-local)*side*(mobile ? 26 : 68) + leave*(-side*22);
          const y = (1-local)*(mobile ? 56 : 104) - leave*52;
          const rot = (1-local)*side*(mobile ? 2.2 : 5.2);
          setVar(item,'--micro-x',`${x.toFixed(2)}px`);
          setVar(item,'--micro-y',`${y.toFixed(2)}px`);
          setVar(item,'--micro-r',`${rot.toFixed(2)}deg`);
          setVar(item,'--micro-s',(.88 + local*.12 - leave*.025).toFixed(4));
          setVar(item,'--micro-o',clamp((.05+local*.95)*(1-leave*.7),0,1).toFixed(4));
        });

        if (section.id === 'menu') {
          $$('.menu-card.menu-card-photo',section).forEach((card,index) => {
            const lag = Math.min(.66,.12 + index*.06);
            const local = expo(clamp((enter-lag)/Math.max(1-lag,.001),0,1));
            const side = index % 2 ? 1 : -1;
            const x = (1-local)*side*(mobile ? 34 : 82);
            const y = (1-local)*(mobile ? 88 : 152);
            const rot = (1-local)*side*(mobile ? 4 : 8.5);
            setVar(card,'--card-x',`${x.toFixed(2)}px`);
            setVar(card,'--card-y',`${(y-leave*42).toFixed(2)}px`);
            setVar(card,'--card-r',`${rot.toFixed(2)}deg`);
            setVar(card,'--card-s',(.82+local*.18-leave*.025).toFixed(4));
            setVar(card,'--card-o',clamp(.03+local*.97,0,1).toFixed(4));
          });
        }
      });
    };

    const request = () => { if (!raf) raf = requestAnimationFrame(draw); };
    window.addEventListener('scroll',request,{passive:true});
    window.addEventListener('resize',request,{passive:true});
    window.addEventListener('load',request,{once:true});
    draw();
  }



  function initMobilePearMotionLite() {
    const sections = $$('.slide-section');
    if (!sections.length) return;
    const root = document.documentElement;
    const progressBar = $('#pearMotionProgress');
    root.classList.remove('motion-ready','mynt-motion','reference-motion','pear-motion');
    root.classList.add('pear-motion','mobile-pear-lite');

    const reveal = section => section.classList.add('mobile-inview');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      }, { rootMargin:'8% 0px -10% 0px', threshold:.06 });
      sections.forEach(io.observe.bind(io));
      window.addEventListener('pagehide', () => io.disconnect(), { once:true });
    } else sections.forEach(reveal);

    let raf = 0;
    const draw = () => {
      raf = 0;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const gp = Math.max(0, Math.min(1, (window.scrollY || 0) / max));
      if (progressBar) progressBar.style.transform = `scaleX(${gp.toFixed(4)})`;
      const hero = $('.hero');
      if (hero) {
        const p = Math.max(0, Math.min(1, (window.scrollY || 0) / Math.max(window.innerHeight * .8, 1)));
        const copy = $('.hero-copy', hero);
        const visual = $('.hero-visual', hero);
        copy?.style.setProperty('--pear-hero-y', `${(-p * 28).toFixed(1)}px`);
        visual?.style.setProperty('--pear-hero-y', `${(p * 18).toFixed(1)}px`);
      }
    };
    const request = () => { if (!raf) raf = requestAnimationFrame(draw); };
    window.addEventListener('scroll', request, { passive:true });
    window.addEventListener('resize', request, { passive:true });
    draw();
  }

  function initPearMotionEngine() {
    if (mobilePerformance) return initMobilePearMotionLite();
    const sections = $$('.slide-section');
    if (!sections.length) return;

    const root = document.documentElement;
    const canvas = $('#pearMotionCanvas');
    const progressBar = $('#pearMotionProgress');
    const ctx = canvas?.getContext?.('2d', { alpha: true });
    const mediaBlocks = $$('.hero-visual,.feed-marquee,.bar-kinetic,.menu-carousel,.gallery-slider,.visit-kinetic');
    const microSelector = '.feed-track figure,.cocktail-grid article,.menu-card.menu-card-photo,.quick-links a,.review-card,.location-card,.kinetic-card';

    root.classList.remove('motion-ready','mynt-motion','reference-motion');
    root.classList.add('pear-motion');
    mediaBlocks.forEach(node => node.classList.add('pear-media'));

    let targetScroll = window.scrollY || 0;
    let easedScroll = targetScroll;
    let previousScroll = easedScroll;
    let velocity = 0;
    let raf = 0;
    let dirtyLayout = true;
    let metrics = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const clamp = (v,min,max) => Math.max(min,Math.min(max,v));
    const lerp = (a,b,t) => a + (b-a)*t;
    const smooth = t => { t = clamp(t,0,1); return t*t*(3-2*t); };
    const smoother = t => { t = clamp(t,0,1); return t*t*t*(t*(t*6-15)+10); };
    const set = (el,name,value) => el?.style.setProperty(name,value);

    function documentTop(el) {
      let top = 0;
      for (let node = el; node; node = node.offsetParent) top += node.offsetTop || 0;
      return top;
    }

    function rebuildMetrics() {
      width = Math.max(window.innerWidth,320);
      height = Math.max(window.innerHeight,1);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      metrics = sections.map((section,index) => {
        const top = documentTop(section);
        const h = Math.max(section.offsetHeight, height * .65);
        return { section,index,top,height:h,end:top+h };
      });
      if (canvas && ctx) {
        canvas.width = Math.round(width*dpr);
        canvas.height = Math.round(height*dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      dirtyLayout = false;
    }

    function chapterProgress(metric, scroll) {
      const start = metric.top - height * .82;
      const end = metric.end - height * .14;
      return clamp((scroll-start) / Math.max(end-start,1), 0, 1);
    }

    function drawCanvas(globalProgress, activeIndex, local) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0,0,width,height);
      const styles = getComputedStyle(root);
      const red = styles.getPropertyValue('--red').trim() || '#f20b0f';
      const blue = styles.getPropertyValue('--blue').trim() || '#17136f';
      const isLight = root.dataset.theme === 'light';

      // A restrained pinned-film layer: it never scrolls, only the chapter state changes.
      const alpha = isLight ? .045 : .085;
      const gx = width * (.18 + .64 * ((Math.sin((activeIndex+local)*1.13)+1)/2));
      const gy = height * (.22 + .52 * ((Math.cos((activeIndex+local)*.87)+1)/2));
      const radius = Math.max(width,height) * .72;
      const g = ctx.createRadialGradient(gx,gy,0,gx,gy,radius);
      g.addColorStop(0, hexToRgba(activeIndex % 2 ? blue : red, alpha));
      g.addColorStop(.46, hexToRgba(activeIndex % 2 ? red : blue, alpha*.42));
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,width,height);

      // Pear-like divider/progress rule, sampled from the current chapter colours.
      const lineY = Math.round(height * .78);
      ctx.strokeStyle = hexToRgba(activeIndex % 2 ? blue : red, isLight ? .12 : .18);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width*.04,lineY);
      ctx.lineTo(width*.96,lineY);
      ctx.stroke();
      ctx.fillStyle = hexToRgba(red,isLight ? .42 : .56);
      ctx.fillRect(width*.04,lineY-1,(width*.92)*globalProgress,2);
    }

    function hexToRgba(hex,alpha) {
      let h = String(hex).replace('#','').trim();
      if (h.length === 3) h = h.split('').map(c=>c+c).join('');
      const n = Number.parseInt(h,16);
      if (!Number.isFinite(n)) return `rgba(242,11,15,${alpha})`;
      return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${alpha})`;
    }

    function renderSection(metric, scroll) {
      const {section,index} = metric;
      const p = chapterProgress(metric,scroll);
      const enter = smoother(clamp(p/.34,0,1));
      const exit = smoother(clamp((p-.70)/.30,0,1));
      const hold = clamp(enter-exit,0,1);
      const dirName = section.dataset.motion || (index%2 ? 'left' : 'right');
      const side = dirName === 'left' ? -1 : dirName === 'right' ? 1 : (index%2 ? -1 : 1);
      const mobile = width <= 720;

      const y = (1-enter)*(mobile?70:126) - exit*(mobile?48:88);
      const x = dirName === 'up' ? (1-enter)*side*(mobile?18:36) : (1-enter)*side*(mobile?52:112) + exit*(-side)*(mobile?18:42);
      const scale = .94 + enter*.06 - exit*.018;
      const opacity = clamp(.14 + enter*.86 - exit*.52,.03,1);
      const blur = (1-enter)*(mobile?5:11) + exit*(mobile?2:5);
      set(section,'--pear-section-x',`${x.toFixed(2)}px`);
      set(section,'--pear-section-y',`${y.toFixed(2)}px`);
      set(section,'--pear-section-scale',scale.toFixed(4));
      set(section,'--pear-section-opacity',opacity.toFixed(4));
      set(section,'--pear-section-blur',`${blur.toFixed(2)}px`);
      set(section,'--pear-local',p.toFixed(4));

      $$('.slide-content:not([data-kinetic])',section).forEach((item,itemIndex) => {
        const delay = Math.min(.24,itemIndex*.055);
        const localEnter = smoother(clamp((p-delay)/Math.max(.34-delay,.08),0,1));
        const localExit = smoother(clamp((p-(.73+itemIndex*.018))/.25,0,1));
        const ix = (1-localEnter)*side*(mobile?28:72) + localExit*(-side)*(mobile?12:30);
        const iy = (1-localEnter)*(mobile?54:104) - localExit*(mobile?28:58);
        const iscale = .965 + localEnter*.035 - localExit*.012;
        set(item,'--pear-x',`${ix.toFixed(2)}px`);
        set(item,'--pear-y',`${iy.toFixed(2)}px`);
        set(item,'--pear-scale',iscale.toFixed(4));
        set(item,'--pear-opacity',clamp(.04+localEnter*.96-localExit*.62,0,1).toFixed(4));
        set(item,'--pear-blur',`${((1-localEnter)*(mobile?4:9)+localExit*3).toFixed(2)}px`);
      });

      $$(microSelector,section).forEach((item,itemIndex) => {
        const delay = Math.min(.38,.09+(itemIndex%9)*.035);
        const localEnter = smoother(clamp((p-delay)/Math.max(.40-delay,.08),0,1));
        const localExit = smoother(clamp((p-.78)/.22,0,1));
        const itemSide = itemIndex%2 ? 1 : -1;
        const throwY = clamp(velocity*.26,-34,34);
        const mx = (1-localEnter)*itemSide*(mobile?22:54);
        const my = (1-localEnter)*(mobile?44:86) + throwY - localExit*35;
        const rot = (1-localEnter)*itemSide*(mobile?1.8:4.4) + clamp(velocity*.012,-2.2,2.2);
        set(item,'--pear-micro-x',`${mx.toFixed(2)}px`);
        set(item,'--pear-micro-y',`${my.toFixed(2)}px`);
        set(item,'--pear-micro-r',`${rot.toFixed(2)}deg`);
        set(item,'--pear-micro-s',(.92+localEnter*.08-localExit*.018).toFixed(4));
        set(item,'--pear-micro-o',clamp(.08+localEnter*.92-localExit*.48,0,1).toFixed(4));
      });

      const media = $('.pear-media',section);
      if (media) {
        const clip = (1-enter)*(mobile?8:12) + exit*2;
        const mediaScale = 1.075-enter*.075 + Math.min(Math.abs(velocity)*.00014,.018);
        const mediaY = clamp(velocity*.16,-28,28) + (1-enter)*(mobile?22:44);
        set(media,'--pear-media-clip',`${clip.toFixed(2)}%`);
        set(media,'--pear-media-scale',mediaScale.toFixed(4));
        set(media,'--pear-media-y',`${mediaY.toFixed(2)}px`);
        set(media,'--pear-media-radius',`${lerp(28,12,enter).toFixed(2)}px`);
      }

      const headings = $$('h1,h2',section);
      headings.forEach((h,hi) => {
        const headingEnter = smoother(clamp((p-hi*.02)/.31,0,1));
        set(h,'--pear-heading-track',`${lerp(.02,-.055,headingEnter).toFixed(4)}em`);
        set(h,'--pear-heading-y',`${((1-headingEnter)*(mobile?26:48)).toFixed(2)}px`);
      });

      return {p,hold};
    }

    function renderHero(scroll) {
      const hero = $('.hero');
      if (!hero) return;
      const metric = metrics.find(m=>m.section===hero) || metrics[0];
      if (!metric) return;
      const p = chapterProgress(metric,scroll);
      const exit = smoother(clamp((p-.48)/.52,0,1));
      const copy = $('.hero-copy',hero);
      const visual = $('.hero-visual',hero);
      set(copy,'--pear-hero-y',`${(-exit*(width<=720?48:105)).toFixed(2)}px`);
      set(copy,'--pear-hero-scale',(1-exit*.04).toFixed(4));
      set(copy,'--pear-hero-opacity',(1-exit*.72).toFixed(4));
      set(visual,'--pear-hero-y',`${(exit*(width<=720?34:76)).toFixed(2)}px`);
      set(visual,'--pear-hero-scale',(1-exit*.055).toFixed(4));
      set(visual,'--pear-hero-opacity',(1-exit*.52).toFixed(4));
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (dirtyLayout) rebuildMetrics();

      targetScroll = window.scrollY || 0;
      // Pear-style chase: visual state follows the real scroll target every frame.
      const delta = targetScroll-easedScroll;
      easedScroll += delta * .085;
      if (Math.abs(delta)<.02) easedScroll = targetScroll;
      velocity = velocity*.82 + (easedScroll-previousScroll)*.18;
      previousScroll = easedScroll;

      const docMax = Math.max(document.documentElement.scrollHeight-height,1);
      const globalProgress = clamp(easedScroll/docMax,0,1);
      root.style.setProperty('--pear-global-progress',globalProgress.toFixed(5));
      root.style.setProperty('--pear-velocity',velocity.toFixed(3));
      root.style.setProperty('--pear-media-lag',`${clamp(-velocity*.045,-18,18).toFixed(2)}px`);
      if (progressBar) progressBar.style.transform = `scaleX(${globalProgress.toFixed(5)})`;

      let activeIndex = 0;
      let activeDistance = Infinity;
      let activeLocal = 0;
      metrics.forEach(metric => {
        const state = renderSection(metric,easedScroll);
        const center = metric.top + metric.height*.5;
        const dist = Math.abs(center-(easedScroll+height*.5));
        if (dist<activeDistance) { activeDistance=dist; activeIndex=metric.index; activeLocal=state.p; }
      });
      renderHero(easedScroll);
      drawCanvas(globalProgress,activeIndex,activeLocal);
    }

    const invalidate = () => { dirtyLayout = true; };
    window.addEventListener('resize',invalidate,{passive:true});
    window.addEventListener('load',invalidate,{once:true});
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(invalidate);
      sections.forEach(section=>ro.observe(section));
      window.addEventListener('pagehide',()=>ro.disconnect(),{once:true});
    }
    raf = requestAnimationFrame(frame);
    window.addEventListener('pagehide',()=>cancelAnimationFrame(raf),{once:true});
  }

  function initHeaderMerge() {
    const header = $('.site-header');
    const hero = $('.hero');
    if (!header || !hero) return;

    let raf = 0;
    let lastP = -1;

    const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
    const mix = (a,b,t) => a + (b-a)*t;
    const ease = t => 1 - Math.pow(1-t,3);

    const draw = () => {
      raf = 0;
      const vw = Math.max(window.innerWidth,320);
      const mobile = vw <= 720;
      const tablet = vw <= 1050;
      const baseH = mobile ? 66 : 76;

      /* Merge over the first ~190 px, similar to the supplied Teman Tumbuh reference. */
      const raw = clamp(window.scrollY / (mobile ? 78 : 112), 0, 1);
      const p = ease(raw);
      if (Math.abs(p-lastP) < .001 && lastP >= 0) return;
      lastP = p;

      const targetW = mobile ? vw - 20 : tablet ? vw - 34 : Math.min(980, vw - 64);
      const width = mix(vw,targetW,p);
      const top = mix(0,mobile ? 9 : 18,p);
      const height = mix(baseH,mobile ? 58 : 64,p);
      const radius = mix(0,mobile ? 24 : 999,p);
      const pad = mix(mobile ? 15 : vw*.032,mobile ? 13 : 23,p);
      const heroLift = mix(0,mobile ? -4 : -14,p);

      header.style.setProperty('--dock-width',`${width.toFixed(2)}px`);
      header.style.setProperty('--dock-top',`${top.toFixed(2)}px`);
      header.style.setProperty('--dock-height',`${height.toFixed(2)}px`);
      header.style.setProperty('--dock-radius',`${radius.toFixed(2)}px`);
      header.style.setProperty('--dock-pad',`${pad.toFixed(2)}px`);
      document.documentElement.style.setProperty('--merge-progress',p.toFixed(4));
      document.documentElement.style.setProperty('--hero-lift',`${heroLift.toFixed(2)}px`);

      document.body.classList.toggle('header-merging', raw > .035);
      document.body.classList.toggle('header-docked', raw > .72);
    };

    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener('scroll',request,{passive:true});
    window.addEventListener('resize',() => { lastP=-1; request(); },{passive:true});
    draw();
  }

  function initPhotoLightbox() {
    let touchStartX = 0, touchStartY = 0, suppressPhotoTapUntil = 0;
    document.addEventListener('touchstart', event => {
      const t = event.touches?.[0];
      if (!t) return;
      touchStartX = t.clientX; touchStartY = t.clientY;
    }, { passive:true });
    document.addEventListener('touchmove', event => {
      const t = event.touches?.[0];
      if (!t) return;
      if (Math.hypot(t.clientX-touchStartX,t.clientY-touchStartY) > 10) suppressPhotoTapUntil = Date.now()+420;
    }, { passive:true });
    const lightbox = $('#photoLightbox');
    const image = $('#photoLightboxImage');
    const titleNode = $('#photoLightboxTitle');
    const descriptionNode = $('#photoLightboxDescription');
    const sourceNode = $('#photoLightboxSource');
    const closeButton = $('#photoLightboxClose');
    if (!lightbox || !image || !titleNode || !descriptionNode || !sourceNode || !closeButton) return;

    let sourceImage = null;
    let closeTimer = 0;

    const isEligiblePhoto = img => {
      if (!(img instanceof HTMLImageElement)) return false;
      if (img.closest('#heroOrbit')) return false; // hero/orbit remains interactive, not popup-enabled
      if (img.hidden || !img.currentSrc && !img.src) return false;
      return Boolean(img.closest('.menu-photo, .feed-track, .bar-kinetic, .gallery-media, .visit-kinetic'));
    };

    const setOriginFrom = img => {
      const rect = img.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - window.innerWidth / 2;
      const dy = cy - window.innerHeight / 2;
      const scale = Math.max(.24, Math.min(.76, rect.width / Math.max(window.innerWidth * .7, 1)));
      const rotate = img.closest('[data-kinetic]') ? (dx / Math.max(window.innerWidth,1)) * 3.2 : 0;
      lightbox.style.setProperty('--lb-x', `${dx.toFixed(1)}px`);
      lightbox.style.setProperty('--lb-y', `${dy.toFixed(1)}px`);
      lightbox.style.setProperty('--lb-scale', scale.toFixed(3));
      lightbox.style.setProperty('--lb-rotate', `${rotate.toFixed(2)}deg`);
    };

    const open = img => {
      clearTimeout(closeTimer);
      sourceImage = img;
      setOriginFrom(img);
      image.src = img.currentSrc || img.src;
      image.alt = img.alt || 'STAIRS visual';
      const host = img.closest('[data-photo-title], [data-photo-description], [data-photo-description-id], .menu-card, .gallery-slide, figure, .location-card');
      const bilingualTitle = host ? (language === 'id' ? (host.dataset.photoTitleId || host.dataset.photoTitleEn) : (host.dataset.photoTitleEn || host.dataset.photoTitleId)) : '';
      const bilingualDescription = host ? (language === 'id' ? (host.dataset.photoDescriptionId || host.dataset.photoDescriptionEn) : (host.dataset.photoDescriptionEn || host.dataset.photoDescriptionId)) : '';
      const cardTitle = img.closest('.menu-card')?.querySelector('h3')?.textContent?.trim();
      const cardDescription = img.closest('.menu-card')?.querySelector('.menu-copy p')?.textContent?.trim();
      const slideTitle = img.closest('.gallery-slide')?.querySelector('h3')?.textContent?.trim();
      const slideDescription = img.closest('.gallery-slide')?.querySelector('.gallery-slide-copy p')?.textContent?.trim();
      const figureTitle = img.closest('figure')?.querySelector('figcaption strong')?.textContent?.trim();
      const figureDescription = img.closest('figure')?.querySelector('figcaption small')?.textContent?.trim();
      const title = host?.dataset.photoTitle || bilingualTitle || cardTitle || slideTitle || figureTitle || img.alt || 'STAIRS visual';
      const description = host?.dataset.photoDescription || bilingualDescription || cardDescription || slideDescription || figureDescription || (language === 'id' ? 'Visual STAIRS yang digunakan sebagai bagian dari pengalaman website.' : 'A STAIRS visual used as part of the website experience.');
      const source = host?.dataset.photoSource || img.closest('.gallery-slide')?.querySelector('.gallery-source')?.textContent?.trim() || '';
      titleNode.textContent = title;
      descriptionNode.textContent = description;
      sourceNode.textContent = source;
      sourceNode.hidden = !source;
      lightbox.classList.remove('is-closing');
      lightbox.setAttribute('aria-hidden','false');
      document.body.classList.add('lightbox-open');
      requestAnimationFrame(() => requestAnimationFrame(() => lightbox.classList.add('is-open')));
      closeButton.focus({ preventScroll:true });
    };

    const close = () => {
      if (!lightbox.classList.contains('is-open')) return;
      if (sourceImage?.isConnected) setOriginFrom(sourceImage);
      lightbox.classList.add('is-closing');
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden','true');
      document.body.classList.remove('lightbox-open');
      closeTimer = window.setTimeout(() => {
        lightbox.classList.remove('is-closing');
        image.removeAttribute('src');
        sourceImage?.focus?.({ preventScroll:true });
        sourceImage = null;
      }, reduceMotion ? 20 : 430);
    };

    document.addEventListener('click', event => {
      if (Date.now() < suppressPhotoTapUntil) return;
      const img = event.target.closest?.('img');
      if (!isEligiblePhoto(img)) return;
      event.preventDefault();
      event.stopPropagation();
      open(img);
    });

    $('[data-lightbox-close]', lightbox)?.addEventListener('click', close);
    closeButton.addEventListener('click', close);
    image.addEventListener('click', close);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
    });
    window.addEventListener('resize', () => {
      if (lightbox.classList.contains('is-open') && sourceImage?.isConnected) setOriginFrom(sourceImage);
    }, { passive:true });
  }

  function initPearTypesetting() {
    const roots = $$('.hero h1, .night-grid h2, .feed-head h2, .bar-head h2, .menu-head h2, .gallery-head h2, .links-head h2, .visit h2');

    // Mobile: keep headings as normal text. The desktop glyph split looks great
    // on wide screens, but on narrow Android/iPhone widths it creates hundreds
    // of inline nodes and can make wrapping look cramped/overlapped.
    if (mobilePerformance) {
      document.documentElement.classList.add('mobile-clean-type');
      roots.forEach(root => root.classList.add('pear-typeset-mobile'));
      return;
    }

    let globalIndex = 0;

    const splitTextNode = node => {
      const text = node.nodeValue || '';
      if (!text.trim()) return;
      const frag = document.createDocumentFragment();
      const tokens = text.split(/(\s+)/);
      tokens.forEach(token => {
        if (!token) return;
        if (/^\s+$/.test(token)) {
          frag.appendChild(document.createTextNode(token));
          return;
        }
        const word = document.createElement('span');
        word.className = 'pear-word';
        [...token].forEach(char => {
          const span = document.createElement('span');
          span.className = 'pear-char';
          span.textContent = char;
          span.style.setProperty('--pear-char-index', globalIndex++);
          word.appendChild(span);
        });
        frag.appendChild(word);
      });
      node.replaceWith(frag);
    };

    roots.forEach(root => {
      // When i18n/CMS replaces innerHTML the previous .pear-char nodes disappear,
      // so the heading is automatically split again on the next pass.
      if (root.querySelector('.pear-char')) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach(splitTextNode);
      root.classList.add('pear-typeset');
    });
  }

  function initHomeLogo() {
    const logo = $('#homeLogo') || $('.brand');
    if (!logo) return;

    logo.addEventListener('click', event => {
      event.preventDefault();

      // Close the mobile navigation as well, if it happens to be open.
      const mobileNav = $('#mobileNav');
      const menuToggle = $('.menu-toggle');
      mobileNav?.classList.remove('open');
      mobileNav?.setAttribute('aria-hidden', 'true');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mobile-nav-open');

      // Scroll the actual document to 0 rather than relying on #top.
      // This stays reliable while the header is morphing/floating.
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      // Keep the URL clean after using the logo as Home.
      if (location.hash) {
        try { history.replaceState(null, '', location.pathname + location.search); } catch {}
      }
    });
  }

  function initMobileNav() {
    const toggle = $('.menu-toggle');
    const nav = $('#mobileNav');
    if (!toggle || !nav) return;
    const closeButton = $('.mobile-close', nav);
    const setPageInert = active => {
      $$('main, .footer, .site-header').forEach(region => {
        if (active) region.setAttribute('inert','');
        else region.removeAttribute('inert');
      });
    };
    nav.setAttribute('inert','');
    const close = (restoreFocus = true) => {
      nav.classList.remove('open');
      nav.setAttribute('aria-hidden','true');
      nav.setAttribute('inert','');
      setPageInert(false);
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label', tr('openMenu'));
      document.body.classList.remove('mobile-nav-open');
      if (restoreFocus) toggle.focus({preventScroll:true});
    };
    const open = () => {
      nav.classList.add('open');
      nav.setAttribute('aria-hidden','false');
      nav.removeAttribute('inert');
      setPageInert(true);
      toggle.setAttribute('aria-expanded','true');
      toggle.setAttribute('aria-label', tr('closeMenu'));
      document.body.classList.add('mobile-nav-open');
      requestAnimationFrame(() => closeButton?.focus({preventScroll:true}));
    };
    toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
    closeButton?.addEventListener('click', () => close());
    $$('a', nav).forEach(link => link.addEventListener('click', () => close(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) close();
    });
  }

  function initMobileBookingDock() {
    const dock = $('#mobileBookingDock');
    if (!dock) return;
    const media = window.matchMedia('(max-width: 900px)');
    let raf = 0;
    const draw = () => {
      raf = 0;
      const blocked = document.body.classList.contains('mobile-nav-open') || document.body.classList.contains('lightbox-open');
      const visible = media.matches && window.scrollY > 360 && !blocked;
      dock.classList.toggle('is-visible', visible);
      dock.setAttribute('aria-hidden', String(!visible));
      if (visible) dock.removeAttribute('inert');
      else dock.setAttribute('inert','');
    };
    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(draw);
    };
    dock.setAttribute('inert','');
    window.addEventListener('scroll', request, {passive:true});
    window.addEventListener('resize', request, {passive:true});
    media.addEventListener?.('change', request);
    new MutationObserver(request).observe(document.body, {attributes:true, attributeFilter:['class']});
    draw();
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


  function updateAccessCarouselControls() {
    const viewport = $('.quick-links.access-carousel');
    const prev = $('#accessPrev');
    const next = $('#accessNext');
    const progress = $('#accessProgress');
    const count = $('#accessCount');
    if (!viewport || !prev || !next || !progress || !count) return;

    const cards = $$('a', viewport);
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const ratio = max > 1 ? Math.max(0, Math.min(1, viewport.scrollLeft / max)) : 0;
    const first = cards[0];
    const gap = 12;
    const step = first ? first.getBoundingClientRect().width + gap : Math.max(viewport.clientWidth, 1);
    const current = Math.min(cards.length, Math.floor((viewport.scrollLeft + step * .42) / Math.max(step,1)) + 1);
    const visible = Math.max(1, Math.round(viewport.clientWidth / Math.max(step,1)));
    const thumb = Math.min(100, Math.max(18, visible / Math.max(cards.length,1) * 100));
    const travel = Math.max(0, 100 - thumb);

    progress.style.width = `${thumb.toFixed(2)}%`;
    progress.style.transform = `translateX(${(ratio * travel / Math.max(thumb/100, .001)).toFixed(2)}%)`;
    count.textContent = `${String(current).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
    prev.disabled = viewport.scrollLeft <= 3;
    next.disabled = viewport.scrollLeft >= max - 3;
  }

  function initAccessCarousel() {
    const viewport = $('.quick-links.access-carousel');
    const prev = $('#accessPrev');
    const next = $('#accessNext');
    if (!viewport || !prev || !next || viewport.dataset.controlsReady === '1') return;
    viewport.dataset.controlsReady = '1';
    const move = direction => {
      const first = $('a', viewport);
      const amount = first ? (first.getBoundingClientRect().width + 12) * Math.max(1, Math.floor(viewport.clientWidth / Math.max(first.getBoundingClientRect().width + 12,1)) - 1) : viewport.clientWidth * .8;
      viewport.scrollBy({left: direction * amount, behavior:'smooth'});
    };
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    viewport.addEventListener('scroll', updateAccessCarouselControls, {passive:true});
    window.addEventListener('resize', updateAccessCarouselControls, {passive:true});
    requestAnimationFrame(updateAccessCarouselControls);
  }

  const safeRun = (name, task) => {
    try { return task(); }
    catch (error) { console.error(`[STAIRS] ${name} failed`, error); return null; }
  };

  safeRun('settings', applySettings);
  safeRun('appearance', applyAppearance);
  safeRun('theme', applyTheme);
  safeRun('language', applyLanguage);
  safeRun('header merge', initHeaderMerge);
  safeRun('pear typesetting', initPearTypesetting);
  safeRun('pear motion engine', initPearMotionEngine);
  safeRun('hero orbit cards', renderHeroOrbitCards);
  safeRun('hero orbit', initHeroOrbit);
  safeRun('cursor motion', initCursorMotion);
  safeRun('feed loop', initFeedLoop);
  safeRun('menu carousel', initMenuCarousel);
  safeRun('access carousel', initAccessCarousel);
  safeRun('photo lightbox', initPhotoLightbox);
  safeRun('home logo', initHomeLogo);
  safeRun('mobile navigation', initMobileNav);
  safeRun('mobile booking dock', initMobileBookingDock);
  safeRun('gallery autoplay', startGalleryAutoplay);
})();
