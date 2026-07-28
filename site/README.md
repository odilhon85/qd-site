# QarzDaftar Landing Page

Static landing page for the QarzDaftar Android app.

## Structure

- index.html → Main landing page
- privacy/index.html → Privacy Policy
- terms/index.html → Terms of Use
- data-deletion/index.html → Data Deletion policy
- assets/ → CSS, JS, images

## Local preview (optional)

Use any simple HTTP server in this folder:

- Python: `python -m http.server 8000`
- Node.js + serve: `npx serve .`

Then open: http://localhost:8000

## Deploy to GitHub Pages

1. Create a new repository (e.g., qarzdaftar-site).
2. Push this entire site/ folder as the root of that repo.
3. In GitHub:
   - Settings → Pages → Source: “Deploy from a branch”
   - Branch: main (or your default), / (root)
4. Wait for build; site will be live at:
   - https://<your-username>.github.io/<repo>/

To use with custom domain (qarzdaftar.uz):
- In Pages settings, add “Custom domain”: qarzdaftar.uz
- Configure DNS according to GitHub’s instructions.

## Before going live

- Add your Google site verification meta tag in each page's <head> where indicated.
- Optionally:
  - Replace hero phone mockup image with a real app screenshot.
  - Add an Open Graph share image and update og:image meta tags.
