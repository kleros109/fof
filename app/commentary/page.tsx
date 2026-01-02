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
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January to December 2025</p>
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
                declining through September to $74,930. After October&apos;s 4.4% rebound to $78,211 and November&apos;s
                2.6% decline to $76,194, <strong className="text-green-700">December delivered a strong 4.5% recovery to $79,625</strong>,
                marking the highest revenue since July. The business has established a stable floor around
                $76K-$80K monthly revenue with continued improvement in average order values ($13.74 in December vs. $13.36 in November).
                December&apos;s $1,170 in gift card sales (highest since January) suggests strong holiday engagement and potential Q1 2026 momentum.
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
                <h3 className="font-semibold text-green-900 mb-2">December Recovery Caps Volatile Q4</h3>
                <p className="text-muted-foreground">
                  December sales of $79,625 represent a strong 4.5% rebound from November&apos;s $76,194,
                  marking the highest revenue since July ($91,778). Daily sales averaged $2,569/day (best since
                  June), while traffic remained stable at 187 orders/day. The month delivered $8,635 in tips
                  (10.8% of net sales) and an impressive $1,170 in gift card sales—the strongest gift card
                  performance since January, signaling customer confidence and potential Q1 2026 momentum.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Full Year 2025: Revenue Stabilization at New Baseline</h3>
                <p className="text-muted-foreground">
                  December closes 2025 at $79,625, still 28% below the March peak ($110,321). The 12-month
                  average of $88,048 represents a target requiring 11% improvement from current levels. However,
                  the final four months (Sep-Dec) averaged $77,239, suggesting the business has found a sustainable
                  baseline around $76K-$80K. Focus in 2026 should balance profitability optimization at this level
                  with strategic initiatives to recapture lost volume.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Full Year Seasonal Patterns Established</h3>
                <p className="text-muted-foreground">
                  2025 data confirms strong seasonality: Q1 avg: $97,532, Q2 avg: $97,883, Q3 avg: $79,301,
                  Q4 avg: $78,008. The business shows clear Q1-Q2 strength (averaging $97,708) followed by
                  sustained Q3-Q4 weakness (averaging $78,654)—a 19.6% seasonal variance. December&apos;s strong
                  performance and gift card sales suggest positive customer sentiment entering Q1 2026, historically
                  the strongest quarter.
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
                <h3 className="font-semibold text-green-900 mb-2">Beverage Sales Rebound in December</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages accounted for 55.6% of December sales ($44,287), rebounding 3.7% from November&apos;s
                  $42,716. This reverses two consecutive months of beverage sales declines and brings the category
                  closer to its 12-month average of $44,603. NA Beverages led at 51.8% of total sales ($41,213),
                  with wine ($981), bottled beer ($1,355), and draft beer ($738) contributing the remainder.
                </p>
                <p className="text-sm text-green-800 font-medium">
                  Key insight: December&apos;s beverage recovery drove the overall revenue increase, suggesting
                  successful holiday beverage promotions or seasonal customer preferences. This category remains
                  the core revenue driver and deserves continued investment.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Sustains Strong Performance</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $8,480 (10.6% of revenue) in December, marking the fourth consecutive
                  month of growth in percentage terms (8.9% → 9.7% → 10.3% → 10.6%). December&apos;s food
                  sales of $8,480 represent a 7.5% increase from November&apos;s $7,886, demonstrating sustained
                  customer demand for the food category.
                </p>
                <p className="text-sm text-yellow-800 font-medium">
                  While still below the 12-month average of $9,224, the four-month trajectory confirms operational
                  improvements in food quality, menu appeal, or service are working. This trend should be reinforced
                  through continued menu development and staff training.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Other Sales Grow Alongside Total Revenue</h3>
                <p className="text-muted-foreground">
                  &quot;Other Sales&quot; (food, merchandise, uncategorized) totaled $35,338 in December (44.4% of
                  revenue), up 5.6% from November&apos;s $33,478. Merchandise sales reached $1,655 (2.1% of revenue),
                  the second-highest monthly performance of 2025. Combined with strong gift card sales ($1,170),
                  December showed robust customer engagement across all non-beverage categories.
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
                <h3 className="font-semibold text-yellow-900 mb-2">Traffic Stabilizes Near Recent Baseline</h3>
                <p className="text-muted-foreground mb-2">
                  December daily order volume held at 187 orders/day (5,796 total orders in 31 days), essentially
                  flat with November&apos;s 190 orders/day. While traffic remains well below the 12-month average
                  of 201 orders/day, the stabilization after months of decline suggests a floor has been established.
                  Total orders increased 1.6% from November due to 31 days vs. 30.
                </p>
                <p className="text-sm text-yellow-800 font-medium">
                  December&apos;s 187 orders/day is 7.0% below the 12-month average, but the Q4 average of 191
                  orders/day suggests this may be the new seasonal baseline for this period. Traffic recovery
                  will be critical in Q1 2026.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Average Order Value Continues Upward Trend</h3>
                <p className="text-muted-foreground">
                  December average order value rose to $13.74, up 2.8% from November&apos;s $13.36, marking
                  the second consecutive monthly increase. This positive trajectory ($12.97 → $13.36 → $13.74)
                  demonstrates successful upselling or product mix improvements. While still 12.2% below March&apos;s
                  peak of $15.64, the sustained improvement is the strongest positive signal in the data.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Distribution Shifts Toward Breakfast</h3>
                <p className="text-muted-foreground">
                  December daypart distribution: Lunch 48.1% ($38,295, 2,953 orders), Breakfast 38.2%
                  ($30,395, 2,020 orders), Dinner 7.7% ($6,139, 481 orders), No Service 5.9% ($4,679, 330
                  orders), and Late Night 0.1% ($116, 12 orders). Breakfast grew 3.2 percentage points from
                  November (35.0%), suggesting holiday season morning traffic strength.
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
                      <strong>Capitalize on Gift Card Momentum:</strong> December&apos;s $1,170 in gift card sales
                      (highest since January) represents deferred revenue that will flow through Q1 2026. Proactively
                      market to gift card holders with new product launches, limited-time offerings, or exclusive
                      experiences to maximize redemption value and drive incremental purchases.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Sustain AOV Growth Trajectory:</strong> Two consecutive monthly increases ($12.97 →
                      $13.36 → $13.74) demonstrate successful execution. Identify and systematize what&apos;s working—
                      bundling, upselling, premium products—to push toward the $15+ target. Each $1 increase in AOV
                      generates $5,600-$5,800/month at current traffic levels.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Prepare for Q1 Seasonal Surge:</strong> Q1 2025 averaged $97,532 (24% above Q4 average).
                      Position inventory, staffing, and marketing now to capture this seasonal lift. Target exceeding
                      2025 Q1 performance by leveraging gift card redemptions and strong December momentum entering
                      the new year.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Strategic Focus Areas for 2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Traffic Recovery Initiative:</strong> 2025 averaged 201 orders/day vs. Q4 average of
                      191 orders/day. Launch targeted customer acquisition and retention programs in Q1 when seasonal
                      demand is highest. Recovering to 210 orders/day would generate $14,000+ additional monthly revenue
                      at current AOV.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Food Category Leadership:</strong> Four consecutive months of food percentage growth
                      (8.9% → 9.7% → 10.3% → 10.6%) validates menu improvements. Expand successful food offerings,
                      enhance breakfast items (which grew to 38.2% in December), and leverage food&apos;s typically
                      higher margins to improve unit economics.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Seasonal Optimization:</strong> 2025 confirmed 19.6% variance between strong (Q1-Q2: $97,708
                      avg) and weak (Q3-Q4: $78,654 avg) seasons. Build 2026 plans around this reality: aggressive growth
                      initiatives in Q1-Q2, operational efficiency focus in Q3-Q4. This approach maximizes profit across
                      the full cycle.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Profitability at Current Scale:</strong> With revenue baseline established at $76K-$80K
                      (Q4 average: $78,008), optimize cost structure for profitability at this level. Review labor
                      efficiency, inventory management, and operational expenses to improve margins even if revenue
                      growth remains challenging.
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
                <p className="text-sm text-muted-foreground">Current: 187/day | Target: 210+ orders/day (2025 avg: 201)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.74 | Target: $15.00+ (March peak: $15.64)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 10.6% | Target: 12.0%+ (2025 avg: 10.5%)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $79,625 | Target: $90,000+ (2025 avg: $88,048)</p>
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
              <strong className="text-green-700">December&apos;s 4.5% recovery to $79,625 closes 2025 on a positive note</strong>,
              marking the highest revenue since July and validating the business has established a stable floor around
              $76K-$80K monthly revenue. The full year averaged $88,048 with clear seasonal patterns: strong Q1-Q2
              ($97,708 average) and weaker Q3-Q4 ($78,654 average), representing a 19.6% seasonal variance that must
              inform 2026 planning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most encouraging trends are sustainable: average order value increased for the second consecutive
              month ($12.97 → $13.36 → $13.74), food category grew for four straight months (8.9% → 9.7% → 10.3% →
              10.6%), and December delivered exceptional gift card sales ($1,170—highest since January). These metrics
              indicate operational improvements are working and building momentum entering 2026.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>2026 success requires three-part execution:</strong> (1) Capitalize on Q1 seasonal strength and
              December&apos;s $1,170 in gift cards to drive January-March performance above 2025 levels, (2) Systematize
              the AOV and food category improvements to sustain growth trajectories, and (3) Launch traffic recovery
              initiatives to close the 7% gap between current (187/day) and target (210/day) order volumes. With revenue
              baseline stable, clear seasonal patterns established, and positive momentum in key metrics, the foundation
              for profitable 2026 growth is in place.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
