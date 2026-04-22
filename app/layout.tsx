import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hungary Bowling - Bowlingkultúra Magyarországon',
    template: '%s | Hungary Bowling',
  },
  description:
    'Fedezze fel a bowling sport világát Magyarországon. Történelem, technika, szabályok, felszerelések és aktualitások bowlingrajongóknak.',
  metadataBase: new URL('https://hungarybowling.com'),
  openGraph: {
    title: 'Hungary Bowling',
    description: 'Bowlingkultúra Magyarországon',
    url: 'https://hungarybowling.com',
    siteName: 'Hungary Bowling',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
