import { Header, Footer } from '@/src/components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Sectors',
  description: 'HASCO operates across multiple sectors including Marine Operations, Logistics & Supply Chain, Construction, Hospitality & Events, Tourism, and Consultancy services.',
  openGraph: {
    title: 'Our Sectors | HASCO Group',
    description: 'HASCO operates across multiple sectors including Marine Operations, Logistics & Supply Chain, Construction, Hospitality & Events, Tourism, and Consultancy services.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Sectors | HASCO Group',
    description: 'HASCO operates across multiple sectors including Marine Operations, Logistics & Supply Chain, Construction, Hospitality & Events, Tourism, and Consultancy services.',
    images: ['/images/og-image.jpg'],
  },
}

export default function SectorsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">Our Sectors</h1>
        <p className="text-lg text-gray-600 mb-8 font-body">
          This is the Sectors page. Content coming soon.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Marine Operations', 'Logistics & Supply Chain', 'Construction', 'Hospitality & Events', 'Tourism', 'Consultancy'].map((sector) => (
            <div key={sector} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-brand-primary mb-2 font-heading">{sector}</h3>
              <p className="text-gray-600 font-body">Detailed information coming soon.</p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
