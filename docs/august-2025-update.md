# August 2025 Sales Summary Update (Full Month)

Source: `sales-summary/FOF Sales summary 0825.pdf` (Date range: August 1, 2025 – August 31, 2025)

## Overview

Replaced the prior partial-period August entry (labeled “Aug 2025 (30 days)”) with the full-month August 2025 data. Updated all relevant datasets, chart headings, and insights to reflect the full month (31 days).

## Updated Data

### Monthly (August 2025)
- Net sales: $81,195.86
- Tips: $8,741.47
- Tax amount: $7,130.47
- Deferred (gift cards): $190.00
- Total amount: $97,257.80
- Average order: $13.39
- Total orders/guests: 6,062

References:
- `app/page.tsx:91` (netSales)
- `app/page.tsx:92` (tips)
- `app/page.tsx:93` (taxAmount)
- `app/page.tsx:95` (totalAmount)
- `app/page.tsx:97` (totalOrders)
- `app/page.tsx:98` (totalGuests)

### Beverages (August 2025)
- Total beverages: $48,419.25
- Share of net sales: 59.6%
- MoM change: -3.7%

Notes: Total beverages = NA Beverage ($44,399.23) + Bottled ($1,923.42) + Draft ($1,137.80) + Wine ($958.80).

References:
- `app/page.tsx:154` (month)
- `app/page.tsx:155` (totalBeverages)
- `app/page.tsx:156` (totalSales)
- `app/page.tsx:157` (percentage)
- `app/page.tsx:158` (momGrowth)

### Categories (August 2025)
- NA Beverage: $44,399.23 (54.7%)
- No Category: $25,076.36 (30.9%)
- Food: $7,011.75 (8.6%)
- Bottled Beer: $1,923.42 (2.4%)
- Draft Beer: $1,137.80 (1.4%)
- Wine: $958.80 (1.2%)
- Merchandise: $688.50 (0.8%)

References:
- `app/page.tsx:224`
- `app/page.tsx:225`
- `app/page.tsx:226`
- `app/page.tsx:227`
- `app/page.tsx:228`
- `app/page.tsx:229`
- `app/page.tsx:230`

### Dayparts (August 2025)
- Breakfast: $29,513.01 | 2,105 orders (34.7%)
- Lunch: $40,688.81 | 3,076 orders (50.8%)
- Dinner: $6,804.96 | 511 orders (8.4%)
- No Service: $4,189.08 | 370 orders (6.1%)

References:
- `app/page.tsx:235` (Breakfast)
- `app/page.tsx:236` (Lunch)
- `app/page.tsx:237` (Dinner)
- `app/page.tsx:238` (No Service)

### Avg Orders Per Day (Bar Chart)
- Period label: “August 2025” (was “Aug 2025 (30 days)”) 
- Days in month: 31
- Avg orders/day: 6,062 / 31 = 196

References:
- `app/page.tsx:325` (month label)
- `app/page.tsx:326` (avgOrdersPerDay calc)
- `app/page.tsx:327` (totalOrders)
- “Current Period” card: `app/page.tsx:585` → 196/day

## UI Text/Labels
- Chart headings updated:
  - `app/page.tsx:470` → “Sales by Category (August 2025)”
  - `app/page.tsx:494` → “Sales by Daypart (August 2025)”
- Key insights updated:
  - `app/page.tsx:605` → Sales performance reflects full month ($81,196)
  - `app/page.tsx:609` → Category leaders: NA Beverages 54.7%; Food 8.6%
  - `app/page.tsx:613` → Orders average 196/day in August (31 days)

## Additional Note
- `foodNoCategoryData` August row fixed to align with full-month results:
  - `app/page.tsx:214`–`app/page.tsx:215` → `totalFoodNoCategory: 32088.11` (≈39.5% of net sales)
  - This dataset is currently unused in the UI but kept consistent.

## What Was Removed/Replaced
- Removed the partial-period label “Aug 2025 (30 days)” and its values across datasets, replacing with the full-month “August 2025” values and labels in `app/page.tsx`.

## How to Verify
1. Run `npm run dev` and open http://localhost:3000.
2. Confirm August 2025 now shows full-month figures across:
   - Monthly table and Net Sales by Month chart
   - Beverage % Sales chart
   - Sales by Category and Daypart charts (headings should say “August 2025”)
   - Avg Orders Per Day chart (“August 2025” at 196/day)
   - Key insights text reflects the updated numbers

