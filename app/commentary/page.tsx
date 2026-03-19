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
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January 2025 to March 2026</p>
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
                declining through September to $74,930 and stabilizing around $76K–$80K in Q4. Entering 2026,
                <strong className="text-green-700"> January 2026 delivered a strong $86,744 (+9.0% from December)</strong>,
                the best month since March 2025. February 2026 closed at <strong className="text-blue-700">$78,477</strong> (5,704 orders, 204/day, avg order $13.76)—
                below January but consistent with the February 2025 seasonal pattern. The last 30 days ending 03/18/26 show
                accelerating momentum at <strong className="text-green-700">$88,169</strong> (208 orders/day), the strongest rolling period since spring 2025.
                Q1 2025 averaged $97,532—Q1 2026 is tracking below that benchmark, with AOV compression from $15.25 to $13.76
                year-over-year as the primary headwind.
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
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">January 2026: Strong 9.0% Rebound</h3>
                <p className="text-muted-foreground">
                  January 2026 sales of $86,744 represent a strong 9.0% rebound from December&apos;s $79,625,
                  the highest monthly revenue since March 2025 ($110,321). Traffic recovered to 202 orders/day
                  (up from 187/day in December), driving $9,623 in tips (11.1% of net sales). The seasonal
                  recovery predicted by 2025 patterns is confirmed—Q1 historically delivers the strongest performance.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">February 2026 Final: $78,477 — Solid Month with YoY AOV Headwind</h3>
                <p className="text-muted-foreground">
                  February 2026 closed at $78,477 (5,704 orders, 204/day, avg order $13.76, tips $8,356 / 10.6%).
                  While down from January&apos;s $86,744, the daily order rate of 204/day maintained January&apos;s traffic
                  recovery. Year-over-year, February 2025 posted $89,426—the $10,949 gap is almost entirely driven
                  by AOV compression ($15.25 in Feb 2025 vs $13.76 in Feb 2026, -9.8%), with order volume
                  slightly lower (5,865 vs 5,704, -2.7%). Tip rate held at 10.6% of net.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Last 30 Days (02/16–03/18): $88,169 — Strongest Rolling Period Since Spring 2025</h3>
                <p className="text-muted-foreground">
                  The rolling 30-day window ending 03/18/26 delivered $88,169 across 6,458 orders—208 orders/day
                  and $2,844/day in net sales. This is the strongest rolling 30-day performance since spring 2025
                  and confirms the seasonal recovery is underway. Tips reached $9,562 (10.8% of net), and the
                  beverage mix held at 52.7%. 2025 seasonality: Q1 avg $97,532, Q2 avg $97,883, Q3 avg $79,301,
                  Q4 avg $78,008. Q1 2026 is running below prior-year pace primarily due to lower AOV—
                  traffic volume is recovering but per-ticket revenue is the gap to close.
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
                <h3 className="font-semibold text-green-900 mb-2">Beverage Sales at ~53% of Revenue — Consistent Mix</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages accounted for 53.9% of January 2026 sales ($46,756). February full month: $41,780
                  (53.2%)—down 10.6% from January in absolute terms, tracking with overall revenue. Last 30 days:
                  $46,427 (52.7%), up 11.1% from February. NA Beverages remain dominant at 49.5–49.8% of total
                  sales across both periods. Wine ($950 Feb), draft beer ($803 Feb), and bottled beer ($947 Feb)
                  hold steady in the 1.0–1.2% range each.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Holds Strong at 12.1% in February</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $9,508 (12.1% of revenue) in February 2026, following January&apos;s record
                  12.7% ($11,056). This marks six consecutive months of food percentage at or above 10.3%
                  (Sep 9.7% → Oct 10.3% → Nov 10.6% → Dec 10.9% → Jan 12.7% → Feb 12.1%), validating sustained
                  menu demand. Last 30 days: $10,592 (12.0%). The food category is firmly established as a
                  double-digit revenue contributor.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">No-Category Items: 33.5% in February, Rising in Last 30 Days</h3>
                <p className="text-muted-foreground">
                  No-category sales were $26,318 (33.5%) in February and $30,220 (34.3%) in the last 30 days,
                  up 14.8% in absolute terms. Merchandise held at $871 (1.1%) in February and $930 (1.1%) in
                  last 30 days. The non-beverage mix held stable at approximately 46–47% of total revenue.
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
              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Traffic Recovery Sustained: 204/day Feb, 208/day Last 30</h3>
                <p className="text-muted-foreground mb-2">
                  February closed at 204 orders/day (5,704 total), up from the December trough of 187/day.
                  The last 30 days (02/16–03/18) accelerated to 208 orders/day (6,458 total)—the highest
                  rolling daily rate since June 2025 (216/day). The traffic recovery that began in January
                  is strengthening. Year-over-year, February 2025 was 209 orders/day (5,865/28), so the
                  2026 pace of 204/day is close to prior-year volume.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Average Order Value: Stable at $13.65–$13.84 Range</h3>
                <p className="text-muted-foreground">
                  February AOV: $13.76 (up from $13.61 seen in the partial-month view, reflecting a strong
                  final week). January was $13.84; last 30 days average $13.65. The Q4 2025 recovery streak
                  ($12.97 → $13.36 → $13.74 → $13.84) has plateaued in the $13.65–$13.84 range. The key
                  gap to prior year remains AOV: February 2025 was $15.25 vs $13.76 in 2026 (-9.8%). Closing
                  this gap toward $14.50–$15.00 is the highest-leverage revenue opportunity.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Distribution: Lunch 49%, Breakfast Strengthening at 36.5%</h3>
                <p className="text-muted-foreground">
                  February 2026 daypart: Lunch 49.0% ($38,443, 2,901 orders), Breakfast 36.5% ($28,649,
                  1,986 orders), Dinner 9.3% ($7,335, 493 orders), No Service 5.2% ($4,050). Compared to
                  January (Lunch 51.4%, Breakfast 33.7%, Dinner 10.2%), breakfast share grew in February
                  while dinner was broadly stable. Lunch remains the dominant daypart—optimizing the lunch
                  window offers the highest traffic-driven upside.
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
                <h3 className="font-semibold mb-3 text-lg">Immediate Priorities for Q1-Q2 2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-muted-foreground">
                      <strong>Close the AOV Gap:</strong> The single biggest lever is AOV. February 2025 averaged
                      $15.25; February 2026 averaged $13.76—a $1.49 gap worth ~$8,500/month at current order volume.
                      Upselling, menu mix optimization, and pricing review are the priority. Each $0.50 increase
                      in AOV adds ~$2,800/month at 204 orders/day.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Push Traffic Beyond 210+ Orders/Day:</strong> The last 30 days hit 208/day—within
                      striking distance of 210+. Continue customer acquisition and lunch-period optimization.
                      At 210 orders/day and $13.76 AOV, monthly revenue would be ~$85K. Recovering to
                      $15.00 AOV at 210 orders/day reaches ~$94K/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Capture Q2 Seasonal Window:</strong> 2025 showed Q2 as the second-strongest quarter
                      (avg $97,883). With March-April traffic momentum building (208/day in last 30 days),
                      maximize the spring lift. Position staffing, inventory, and marketing now to convert
                      traffic growth into revenue.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Strategic Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Food Category: Hold Above 12%:</strong> Six months of double-digit food percentage
                      validates the menu strategy. Maintain and build on this—food at 12%+ contributes structural
                      diversification away from beverage-only dependence and typically carries stronger margins.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Beverage Premium Mix:</strong> NA Beverages at 49.5–49.8% of sales are the core
                      revenue engine. Focus on premium and specialty offerings to lift per-unit revenue within
                      this stable, high-volume category. Even a 5% increase in average beverage ticket would
                      add ~$2,000/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Lunch Window Optimization:</strong> Lunch accounts for 49% of revenue (2,901 orders
                      in February). Throughput improvements, targeted promotions, and staffing optimization
                      during the 11AM–2PM window offer the highest single-period revenue upside.
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
                <p className="text-sm text-muted-foreground">Current: 208/day (last 30) | Target: 215+ orders/day</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.76 (Feb) | Target: $15.00+ (2025 level)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 12.1% (Feb) | Target: 14.0%+</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $88,169 (last 30 days) | Target: $90,000+</p>
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
              <strong className="text-green-700">February 2026 closed at $78,477 and the last 30 days through
              03/18 reached $88,169—the strongest rolling period since spring 2025.</strong> Traffic is
              recovering (204/day in February, 208/day in last 30), food has stabilized above 12%, and beverage
              mix is consistent at ~53%. The seasonal recovery is real and accelerating into Q2.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The primary challenge is AOV. February 2025 averaged $15.25; February 2026 averaged $13.76—a
              $1.49 gap representing ~$8,500/month in recoverable revenue at current traffic. Traffic volume
              is nearly back to prior-year levels (5,704 vs 5,865 orders), so AOV recovery is the critical path
              to restoring $90K+ months. Six consecutive months of food above 10% and growing validates the
              menu strategy; sustained food percentage improvement is the most likely path to structural AOV gains.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The spring seasonal window is now open.</strong> With last-30-day momentum at $88,169
              and 208 orders/day, the business is well-positioned to capitalize on Q2 strength (2025 Q2 avg
              $97,883). The path to $90K+ months runs through AOV recovery toward $14.50–$15.00 and sustaining
              210+ daily orders. Both are within reach given current traffic trends and food category trajectory.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
