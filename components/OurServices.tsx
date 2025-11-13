'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AnimatedCounter from './AnimatedCounter'

const services = [
  {
    title: "Marine Operations",
    description: "Professional diving services, marine consultancy, and underwater operations",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "200+ Projects"
  },
  {
    title: "Ship Agency",
    description: "Port operations, vessel handling, and maritime logistics services",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "15+ Ports"
  },
  {
    title: "Freight Forwarding",
    description: "International cargo transportation and customs clearance services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "10K+ Shipments"
  },
  {
    title: "Logistics & Supply Chain",
    description: "Comprehensive warehousing, distribution, and supply chain management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "12 Warehouses"
  },
  {
    title: "Hospitality & Events",
    description: "Premium event management, catering, and hospitality services",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    category: "Hospitality",
    stats: "1000+ Events"
  },
  {
    title: "Facility Management",
    description: "Professional facility maintenance, management, and operations",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    category: "Management",
    stats: "50+ Facilities"
  },
  {
    title: "Property Development",
    description: "Strategic property investment, development, and construction projects",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
    category: "Development",
    stats: "$500M+ Value"
  },
  {
    title: "Construction",
    description: "Infrastructure development, construction management, and project delivery",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
    category: "Development",
    stats: "25+ Projects"
  }
]

const categories = ["All", "Marine", "Logistics", "Hospitality", "Management", "Development"]

export default function OurServices() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('our-services')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <div className="py-20 bg-white section-bg-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content-stagger">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading animate-slide-in-down">
            <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Services</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            Comprehensive solutions across multiple sectors, delivering excellence through integrated services and proven expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative hover-lift-3d hover-glow animate-bounce-in ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="text-xs text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                    {service.category}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-title-sm font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-body-md leading-relaxed mb-4 font-body">
                  {service.description}
                </p>
                <div className="text-brand-primary font-semibold text-sm">
                  {service.stats}
                </div>
              </div>

              {/* Hover Effect Overlay */}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
