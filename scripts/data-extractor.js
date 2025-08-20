#!/usr/bin/env node

/**
 * Sales Data Extractor for FOF Dashboard
 * This helper script provides utilities for extracting data from sales summaries
 */

const fs = require('fs');
const path = require('path');

class SalesDataExtractor {
  constructor() {
    this.dashboardPath = path.join(__dirname, '..', 'app', 'page.tsx');
  }

  /**
   * Extract month name from a date range string
   * @param {string} dateRange - e.g., "July 19, 2025 - August 18, 2025"
   * @returns {string} - e.g., "August 2025"
   */
  extractMonthFromDateRange(dateRange) {
    const matches = dateRange.match(/(\w+)\s+\d+,\s+(\d{4})\s*-\s*(\w+)\s+\d+,\s+(\d{4})/);
    if (matches) {
      const [, startMonth, startYear, endMonth, endYear] = matches;
      // Use the end month as the primary month
      return `${endMonth} ${endYear}`;
    }
    return 'Unknown Month';
  }

  /**
   * Calculate percentage with proper rounding
   * @param {number} part
   * @param {number} total
   * @returns {number}
   */
  calculatePercentage(part, total) {
    return Math.round((part / total) * 1000) / 10; // Round to 1 decimal place
  }

  /**
   * Calculate month-over-month growth
   * @param {number} current
   * @param {number} previous
   * @returns {number}
   */
  calculateMoMGrowth(current, previous) {
    if (!previous) return null;
    return Math.round(((current - previous) / previous) * 1000) / 10;
  }

  /**
   * Generate dashboard data object from extracted PDF data
   * @param {Object} pdfData - Extracted data from PDF
   * @returns {Object} - Formatted data for dashboard
   */
  generateDashboardData(pdfData) {
    const {
      dateRange,
      netSales,
      tips,
      taxAmount,
      deferredGiftCards,
      totalAmount,
      totalOrders,
      totalGuests,
      categories,
      dayparts
    } = pdfData;

    const month = this.extractMonthFromDateRange(dateRange);
    const avgOrder = Math.round((netSales / totalOrders) * 100) / 100;

    // Calculate beverage totals
    const beverageCategories = ['NA Beverage', 'Bottled Beer', 'Draft Beer', 'Wine'];
    const totalBeverages = categories
      .filter(cat => beverageCategories.includes(cat.name))
      .reduce((sum, cat) => sum + cat.netSales, 0);

    const beveragePercentage = this.calculatePercentage(totalBeverages, netSales);

    return {
      monthlyData: {
        month,
        netSales,
        tips,
        taxAmount,
        deferredGiftCards,
        totalAmount,
        avgOrder,
        totalOrders,
        totalGuests
      },
      beverageData: {
        month,
        totalBeverages,
        totalSales: netSales,
        percentage: beveragePercentage,
        momGrowth: null // Will need previous month data to calculate
      },
      categoryData: categories.map(cat => ({
        name: cat.name,
        value: cat.netSales,
        percentage: this.calculatePercentage(cat.netSales, netSales)
      })),
      daypartData: dayparts.map(dp => ({
        name: dp.name,
        sales: dp.netSales,
        orders: dp.orders,
        percentage: this.calculatePercentage(dp.orders, totalOrders)
      }))
    };
  }

  /**
   * Update the dashboard file with new data
   * @param {Object} newData - New dashboard data
   */
  updateDashboard(newData) {
    console.log('📝 Updating dashboard with new data...');
    console.log('📊 Data to be added:', JSON.stringify(newData, null, 2));
    
    // This would require more complex file manipulation
    // For now, we'll provide the data structure for manual update
    console.log('\n🔄 Manual update required:');
    console.log('Add this data to your dashboard arrays in app/page.tsx');
  }
}

// Example usage template
const examplePDFData = {
  dateRange: "July 19, 2025 - August 18, 2025",
  netSales: 82636.05,
  tips: 9045.93,
  taxAmount: 7259.10,
  deferredGiftCards: 210.00,
  totalAmount: 99151.08,
  totalOrders: 6172,
  totalGuests: 6172,
  categories: [
    { name: 'NA Beverage', netSales: 45144.85, items: 7396 },
    { name: 'No Sales Category Assigned', netSales: 25060.65, items: 2658 },
    { name: 'Food', netSales: 7538.50, items: 1369 },
    { name: 'Bottled Beer', netSales: 1932.75, items: 472 },
    { name: 'Draft Beer', netSales: 1161.00, items: 156 },
    { name: 'Wine', netSales: 1038.80, items: 65 },
    { name: 'Wavy Merchandise', netSales: 759.50, items: 40 }
  ],
  dayparts: [
    { name: 'Breakfast', netSales: 28781.65, orders: 2062 },
    { name: 'Lunch', netSales: 41463.89, orders: 3144 },
    { name: 'Dinner', netSales: 8272.75, orders: 608 },
    { name: 'No Service', netSales: 4117.76, orders: 358 }
  ]
};

if (require.main === module) {
  const extractor = new SalesDataExtractor();
  const dashboardData = extractor.generateDashboardData(examplePDFData);
  console.log('Generated Dashboard Data:', JSON.stringify(dashboardData, null, 2));
}

module.exports = SalesDataExtractor;