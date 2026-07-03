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
              className="inline-flex items-center gap-2 rounded-sm px-2 py-1 text-label-lg text-primary hover:bg-accent hover:text-accent-foreground mb-4 transition-colors"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              Back to Dashboard
            </Link>
            <h1 className="text-headline-md">Operating Commentary</h1>
            <p className="text-muted-foreground mt-1 text-body-lg">Analysis of Sales Trends - 1H2026 & 2Q2026 Performance Focus</p>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground text-body-lg leading-relaxed mb-4">
                Friends of Friends experienced significant volatility in 2025, peaking in March at $110,321 before declining to a trough of $74,930 in September and stabilizing around $76K–$80K in Q4. Entering 2026, the first half of the year (<strong>1H2026</strong>) delivered a strong recovery trend, totaling <strong className="text-success">$515,199 in Net Sales</strong> and averaging $85,866/mo.
              </p>
              <p className="text-muted-foreground text-body-lg leading-relaxed mb-4">
                Quarterly analysis shows that <strong>2Q2026 (April–June) grew to $260,133</strong>, representing a <strong className="text-success">+2.0% growth QoQ</strong> over 1Q2026 ($255,066). This performance was driven by a powerful surge in April ($89,129, 211 orders/day) and May (<strong className="text-success">$93,461</strong>, 216 orders/day), which marked the highest monthly sales since April 2025 ($101,404).
              </p>
              <p className="text-muted-foreground text-body-lg leading-relaxed">
                However, <strong>June 2026 saw a seasonal contraction, closing at $77,543</strong> (193 orders/day). This contraction was driven by a drop in customer traffic (-13.7% MoM) and a decline in average order value (AOV) to $13.41, primarily due to a sharp pullback in beverage alcohol sales (Wine and Draft Beer). Despite June&apos;s dip, the overall 1H2026 trajectory remains highly encouraging, proving the business has established a higher operational baseline compared to late 2025.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Performance */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary sm:w-6 sm:h-6" size={20} />
              <CardTitle>Revenue Performance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="callout-error">
                <h3 className="text-title-md font-semibold mb-2">June 2026: $77,543 — Seasonal Slump & Traffic Contraction</h3>
                <p className="text-body-md">
                  June contracted to $77,543 across 5,781 orders—193 orders/day and $2,585/day in Net Sales. This represents a -17.0% decline from May&apos;s peak of $93,461. The slide was driven by both volume (920 fewer orders, or -13.7% MoM) and ticket size, with AOV dropping from $13.95 in May to $13.41 in June. This contraction echoes the seasonal slide observed in summer 2025, underlining the need to protect traffic levels during summer months.
                </p>
              </div>

              <div className="callout-success">
                <h3 className="text-title-md font-semibold mb-2">May 2026: $93,461 — Q2 Peak and Highest Month in a Year</h3>
                <p className="text-body-md">
                  May delivered a standout performance at $93,461 across 6,701 orders, averaging 216 orders/day (highest daily volume since May 2025) and $3,015/day in net sales. Beverage mix climbed to a 1H26 high of 56.3%, fueled by a Wine category peak of $2,277 (2.4% of sales) and Draft Beer at $1,388 (1.5%). May confirmed the recovery potential of the brand when traffic and beverage attachment align.
                </p>
              </div>

              <div className="callout-info">
                <h3 className="text-title-md font-semibold mb-2">April 2026: $89,129 — Strong AOV Foundations</h3>
                <p className="text-body-md">
                  April generated $89,129 across 6,318 orders (211/day). AOV peaked in April at $14.11 (highest in 1H2026), demonstrating strong ticket health. Total beverages comprised 53.7% of sales, laying the groundwork for May&apos;s breakthrough.
                </p>
              </div>

              <div className="callout-warning">
                <h3 className="text-title-md font-semibold mb-2">Quarterly Outlook: Q2 Outperformed Q1 by +2.0%</h3>
                <p className="text-body-md">
                  From a quarterly perspective, Q2 2026 Net Sales reached $260,133, beating Q1 2026 ($255,066) by $5,067 (+2.0%). Q2 average monthly sales stood at $86,711 compared to Q1&apos;s $85,022. This demonstrates that despite June&apos;s contraction, the quarterly momentum has accelerated, reinforcing the recovery narrative.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Mix Analysis */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="text-warning sm:w-6 sm:h-6" size={20} />
              <CardTitle>Category Mix Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="callout-error">
                <h3 className="text-title-md font-semibold mb-2">Beverage Alcohol Collapse in June (-60.1% MoM)</h3>
                <p className="text-body-md">
                  While total beverages remained high at 56.1% of June sales ($43,466), the high-margin alcohol subcategories collapsed. Wine sales plummeted from $2,277 (2.4% of sales) in May to just $645 (0.8%) in June, a -71.7% drop. Draft Beer fell from $1,388 (1.5%) to $527 (0.7%), a -62.0% drop. Overall beverage alcohol dropped from $4,757 in May to $1,896 in June. This collapse directly dragged down AOV.
                </p>
              </div>

              <div className="callout-success">
                <h3 className="text-title-md font-semibold mb-2">Wavy Merchandise: A Surprise Bright Spot (+94.1% MoM)</h3>
                <p className="text-body-md">
                  Merchandise sales rose sharply in June, reaching $1,374 (1.8% of sales), nearly doubling from May&apos;s $708. This suggests that summer merchandise offerings are finding strong customer reception and providing a valuable buffer against beverage contraction.
                </p>
              </div>

              <div className="callout-info">
                <h3 className="text-title-md font-semibold mb-2">NA Beverage and Food Categories Remain Stable</h3>
                <p className="text-body-md">
                  NA Beverages continue to anchor the business, contributing 53.6% ($41,570) of sales in June. Food sales were $7,652 (9.9% share) in June, compared to $9,905 (10.6% share) in May, remaining near the 10% target. No-category items held stable at 32.3% ($25,052).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Traffic & Order Patterns */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingDown className="text-warning sm:w-6 sm:h-6" size={20} />
              <CardTitle>Customer Traffic & Order Patterns</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="callout-info">
                <h3 className="text-title-md font-semibold mb-2">Dine-In vs. Takeout Dynamics</h3>
                <p className="text-body-md">
                  In June, Dine-In generated $38,790 across 2,559 orders, averaging $15.16 per order. Takeout generated $35,041 across 2,967 orders, averaging $11.81 per order. The significantly higher AOV of Dine-In ($15.16 vs. $11.81) highlights that in-house dining remains the primary driver of profitability. The contraction in June was heavily felt in Dine-In orders, which dropped from 3,055 in May to 2,559 in June (-16.2%).
                </p>
              </div>

              <div className="callout-warning">
                <h3 className="text-title-md font-semibold mb-2">AOV Compression is the Primary Challenge</h3>
                <p className="text-body-md">
                  June&apos;s AOV of $13.41 represents the lowest level since January 2026. The main culprit is the lack of alcohol attachment on takeout tickets and the drop in Dine-In order sizes. Restoring AOV to the $14.00+ level seen in April ($14.11) is the most immediate path to lifting top-line revenue.
                </p>
              </div>

              <div className="callout-info">
                <h3 className="text-title-md font-semibold mb-2">Daypart Split: Breakfast Gains Share</h3>
                <p className="text-body-md">
                  June daypart analysis: Lunch remained the largest period at 48.2% ($35,536, 2,785 orders), followed by Breakfast at 37.2% ($31,277, 2,152 orders). Dinner contributed 7.4% ($4,927), and No Service was 7.2% ($5,469). Breakfast expanded its share by 1.8 percentage points MoM, showing resilient morning routines.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <Card className="mb-4 sm:mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary sm:w-6 sm:h-6" size={20} />
              <CardTitle>Strategic Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-title-lg font-semibold mb-3">Immediate Priorities for 2H2026</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span className="text-body-lg text-muted-foreground">
                      <strong>Reclaim the Beverage Alcohol Lift:</strong> The collapse in Wine (-71.7%) and Draft Beer (-62.0%) was the primary contributor to June&apos;s AOV drop. We must launch immediate summer alcohol pairings, weekend wine flights, and happy hour draft specials to restore wine and draft beer sales.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span className="text-body-lg text-muted-foreground">
                      <strong>Drive Dine-In Traffic:</strong> Dine-In orders average $15.16, compared to Takeout&apos;s $11.81. Shifting 5% of takeout customers to dine-in would lift overall AOV. Consider hosting summer community events, in-house acoustic sessions, or trivia nights to draw guests through the door.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span className="text-body-lg text-muted-foreground">
                      <strong>Stabilize Traffic Baseline:</strong> While June volume dropped to 193/day, the Q2 average of 207/day indicates strong customer interest. Implementing a summer loyalty reward or local business lunch program can keep Friends of Friends top-of-mind during vacation periods.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-title-lg font-semibold mb-3">Strategic Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-success font-bold">•</span>
                    <span className="text-body-lg text-muted-foreground">
                      <strong>Capitalize on Merchandise Success:</strong> With Wavy Merchandise growing +94.1% MoM to $1,374, we should release limited-edition summer capsules (e.g., hats, tote bags, apparel) to maintain this margin-rich revenue stream.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-success font-bold">•</span>
                    <span className="text-body-lg text-muted-foreground">
                      <strong>Enhance Dinner & Late Night Throughput:</strong> Dinner ($4,927, 7.4% share) remains under-indexed. Evaluating the dinner menu or offering early-evening dinner specials could capture more of this high-ticket daypart.
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
            <CardTitle>Critical Metrics to Monitor Weekly</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="callout-info p-4">
                <h3 className="text-title-md font-semibold mb-1">Daily Order Count</h3>
                <p className="text-body-sm text-muted-foreground">Current: 193/day (June) | Target: 215+ orders/day</p>
              </div>

              <div className="callout-success p-4">
                <h3 className="text-title-md font-semibold mb-1">Average Order Value</h3>
                <p className="text-body-sm text-muted-foreground">Current: $13.41 (June) | Target: $14.25+ (1H26 average was $13.84)</p>
              </div>

              <div className="callout-warning p-4">
                <h3 className="text-title-md font-semibold mb-1">Food Category Percentage</h3>
                <p className="text-body-sm text-muted-foreground">Current: 9.9% (June) | Target: 10.5%+</p>
              </div>

              <div className="callout-error p-4">
                <h3 className="text-title-md font-semibold mb-1">Monthly Revenue Target</h3>
                <p className="text-body-sm text-muted-foreground">Current: $77,543 (June) | Target: $90,000+</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-4 sm:mb-6 callout-info">
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-lg leading-relaxed mb-4">
              <strong>First Half 2026 (1H2026) Net Sales totaled $515,199</strong>, reflecting a solid recovery trajectory compared to the late 2025 slowdown. Q2 2026 ($260,133) demonstrated continued acceleration with <strong>+2.0% growth over Q1 2026</strong> ($255,066). May 2026 was the absolute peak of the period, breaking through the $90K barrier at $93,461.
            </p>
            <p className="text-body-lg leading-relaxed mb-4">
              June&apos;s contraction to $77,543 serves as a warning of summer seasonality and the volatility of high-margin alcohol categories (Wine down -71.7% and Draft Beer down -62.0%). However, because the business has shown it can sustain daily traffic of 216+ orders/day (as in May), the operational potential remains very high.
            </p>
            <p className="text-body-lg leading-relaxed">
              <strong>Looking toward 2H2026</strong>, the strategy centers on two primary goals: (1) recovering alcohol category attachment to push AOV back above $14.00, and (2) encouraging dine-in visits which yield a 28% higher ticket value compared to takeout. With stable core volume and strong merchandise demand ($1,374 in June), Friends of Friends is well-positioned for a robust second half of the year.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
