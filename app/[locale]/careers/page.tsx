import { Header, Footer } from '@/src/components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: "Join us in shaping the future of Saudi Arabia's development. Explore career opportunities across our diverse sectors at HASCO Group.",
  openGraph: {
    title: 'Careers | HASCO Group',
    description: "Join us in shaping the future of Saudi Arabia's development. Explore career opportunities across our diverse sectors at HASCO Group.",
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | HASCO Group',
    description: "Join us in shaping the future of Saudi Arabia's development. Explore career opportunities across our diverse sectors at HASCO Group.",
    images: ['/images/og-image.jpg'],
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">Careers at HASCO</h1>
        <p className="text-lg text-gray-600 mb-4 font-body">
          This is the Careers page. Content coming soon.
        </p>
        <p className="text-base text-gray-500 font-body">
          Join us in shaping the future of Saudi Arabia&apos;s development. 
          Explore career opportunities across our diverse sectors.
        </p>
      </div>
      
      <Footer />
    </main>
  )
}
