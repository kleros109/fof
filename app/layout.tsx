import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Friends of Friends Sales Dashboard',
  description: 'Sales analytics and performance dashboard for Friends of Friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}