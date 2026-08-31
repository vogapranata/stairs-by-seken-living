STAIRS v6.6 — MOBILE TOUCH FIX

Fixes mobile hit testing after v6.5.
- closed mobile drawer no longer captures taps
- decorative/motion layers never capture pointer events
- buttons and links use touch-action: manipulation
- horizontal menu/feed/access rails remain native-swipeable
- photo lightbox ignores swipe gestures so a carousel swipe does not open a popup
- vertical page scrolling is restored explicitly

Replace index.html, styles.css and app.js when updating from v6.5.
