STAIRS — PEAR MOTION v6.0 UPDATE

Gunakan project STAIRS yang sekarang sebagai base.
Overwrite hanya 3 file berikut di root project:
- index.html
- styles.css
- app.js

Tidak perlu mengganti:
- admin.html / admin.css / admin.js
- assets/
- api/
- vercel.json

Setelah overwrite di VS Code:
1. Ctrl + F5 jika tes via Live Server.
2. Untuk Git/Vercel:
   git add index.html styles.css app.js
   git commit -m "STAIRS Pear motion v6"
   git push origin main

Motion v6:
- ukuran/layout STAIRS tetap
- eased virtual scroll (visual mengejar target scroll per frame)
- pinned fixed canvas layer
- chapter pacing per section
- velocity-linked image drift
- clip/reveal media
- DOM stagger/crossfade/scale
- header merge + hero orbit tetap dipertahankan
