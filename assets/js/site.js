/* ============================================================
   HÜNERLİ ELLER — Ortak betik: ikonlar, menü, footer,
   scroll animasyonları, slider, yemek kartı render
   ============================================================ */

/* ---------- İletişim sabitleri (tek yerden güncellenir) ---------- */
const HE_INFO = {
  name: "Hünerli Eller",
  tagline: "Kadın Eliyle • Ev Lezzeti",
  phoneDisplay: "0535 889 93 62",
  phoneTel: "+905358899362",
  whatsapp: "905358899362",
  instagram: "https://www.instagram.com/delicehunerlieller/",
  instagramHandle: "@delicehunerlieller",
  email: "suna710671@gmail.com",
  addressLine1: "Atatürk Bulvarı, Mimar Sinan Mah.",
  addressLine2: "Delice / Kırıkkale — 71700",
  addressFull: "Atatürk Bulvarı, Mimar Sinan Mah., 71700 Delice / Kırıkkale",
  mapQuery: "Hünerli Eller Delice Kırıkkale",
  lat: "39.945081",
  lng: "34.031375",
  mapsUrl:    "https://maps.app.goo.gl/JE4VUbuCgqC4bXRz9",
  mapsNavUrl: "https://www.google.com/maps/dir/?api=1&destination=39.945081%2C34.031375&travelmode=driving",
  waNavMsg:   "Merhaba! Hünerli Eller'e gelmek istiyorum, yol tarifi alabilir miyim? 📍 Google Maps: https://maps.app.goo.gl/JE4VUbuCgqC4bXRz9"
};

/* ---------- İkon kütüphanesi ---------- */
const ICONS = {
  soup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M6 19h12"/><path d="M9 7c0-1 .8-1.5.8-2.5S9 2.5 9 2.5"/><path d="M12 7c0-1 .8-1.5.8-2.5S12 2.5 12 2.5"/><path d="M15 7c0-1 .8-1.5.8-2.5S15 2.5 15 2.5"/></svg>',
  stew: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h14v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"/><path d="M3 9h18"/><path d="M7 9V6.5"/><path d="M17 9V6.5"/><path d="M12 9V5"/></svg>',
  rice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 0 16 0Z"/><path d="M4 13c1-4 4-6 8-6s7 2 8 6"/><circle cx="9" cy="10" r=".6" fill="currentColor"/><circle cx="13" cy="9.5" r=".6" fill="currentColor"/><circle cx="15.5" cy="11" r=".6" fill="currentColor"/></svg>',
  grill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="6" rx="1"/><path d="M7 6V4M11 6V4M15 6V4M17 12l1.5 7M7 12 5.5 19"/></svg>',
  dough: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M9 9c1 .6 2 .6 3 0M14 11c1 .6 2 .4 3-.2M8 14c1.2.8 2.4.6 3.4-.2"/></svg>',
  toast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a2 2 0 0 1-2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1-2-2V9Z"/></svg>',
  dessert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10h14l-1.5 9h-11L5 10Z"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M12 3v3"/><circle cx="12" cy="2.5" r="1" fill="currentColor"/></svg>',
  drink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12l-1.5 16a1 1 0 0 1-1 .9h-7a1 1 0 0 1-1-.9L6 4Z"/><path d="M6.7 9h10.6"/><path d="M14 4l-1 5"/></svg>',
  spoon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13v8"/><ellipse cx="12" cy="7" rx="4" ry="5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M17 21h4v-4M14 21v.01"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16Z"/><path d="M4 21c4-7 8-9 12-10"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.6-9.3-9C1.2 8 2.6 4.8 6 4.8c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.4 0 4.8 3.2 3.3 6.2C19 15.4 12 20 12 20Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
};
function icon(name){ return ICONS[name] || ""; }

/* ---------- Marka logosu ---------- */
function brandMark(){
  return `<span class="brand-mark" aria-hidden="true"><img src="assets/img/logo.png" alt="Hünerli Eller logosu"></span>`;
}

/* ---------- Üst menü ---------- */
function buildNav(active){
  const links = [
    { href: "index.html", label: "Ana Sayfa", key: "home" },
    { href: "menu.html", label: "Menü", key: "menu" },
    { href: "tarifler.html", label: "Tarifler", key: "recipes" },
    { href: "iletisim.html", label: "İletişim", key: "contact" }
  ];
  const linkHtml = links.map(l =>
    `<a href="${l.href}" class="${active===l.key?'active':''}">${l.label}</a>`
  ).join("");
  return `
  <header class="nav" id="siteNav">
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="${HE_INFO.name} ana sayfa">
        ${brandMark()}
        <span class="brand-name"><b>Hünerli Eller</b><span>Ev Yemekleri</span></span>
      </a>
      <nav class="nav-links" id="navLinks" aria-label="Ana menü">
        ${linkHtml}
        <span class="nav-cta"><a class="btn btn-primary" href="menu.html">${icon('qr')} QR Menü</a></span>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Menüyü aç/kapat" aria-expanded="false">${icon('menu')}</button>
    </div>
  </header>`;
}

/* ---------- Footer ---------- */
function buildFooter(){
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" style="margin-bottom:18px">
            ${brandMark()}
            <span class="brand-name"><b>Hünerli Eller</b><span>Kadın Eliyle • Ev Lezzeti</span></span>
          </a>
          <p>Kırıkkale Delice'de, kadın girişimcilerin emeğiyle hazırlanan sıcacık ev yemekleri. Bol sulu yemekler, fırın lezzetleri ve tarifsiz damak tatları.</p>
          <div class="footer-note">${icon('info')} <b>Menümüz her gün değişir.</b> Aradığınız bir yemek varsa lütfen önceden arayınız.</div>
        </div>
        <div>
          <h4>Keşfet</h4>
          <ul>
            <li><a href="index.html">Ana Sayfa</a></li>
            <li><a href="menu.html">Dijital Menü</a></li>
            <li><a href="tarifler.html">Tarifler</a></li>
            <li><a href="iletisim.html">İletişim</a></li>
          </ul>
        </div>
        <div>
          <h4>İletişim</h4>
          <ul>
            <li><a href="${HE_INFO.mapsUrl}" target="_blank" rel="noopener">${icon('pin')} ${HE_INFO.addressLine1}, ${HE_INFO.addressLine2}</a></li>
            <li><a href="tel:${HE_INFO.phoneTel}">${icon('phone')} ${HE_INFO.phoneDisplay}</a></li>
            <li><a href="https://wa.me/${HE_INFO.whatsapp}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp ile yazın</a></li>
            <li><a href="${HE_INFO.instagram}" target="_blank" rel="noopener">${icon('instagram')} ${HE_INFO.instagramHandle}</a></li>
            <li><a href="mailto:${HE_INFO.email}">${icon('mail')} ${HE_INFO.email}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Hünerli Eller — Kırıkkale Delice Ev Yemekleri.</span>
        <span>Kadın emeğiyle hazırlanmıştır 🤍</span>
        <span><a href="tel:${HE_INFO.phoneTel}" style="color:inherit">${HE_INFO.phoneDisplay}</a></span>
      </div>
    </div>
  </footer>`;
}

/* ---------- Yüzen WhatsApp ---------- */
function buildWhatsAppFloat(){
  return `<a class="wa-float" href="https://wa.me/${HE_INFO.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ile iletişime geçin">${icon('whatsapp')}</a>`;
}

/* ---------- Günlük menü uyarı şeridi ---------- */
function buildDailyBanner(withBtn){
  return `
  <div class="daily-banner reveal">
    <span class="di">${icon('info')}</span>
    <p><b>Menümüz her gün değişmektedir.</b> Özellikle gelmek istediğiniz bir yemek varsa, o gün menüde olup olmadığını öğrenmek için lütfen bizi önceden arayınız.</p>
    <a class="btn btn-ghost" href="tel:${HE_INFO.phoneTel}">${icon('phone')} ${HE_INFO.phoneDisplay}</a>
  </div>`;
}

/* ---------- Yemek görseli (placeholder + opsiyonel foto) ---------- */
function dishMedia(dish){
  const cat = HE.CATEGORIES.find(c => c.id === dish.cat);
  const grad = cat ? cat.grad : "linear-gradient(135deg,var(--terra-soft),var(--terra))";
  const ic = cat ? icon(cat.icon) : icon('spoon');
  // Yemeğe göre hafif ton/parlaklık farkı (tek tip görünmesin)
  let h = 0; for (const ch of dish.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const bright = (0.9 + (h % 18) / 100).toFixed(2);
  const sat = (0.95 + ((h >> 4) % 22) / 100).toFixed(2);
  const phStyle = `--ph-grad:${grad}; filter:brightness(${bright}) saturate(${sat})`;
  let imgTag = "";
  if (dish.img){
    imgTag = `<img src="${dish.img}" alt="${dish.name}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.remove()">`;
  }
  return `<div class="dish-media"><div class="ph" style="${phStyle}">${ic}</div>${imgTag}</div>`;
}

/* ---------- Alerjen etiketleri ---------- */
function allergenTags(dish){
  if (!dish.allergens || !dish.allergens.length) return "";
  const tags = dish.allergens.map(a => {
    const al = HE.ALLERGENS[a];
    return al ? `<span class="allergen-tag"><span class="dot"></span>${al.label}</span>` : "";
  }).join("");
  return `<div class="allergen-tags">${tags}</div>`;
}

/* ---------- Yemek kartı (menü için) ---------- */
function dishCard(dish){
  const ing = dish.ingredients ? dish.ingredients.join(" · ") : "";
  return `
  <article class="dish-card card reveal">
    <a href="urun.html?id=${dish.id}" class="dish-card-link" aria-label="${dish.name} detay">
      ${dishMedia(dish)}
    </a>
    <div class="dish-body">
      <h3><a href="urun.html?id=${dish.id}">${dish.name}</a></h3>
      <p class="dish-desc">${dish.desc || ""}</p>
      ${ing ? `<p class="dish-ing"><span>İçindekiler:</span> ${ing}</p>` : ""}
      ${allergenTags(dish)}
    </div>
  </article>`;
}

/* ---------- Scroll reveal ---------- */
function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e=>e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(e=>io.observe(e));
}

/* ---------- Nav davranışı ---------- */
function initNav(){
  const nav = document.getElementById("siteNav");
  const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 20); };
  onScroll(); window.addEventListener("scroll", onScroll, { passive:true });
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links){
    toggle.addEventListener("click", ()=>{
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>links.classList.remove("open")));
  }
}

/* ---------- Sayfa iskeletini kur ---------- */
function mountChrome(activeKey){
  const navSlot = document.getElementById("nav-slot");
  const footSlot = document.getElementById("footer-slot");
  if (navSlot) navSlot.innerHTML = buildNav(activeKey);
  if (footSlot) footSlot.innerHTML = buildFooter() + buildWhatsAppFloat();
  initNav();
}

if (typeof window !== "undefined"){
  window.HEUI = { ICONS, icon, buildNav, buildFooter, buildWhatsAppFloat, buildDailyBanner,
    dishMedia, allergenTags, dishCard, initReveal, initNav, mountChrome, HE_INFO };
}
