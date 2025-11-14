import { Header, Footer } from '@/src/components/layout'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 font-body">
          This is the Contact page. Content coming soon.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4 font-heading">Get in Touch</h3>
            <p className="text-gray-600 mb-2 font-body">Jeddah, Al Safa</p>
            <p className="text-gray-600 font-body">Kingdom of Saudi Arabia</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4 font-heading">Contact Form</h3>
            <p className="text-gray-600 font-body">Contact form will be added here.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
