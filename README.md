## STAIRS v3.2 reliability fix

- Section content is never hidden if animation JS fails.
- Public image URLs no longer use expiring OpenAI proxy links.
- Gallery/admin media have visual fallbacks if an external host blocks an image.
- Cache-busting bumped to v3.2.

# STAIRS at Prawirotaman — Website Demo v3.1

Website pitching/demo untuk STAIRS at Prawirotaman. Project ini static HTML/CSS/JavaScript dan siap di-deploy di Vercel.

## Yang berubah di v3.1

- Menu diperluas menjadi 58 item referensi publik: breakfast, bites, pizza, salads, soup & comfort, pasta, mains, coffee, tea, fermented drinks, non-coffee, dan cocktails.
- Bahasa website Indonesia / English.
- Dark / Light mode.
- Setiap section website memakai slide-in motion saat masuk viewport.
- Gallery memakai slider dengan auto-slide, previous/next, dots, dan active-slide motion.
- Hero memakai motion/parallax pada perangkat pointer yang mendukung.
- Dashboard admin dibuat statis tanpa animasi.
- Dashboard tetap menyediakan bahasa ID/EN dan dark/light mode untuk UI admin.
- Gallery demo memakai referensi foto publik yang terkait dengan Google Maps listing dan Instagram @stairsprawirotaman.
- Jam buka default mengikuti public listing terbaru yang diperiksa saat demo disiapkan: Senin–Jumat 11.00–01.00, Sabtu–Minggu 11.00–02.00.

## Dashboard

Buka `/admin` atau `/admin.html`.

Password demo: `stairs`

Dashboard dapat mengatur menu, galeri, review, headline bilingual, jam buka, alamat, nomor telepon, Maps URL, Instagram URL, reservation URL, default bahasa, dan default theme.

Data demo disimpan melalui `localStorage`, jadi perubahan hanya berlaku pada browser/perangkat yang melakukan edit. Untuk website resmi, migrasikan CMS ke Supabase/database agar perubahan berlaku untuk semua pengunjung.

## Catatan menu

Menu pada demo dirangkum dari menu publik/Instagram-linked coverage dan sumber kuliner yang mengutip daftar menu STAIRS. Karena menu dan harga restoran dapat berubah, item yang belum memiliki harga yang dapat diverifikasi ditampilkan sebagai `—`. Tombol `Official Menu` mengarah ke Linktree resmi STAIRS yang memiliki `STAIRS MENU BOOK` dan `STAIRS BAR MENU`.

## Catatan foto

Foto pada versi pitching menggunakan referensi visual publik dari listing/review Google Maps dan liputan yang mengkreditkan Instagram STAIRS. Ini cocok untuk prototype internal/pitching. Sebelum website dijadikan official production site, unduh/upload aset resmi yang diberikan pemilik STAIRS dan ganti hotlink eksternal agar hak penggunaan dan reliability aset terjamin.

Lihat `SOURCES.md` untuk daftar referensi.
