'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download } from 'lucide-react';
import { monthlyData } from '@/lib/salesData';

export default function SalesDataTable() {
  const formatCurrency = (value: number) =>
    `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const generateCSV = () => {
    const csvHeader =
      'Month,Net Sales,Tips,Tax Amount,Deferred Gift Cards,Total Amount,Average Order,Tips/Net Sales %\n';
    const csvData = monthlyData
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
      link.setAttribute('download', 'monthly_sales_data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-2 transition-colors text-sm sm:text-base font-medium"
                >
                  <ArrowLeft size={18} />
                  Back to Dashboard
                </Link>
                <h1 className="text-2xl sm:text-3xl font-bold">Monthly Sales Data</h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                  Detailed monthly performance metrics (Jan 2025 - Jun 2026)
                </p>
              </div>
              <div>
                <button
                  onClick={generateCSV}
                  className="inline-flex items-center gap-2 rounded-sm border border-outline bg-background px-4 py-2 text-label-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Download size={18} />
                  <span>Download CSV Data</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Month
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Net Sales
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Tips
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Tax Amount
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Deferred Gift Cards
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Total Amount
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Average Order
                    </th>
                    <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Tips/Net Sales
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {monthlyData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-body-md font-medium text-foreground">
                        {row.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
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
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                        {formatCurrency(row.totalAmount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                        {formatCurrency(row.avgOrder)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                        {((row.tips / row.netSales) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-muted/60 border-t-2 border-border font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-body-md font-bold text-foreground">
                      Average
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce((sum, m) => sum + m.netSales, 0) /
                          monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce((sum, m) => sum + m.tips, 0) /
                          monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce((sum, m) => sum + m.taxAmount, 0) /
                          monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce(
                          (sum, m) => sum + m.deferredGiftCards,
                          0
                        ) / monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce((sum, m) => sum + m.totalAmount, 0) /
                          monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {formatCurrency(
                        monthlyData.reduce((sum, m) => sum + m.avgOrder, 0) /
                          monthlyData.length
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                      {(
                        (monthlyData.reduce(
                          (sum, m) => sum + m.tips / m.netSales,
                          0
                        ) /
                          monthlyData.length) *
                        100
                      ).toFixed(1)}
                      %
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
