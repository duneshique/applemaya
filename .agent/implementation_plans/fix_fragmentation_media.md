# Implementation Plan: Fix Website Fragmentation & Media Refinement

This plan addresses the broken Media section on the home page, resolves hydration errors, and completes the internationalization of hardcoded sections to ensure an "organically connected" codebase.

## Step 1: Locale Data Audit & Enrichment

- Update `public/locales/ko/home.json` and `en/home.json`:
  - Ensure `featured` works are correctly listed.
  - Verify `mediaSection` metadata.
- Update `public/locales/ko/media.json` and `en/media.json`:
  - Ensure all items from `data/media.js` (IDs 1, 6, 7, 8, 9, 10) are correctly translated.

## Step 2: Fix `index.js` & `media.js` Props

- Ensure `index.js` `getStaticProps` provides `common`, `home`, `books`, `media`, `flowers`.
- Ensure `media.js` (the page) provides `common`, `media`.

## Step 3: Refactor Media Components

- **`MediaSection.jsx` (Home)**:
  - Fix the `useTranslation` hook and key referencing.
  - Improve UI: Increase title font size, adjust card padding, and apply locale-specific font weights.
  - Ensure correct handling of the `media:` namespace prefix.
- **`MediaArchive.jsx` (Page)**:
  - Fix the missing `getIcon` function.
  - Sync styling with the improved `MediaSection` for visual consistency.

## Step 4: Localize `FeaturedWork.jsx`

- Replace hardcoded English strings with `t('featured.works.X.title')`.
- Use the first namespace (`home`) for these keys.

## Step 5: Resolve Hydration Mismatch

- Audit `Header.jsx` and `Layout.jsx` for any dynamic content that might differ between server and client (e.g., date formatting, window/client-only logic).
- Remove any style properties that might be injected by browser extensions (though these are out of control, we should ensure our own code is clean).
- Check `Framer Motion` initial states.

## Step 6: Visual Quality Assurance

- Verify all sections look premium on both mobile and desktop.
- Check font weight refinements as per previous tasks.
