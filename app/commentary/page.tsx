'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Commentary() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Operating Commentary</h1>
          <p className="text-gray-600 mt-1">Analysis of Sales Trends - January to September 2025</p>
        </div>

        {/* Executive Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Friends of Friends has experienced significant sales volatility through the first nine months of 2025,
              with a peak in March ($110,321) followed by a sustained decline through September ($74,930). The business
              faces notable challenges in maintaining revenue momentum, particularly in the late summer months, while
              beverage sales continue to represent the core strength of the operation.
            </p>
          </div>
        </div>

        {/* Revenue Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="text-red-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Revenue Performance</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r">
              <h3 className="font-semibold text-red-900 mb-2">Declining Sales Trend</h3>
              <p className="text-gray-700">
                Net sales have declined 32% from the March peak ($110,321) to September ($74,930). The second
                and third quarters show consistent weakness, with September marking the lowest full month of 2025.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
              <h3 className="font-semibold text-yellow-900 mb-2">Seasonal Patterns</h3>
              <p className="text-gray-700">
                Strong performance in Q1 (particularly March) suggests seasonal opportunity. Summer months (July-September)
                show marked weakness, with August and September representing the two lowest-performing months. Average
                monthly sales across all nine months: $93,935.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
              <h3 className="font-semibold text-blue-900 mb-2">Daily Sales Velocity</h3>
              <p className="text-gray-700">
                Average daily net sales have fallen from $3,559 in March to $2,498 in September (a 30% decline).
                The 9-month average stands at $3,122/day. This metric clearly illustrates the velocity loss in
                recent months.
              </p>
            </div>
          </div>
        </div>

        {/* Category Mix Analysis */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-orange-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Category Mix Analysis</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
              <h3 className="font-semibold text-green-900 mb-2">Beverage Sales Strength</h3>
              <p className="text-gray-700 mb-2">
                Beverages represent the business&apos;s core competency, accounting for 59.1% of September sales.
                While absolute beverage sales have declined ($50,273 in March to $44,274 in September), they
                are holding up better than other categories on a percentage basis.
              </p>
              <p className="text-sm text-green-800 font-medium">
                Key metric: Beverage % of sales has actually increased from 45.3% (January) to 59.1% (September),
                indicating beverages are declining slower than other categories.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r">
              <h3 className="font-semibold text-red-900 mb-2">Critical Weakness in Other Categories</h3>
              <p className="text-gray-700 mb-2">
                Food, merchandise, and uncategorized items show severe erosion. &quot;Other Sales&quot; declined from
                $60,049 (March) to $30,656 (September) - a 49% collapse. This represents the most significant
                operational concern.
              </p>
              <p className="text-sm text-red-800 font-medium">
                September other sales ($30,656) are at critically low levels compared to the 9-month average
                of $47,847.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
              <h3 className="font-semibold text-yellow-900 mb-2">Category Composition Shift</h3>
              <p className="text-gray-700">
                The business is becoming increasingly beverage-centric, not by design but by default as other
                categories underperform. This concentration risk could impact business resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Traffic & Order Patterns */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="text-orange-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Customer Traffic & Order Patterns</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
              <h3 className="font-semibold text-orange-900 mb-2">Declining Customer Traffic</h3>
              <p className="text-gray-700 mb-2">
                Daily order volume has fallen from 228 orders/day (March) to 188 orders/day (September) - a
                17.5% decline. This traffic loss is a primary driver of the revenue decline.
              </p>
              <p className="text-sm text-orange-800 font-medium">
                September&apos;s 188 orders/day represents the lowest traffic month of 2025. The 9-month average
                is 207 orders/day.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
              <h3 className="font-semibold text-blue-900 mb-2">Average Order Value Erosion</h3>
              <p className="text-gray-700">
                Average order value has declined from $15.64 (March) to $13.26 (September) - a 15% decrease.
                Customers are spending less per visit, compounding the traffic decline. The combined effect of
                fewer customers spending less per visit is driving the sharp revenue decline.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
              <h3 className="font-semibold text-green-900 mb-2">Stable Daypart Distribution</h3>
              <p className="text-gray-700">
                Lunch remains the dominant daypart at 49.7% of sales, with breakfast at 36.7%. Dinner (8.2%)
                represents a growth opportunity that appears underutilized. The daypart mix has remained relatively
                consistent throughout the decline, suggesting the issue is total volume rather than shifting patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Recommendations</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Immediate Priorities (Next 30 Days)</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span className="text-gray-700">
                    <strong>Traffic Recovery Initiative:</strong> Deploy targeted customer acquisition campaigns.
                    With only 188 orders/day vs. 228 in March, recapturing 20 orders/day would add ~$260/day
                    in revenue ($7,800/month).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span className="text-gray-700">
                    <strong>Food & Merchandise Focus:</strong> Investigate the 49% collapse in &quot;Other Sales&quot;
                    categories. Are menu items still relevant? Is there a supply/quality issue? This category&apos;s
                    failure is driving half the revenue decline.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span className="text-gray-700">
                    <strong>Average Order Value Recovery:</strong> Implement upselling strategies, combo deals,
                    or loyalty programs to boost the $13.26 average order back toward $15+. Even a $1 increase
                    yields $5,650/month in additional revenue at current traffic levels.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Medium-Term Strategies (90 Days)</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Seasonal Planning:</strong> Develop Q4 strategies leveraging Q1&apos;s proven strength.
                    What drove March&apos;s success? Replicate those conditions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Dinner Revenue Development:</strong> At only 8.2% of sales, dinner represents
                    significant untapped potential. Consider extended hours, dinner-specific menus, or targeted
                    evening promotions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Menu Optimization:</strong> Review and potentially reduce &quot;No Category&quot; items
                    (30.8% of sales but unclear value proposition). Focus on defined, marketed categories.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">
                    <strong>Beverage Category Investment:</strong> As the clear strength, double down on
                    beverage marketing, new beverage offerings, and beverage-focused promotions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Critical Metrics to Monitor */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Metrics to Monitor Weekly</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-gray-900 mb-1">Daily Order Count</h3>
              <p className="text-sm text-gray-600">Target: 210+ orders/day (recovery toward Q1 levels)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold text-gray-900 mb-1">Average Order Value</h3>
              <p className="text-sm text-gray-600">Target: $15.00+ (from current $13.26)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-semibold text-gray-900 mb-1">Other Sales Category</h3>
              <p className="text-sm text-gray-600">Target: $40,000+/month (vs. current $30,656)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
              <h3 className="font-semibold text-gray-900 mb-1">Daily Revenue Velocity</h3>
              <p className="text-sm text-gray-600">Target: $3,000+/day (from current $2,498)</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Friends of Friends is at a critical juncture. The consistent decline from March through September
            represents a clear operational challenge that requires immediate attention. However, the business
            demonstrates strong beverage category performance and has proven capable of higher revenue levels
            (March&apos;s $110K+ provides a roadmap).
          </p>
          <p className="text-gray-700 leading-relaxed">
            The priority is traffic recovery and food/merchandise category revival. Success in these areas,
            combined with the existing beverage strength, can restore the business to Q1 performance levels.
            Time is of the essence - Q4 presents an opportunity to reverse the trend before entering 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
