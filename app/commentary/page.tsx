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
                April 2026 eased slightly to <strong className="text-blue-700">$89,128</strong> (216/day but 30 days vs 31),
                before <strong className="text-green-700">May 2026 broke through at $93,478</strong> (216 orders/day).
                May was the strongest month since April 2025 ($101,404) and the first $90K+ month in over a year.
                The Q1-Q2 2026 arc shows a clear recovery: Q1 averaged $85,022/mo, and April-May
                averaged $91,303/mo, proving the business is exiting the trough and rebuilding toward prior highs.
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
                  month since April 2025 ($101,404), marking a 4.9% revenue increase over April 2026 ($89,128) and confirming that
                  the recovery is not only real but accelerating into the summer season.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">April 2026: $89,129 — Steady Between March and May</h3>
                <p className="text-muted-foreground">
                  April 2026 delivered $89,129 across 6,318 orders—211 orders/day (30 days vs 31). Notably, AOV jumped to
                  $14.11 from March&apos;s $13.92, a meaningful $0.19 increase and the highest AOV since July 2025 ($14.39).
                  Beverage mix rose to 53.7% ($47,856) from March&apos;s 52.4%, already hinting at the spring alcohol lift that
                  would fully materialize in May. April wasn&apos;t a step back—it was a consolidation month that set the stage for May.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Context & Headwinds: AOV Still Below 2025 Levels</h3>
                <p className="text-muted-foreground">
                  While traffic volume has fully recovered and daily orders are now exceeding 2025 levels, AOV remains the
                  primary headwind. May 2026 AOV was $13.95—flat with the trailing 12-month trend but still well below
                  May 2025 ($15.44). April&apos;s $14.11 AOV was a bright spot, suggesting the gap may be closing. The good news:
                  volume growth is now strong enough to offset the AOV gap. At 216/day and $13.95 AOV, monthly revenue is $93,478.
                  Returning to $15.00 AOV at this traffic level would push monthly revenue to ~$100,400—within reach of the 2025 peak.
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

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">April Category Mix Prefigured May Growth</h3>
                <p className="text-muted-foreground">
                  April 2026 already showed beverage strength: category mix reached 53.7% ($47,856), driven by NA Beverages
                  at 51.1% ($45,525). Wine was $967 (1.1%) and alcohol categories combined for 2.3% ($2,330). Food held at
                  $10,021 (11.2%). The April mix was essentially a preview of May—beverages trending up, food stable near
                  double digits, no-category items compressing as drink mix becomes more dominant entering warm weather months.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r">
                <h3 className="font-semibold text-yellow-900 mb-2">Food Category Holds Strong at 10.6%</h3>
                <p className="text-muted-foreground mb-2">
                  Food sales reached $9,905 (10.6% of revenue) in May 2026, a modest step down from April&apos;s 11.2% ($10,021)
                  in absolute terms but in line with higher overall revenue. At this volume, food is still contributing
                  nearly $10K monthly and remains structurally important. The nine-month run of food near or above 10%
                  confirms the category is a stable, established revenue pillar.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">No-Category Items: 32.4% in May</h3>
                <p className="text-muted-foreground">
                  No-category sales were $30,270 (32.4%) in May, down slightly as a percentage of total but steady in absolute
                  terms compared to April ($28,265, 31.7%). Merchandise holds at $708 (0.8%). As beverage mix rises into summer,
                  the no-category share naturally compresses—a healthy sign of category rotation toward higher-value drink sales.
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
                  May 2026 closed at 216 orders/day (6,703 total), decisively surpassing April&apos;s 211/day (6,318 total) and
                  erasing the traffic deficit that persisted through most of 2025. This is the highest daily volume in a full
                  year—since May 2025&apos;s 212/day—and signals that customer acquisition momentum is now setting new highs for
                  the post-2025 era. Notably, April also showed 211/day in a 30-day month, meaning both April and May ran at
                  comparable daily velocity; May simply had one extra calendar day.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                <h3 className="font-semibold text-blue-900 mb-2">Average Order Value: April Led at $14.11, May at $13.95</h3>
                <p className="text-muted-foreground">
                  April AOV reached $14.11—the highest since July 2025 ($14.39)—before May settled back to $13.95. The April
                  uptick is the more interesting signal: it suggests customers are willing to spend more when beverage alcohol
                  mix rises. The key gap to prior year remains AOV (May 2025: $15.44), but April&apos;s $14.11 proves the
                  ceiling is not permanently lowered. Closing this gap toward $14.50–$15.00 is the highest-leverage revenue
                  opportunity at current traffic levels.
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
                      <strong>Protect Traffic Gains:</strong> At 216/day, traffic is now the strongest it has been in a year.
                      April (211/day, 30 days) and May (216/day, 31 days) ran at virtually identical daily velocity—meaning
                      the 216 pace is a real operating level, not a one-month blip. Invest in retention (loyalty, email,
                      community programming) to ensure summer volume doesn&apos;t backslide. Losing even 5 orders/day costs ~$2,100/month.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span className="text-muted-foreground">
                      <strong>Attack AOV with Alcohol &amp; Premium Beverages:</strong> Wine jumped from 0.6% in March to 2.4%
                      in May—this is a $1,700+ monthly swing. April&apos;s $14.11 AOV (highest since July 2025) proves the alcohol
                      lift directly impacts per-ticket revenue. Push wine, draft beer, and specialty beverages. A 1% shift
                      from NA Beverage to alcohol at higher ticket prices directly lifts total revenue without requiring new customers.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span className="text-muted-foreground">
                      <strong>Target $100K Months:</strong> The math is now realistic: at 216 orders/day, raising AOV from $13.95
                      to $15.44 (May 2025 levels) pushes monthly revenue to ~$100,400. Alternatively, sustaining current AOV
                      and growing traffic to 235 orders/day achieves the same result. Both paths are credible given April-May momentum.
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
                      <strong>Wine &amp; Alcohol Upside:</strong> Wine&apos;s growth from 0.6% (March) to 1.1% (April) to 2.4% (May)
                      is the standout trend. Double down: wine features, staff training on pairings, and weekend evening pushes
                      could sustain this lift and grow the 2.4% share toward 3.5%+. At current volume, that&apos;s an incremental
                      $1,500+/month.
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
                <p className="text-sm text-muted-foreground">Current: $13.95 (May) | Target: $14.50+ (Apr 2026 was $14.11)</p>
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
              resurgence. The $90K barrier, which had held firm since April 2025, is officially broken. April&apos;s
              consolidation at $89,129 with a higher $14.11 AOV set the table—May capitalized with both volume and mix.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The recovery narrative has shifted. The challenge in 2025 and early 2026 was rebuilding traffic volume.
              That mission is largely accomplished: April (211/day) and May (216/day) prove the new baseline is now above
              210 orders/day. The next phase is converting this volume into $100K+ months by closing the AOV gap. At current
              traffic, every $0.50 AOV increase adds ~$3,240/month. April&apos;s $14.11 AOV is proof the ceiling is higher than
              recent months suggested.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The summer window is open.</strong> With May proving the business can sustain 216+ orders/day and
              beverage alcohol showing seasonal strength (wine 2.4%, alcohol total 3.9%), the conditions are set for
              sustained $90K+ performance. The path to $100K runs through two levers: (1) protecting and slightly growing
              traffic, and (2) recovering AOV via premium beverage and upsell discipline. April&apos;s $14.11 AOV shows the
              potential is there. Both levers are well within reach.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
