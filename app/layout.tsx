import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Cariri Tips',
  description:
    'Página oficial da Cariri Tips, o melhor grupo de dicas de apostas esportivas do Cariri.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(GeistSans.className, 'antialiased text-white bg-black')}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}
