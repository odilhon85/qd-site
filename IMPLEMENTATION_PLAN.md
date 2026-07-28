# QarzDaftar Landing Page — Implementation Plan

Domain: https://qarzdaftar.uz
App package: uz.devior.qarzdaftar

Goal:
- Build a clean, modern landing page (not a bare HTML template) that:
  - Satisfies Google OAuth verification requirements.
  - Presents the app professionally to users and reviewers.
  - Provides links to Privacy Policy, Terms of Use, Data Deletion, and Play Store.

Tech stack (recommended):
- Static site only (no backend).
- HTML5 + CSS3 + minimal vanilla JS.
- Optimized for GitHub Pages deployment.
- Mobile-first responsive design.

This plan is structured in phases so you can implement step by step without touching the Android project.

---

## Phase 1: Structure and File Layout

Create a self-contained static site under `site/`.

Planned structure:

- index.html          → Main landing page
- privacy/index.html  → Privacy Policy (from existing privacy_policy.html)
- terms/index.html    → Terms of Use (from existing terms_of_use.html)
- data-deletion/index.html → Data Deletion policy (from existing data_deletion.html)
- assets/
  - css/
    - main.css        → Global styles
  - js/
    - main.js         → Minimal scripts (mobile menu, smooth scroll, etc.)
  - img/
    - logo.png / app-icon.png
    - hero-mockup.png or similar visuals

Notes:
- Use existing HTML content as source; we will redesign it into a consistent theme.
- Each policy page links back to the main landing page and each other where appropriate.

---

## Phase 2: Design Concept (High Level)

Style direction:
- Clean, trustworthy, finance-oriented look.
- Soft color palette (e.g., deep blue/teal + neutral grays).
- Rounded cards, subtle shadows, clear typography.
- Fully responsive; looks good on mobile and desktop.

Landing page sections (top to bottom):

1) Header / Navbar:
   - App name/logo on the left.
   - Links: Home | Privacy Policy | Terms of Use | Data Deletion.
   - Mobile: hamburger menu.

2) Hero Section:
   - Headline: “Track Loans & Debts with Confidence” (or similar).
   - Subheadline explaining QarzDaftar in 1–2 lines.
   - Primary CTA button: “Get it on Google Play”.
   - Secondary link/button: “Learn more” or scroll to features.
   - Right side / below text: app mockup image (phone frame with screenshots).

3) Trust & Security Strip:
   - Short icons + labels:
     - “Secure Google Sign-In”
     - “Encrypted Backups on Google Drive”
     - “Private Shared Ledgers”
   - Purpose: reassure reviewers and users about data handling.

4) Features Section (cards):
   - 3–6 feature cards, each with icon + short description:
     - Personal loans & debts tracking.
     - Shared ledger for partners / family.
     - Google Drive backup & sync.
     - Multi-language support.
     - Biometric lock and privacy.
   - Keep text concise; match app’s real capabilities.

5) How It Works (simple steps):
   - 3–4 step horizontal or vertical flow:
     - Sign in with Google.
     - Add your loans/debts.
     - Share a ledger with a partner.
     - Back up and sync via Drive.
   - Visual arrows / numbered cards.

6) For Reviewers / OAuth Info (subtle, professional):
   - A small section or note:
     - “This is an Android mobile application.”
     - “There is no web login; all actions happen inside the app.”
     - Link to Play Store and short instruction line.
   - Helps Google reviewers quickly understand the flow without cluttering the page.

7) Footer:
   - App name + short tagline.
   - Links: Privacy Policy | Terms of Use | Data Deletion | Google Play.
   - Copyright line.
   - Optional: contact email for support.

---

## Phase 3: Content Integration

Use existing content as base, but adapt it into the new design:

- privacy_policy.html → privacy/index.html:
  - Wrap in landing page layout (same header/footer).
  - Improve readability with typography and spacing.

- terms_of_use.html → terms/index.html:
  - Same treatment; consistent style.

- data_deletion.html → data-deletion/index.html:
  - Clear, simple layout for deletion instructions.

Ensure:
- All links between pages are correct (relative paths).
- Each page includes the same meta tags and Google verification tag placeholder.

---

## Phase 4: SEO / Verification Readiness

Prepare the site so it satisfies Google’s OAuth verification needs:

- In <head> of index.html:
  - Standard meta tags (charset, viewport, description).
  - Placeholder for google-site-verification meta tag.
  - Open Graph tags (title, description, image) for sharing.

- Ensure:
  - Homepage is public and loads fast.
  - Privacy Policy and Terms of Use are reachable from homepage via clear links.
  - No login wall; everything visible to Google crawlers.

---

## Phase 5: Assets and Polish

Design details (to be implemented in code later):

- Choose a font pair:
  - Example: Inter or Poppins for headings + system fonts for body.
- Use consistent spacing scale and color tokens.
- Add subtle animations:
  - Fade-in on scroll for sections.
  - Button hover effects.
- Ensure accessibility basics:
  - Sufficient contrast.
  - Semantic HTML (header, main, section, footer).
  - Alt text for images.

---

## Phase 6: Deployment Preparation (GitHub Pages)

Prepare so you can deploy easily without touching Android code:

- Add a simple README inside site/:
  - Instructions on how to publish via GitHub Pages.
- Ensure all paths are relative and work from root domain.
- Confirm structure matches what Google expects:
  - https://qarzdaftar.uz/ → index.html (landing page)
  - https://qarzdaftar.uz/privacy/ → Privacy Policy
  - https://qarzdaftar.uz/terms/ → Terms of Use

---

## Assets & Extras Checklist

Already in site/:

- [x] privacy_policy.html → to be redesigned as /privacy/index.html
- [x] terms_of_use.html → to be redesigned as /terms/index.html
- [x] data_deletion.html → to be redesigned as /data-deletion/index.html
- [x] app icon (from mipmap-xxxhdpi) → assets/img/app-icon.webp

May be needed later (prepare when available):

- [ ] App screenshots:
  - For hero section and “How it works” visuals.
  - Use the same screenshots you uploaded to Google Play if possible.
- [ ] Feature graphic or banner image:
  - Optional top-of-page visual that matches your Play Store style.
- [ ] Favicon files (generated from app icon):
  - favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png.
- [ ] Open Graph / social share image:
  - A square or landscape image with app name + short tagline for link previews.

Next step (when you’re ready):
- I will generate the actual HTML/CSS/JS files following this plan, keeping it clean and production-ready.
