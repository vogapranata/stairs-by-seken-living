# STAIRS v6.4 — Mobile Performance

Desktop keeps the full Pear-style motion. Android/iPhone automatically use a lighter performance mode.

## Mobile optimizations
- Pear motion uses an event-driven lightweight path instead of a continuous animation loop.
- Hero orbit becomes a static depth composition on touch devices.
- Fixed canvas, cursor glow, beams, noise, animated blur/filter and backdrop blur are disabled on mobile.
- Instagram Reel/Post embeds load only after the visitor taps Play Instagram Reel.
- Off-screen Instagram iframes are released to reduce RAM usage.
- Gallery autoplay is disabled on mobile.
- Instagram/feed row becomes native horizontal swipe instead of an infinite animation.
- Offscreen sections use content-visibility to reduce painting work.
- Menu Unsplash fallback images request a smaller mobile size/quality.
- Images use async decoding/lazy loading where possible.

## Test locally
Restart Live Server, then hard refresh. Test using a real Android/iPhone as desktop DevTools does not perfectly reproduce mobile GPU/memory constraints.

## Deploy
```powershell
git add -A
git commit -m "Optimize STAIRS mobile performance v6.4"
git push origin main
```

Vercel will redeploy automatically.
