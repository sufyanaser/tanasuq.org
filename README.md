# Tanasuq Organization for Sustainable Development

Source snapshot of the website at https://tanasuq.org.

## Website

- Arabic and English content, with RTL/LTR language switching.
- Language-specific header identity: Arabic on the right, English on the left.
- IBM Plex Sans Arabic typography and red brand palette.
- Navigation menus, site search, stories, programs, and contact form.
- The contact form prepares an email; it does not store submissions.
- Sample stories, statistics, and partner identities are explicitly labeled on the website.

## Files

- `dist/index.html`: page markup and bilingual content.
- `dist/redesign.css`: active responsive styles.
- `dist/interaction.js`: active language, navigation, search, and contact behavior.
- `dist/assets/`: supplied logos, illustrations, and other site assets.
- `dist/app.js` and `dist/styles.css`: retained legacy files; not loaded by the current page.
- `.openai/hosting.json`: existing Sites project identity and static output configuration; contains no credentials.

## Run Locally

Open `dist/index.html` in a browser. No build step or package installation is required. Google Fonts requires an Internet connection.

## Hosting

The current production site remains hosted through Sites at https://tanasuq.org. This repository is a source copy; pushing here does not automatically deploy the website or change its DNS. Any future static hosting setup should serve the `dist` directory.

## Snapshot

Copied on 2026-09-30 from published version 11, source commit `517cb10cca02cf79b4cf22b1fe9ab951cc4e3ec3`.
