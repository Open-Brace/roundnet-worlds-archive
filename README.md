# Roundnet Worlds — The Podium Archive

An independent, source-linked archive of the Roundnet World Championship medal
record. The site covers every podium from the completed 2022 and 2024 editions,
the player pairings behind each individual medal, the rosters behind each
championship squad, the all-time medal table, and the road to Paris 2026.

Live site: [roundnet-worlds-archive.vercel.app](https://roundnet-worlds-archive.vercel.app)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data model

The completed Worlds record is small, public, and changes only every two years,
so it lives as reviewed TypeScript data in `src/data/worlds.ts`. A database would
add cost and deployment complexity without improving the current experience.
The data layer is intentionally isolated so live 2026 results can later move to
Drizzle and Neon without rewriting the page components.

## Primary sources

- International Roundnet Federation event pages and format guides
- Official Fwango-linked results and rosters summarized by Spike Wiki
- The ROUNDNETWORK World Championship documentary
- Everything Roundnet's pre-France-2026 medal count

Every edition page and the history page link directly to their sources.

## Photography and video stills

Photography displayed from International Roundnet Federation pages is credited
there to Corentin Bureau, Ruwen Schroeder, and Pierre Staub. The trophy still is
from *The Roundnet World Championship*, a ROUNDNETWORK documentary presented by
Spikeball. Source links and credits are displayed with the images. This is an
independent archive and is not an official IRF publication.
