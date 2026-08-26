(() => {
  const KEY = 'stairsDemoContentV1';
  const SESSION_KEY = 'stairsDemoAuth';
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
  const clone = x => JSON.parse(JSON.stringify(x));
  function load(){try{const d=JSON.parse(localStorage.getItem(KEY));return d?{settings:{...defaults.settings,...(d.settings||{})},menu:Array.isArray(d.menu)?d.menu:clone(defaults.menu),gallery:Array.isArray(d.gallery)?d.gallery:clone(defaults.gallery),reviews:Array.isArray(d.reviews)?d.reviews:clone(defaults.reviews)}:clone(defaults)}catch{return clone(defaults)}}
  let data=load();
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  const esc=(v='')=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const uid=p=>p+Math.random().toString(36).slice(2,9);
  let editing={type:null,id:null};

  function save(){localStorage.setItem(KEY,JSON.stringify(data));renderAll();showToast()}
  function showToast(title='Saved',small='Website content updated.') {const t=$('#toast');if(!t)return;t.querySelector('b').textContent=title;t.querySelector('small').textContent=small;t.classList.add('show');clearTimeout(showToast._t);showToast._t=setTimeout(()=>t.classList.remove('show'),2400)}
  function openDashboard(){ $('#loginScreen').hidden=true; $('#dashboard').hidden=false; requestAnimationFrame(()=>document.body.classList.add('dashboard-ready')); renderAll(); }
  function closeDashboard(){ sessionStorage.removeItem(SESSION_KEY); document.body.classList.remove('dashboard-ready'); $('#dashboard').hidden=true; $('#loginScreen').hidden=false; $('#demoPassword').value=''; }
  $('#loginForm').addEventListener('submit',e=>{e.preventDefault();const pw=$('#demoPassword').value.trim();if(pw==='stairs'){sessionStorage.setItem(SESSION_KEY,'1');$('#loginMessage').textContent='';openDashboard()}else{$('#loginMessage').textContent='Password belum tepat.';$('#loginForm').classList.remove('shake');void $('#loginForm').offsetWidth;$('#loginForm').classList.add('shake')}});
  $('#logoutBtn').addEventListener('click',closeDashboard);

  const titles={overview:'Overview',menu:'Menu',gallery:'Gallery',reviews:'Reviews',settings:'Settings'};
  $$('#sideNav .nav-item').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view)));
  function switchView(view){$$('#sideNav .nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$$('[data-view-panel]').forEach(p=>{const active=p.dataset.viewPanel===view;p.classList.toggle('active',active);if(active){p.querySelectorAll('.stagger').forEach((el,i)=>{el.style.setProperty('--delay',`${i*45}ms`);el.classList.remove('run');void el.offsetWidth;el.classList.add('run')})}});$('#viewTitle').textContent=titles[view]||view;document.body.classList.remove('side-open');}
  $('#mobileSideToggle').addEventListener('click',()=>document.body.classList.toggle('side-open'));
  $('#refreshPreview').addEventListener('click',()=>{data=load();renderAll();showToast('Refreshed','Loaded latest local content.')});

  function renderAll(){
    $('#menuCount').textContent=data.menu.length;$('#galleryCount').textContent=data.gallery.length;$('#reviewCount').textContent=data.reviews.length;
    renderMenu();renderGallery();renderReviews();renderSettings();
  }
  function renderMenu(){const tbody=$('#menuTable');tbody.innerHTML=data.menu.map(x=>`<tr><td><strong>${esc(x.name)}</strong></td><td><span class="tag">${esc(x.category)}</span></td><td>${esc(x.price)}</td><td class="muted-cell">${esc(x.description)}</td><td><div class="row-actions"><button type="button" data-edit-menu="${esc(x.id)}">Edit</button><button type="button" class="danger" data-del-menu="${esc(x.id)}">Delete</button></div></td></tr>`).join('')||'<tr><td colspan="5" class="empty-row">No menu items yet.</td></tr>';$$('[data-edit-menu]').forEach(b=>b.onclick=()=>openEditor('menu',b.dataset.editMenu));$$('[data-del-menu]').forEach(b=>b.onclick=()=>removeItem('menu',b.dataset.delMenu));}
  function renderGallery(){const wrap=$('#adminGallery');wrap.innerHTML=data.gallery.map(x=>`<article class="media-admin-card"><div class="media-thumb">${x.type==='video'?`<video src="${esc(x.url)}" muted playsinline></video><span>VIDEO</span>`:`<img src="${esc(x.url)}" alt="">`}</div><div class="media-admin-copy"><b>${esc(x.caption||'Untitled')}</b><small>${esc(x.type)}</small><div class="row-actions"><button type="button" data-edit-gallery="${esc(x.id)}">Edit</button><button type="button" class="danger" data-del-gallery="${esc(x.id)}">Delete</button></div></div></article>`).join('')||'<p class="empty-row">No media yet.</p>';$$('[data-edit-gallery]').forEach(b=>b.onclick=()=>openEditor('gallery',b.dataset.editGallery));$$('[data-del-gallery]').forEach(b=>b.onclick=()=>removeItem('gallery',b.dataset.delGallery));}
  function renderReviews(){const wrap=$('#adminReviewList');wrap.innerHTML=data.reviews.map(x=>`<article class="review-admin-card"><div><span class="stars-mini">${'★'.repeat(Math.max(1,Math.min(5,Number(x.rating)||5)))}</span><p>“${esc(x.text)}”</p><small>${esc(x.name)}</small></div><div class="row-actions"><button type="button" data-edit-review="${esc(x.id)}">Edit</button><button type="button" class="danger" data-del-review="${esc(x.id)}">Delete</button></div></article>`).join('')||'<p class="empty-row">No reviews yet.</p>';$$('[data-edit-review]').forEach(b=>b.onclick=()=>openEditor('reviews',b.dataset.editReview));$$('[data-del-review]').forEach(b=>b.onclick=()=>removeItem('reviews',b.dataset.delReview));}
  function renderSettings(){const f=$('#settingsForm');Object.entries(data.settings).forEach(([k,v])=>{if(f.elements[k])f.elements[k].value=v||''})}
  $('#saveSettingsBtn').addEventListener('click',()=>{const fd=new FormData($('#settingsForm'));for(const [k,v] of fd.entries())data.settings[k]=String(v).trim();save()});

  function removeItem(type,id){if(!confirm('Hapus item ini dari demo?'))return;data[type]=data[type].filter(x=>x.id!==id);save()}
  $('#addMenuBtn').onclick=()=>openEditor('menu');$('#addGalleryBtn').onclick=()=>openEditor('gallery');$('#addReviewBtn').onclick=()=>openEditor('reviews');
  function fieldsFor(type,item={}){
    if(type==='menu')return [field('name','Item name',item.name),field('category','Category',item.category),field('price','Price',item.price),field('description','Description',item.description,'textarea')];
    if(type==='gallery')return [selectField('type','Media type',item.type||'image',['image','video']),field('url','Media URL',item.url,'url'),field('caption','Caption',item.caption)];
    return [field('name','Display name',item.name),field('text','Review text',item.text,'textarea'),field('rating','Rating 1–5',item.rating||5,'number','1','5')];
  }
  function field(name,label,value='',type='text',min='',max=''){const tag=type==='textarea'?`<textarea name="${name}" rows="4" required>${esc(value)}</textarea>`:`<input name="${name}" type="${type}" value="${esc(value)}" ${min?`min="${min}"`:''} ${max?`max="${max}"`:''} required>`;return `<label><span>${label}</span>${tag}</label>`}
  function selectField(name,label,value,opts){return `<label><span>${label}</span><select name="${name}">${opts.map(o=>`<option value="${o}" ${o===value?'selected':''}>${o}</option>`).join('')}</select></label>`}
  function openEditor(type,id=null){editing={type,id};const item=id?data[type].find(x=>x.id===id):{};$('#dialogTitle').textContent=`${id?'Edit':'Add'} ${type==='reviews'?'review':type}`;$('#dialogFields').innerHTML=fieldsFor(type,item);const d=$('#editorDialog');if(typeof d.showModal==='function')d.showModal();else d.setAttribute('open','')}
  $('#dialogCancel').onclick=()=>$('#editorDialog').close();
  $('#editorForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),obj=Object.fromEntries(fd.entries());if(editing.type==='reviews')obj.rating=Math.max(1,Math.min(5,Number(obj.rating)||5));if(editing.id){obj.id=editing.id;data[editing.type]=data[editing.type].map(x=>x.id===editing.id?obj:x)}else{obj.id=uid(editing.type==='menu'?'m':editing.type==='gallery'?'g':'r');data[editing.type].push(obj)}$('#editorDialog').close();save()});

  if(sessionStorage.getItem(SESSION_KEY)==='1')openDashboard();
})();
