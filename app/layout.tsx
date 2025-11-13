import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'HASCO - Professional Services',
  description: 'HASCO - Professional certified services and solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
