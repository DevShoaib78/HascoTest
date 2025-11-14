import { Header, Footer } from '@/src/components/layout'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">About HASCO</h1>
        <p className="text-lg text-gray-600 mb-4 font-body">
          This is the About page. Content coming soon.
        </p>
        <p className="text-base text-gray-500 font-body">
          HASCO has grown from a focused logistics provider into a diversified holding group. 
          Based in the Kingdom of Saudi Arabia, we operate across Marine, Logistics, Construction, 
          Shipping, Tourism, Hospitality, and Consultancy, supporting the nation's transformation under Vision 2030.
        </p>
      </div>
      
      <Footer />
    </main>
  )
}
