# QarzDaftar — Official Website

Static landing site for **QarzDaftar**, a secure Android app to track personal loans, debts, and shared ledgers.

- Live site: https://qarzdaftar.uz  
- App on Google Play: https://play.google.com/store/apps/details?id=uz.devior.qarzdaftar  

## Purpose

This repository contains the official website for QarzDaftar, including:

- Landing page (hero, features, how it works)
- Tutorials and usage guides
- Privacy Policy, Terms of Use, Data Deletion pages
- Multi-language support via i18n

The site is fully static (HTML/CSS/JS), optimized for fast loading and SEO.

## Project Structure

- `index.html` — Main landing page
- `assets/`
  - `css/main.css` — Global styles
  - `js/i18n.js` — Internationalization logic
  - `js/main.js` — UI behavior (menu, animations)
  - `img/` — Logos, screenshots, and media
- `tutorials/index.html` — App tutorials and guides
- `privacy/index.html` — Privacy Policy
- `terms/index.html` — Terms of Use
- `data-deletion/index.html` — Data deletion policy

## Local Development

1. Clone the repository:
   - `git clone <repo-url> qd-site`
2. Open in a browser:
   - Either open `index.html` directly, or
   - Run a simple HTTP server (recommended):
     - Python: `python -m http.server 8000`
     - Node.js: `npx serve .`

No build step is required.

## Notes for Contributors

- Keep HTML semantic and accessible.
- Use existing CSS classes; avoid inline styles unless necessary.
- For translations, update i18n keys in `assets/js/i18n.js`.
- Ensure all links (Play Store, YouTube, internal pages) remain consistent.

## Contact

For questions or support: odilhon1985@gmail.com
