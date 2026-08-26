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
