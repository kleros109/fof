# FOF Dashboard Automation Guide

This guide explains how to easily update your Friends of Friends sales dashboard with new data.

## Quick Start

When you get a new sales summary PDF, follow these simple steps:

### Method 1: Fully Automated (Recommended)
```bash
# Navigate to your project
cd /home/chris/Documents/fof

# Run the update script with your new PDF
./update-dashboard.sh "/path/to/your/new-sales-summary.pdf"
```

### Method 2: Using Claude Code Directly
```bash
# In your project directory
claude "Update dashboard with sales data from: /path/to/new-pdf.pdf"
```

### Method 3: Manual Process
1. Copy your PDF to the Documents folder
2. Open terminal in your FOF project folder
3. Run: `claude`
4. Type: "Read and update dashboard with data from: [PDF path]"

## Available Scripts

### 📊 `./update-dashboard.sh`
**Purpose:** Processes new sales PDF and updates dashboard
**Usage:** `./update-dashboard.sh "/path/to/sales-summary.pdf"`
**What it does:**
- Validates PDF exists
- Creates Claude Code command to process the data
- Provides instructions for updating dashboard

### 🚀 `./deploy.sh` 
**Purpose:** Quick deployment after making changes
**Usage:** `./deploy.sh "Your commit message"`
**What it does:**
- Stages all changes
- Commits with proper formatting
- Pushes to GitHub (triggers Vercel deployment)

### 🔧 `scripts/data-extractor.js`
**Purpose:** Helper utilities for data processing
**Usage:** `node scripts/data-extractor.js`
**Features:**
- Parses sales data structures
- Calculates percentages and growth
- Formats data for dashboard

## Workflow Examples

### Adding New Monthly Data
```bash
# Example: New September 2025 data
./update-dashboard.sh "/home/chris/Documents/FOF Sales summary 20250915.pdf"

# After Claude Code processes the data:
./deploy.sh "Add September 2025 sales data"
```

### Updating Existing Month
```bash
# Example: Updated August data
./update-dashboard.sh "/home/chris/Documents/FOF Sales summary 20250831.pdf"
./deploy.sh "Update August 2025 with final numbers"
```

## Data Structure

Your PDFs should contain:
- **Revenue Summary:** Net sales, tips, tax, total amount
- **Service Summary:** Total orders, guests, averages
- **Category Breakdown:** Sales by product category
- **Daypart Analysis:** Breakfast, lunch, dinner, no service
- **Date Range:** To determine which month the data represents

## Troubleshooting

### PDF Not Found
```bash
# Make sure path is correct
ls -la "/home/chris/Documents/FOF Sales summary 20250818.pdf"
```

### Build Errors
```bash
# Check for TypeScript errors
npm run build

# Run linting
npm run lint
```

### Git Issues
```bash
# Check status
git status

# Reset if needed
git reset --hard HEAD
```

## Tips for Success

1. **Consistent File Names:** Keep PDF names consistent with dates
2. **Backup First:** Always backup your dashboard before major changes
3. **Test Locally:** Run `npm run dev` to test changes locally
4. **Monitor Deployment:** Check Vercel dashboard for deployment status

## Advanced Automation Ideas

### Future Enhancements:
1. **Email Integration:** Auto-process PDFs from email attachments
2. **API Integration:** Direct connection to Toast POS system
3. **Scheduled Updates:** Cron jobs for regular data pulls
4. **Data Validation:** Automatic checking for data consistency

## File Locations

- Dashboard code: `app/page.tsx`
- Scripts: `scripts/`
- Data arrays: Inside `app/page.tsx` (lines 11-250)
- Automation scripts: Root directory

## Support

If you encounter issues:
1. Check this documentation
2. Review error messages carefully  
3. Test with the example PDF data structure
4. Ensure all file paths are correct

---

*Last updated: $(date)*