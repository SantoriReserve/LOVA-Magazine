# LOVA Magazine

Editorial website for **LOVA** — a discovery publication for women, curating businesses, places, products, experiences, and services worth knowing.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home |
| `/about` | About LOVA |
| `/be-featured` | Business feature application |
| `/faq` | FAQ |
| `/contact` | Contact |

## Typography

- **Display / wordmark:** The Seasons (required brand font)
- **Body / UI:** Outfit

Place licensed The Seasons files in:

```
public/fonts/the-seasons/
```

See `public/fonts/the-seasons/README.md` for filenames. Until those files are present, Cormorant Garamond is used as a temporary fallback with similar editorial character.

## Images

Placeholder editorial imagery lives in `public/images/`. Replace files in place (same filenames) or update paths in page components. See `public/images/README.md`.

## Forms

Application and contact forms are structured and validated on the client. Submission handlers are clearly marked for backend connection:

- `src/components/ApplicationForm.tsx`
- `src/components/ContactForm.tsx`

Connect to an API route, email service, or form provider when ready. No database is included yet.

## Contact email

Placeholder: `hello@lovamagazine.com`  
Update in `src/lib/site.ts`.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # production server
npm run lint     # eslint
```
