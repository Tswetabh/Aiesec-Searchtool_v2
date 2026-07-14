# AIESEC in Indore — Opportunity Hub

A Next.js app for browsing AIESEC in Indore's live opportunities: search,
filter by program type, save, share, dark mode, recently viewed — built as a
real product rather than a spreadsheet-in-a-webpage.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To ship a production build:

```bash
npm run build
npm run start
```

Deploy with the Vercel CLI the same way you deployed the AIESEC search tool:

```bash
vercel
```

## Updating the opportunity data

The app reads from `src/data/opportunities.json`. It currently holds the 29
rows from `IGTae_Search_Tool.xlsx` (converted at build time, not live-synced).
The sheet had five columns: `ID`, `Title`, `Organization`, `Status`, `Link`.
Program type (Volunteer / Talent / Teacher) is derived from the EXPA link
pattern, since it isn't its own column.

When you have a new export of the sheet:

```bash
python3 scripts/convert-xlsx.py path/to/new-sheet.xlsx
```

This overwrites `src/data/opportunities.json`. Re-run `npm run build` (or just
`npm run dev`) after.

**Note on scope**: the sheet doesn't include country, city, stipend, duration,
or accommodation. Those fields only exist inside each EXPA listing, not in a
link list. Because of that, the Opportunities page only filters by what's
actually in the data (search + program type), and the detail page is honest
about what it can show, linking out to EXPA for the rest. If you later
maintain a richer sheet with those columns, extend `scripts/convert-xlsx.py`
and `src/lib/types.ts` to carry them through — the filter bar in
`OpportunityFilters.tsx` is where you'd add Country/Duration/Paid dropdowns.

## Content you'll want to personalize before launch

- `src/data/resources.ts` — resource card links currently point to `#`.
  Swap in your real PDF/Drive URLs.
- `src/app/team/page.tsx` — LinkedIn URLs are placeholders; phone numbers
  are already correct.
- `src/components/layout/Footer.tsx` — social links use placeholder
  handles/URLs.
- Testimonials were intentionally left out of this build. Add a
  `src/data/testimonials.ts` plus a `TestimonialCard` component (structure
  mirrors the FAQ/Resources pattern) once you have real EP quotes and
  photo/video consent.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Fuse.js (fuzzy
search), Framer Motion (subtle motion), lucide-react (icons).

No backend — all state (saved opportunities, recently viewed, theme) lives in
`localStorage` on the visitor's device.

## Fonts

Fraunces (display) and Inter (body) are self-hosted via `@fontsource`, so
there's no runtime dependency on Google Fonts — this builds and runs fully
offline.
