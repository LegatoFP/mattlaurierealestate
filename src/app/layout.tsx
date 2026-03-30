import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TrackingScripts } from '@/components/TrackingScripts'

export const metadata: Metadata = {
  metadataBase: new URL('https://mattlaurierealestate.com'),
  title: {
    default: 'Matt Laurie, REALTOR® — Bucks County & Philadelphia Real Estate',
    template: '%s | Matt Laurie, REALTOR®',
  },
  description: 'Local real estate agent serving Bucks County and Philadelphia. 10 years experience. Free home value estimates. First-time buyer specialist.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mattlaurierealestate.com',
    siteName: 'Matt Laurie Real Estate',
    images: [{ url: '/matt-headshot-new.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[var(--color-text)] antialiased">
        <TrackingScripts />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
