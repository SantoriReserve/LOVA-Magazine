# Fonts

## The Seasons (REQUIRED for LOVA wordmark)

**Status: The Seasons font files are NOT currently in this project.**

Until you add them, the wordmark falls back to Cormorant Garamond.

### How to add The Seasons

1. Export / download your licensed Canva / My Creative Land web font files
2. Place them here:

```
public/fonts/the-seasons/TheSeasons-Regular.woff2   (preferred)
public/fonts/the-seasons/TheSeasons-Regular.otf     (also works)
public/fonts/the-seasons/TheSeasons-Regular.ttf     (also works)
```

Optional weights:
- `TheSeasons-Light.woff2`
- `TheSeasons-Bold.woff2`
- `TheSeasons-RegularItalic.woff2`

3. Restart the dev server. The site already loads `font-family: "The Seasons"` via `@font-face` in `src/app/globals.css`.

The reusable wordmark component is `src/components/Wordmark.tsx`.
