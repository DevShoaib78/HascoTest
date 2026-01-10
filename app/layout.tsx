import type { Metadata } from 'next'
import './globals.css'
import 'lenis/dist/lenis.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HASCO - Integrated Excellence in Marine, Logistics & Construction',
    template: '%s | HASCO Group'
  },
  description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
  keywords: ['HASCO', 'Marine Services', 'Logistics', 'Construction', 'Tourism', 'Consultancy', 'Saudi Arabia', 'Integrated Solutions', 'Professional Services'],
  authors: [{ name: 'HASCO Group' }],
  creator: 'HASCO Group',
  publisher: 'HASCO Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/images/favicon.png',
    apple: [
      { url: '/images/favicon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: siteUrl,
    siteName: 'HASCO Group',
    title: 'HASCO - Integrated Excellence in Marine, Logistics & Construction',
    description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HASCO Group - Integrated Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HASCO - Integrated Excellence in Marine, Logistics & Construction',
    description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
    images: ['/images/og-image.jpg'],
    creator: '@hascogroup',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/en`,
      'ar-SA': `${siteUrl}/ar`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
