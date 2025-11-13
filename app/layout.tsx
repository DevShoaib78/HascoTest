import type { Metadata } from 'next'
import './globals.css'
import 'lenis/dist/lenis.css'

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
