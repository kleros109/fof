'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, LabelList } from 'recharts';
import { TrendingUp, DollarSign, Users, Clock, Download, FileText, Upload, Calendar, ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  monthlyData,
  beverageData,
  foodNoCategoryData,
  otherSalesData,
  categoryData,
  daypartData,
  hourlyData,
  dailyData,
  avgOrdersPerDayData,
  avgNetSalesPerDayData
} from '@/lib/salesData';

const STATIC_BREAKDOWNS: Record<string, { categoryData: any[], daypartData: any[] }> = {
  'June 2026': {
    categoryData: [
      { name: 'NA Beverage', value: 41569.79, percentage: 53.6 },
      { name: 'No Category', value: 25051.60, percentage: 32.3 },
      { name: 'Food', value: 7651.80, percentage: 9.9 },
      { name: 'Merchandise', value: 1373.80, percentage: 1.8 },
      { name: 'Bottled Beer', value: 724.61, percentage: 0.9 },
      { name: 'Wine', value: 644.60, percentage: 0.8 },
      { name: 'Draft Beer', value: 527.00, percentage: 0.7 }
    ],
    daypartData: [
      { name: 'Breakfast', sales: 31276.89, orders: 2152 },
      { name: 'Lunch', sales: 35536.45, orders: 2785 },
      { name: 'Dinner', sales: 4927.39, orders: 428 },
      { name: 'No Service', sales: 5469.47, orders: 415 },
      { name: 'Late Night', sales: 333.00, orders: 1 }
    ]
  },
  'May 2026': {
    categoryData: [
      { name: 'NA Beverage', value: 47821.73, percentage: 51.2 },
      { name: 'No Category', value: 30269.80, percentage: 32.4 },
      { name: 'Food', value: 9904.76, percentage: 10.6 },
      { name: 'Merchandise', value: 2276.93, percentage: 2.4 },
      { name: 'Bottled Beer', value: 1092.16, percentage: 1.2 },
      { name: 'Draft Beer', value: 1387.55, percentage: 1.5 },
      { name: 'Wine', value: 707.66, percentage: 0.8 }
    ],
    daypartData: [
      { name: 'Breakfast', sales: 35916.52, orders: 2371 },
      { name: 'Lunch', sales: 43724.57, orders: 3334 },
      { name: 'Dinner', sales: 7722.10, orders: 551 },
      { name: 'No Service', sales: 6037.40, orders: 439 },
      { name: 'Late Night', sales: 60.00, orders: 6 }
    ]
  },
  'August 2025': {
    categoryData: [
      { name: 'NA Beverage', value: 44399.23, percentage: 54.7 },
      { name: 'No Category', value: 25076.36, percentage: 30.9 },
      { name: 'Food', value: 7011.75, percentage: 8.6 },
      { name: 'Bottled Beer', value: 1923.42, percentage: 2.4 },
      { name: 'Draft Beer', value: 1137.80, percentage: 1.4 },
      { name: 'Wine', value: 958.80, percentage: 1.2 },
      { name: 'Merchandise', value: 688.50, percentage: 0.8 }
    ],
    daypartData: [
      { name: 'Breakfast', sales: 29513.01, orders: 0 },
      { name: 'Lunch', sales: 40688.81, orders: 0 },
      { name: 'Dinner', sales: 6804.96, orders: 0 },
      { name: 'No Service', sales: 4189.08, orders: 0 }
    ]
  }
};

export default function SalesDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Local storage dynamic state mapping
  const [localMonthlyData, setLocalMonthlyData] = useState(monthlyData);
  const [localBeverageData, setLocalBeverageData] = useState(beverageData);
  const [localOtherSalesData, setLocalOtherSalesData] = useState(otherSalesData);
  const [localAvgNetSalesPerDayData, setLocalAvgNetSalesPerDayData] = useState(avgNetSalesPerDayData);
  const [localAvgOrdersPerDayData, setLocalAvgOrdersPerDayData] = useState(avgOrdersPerDayData);
  
  const [uploadedDetails, setUploadedDetails] = useState<Record<string, { categoryData: any[], daypartData: any[] }>>({});
  const [breakdownMonth, setBreakdownMonth] = useState('June 2026');

  // Month-over-month comparison state
  const [compareMonthA, setCompareMonthA] = useState('');
  const [compareMonthB, setCompareMonthB] = useState('');

  const CHART_COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ];
  const CHART_GRID = 'hsl(var(--border))';
  const CHART_AXIS = 'hsl(var(--muted-foreground))';
  const CHART_LABEL = 'hsl(var(--foreground))';

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatCurrencyNoDecimals = (value: number) => `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

  // Load custom data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('fof_uploaded_months');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        
        // Merge arrays
        const newMonthlyRows = parsed.map((m: any) => m.monthlyRow);
        setLocalMonthlyData([...monthlyData, ...newMonthlyRows]);

        const newBeverageRows = parsed.map((m: any) => m.beverageRow);
        setLocalBeverageData([...beverageData, ...newBeverageRows]);

        const newOtherSalesRows = parsed.map((m: any) => m.otherSalesRow);
        setLocalOtherSalesData([...otherSalesData, ...newOtherSalesRows]);

        const newAvgSalesRows = parsed.map((m: any) => m.avgSalesRow);
        setLocalAvgNetSalesPerDayData([...avgNetSalesPerDayData, ...newAvgSalesRows]);

        const newAvgOrdersRows = parsed.map((m: any) => m.avgOrdersRow);
        setLocalAvgOrdersPerDayData([...avgOrdersPerDayData, ...newAvgOrdersRows]);

        // Details mapping for breakdowns
        const detailsMap: Record<string, { categoryData: any[], daypartData: any[] }> = {};
        parsed.forEach((m: any) => {
          detailsMap[m.monthlyRow.month] = {
            categoryData: m.categoryData,
            daypartData: m.daypartData
          };
        });
        setUploadedDetails(detailsMap);

        // Auto select latest month as default breakdown
        if (newMonthlyRows.length > 0) {
          const latestUploaded = newMonthlyRows[newMonthlyRows.length - 1].month;
          setBreakdownMonth(latestUploaded);
        }
      } catch (e) {
        console.error("Error parsing uploaded months", e);
      }
    }
  }, []);

  const generateCSV = () => {
    const csvHeader = 'Month,Net Sales,Tips,Tax Amount,Deferred Gift Cards,Total Amount,Average Order,Tips/Net Sales %\n';
    const csvData = localMonthlyData.map(row => {
      const tipsPercentage = ((row.tips / row.netSales) * 100).toFixed(1);
      return `"${row.month}",${row.netSales},${row.tips},${row.taxAmount},${row.deferredGiftCards},${row.totalAmount},${row.avgOrder},${tipsPercentage}%`;
    }).join('\n');

    const csvContent = csvHeader + csvData;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'monthly_sales_data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const latestMonth = localMonthlyData[localMonthlyData.length - 1];
  const latestMonthSales = latestMonth.netSales;
  const latestMonthTipsPercent = ((latestMonth.tips / latestMonth.netSales) * 100).toFixed(1) + '%';
  
  const getDaysInMonth = (monthName: string) => {
    if (monthName.toLowerCase().includes('february')) return 28;
    if (['april', 'june', 'september', 'november'].some(m => monthName.toLowerCase().includes(m))) return 30;
    return 31;
  };
  const latestMonthOrdersPerDay = Math.round(latestMonth.totalOrders / getDaysInMonth(latestMonth.month));
  const latestMonthAOV = latestMonth.avgOrder;
  const latestMonthName = latestMonth.month;

  // Helper to map active breakdown month to datasets
  const currentBreakdown = STATIC_BREAKDOWNS[breakdownMonth] || uploadedDetails[breakdownMonth] || {
    categoryData: [],
    daypartData: []
  };

  const availableBreakdownMonths = Array.from(new Set([
    'June 2026',
    'May 2026',
    'August 2025',
    ...Object.keys(uploadedDetails)
  ]));

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <img src="/images/FOF.jpg" alt="FoF Logo" className="h-12 w-auto rounded-lg object-contain" />
                <div>
                  <h1 className="text-headline-md">Friends of Friends</h1>
                  <p className="text-muted-foreground mt-1 text-body-md">January 2025 - June 2026 Performance Analysis</p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <Link
                  href="/commentary"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <FileText size={18} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View Commentary</span>
                  <span className="sm:hidden">Commentary</span>
                </Link>
                <Link
                  href="/sales-data"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <TrendingUp size={18} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View Monthly Table</span>
                  <span className="sm:hidden">Monthly Table</span>
                </Link>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Upload size={18} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Upload POS PDF</span>
                  <span className="sm:hidden">Upload</span>
                </Link>
                <button
                  onClick={generateCSV}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Download CSV Data</span>
                  <span className="sm:hidden">CSV</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-label-md text-muted-foreground">Monthly Sales</p>
                  <p className="text-headline-sm">
                    {formatCurrency(latestMonthSales)}
                  </p>
                  <span className="inline-block mt-1 rounded-full bg-accent px-2 py-0.5 text-label-sm font-medium text-accent-foreground">
                    {latestMonthName}
                  </span>
                </div>
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-m3-2 transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-label-md text-muted-foreground">Tips/Net Sales</p>
                  <p className="text-headline-sm">
                    {latestMonthTipsPercent}
                  </p>
                  <span className="inline-block mt-1 rounded-full bg-accent px-2 py-0.5 text-label-sm font-medium text-accent-foreground">
                    {latestMonthName}
                  </span>
                </div>
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-m3-2 transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-label-md text-muted-foreground">Orders / Day</p>
                  <p className="text-headline-sm">
                    {latestMonthOrdersPerDay.toLocaleString()}
                  </p>
                  <span className="inline-block mt-1 rounded-full bg-accent px-2 py-0.5 text-label-sm font-medium text-accent-foreground">
                    {latestMonthName}
                  </span>
                </div>
                <Users className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-m3-2 transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-label-md text-muted-foreground">Order Value</p>
                  <p className="text-headline-sm">
                    {formatCurrency(latestMonthAOV)}
                  </p>
                  <span className="inline-block mt-1 rounded-full bg-accent px-2 py-0.5 text-label-sm font-medium text-accent-foreground">
                    {latestMonthName}
                  </span>
                </div>
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MoM Comparison Widget */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-title-lg flex items-center gap-2">
              <ArrowUpDown className="text-primary animate-pulse" size={20} />
              Month-over-Month Comparison
            </CardTitle>
            <CardDescription>Select any two months to view side-by-side variance analysis.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-label-sm font-semibold text-muted-foreground uppercase mb-1.5 block">Month A (Base)</label>
                <select
                  value={compareMonthA}
                  onChange={(e) => setCompareMonthA(e.target.value)}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-body-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Choose Month A...</option>
                  {localMonthlyData.map((m) => (
                    <option key={m.month} value={m.month} disabled={m.month === compareMonthB}>{m.month}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-label-sm font-semibold text-muted-foreground uppercase mb-1.5 block">Month B (Compare)</label>
                <select
                  value={compareMonthB}
                  onChange={(e) => setCompareMonthB(e.target.value)}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-body-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Choose Month B...</option>
                  {localMonthlyData.map((m) => (
                    <option key={m.month} value={m.month} disabled={m.month === compareMonthA}>{m.month}</option>
                  ))}
                </select>
              </div>
            </div>

            {compareMonthA && compareMonthB && (() => {
              const rowA = localMonthlyData.find(r => r.month === compareMonthA);
              const rowB = localMonthlyData.find(r => r.month === compareMonthB);
              
              if (!rowA || !rowB) return null;

              const renderVariance = (valA: number, valB: number, isPercent = false, isCurrency = false) => {
                const diff = valB - valA;
                const pct = valA ? (diff / valA) * 100 : 0;
                const isPositive = diff >= 0;
                
                let diffStr = "";
                if (isCurrency) {
                  diffStr = `${isPositive ? '+' : ''}$${diff.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
                } else if (isPercent) {
                  diffStr = `${isPositive ? '+' : ''}${diff.toFixed(1)}%`;
                } else {
                  diffStr = `${isPositive ? '+' : ''}${diff.toLocaleString()}`;
                }

                const pctStr = `${isPositive ? '+' : ''}${pct.toFixed(1)}%`;

                return (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-label-sm font-semibold ${
                    isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {diffStr} ({pctStr})
                  </span>
                );
              };

              const aTipsPct = (rowA.tips / rowA.netSales) * 100;
              const bTipsPct = (rowB.tips / rowB.netSales) * 100;
              const tipsDiff = bTipsPct - aTipsPct;
              const isTipsPositive = tipsDiff >= 0;

              return (
                <div className="space-y-6">
                  {/* Variance Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <p className="text-label-sm font-semibold text-muted-foreground uppercase">Net Sales</p>
                      <div className="mt-1.5 flex justify-between items-baseline">
                        <span className="text-body-sm text-muted-foreground">{formatCurrencyNoDecimals(rowA.netSales)} → {formatCurrencyNoDecimals(rowB.netSales)}</span>
                      </div>
                      <div className="mt-2">
                        {renderVariance(rowA.netSales, rowB.netSales, false, true)}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-muted/20">
                      <p className="text-label-sm font-semibold text-muted-foreground uppercase">Orders</p>
                      <div className="mt-1.5 flex justify-between items-baseline">
                        <span className="text-body-sm text-muted-foreground">{rowA.totalOrders.toLocaleString()} → {rowB.totalOrders.toLocaleString()}</span>
                      </div>
                      <div className="mt-2">
                        {renderVariance(rowA.totalOrders, rowB.totalOrders)}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-muted/20">
                      <p className="text-label-sm font-semibold text-muted-foreground uppercase">Average Order (AOV)</p>
                      <div className="mt-1.5 flex justify-between items-baseline">
                        <span className="text-body-sm text-muted-foreground">${rowA.avgOrder.toFixed(2)} → ${rowB.avgOrder.toFixed(2)}</span>
                      </div>
                      <div className="mt-2">
                        {renderVariance(rowA.avgOrder, rowB.avgOrder)}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-muted/20">
                      <p className="text-label-sm font-semibold text-muted-foreground uppercase">Tips / Net Sales %</p>
                      <div className="mt-1.5 flex justify-between items-baseline">
                        <span className="text-body-sm text-muted-foreground">{aTipsPct.toFixed(1)}% → {bTipsPct.toFixed(1)}%</span>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-label-sm font-semibold ${
                          isTipsPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {isTipsPositive ? '+' : ''}{tipsDiff.toFixed(1)} pp
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Deep Breakdown MoM Comparison */}
                  {(() => {
                    const detailsA = STATIC_BREAKDOWNS[compareMonthA] || uploadedDetails[compareMonthA];
                    const detailsB = STATIC_BREAKDOWNS[compareMonthB] || uploadedDetails[compareMonthB];

                    if (!detailsA || !detailsB) {
                      return (
                        <div className="p-4 rounded-lg bg-accent/40 text-body-sm text-muted-foreground text-center font-medium">
                          Detailed Category and Daypart comparisons are only available for August 2025, May 2026, June 2026, and any custom uploaded months.
                        </div>
                      );
                    }

                    // Side-by-side category percentages
                    const categoriesList = Array.from(new Set([
                      ...detailsA.categoryData.map(c => c.name),
                      ...detailsB.categoryData.map(c => c.name)
                    ])).sort();

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
                        <div>
                          <h4 className="text-title-sm font-bold mb-3 text-foreground">Category Mix Shift</h4>
                          <div className="space-y-3">
                            {categoriesList.map(catName => {
                              const catA = detailsA.categoryData.find(c => c.name === catName);
                              const catB = detailsB.categoryData.find(c => c.name === catName);

                              const pctA = catA?.percentage || 0;
                              const pctB = catB?.percentage || 0;
                              const shift = pctB - pctA;

                              return (
                                <div key={catName} className="text-body-sm">
                                  <div className="flex justify-between items-baseline font-medium">
                                    <span>{catName}</span>
                                    <span className="text-muted-foreground">
                                      {pctA.toFixed(1)}% → {pctB.toFixed(1)}%{' '}
                                      <span className={shift >= 0 ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>
                                        ({shift >= 0 ? '+' : ''}{shift.toFixed(1)}%)
                                      </span>
                                    </span>
                                  </div>
                                  <div className="mt-1 h-2 w-full bg-muted rounded-full overflow-hidden flex">
                                    <div style={{ width: `${pctA}%` }} className="bg-primary/40 h-full"></div>
                                    <div style={{ width: `${pctB}%` }} className="bg-primary h-full"></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-title-sm font-bold mb-3 text-foreground">Daypart Shift</h4>
                          <div className="space-y-3">
                            {['Breakfast', 'Lunch', 'Dinner', 'No Service', 'Late Night'].map(dpName => {
                              const dpA = detailsA.daypartData.find(d => d.name === dpName);
                              const dpB = detailsB.daypartData.find(d => d.name === dpName);

                              const salesA = dpA?.sales || 0;
                              const salesB = dpB?.sales || 0;

                              const totSalesA = detailsA.categoryData.reduce((s, c) => s + c.value, 0);
                              const totSalesB = detailsB.categoryData.reduce((s, c) => s + c.value, 0);

                              const pctA = totSalesA ? (salesA / totSalesA) * 100 : 0;
                              const pctB = totSalesB ? (salesB / totSalesB) * 100 : 0;
                              const shift = pctB - pctA;

                              if (pctA === 0 && pctB === 0) return null;

                              return (
                                <div key={dpName} className="text-body-sm">
                                  <div className="flex justify-between items-baseline font-medium">
                                    <span>{dpName}</span>
                                    <span className="text-muted-foreground">
                                      {pctA.toFixed(1)}% → {pctB.toFixed(1)}%{' '}
                                      <span className={shift >= 0 ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>
                                        ({shift >= 0 ? '+' : ''}{shift.toFixed(1)}%)
                                      </span>
                                    </span>
                                  </div>
                                  <div className="mt-1 h-2 w-full bg-muted rounded-full overflow-hidden flex">
                                    <div style={{ width: `${pctA}%` }} className="bg-primary/40 h-full"></div>
                                    <div style={{ width: `${pctB}%` }} className="bg-primary h-full"></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              );
            })()}
          </CardContent>
        </Card>

        {/* Net Sales by Month Column Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Net Sales by Month</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={localMonthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrencyNoDecimals}
                domain={[65000, 115000]}
                ticks={[65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000]}
                interval={0}
                tick={{ fontSize: 14 }}
                axisLine={true}
                tickLine={true}
              />
              <Tooltip formatter={(value) => formatCurrencyNoDecimals(value as number)} />
              <Bar dataKey="netSales" fill={CHART_COLORS[0]}>
                <LabelList
                  dataKey="netSales"
                  position="top"
                  formatter={formatCurrencyNoDecimals}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Breakdown Month Selector & Charts Grid */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-title-lg font-bold text-foreground">Detailed Breakdowns</h2>
          <div className="flex items-center gap-2">
            <span className="text-body-sm text-muted-foreground">Select Month:</span>
            <select
              value={breakdownMonth}
              onChange={(e) => setBreakdownMonth(e.target.value)}
              className="rounded border border-input bg-background px-3 py-1.5 text-body-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {availableBreakdownMonths.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category ({breakdownMonth})</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={currentBreakdown.categoryData}
                  cx="40%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percentage }: { name: string; percentage: number }) => `${name} ${percentage}%`}
                  outerRadius={90}
                  fill={CHART_COLORS[0]}
                  dataKey="value"
                >
                  {currentBreakdown.categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrencyNoDecimals(value as number)} />
              </PieChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Daypart Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Daypart ({breakdownMonth})</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={currentBreakdown.daypartData} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  tickFormatter={formatCurrencyNoDecimals}
                  tick={{ fontSize: 14 }}
                  interval={0}
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip formatter={(value) => formatCurrencyNoDecimals(value as number)} />
                <Bar dataKey="sales" fill={CHART_COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Beverage Sales Percentage */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Beverage % Sales</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={localBeverageData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={['auto', 'auto']}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line type="monotone" dataKey="percentage" stroke={CHART_COLORS[2]} strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Shows the percentage of total sales from beverages (NA Beverages + Wine + Draft Beer + Bottled Beer)</p>
          </div>
          </CardContent>
        </Card>

        {/* Beverage Sales by Month */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Beverage Sales by Month</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={localBeverageData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrencyNoDecimals}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[30000, 55000]}
              />
              <Tooltip formatter={(value) => formatCurrencyNoDecimals(value as number)} />
              <Bar dataKey="totalBeverages" fill={CHART_COLORS[2]}>
                <LabelList
                  dataKey="totalBeverages"
                  position="top"
                  formatter={formatCurrencyNoDecimals}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Total beverage sales by month including NA Beverages, Wine, Draft Beer, and Bottled Beer</p>
          </div>
          </CardContent>
        </Card>

        {/* Other Sales by Month */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Other Sales by Month</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={localOtherSalesData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrencyNoDecimals}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[25000, 65000]}
              />
              <Tooltip formatter={(value) => formatCurrencyNoDecimals(value as number)} />
              <Bar dataKey="otherSales" fill={CHART_COLORS[3]}>
                <LabelList
                  dataKey="otherSales"
                  position="top"
                  formatter={formatCurrencyNoDecimals}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Other sales by month including Food, No Category items, and Merchandise (calculated as Net Sales minus Beverage Sales)</p>
          </div>
          </CardContent>
        </Card>

        {/* Average Orders Per Day Chart */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Average Number of Orders Per Day by Period</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={localAvgOrdersPerDayData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[180, 240]}
              />
              <Tooltip
                formatter={(value) => [`${value} orders/day`, 'Avg Orders Per Day']}
                labelFormatter={(label) => `Period: ${label}`}
              />
              <Bar dataKey="avgOrdersPerDay" fill={CHART_COLORS[1]}>
                <LabelList
                  dataKey="avgOrdersPerDay"
                  position="top"
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div className="callout-success p-3">
              <p className="text-label-md font-medium">Highest Daily Orders</p>
              <p className="text-title-md font-semibold">228/day</p>
              <p className="text-label-sm opacity-80">March 2025</p>
            </div>
            <div className="callout-error p-3">
              <p className="text-label-md font-medium">Lowest Daily Orders</p>
              <p className="text-title-md font-semibold">188/day</p>
              <p className="text-label-sm opacity-80">September 2025</p>
            </div>
            <div className="callout-info p-3">
              <p className="text-label-md font-medium">Current Period</p>
              <p className="text-title-md font-semibold">193/day</p>
              <p className="text-label-sm opacity-80">June 2026</p>
            </div>
            <div className="callout-warning p-3">
              <p className="text-label-md font-medium">18-Period Average</p>
              <p className="text-title-md font-semibold">204/day</p>
              <p className="text-label-sm opacity-80">Jan 2025 - June 2026</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Shows daily order volume calculated by dividing total monthly orders by number of days in each month</p>
          </div>
          </CardContent>
        </Card>

        {/* Average Net Sales Per Day Chart */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Average Net Sales Per Day by Month</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={localAvgNetSalesPerDayData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis
                tickFormatter={formatCurrencyNoDecimals}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[2000, 3800]}
              />
              <Tooltip
                formatter={(value) => [formatCurrencyNoDecimals(value as number), 'Avg Net Sales Per Day']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="avgNetSalesPerDay" fill={CHART_COLORS[2]}>
                <LabelList
                  dataKey="avgNetSalesPerDay"
                  position="top"
                  formatter={formatCurrencyNoDecimals}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div className="callout-success p-3">
              <p className="text-label-md font-medium">Highest Daily Sales</p>
              <p className="text-title-md font-semibold">$3,559/day</p>
              <p className="text-label-sm opacity-80">March 2025</p>
            </div>
            <div className="callout-error p-3">
              <p className="text-label-md font-medium">Lowest Daily Sales</p>
              <p className="text-title-md font-semibold">$2,498/day</p>
              <p className="text-label-sm opacity-80">September 2025</p>
            </div>
            <div className="callout-info p-3">
              <p className="text-label-md font-medium">Current Period</p>
              <p className="text-title-md font-semibold">$2,585/day</p>
              <p className="text-label-sm opacity-80">June 2026</p>
            </div>
            <div className="callout-warning p-3">
              <p className="text-label-md font-medium">18-Period Average</p>
              <p className="text-title-md font-semibold">$2,900/day</p>
              <p className="text-label-sm opacity-80">Jan 2025 - June 2026</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Shows average daily net sales calculated by dividing total net sales by number of days in each month</p>
          </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            <div className="callout-info p-4">
              <h3 className="text-title-md font-semibold mb-2">Sales Performance</h3>
              <p className="text-body-md">1H2026 Net Sales totaled $515,199, averaging $85,866/mo. 2Q2026 grew to $260,133 (+2.0% QoQ over 1Q26) despite a June contraction to $77,543 (193 orders/day) following a peak in May of $93,461 (216 orders/day).</p>
            </div>
            <div className="callout-success p-4">
              <h3 className="text-title-md font-semibold mb-2">Category Leaders</h3>
              <p className="text-body-md">For June 2026, NA Beverages led at 53.6% of sales, with Food at 9.9%. Wavy Merchandise grew to 1.8% ($1,374), representing a +94.1% MoM surge. Total beverages comprised 56.1% of June sales.</p>
            </div>
            <div className="callout-warning p-4">
              <h3 className="text-title-md font-semibold mb-2">Customer Traffic & AOV</h3>
              <p className="text-body-md">Traffic averaged 205 orders/day in 1H26, peaking in May (216/day) before easing to 193/day in June. June AOV fell to $13.41, primarily driven by a drop in alcohol beverage ticket sizes.</p>
            </div>
          </div>
          </CardContent>
        </Card>

        {/* Uncategorized Toast POS Items Section */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl">Uncategorized Toast POS Items</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Wavy Burgers menu items currently reported under &quot;No Sales Category Assigned&quot;</p>
              </div>
              <div className="flex gap-2">
                <a href="/uncategorized_toast_items.xlsx" download className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-label-md font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Download size={14} /> Download XLSX
                </a>
                <a href="/uncategorized_toast_items.csv" download className="inline-flex items-center gap-1.5 rounded-sm border border-outline bg-background px-3 py-1.5 text-label-md font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Download size={14} /> Download CSV
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Overview Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">2,820</p>
                <p className="text-xs text-muted-foreground mt-1">Uncategorized Items Sold (June 2026)</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">$25,051.60</p>
                <p className="text-xs text-muted-foreground mt-1">Uncategorized Net Sales (June 2026)</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">32.3%</p>
                <p className="text-xs text-muted-foreground mt-1">Share of Total Net Sales</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">Wavy Burgers</p>
                <p className="text-xs text-muted-foreground mt-1">Associated Sub-Concept</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Side: Search and List */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />

                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase">Item Name</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase">Concept</th>
                        <th className="px-4 py-2 text-right text-xs font-semibold text-muted-foreground uppercase">Typical Price</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase">Target Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {[
                        { name: 'The OG (Smash Burger)', concept: 'Wavy Burgers', price: '$10.00 - $12.00', target: 'Food - Wavy Burgers' },
                        { name: 'Chili Crisp OG', concept: 'Wavy Burgers', price: '$11.00 - $13.00', target: 'Food - Wavy Burgers' },
                        { name: 'Bacon Heirloom Burger', concept: 'Wavy Burgers', price: '$11.00 - $13.00', target: 'Food - Wavy Burgers' },
                        { name: 'Prosciutto Sando', concept: 'Wavy Burgers', price: '$10.00 - $12.00', target: 'Food - Wavy Burgers' },
                        { name: 'Crispy Tater Tots', concept: 'Wavy Burgers', price: '$4.00 - $6.00', target: 'Sides - Wavy Burgers' },
                        { name: 'Breakfast Biscuit Sandwiches', concept: 'Wavy Burgers', price: '$6.00 - $8.00', target: 'Food - Wavy Burgers' }
                      ]
                        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((item, idx) => (
                          <tr key={idx} className="hover:bg-muted/50 transition-colors">
                            <td className="px-4 py-2 text-sm font-semibold">{item.name}</td>
                            <td className="px-4 py-2 text-xs"><span className="rounded-full bg-warning-container px-2 py-0.5 text-label-sm font-medium text-foreground">{item.concept}</span></td>
                            <td className="px-4 py-2 text-sm text-right font-medium">{item.price}</td>
                            <td className="px-4 py-2 text-xs"><span className="rounded-full bg-accent px-2 py-0.5 text-label-sm font-medium text-accent-foreground">{item.target}</span></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Side: Setup Instructions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">Toast POS Setup Instructions</h4>
                <div className="space-y-3">
                  {[
                    { step: '1', title: 'Navigate to Product Mix', text: 'Log in to Toast Web, go to Reports > Menus > Product Mix (PMIX), and toggle on the new version of the PMIX report.' },
                    { step: '2', title: 'Filter for Unassigned Items', text: 'Click More filters, open the Sales categories dropdown, select No sales category, and click Apply filters.' },
                    { step: '3', title: 'Assign Category in Menu Editor', text: 'Open the Menu Editor (under Menus > Bulk Edit / Menu Setup), locate the Wavy Burgers items, and set their Sales Category.' },
                    { step: '4', title: 'Publish Changes', text: 'Click the Publish button in the top right to push the updates to your POS devices and clean up future reports.' }
                  ].map((inst, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{inst.step}</div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{inst.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{inst.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="callout-warning p-3 text-body-sm mt-4">
                  <strong>Why this matters:</strong> Leaving these items unassigned makes it impossible to analyze COGS (Cost of Goods Sold) and prime costs per sub-concept. Mappings will isolate Wavy Burgers food sales from Friends of Friends pastry sales.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
