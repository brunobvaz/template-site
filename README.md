# TemplateKit UI

React + Vite repository for collecting reusable website templates and section blocks.

The app now works as a small template catalog with live previews for:

- Headers
- Hero pages
- Cards
- Footers
- Existing landing-page sections

## Routes

- `/` - main TemplateKit catalog
- `/templates/headers` - header template previews
- `/templates/heroes` - hero template previews
- `/templates/cards` - card template previews
- `/templates/footers` - footer template previews
- `/landing` - original landing-page demo

## Project structure

- `src/data/templateBlocks.js` stores the template catalog metadata.
- `src/pages/` contains catalog and category pages.
- `src/templates/` contains reusable preview components.
- `src/sections/` keeps the original landing sections.
- `src/styles/TemplateKit.css` contains catalog and preview styles.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
