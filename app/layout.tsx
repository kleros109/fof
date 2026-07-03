import type { Metadata } from 'next'
import { Roboto_Flex, Roboto_Mono } from 'next/font/google'
import { ThemeToggle } from '@/components/theme-toggle'
import './globals.css'

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-flex',
  weight: ['300', '400', '500', '600', '700'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Friends of Friends Sales Dashboard',
  description: 'Sales analytics and performance dashboard for Friends of Friends',
}

// Inline script: set the .dark class on <html> from localStorage / system pref
// before React mounts, to avoid a flash of the wrong theme on first paint.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('fof-theme');
    if (!t) {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`.trim()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <div className="fixed right-3 top-3 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  )
}
