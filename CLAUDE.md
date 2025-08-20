# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based sales dashboard application for "Friends of Friends" business, featuring interactive charts and data visualization for restaurant/café sales analytics. The project has been converted from a standalone TSX component to a deployable Next.js application.

## Commands

### Development
- `npm install` - Install all dependencies
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment
- Optimized for Vercel deployment with zero configuration
- Uses Next.js static export (`output: 'export'`) for maximum compatibility

## Project Structure

```
├── app/
│   ├── page.tsx          # Main dashboard page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Tailwind CSS imports
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration with static export
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## Technology Stack

- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Charts/Visualization**: Recharts library for interactive data visualization
- **Icons**: Lucide React icon library
- **Deployment**: Optimized for Vercel with static export

## Architecture

### Main Component: SalesDashboard (app/page.tsx)
The application uses Next.js App Router with a single main page component that includes:

- **Client-Side Rendering**: Uses `'use client'` directive for interactive features
- **State Management**: Simple React useState for UI state
- **Static Data**: Hardcoded sales data arrays for Jan-Aug 2025
- **TypeScript**: Fully typed with proper type annotations

### Data Structure
- Monthly sales data with net sales, tips, tax, and order metrics
- Beverage sales analysis with month-over-month growth
- Category breakdown (NA Beverages, Food, Beer, Wine, Merchandise)
- Daypart analysis (Breakfast, Lunch, Dinner, No Service)
- Daily and hourly sales patterns

### Data Visualization
- **Bar Charts**: Monthly sales trends, daypart analysis, beverage percentages
- **Pie Charts**: Category distribution with custom colors
- **Data Tables**: Comprehensive monthly sales table with CSV export
- **Key Metrics Cards**: Summary statistics with icons
- **Responsive Design**: Grid layouts that adapt to screen sizes

## Key Features

1. **Interactive Charts**: Recharts with hover tooltips and responsive containers
2. **CSV Export**: Client-side CSV generation and download functionality  
3. **Responsive Layout**: Tailwind CSS grid system for mobile-first design
4. **TypeScript Support**: Full type safety with proper interfaces
5. **Static Export**: Builds to static files for easy deployment

## Development Workflow

1. **Local Development**: Use `npm run dev` for hot reloading
2. **Type Checking**: TypeScript compiler runs during build
3. **Linting**: ESLint with Next.js config for code quality
4. **Build Process**: `npm run build` creates optimized static export
5. **Deployment**: Push to GitHub and connect to Vercel for automatic deployments

## Business Metrics Tracked

- **Financial**: Net Sales, Tips, Tax Amount, Deferred Gift Cards, Total Amount
- **Operations**: Total Orders, Average Order Value, Orders per Day
- **Categories**: Beverage vs Food sales percentages and trends
- **Timing**: Daypart performance analysis (Breakfast 34.8%, Lunch 50.2%, Dinner 10.0%)
- **Trends**: Month-over-month growth analysis and seasonal patterns

## Deployment Notes

- **Vercel Optimization**: Uses `output: 'export'` for static hosting
- **Image Optimization**: Disabled for static export compatibility
- **Environment**: No environment variables required (static data)
- **Performance**: Optimized bundle with tree-shaking and code splitting

## Automation Scripts

This project includes automation scripts for updating dashboard data:

### Quick Commands

- **Update from PDF:** `./update-dashboard.sh "/path/to/sales-summary.pdf"`
- **Deploy changes:** `./deploy.sh "commit message"`  
- **Process data:** `node scripts/data-extractor.js`

### Workflow

1. Save new sales summary PDF to Documents folder
2. Run update script with PDF path
3. Claude Code will extract data and update dashboard
4. Run deploy script to push changes live

See AUTOMATION.md for detailed instructions.