import { Header, Footer } from '@/src/components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients',
  description: "Collaborating with the Kingdom's most ambitious projects and leading organizations. Powering Saudi Arabia's Vision 2030 through strategic partnerships.",
  openGraph: {
    title: 'Our Clients | HASCO Group',
    description: "Collaborating with the Kingdom's most ambitious projects and leading organizations. Powering Saudi Arabia's Vision 2030 through strategic partnerships.",
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients | HASCO Group',
    description: "Collaborating with the Kingdom's most ambitious projects and leading organizations. Powering Saudi Arabia's Vision 2030 through strategic partnerships.",
    images: ['/images/og-image.jpg'],
  },
}

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">Our Clients</h1>
        <p className="text-lg text-gray-600 mb-4 font-body">
          This is the Clients page. Content coming soon.
        </p>
        <p className="text-base text-gray-500 font-body">
          Collaborating with the Kingdom&apos;s most ambitious projects and leading organizations.
          Powering Saudi Arabia&apos;s Vision 2030 through strategic partnerships.
        </p>
      </div>
      
      <Footer />
    </main>
  )
}
