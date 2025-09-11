'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, LabelList } from 'recharts';
import { TrendingUp, DollarSign, Users, Clock, Download } from 'lucide-react';

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
    }
  ];

  // Sales by category data
  const categoryData = [
    { name: 'NA Beverage', value: 44399.23, percentage: 54.7 },
    { name: 'No Category', value: 25076.36, percentage: 30.9 },
    { name: 'Food', value: 7011.75, percentage: 8.6 },
    { name: 'Bottled Beer', value: 1923.42, percentage: 2.4 },
    { name: 'Draft Beer', value: 1137.80, percentage: 1.4 },
    { name: 'Wine', value: 958.80, percentage: 1.2 },
    { name: 'Merchandise', value: 688.50, percentage: 0.8 }
  ];

  // Daypart analysis
  const daypartData = [
    { name: 'Breakfast', sales: 29513.01, orders: 2105, percentage: 34.7 },
    { name: 'Lunch', sales: 40688.81, orders: 3076, percentage: 50.8 },
    { name: 'Dinner', sales: 6804.96, orders: 511, percentage: 8.4 },
    { name: 'No Service', sales: 4189.08, orders: 370, percentage: 6.1 }
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
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const generateCSV = () => {
    const csvHeader = 'Month,Net Sales,Tips,Tax Amount,Deferred Gift Cards,Total Amount,Average Order\n';
    const csvData = monthlyData.map(row => 
      `"${row.month}",${row.netSales},${row.tips},${row.taxAmount},${row.deferredGiftCards},${row.totalAmount},${row.avgOrder}`
    ).join('\n');
    
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Friends of Friends Sales Dashboard</h1>
              <p className="text-gray-600 mt-1">January - August 2025 Performance Analysis</p>
            </div>
            <button
              onClick={generateCSV}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              Download CSV Data
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Monthly Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(monthlyData.reduce((sum, m) => sum + m.netSales, 0) / monthlyData.length)}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Tips/Month</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(monthlyData.reduce((sum, m) => sum + m.tips, 0) / monthlyData.length)}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Orders/Day</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round((monthlyData.reduce((sum, m) => sum + m.totalOrders, 0) / monthlyData.length) / 30).toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(monthlyData.reduce((sum, m) => sum + m.avgOrder, 0) / monthlyData.length)}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Net Sales by Month Column Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Net Sales by Month</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 140, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={formatCurrency}
                domain={[80000, 115000]}
                ticks={[80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000]}
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
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales by Category */}
          <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales by Category (August 2025)</h2>
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
          </div>

          {/* Daypart Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales by Daypart (August 2025)</h2>
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
          </div>
        </div>

        {/* Beverage Sales Percentage */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Beverage % Sales</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={beverageData} margin={{ top: 20, right: 30, left: 60, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
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
          <div className="mt-4 text-sm text-gray-600">
            <p>Shows the percentage of total sales from beverages (NA Beverages + Wine + Draft Beer + Bottled Beer)</p>
          </div>
        </div>

        {/* Average Orders Per Day Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Average Number of Orders Per Day by Period</h2>
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
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-green-700">Highest Daily Orders</p>
              <p className="text-lg font-bold text-green-900">228/day</p>
              <p className="text-xs text-green-600">March 2025</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-red-700">Lowest Daily Orders</p>
              <p className="text-lg font-bold text-red-900">197/day</p>
              <p className="text-xs text-red-600">January 2025</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-blue-700">Current Period</p>
              <p className="text-lg font-bold text-blue-900">196/day</p>
              <p className="text-xs text-blue-600">August 2025</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-purple-700">8-Month Average</p>
              <p className="text-lg font-bold text-purple-900">209/day</p>
              <p className="text-xs text-purple-600">Jan-Aug 2025</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Shows daily order volume calculated by dividing total monthly orders by number of days in each month</p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Sales Performance</h3>
              <p className="text-sm text-blue-700">March peaked at $110,321, followed by decline. August closed at $81,196 (full month), continuing the downward trend.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Category Leaders</h3>
              <p className="text-sm text-green-700">NA Beverages lead at 54.7%; food accounts for 8.6%.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Customer Traffic</h3>
              <p className="text-sm text-purple-700">Orders average 196/day in August (31 days). Average order value remains $13.39.</p>
            </div>
          </div>
        </div>

        {/* Monthly Data Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Sales Data</h2>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
