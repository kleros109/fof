#!/bin/bash

# Dashboard Update Script for Friends of Friends
# Usage: ./update-dashboard.sh "/path/to/new-sales-summary.pdf"

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <path-to-sales-summary-pdf>"
    echo "Example: $0 '/home/chris/Documents/FOF Sales summary 20250818.pdf'"
    exit 1
fi

PDF_PATH="$1"

if [ ! -f "$PDF_PATH" ]; then
    echo "Error: PDF file not found at $PDF_PATH"
    exit 1
fi

echo "🔄 Starting dashboard update process..."
echo "📄 Processing PDF: $PDF_PATH"

# Use Claude Code to process the PDF and update dashboard
echo "📊 Extracting data from PDF and updating dashboard..."

# Create a temporary command file for Claude
cat > /tmp/claude_update_command.txt << EOF
I have a new sales summary PDF at: $PDF_PATH

Please:
1. Read and extract the sales data from this PDF
2. Update the dashboard data in app/page.tsx with the new monthly data
3. Update all relevant data arrays (monthlyData, beverageData, categoryData, daypartData)
4. Commit and push the changes to deploy the updated dashboard

The PDF contains sales data that should be added as a new month or update existing month data.
EOF

echo "🤖 Running Claude Code to process the update..."
echo "Please run: claude < /tmp/claude_update_command.txt"
echo ""
echo "Or manually run:"
echo "claude 'Read and update dashboard with data from: $PDF_PATH'"

# Clean up
rm -f /tmp/claude_update_command.txt

echo "✅ Update script completed. Dashboard will be updated via Claude Code."