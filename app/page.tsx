'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, LabelList } from 'recharts';
import { TrendingUp, DollarSign, Users, Clock, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SalesDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Monthly data extracted from the sales summaries
  const monthlyData = [
    {
      month: 'January 2025',
      netSales: 92847.95,
      tips: 10468.27,
      taxAmount: 8129.02,
      deferredGiftCards: 395.00,
      totalAmount: 111840.24,
      avgOrder: 15.22,
      totalOrders: 6099,
      totalGuests: 6099
    },
    {
      month: 'February 2025',
      netSales: 89425.57,
      tips: 10026.07,
      taxAmount: 7811.37,
      deferredGiftCards: 250.00,
      totalAmount: 107513.01,
      avgOrder: 15.25,
      totalOrders: 5865,
      totalGuests: 5865
    },
    {
      month: 'March 2025',
      netSales: 110321.40,
      tips: 12173.11,
      taxAmount: 9588.35,
      deferredGiftCards: 260.00,
      totalAmount: 132342.86,
      avgOrder: 15.64,
      totalOrders: 7055,
      totalGuests: 7055
    },
    {
      month: 'April 2025',
      netSales: 95918.02,
      tips: 10503.39,
      taxAmount: 8379.71,
      deferredGiftCards: 320.00,
      totalAmount: 115121.12,
      avgOrder: 15.42,
      totalOrders: 6220,
      totalGuests: 6220
    },
    {
      month: 'May 2025',
      netSales: 101404.46,
      tips: 10813.40,
      taxAmount: 8765.82,
      deferredGiftCards: 300.00,
      totalAmount: 121680.44,
      avgOrder: 15.44,
      totalOrders: 6567,
      totalGuests: 6567
    },
    {
      month: 'June 2025',
      netSales: 96325.49,
      tips: 10827.27,
      taxAmount: 8452.63,
      deferredGiftCards: 104.00,
      totalAmount: 115709.39,
      avgOrder: 14.89,
      totalOrders: 6470,
      totalGuests: 6470
    },
    {
      month: 'July 2025',
      netSales: 91778.17,
      tips: 10135.32,
      taxAmount: 7926.67,
      deferredGiftCards: 185.00,
      totalAmount: 110025.16,
      avgOrder: 14.39,
      totalOrders: 6377,
      totalGuests: 6377
    },
    {
      month: 'August 2025',
      netSales: 81195.86,
      tips: 8741.47,
      taxAmount: 7130.47,
      deferredGiftCards: 190.00,
      totalAmount: 97257.80,
      avgOrder: 13.39,
      totalOrders: 6062,
      totalGuests: 6062
    },
    {
      month: 'September 2025',
      netSales: 74930.18,
      tips: 7788.88,
      taxAmount: 6577.90,
      deferredGiftCards: 205.00,
      totalAmount: 89501.96,
      avgOrder: 13.26,
      totalOrders: 5650,
      totalGuests: 5650
    },
    {
      month: 'October 2025',
      netSales: 78210.75,
      tips: 8219.04,
      taxAmount: 6868.18,
      deferredGiftCards: 120.00,
      totalAmount: 94736.30,
      avgOrder: 12.97,
      totalOrders: 6032,
      totalGuests: 6032
    },
    {
      month: 'November 2025',
      netSales: 76193.65,
      tips: 8115.77,
      taxAmount: 6687.01,
      deferredGiftCards: 140.00,
      totalAmount: 91136.43,
      avgOrder: 13.36,
      totalOrders: 5702,
      totalGuests: 5702
    }
  ];

  // Beverage sales by month
  const beverageData = [
    {
      month: 'January 2025',
      totalBeverages: 42073.30,
      totalSales: 92847.95,
      percentage: 45.3,
      momGrowth: null
    },
    {
      month: 'February 2025',
      totalBeverages: 41474.59,
      totalSales: 89425.57,
      percentage: 46.4,
      momGrowth: -1.4
    },
    {
      month: 'March 2025',
      totalBeverages: 50272.87,
      totalSales: 110321.40,
      percentage: 45.6,
      momGrowth: 21.2
    },
    {
      month: 'April 2025',
      totalBeverages: 45792.18,
      totalSales: 95918.02,
      percentage: 47.7,
      momGrowth: -8.9
    },
    {
      month: 'May 2025',
      totalBeverages: 49762.47,
      totalSales: 101404.46,
      percentage: 49.1,
      momGrowth: 8.7
    },
    {
      month: 'June 2025',
      totalBeverages: 49103.62,
      totalSales: 96325.49,
      percentage: 51.0,
      momGrowth: -1.3
    },
    {
      month: 'July 2025',
      totalBeverages: 50300.99,
      totalSales: 91778.17,
      percentage: 54.8,
      momGrowth: 2.4
    },
    {
      month: 'August 2025',
      totalBeverages: 48419.25,
      totalSales: 81195.86,
      percentage: 59.6,
      momGrowth: -3.7
    },
    {
      month: 'September 2025',
      totalBeverages: 44273.96,
      totalSales: 74930.18,
      percentage: 59.1,
      momGrowth: -8.6
    },
    {
      month: 'October 2025',
      totalBeverages: 45603.96,
      totalSales: 78210.75,
      percentage: 58.3,
      momGrowth: 3.0
    },
    {
      month: 'November 2025',
      totalBeverages: 42715.59,
      totalSales: 76193.65,
      percentage: 56.1,
      momGrowth: -6.3
    }
  ];

  // Food + No Category sales by month
  const foodNoCategoryData = [
    {
      month: 'January 2025',
      totalFoodNoCategory: 50474.21,
      totalSales: 92847.95,
      percentage: 54.3,
      momGrowth: null
    },
    {
      month: 'February 2025',
      totalFoodNoCategory: 47755.23,
      totalSales: 89425.57,
      percentage: 53.4,
      momGrowth: -5.4
    },
    {
      month: 'March 2025',
      totalFoodNoCategory: 56682.67,
      totalSales: 110321.40,
      percentage: 51.4,
      momGrowth: 18.7
    },
    {
      month: 'April 2025',
      totalFoodNoCategory: 47571.16,
      totalSales: 95918.02,
      percentage: 49.6,
      momGrowth: -16.1
    },
    {
      month: 'May 2025',
      totalFoodNoCategory: 49788.74,
      totalSales: 101404.46,
      percentage: 49.1,
      momGrowth: 4.7
    },
    {
      month: 'June 2025',
      totalFoodNoCategory: 46069.47,
      totalSales: 96325.49,
      percentage: 47.8,
      momGrowth: -7.5
    },
    {
      month: 'July 2025',
      totalFoodNoCategory: 40589.43,
      totalSales: 91778.17,
      percentage: 44.2,
      momGrowth: -11.9
    },
    {
      month: 'August 2025',
      totalFoodNoCategory: 32088.11,
      totalSales: 81195.86,
      percentage: 39.5,
      momGrowth: 21.4
    },
    {
      month: 'September 2025',
      totalFoodNoCategory: 29728.07,
      totalSales: 74930.18,
      percentage: 39.7,
      momGrowth: -7.4
    },
    {
      month: 'October 2025',
      totalFoodNoCategory: 31971.19,
      totalSales: 78210.75,
      percentage: 40.9,
      momGrowth: 7.5
    },
    {
      month: 'November 2025',
      totalFoodNoCategory: 32711.66,
      totalSales: 76193.65,
      percentage: 42.9,
      momGrowth: 2.3
    }
  ];

  // Other Sales (Food + No Category + Merchandise) = Net Sales - Beverage Sales
  const otherSalesData = [
    {
      month: 'January 2025',
      otherSales: 92847.95 - 42073.30,
      netSales: 92847.95,
      beverageSales: 42073.30
    },
    {
      month: 'February 2025',
      otherSales: 89425.57 - 41474.59,
      netSales: 89425.57,
      beverageSales: 41474.59
    },
    {
      month: 'March 2025',
      otherSales: 110321.40 - 50272.87,
      netSales: 110321.40,
      beverageSales: 50272.87
    },
    {
      month: 'April 2025',
      otherSales: 95918.02 - 45792.18,
      netSales: 95918.02,
      beverageSales: 45792.18
    },
    {
      month: 'May 2025',
      otherSales: 101404.46 - 49762.47,
      netSales: 101404.46,
      beverageSales: 49762.47
    },
    {
      month: 'June 2025',
      otherSales: 96325.49 - 49103.62,
      netSales: 96325.49,
      beverageSales: 49103.62
    },
    {
      month: 'July 2025',
      otherSales: 91778.17 - 50300.99,
      netSales: 91778.17,
      beverageSales: 50300.99
    },
    {
      month: 'August 2025',
      otherSales: 81195.86 - 48419.25,
      netSales: 81195.86,
      beverageSales: 48419.25
    },
    {
      month: 'September 2025',
      otherSales: 74930.18 - 44273.96,
      netSales: 74930.18,
      beverageSales: 44273.96
    },
    {
      month: 'October 2025',
      otherSales: 78210.75 - 45603.96,
      netSales: 78210.75,
      beverageSales: 45603.96
    },
    {
      month: 'November 2025',
      otherSales: 76193.65 - 42715.59,
      netSales: 76193.65,
      beverageSales: 42715.59
    }
  ];

  // Sales by category data (November 2025)
  const categoryData = [
    { name: 'NA Beverage', value: 39403.54, percentage: 51.7 },
    { name: 'No Category', value: 24825.96, percentage: 32.6 },
    { name: 'Food', value: 7885.70, percentage: 10.3 },
    { name: 'Bottled Beer', value: 1678.75, percentage: 2.2 },
    { name: 'Wine', value: 833.50, percentage: 1.1 },
    { name: 'Draft Beer', value: 799.80, percentage: 1.0 },
    { name: 'Merchandise', value: 766.40, percentage: 1.0 }
  ];

  // Daypart analysis (November 2025)
  const daypartData = [
    { name: 'Breakfast', sales: 27390.86, orders: 1997, percentage: 35.0 },
    { name: 'Lunch', sales: 36678.48, orders: 2814, percentage: 49.4 },
    { name: 'Dinner', sales: 7283.84, orders: 517, percentage: 9.1 },
    { name: 'No Service', sales: 4840.47, orders: 374, percentage: 6.6 }
  ];

  // Hourly sales pattern
  const hourlyData = [
    { hour: '4 AM', sales: 150 },
    { hour: '5 AM', sales: 200 },
    { hour: '6 AM', sales: 450 },
    { hour: '7 AM', sales: 800 },
    { hour: '8 AM', sales: 1200 },
    { hour: '9 AM', sales: 1800 },
    { hour: '10 AM', sales: 2500 },
    { hour: '11 AM', sales: 3200 },
    { hour: '12 PM', sales: 4500 },
    { hour: '1 PM', sales: 5200 },
    { hour: '2 PM', sales: 4800 },
    { hour: '3 PM', sales: 3500 },
    { hour: '4 PM', sales: 2800 },
    { hour: '5 PM', sales: 2200 },
    { hour: '6 PM', sales: 2800 },
    { hour: '7 PM', sales: 3200 },
    { hour: '8 PM', sales: 2500 },
    { hour: '9 PM', sales: 1800 },
    { hour: '10 PM', sales: 1200 },
    { hour: '11 PM', sales: 800 },
    { hour: '12 AM', sales: 400 },
    { hour: '1 AM', sales: 200 },
    { hour: '2 AM', sales: 100 },
    { hour: '3 AM', sales: 50 }
  ];

  // Daily sales pattern
  const dailyData = [
    { day: 'Monday', sales: 3127 },
    { day: 'Tuesday', sales: 3045 },
    { day: 'Wednesday', sales: 3186 },
    { day: 'Thursday', sales: 3298 },
    { day: 'Friday', sales: 3567 },
    { day: 'Saturday', sales: 3421 },
    { day: 'Sunday', sales: 3143 }
  ];

  // Average orders per day by month
  const avgOrdersPerDayData = [
    {
      month: 'January 2025',
      avgOrdersPerDay: Math.round(6099 / 31),
      totalOrders: 6099,
      daysInMonth: 31
    },
    {
      month: 'February 2025',
      avgOrdersPerDay: Math.round(5865 / 28),
      totalOrders: 5865,
      daysInMonth: 28
    },
    {
      month: 'March 2025',
      avgOrdersPerDay: Math.round(7055 / 31),
      totalOrders: 7055,
      daysInMonth: 31
    },
    {
      month: 'April 2025',
      avgOrdersPerDay: Math.round(6220 / 30),
      totalOrders: 6220,
      daysInMonth: 30
    },
    {
      month: 'May 2025',
      avgOrdersPerDay: Math.round(6567 / 31),
      totalOrders: 6567,
      daysInMonth: 31
    },
    {
      month: 'June 2025',
      avgOrdersPerDay: Math.round(6470 / 30),
      totalOrders: 6470,
      daysInMonth: 30
    },
    {
      month: 'July 2025',
      avgOrdersPerDay: Math.round(6377 / 31),
      totalOrders: 6377,
      daysInMonth: 31
    },
    {
      month: 'August 2025',
      avgOrdersPerDay: Math.round(6062 / 31),
      totalOrders: 6062,
      daysInMonth: 31
    },
    {
      month: 'September 2025',
      avgOrdersPerDay: Math.round(5650 / 30),
      totalOrders: 5650,
      daysInMonth: 30
    },
    {
      month: 'October 2025',
      avgOrdersPerDay: Math.round(6032 / 31),
      totalOrders: 6032,
      daysInMonth: 31
    },
    {
      month: 'November 2025',
      avgOrdersPerDay: Math.round(5702 / 30),
      totalOrders: 5702,
      daysInMonth: 30
    }
  ];

  // Average net sales per day by month
  const avgNetSalesPerDayData = [
    {
      month: 'January 2025',
      avgNetSalesPerDay: Math.round(92847.95 / 31),
      netSales: 92847.95,
      daysInMonth: 31
    },
    {
      month: 'February 2025',
      avgNetSalesPerDay: Math.round(89425.57 / 28),
      netSales: 89425.57,
      daysInMonth: 28
    },
    {
      month: 'March 2025',
      avgNetSalesPerDay: Math.round(110321.40 / 31),
      netSales: 110321.40,
      daysInMonth: 31
    },
    {
      month: 'April 2025',
      avgNetSalesPerDay: Math.round(95918.02 / 30),
      netSales: 95918.02,
      daysInMonth: 30
    },
    {
      month: 'May 2025',
      avgNetSalesPerDay: Math.round(101404.46 / 31),
      netSales: 101404.46,
      daysInMonth: 31
    },
    {
      month: 'June 2025',
      avgNetSalesPerDay: Math.round(96325.49 / 30),
      netSales: 96325.49,
      daysInMonth: 30
    },
    {
      month: 'July 2025',
      avgNetSalesPerDay: Math.round(91778.17 / 31),
      netSales: 91778.17,
      daysInMonth: 31
    },
    {
      month: 'August 2025',
      avgNetSalesPerDay: Math.round(81195.86 / 31),
      netSales: 81195.86,
      daysInMonth: 31
    },
    {
      month: 'September 2025',
      avgNetSalesPerDay: Math.round(74930.18 / 30),
      netSales: 74930.18,
      daysInMonth: 30
    },
    {
      month: 'October 2025',
      avgNetSalesPerDay: Math.round(78210.75 / 31),
      netSales: 78210.75,
      daysInMonth: 31
    },
    {
      month: 'November 2025',
      avgNetSalesPerDay: Math.round(76193.65 / 30),
      netSales: 76193.65,
      daysInMonth: 30
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const generateCSV = () => {
    const csvHeader = 'Month,Net Sales,Tips,Tax Amount,Deferred Gift Cards,Total Amount,Average Order,Tips/Net Sales %\n';
    const csvData = monthlyData.map(row => {
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

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Friends of Friends Sales Dashboard</h1>
                <p className="text-muted-foreground mt-1 text-sm sm:text-base">January 2025 - November 2025 Performance Analysis</p>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <Link
                  href="/commentary"
                  className="flex items-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  <FileText size={18} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View Commentary</span>
                  <span className="sm:hidden">Commentary</span>
                </Link>
                <button
                  onClick={generateCSV}
                  className="flex items-center gap-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap"
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
                  <p className="text-sm font-medium text-muted-foreground">Average Monthly Sales</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.netSales, 0) / monthlyData.length)}
                  </p>
                </div>
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Tips/Net Sales</p>
                  <p className="text-2xl font-bold">
                    {(monthlyData.reduce((sum, m) => sum + (m.tips / m.netSales), 0) / monthlyData.length * 100).toFixed(1)}%
                  </p>
                </div>
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Orders/Day</p>
                  <p className="text-2xl font-bold">
                    {Math.round((monthlyData.reduce((sum, m) => sum + m.totalOrders, 0) / monthlyData.length) / 30).toLocaleString()}
                  </p>
                </div>
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.avgOrder, 0) / monthlyData.length)}
                  </p>
                </div>
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Net Sales by Month Column Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Net Sales by Month</CardTitle>
          </CardHeader>
          <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrency}
                domain={[65000, 115000]}
                ticks={[65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000]}
                interval={0}
                tick={{ fontSize: 14 }}
                axisLine={true}
                tickLine={true}
              />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="netSales" fill="#0088FE">
                <LabelList 
                  dataKey="netSales" 
                  position="top" 
                  formatter={formatCurrency}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: '#374151' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category (November 2025)</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="40%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percentage }: { name: string; percentage: number }) => `${name} ${percentage}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
              </PieChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Daypart Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Daypart (November 2025)</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={daypartData} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  tickFormatter={formatCurrency}
                  tick={{ fontSize: 14 }}
                  interval={0}
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Bar dataKey="sales" fill="#0088FE" />
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
            <BarChart data={beverageData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
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
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="percentage" fill="#00C49F" />
            </BarChart>
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
            <BarChart data={beverageData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrency}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[30000, 55000]}
              />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="totalBeverages" fill="#00C49F">
                <LabelList
                  dataKey="totalBeverages"
                  position="top"
                  formatter={formatCurrency}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: '#374151' }}
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
            <BarChart data={otherSalesData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={12} />
              <YAxis
                width={110}
                tickFormatter={formatCurrency}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[25000, 65000]}
              />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="otherSales" fill="#FF8042">
                <LabelList
                  dataKey="otherSales"
                  position="top"
                  formatter={formatCurrency}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: '#374151' }}
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
            <BarChart data={avgOrdersPerDayData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
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
              <Bar dataKey="avgOrdersPerDay" fill="#8884D8">
                <LabelList
                  dataKey="avgOrdersPerDay"
                  position="top"
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: '#374151' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-green-700">Highest Daily Orders</p>
              <p className="text-lg font-bold text-green-900">228/day</p>
              <p className="text-xs text-green-600">March 2025</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-red-700">Lowest Daily Orders</p>
              <p className="text-lg font-bold text-red-900">188/day</p>
              <p className="text-xs text-red-600">September 2025</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-blue-700">Current Period</p>
              <p className="text-lg font-bold text-blue-900">190/day</p>
              <p className="text-xs text-blue-600">November 2025</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-purple-700">11-Month Average</p>
              <p className="text-lg font-bold text-purple-900">204/day</p>
              <p className="text-xs text-purple-600">Jan - Nov 2025</p>
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
            <BarChart data={avgNetSalesPerDayData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
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
                tickFormatter={formatCurrency}
                tick={{ fontSize: 14 }}
                interval={0}
                axisLine={true}
                tickLine={true}
                domain={[2000, 3800]}
              />
              <Tooltip
                formatter={(value) => [formatCurrency(value as number), 'Avg Net Sales Per Day']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="avgNetSalesPerDay" fill="#00C49F">
                <LabelList
                  dataKey="avgNetSalesPerDay"
                  position="top"
                  formatter={formatCurrency}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: '#374151' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-green-700">Highest Daily Sales</p>
              <p className="text-lg font-bold text-green-900">$3,559/day</p>
              <p className="text-xs text-green-600">March 2025</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-red-700">Lowest Daily Sales</p>
              <p className="text-lg font-bold text-red-900">$2,498/day</p>
              <p className="text-xs text-red-600">September 2025</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-blue-700">Current Month</p>
              <p className="text-lg font-bold text-blue-900">$2,540/day</p>
              <p className="text-xs text-blue-600">November 2025</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-purple-700">11-Month Average</p>
              <p className="text-lg font-bold text-purple-900">$3,026/day</p>
              <p className="text-xs text-purple-600">Jan - Nov 2025</p>
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
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Sales Performance</h3>
              <p className="text-sm text-blue-700">November declined 2.6% to $76,194 from October&rsquo;s $78,211. While still 31% below March peak ($110,321), beverage sales remain strong at 56.1% of revenue.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Category Leaders</h3>
              <p className="text-sm text-green-700">NA Beverages continue to lead at 51.7%; food improved to 10.3% while no-category items contribute 32.6%.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Customer Traffic</h3>
              <p className="text-sm text-purple-700">Orders average 190/day in November (30 days). Average order value at $13.36, up from October&rsquo;s $12.97.</p>
            </div>
          </div>
          </CardContent>
        </Card>

        {/* Monthly Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales Data</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Net Sales</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tips</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tax Amount</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Deferred Gift Cards</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Average Order</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tips/Net Sales</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {monthlyData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.netSales)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.tips)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.taxAmount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.deferredGiftCards)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.totalAmount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{formatCurrency(row.avgOrder)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{((row.tips / row.netSales) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="bg-gray-100 border-t-2 border-gray-300 font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Average</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.netSales, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.tips, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.taxAmount, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.deferredGiftCards, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.totalAmount, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.avgOrder, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {(monthlyData.reduce((sum, m) => sum + (m.tips / m.netSales), 0) / monthlyData.length * 100).toFixed(1)}%
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
