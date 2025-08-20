# FOF Dashboard Updater Agent

**Agent Name:** `fof-dashboard-updater`  
**Description:** Specialized agent for updating the Friends of Friends sales dashboard with new sales summary PDFs

## Purpose

This agent automatically processes Toast POS sales summary PDFs and updates the FOF dashboard with new monthly data, including:
- Monthly sales metrics
- Beverage performance data  
- Category breakdowns
- Daypart analysis
- Automatic deployment

## Usage

```bash
# Update dashboard with new sales PDF
claude --agent fof-dashboard-updater "Update dashboard with /path/to/sales-summary.pdf"

# Or use the Task tool
Task: Use fof-dashboard-updater agent to process new sales data from PDF at /path/to/file.pdf
```

## Agent Capabilities

### ✅ **Data Extraction**
- Read and parse Toast POS sales summary PDFs
- Extract key metrics: net sales, tips, tax, orders, guests
- Parse category breakdowns and daypart analysis
- Handle date ranges and month identification

### ✅ **Dashboard Updates**
- Update `monthlyData` array with new monthly metrics
- Update `beverageData` with beverage-specific calculations
- Update `categoryData` with sales category percentages
- Update `daypartData` with breakfast/lunch/dinner analysis
- Calculate month-over-month growth rates

### ✅ **Data Validation**
- Verify PDF data completeness
- Check for duplicate months
- Validate numerical calculations
- Ensure data consistency across arrays

### ✅ **Deployment**
- Commit changes with descriptive messages
- Push to GitHub repository
- Trigger Vercel deployment
- Provide deployment status and live URL

## Required Tools Access

- **Read:** For reading PDFs and existing dashboard files
- **Edit/MultiEdit:** For updating dashboard data arrays
- **Bash:** For git operations and deployment
- **TodoWrite:** For tracking update progress

## Expected Input Format

The agent expects Toast POS sales summary PDFs containing:
- Revenue Summary (net sales, tips, tax, total)
- Service Mode Summary (orders, guests, averages)
- Sales Category Summary (by product category)
- Service/Daypart Summary (breakfast, lunch, dinner)
- Date range information

## Output

The agent will:
1. Confirm PDF processing and data extraction
2. Show what data will be updated
3. Update all relevant dashboard arrays
4. Commit and deploy changes
5. Provide live dashboard URL

## Error Handling

- Invalid PDF format or path
- Missing required data fields
- Duplicate month detection
- Git/deployment failures
- Data validation errors

## Examples

### Update with New Monthly Data
```bash
claude --agent fof-dashboard-updater "Process September 2025 sales data from /home/chris/Documents/FOF Sales summary 20250930.pdf"
```

### Update Existing Month
```bash  
claude --agent fof-dashboard-updater "Update August 2025 final numbers from /home/chris/Documents/FOF Sales summary 20250831-final.pdf"
```

## Integration Notes

- Works with existing automation scripts as backup
- Maintains data format consistency
- Preserves existing dashboard structure
- Compatible with Vercel auto-deployment

## Validation Checks

- ✅ PDF exists and is readable
- ✅ Required data fields present
- ✅ Date range properly parsed
- ✅ Calculations are accurate
- ✅ No data corruption in arrays
- ✅ Git repository is clean
- ✅ Deployment succeeds

---

*This agent automates the complete workflow from PDF → Dashboard Update → Live Deployment*