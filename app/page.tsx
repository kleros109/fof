'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, LabelList } from 'recharts';
import { TrendingUp, DollarSign, Users, Clock, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SalesDashboard() {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
    },
    {
      month: 'December 2025',
      netSales: 79624.79,
      tips: 8634.52,
      taxAmount: 6986.53,
      deferredGiftCards: 1170.00,
      totalAmount: 96421.83,
      avgOrder: 13.74,
      totalOrders: 5796,
      totalGuests: 5796
    },
    {
      month: 'January 2026',
      netSales: 86743.66,
      tips: 9622.71,
      taxAmount: 7611.81,
      deferredGiftCards: 75.00,
      totalAmount: 104053.18,
      avgOrder: 13.84,
      totalOrders: 6267,
      totalGuests: 6267
    },
    {
      month: 'February 2026',
      netSales: 78476.93,
      tips: 8355.89,
      taxAmount: 6885.09,
      deferredGiftCards: 235.00,
      totalAmount: 93952.91,
      avgOrder: 13.76,
      totalOrders: 5704,
      totalGuests: 5704
    },
    {
      month: 'March 2026',
      netSales: 89845.18,
      tips: 9656.55,
      taxAmount: 7877.81,
      deferredGiftCards: 145.00,
      totalAmount: 107524.54,
      avgOrder: 13.92,
      totalOrders: 6454,
      totalGuests: 6454
    },
    {
      month: 'April 2026',
      netSales: 89128.98,
      tips: 9358.18,
      taxAmount: 7796.31,
      deferredGiftCards: 125.00,
      totalAmount: 106408.47,
      avgOrder: 14.11,
      totalOrders: 6318,
      totalGuests: 6318
    },
    {
      month: 'May 2026',
      netSales: 93460.59,
      tips: 9420.65,
      taxAmount: 8114.84,
      deferredGiftCards: 240.00,
      totalAmount: 111500.08,
      avgOrder: 13.95,
      totalOrders: 6701,
      totalGuests: 6701
    },
    {
      month: 'June 2026',
      netSales: 77543.20,
      tips: 7686.44,
      taxAmount: 6684.69,
      deferredGiftCards: 280.00,
      totalAmount: 92524.33,
      avgOrder: 13.41,
      totalOrders: 5781,
      totalGuests: 5781
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
    },
    {
      month: 'December 2025',
      totalBeverages: 44286.78,
      totalSales: 79624.79,
      percentage: 55.6,
      momGrowth: 3.7
    },
    {
      month: 'January 2026',
      totalBeverages: 46756.16,
      totalSales: 86743.66,
      percentage: 53.9,
      momGrowth: 5.6
    },
    {
      month: 'February 2026',
      totalBeverages: 41779.69,
      totalSales: 78476.93,
      percentage: 53.2,
      momGrowth: -10.6
    },
    {
      month: 'March 2026',
      totalBeverages: 47084.85,
      totalSales: 89845.18,
      percentage: 52.4,
      momGrowth: 12.7
    },
    {
      month: 'April 2026',
      totalBeverages: 47855.70,
      totalSales: 89128.98,
      percentage: 53.7,
      momGrowth: 1.6
    },
    {
      month: 'May 2026',
      totalBeverages: 52578.37,
      totalSales: 93460.59,
      percentage: 56.3,
      momGrowth: 9.9
    },
    {
      month: 'June 2026',
      totalBeverages: 43466.00,
      totalSales: 77543.20,
      percentage: 56.1,
      momGrowth: -17.3
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
    },
    {
      month: 'December 2025',
      totalFoodNoCategory: 33683.16,
      totalSales: 79624.79,
      percentage: 42.3,
      momGrowth: 3.0
    },
    {
      month: 'January 2026',
      totalFoodNoCategory: 39029.88,
      totalSales: 86743.66,
      percentage: 45.0,
      momGrowth: 15.9
    },
    {
      month: 'February 2026',
      totalFoodNoCategory: 35826.54,
      totalSales: 78476.93,
      percentage: 45.6,
      momGrowth: -8.2
    },
    {
      month: 'March 2026',
      totalFoodNoCategory: 41681.90,
      totalSales: 89845.18,
      percentage: 46.4,
      momGrowth: 16.3
    },
    {
      month: 'April 2026',
      totalFoodNoCategory: 41273.28,
      totalSales: 89128.98,
      percentage: 46.3,
      momGrowth: -1.0
    },
    {
      month: 'May 2026',
      totalFoodNoCategory: 40174.56,
      totalSales: 93460.59,
      percentage: 43.0,
      momGrowth: -2.7
    },
    {
      month: 'June 2026',
      totalFoodNoCategory: 32703.40,
      totalSales: 77543.20,
      percentage: 42.2,
      momGrowth: -18.6
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
    },
    {
      month: 'December 2025',
      otherSales: 79624.79 - 44286.78,
      netSales: 79624.79,
      beverageSales: 44286.78
    },
    {
      month: 'January 2026',
      otherSales: 86743.66 - 46756.16,
      netSales: 86743.66,
      beverageSales: 46756.16
    },
    {
      month: 'February 2026',
      otherSales: 78476.93 - 41779.69,
      netSales: 78476.93,
      beverageSales: 41779.69
    },
    {
      month: 'March 2026',
      otherSales: 89845.18 - 47084.85,
      netSales: 89845.18,
      beverageSales: 47084.85
    },
    {
      month: 'April 2026',
      otherSales: 89128.98 - 48842.55,
      netSales: 89128.98,
      beverageSales: 48842.55
    },
    {
      month: 'May 2026',
      otherSales: 93460.59 - 52578.37,
      netSales: 93460.59,
      beverageSales: 52578.37
    },
    {
      month: 'June 2026',
      otherSales: 77543.20 - 43466.00,
      netSales: 77543.20,
      beverageSales: 43466.00
    }
  ];

  // Sales by category data (June 2026)
  const categoryData = [
    { name: 'NA Beverage', value: 41569.79, percentage: 53.6 },
    { name: 'No Category', value: 25051.60, percentage: 32.3 },
    { name: 'Food', value: 7651.80, percentage: 9.9 },
    { name: 'Merchandise', value: 1373.80, percentage: 1.8 },
    { name: 'Bottled Beer', value: 724.61, percentage: 0.9 },
    { name: 'Wine', value: 644.60, percentage: 0.8 },
    { name: 'Draft Beer', value: 527.00, percentage: 0.7 }
  ];

  // Daypart analysis (June 2026)
  const daypartData = [
    { name: 'Breakfast', sales: 31276.89, orders: 2152, percentage: 37.2 },
    { name: 'Lunch', sales: 35536.45, orders: 2785, percentage: 48.2 },
    { name: 'Dinner', sales: 4927.39, orders: 428, percentage: 7.4 },
    { name: 'No Service', sales: 5469.47, orders: 415, percentage: 7.2 },
    { name: 'Late Night', sales: 333.00, orders: 1, percentage: 0.0 }
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
    },
    {
      month: 'December 2025',
      avgOrdersPerDay: Math.round(5796 / 31),
      totalOrders: 5796,
      daysInMonth: 31
    },
    {
      month: 'January 2026',
      avgOrdersPerDay: Math.round(6267 / 31),
      totalOrders: 6267,
      daysInMonth: 31
    },
    {
      month: 'February 2026',
      avgOrdersPerDay: Math.round(5704 / 28),
      totalOrders: 5704,
      daysInMonth: 28
    },
    {
      month: 'March 2026',
      avgOrdersPerDay: Math.round(6454 / 31),
      totalOrders: 6454,
      daysInMonth: 31
    },
    {
      month: 'April 2026',
      avgOrdersPerDay: Math.round(6318 / 30),
      totalOrders: 6318,
      daysInMonth: 30
    },
    {
      month: 'May 2026',
      avgOrdersPerDay: Math.round(6701 / 31),
      totalOrders: 6701,
      daysInMonth: 31
    },
    {
      month: 'June 2026',
      avgOrdersPerDay: Math.round(5781 / 30),
      totalOrders: 5781,
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
    },
    {
      month: 'December 2025',
      avgNetSalesPerDay: Math.round(79624.79 / 31),
      netSales: 79624.79,
      daysInMonth: 31
    },
    {
      month: 'January 2026',
      avgNetSalesPerDay: Math.round(86743.66 / 31),
      netSales: 86743.66,
      daysInMonth: 31
    },
    {
      month: 'February 2026',
      avgNetSalesPerDay: Math.round(78476.93 / 28),
      netSales: 78476.93,
      daysInMonth: 28
    },
    {
      month: 'March 2026',
      avgNetSalesPerDay: Math.round(89845.18 / 31),
      netSales: 89845.18,
      daysInMonth: 31
    },
    {
      month: 'April 2026',
      avgNetSalesPerDay: Math.round(89128.98 / 30),
      netSales: 89128.98,
      daysInMonth: 30
    },
    {
      month: 'May 2026',
      avgNetSalesPerDay: Math.round(93460.59 / 31),
      netSales: 93460.59,
      daysInMonth: 31
    },
    {
      month: 'June 2026',
      avgNetSalesPerDay: Math.round(77543.20 / 30),
      netSales: 77543.20,
      daysInMonth: 30
    }
  ];

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
  const latestMonth = monthlyData[monthlyData.length - 1];
  const latestMonthSales = latestMonth.netSales;
  const latestMonthTipsPercent = ((latestMonth.tips / latestMonth.netSales) * 100).toFixed(1) + '%';
  const latestMonthOrdersPerDay = Math.round(latestMonth.totalOrders / 30); // June has 30 days
  const latestMonthAOV = latestMonth.avgOrder;
  const latestMonthName = latestMonth.month;

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
                <button
                  onClick={generateCSV}
                  className="inline-flex items-center gap-2 rounded-sm border border-outline bg-background px-4 py-2 text-label-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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
                tickFormatter={formatCurrencyNoDecimals}
                domain={[65000, 115000]}
                ticks={[65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000]}
                interval={0}
                tick={{ fontSize: 14 }}
                axisLine={true}
                tickLine={true}
              />
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="netSales" fill={CHART_COLORS[0]}>
                <LabelList
                  dataKey="netSales"
                  position="top"
                  formatter={formatCurrency}
                  style={{ fontSize: '12px', fontWeight: 'bold', fill: CHART_LABEL }}
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
              <CardTitle>Sales by Category (June 2026)</CardTitle>
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
                  fill={CHART_COLORS[0]}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
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
              <CardTitle>Sales by Daypart (June 2026)</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={daypartData} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  tickFormatter={formatCurrencyNoDecimals}
                  tick={{ fontSize: 14 }}
                  interval={0}
                  axisLine={true}
                  tickLine={true}
                />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
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
            <LineChart data={beverageData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
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
            <BarChart data={beverageData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
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
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="totalBeverages" fill={CHART_COLORS[2]}>
                <LabelList
                  dataKey="totalBeverages"
                  position="top"
                  formatter={formatCurrency}
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
            <BarChart data={otherSalesData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
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
              <Tooltip formatter={(value) => formatCurrency(value as number)} />
              <Bar dataKey="otherSales" fill={CHART_COLORS[3]}>
                <LabelList
                  dataKey="otherSales"
                  position="top"
                  formatter={formatCurrency}
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
                tickFormatter={formatCurrencyNoDecimals}
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
              <Bar dataKey="avgNetSalesPerDay" fill={CHART_COLORS[2]}>
                <LabelList
                  dataKey="avgNetSalesPerDay"
                  position="top"
                  formatter={formatCurrency}
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

        {/* Monthly Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales Data</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Net Sales</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Tips</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Tax Amount</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Deferred Gift Cards</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Total Amount</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Average Order</th>
                  <th className="px-6 py-3 text-right text-label-sm font-medium text-muted-foreground uppercase tracking-wider">Tips/Net Sales</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {monthlyData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md font-medium text-foreground">{row.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.netSales)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.tips)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.taxAmount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.deferredGiftCards)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.totalAmount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{formatCurrency(row.avgOrder)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">{((row.tips / row.netSales) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="bg-muted/60 border-t-2 border-border font-semibold">
                  <td className="px-6 py-4 whitespace-nowrap text-body-md font-bold text-foreground">Average</td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.netSales, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.tips, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.taxAmount, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.deferredGiftCards, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.totalAmount, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
                    {formatCurrency(monthlyData.reduce((sum, m) => sum + m.avgOrder, 0) / monthlyData.length)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-md text-foreground text-right">
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
