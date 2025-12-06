'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Commentary() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Back Button */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold">Operating Commentary</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January to November 2025</p>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Friends of Friends experienced significant volatility in 2025, peaking in March at $110,321 before
                declining through September to $74,930. While October showed a 4.4% rebound to $78,211,
                <strong className="text-orange-700"> November returned to decline with a 2.6% decrease to $76,194</strong>,
                indicating the recovery is fragile. However, the business has established a stable floor around
                $75K-$78K monthly revenue with improving average order values ($13.36 in November vs. $12.97 in October).
                The focus must shift from growth to operational excellence and profitability at current volumes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Performance */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-600 sm:w-6 sm:h-6" size={20} />
              <CardTitle className="text-xl sm:text-2xl">Revenue Performance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
                <h3 className="font-semibold text-orange-900 mb-2">November Decline Follows October Uptick</h3>
                <p className="text-muted-foreground">
                  November sales of $76,194 represent a 2.6% decline from October&apos;s $78,211, demonstrating
                  that October&apos;s recovery was not sustained. However, November remained above September&apos;s
                  low of $74,930, suggesting a floor around $75K-$78K. Daily sales averaged $2,540/day (vs.
                  October&apos;s $2,523/day), while traffic declined slightly to 190 orders/day from 195/day.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Revenue Stabilization at Lower Level</h3>
                <p className="text-muted-foreground">
                  November remains 31% below the March peak ($110,321). The 11-month average of $88,979
                  represents a challenging target, requiring 17% improvement from current levels. The business
                  appears to have found a new baseline around $76K-$78K monthly revenue, suggesting focus should
                  shift to profitability and operational efficiency at this volume rather than aggressive growth.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Clear Seasonal Patterns Confirmed</h3>
                <p className="text-muted-foreground">
                  Eleven months of data confirm strong seasonality: Q1 avg: $97,532, Q2 avg: $97,883,
                  Q3 avg: $79,301, Q4 (Oct-Nov avg): $77,203. The business shows clear Q1-Q2 strength
                  followed by sustained Q3-Q4 weakness. Planning for 2026 must account for these patterns,
                  with Q1 staffing and inventory positioned for higher volumes and Q3-Q4 optimized for efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Mix Analysis */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="text-orange-600 sm:w-6 sm:h-6" size={20} />
              <CardTitle className="text-xl sm:text-2xl">Category Mix Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Beverage Percentage Declining From Peak</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages accounted for 56.1% of November sales ($42,716), down from October&apos;s 58.3%
                  and September&apos;s 59.1%. While still the core business, the declining beverage percentage
                  indicates other categories are growing their share. November beverage sales declined 6.3%
                  from October, contributing to the overall revenue decrease.
                </p>
                <p className="text-sm text-green-800 font-medium">
                  Key insight: Beverage sales averaged $44,822/month over 11 months but dropped to $42,716
                  in November, below the trend. NA Beverages (51.7% of total sales) remain the dominant category.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Showing Sustained Growth</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales improved to $7,886 (10.3% of revenue), continuing the positive trend from
                  October (9.7%) and September (8.9%). This represents the third consecutive month of
                  food category growth in both dollars and percentage terms, suggesting menu improvements
                  or operational changes are resonating with customers.
                </p>
                <p className="text-sm text-yellow-800 font-medium">
                  November food sales of $7,886 remain below the 11-month average of $9,138, but the
                  upward trajectory (8.9% → 9.7% → 10.3%) is encouraging and worth nurturing.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Other Sales Stabilizing</h3>
                <p className="text-muted-foreground">
                  &quot;Other Sales&quot; (food, merchandise, uncategorized) totaled $33,478 in November (43.9% of
                  revenue), up slightly from October&apos;s $32,607. While still below the 11-month average
                  of $44,157, the category has stabilized after the sharp Q3 decline, suggesting the worst
                  of the contraction may be over.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Traffic & Order Patterns */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingDown className="text-orange-600 sm:w-6 sm:h-6" size={20} />
              <CardTitle className="text-xl sm:text-2xl">Customer Traffic & Order Patterns</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
                <h3 className="font-semibold text-orange-900 mb-2">Traffic Decline Resumes</h3>
                <p className="text-muted-foreground mb-2">
                  November daily order volume declined to 190 orders/day (5,702 total orders), down from
                  October&apos;s 195 orders/day. This reverses the encouraging traffic recovery seen in
                  October and brings volumes back toward the September low of 188 orders/day.
                </p>
                <p className="text-sm text-orange-800 font-medium">
                  The 11-month average is 204 orders/day. November&apos;s 190 orders/day is 6.9% below
                  this baseline, indicating sustained traffic challenges that must be addressed.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Average Order Value Improving</h3>
                <p className="text-muted-foreground">
                  November average order value rose to $13.36, up 3.0% from October&apos;s $12.97. This is
                  the first AOV increase since July and suggests customers are spending more per transaction.
                  While still 14.6% below March&apos;s peak of $15.64, the improving trend is positive and
                  should be nurtured through strategic upselling initiatives.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Mix Holding Steady</h3>
                <p className="text-muted-foreground">
                  November daypart distribution: Lunch 49.4% ($36,678, 2,814 orders), Breakfast 35.0%
                  ($27,391, 1,997 orders), Dinner 9.1% ($7,284, 517 orders), and No Service 6.6% ($4,840,
                  374 orders). The mix is remarkably consistent with October, indicating stable customer
                  behavior patterns across dayparts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 sm:w-6 sm:h-6" size={20} />
              <CardTitle className="text-xl sm:text-2xl">Strategic Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Immediate Priorities (Next 30 Days)</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-muted-foreground">
                      <strong>Capitalize on AOV Momentum:</strong> November&apos;s 3.0% AOV increase to $13.36
                      is the first improvement in months. Double down on what&apos;s working - combo deals,
                      pairing suggestions, or service improvements. Each additional $1 in AOV generates $5,702/month
                      in revenue at current traffic levels.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Reverse Traffic Decline:</strong> November&apos;s 190 orders/day is concerning after
                      October&apos;s recovery. Implement targeted customer retention programs, loyalty incentives,
                      or community engagement to rebuild traffic. Recovering to the 204 orders/day average would
                      add 14 orders/day × $13.36 AOV = $187/day or $5,610/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Sustain Food Category Growth:</strong> Food reached 10.3% of sales in November,
                      the third consecutive month of growth. Identify and amplify the drivers - menu items,
                      service quality, or promotions - to continue this positive trajectory through the holidays.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Medium-Term Strategies (90 Days)</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Accept New Revenue Reality:</strong> Eleven months of data suggest $75K-$78K
                      is the current sustainable baseline (Sep-Nov average: $76,445). Rather than chasing the
                      March peak, optimize operations and profitability at this volume. Review cost structure,
                      staffing levels, and inventory management for efficiency.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Plan for Q1 2026 Seasonal Surge:</strong> Data shows clear Q1 strength (Jan-Mar
                      averaged $97,532 in 2025). Prepare now for January-March 2026 by ensuring adequate inventory,
                      staffing, and promotional plans to capture and exceed 2025 Q1 performance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Holiday Season Activation:</strong> December represents the final opportunity to
                      improve Q4 2025 performance. Implement holiday-specific promotions, gift card campaigns,
                      and seasonal beverage offerings to capture end-of-year customer spending.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Food Category Development:</strong> With food growing three consecutive months
                      (8.9% → 9.7% → 10.3%), invest in menu engineering and staff training to continue this
                      trend. Food&apos;s higher margins could improve profitability even without total revenue growth.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Critical Metrics to Monitor */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Critical Metrics to Monitor Weekly</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-1">Daily Order Count</h3>
                <p className="text-sm text-muted-foreground">Current: 190/day | Target: 210+ orders/day (11-month avg: 204)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.36 | Target: $15.00+ (March level: $15.64)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 10.3% | Target: 12.0%+ (11-month avg: 10.3%)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $76,194 | Target: $88,979+ (11-month avg)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-4 sm:mb-6 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-orange-700">November&apos;s 2.6% decline to $76,194 shows that October&apos;s
              recovery was temporary</strong>, but the business has established a stable floor around $75K-$78K
              monthly revenue. The past three months (Sep-Nov) averaged $76,445, suggesting this is the new baseline
              reality that requires acceptance and operational optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              However, there are positive signals: average order value increased 3.0% to $13.36 (first improvement
              since July), food category reached 10.3% of sales (third consecutive month of growth), and daypart
              distribution remains stable. These metrics indicate operational improvements are taking hold even as
              overall traffic remains challenged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The path forward requires dual focus:</strong> (1) Optimize profitability at current $75K-$78K
              revenue levels through cost management and operational efficiency, and (2) Prepare for seasonal Q1 2026
              strength to capture the January-March revenue surge seen in 2025. December offers one more opportunity
              to improve Q4 performance through holiday promotions and customer engagement. The foundation is stable -
              execution and seasonal planning are the keys to 2026 success.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
