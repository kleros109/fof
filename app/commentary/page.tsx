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
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January 2025 to February 2026</p>
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
                declining through September to $74,930 and stabilizing around $76K-$80K in Q4. Entering 2026,
                <strong className="text-green-700"> January 2026 delivered a strong $86,744 (+9.0% from December)</strong>,
                the best month since March 2025 and validating the seasonal recovery predicted by 2025 patterns.
                February 2026 is tracking at $71,074 through 26 days, pacing at approximately $76K for the full month.
                Average order value has maintained in the $13.61-$13.84 range, and Q1 2025 averaged $97,532—January&apos;s
                $86,744 represents a strong start toward that benchmark for Q1 2026.
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
                <h3 className="font-semibold text-yellow-900 mb-2">February 2026: Tracking at $71,074 Through 26 Days</h3>
                <p className="text-muted-foreground">
                  February 2026 is tracking at $71,074 through 26 days, pacing at approximately $76K for the
                  full month. While below January, daily order volume remains strong at 201 orders/day—consistent
                  with January&apos;s traffic recovery. This is a partial month and final figures will be higher.
                  Average order value at $13.61 remains healthy, and tips of $7,595 (10.7% of net) are consistent.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Q1 2026 Showing Seasonal Strength</h3>
                <p className="text-muted-foreground">
                  January&apos;s $86,744 vs Q4 2025 average of $78,008 represents an 11.2% improvement, confirming
                  the seasonal recovery. 2025 established clear seasonality: Q1 avg $97,532, Q2 avg $97,883,
                  Q3 avg $79,301, Q4 avg $78,008. Q1 2026 is tracking in line with historical patterns. The
                  business shows clear Q1-Q2 strength followed by Q3-Q4 moderation—a pattern that should inform
                  operational planning throughout 2026.
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
                <h3 className="font-semibold text-green-900 mb-2">Beverage Sales Stable at ~54% of Revenue</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages accounted for 53.9% of January 2026 sales ($46,756), up 5.6% from December&apos;s
                  $44,287. February is tracking at $38,206 (53.8% of sales)—lower in absolute terms due to the
                  partial month but maintaining the same percentage mix. NA Beverages remain dominant at 50-51%
                  of total sales, with wine ($1,273 Jan / $854 Feb), draft beer ($1,236 / $642), and bottled
                  beer ($972 / $725) contributing the remainder.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Hits Record 12.7% in January</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $11,056 (12.7% of revenue) in January 2026—the highest proportion tracked,
                  marking five consecutive months of food percentage growth (8.9% → 9.7% → 10.3% → 10.6% →
                  12.7%). February is maintaining at 11.9% ($8,436). This sustained growth validates the menu
                  improvements and demonstrates increasing customer demand for the food category.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Other Sales Track With Revenue Recovery</h3>
                <p className="text-muted-foreground">
                  Other sales in January totaled $39,988 (46.1% of revenue), with merchandise at $958. February
                  other sales are at $32,868 (46.2%), with merchandise at $841. The non-beverage category mix
                  remains stable at approximately 46% of total revenue, consistent across both months.
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
                <h3 className="font-semibold text-yellow-900 mb-2">Traffic Rebounds to 202 Orders/Day</h3>
                <p className="text-muted-foreground mb-2">
                  January traffic rebounded to 202 orders/day (6,267 total orders), up from 187/day in December—
                  the highest daily rate since June 2025 (216/day). February is tracking at 201 orders/day
                  through 26 days (5,221 total orders), sustaining the recovery. This represents a return to
                  the 2025 full-year average of 201 orders/day after Q4&apos;s seasonal dip.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Average Order Value: Three Consecutive Monthly Increases</h3>
                <p className="text-muted-foreground">
                  January average order value reached $13.84, up from $13.74 in December, marking three
                  consecutive monthly increases ($12.97 → $13.36 → $13.74 → $13.84). February is at $13.61,
                  slightly lower but still healthy. The sustained AOV improvement demonstrates successful
                  upselling and product mix optimization.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Distribution: Lunch Dominates, Breakfast Strong</h3>
                <p className="text-muted-foreground">
                  January daypart distribution: Lunch 51.4% ($44,598), Breakfast 33.7% ($29,237), Dinner 10.2%
                  ($8,855). February shows Lunch at 49.3% ($35,069), Breakfast at 37.0% ($26,286), and Dinner
                  at 8.4% ($5,993). Breakfast share has been increasing in February, while lunch remains the
                  dominant daypart across both months.
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
                <h3 className="font-semibold mb-3 text-lg">Immediate Priorities for Q1 2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-muted-foreground">
                      <strong>Sustain January&apos;s Momentum:</strong> The 9% rebound to $86,744 validates the
                      seasonal recovery. Target $85K+ for remaining Q1 months to build on this strong start.
                      January&apos;s performance confirms Q1 is historically the strongest quarter—execute aggressively
                      to maximize this window.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Continue AOV Trajectory:</strong> Three-month growth streak ($13.36 → $13.74 → $13.84)
                      demonstrates sustained execution. Food at 12.7% is working—continue expanding food offerings
                      and upselling strategies. Each $1 increase in AOV generates ~$6,000/month at current traffic.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Push Traffic Toward 210+ Orders/Day:</strong> Traffic recovery is working (187 → 202 →
                      201/day). Continue customer acquisition efforts to push toward the 210+ orders/day target, which
                      would generate $12,000-$14,000 in additional monthly revenue at current AOV levels.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Strategic Focus Areas for Q1-Q2 2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Seasonal Execution:</strong> January confirmed Q1 strength and February is pacing well.
                      Target exceeding Q1 2025 average of $97,532. Position inventory, staffing, and marketing to
                      capture the full seasonal lift through Q2.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Food Category Development:</strong> Five months of percentage growth (8.9% → 12.7%)
                      validates the menu strategy. Double down on menu development—food is now the fastest-growing
                      category and offers typically higher margins to improve unit economics.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Beverage Stability:</strong> Beverages at ~54% of sales remain consistent and reliable.
                      Focus on premium offerings and specialty beverages to increase per-unit revenue within this
                      stable category. NA Beverages at 50-51% of total sales are the core driver.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Operational Efficiency:</strong> With revenue recovering ($86,744 in January vs. Q4
                      average of $78,008), ensure cost structure scales appropriately. Review labor efficiency and
                      inventory management to maximize margins during the high-revenue Q1-Q2 period.
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
                <p className="text-sm text-muted-foreground">Current: 201/day | Target: 210+ orders/day</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.84 | Target: $15.00+</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 12.7% | Target: 14.0%+</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $86,744 (Jan) | Target: $90,000+</p>
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
              <strong className="text-green-700">January 2026&apos;s strong $86,744 recovery validates the seasonal
              patterns identified in 2025.</strong> The business is executing well: traffic recovered to 202 orders/day,
              average order value reached $13.84 (three consecutive monthly increases), and the food category hit a
              record 12.7% of revenue. February is tracking at $71,074 through 26 days, with daily order volume
              holding strong at 201/day.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Q1 2026 outlook is positive, with historical patterns suggesting continued seasonal strength.
              Q1 2025 averaged $97,532, and January&apos;s $86,744 provides a strong foundation. Five consecutive
              months of food category growth (8.9% → 12.7%), stable beverage mix (~54%), and sustained traffic
              recovery all point to improving operational execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Key focus remains pushing toward $90K+ months</strong> by sustaining traffic recovery (targeting
              210+ orders/day), continuing AOV growth toward $15.00, and building on the food category&apos;s momentum
              toward 14%+ of revenue. With seasonal tailwinds confirmed and core metrics trending positively, the
              business is well-positioned for a strong Q1-Q2 2026.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
