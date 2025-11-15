import type { Metadata } from 'next'
import './globals.css'
import 'lenis/dist/lenis.css'

export const metadata: Metadata = {
  title: 'HASCO - Integrated Excellence',
  description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'HASCO - Integrated Excellence',
    description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HASCO - Integrated Excellence',
    description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors. Leading provider of professional services with global reach and local expertise.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
