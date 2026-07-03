'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, ArrowUpDown, ArrowUp, ArrowDown, Calendar, DollarSign, Filter, RefreshCw } from 'lucide-react';
import { monthlyData } from '@/lib/salesData';

type SortKey = 'month' | 'netSales' | 'tips' | 'taxAmount' | 'deferredGiftCards' | 'totalAmount' | 'avgOrder' | 'tipsPercent';

export default function SalesDataTable() {
  const [uploadedMonths, setUploadedMonths] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('month');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [yearFilter, setYearFilter] = useState<string>('All');
  const [minSalesFilter, setMinSalesFilter] = useState<string>('');

  // Hydrate local session data
  useEffect(() => {
    const stored = localStorage.getItem('fof_uploaded_months');
    if (stored) {
      try {
        setUploadedMonths(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // Combine static and dynamic data
  const rawData = [
    ...monthlyData,
    ...uploadedMonths.map(m => m.monthlyRow)
  ];

  // Helper to parse year from month string (e.g. "January 2025" -> "2025")
  const getYear = (monthStr: string) => {
    const parts = monthStr.split(' ');
    return parts[parts.length - 1] || '';
  };

  // Helper to map month name to number for chron sorting
  const getMonthNumber = (monthStr: string) => {
    const parts = monthStr.split(' ');
    const name = parts[0] || '';
    const year = parseInt(parts[1] || '0', 10);
    const months: Record<string, number> = {
      january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
      july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
    };
    return year * 12 + (months[name.toLowerCase()] ?? 0);
  };

  // Filter dataset
  const filteredData = rawData.filter(row => {
    // 1. Year Filter
    if (yearFilter !== 'All' && getYear(row.month) !== yearFilter) {
      return false;
    }
    // 2. Sales Filter
    if (minSalesFilter) {
      const minVal = parseFloat(minSalesFilter);
      if (!isNaN(minVal) && row.netSales < minVal) {
        return false;
      }
    }
    return true;
  });

  // Sort dataset
  const sortedData = [...filteredData].sort((a, b) => {
    let aVal: any = a[sortBy as keyof typeof a];
    let bVal: any = b[sortBy as keyof typeof b];

    // Custom mappings for keys not directly on raw object or needing conversion
    if (sortBy === 'month') {
      aVal = getMonthNumber(a.month);
      bVal = getMonthNumber(b.month);
    } else if (sortBy === 'tipsPercent') {
      aVal = a.tips / a.netSales;
      bVal = b.tips / b.netSales;
    }

    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('desc'); // Default to high-to-low for numbers
    }
  };

  const resetFilters = () => {
    setYearFilter('All');
    setMinSalesFilter('');
    setSortBy('month');
    setSortOrder('asc');
  };

  const generateCSV = () => {
    const csvHeader =
      'Month,Net Sales,Tips,Tax Amount,Deferred Gift Cards,Total Amount,Average Order,Tips/Net Sales %\n';
    const csvData = sortedData
      .map((row) => {
        const tipsPercentage = ((row.tips / row.netSales) * 100).toFixed(1);
        return `"${row.month}",${row.netSales},${row.tips},${row.taxAmount},${row.deferredGiftCards},${row.totalAmount},${row.avgOrder},${tipsPercentage}%`;
      })
      .join('\n');

    const csvContent = csvHeader + csvData;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'filtered_sales_data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  // Dynamically calculate averages based on current view/filter
  const dataLen = sortedData.length;
  const avgNetSales = dataLen ? sortedData.reduce((sum, m) => sum + m.netSales, 0) / dataLen : 0;
  const avgTips = dataLen ? sortedData.reduce((sum, m) => sum + m.tips, 0) / dataLen : 0;
  const avgTax = dataLen ? sortedData.reduce((sum, m) => sum + m.taxAmount, 0) / dataLen : 0;
  const avgDeferred = dataLen ? sortedData.reduce((sum, m) => sum + m.deferredGiftCards, 0) / dataLen : 0;
  const avgTotalAmount = dataLen ? sortedData.reduce((sum, m) => sum + m.totalAmount, 0) / dataLen : 0;
  const avgAov = dataLen ? sortedData.reduce((sum, m) => sum + m.avgOrder, 0) / dataLen : 0;
  const avgTipsPercent = dataLen ? (sortedData.reduce((sum, m) => sum + (m.tips / m.netSales), 0) / dataLen) * 100 : 0;

  const renderSortIndicator = (key: SortKey) => {
    if (sortBy !== key) {
      return <ArrowUpDown size={14} className="ml-1 opacity-40 group-hover:opacity-100 transition-opacity" />;
    }
    return sortOrder === 'asc' ? (
      <ArrowUp size={14} className="ml-1 text-primary font-bold" />
    ) : (
      <ArrowDown size={14} className="ml-1 text-primary font-bold" />
    );
  };

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-primary hover:underline mb-2 transition-colors text-sm sm:text-base font-semibold"
                >
                  <ArrowLeft size={18} />
                  Back to Dashboard
                </Link>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Monthly Sales Data</h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                  Detailed monthly performance metrics. Use sort and filters to analyze trends.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={generateCSV}
                  disabled={dataLen === 0}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Download size={18} />
                  <span>Export Filtered CSV</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters Controls Panel */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 flex flex-col sm:flex-row flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px] w-full">
              <label className="text-label-sm font-semibold text-muted-foreground uppercase flex items-center gap-1.5 mb-1.5">
                <Calendar size={14} />
                Filter by Year
              </label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full rounded border border-input bg-background px-3 py-2 text-body-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="All">All Years</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px] w-full">
              <label className="text-label-sm font-semibold text-muted-foreground uppercase flex items-center gap-1.5 mb-1.5">
                <DollarSign size={14} />
                Min Net Sales Threshold
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground text-body-md">$</span>
                <input
                  type="number"
                  placeholder="e.g. 80000"
                  value={minSalesFilter}
                  onChange={(e) => setMinSalesFilter(e.target.value)}
                  className="w-full rounded border border-input bg-background pl-7 pr-3 py-2 text-body-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-1.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2.5 rounded text-body-md font-medium transition-colors w-full sm:w-auto"
              >
                <RefreshCw size={16} />
                Reset
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader className="pb-3 border-b flex flex-row items-center justify-between">
            <CardTitle>Performance Records ({dataLen} months)</CardTitle>
            {dataLen !== rawData.length && (
              <span className="text-body-sm bg-accent/40 text-accent-foreground px-2.5 py-0.5 rounded-full font-semibold">
                Filtered from {rawData.length} total
              </span>
            )}
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th
                      onClick={() => handleSort('month')}
                      className="group cursor-pointer px-6 py-3.5 text-left text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center">
                        Month
                        {renderSortIndicator('month')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('netSales')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Net Sales
                        {renderSortIndicator('netSales')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('tips')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Tips
                        {renderSortIndicator('tips')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('taxAmount')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Tax Amount
                        {renderSortIndicator('taxAmount')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('deferredGiftCards')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Deferred Gift
                        {renderSortIndicator('deferredGiftCards')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('totalAmount')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Total Amount
                        {renderSortIndicator('totalAmount')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('avgOrder')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        AOV
                        {renderSortIndicator('avgOrder')}
                      </span>
                    </th>
                    <th
                      onClick={() => handleSort('tipsPercent')}
                      className="group cursor-pointer px-6 py-3.5 text-right text-label-sm font-semibold text-muted-foreground uppercase tracking-wider select-none hover:text-foreground transition-colors"
                    >
                      <span className="inline-flex items-center justify-end w-full">
                        Tips/Net Sales
                        {renderSortIndicator('tipsPercent')}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {dataLen === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-muted-foreground text-body-md font-medium">
                        No months match the active filter criteria.
                      </td>
                    </tr>
                  ) : (
                    sortedData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-card hover:bg-accent/5 transition-colors' : 'bg-muted/30 hover:bg-accent/5 transition-colors'}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-body-md font-semibold text-foreground">
                          {row.month}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-medium">
                          {formatCurrency(row.netSales)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                          {formatCurrency(row.tips)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                          {formatCurrency(row.taxAmount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                          {formatCurrency(row.deferredGiftCards)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-medium">
                          {formatCurrency(row.totalAmount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                          {formatCurrency(row.avgOrder)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-medium text-primary">
                          {((row.tips / row.netSales) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))
                  )}
                  {dataLen > 0 && (
                    <tr className="bg-muted/70 border-t-2 border-border font-bold">
                      <td className="px-6 py-4 whitespace-nowrap text-body-md font-bold text-foreground">
                        Average ({dataLen} Months)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgNetSales)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgTips)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgTax)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgDeferred)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgTotalAmount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right font-bold">
                        {formatCurrency(avgAov)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-primary text-right font-bold">
                        {avgTipsPercent.toFixed(1)}%
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
