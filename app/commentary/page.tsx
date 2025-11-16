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
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Analysis of Sales Trends - January to October 2025</p>
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
                Friends of Friends has experienced significant sales volatility through the first ten months of 2025,
                with a peak in March ($110,321) followed by a sustained decline through September ($74,930). However,
                <strong className="text-green-700"> October showed a 4.4% rebound to $78,211</strong>, suggesting the
                late-summer downturn may have bottomed out. The business continues to face challenges in maintaining
                revenue momentum, particularly in food and merchandise categories, while beverage sales remain the
                core strength of the operation.
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
                <h3 className="font-semibold text-green-900 mb-2">October Recovery Signal</h3>
                <p className="text-muted-foreground">
                  October delivered $78,211 in net sales, up 4.4% from September&apos;s low of $74,930. This marks
                  the first month-over-month increase since June, suggesting the business may have found a floor.
                  Daily sales improved to $2,523/day (vs. September&apos;s $2,498/day) and order volume increased
                  to 195/day (vs. 188/day in September).
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Still Below Peak Performance</h3>
                <p className="text-muted-foreground">
                  Despite October&apos;s recovery, sales remain 29% below the March peak ($110,321). The 10-month
                  average of $92,218 represents a sustainable target, requiring a 18% improvement from current levels.
                  Q4 will be critical in determining whether October&apos;s uptick is sustainable or merely seasonal variance.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Seasonal Patterns Emerging</h3>
                <p className="text-muted-foreground">
                  Strong Q1 performance (particularly March) followed by summer weakness and early fall recovery
                  suggests clear seasonal patterns. The 10-month data shows: Q1 avg: $97,532, Q2 avg: $97,883,
                  Q3 avg: $79,301, and October at $78,211. Understanding and planning for these cycles will be
                  critical for 2026 operations.
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
                <h3 className="font-semibold text-green-900 mb-2">Beverage Sales Showing Resilience</h3>
                <p className="text-muted-foreground mb-2">
                  Beverages remain the business&apos;s core strength, accounting for 58.3% of October sales ($45,604).
                  October saw a 3.0% increase in beverage sales from September ($44,274), contributing meaningfully
                  to the overall recovery. The beverage percentage has stabilized after peaking at 59.6% in August.
                </p>
                <p className="text-sm text-green-800 font-medium">
                  Key metric: Beverage sales increased from $42,073 (Jan) to $45,604 (Oct), showing strength even
                  during the overall revenue decline. NA Beverages alone account for 52.9% of total October sales.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Other Categories Showing Signs of Recovery</h3>
                <p className="text-muted-foreground mb-2">
                  &quot;Other Sales&quot; (food, merchandise, uncategorized) improved 7.5% in October to $32,607
                  from September&apos;s $30,656. While still well below the 10-month average of $46,614, this
                  represents the first month-over-month increase since May and suggests stabilization.
                </p>
                <p className="text-sm text-yellow-800 font-medium">
                  October breakdown: Food increased to $7,557 (9.7% of sales, up from 8.9% in September), showing
                  renewed customer interest in food offerings.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Category Balance Improving</h3>
                <p className="text-muted-foreground">
                  The extreme beverage concentration (59.1% in September) has moderated slightly to 58.3% in October
                  as other categories recover. This more balanced mix (if sustained) reduces concentration risk and
                  suggests broader customer engagement across the menu.
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
                <h3 className="font-semibold text-green-900 mb-2">Traffic Recovery Beginning</h3>
                <p className="text-muted-foreground mb-2">
                  October daily order volume improved to 195 orders/day (6,032 total orders), up from September&apos;s
                  188 orders/day. While still 14.5% below the March peak (228 orders/day), this represents the first
                  month-over-month traffic increase since June.
                </p>
                <p className="text-sm text-green-800 font-medium">
                  The 10-month average is 206 orders/day. October&apos;s 195 orders/day is approaching this baseline,
                  suggesting traffic stabilization may be underway.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Average Order Value Remains Challenged</h3>
                <p className="text-muted-foreground">
                  October average order value was $12.97, down slightly from September&apos;s $13.26. This continues
                  the trend from the March high of $15.64 (17% decline). The traffic recovery is positive, but AOV
                  recovery remains the missing piece for full revenue restoration.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Daypart Mix Evolving Positively</h3>
                <p className="text-muted-foreground">
                  October daypart distribution: Lunch 48.5% ($37,917), Breakfast 36.8% ($28,775), Dinner 9.1% ($7,112),
                  and Late Night emerging at 0.1% ($57). Dinner&apos;s growth from 8.2% to 9.1% of sales is encouraging
                  and represents an untapped opportunity for continued expansion.
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
                      <strong>Sustain Traffic Momentum:</strong> October&apos;s 7-order/day increase from September
                      is encouraging. Build on this with continued customer engagement and retention initiatives to
                      reach the 10-month average of 206 orders/day (adding 11 orders/day would generate ~$143/day
                      or $4,290/month in additional revenue).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Average Order Value Focus:</strong> With traffic recovering but AOV declining ($12.97
                      in October vs. $13.26 in September), implement strategic upselling: combo deals, suggested pairings,
                      or loyalty incentives. Even a $2 increase to $14.97 would add $12,064/month at current traffic.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Capitalize on Category Recovery:</strong> Food sales grew from 8.9% to 9.7% of revenue
                      in October. Identify what drove this improvement and double down - new menu items, promotions,
                      or quality improvements that are resonating with customers.
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
                      <strong>Build on October Momentum:</strong> Analyze what changed in October to reverse the
                      decline - was it weather, promotions, menu changes, or market conditions? Replicate successful
                      elements through Q4 and into 2026 planning.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Dinner Service Expansion:</strong> October&apos;s dinner sales grew to 9.1% ($7,112)
                      from September&apos;s 8.2%. Build on this trend with dinner-specific menu development, extended
                      hours, or targeted evening promotions to capture more of this underutilized daypart.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Seasonal Pattern Planning:</strong> With 10 months of data showing clear Q1 strength,
                      Q2-Q3 weakness, and Q4 recovery beginning, develop proactive seasonal strategies for 2026.
                      Plan Q1 2026 to exceed March 2025&apos;s $110K performance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Beverage Innovation:</strong> Beverages are the clear strength ($45,604 in October,
                      58.3% of sales). Introduce seasonal beverages, limited-time offerings, or beverage pairing
                      programs to drive continued growth in this high-performing category.
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
                <p className="text-sm text-muted-foreground">Current: 195/day | Target: 210+ orders/day (10-month avg: 206)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                <h3 className="font-semibold mb-1">Average Order Value</h3>
                <p className="text-sm text-muted-foreground">Current: $12.97 | Target: $15.00+ (March level: $15.64)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-semibold mb-1">Other Sales Category</h3>
                <p className="text-sm text-muted-foreground">Current: $32,607/month | Target: $46,614+ (10-month avg)</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-orange-600">
                <h3 className="font-semibold mb-1">Daily Revenue Velocity</h3>
                <p className="text-sm text-muted-foreground">Current: $2,523/day | Target: $3,200+/day (sustainable growth)</p>
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
              <strong className="text-green-700">October&apos;s 4.4% rebound marks a potential turning point</strong> for
              Friends of Friends after five consecutive months of decline. The business demonstrated resilience with
              traffic recovery (+7 orders/day), beverage sales growth (+3.0%), and improving food category performance
              (+0.8 percentage points). This suggests the late-summer downturn has bottomed out.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While October&apos;s $78,211 remains 29% below the March peak, the stabilization is encouraging. The
              10-month average of $92,218 provides a realistic near-term target that requires 18% growth from current
              levels - achievable through sustained traffic recovery and average order value improvement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The path forward is clear:</strong> Build on October&apos;s momentum through Q4 by sustaining
              traffic growth, recovering average order value through strategic upselling, and capitalizing on beverage
              category strength. With clear seasonal patterns now visible in the data, the business can proactively
              plan for 2026 to exceed 2025 performance. The recovery has begun - consistency and execution are key.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
