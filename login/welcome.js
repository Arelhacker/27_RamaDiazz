/* ================================================
   welcome.js — MABARLAH Main Page Logic
================================================ */

/* ---- DATA ---- */
const jokiData = [
  {tier:'warrior',name:'Warrior',sub:'Warrior I → Elite I',emoji:'⚔️',color:'#8a9bb5',
   features:['Booster berpengalaman','Estimasi 1–2 hari','Garansi tidak turun rank','Update progress via WA'],
   price:'Rp 25.000',priceNum:25000},
  {tier:'elite',name:'Elite',sub:'Elite I → Master I',emoji:'🛡️',color:'#4caf50',
   features:['Win rate 90%+','Estimasi 2–3 hari','Garansi tidak turun rank','Support 24/7'],
   price:'Rp 45.000',priceNum:45000},
  {tier:'master',name:'Master',sub:'Master I → GM I',emoji:'💫',color:'#2196f3',
   features:['Booster tier Master+','Estimasi 3–4 hari','Garansi tidak turun rank','Laporan screenshot'],
   price:'Rp 75.000',priceNum:75000},
  {tier:'grandmaster',name:'Grandmaster',sub:'GM I → Epic I',emoji:'👑',color:'#9c27b0',
   features:['Booster tier GM+','Estimasi 4–5 hari','Garansi tidak turun rank','Live update progres'],
   price:'Rp 120.000',priceNum:120000},
  {tier:'epic',name:'Epic',sub:'Epic I → Legend I',emoji:'🔥',color:'#ff9800',
   features:['Booster tier Epic+','Estimasi 5–7 hari','Garansi rank','Report tiap match'],
   price:'Rp 200.000',priceNum:200000},
  {tier:'legend',name:'Legend',sub:'Legend I → Mythic',emoji:'🌟',color:'#f5c518',
   features:['Booster tier Legend+','Estimasi 7–10 hari','Full garansi','Priority support'],
   price:'Rp 350.000',priceNum:350000},
  {tier:'mythic',name:'Mythic',sub:'Mythic → Mythic Honor',emoji:'💎',color:'#f44336',
   features:['Booster Mythic glory','Estimasi 10–14 hari','Garansi penuh','Dedicated booster'],
   price:'Rp 600.000',priceNum:600000},
  {tier:'mythic-honor',name:'Mythic Honor',sub:'MH → Immortal 1-100',emoji:'🏆',color:'#ff2d55',
   features:['Top booster kami','Estimasi custom','Rahasia terjaga','Full VIP service'],
   price:'Rp 1.500.000',priceNum:1500000},
  {tier:'immortal',name:'Immortal',sub:'Immortal TOP leaderboard',emoji:'⚡',color:'#00e5ff',
   features:['Booster rank 1–100','Estimasi sangat terbatas','Eksklusif & private','Konsultasi dulu'],
   price:'Nego',priceNum:0},
];

const topupData = [
  {amt:'86 💎',bonus:'',price:'Rp 18.000',popular:false,wa:'86+Diamond'},
  {amt:'172 💎',bonus:'',price:'Rp 36.000',popular:false,wa:'172+Diamond'},
  {amt:'257 💎',bonus:'+Bonus Event',price:'Rp 54.000',popular:false,wa:'257+Diamond'},
  {amt:'344 💎',bonus:'',price:'Rp 72.000',popular:false,wa:'344+Diamond'},
  {amt:'514 💎',bonus:'+Bonus Event',price:'Rp 105.000',popular:true,wa:'514+Diamond'},
  {amt:'706 💎',bonus:'',price:'Rp 145.000',popular:false,wa:'706+Diamond'},
  {amt:'1.048 💎',bonus:'+Free Skin',price:'Rp 210.000',popular:true,wa:'1048+Diamond'},
  {amt:'2.195 💎',bonus:'+Free Skin+Event',price:'Rp 430.000',popular:false,wa:'2195+Diamond'},
  {amt:'3.688 💎',bonus:'Best Value!',price:'Rp 700.000',popular:true,wa:'3688+Diamond'},
  {amt:'5.532 💎',bonus:'+Bundle Eksklusif',price:'Rp 1.050.000',popular:false,wa:'5532+Diamond'},
];

const testiData = [
  {name:'Rizal_Gaming',tier:'Mythic Honor',emoji:'🎮',stars:'★★★★★',text:'"Dari Legend 3 ke Mythic Honor cuma 10 hari! Boosternya pro banget, win rate 95%. Recommended banget buat yang mau push rank cepet!"'},
  {name:'Dewi_ML',tier:'Epic',emoji:'👸',stars:'★★★★★',text:'"Top up diamond-nya instan masuk, gak sampai 5 menit. Harganya lebih murah dari store resmi. Pasti order lagi!"'},
  {name:'BangsatML',tier:'Immortal',emoji:'⚡',stars:'★★★★★',text:'"Pertama agak ragu, tapi ternyata legit. Akun aman, rank naik sesuai janji. CS-nya responsif banget even tengah malem."'},
  {name:'ShadowKing',tier:'Mythic',emoji:'👑',stars:'★★★★☆',text:'"Joki Master ke Mythic selesai lebih cepat dari estimasi. Satu bintang dikurangi karena ada sedikit delay di awal, tapi overall bagus!"'},
  {name:'Putri_1234',tier:'Grandmaster',emoji:'🌸',stars:'★★★★★',text:'"Ini kedua kalinya order di sini. Konsisten kualitasnya. Booster ramah, update terus via WA. Harga worth banget!"'},
  {name:'NightWolf99',tier:'Legend',emoji:'🐺',stars:'★★★★★',text:'"Epic ke Legend done dalam 6 hari. Prosesnya smooth, admin fast response. Diamond top up juga murah. Full recommend!"'},
];

/* ---- RENDER ---- */
function renderJoki() {
  document.getElementById('jokiGrid').innerHTML = jokiData.map((j, i) => `
    <div class="joki-card reveal" style="animation-delay:${i * .05}s">
      <div class="joki-head">
        <div class="joki-tier">
          <span class="tier-dot" style="background:${j.color};box-shadow:0 0 8px ${j.color}60"></span>
          <span style="color:${j.color}">${j.name}</span>
        </div>
        <div class="joki-name">${j.name.toUpperCase()}</div>
        <div class="joki-sub">${j.sub}</div>
        <div class="tier-badge" style="background:${j.color}22;color:${j.color}">${j.emoji}</div>
      </div>
      <div class="joki-body">
        <ul class="joki-features">${j.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="joki-price">
          <span class="price-from">Mulai</span>
          <span class="price-num">${j.price}</span>
          <span class="price-unit">/tier</span>
        </div>
        <button class="btn-order" onclick="orderJoki(${i})">Order Sekarang ⚡</button>
      </div>
    </div>`).join('');
}

function renderTopup() {
  document.getElementById('topupGrid').innerHTML = topupData.map((t, i) => `
    <div class="topup-card ${t.popular ? 'popular' : ''} reveal" onclick="orderTopup(${i})">
      ${t.popular ? '<div class="popular-badge">Popular</div>' : ''}
      <div class="topup-icon">💎</div>
      <div class="topup-amt">${t.amt}</div>
      <div class="topup-price">${t.price}</div>
      ${t.bonus ? `<div class="topup-bonus">✦ ${t.bonus}</div>` : ''}
    </div>`).join('');
}

function renderTesti() {
  document.getElementById('testiGrid').innerHTML = testiData.map(t => `
    <div class="testi-card reveal">
      <div class="testi-head">
        <div class="testi-avatar" style="background:rgba(245,197,24,.1);border:1px solid rgba(245,197,24,.2)">${t.emoji}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-tier">Tier: ${t.tier}</div></div>
      </div>
      <div class="testi-stars">${t.stars}</div>
      <div class="testi-text">${t.text}</div>
    </div>`).join('');
}

/* ---- ORDER ---- */
let currentOrder = null;

function orderJoki(idx) {
  if (!isLoggedIn()) {
    showToast('⚠️ Silakan login atau daftar dulu!');
    setTimeout(() => { window.location.href = 'login/index.html?redirect=index.html'; }, 800);
    return;
  }
  const j = jokiData[idx];
  currentOrder = { type: 'joki', data: j };
  document.getElementById('orderTitle').textContent = `Joki Rank — ${j.name}`;
  document.getElementById('orderSub').textContent = j.sub;
  document.getElementById('orderBody').innerHTML = `
    <div class="order-row"><span>Layanan</span><span>Joki Rank ${j.name}</span></div>
    <div class="order-row"><span>Range Tier</span><span>${j.sub}</span></div>
    <div class="order-row"><span>Estimasi</span><span>${j.features[1]}</span></div>
    <div class="order-row"><span>Total Harga</span><span style="color:var(--gold);font-family:'Orbitron',monospace">${j.price}</span></div>`;
  document.getElementById('orderModal').classList.add('active');
}

function orderTopup(idx) {
  if (!isLoggedIn()) {
    showToast('⚠️ Silakan login atau daftar dulu!');
    setTimeout(() => { window.location.href = 'login/index.html?redirect=index.html'; }, 800);
    return;
  }
  const t = topupData[idx];
  currentOrder = { type: 'topup', data: t };
  document.getElementById('orderTitle').textContent = `Top Up Diamond`;
  document.getElementById('orderSub').textContent = t.amt;
  document.getElementById('orderBody').innerHTML = `
    <div class="order-row"><span>Nominal</span><span>${t.amt}</span></div>
    ${t.bonus ? `<div class="order-row"><span>Bonus</span><span style="color:var(--green)">${t.bonus}</span></div>` : ''}
    <div class="order-row"><span>Harga</span><span style="color:var(--gold);font-family:'Orbitron',monospace">${t.price}</span></div>`;
  document.getElementById('orderModal').classList.add('active');
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('active');
}

function confirmOrder() {
  if (!currentOrder) return;
  const user = getUser();
  let msg = '';
  if (currentOrder.type === 'joki') {
    const j = currentOrder.data;
    msg = `Halo Admin MABARLAH!%0A%0ASaya ingin order:%0A*Joki Rank ${j.name}*%0ARange: ${j.sub}%0AHarga: ${j.price}%0A%0ANama: ${user.name}%0AUsername: ${user.username}%0A%0AMohon konfirmasi pesanan saya. Terima kasih!`;
  } else {
    const t = currentOrder.data;
    msg = `Halo Admin MABARLAH!%0A%0ASaya ingin order:%0A*Top Up ${t.amt}*%0AHarga: ${t.price}%0A%0ANama: ${user.name}%0AUsername: ${user.username}%0A%0AMohon konfirmasi pesanan saya. Terima kasih!`;
  }
  closeOrderModal();
  window.open(`https://wa.me/6281328282930?text=${msg}`, '_blank');
  showToast('✅ Diarahkan ke WhatsApp admin!');
}

/* ---- AUTH HELPERS ---- */
function isLoggedIn() { return !!localStorage.getItem('mlSession'); }
function getUser() { return JSON.parse(localStorage.getItem('mlSession') || '{}'); }

function doLogout() {
  localStorage.removeItem('mlSession');
  updateAuthUI();
  showToast('👋 Sampai jumpa!');
}

function updateAuthUI() {
  const loggedIn = isLoggedIn();
  const user = getUser();
  document.getElementById('userBar').classList.toggle('visible', loggedIn);
  document.getElementById('authBtns').style.display = loggedIn ? 'none' : 'flex';
  if (loggedIn) document.getElementById('userChip').textContent = `⚡ ${user.name}`;
}

/* ---- TOAST ---- */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ---- CLOSE ORDER MODAL ON OVERLAY CLICK ---- */
document.getElementById('orderModal').addEventListener('click', function (e) {
  if (e.target === this) closeOrderModal();
});

/* ---- MOBILE MENU ---- */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');
const navRight   = document.getElementById('navRight');
menuToggle.addEventListener('click', function () {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
  navRight.classList.toggle('mobile-visible');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    navRight.classList.remove('mobile-visible');
  });
});

/* ---- SCROLL REVEAL ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---- INIT ---- */
renderJoki();
renderTopup();
renderTesti();
observeAll();
updateAuthUI();

// Fallback: force reveal after 3.5s for slow scrollers
setTimeout(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 3500);

// Show welcome toast if just logged in
const justLoggedIn = sessionStorage.getItem('justLoggedIn');
if (justLoggedIn) {
  sessionStorage.removeItem('justLoggedIn');
  const user = getUser();
  showToast(`⚡ Selamat datang, ${user.name}!`);
}
