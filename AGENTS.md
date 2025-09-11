# Repository Guidelines

## Project Structure & Modules
- `app/`: Next.js App Router pages (`page.tsx`), layout, and `globals.css`.
- `scripts/`: Utilities like `data-extractor.js` for parsing sales data.
- Root config: `next.config.js`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`.
- Operational scripts: `deploy.sh`, `update-dashboard.sh`.
- Refer to `README.md` for a quick visual tree.

## Architecture Overview
- Runtime: Next.js 14 (App Router) with a single client dashboard in `app/page.tsx`.
- Data flow: Static TypeScript arrays (monthly, beverages, categories, dayparts) computed/rendered client-side; no DB/API.
- Charts: Recharts components (Bar, Line, Pie) with simple selectors and derived metrics (averages, percentages).
- State: Minimal `useState` for filters (e.g., selected month); calculations occur in component scope.
- Styling/UI: Tailwind CSS utility classes; icons via `lucide-react`.
- Deploy: Built by `next build` and deployed to Vercel; `deploy.sh` commits/pushes to trigger deploy.

## Build, Test, and Dev Commands
- `npm run dev`: Start local dev server at `http://localhost:3000`.
- `npm run build`: Production build (type check + Next.js compile).
- `npm start`: Run the production server locally.
- `npm run lint`: ESLint checks for TS/React/Next rules.
- Optional: `./deploy.sh "Your message"` to commit/push; Vercel deploys.

## Coding Style & Naming
- TypeScript, 2-space indentation, semicolons optional (follow ESLint auto-fix).
- Components: PascalCase file/component names (e.g., `SalesChart.tsx`).
- Hooks/utils: camelCase (e.g., `useSalesData.ts`, `formatCurrency.ts`).
- Routes and folders under `app/`: lowercase, hyphenated as needed (e.g., `app/admin-tools`).
- Styling: Tailwind CSS utility-first; keep component styles colocated.
- Linting: Next.js ESLint config; run `npm run lint` before PRs.

## Testing Guidelines
- No formal test suite committed yet. For now:
  - Smoke test via `npm run dev` and verify key views load.
  - Use ESLint to catch common issues.
- Recommended (future): Playwright for E2E; Vitest/Jest + React Testing Library for unit tests.
- Name tests `*.test.ts(x)` colocated next to components or under `__tests__/`.

## Commit & Pull Requests
- Commits: Imperative, concise subject (e.g., `Add dashboard updater`, `Fix TS build error`).
  - Scope is optional; keep to ≤72 chars when possible.
- PRs must include:
  - Purpose and summary of changes; link issues (e.g., `Closes #12`).
  - Screenshots/GIFs for UI changes.
  - Checklist: `npm run lint` clean and `npm run build` passes.

## Agent & Automation Notes
- See `AUTOMATION.md` and `CLAUDE.md` for agent workflows.
- To add monthly data from a PDF, prefer:
  - `./update-dashboard.sh "/path/to/Sales summary.pdf"` (guided agent flow), or
  - `node scripts/data-extractor.js` to generate structured data, then update `app/page.tsx`.
- Never commit secrets; use `.env.local` for private config.
