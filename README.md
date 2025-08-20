# Friends of Friends Sales Dashboard

A Next.js-based sales analytics dashboard for Friends of Friends business, featuring interactive charts and data visualization.

## Features

- 📊 Interactive sales charts and visualizations
- 📈 Monthly, category, and daypart analysis
- 💾 CSV data export functionality
- 📱 Responsive design for all screen sizes
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Project Structure

```
├── app/
│   ├── page.tsx          # Main dashboard component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Sales Data

The dashboard displays sales analytics including:

- Monthly net sales trends
- Beverage vs food category breakdowns  
- Daypart analysis (breakfast, lunch, dinner)
- Average order values and daily order counts
- Key performance insights