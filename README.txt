PORTOFOLIO – UI/UX DESIGNER & PROJECT LEAD
==========================================

CARA MENJALANKAN
- Buka index.html langsung di browser, atau unggah seluruh folder ini ke hosting statis
  (GitHub Pages, Netlify, Vercel, dll). Tidak perlu instalasi apa pun.
- Font (Anton, Unbounded, Archivo) dimuat dari Google Fonts, jadi butuh koneksi internet.
  Tanpa internet halaman tetap jalan dengan font cadangan.
- portfolio-satu-file.html = versi yang sama dalam satu file (foto sudah tertanam), praktis
  untuk dikirim atau diunggah cepat.

ISI FOLDER
  index.html          struktur halaman: navbar, hero, section portofolio, footer
  css/style.css       seluruh gaya (warna ada di :root bagian paling atas)
  js/main.js          roda menu, slider, animasi, dan SEMUA ISI portofolio (array D)
  assets/foto.webp    fotomu (transparan). Ganti dengan file lain bernama sama

YANG PERLU KAMU GANTI (masih placeholder)
  index.html
    - "NAMA KAMU" (logo di navbar dan di footer), "NAMA" (teks besar I'M ...),
      "Nama Kamu" (paragraf perkenalan dan baris hak cipta footer), dan <title>.
    - Paragraf perkenalan (.hbio), kalimat di bawah "Ikuti saya" (.follow p), dan
      teks ajakan di pita lime footer (.fcta).
  js/main.js
    - Bagian PENDIDIKAN dan SERTIFIKASI di array D (teks bertanda "20XX", "Nama Kampus",
      "Nama Sertifikat", dst.).
    - Bagian PROYEK, PRESTASI, dan KEAHLIAN sudah berisi data dari CV-mu; periksa lagi
      tahun dan penulisannya.

MENGEDIT ISI PORTOFOLIO (js/main.js)
  Tiap menu di roda = satu entri di array D:
    { k:'NAMA MENU', d:'keterangan kecil di kanan atas', items:[ ...item... ] }
  Tiap item:
    { y:'tahun/label', g:'KATA BESAR LATAR', tags:['tag1','tag2'],
      t:'Judul', r:'Peran / keterangan', b:['poin 1','poin 2'] }
  Tambah "long:1" pada item kalau judulnya sangat panjang (huruf judul dikecilkan).

MENAMBAH MENU BARU DI RODA
  1. Tambah satu entri di array D (js/main.js).
  2. Tambah satu ikon SVG di array IC (urutannya harus sama dengan array D).
  3. Tambah link di navbar dan di footer (index.html):
     <a href="#portofolio" data-s="5">Nama Menu</a>   (angka data-s = urutan entri, mulai 0).
  Roda punya 9 slot; menu lebih dari 9 butuh penyesuaian jumlah slot (loop "j<9" di main.js).

FOOTER
  Ada di index.html, di dalam <footer class="foot">: pita ajakan, kolom Menu dan Kontak,
  dan baris hak cipta. Tahun hak cipta terisi otomatis. Link menu di footer ikut memutar
  roda dan membuka bagian yang dipilih.

LINK SOSIAL MEDIA
  Ada di index.html, di dalam <div class="soc"> (hero dan footer). Email memakai mailto:.

CATATAN
  - Putaran roda digerakkan JavaScript (berfungsi di semua browser modern).
  - Navigasi keyboard: panah kiri/kanan = ganti item; panah atas/bawah (saat fokus di roda)
    = ganti menu.
  - Ikon sosial media: Bootstrap Icons (lisensi MIT).
