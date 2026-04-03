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
                below January but consistent with the February 2025 seasonal pattern. March 2026 showed
                accelerating momentum at <strong className="text-green-700">$89,845</strong> (208 orders/day).
                Q1 2025 averaged $97,532—Q1 2026 is tracking below that benchmark, but with AOV improving to $13.92 in March, it represents a substantial recovery.
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
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">March 2026: $89,845 — Strong Conclusion to Q1</h3>
                <p className="text-muted-foreground">
                  The full month of March 2026 delivered $89,845 across 6,454 orders—208 orders/day and $2,898/day in net sales. 
                  Tips reached $9,657 (10.7% of net), and the beverage mix held at 52.4%. March represents the strongest 
                  month so far in 2026, marking a 14.5% revenue increase over February, and confirming that the seasonal recovery is well underway heading into Q2.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Q1 2026 Overview: Seasonal Recovery Confirmed</h3>
                <p className="text-muted-foreground">
                  For the first quarter, total revenue reached $255,066 across 18,425 orders. Traffic showed consistent 
                  month-over-month strengthening from January (202 orders/day) and February (204 orders/day) to March (208 orders/day), 
                  averaging 205 orders/day for the quarter. Q1 historically delivers strong performance, with 
                  2025 seasonality showing Q1 as the second-strongest quarter (avg $97,532/mo). Q1 2026 averaged $85,022/month.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Context & Headwinds: AOV Compression</h3>
                <p className="text-muted-foreground">
                  While traffic volume is recovering and matching 2025 periods, Q1 2026 is tracking below prior-year revenue 
                  primarily due to lower Average Order Value (AOV). For Q1 2026, AOV was $13.84 ($13.84 in Jan, $13.76 in Feb, $13.92 in Mar). 
                  In contrast, early 2025 observed AOV above $15.00. Per-ticket revenue is climbing heading into spring, but 
                  remains the primary gap to close to return to sustained $90K+ months.
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
                  Beverages accounted for 52.4% of March 2026 sales ($47,085). February full month was $41,780
                  (53.2%). NA Beverages remain dominant at 50.0% of total
                  sales in March. Wine ($566), draft beer ($657), and bottled beer ($958)
                  hold steady in the 0.6–1.1% range each.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Holds Strong at 12.1% in February</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $10,601 (11.8% of revenue) in March 2026, following February&apos;s 12.1%
                  ($9,508). This marks seven consecutive months of food percentage near or above 11–12%,
                  validating sustained menu demand. The food category is firmly established as a
                  double-digit revenue contributor.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">No-Category Items: 34.6% in March</h3>
                <p className="text-muted-foreground">
                  No-category sales were $31,081 (34.6%) in March, up in absolute terms compared to February.
                  Merchandise grew to $1,078 (1.2%) in March. The non-beverage mix holds consistently around 47% of total revenue.
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
                <h3 className="font-semibold text-yellow-900 mb-2">Traffic Recovery Sustained: 204/day Feb, 208/day March</h3>
                <p className="text-muted-foreground mb-2">
                  February closed at 204 orders/day (5,704 total).
                  March held strong at 208 orders/day (6,454 total). The traffic recovery that began in January
                  continues to strengthen.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                <h3 className="font-semibold text-green-900 mb-2">Average Order Value: Improving to $13.92 in March</h3>
                <p className="text-muted-foreground">
                  March AOV reached $13.92, an improvement over February ($13.76) and January ($13.84). The key
                  gap to prior year remains AOV. Closing
                  this gap toward $14.50–$15.00 is the highest-leverage revenue opportunity.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Distribution: Lunch 51%, Breakfast 34%</h3>
                <p className="text-muted-foreground">
                  March 2026 daypart: Lunch 51.5% ($44,956, 3,325 orders), Breakfast 33.7% ($32,423,
                  2,174 orders), Dinner 8.2% ($7,024, 529 orders), No Service 6.6% ($5,443). Compared to
                  February, breakfast share tapered slightly while lunch regained dominance over 51% of sales.
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
                      <strong>Close the AOV Gap:</strong> The single biggest lever is AOV. March 2025 averaged
                      $15.64; March 2026 averaged $13.92—a $1.72 gap worth ~$11,100/month at current order volume.
                      Upselling, menu mix optimization, and pricing review are the priority. Each $0.50 increase
                      in AOV adds ~$3,200/month at 208 orders/day.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Push Traffic Beyond 215+ Orders/Day:</strong> March hit 208/day—showing continued strength. 
                      Continue customer acquisition and lunch-period optimization.
                      At 215 orders/day and $13.92 AOV, monthly revenue would be ~$92.8K. Recovering to
                      $15.00 AOV at 215 orders/day reaches ~$100K/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Capture Q2 Seasonal Window:</strong> 2025 showed Q2 as the second-strongest quarter
                      (avg $97,883). With March traffic momentum building (208/day),
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
                      <strong>Food Category: Hold Above 11-12%:</strong> Seven months of double-digit food percentage
                      validates the menu strategy. Maintain and build on this—food at 11-12%+ contributes structural
                      diversification away from beverage-only dependence and typically carries stronger margins.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Beverage Premium Mix:</strong> NA Beverages at 50.0% of sales are the core
                      revenue engine. Focus on premium and specialty offerings to lift per-unit revenue within
                      this stable, high-volume category. Even a 5% increase in average beverage ticket would
                      add ~$2,300/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Lunch Window Optimization:</strong> Lunch accounts for 51.5% of revenue (3,325 orders
                      in March). Throughput improvements, targeted promotions, and staffing optimization
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
                <p className="text-sm text-muted-foreground">Current: 208/day (March) | Target: 215+ orders/day</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $13.92 (March) | Target: $15.00+ (2025 level)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-sm text-muted-foreground">Current: 11.8% (March) | Target: 14.0%+</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-sm text-muted-foreground">Current: $89,845 (March) | Target: $90,000+</p>
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
              <strong className="text-green-700">March 2026 closed strongly at $89,845.</strong> Traffic is
              recovering well (208/day in March), food has stabilized near 12%, and beverage
              mix is consistent at ~52.4%. The seasonal recovery is real and accelerating into Q2.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A key milestone is the uptick in AOV to $13.92 in March, recovering some of the ground lost from the prior year. Traffic volume
              is stabilizing nicely above 200 orders per day, so AOV recovery remains a critical path
              to restoring regular $90K+ months. Consistently strong menu mix performance points clearly to sustained consumer demand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The spring seasonal window has arrived.</strong> With March momentum near $90K,
              the business is well-positioned to capitalize on Q2 strength (2025 Q2 avg $97,883). The path to $90K+ months runs through AOV
              recovery toward $14.50–$15.00 and sustaining 215+ daily orders. Both are very much within reach
              given current traffic trends.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
