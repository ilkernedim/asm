// Shared header & footer for all pages.
// Each page sets data-active on <body> to highlight the current top-level menu item.
(function () {
  var topbar = `
    <div class="topbar">
      <div class="container topbar-inner">
        <a href="index.html" class="brand">
          <img src="images/Logo_of_Ministry_of_Health_(Turkey).png" alt="T.C. Sağlık Bakanlığı" class="brand-logo">
          <div class="brand-text">
            <h1>Zerdalitepe Aile Sağlığı Merkezi</h1>
            <p>T.C. Sağlık Bakanlığı &middot; Mamak / Ankara</p>
          </div>
        </a>
        <a href="tel:+903125141710" class="topbar-contact">
          <div class="icon">☎</div>
          <div>
            <em>Telefon</em>
            <strong>0312 514 17 10</strong>
          </div>
        </a>
      </div>
    </div>`;

  var menu = [
    { key: 'home',     label: 'Ana Sayfa',     href: 'index.html' },
    { key: 'kurumsal', label: 'Kurumsal',      sub: [
        ['Hakkımızda', 'hakkimizda.html'],
        ['Hizmet Standartları', 'hizmet-standartlari.html'],
        ['Öncelikli Hastalar', 'oncelikli-hastalar.html']
    ]},
    { key: 'kadro',    label: 'Kadromuz',      sub: [
        ['Aile Hekimlerimiz', 'aile-hekimlerimiz.html'],
        ['Aile Sağlığı Çalışanlarımız', 'aile-sagligi-calisanlari.html'],
        ['Yardımcı Personellerimiz', 'yardimci-personel.html']
    ]},
    { key: 'dosyalar', label: 'Dosyalar',      sub: [
        ['ASM Talimatları', 'asm-talimatlari.html'],
        ['Yararlı Dosyalar', 'yararli-dosyalar.html'],
        ['İlk Yardım', 'ilk-yardim.html'],
        ['Sigaranın Zararları', 'sigaranin-zararlari.html']
    ]},
    { key: 'saglik',   label: 'Sağlık Üzerine', sub: [
        ['Bebeğinizin Aşı Takvimi', 'asi-takvimi.html'],
        ['Aktiviteye Göre Harcanan Kalori', 'kalori-hesaplama.html'],
        ['Yetişkin Bel Çevresi Hesaplama', 'bel-cevresi.html'],
        ['Çocuk Beden Kitle İndeksi', 'cocuk-bki.html'],
        ['Yetişkin Beden Kitle İndeksi', 'yetiskin-bki.html'],
        ['Persentil Eğrisi', 'persentil.html'],
        ['Gebelik Dönemi', 'gebelik.html'],
        ['Yenidoğan', 'yenidogan.html']
    ]},
    { key: 'linkler',  label: 'Bağlantılar',   sub: [
        ['T.C. Sağlık Bakanlığı', 'https://www.saglik.gov.tr'],
        ['Ankara Valiliği', 'https://www.ankara.gov.tr'],
        ['Ankara İl Sağlık Müdürlüğü', 'https://ankaraism.saglik.gov.tr'],
        ['Tahlil-Tetkik Sorgu (e-Nabız)', 'https://enabiz.gov.tr'],
        ['Aile Hekimim Kim?', 'https://www.turkiye.gov.tr/aile-hekim-bilgisi'],
        ['MHRS Randevu Al', 'https://www.hastanerandevu.gov.tr']
    ]},
    { key: 'duyuru',   label: 'Duyurular',     href: 'duyurular.html' },
    { key: 'galeri',   label: 'Galeri',        href: 'galeri.html' },
    { key: 'iletisim', label: 'İletişim',      href: 'iletisim.html' }
  ];

  var active = document.body.getAttribute('data-active') || 'home';

  function renderMenu() {
    return menu.map(function (m) {
      var isActive = m.key === active ? ' active' : '';
      if (m.sub) {
        var items = m.sub.map(function (s) {
          var ext = /^https?:/.test(s[1]) ? ' target="_blank" rel="noopener"' : '';
          return '<li><a href="' + s[1] + '"' + ext + '>' + s[0] + '</a></li>';
        }).join('');
        return '<li class="' + isActive.trim() + '">' +
               '<a href="#">' + m.label + ' <span class="caret">▼</span></a>' +
               '<ul class="submenu">' + items + '</ul></li>';
      }
      return '<li class="' + isActive.trim() + '"><a href="' + m.href + '">' + m.label + '</a></li>';
    }).join('');
  }

  var header = `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <button class="mobile-toggle" aria-label="Menü">☰</button>
          <ul class="nav-list">${renderMenu()}</ul>
        </nav>
      </div>
    </header>`;

  var footer = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h5>Zerdalitepe ASM</h5>
            <p>Mamak ilçesi Zerdalitepe bölgesinde aile hekimliği hizmeti veren birinci basamak sağlık kuruluşudur.</p>
          </div>
          <div>
            <h5>Hızlı Bağlantılar</h5>
            <ul>
              <li><a href="hakkimizda.html">Hakkımızda</a></li>
              <li><a href="aile-hekimlerimiz.html">Hekimlerimiz</a></li>
              <li><a href="duyurular.html">Duyurular</a></li>
              <li><a href="iletisim.html">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h5>Faydalı Linkler</h5>
            <ul>
              <li><a href="https://enabiz.gov.tr" target="_blank" rel="noopener">e-Nabız</a></li>
              <li><a href="https://www.hastanerandevu.gov.tr" target="_blank" rel="noopener">MHRS Randevu</a></li>
              <li><a href="https://www.saglik.gov.tr" target="_blank" rel="noopener">Sağlık Bakanlığı</a></li>
              <li><a href="https://ankaraism.saglik.gov.tr" target="_blank" rel="noopener">Ankara İSM</a></li>
            </ul>
          </div>
          <div>
            <h5>İletişim</h5>
            <p>Yeşilbayır Mah.<br>1768. Sk. No:59/14<br>06270 Mamak / Ankara</p>
            <p style="margin-top: 10px;">Hafta İçi: 08.00 - 17.00</p>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; <span id="year"></span> Zerdalitepe Aile Sağlığı Merkezi - Tüm hakları saklıdır.
        </div>
      </div>
    </footer>`;

  var headerHolder = document.getElementById('site-header');
  var footerHolder = document.getElementById('site-footer');
  if (headerHolder) headerHolder.innerHTML = topbar + header;
  if (footerHolder) footerHolder.innerHTML = footer;

  // Mobile toggle
  var toggle = document.querySelector('.mobile-toggle');
  var navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', function () { navList.classList.toggle('open'); });
  }
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
