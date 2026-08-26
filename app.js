(() => {
  'use strict';

  const CONTENT_KEY = 'stairsDemoContentV4';
  const LANG_KEY = 'stairsUiLanguage';
  const THEME_KEY = 'stairsUiTheme';

  const defaults = {
    settings: {
      heroTitleId: 'FOOD.<br><span>COCKTAILS.</span><br>LATE NIGHTS.',
      heroTitleEn: 'FOOD.<br><span>COCKTAILS.</span><br>LATE NIGHTS.',
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
      displayFont: 'Bricolage Grotesque',
      bodyFont: 'Manrope',
      accentColor: '#ef2d27',
      secondaryColor: '#2118a8',
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
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  const FONT_STACKS = {
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
  const getMenuImage = item => item.image || MENU_IMAGE_FALLBACKS[item.id] || CATEGORY_IMAGE_FALLBACKS[item.category] || 'assets/ig-cocktail.png';

  function applyAppearance() {
    const root = document.documentElement;
    const display = FONT_STACKS[data.settings.displayFont] || FONT_STACKS['Bricolage Grotesque'];
    const body = FONT_STACKS[data.settings.bodyFont] || FONT_STACKS['Manrope'];
    root.style.setProperty('--font-display', display);
    root.style.setProperty('--font-body', body);
    if (/^#[0-9a-f]{6}$/i.test(data.settings.accentColor || '')) root.style.setProperty('--red', data.settings.accentColor);
    if (/^#[0-9a-f]{6}$/i.test(data.settings.secondaryColor || '')) root.style.setProperty('--blue', data.settings.secondaryColor);
  }

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
      return `<article class="menu-card menu-card-photo" data-kinetic data-depth="${(.35 + (index%4)*.08).toFixed(2)}" data-drift-x="${driftX}" data-drift-y="${driftY}">
        <div class="menu-photo"><img src="${esc(image)}" alt="${esc(item.name)}" loading="lazy" referrerpolicy="no-referrer"><span>${esc(tr(item.category))}</span></div>
        <div class="menu-card-body">
          <div class="menu-index">${String(index+1).padStart(2,'0')}</div>
          <div class="menu-copy"><span>${esc(tr(item.category))}</span><h3>${esc(item.name)}</h3><p>${esc(description)}</p></div>
          <strong>${esc(item.price || '—')}</strong>
        </div>
      </article>`;
    }).join('') || `<p class="empty-state">${language === 'id' ? 'Belum ada menu di kategori ini.' : 'No menu items in this category yet.'}</p>`;
    bindImageFallbacks(grid);

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

  function renderFeed() {
    const track = $('#feedTrack');
    if (!track) return;
    const items = data.gallery.length ? data.gallery : defaults.gallery;
    track.innerHTML = items.map((item,index) => {
      const title = language === 'id' ? (item.titleId || item.title || `STAIRS ${index+1}`) : (item.titleEn || item.title || `STAIRS ${index+1}`);
      const media = item.type === 'video'
        ? `<video src="${esc(item.url)}" muted loop autoplay playsinline preload="metadata"></video>`
        : `<img src="${esc(item.url)}" alt="${esc(title)}" loading="lazy" referrerpolicy="no-referrer">`;
      return `<figure>${media}<figcaption>${esc(title)}</figcaption></figure>`;
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
    renderFeed();
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



  function initHeroOrbit() {
    const stage = $('#heroOrbit');
    if (!stage) return;
    const cards = $$('[data-orbit-card]', stage);
    if (!cards.length) return;

    const visual = $('#heroVisual');
    const deg = Math.PI / 180;
    let raf = 0;
    let active = true;
    let hovering = false;
    let lastTime = performance.now();

    // Orbit state: slow autonomous loop + mouse-driven camera/orbit control.
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
    let lastPointerX = null;
    let lastPointerY = null;
    let lastPointerAt = performance.now();

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const setPointerTarget = (event) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const localX = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const localY = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      const nx = localX * 2 - 1;
      const ny = localY * 2 - 1;

      pointerXTarget = nx;
      pointerYTarget = ny;

      // Moving horizontally actually turns the ring; vertical movement changes its camera tilt.
      pointerAngleTarget = nx * 1.18 + ny * 0.18;
      centerXTarget = nx * Math.min(46, rect.width * .065);
      centerYTarget = ny * Math.min(30, rect.height * .05);

      const now = performance.now();
      const elapsed = Math.max(8, now - lastPointerAt);
      if (lastPointerX !== null && lastPointerY !== null) {
        const dx = event.clientX - lastPointerX;
        const dy = event.clientY - lastPointerY;
        // Mouse velocity gives the ring a small inertial "throw", like the reference motion.
        orbitVelocity += clamp((dx + dy * .22) / elapsed * .0048, -.010, .010);
        orbitVelocity = clamp(orbitVelocity, -.015, .015);
      }
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerAt = now;
    };

    const enter = (event) => {
      hovering = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerAt = performance.now();
      setPointerTarget(event);
      stage.classList.add('is-orbiting');
    };

    const leave = () => {
      hovering = false;
      pointerAngleTarget = 0;
      pointerXTarget = 0;
      pointerYTarget = 0;
      centerXTarget = 0;
      centerYTarget = 0;
      lastPointerX = null;
      lastPointerY = null;
      stage.classList.remove('is-orbiting');
    };

    if (!reduceMotion && window.matchMedia?.('(pointer:fine)').matches) {
      stage.addEventListener('pointerenter', enter, { passive: true });
      stage.addEventListener('pointermove', setPointerTarget, { passive: true });
      stage.addEventListener('pointerleave', leave, { passive: true });
    }

    const render = (time = performance.now()) => {
      const dt = clamp(time - lastTime, 0, 34);
      lastTime = time;

      // Reference-like behavior: always gently circulating, but mouse position becomes the dominant control.
      const autoSpeed = hovering ? .000105 : .00034;
      orbitAngle += autoSpeed * dt + orbitVelocity * dt;
      orbitVelocity *= Math.pow(.86, dt / 16.67);

      const follow = 1 - Math.pow(.82, dt / 16.67);
      const centerFollow = 1 - Math.pow(.86, dt / 16.67);
      pointerAngle += (pointerAngleTarget - pointerAngle) * follow;
      pointerX += (pointerXTarget - pointerX) * follow;
      pointerY += (pointerYTarget - pointerY) * follow;
      centerX += (centerXTarget - centerX) * centerFollow;
      centerY += (centerYTarget - centerY) * centerFollow;

      const rect = stage.getBoundingClientRect();
      const rx = Math.max(124, Math.min(rect.width * .35, 242));
      const ryBase = Math.max(100, Math.min(rect.height * .31, 186));
      // Mouse Y squashes / opens the ellipse slightly, giving a camera-tilt feel.
      const ry = ryBase * (1 - Math.abs(pointerY) * .09);
      const tilt = pointerY * .44;
      const sideLean = pointerX * .13;

      stage.style.setProperty('--orbit-cx', `${centerX.toFixed(2)}px`);
      stage.style.setProperty('--orbit-cy', `${centerY.toFixed(2)}px`);
      stage.style.setProperty('--orbit-tilt', `${(pointerY * 6).toFixed(2)}deg`);
      stage.style.setProperty('--orbit-lean', `${(pointerX * 4).toFixed(2)}deg`);

      cards.forEach((card, index) => {
        const base = (Number(card.dataset.angle) || index * (360 / cards.length)) * deg;
        const radius = clamp(Number(card.dataset.radius) || 1, .46, 1.10);
        const angle = base + orbitAngle + pointerAngle;

        // Elliptical ring, with a subtle mouse-controlled plane tilt.
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = cos * rx * radius + centerX + sin * sideLean * 22;
        const y = (sin * ry + cos * tilt * 52) * radius + centerY;

        // Bottom/front cards are intentionally much larger, matching the showreel reference.
        const depthPhase = Math.sin(angle + tilt * .35);
        const depth = (depthPhase + 1) / 2;
        const depthEase = depth * depth * (3 - 2 * depth);
        const scale = .55 + depthEase * .72;
        const rotation = cos * 2.2 + pointerX * 1.4 + (index % 2 ? .45 : -.45);
        const opacity = .42 + depthEase * .58;
        const blur = (1 - depthEase) * 1.15;
        const brightness = .72 + depthEase * .34;

        card.style.setProperty('--ox', `${x.toFixed(2)}px`);
        card.style.setProperty('--oy', `${y.toFixed(2)}px`);
        card.style.setProperty('--os', scale.toFixed(3));
        card.style.setProperty('--or', `${rotation.toFixed(2)}deg`);
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = `saturate(${(.78 + depthEase * .38).toFixed(2)}) brightness(${brightness.toFixed(2)}) blur(${blur.toFixed(2)}px)`;
        card.style.zIndex = String(6 + Math.round(depthEase * 48));
      });

      // Make the center label breathe with the camera instead of blocking the negative space.
      const core = $('.orbit-core', stage);
      if (core) {
        core.style.setProperty('--core-scale', (1 + Math.abs(pointerX) * .025).toFixed(3));
      }
    };

    if (reduceMotion) {
      render(performance.now());
      cards.forEach(card => {
        card.style.filter = 'none';
        card.style.opacity = '1';
      });
      return;
    }

    const loop = time => {
      if (active) render(time);
      else lastTime = time;
      raf = requestAnimationFrame(loop);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        active = Boolean(entries[0]?.isIntersecting);
        if (active) lastTime = performance.now();
      }, { threshold: 0 });
      observer.observe(stage);
      window.addEventListener('pagehide', () => observer.disconnect(), { once:true });
    }

    raf = requestAnimationFrame(loop);
    window.addEventListener('pagehide', () => cancelAnimationFrame(raf), { once:true });
  }


  function initFeedLoop() {
    const track = $('.feed-track');
    if (!track || track.dataset.loopReady === '1') return;
    track.dataset.loopReady = '1';
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
  safeRun('appearance', applyAppearance);
  safeRun('theme', applyTheme);
  safeRun('language', applyLanguage);
  safeRun('header merge', initHeaderMerge);
  safeRun('slide motion', initSlideMotion);
  safeRun('kinetic scroll', initKineticScroll);
  safeRun('hero orbit', initHeroOrbit);
  safeRun('cursor motion', initCursorMotion);
  safeRun('feed loop', initFeedLoop);
  safeRun('mobile navigation', initMobileNav);
  safeRun('gallery autoplay', startGalleryAutoplay);
})();
