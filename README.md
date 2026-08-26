# STAIRS at Prawirotaman — v4.4 Kinetic CMS Demo

Static HTML/CSS/JavaScript concept website for pitching STAIRS at Prawirotaman.

## v4.4 changes
- Kinetic scroll motion inspired by the supplied reference video: menu photos, bar visuals, gallery and location imagery drift/scale subtly with scroll.
- Menu cards now include photos. Public STAIRS/Instagram assets are used where available; generic food imagery is used as a clearly replaceable demo fallback when an exact official photo is not available.
- Instagram/feed section is now driven by the same CMS media collection as the gallery.
- Admin is upgraded into a lightweight browser CMS: edit menu, menu photos, media, reviews, page/site content and links.
- Menu and gallery editors support image URL or local image upload. Uploads are compressed and stored in browser localStorage for this demo.
- Appearance panel can change display font, body font, red accent and night-blue accent without editing code.
- Supported web fonts: Bricolage Grotesque, Manrope, Space Grotesk, Plus Jakarta Sans, DM Sans, Sora, Outfit and Syne.
- CMS JSON export/import/reset tools added.
- Dashboard remains intentionally static/no animation.

## Admin
Open `/admin` or `admin.html`.
Demo password: `stairs`

## Important CMS limitation
This is a localStorage CMS demo. Changes are stored only in the browser/device where they were made. For an official multi-user website, migrate the CMS data and media to Supabase or another hosted database/storage solution.

## Deployment
Static project; Vercel can deploy directly from the GitHub repository. No build command or environment variable is required.
