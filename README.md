# STAIRS — Brand Layer v7.2

v7.2 menerapkan wordmark dan simbol tangga yang diberikan user pada website publik serta dashboard admin.

## Identitas visual
- Header dan footer website memakai wordmark `STAIRS TEA MIXOLOGY` serta simbol tangga merah-biru.
- Login dan sidebar admin memakai lockup logo yang sama.
- Gaya OCR/monospace diterapkan secara selektif pada eyebrow, label section, judul aksen, menu, dan CTA pendukung.
- `Share Tech Mono` menjadi fallback web yang dekat dengan wordmark, sementara `OCR A Extended` dipakai jika tersedia di perangkat.
- Opsi `Share Tech Mono` juga tersedia pada pengaturan display font di CMS.

v7.1 menambahkan studio preview responsif langsung di dashboard admin.

## Preview admin responsif
- Preview website asli tersedia dalam preset Mobile 390 × 844, Tablet 820 × 1024, dan Desktop 1366 × 768.
- Setiap preset dapat diputar antara portrait dan landscape serta otomatis diskalakan agar tetap muat pada layar admin.
- Perubahan pada Settings, Appearance, dan dialog editor tampil sebagai draft langsung tanpa menerbitkan konten.
- Tombol Save tetap menjadi satu-satunya aksi yang menyimpan draft ke website, sementara Reload mengembalikan preview ke kondisi terakhir.

v7.0 melanjutkan perbaikan mobile v6.9 dengan fokus pada akses reservasi dan kesiapan presentasi penjualan.

## Perubahan utama
- Dock aksi mobile muncul setelah hero agar Reservasi dan Arah tetap mudah dijangkau sepanjang halaman.
- Dock memakai link dari CMS, mendukung bahasa Indonesia/English, safe area iPhone, dan otomatis tersembunyi saat menu atau lightbox terbuka.
- Drawer menu tidak lagi memperlebar dokumen desktop ketika tertutup.
- Navigasi mobile sekarang memiliki state inert, label aksesibel yang mengikuti bahasa, fokus yang terkelola, dan dukungan tombol Escape.
- Orbit hero mobile, CMS hero visual, desktop Pear-style motion, dan fitur CMS sebelumnya tetap dipertahankan.

## CMS
Buka `admin.html`, password demo: `stairs`.
Menu baru: **Hero visual**.

Catatan: CMS demo masih memakai localStorage browser. Upload gambar dikompres ke data URL agar dapat dipakai tanpa backend.
