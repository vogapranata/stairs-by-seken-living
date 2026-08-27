# STAIRS × Pear — v6.3 Reel Fit Fix

Fix utama: Instagram Reel/Post di Gallery sekarang di-fit penuh ke area media, tanpa crop dan tanpa nested scrollbar. Direct video memakai `object-fit: contain`.

# STAIRS by Seken Living — FINAL CLEAN

Paket ini adalah versi lengkap dan bersih untuk menggantikan isi repository `stairs-by-seken-living`.

## File production yang dipertahankan

- `index.html`, `styles.css`, `app.js` — website utama
- `admin.html`, `admin.css`, `admin.js` — CMS dashboard
- `api/instagram.js` — resolver URL Instagram Share untuk Vercel
- `assets/` — aset visual yang masih dipakai
- `vercel.json`
- `.gitignore`
- `SOURCES.md`

Semua file backup dan script update versi lama sengaja dihapus.

## Cara mengganti project di repo lama

1. Backup folder repo lama jika masih diperlukan.
2. Di `F:\Voga\stairs-by-seken-living`, hapus semua file/folder KECUALI folder `.git`.
3. Copy seluruh isi paket FINAL CLEAN ini ke folder tersebut.
4. Buka Terminal di folder repo lalu jalankan:

```bash
git add -A
git commit -m "STAIRS final clean build"
git push origin main
```

Vercel akan redeploy otomatis dari branch `main`.

## Instagram Reel/Post di CMS

Di `/admin` → Gallery:

- pilih `instagram`
- gunakan URL publik seperti:
  - `https://www.instagram.com/reel/SHORTCODE/`
  - `https://www.instagram.com/p/SHORTCODE/`

URL dengan parameter `?igsh=...` boleh; CMS akan membersihkannya.

Untuk URL Instagram `/share/...`, website production di Vercel akan mencoba resolve melalui `/api/instagram`. Saat test di VS Code Live Server, gunakan URL `/reel/...` atau `/p/...` karena Vercel Function tidak tersedia di Live Server biasa.

Player Instagram kini memakai endpoint embed resmi `/embed/captioned/` langsung, tidak lagi bergantung pada Graph/oEmbed access token.

## Login CMS

Password demo: `stairs`

Catatan: CMS masih berbasis `localStorage`, sehingga perubahan tersimpan per browser/perangkat. Untuk CMS production multi-device, pindahkan data dan upload media ke Supabase/Storage.


## v6.0 — Pear Motion System
Layout dan ukuran STAIRS dipertahankan. Motion diganti dengan sistem scroll-scrub ala Pear: pinned background canvas, eased virtual scroll yang mengejar scroll target setiap frame, chapter pacing, velocity-linked media drift, clip/reveal, dan staggered DOM layers.


## v6.1 — Pear-inspired typography
Typography now mirrors Pear's editorial treatment: oversized sentence-case display lines, tight leading and tracking, medium rather than heavy headline weights, short readable body lines, and small functional labels. The exact Pear family is served through Adobe Typekit; this build uses DM Sans as an available neutral-grotesk substitute while preserving the CMS font controls.


## v6.2 Pear typography correction
- Display typography: Inter Tight (400) with tighter leading and kerning.
- Body/UI: Instrument Sans.
- Key headlines are split into word-safe character spans so glyph motion behaves closer to Pear's DOM typography.
- Existing v6.1 DM Sans defaults migrate once to the new pair; deliberate custom CMS font choices are preserved where possible.
