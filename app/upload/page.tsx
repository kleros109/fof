'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Upload, FileText, CheckCircle2, AlertTriangle, Play, RefreshCw, Trash2, Clipboard, Check } from 'lucide-react';

interface ParsedData {
  month: string;
  netSales: number;
  tips: number;
  taxAmount: number;
  deferredGiftCards: number;
  totalOrders: number;
  totalAmount: number;
  avgOrder: number;
  categoryData: Array<{ name: string; value: number; items: number; percentage: number }>;
  daypartData: Array<{ name: string; orders: number; sales: number }>;
}

export default function POSUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [parsing, setParsing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPdfjsLoaded, setIsPdfjsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [uploadedMonths, setUploadedMonths] = useState<any[]>([]);
  const [mergeSuccess, setMergeSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing uploaded months on mount
  useEffect(() => {
    const stored = localStorage.getItem('fof_uploaded_months');
    if (stored) {
      try {
        setUploadedMonths(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf' || droppedFile.name.endsWith('.pdf')) {
        setFile(droppedFile);
        setError(null);
        setParsedData(null);
      } else {
        setError('Please drop a valid PDF file.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
      setParsedData(null);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const parsePDF = async () => {
    if (!file) return;
    if (!(window as any).pdfjsLib) {
      setError('PDF parsing library is still loading. Please wait a second and try again.');
      return;
    }

    setParsing(true);
    setError(null);
    setMergeSuccess(false);

    try {
      const pdfjsLib = (window as any).pdfjsLib;
      const fileReader = new FileReader();

      fileReader.onload = async function () {
        try {
          const typedarray = new Uint8Array(this.result as ArrayBuffer);
          const loadingTask = pdfjsLib.getDocument({ data: typedarray });
          const pdf = await loadingTask.promise;
          
          let fullText = '';
          let lastY = null;

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            let pageText = '';
            
            for (const item of textContent.items as any[]) {
              const y = item.transform[5];
              if (lastY !== null && Math.abs(y - lastY) > 6) {
                pageText += '\n';
              }
              pageText += item.str + ' ';
              lastY = y;
            }
            fullText += pageText + '\n';
          }

          const parsed = parsePOSSalesText(fullText);
          if (parsed.netSales === 0) {
            throw new Error('Could not find net sales. Please verify this is a valid Toast POS Sales Summary report.');
          }
          setParsedData(parsed);
        } catch (err: any) {
          setError(err.message || 'Error parsing PDF content.');
        } finally {
          setParsing(false);
        }
      };

      fileReader.readAsArrayBuffer(file);
    } catch (err: any) {
      setError(err.message || 'FileReader error.');
      setParsing(false);
    }
  };

  const parsePOSSalesText = (text: string): ParsedData => {
    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
    
    let netSales = 0;
    let tips = 0;
    let taxAmount = 0;
    let deferredGiftCards = 0;
    let totalOrders = 0;
    let dateRangeStr = '';

    // 1. Try to find date range in Toast Tab URL or header text
    // Example query parameters in print footer: startDate=20260601&endDate=20260630
    const dateUrlMatch = text.match(/startDate=(\d{8})&endDate=(\d{8})/);
    if (dateUrlMatch) {
      const startStr = dateUrlMatch[1];
      const year = startStr.substring(0, 4);
      const month = parseInt(startStr.substring(4, 6), 10);
      const dateObj = new Date(parseInt(year), month - 1, 1);
      dateRangeStr = dateObj.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    } else {
      // Look for Month names in the header text
      const monthMatch = text.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(202\d)/i);
      if (monthMatch) {
        dateRangeStr = `${monthMatch[1].charAt(0).toUpperCase() + monthMatch[1].slice(1).toLowerCase()} ${monthMatch[2]}`;
      }
    }

    // 2. Loop lines for core operational metrics
    for (const line of lines) {
      if (line.startsWith('Net sales') && !line.includes('Service Mode')) {
        const match = line.match(/Net sales\s+\$([\d,]+\.\d{2})/);
        if (match) netSales = parseFloat(match[1].replace(/,/g, ''));
      }
      if (line.startsWith('Total tips') || line.startsWith('Tips collected')) {
        const match = line.match(/(Total tips|Tips collected)\s+\$([\d,]+\.\d{2})/);
        if (match) tips = parseFloat(match[2].replace(/,/g, ''));
      }
      if (line.startsWith('Tax amount')) {
        const match = line.match(/Tax amount\s+\$([\d,]+\.\d{2})/);
        if (match) taxAmount = parseFloat(match[1].replace(/,/g, ''));
      }
      if (line.includes('Deferred (gift cards)')) {
        const match = line.match(/Deferred \(gift cards\)\s+\$([\d,]+\.\d{2})/);
        if (match) deferredGiftCards = parseFloat(match[1].replace(/,/g, ''));
      }
      if (line.startsWith('Total orders')) {
        const match = line.match(/Total orders\s+([\d,]+)/);
        if (match) totalOrders = parseInt(match[1].replace(/,/g, ''), 10);
      }
    }

    // Fallbacks if not matched by strict line starts
    if (tips === 0) {
      const tipsMatch = text.match(/Tips\s+\$([\d,]+\.\d{2})/);
      if (tipsMatch) tips = parseFloat(tipsMatch[1].replace(/,/g, ''));
    }

    // 3. Extract Category Breakdown
    const categoryData: Array<{ name: string; value: number; items: number; percentage: number }> = [];
    let inCategorySection = false;
    for (const line of lines) {
      if (line.includes('Sales category') && line.includes('Net sales')) {
        inCategorySection = true;
        continue;
      }
      if (inCategorySection) {
        if (line.startsWith('Total') || line.includes('Discount Summary') || line.includes('Deferred Summary') || line.includes('Revenue Summary')) {
          inCategorySection = false;
          continue;
        }
        // Match: e.g. "NA Beverage 6,955 $41,569.79 $42,726.25"
        const match = line.match(/^([A-Za-z\s/&]+)\s+([\d,]+)\s+\$([\d,]+\.\d{2})\s+\$([\d,]+\.\d{2})/);
        if (match) {
          const name = match[1].trim();
          const items = parseInt(match[2].replace(/,/g, ''), 10);
          const value = parseFloat(match[3].replace(/,/g, ''));
          categoryData.push({ name, value, items, percentage: 0 });
        }
      }
    }

    // Calculate Category Percentages
    const categoryTotal = categoryData.reduce((sum, c) => sum + c.value, 0);
    categoryData.forEach(c => {
      c.percentage = categoryTotal ? Math.round((c.value / categoryTotal) * 1000) / 10 : 0;
    });

    // Sort categories desc by sales value
    categoryData.sort((a, b) => b.value - a.value);

    // 4. Extract Daypart Breakdown
    const daypartData: Array<{ name: string; orders: number; sales: number }> = [];
    let inDaypartSection = false;
    for (const line of lines) {
      if (line.includes('Service / day part') && line.includes('Net sales')) {
        inDaypartSection = true;
        continue;
      }
      if (inDaypartSection) {
        if (line.startsWith('Total') || line.includes('Hourly sales pattern') || line.includes('Sales Category Summary')) {
          inDaypartSection = false;
          continue;
        }
        // Match: e.g. "Breakfast 2,152 $31,276.89 $32,212.25"
        const match = line.match(/^([A-Za-z\s]+)\s+([\d,]+)\s+\$([\d,]+\.\d{2})\s+\$([\d,]+\.\d{2})/);
        if (match) {
          const name = match[1].trim();
          const orders = parseInt(match[2].replace(/,/g, ''), 10);
          const sales = parseFloat(match[3].replace(/,/g, ''));
          daypartData.push({ name, orders, sales });
        }
      }
    }

    const totalAmount = netSales + tips + taxAmount + deferredGiftCards;
    const avgOrder = totalOrders ? Math.round((netSales / totalOrders) * 100) / 100 : 0;

    return {
      month: dateRangeStr || 'Unknown Month',
      netSales,
      tips,
      taxAmount,
      deferredGiftCards,
      totalOrders,
      totalAmount,
      avgOrder,
      categoryData,
      daypartData
    };
  };

  const mergeData = () => {
    if (!parsedData) return;

    // Build the rows we need for the various arrays
    const month = parsedData.month;
    
    // Check if month already exists in local storage list or static lists
    const isDuplicate = uploadedMonths.some(m => m.monthlyRow.month === month);
    if (isDuplicate) {
      if (!confirm(`Data for ${month} is already uploaded. Do you want to overwrite it?`)) {
        return;
      }
    }

    // 1. Monthly Data Row
    const monthlyRow = {
      month,
      netSales: parsedData.netSales,
      tips: parsedData.tips,
      taxAmount: parsedData.taxAmount,
      deferredGiftCards: parsedData.deferredGiftCards,
      totalAmount: parsedData.totalAmount,
      avgOrder: parsedData.avgOrder,
      totalOrders: parsedData.totalOrders,
      totalGuests: parsedData.totalOrders
    };

    // 2. Beverage Data Row
    const beverageSales = parsedData.categoryData
      .filter(c => ['NA Beverage', 'Bottled Beer', 'Draft Beer', 'Wine'].includes(c.name))
      .reduce((sum, c) => sum + c.value, 0);

    const beverageRow = {
      month,
      totalBeverages: beverageSales,
      totalSales: parsedData.netSales,
      percentage: parsedData.netSales ? Math.round((beverageSales / parsedData.netSales) * 1000) / 10 : 0,
      momGrowth: 0
    };

    // 3. Other Sales Row
    const foodSales = parsedData.categoryData.find(c => c.name === 'Food')?.value || 0;
    const merchSales = parsedData.categoryData.find(c => c.name === 'Wavy Merchandise' || c.name === 'Merchandise')?.value || 0;
    const noCatSales = parsedData.categoryData.find(c => c.name === 'No Sales Category Assigned' || c.name === 'No Category')?.value || 0;

    const otherSalesRow = {
      month,
      food: foodSales,
      merchandise: merchSales,
      noCategory: noCatSales,
      otherSales: foodSales + merchSales + noCatSales,
      totalSales: parsedData.netSales
    };

    // 4. Avg Sales and Orders per day
    const getDaysInMonth = (monthName: string) => {
      if (monthName.toLowerCase().includes('february')) return 28;
      if (['april', 'june', 'september', 'november'].some(m => monthName.toLowerCase().includes(m))) return 30;
      return 31;
    };
    const days = getDaysInMonth(month);

    const avgSalesRow = {
      month,
      avgNetSalesPerDay: Math.round(parsedData.netSales / days),
      netSales: parsedData.netSales,
      days
    };

    const avgOrdersRow = {
      month,
      avgOrdersPerDay: Math.round(parsedData.totalOrders / days),
      totalOrders: parsedData.totalOrders,
      days
    };

    const payload = {
      monthlyRow,
      beverageRow,
      otherSalesRow,
      avgSalesRow,
      avgOrdersRow,
      categoryData: parsedData.categoryData,
      daypartData: parsedData.daypartData
    };

    const updated = isDuplicate
      ? uploadedMonths.map(m => m.monthlyRow.month === month ? payload : m)
      : [...uploadedMonths, payload];

    localStorage.setItem('fof_uploaded_months', JSON.stringify(updated));
    setUploadedMonths(updated);
    setMergeSuccess(true);
  };

  const clearCustomData = () => {
    if (confirm('Are you sure you want to clear all custom uploaded months from your local session?')) {
      localStorage.removeItem('fof_uploaded_months');
      setUploadedMonths([]);
      setParsedData(null);
      setFile(null);
      setMergeSuccess(false);
    }
  };

  const getCodeString = () => {
    if (!parsedData) return '';
    const month = parsedData.month;
    
    const beverageSales = parsedData.categoryData
      .filter(c => ['NA Beverage', 'Bottled Beer', 'Draft Beer', 'Wine'].includes(c.name))
      .reduce((sum, c) => sum + c.value, 0);

    const foodSales = parsedData.categoryData.find(c => c.name === 'Food')?.value || 0;
    const merchSales = parsedData.categoryData.find(c => c.name === 'Wavy Merchandise' || c.name === 'Merchandise')?.value || 0;
    const noCatSales = parsedData.categoryData.find(c => c.name === 'No Sales Category Assigned' || c.name === 'No Category')?.value || 0;

    const days = month.toLowerCase().includes('february') ? 28 : (['april', 'june', 'september', 'november'].some(m => month.toLowerCase().includes(m)) ? 30 : 31);

    return `// Paste these blocks into the respective arrays inside lib/salesData.ts:

// 1. Add to monthlyData array:
{
  month: '${month}',
  netSales: ${parsedData.netSales.toFixed(2)},
  tips: ${parsedData.tips.toFixed(2)},
  taxAmount: ${parsedData.taxAmount.toFixed(2)},
  deferredGiftCards: ${parsedData.deferredGiftCards.toFixed(2)},
  totalAmount: ${parsedData.totalAmount.toFixed(2)},
  avgOrder: ${parsedData.avgOrder.toFixed(2)},
  totalOrders: ${parsedData.totalOrders},
  totalGuests: ${parsedData.totalOrders}
}

// 2. Add to beverageData array:
{
  month: '${month}',
  totalBeverages: ${beverageSales.toFixed(2)},
  totalSales: ${parsedData.netSales.toFixed(2)},
  percentage: ${(parsedData.netSales ? (beverageSales / parsedData.netSales) * 100 : 0).toFixed(1)},
  momGrowth: 0.0
}

// 3. Add to otherSalesData array:
{
  month: '${month}',
  food: ${foodSales.toFixed(2)},
  merchandise: ${merchSales.toFixed(2)},
  noCategory: ${noCatSales.toFixed(2)},
  otherSales: ${(foodSales + merchSales + noCatSales).toFixed(2)},
  totalSales: ${parsedData.netSales.toFixed(2)}
}

// 4. Add to avgOrdersPerDayData:
{
  month: '${month}',
  avgOrdersPerDay: ${Math.round(parsedData.totalOrders / days)},
  totalOrders: ${parsedData.totalOrders},
  days: ${days}
}

// 5. Add to avgNetSalesPerDayData:
{
  month: '${month}',
  avgNetSalesPerDay: ${Math.round(parsedData.netSales / days)},
  netSales: ${parsedData.netSales},
  days: ${days}
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCodeString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const pdfjsLib = (window as any)['pdfjs-dist/build/pdf'];
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          setIsPdfjsLoaded(true);
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-label-md font-semibold text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          <div className="text-body-sm text-muted-foreground">
            PDF.js Loader Status: {isPdfjsLoaded ? <span className="text-green-600 font-medium">Ready</span> : <span className="text-orange-500 font-medium">Loading...</span>}
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-headline-md font-bold text-foreground">Toast POS PDF Uploader</h1>
          <p className="text-muted-foreground mt-1">Upload a Toast Sales Summary PDF to extract data and update the dashboard dynamically.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardContent className="p-6">
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className="border-2 border-dashed border-muted rounded-xl p-8 text-center cursor-pointer hover:border-primary hover:bg-accent/10 transition-colors flex flex-col items-center justify-center min-h-[200px]"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="application/pdf"
                  className="hidden"
                />
                <Upload className="h-10 w-10 text-primary mb-3" />
                <p className="font-semibold text-body-md text-foreground">
                  {file ? file.name : 'Drag & drop your Toast Sales Summary PDF here'}
                </p>
                <p className="text-muted-foreground text-body-sm mt-1">
                  {file ? `${(file.size / 1024).toFixed(1)} KB` : 'or click to browse from files'}
                </p>
              </div>

              <div className="mt-4 flex gap-3 justify-end">
                {file && (
                  <button
                    onClick={parsePDF}
                    disabled={parsing || !isPdfjsLoaded}
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
                  >
                    {parsing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} />}
                    {parsing ? 'Parsing...' : 'Extract Data'}
                  </button>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-body-md flex items-start gap-3">
                  <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold">Parsing Error</p>
                    <p className="mt-1 text-body-sm opacity-90">{error}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {parsedData && (
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-title-lg flex items-center gap-2">
                      <FileText className="text-primary" />
                      Extracted Report: {parsedData.month}
                    </CardTitle>
                    <CardDescription>Extracted successfully. Review metrics before merging.</CardDescription>
                  </div>
                  <button
                    onClick={mergeData}
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-label-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <CheckCircle2 size={18} />
                    Merge into Session Dashboard
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {mergeSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-body-md flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-semibold">Successfully merged!</p>
                      <p className="text-body-sm">
                        This month is now loaded in your browser local session. Head back to the{' '}
                        <Link href="/" className="underline font-semibold">
                          Dashboard
                        </Link>{' '}
                        or{' '}
                        <Link href="/sales-data" className="underline font-semibold">
                          Monthly Table
                        </Link>{' '}
                        to view it.
                      </p>
                    </div>
                  </div>
                )}

                <h3 className="text-title-sm font-semibold mb-4 text-foreground border-b pb-2">Core Financials & Traffic</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-md">
                    <p className="text-label-sm text-muted-foreground">Net Sales</p>
                    <p className="text-title-md font-bold text-foreground">${parsedData.netSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-md">
                    <p className="text-label-sm text-muted-foreground">Tips Collected</p>
                    <p className="text-title-md font-bold text-foreground">${parsedData.tips.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-md">
                    <p className="text-label-sm text-muted-foreground">Total Orders</p>
                    <p className="text-title-md font-bold text-foreground">{parsedData.totalOrders.toLocaleString()}</p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-md">
                    <p className="text-label-sm text-muted-foreground">AOV (Average Order)</p>
                    <p className="text-title-md font-bold text-foreground">${parsedData.avgOrder.toFixed(2)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-title-sm font-semibold mb-3 text-foreground border-b pb-1">Sales by Category</h3>
                    <div className="space-y-2">
                      {parsedData.categoryData.map((c, i) => (
                        <div key={i} className="flex justify-between items-center text-body-sm p-1.5 hover:bg-accent/5 rounded">
                          <span className="font-medium">{c.name}</span>
                          <span className="text-muted-foreground">
                            ${c.value.toLocaleString('en-US', { minimumFractionDigits: 2 })} ({c.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-title-sm font-semibold mb-3 text-foreground border-b pb-1">Sales by Daypart</h3>
                    <div className="space-y-2">
                      {parsedData.daypartData.map((d, i) => (
                        <div key={i} className="flex justify-between items-center text-body-sm p-1.5 hover:bg-accent/5 rounded">
                          <span className="font-medium">{d.name}</span>
                          <span className="text-muted-foreground">
                            ${d.sales.toLocaleString('en-US', { minimumFractionDigits: 2 })} ({d.orders} orders)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="text-title-sm font-semibold text-foreground">Permanent Integration Code</h3>
                      <p className="text-body-sm text-muted-foreground">To persist this month permanently in the repository, add this data to your source file.</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-1.5 rounded bg-secondary px-3 py-1.5 text-body-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {copied ? <Check size={16} className="text-green-600" /> : <Clipboard size={16} />}
                      {copied ? 'Copied!' : 'Copy Code Block'}
                    </button>
                  </div>
                  <pre className="p-4 bg-zinc-950 text-zinc-200 rounded-lg overflow-x-auto text-body-sm font-mono max-h-[350px]">
                    <code>{getCodeString()}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}

          {uploadedMonths.length > 0 && (
            <Card className="border-accent">
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-title-md">Active Custom Months in Session</CardTitle>
                  <CardDescription>These months have been merged locally in this browser. They will reset if you clear site data.</CardDescription>
                </div>
                <button
                  onClick={clearCustomData}
                  className="inline-flex items-center gap-1.5 text-destructive hover:underline text-body-sm font-medium"
                >
                  <Trash2 size={16} />
                  Clear Session Data
                </button>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {uploadedMonths.map((m, idx) => (
                    <div key={idx} className="bg-accent px-3 py-1.5 rounded-full text-label-md font-semibold text-accent-foreground flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-success" />
                      {m.monthlyRow.month}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-title-md">Instructions: Extracting Data Permanently</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <ol className="list-decimal pl-5 space-y-2 text-body-md text-muted-foreground">
                <li>Export the **Sales Summary** PDF from your Toast POS backend for the month you wish to add.</li>
                <li>Drop the PDF here to extract the fields and review the numbers.</li>
                <li>Click **Merge into Session Dashboard** to preview the dashboard with this data instantly.</li>
                <li>Copy the **Permanent Integration Code** at the bottom of the parsed data.</li>
                <li>Open [lib/salesData.ts](file:///home/chris/Documents/fof/lib/salesData.ts) in your editor and paste the segments into the arrays.</li>
                <li>Commit and push the changes: run `./deploy.sh &quot;Add sales summary for [Month YYYY]&quot;` to update Vercel.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
