(function(){
  /* ===== IKON MENU (urutan = urutan di roda) ===== */
  var IC=['<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/></svg>',
          '<svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
          '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/></svg>',
          '<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a4 4 0 004 4M16 6h4v1a4 4 0 01-4 4M12 13v4M8 21h8M9.5 17h5"/></svg>',
          '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>'];

  /* ===== ISI PORTOFOLIO: edit di sini =====
     Tiap bagian (menu roda) punya daftar item. y=chip tahun, g=kata besar di latar, tags, t=judul, r=peran/keterangan, b=poin-poin */
  var D=[
   {k:'PROYEK',d:'Portofolio proyek 2025–2026',items:[
    {y:'2025',g:'KSR',tags:['UI/UX','Website'],t:'Company Profile Website – UKM Korps Sukarela (KSR) PMI',r:'UI/UX Designer &amp; Project Lead',
     b:['Merancang antarmuka dan pengalaman pengguna (UI/UX) situs web profil organisasi yang merepresentasikan identitas visual mitra secara konsisten.','Mengoordinasikan tim desain dalam mengeksekusi rancangan antarmuka serta menjaga sinergi kerja sama kelompok hingga proyek selesai.']},
    {y:'2026',g:'HMJTI',tags:['Web App','RBAC · OTP','Juara 3'],long:1,t:'Implementasi Sistem Penyimpanan dan Pengolahan Data HMJTI Berbasis Web',r:'Lead Developer &amp; System Designer – Proyek Kolaborasi Tim NAKAMA',
     b:['Merancang dan membangun arsitektur sistem informasi berbasis web terpusat untuk Himpunan Mahasiswa Jurusan Teknologi Informasi guna mengotomatisasi birokrasi persuratan digital, reservasi ruangan, dan transparansi keuangan.','Mengimplementasikan fitur keamanan sistem meliputi Role-Based Access Control (RBAC) antara admin dan pengguna, verifikasi One-Time Password (OTP), serta pencatatan jejak audit (audit trail).','Mengantarkan tim meraih Juara 3 pada ajang kompetisi inovasi aplikasi TIF Exhibition Politeknik Negeri Jember.']},
    {y:'2026',g:'GAME',tags:['Game','Godot Engine'],t:'Game Development KMIPN XIX',r:'Ketua Tim &amp; Game Developer',
     b:['Memimpin tim pengembang dalam merancang konsep permainan interaktif dari tahap ideasi hingga eksekusi prototipe untuk kompetisi tingkat politeknik se-Indonesia.','Merancang dan mengimplementasikan logika alur permainan (game logic) serta mekanik inti (core mechanics) menggunakan Godot Engine.','Memproduksi dan mengintegrasikan aset visual digital ke dalam game engine guna menciptakan pengalaman bermain yang responsif dan kohesif.']},
    {y:'2026',g:'PPL',tags:['Software','Kompetisi'],t:'GEMASTIK – Divisi Pengembangan Perangkat Lunak (PPL)',r:'Peserta Kompetisi &amp; Ketua Tim',
     b:['Berkompetisi dalam perancangan dan rekayasa solusi perangkat lunak yang berfokus pada fungsionalitas sistem terintegrasi, keandalan arsitektur aplikasi, dan pemecahan masalah riil.']}]},
   {k:'PENDIDIKAN',d:'Riwayat pendidikan',items:[
    {y:'20XX–Sekarang',g:'KAMPUS',tags:['Pendidikan Tinggi'],t:'Nama Kampus / Universitas',r:'Program Studi',
     b:['Ganti dengan fokus studi, IPK, atau mata kuliah yang relevan dengan UI/UX dan manajemen proyek.','Tambahkan organisasi atau kegiatan kampus yang kamu ikuti.']},
    {y:'20XX–20XX',g:'SMA',tags:['Pendidikan Menengah'],t:'Nama Sekolah',r:'Jurusan',
     b:['Ganti dengan keterangan singkat tentang jurusan atau kegiatan yang membentuk minatmu.']}]},
   {k:'SERTIFIKASI',d:'Sertifikat &amp; pelatihan',items:[
    {y:'20XX',g:'SERTIF',tags:['Sertifikat'],t:'Nama Sertifikat 1',r:'Penerbit',
     b:['Ganti dengan kompetensi yang dibuktikan oleh sertifikat ini.','Tambahkan ID kredensial atau tautan verifikasi bila ada.']},
    {y:'20XX',g:'SERTIF',tags:['Sertifikat'],t:'Nama Sertifikat 2',r:'Penerbit',
     b:['Ganti dengan kompetensi yang dibuktikan oleh sertifikat ini.']},
    {y:'20XX',g:'SERTIF',tags:['Pelatihan'],t:'Nama Pelatihan atau Bootcamp',r:'Penyelenggara',
     b:['Ganti dengan materi atau hasil yang kamu dapatkan dari pelatihan ini.']}]},
   {k:'PRESTASI',d:'Kompetisi &amp; penghargaan',items:[
    {y:'2026',g:'#3',tags:['Penghargaan','Inovasi Aplikasi'],t:'Juara 3 – TIF Exhibition Politeknik Negeri Jember',r:'Lead Developer &amp; System Designer – Tim NAKAMA',
     b:['Mengantarkan tim meraih Juara 3 pada ajang kompetisi inovasi aplikasi TIF Exhibition Politeknik Negeri Jember.','Karya: Implementasi Sistem Penyimpanan dan Pengolahan Data HMJTI Berbasis Web.']},
    {y:'2026',g:'KMIPN',tags:['Kompetisi','Tingkat Politeknik'],t:'Peserta KMIPN XIX – Game Development',r:'Ketua Tim &amp; Game Developer',
     b:['Memimpin tim pengembang menyusun prototipe permainan interaktif untuk kompetisi tingkat politeknik se-Indonesia.']},
    {y:'2026',g:'PPL',tags:['Kompetisi','Software'],t:'Peserta GEMASTIK – Divisi Pengembangan Perangkat Lunak (PPL)',r:'Peserta Kompetisi &amp; Ketua Tim',
     b:['Berkompetisi dalam perancangan dan rekayasa solusi perangkat lunak yang berfokus pada fungsionalitas sistem terintegrasi dan pemecahan masalah riil.']}]},
   {k:'KEAHLIAN',d:'Kemampuan utama',items:[
    {y:'Desain',g:'UI/UX',tags:['UI/UX','Antarmuka','Aset Visual'],t:'Desain &amp; Pengalaman Pengguna',r:'UI/UX Designer',
     b:['Merancang antarmuka dan pengalaman pengguna situs web yang konsisten dengan identitas visual mitra.','Memproduksi dan mengintegrasikan aset visual digital ke dalam game engine.']},
    {y:'Tim',g:'LEAD',tags:['Project Lead','Koordinasi'],t:'Kepemimpinan Proyek',r:'Project Lead &amp; Ketua Tim',
     b:['Mengoordinasikan tim desain dan menjaga sinergi kerja kelompok hingga proyek selesai.','Memimpin tim pengembang dari tahap ideasi hingga prototipe.']},
    {y:'Teknis',g:'DEV',tags:['Web','Godot Engine','RBAC · OTP'],t:'Pengembangan &amp; Perancangan Sistem',r:'System Designer &amp; Developer',
     b:['Merancang arsitektur sistem informasi berbasis web terpusat.','Menerapkan RBAC, verifikasi OTP, dan pencatatan jejak audit.','Membangun logika permainan dan mekanik inti menggunakan Godot Engine.']}]}
  ];

  var $=function(s){return document.querySelector(s)}, all=function(s){return [].slice.call(document.querySelectorAll(s))};
  var card=$('#card'), ring=$('#ring'), m=D.length, S=0, i=0, sl=[], slots=[], cur='b', rot=0, first=true;
  var pad=function(k){return '0'+(k+1)}, a0=function(){return matchMedia('(max-width:900px)').matches?90:0};

  /* roda */
  for(var j=0;j<9;j++){
    var s=document.createElement(j<m?'button':'span'); s.className='slot'+(j<m?'':' empty'); s.style.setProperty('--j',j);
    if(j<m){s.dataset.s=j; s.setAttribute('aria-label',D[j].k); s.innerHTML='<span class="in">'+IC[j]+'</span>'}
    else{s.setAttribute('aria-hidden','true'); s.innerHTML='<span class="in"></span>'}
    ring.appendChild(s); slots.push(s);
  }

  function navMark(){
    all('.links a').forEach(function(a){
      var on=cur==='b'?a.dataset.n==='b':cur==='p'?(a.dataset.s!==undefined&&+a.dataset.s===S):false;
      a.setAttribute('aria-current',on);
    });
  }
  function build(old){
    var items=D[S].items, box=$('#slides');
    box.innerHTML=''; sl=[];
    if(old){old.classList.remove('on'); old.classList.add('out'); box.appendChild(old); setTimeout(function(){old.remove()},320)}
    items.forEach(function(p){
      var d=document.createElement('div'); d.className='sl'; d.style.cssText='position:absolute;inset:0;pointer-events:none';
      d.innerHTML='<div class="gl"><i>'+p.g+'</i></div><div class="pj'+(p.long?' long':'')+'"><div class="pj-head"><div class="tags"><span class="y">'+p.y+'</span>'+
        p.tags.map(function(t){return '<span>'+t+'</span>'}).join('')+'</div><h2>'+p.t+'</h2><p class="role">'+p.r+'</p></div>'+
        '<div class="pj-body"><ul>'+p.b.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div></div>';
      box.appendChild(d); sl.push(d);
    });
    $('#sel').innerHTML='<button class="ar" data-d="-1" aria-label="Sebelumnya">◀</button>'+
      items.map(function(p,k){return '<button class="th" data-k="'+k+'" aria-label="Item '+pad(k)+'">'+pad(k)+'</button>'}).join('')+
      '<button class="ar" data-d="1" aria-label="Berikutnya">▶</button>';
  }
  function roll(el){el.classList.remove('roll'); void el.offsetWidth; el.classList.add('roll')}
  function item(k,dx){
    var n=D[S].items.length; i=(k+n)%n; card.style.setProperty('--dx',dx||1);
    var prev=sl.filter(function(e){return e.classList.contains('on')})[0];
    sl.forEach(function(e,j){e.classList.toggle('on',j===i)});
    if(prev&&prev!==sl[i]){prev.classList.add('out'); setTimeout(function(){prev.classList.remove('out')},320)}
    roll($('#big'));
    $('#big').textContent=pad(i);
    all('.th').forEach(function(e,j){e.setAttribute('aria-current',j===i)});
  }
  var ang=0, raf=0, started=false;
  function spinTo(target,dur){
    cancelAnimationFrame(raf);
    if(!dur||!started){started=true; ang=target; ring.style.setProperty('--r',ang+'deg'); return}
    var from=ang, t0=performance.now();
    (function f(t){
      var p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3);
      ang=from+(target-from)*e; ring.style.setProperty('--r',ang+'deg');
      if(p<1) raf=requestAnimationFrame(f); else {ang=target; ring.style.setProperty('--r',ang+'deg')}
    })(t0);
  }
  function sect(k,dx,nospin){
    var old=sl.filter(function(e){return e.classList.contains('on')})[0];
    card.style.setProperty('--dx',dx||1);
    var prevS=S; S=(k+m)%m; i=0; var d=D[S];
    build(old); roll($('#title'));
    var pl=$('.wpill'); pl.classList.remove('sw'); void pl.offsetWidth; pl.classList.add('sw');
    $('#title').textContent=d.k; $('#sd').innerHTML=d.d;
    $('#wn').textContent=pad(S); $('#wl').textContent=d.k; $('#wpic').innerHTML=IC[S];
    if(first){rot=-S*40; first=false}
    else if(nospin){rot=-S*40}
    else{var st=S-prevS; rot+=-st*40; var wbx=$('#wbox'); wbx.classList.remove('spin'); void wbx.offsetWidth; wbx.classList.add('spin')}
    spinTo(a0()+rot, nospin?0:650);
    slots.forEach(function(e,j){e.classList.toggle('act',j===S)});
    navMark(); item(0,dx);
  }

  var scrollRaf=0;
  function smoothScrollTo(targetEl,dur){
    if(!targetEl) return;
    cancelAnimationFrame(scrollRaf);
    var startY=window.pageYOffset||document.documentElement.scrollTop;
    var nav=$('.nav');
    var navH=nav?nav.offsetHeight:64;
    var targetY=0;
    if(targetEl.id==='beranda'){
      targetY=0;
    }else if(targetEl.id==='portofolio'){
      targetY=targetEl.getBoundingClientRect().top+startY;
    }else{
      targetY=Math.max(0,targetEl.getBoundingClientRect().top+startY-navH);
    }
    var diff=targetY-startY;
    if(Math.abs(diff)<2) return;

    var duration=dur||700, t0=performance.now(), cancelled=false;
    function onInterrupt(){ cancelled=true; cleanup(); }
    function cleanup(){
      window.removeEventListener('wheel',onInterrupt);
      window.removeEventListener('touchmove',onInterrupt);
    }
    window.addEventListener('wheel',onInterrupt,{passive:true});
    window.addEventListener('touchmove',onInterrupt,{passive:true});

    (function step(t){
      if(cancelled){ cleanup(); return; }
      var p=Math.min(1,(t-t0)/duration);
      var e=p<.5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;
      window.scrollTo(0,startY+diff*e);
      if(p<1){
        scrollRaf=requestAnimationFrame(step);
      }else{
        window.scrollTo(0,targetY);
        cleanup();
      }
    })(t0);
  }

  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]');
    if(a){
      var hash=a.getAttribute('href');
      var target=hash==='#'?document.body:document.querySelector(hash);
      if(target){
        e.preventDefault();
        if(a.dataset.s!==undefined){
          var k=+a.dataset.s; sect(k,k>=S?1:-1);
        }else if(a.classList.contains('hcta')){
          sect(0,S>0?-1:1);
        }
        smoothScrollTo(target,700);
        if(history.pushState) history.pushState(null,'',hash);
        return;
      }
    }
    var t=e.target.closest('[data-s],[data-k],[data-d]'); if(!t) return;
    if(t.dataset.s!==undefined){ var k=+t.dataset.s; sect(k,k>=S?1:-1); }
    else if(t.dataset.d && card.contains(t)) item(i+ +t.dataset.d,+t.dataset.d);
    else if(t.dataset.k!==undefined && card.contains(t)){ var q=+t.dataset.k; item(q,q>i?1:-1); }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowLeft') item(i-1,-1); if(e.key==='ArrowRight') item(i+1,1);
  });
  $('#wbox').addEventListener('keydown',function(e){
    if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault(); var d=e.key==='ArrowDown'?1:-1; sect(S+d,d)}
  });
  var x0=null; card.addEventListener('pointerdown',function(e){x0=e.clientX});
  card.addEventListener('pointerup',function(e){
    if(x0===null) return; var dx=e.clientX-x0; x0=null; if(Math.abs(dx)>50) item(i+(dx<0?1:-1),dx<0?1:-1);
  });
  var y0=null, wb=$('#wbox');
  wb.addEventListener('pointerdown',function(e){y0=[e.clientX,e.clientY]});
  wb.addEventListener('pointerup',function(e){
    if(!y0) return; var d=a0()?e.clientX-y0[0]:e.clientY-y0[1]; y0=null;
    if(Math.abs(d)>40) sect(S+(d<0?1:-1),d<0?1:-1);
  });
  matchMedia('(max-width:900px)').addEventListener('change',function(){sect(S,1,true)});

  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){cur=e.target.id==='beranda'?'b':e.target.id==='portofolio'?'p':'f'; navMark();}
  })},{threshold:.4});
  io.observe($('#beranda')); io.observe($('#portofolio')); io.observe($('#kontak'));
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
  sect(0,1);
})();
