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
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January 2025 to May 2026</p>
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
                below January but consistent with the February 2025 seasonal pattern. March 2026 showed
                accelerating momentum at <strong className="text-green-700">$89,845</strong> (208 orders/day).
                <strong className="text-green-700"> May 2026 broke through at $93,478</strong> (216 orders/day), the strongest
                month since April 2025 ($101,404) and the first $90K+ month in over a year.
                Q1 2025 averaged $97,532—Q1 2026 averaged $85,022, but May proves the recovery is accelerating into summer.
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
                <h3 className="font-semibold text-green-900 mb-2">May 2026: $93,478 — First $90K+ Month Since April 2025</h3>
                <p className="text-muted-foreground">
                  The full month of May 2026 delivered $93,478 across 6,703 orders—216 orders/day and $3,016/day in net sales.
                  Tips reached $9,421 (10.1% of net), and the beverage mix climbed to 54.1%. May represents the strongest
                  month since April 2025 ($101,404), marking a 4.0% revenue increase over March 2026 and confirming that
                  the recovery is not only real but accelerating into the summer season.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Q1-Q2 2026 Momentum: From $78K to $93K</h3>
                <p className="text-muted-foreground">
                  Through January–March and now May 2026 (April data was not reported), total tracked revenue reached
                  $348,544 across 26,128 orders. Traffic strengthened from January (202/day) to February (204/day) to March
                  (208/day) and now May (216/day), showing a clear upward trajectory. The May result—216 orders/day—is the
                  highest daily volume since May 2025 (212/day), erasing the traffic deficit that persisted through most of 2025.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Context & Headwinds: AOV Still Below 2025 Levels</h3>
                <p className="text-muted-foreground">
                  While traffic volume has fully recovered and daily orders are now exceeding 2025 levels, AOV remains the
                  primary headwind. May 2026 AOV was $13.95—flat with the trailing 12-month trend but still well below
                  May 2025 ($15.44). The good news: volume growth is now strong enough to offset the AOV gap. At 216/day and
                  $13.95 AOV, monthly revenue is $93,478. Returning to $15.00 AOV at this traffic level would push monthly
                  revenue to ~$100,400—within reach of the 2025 peak.
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
                <h3 className="font-semibold text-green-900 mb-2">Beverage Sales at 54.1% — Highest Since October 2025</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages accounted for 54.1% of May 2026 sales ($50,596), the highest beverage mix in eight months.
                  NA Beverages remain dominant at 51.2% of total sales ($47,839). Wine notably expanded to $2,277 (2.4%), a
                  meaningful jump from March ($566, 0.6%), while draft beer ($1,388, 1.5%) and bottled beer ($1,092, 1.2%)
                  also gained share. The alcohol category is showing spring/summer strength consistent with seasonal patterns.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Steady at 10.6%</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $9,905 (10.6% of revenue) in May 2026, a modest step down from March&apos;s 11.8% ($10,601)
                  in absolute terms but in line with higher overall revenue. At this volume, food is still contributing
                  nearly $10K monthly and remains structurally important. The nine-month run of food near or above 10%
                  confirms the category is a stable, established revenue pillar.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">No-Category Items: 32.4% in May</h3>
                <p className="text-muted-foreground">
                  No-category sales were $30,270 (32.4%) in May, down slightly as a percentage of total but steady in absolute
                  terms compared to March. Merchandise holds at $708 (0.8%). As beverage mix rises into summer, the no-category
                  share naturally compresses—a healthy sign of category rotation toward higher-value drink sales.
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
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Traffic Hits 216/Day — Best Since May 2025</h3>
                <p className="text-muted-foreground mb-2">
                  May 2026 closed at 216 orders/day (6,703 total), decisively surpassing March&apos;s 208/day and moving past
                  the 215/day threshold previously set as a target. This is the highest daily volume in a full year and
                  signals that customer acquisition momentum is not just recovering but setting new highs for the post-2025 era.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Average Order Value: Stable at $13.95</h3>
                <p className="text-muted-foreground">
                  May AOV held at $13.95, matching the trailing trend (Jan $13.84, Feb $13.76, Mar $13.92). While this
                  is still $1.49 below May 2025 ($15.44), the volume surge means total revenue is now materially higher than
                  early 2026. The key leverage point remains: at 216/day, every $0.50 AOV increase adds ~$3,240/month.
                  Closing even half the 2025 gap would add ~$4,800/month.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Daypart Distribution: Lunch 50%, Breakfast 35%</h3>
                <p className="text-muted-foreground">
                  May 2026 daypart: Lunch 49.8% ($43,739, 3,335 orders), Breakfast 35.4% ($35,920,
                  2,372 orders), Dinner 8.2% ($7,722, 551 orders), No Service 6.5% ($6,037, 439 orders),
                  Late Night 0.1% ($60, 6 orders). Breakfast share expanded back toward 35% after tapering in March,
                  while lunch remained the dominant period near 50%. The new Late Night category appeared in May—minimal
                  today but worth monitoring as a potential growth window.
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
                <h3 className="font-semibold mb-3 text-lg">Immediate Priorities for Summer 2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-muted-foreground">
                      <strong>Protect Traffic Gains:</strong> At 216/day, traffic is now the strongest it has been in a full year.
                      This is the new floor, not the ceiling. Invest in retention (loyalty, email, community programming) to
                      ensure summer volume doesn&apos;t backslide. Losing even 5 orders/day costs ~$2,100/month at current AOV.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Attack AOV with Alcohol &amp; Premium Beverages:</strong> Wine jumped from 0.6% to 2.4% in May—this
                      is a $1,700+ monthly swing. The spring/summer alcohol window is open. Push wine, draft beer, and specialty
                      beverages. A 1% shift from NA Beverage to alcohol at higher ticket prices directly lifts total revenue
                      without requiring new customers.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Target $100K Months:</strong> The math is now realistic: at 216 orders/day, raising AOV from $13.95
                      to $15.44 (May 2025 levels) pushes monthly revenue to ~$100,400. Alternatively, sustaining current AOV
                      and growing traffic to 235 orders/day achieves the same result. Both paths are credible given May momentum.
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
                      <strong>Food Category: Hold Above 10%:</strong> At $9,905 (10.6%), food is contributing meaningfully even
                      as beverage share rises. Food orders typically carry higher margins and drive visit frequency. Maintaining
                      food above 10% ensures the menu mix stays balanced and revenue isn&apos;t purely drink-dependent.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Wine &amp; Alcohol Upside:</strong> Wine&apos;s 4x growth from March to May is the standout trend.
                      Double down: wine features, staff training on pairings, and weekend evening pushes could sustain this lift
                      and grow the 2.4% share toward 3.5%+. At current volume, that&apos;s an incremental $1,500+/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Lunch &amp; Breakfast Throughput:</strong> Combined, these periods drive ~85% of orders (5,707 of
                      6,703). Even modest throughput improvements during the 8AM–2PM window compound meaningfully at this scale.
                      Staffing, POS speed, and line management deserve attention as volume pushes into uncharted territory.
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
                <p className="text-sm text-muted-foreground">Current: 216/day (May) | Target: 225+ orders/day</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.95 (May) | Target: $14.50+ (summer 2025 level)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 10.6% (May) | Target: 11.5%+</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $93,478 (May) | Target: $100,000+</p>
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
              <strong className="text-green-700">May 2026 delivered $93,478—the strongest month in over a year.</strong> Traffic hit
              216 orders/day, the highest daily volume since May 2025. Beverage mix climbed to 54.1%, led by a notable wine
              resurgence. The $90K barrier, which had held firm since April 2025, is officially broken.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The recovery narrative has shifted. For most of 2025 and early 2026, the challenge was rebuilding traffic volume.
              That mission is largely accomplished. The next phase is converting this volume into $100K+ months by closing the
              AOV gap—a $1.49 lift back toward 2025 levels. At current traffic, that gap is worth ~$9,700/month.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The summer window is open.</strong> With May proving the business can sustain 216+ orders/day and
              beverage alcohol showing seasonal strength, the conditions are set for sustained $90K+ performance.
              The path to $100K runs through two levers: (1) protecting and slightly growing traffic, and (2) recovering
              AOV via premium beverage and upsell discipline. Both are well within reach.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
