'use client'

import { useState } from 'react'

export default function FeaturedServicesSection() {
  const [activeTab, setActiveTab] = useState('ALL SERVICES')

  const tabs = ['MARINE', 'LOGISTICS', 'HOSPITALITY', 'CONSTRUCTION', 'ENVIRONMENTAL', 'ALL SERVICES']

  const services = [
    {
      id: 1,
      title: "Marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Comprehensive marine services and solutions",
      category: "MARINE"
    },
    {
      id: 2,
      title: "Shipping",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      description: "Global shipping and vessel management services",
      category: "MARINE"
    },
    {
      id: 3,
      title: "Bunkering",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Marine fuel supply and bunkering operations",
      category: "MARINE"
    },
    {
      id: 4,
      title: "Logistics & Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      description: "End-to-end logistics and supply chain management",
      category: "LOGISTICS"
    },
    {
      id: 5,
      title: "Freight Forwarding",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "International freight forwarding services",
      category: "LOGISTICS"
    },
    {
      id: 6,
      title: "Air Cargo",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      description: "Air cargo transportation and handling",
      category: "LOGISTICS"
    },
    {
      id: 7,
      title: "Tourism, Event & Entertainment",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
      description: "Tourism, event management and entertainment services",
      category: "HOSPITALITY"
    },
    {
      id: 8,
      title: "Hospitality & Catering",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      description: "Professional hospitality and catering solutions",
      category: "HOSPITALITY"
    },
    {
      id: 9,
      title: "Construction",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      description: "Construction and infrastructure development",
      category: "CONSTRUCTION"
    },
    {
      id: 10,
      title: "Environmental Service",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop",
      description: "Environmental protection and sustainability services",
      category: "ENVIRONMENTAL"
    }
  ]

  // Filter services based on active tab
  const filteredServices = activeTab === 'ALL SERVICES' 
    ? services 
    : services.filter(service => service.category === activeTab)

  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-title-lg md:text-title-xl font-light text-white mb-4 font-primary">
            <span className="font-extralight">Our </span><span className="font-extralight text-white">Services</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Premium Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group relative px-6 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden rounded-lg animate-fade-in-up ${
                activeTab === tab
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark hover:shadow-lg hover:shadow-white/25'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shine effect */}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shine effect */}
              </div>
              <div className="p-6 relative">
                <h3 className="text-title-sm font-semibold text-gray-800 mb-2 group-hover:text-brand-primary transition-colors duration-300 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-body-md leading-relaxed font-body">
                  {service.description}
                </p>
                {/* Premium border effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((dot, index) => (
            <div 
              key={dot} 
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer animate-fade-in-up ${
                index === 0 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/50 hover:bg-white hover:shadow-lg hover:shadow-white/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
