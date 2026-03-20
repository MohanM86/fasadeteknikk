# fasadeteknikk.no

Norges ledende plattform for fasade, fasadearbeid og fasaderehabilitering.

## Tech stack

- **Next.js 14** – App Router, Server Components
- **TypeScript** – strikt typing
- **Tailwind CSS** – komplett design system (grønn/sand/oransje)
- **Google Fonts** – Outfit + Source Sans 3
- **Vercel** – hosting

## Kjøre lokalt

```bash
npm install
npm run dev
# Åpne http://localhost:3000
```

## Bygge og deploye

```bash
npm run build
npm run start

# Deploy til Vercel
npx vercel --prod
```

## Sider

### Statiske sider
- `/` – Forside med hero, tjenester, byer, artikler, FAQ
- `/priser` – Komplett prisoversikt
- `/kontakt` – Lead capture skjema
- `/faq` – Vanlige spørsmål
- `/om-oss` – Om plattformen

### Tjenestesider (5)
- `/tjenester/fasaderehabilitering`
- `/tjenester/bytte-kledning`
- `/tjenester/male-hus-utvendig`
- `/tjenester/etterisolering`
- `/tjenester/vaske-fasade`

### By-sider (30+)
- `/by/oslo`
- `/by/bergen`
- `/by/trondheim`
- `/by/stavanger`
- `/by/kristiansand`
- ... og 25+ flere byer

### Artikler (4)
- `/artikler/hva-koster-fasaderehabilitering`
- `/artikler/nar-bor-du-bytte-kledning`
- `/artikler/tre-vs-mur-fasade`
- `/artikler/hvordan-vedlikeholde-fasade`

## SEO sjekkliste

- [x] Dynamisk sitemap.xml
- [x] robots.txt med AI crawler tillatelse (GPTBot, ClaudeBot, PerplexityBot)
- [x] JSON-LD schema (Organization, Service, FAQ, BreadcrumbList)
- [x] Open Graph metadata
- [x] Canonical URLs på alle sider
- [x] Norsk metadata (lang="nb")
- [x] llms.txt for AI søk
- [x] entity-index.json for AEO
- [x] Breadcrumbs med schema
- [x] FAQ schema på alle relevante sider
- [x] Unikt innhold per by-side

## Design system

**Farger:**
- Primær: Dyp grønn `#0F3D2E` (forest-900)
- Bakgrunn: Lys sand `#F5F2EC` (sand-200)
- CTA: Oransje `#FF7A00` (ember-500)

**Fonter:**
- Display: Outfit
- Body: Source Sans 3

## Lisens

Proprietær – alle rettigheter forbeholdt.
