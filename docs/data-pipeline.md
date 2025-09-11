# Data Pipeline (Draft)

This document outlines how monthly sales data flows into the dashboard.

## Overview
- Source: Sales Summary PDF exported from POS/system.
- Extraction: `scripts/data-extractor.js` transforms PDF-derived values into structured fields (month, totals, categories, dayparts).
- Integration: Data is appended to arrays in `app/page.tsx` (`monthlyData`, `beverageData`, `categoryData`, `daypartData`).
- Visualization: Recharts components render charts client-side in the Next.js app.
- Deployment: `deploy.sh` pushes changes; Vercel builds and deploys automatically.

## Recommended Workflow
1. Export the latest Sales Summary PDF.
2. Run `node scripts/data-extractor.js` to preview structured data.
3. Option A: Use `./update-dashboard.sh "/path/to/summary.pdf"` for guided agent flow.
4. Option B: Manually update arrays in `app/page.tsx` with the new month’s values.
5. Validate locally: `npm run dev` and check charts.
6. Lint/build: `npm run lint` and `npm run build`.
7. Deploy: `./deploy.sh "Update <Month YYYY> sales"`.

## Notes
- Keep month labels consistent (e.g., `August 2025`).
- Ensure totals and percentages align; round to one decimal where shown.
- Do not commit any PDFs or private data.

> Future: automate PDF parsing and PR creation via CI/agent.
