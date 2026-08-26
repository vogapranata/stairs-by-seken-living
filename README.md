# STAIRS — Website Concept + Demo CMS Dashboard

Static demo website inspired by STAIRS by Seken Living, Prawirotaman.

## Run locally

Because the site uses localStorage for the demo CMS, run it through a small local server rather than double-clicking the file.

### Python
```bash
python -m http.server 8080
```
Then open:
- Website: http://localhost:8080
- Dashboard: http://localhost:8080/admin.html

Demo dashboard password: `stairs`

## Deploy to Vercel

This project is static and does not require a build step.

1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework Preset: `Other`.
4. Build Command: leave empty.
5. Output Directory: leave empty / project root.
6. Deploy.

## Important production note

The current dashboard uses browser `localStorage`, which is ideal for a pitch/demo but not for a real multi-device admin system. For production, replace the storage layer with Supabase (database + storage + authentication). The UI and CRUD flow can remain the same.

## Content source note

Some sample menu names/prices and imagery are based on publicly available references and are meant for a visual prototype. Verify menu, prices, operating hours, images, and reservation/contact details directly with STAIRS before publishing as an official website.
