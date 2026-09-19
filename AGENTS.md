# AGENTS.md

Marketing site for **Nativa Education & Consulting Pty Ltd**, an Australian education and consulting practice (directors Rebecca "Bec" Doyle and Liz Warburton). Maintained by Matt Doyle. Two pages:

- `/`: the Nativa landing page.
- `/elevated`: shopfront for **ElevatED**, Nativa's education platform for healthcare professionals. The courses themselves live on LearnWorlds (`nativa.learnworlds.com`); this page lists courses and prices, and its Register button sends people to a Tally form. Registrations are checked against AHPRA and loaded into LearnWorlds by hand via CSV, so there is no LearnWorlds or payment integration in this repo.

## Stack

Next.js 14 App Router, React 18, TypeScript (strict), Tailwind 3, shadcn/ui (new-york style, see `components.json`), lucide-react icons. No tests, no backend, no CMS: all copy is hard-coded JSX.

- `app/layout.tsx`: root layout, `<head>` metadata, favicon/manifest links, loads Playfair Display via `next/font/google`.
- `app/page.tsx`: the Nativa homepage. One server component, sections in order: Hero, Elevate Your Business (4 service cards), How We Elevate (Prescribers / Clinics / Pharmacists), Our Team, Testimonials, Admired By, Stats, CTA, Footer. `components/site-header.tsx` is its top menu (client component, goes solid on scroll).
- `app/elevated/`: the ElevatED page. `layout.tsx` loads its fonts and sets `noindex`; `page.tsx` has Header, Hero, How it works, Courses, Bundle, Register, Footer. Card and logo components are in `components/elevated/`.
- `data/courses.ts`: the ElevatED course catalogue and bundle, as typed arrays. **Currently placeholder data** (`IS_SAMPLE_CATALOGUE = true` shows a "sample courses" notice). Edit courses here, not in JSX.
- `lib/links.ts`: external URLs (contact Google Form, ElevatED Tally form). `ELEVATED_REGISTER_URL` is a placeholder until the Tally form exists.
- `components/ui/`: shadcn primitives. `button.tsx` is used; `accordion.tsx` is installed but unused.
- `lib/utils.ts`: `cn()` helper. `lib/format.ts`: `formatAud()`.
- `public/`: images under `public/images/`, favicons and `site.webmanifest` at the root.

## Deployment

Production is **https://www.nativaconsulting.com.au/**, hosted on **Vercel**. Vercel's Git integration builds and deploys automatically on every push to `main`, so pushing to `main` is shipping to the live site. Use a branch (Vercel gives it a preview URL) for anything that shouldn't go live yet. It runs as a full Next.js server, so image optimisation (`/_next/image`) and server features are available.

There is also a leftover GitHub Pages workflow (`.github/workflows/nextjs.yml`) that publishes a static export to `https://doylem.github.io/nativa-site/` on every push to `main`. `actions/configure-pages` injects `output: "export"` and `basePath: "/nativa-site"` at CI build time (they're commented out in `next.config.mjs`). That copy has broken images and icons, because `next/image` string `src` values and metadata icon URLs don't get the basePath. Treat it as a secondary mirror, not production; it can probably be removed (ask first).

Two consequences for new work:

- Server features (route handlers, server actions, ISR) should work in production, but will make the GitHub Pages build fail. Decide on the Pages workflow before adding them.
- `npm run build` locally matches production closely; it does not reproduce the Pages export.

`out/` and `.next/` in the working copy are stale local build output (both gitignored). Ignore them.

## Styling conventions

The two pages are deliberately different brands. Don't mix their tokens.

**Nativa (`/`)**

- Brand v2 colours are Tailwind tokens in `tailwind.config.ts`: `nativa-navy` (#06121f, header, hero and every dark section), `nativa-lime` (#bec95d, buttons, interactive elements and hover states), `nativa-ivory` (#eae6e2, replaces white for backgrounds and text). Use these rather than raw hex, and don't use plain `white`. The older `nativa-olive`, `nativa-purple`, `nativa-green`, `nativa-pink`, `nativa-orange` and `nativa-white` tokens are no longer used on the landing page.
- Logos are SVG in `public/images/brand-v2/`: `nativa-wordmark.svg` (hero) and `nativa-monogram.svg` (the N with a dot, used in the header and footer). Originals from the designer are in `brand-v2/source/`. Favicons in `public/` are generated from the monogram on navy.
- Headings use `font-playfair` (the Tailwind `fontFamily` entry wired to the `--font-playfair` variable). Body text falls back to `font-family: Arial` from `app/globals.css`.
- `app/globals.css` contains both the Create Next App `:root` hex vars and the shadcn HSL vars, and they collide on `--background`/`--foreground`. shadcn's semantic colours (`bg-background`, `bg-primary`, etc.) are therefore unreliable; the page styles buttons explicitly with brand classes instead. Follow that pattern or clean up `globals.css` first.
**ElevatED (`/elevated`)** mirrors the LearnWorlds site so the handoff feels seamless.

- Colours are `elevated-*` tokens: `navy` (#1B1F2E, main dark), `lime` (#BEC95D, buttons and accents), `cream` (text on navy), `sage` and `mist` (light section backgrounds).
- Headings `font-mukta` bold, body `font-raleway`. Both are loaded in `app/elevated/layout.tsx`, so they only exist under `/elevated`.
- The logo (`ElevatedLogo`) is loaded from LearnWorlds' CDN via `next/image` (hence `images.remotePatterns` in `next.config.mjs`) and cropped in CSS. Replace it with a local SVG when one is available.

**Shared**

- Adding shadcn components: this project is on Tailwind 3, so use the Tailwind-3-compatible CLI (`npx shadcn@2.3.0 add <name>`), not `shadcn@latest`. Accordion animations need `accordion-down`/`accordion-up` keyframes in `tailwind.config.ts`, which are not there yet.

## Copy conventions

- ElevatED is written with a capital ED. It is for AHPRA-registered healthcare professionals, and the page says so near the Register button.

- Australian English spelling (organisation, specialise, optimise).
- The business deliberately describes its field as **"emerging medicines"**; the copy moved away from "cannabis" wording over time. Keep that framing and check with Matt before naming specific substances or products.
- Testimonials, bios and stats are real client-facing claims. Only change them when explicitly asked, and never invent new ones.
- The footer year comes from `new Date()` at build time, so it only updates when the site is rebuilt.

## Working on it

- Run `npm install` first: the local `node_modules` has drifted from `package.json` (e.g. `@radix-ui/react-accordion` missing).
- Done means: `npm run lint` passes, `npm run build` passes, and you've viewed the change with `npm run dev`.
- As `page.tsx` grows, split sections into `components/sections/*.tsx` and move repeated content (service cards, testimonials, stats, team) into typed arrays rather than copy-pasting blocks.

## Known cruft

Safe to clean up when convenient, but confirm first: unused `geist` and `shadcn-ui` dependencies, unused `app/fonts/*.woff`, stale `app/site.webmanifest` (points at deleted icons; the live one is `public/site.webmanifest`), unused images (`hero*.jpg`, `nativa-site-logo.png`, `consultant-cam.jpg`), `browserconfig.xml`/`mstile-150x150.png`, and image filenames containing spaces (`Nativa Landing page.png`, `nativa-site-logo copy.png`). `README.md` is still the Create Next App boilerplate.
