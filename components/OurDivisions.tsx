'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'
import Image from 'next/image'

const divisions = [
  {
    title: "Marine Operations",
    description: "Professional diving services, marine consultancy, and underwater operations with certified divers and advanced equipment",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "200+ Projects",
    background: "bg-brand-primary"
  },
  {
    title: "Ship Agency",
    description: "Comprehensive port operations, vessel handling, and maritime logistics services across multiple ports",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "15+ Ports",
    background: "bg-brand-primary"
  },
  {
    title: "Freight Forwarding",
    description: "International cargo transportation, customs clearance, and global logistics solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "10K+ Shipments",
    background: "bg-green-500"
  },
  {
    title: "Logistics & Supply Chain",
    description: "End-to-end supply chain management, warehousing, and distribution services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "12 Warehouses",
    background: "bg-green-600"
  },
  {
    title: "Hospitality & Events",
    description: "Premium event management, catering services, and hospitality solutions",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    category: "Hospitality",
    stats: "1000+ Events",
    background: "bg-purple-500"
  },
  {
    title: "Facility Management",
    description: "Professional facility maintenance, management, and operational services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    category: "Management",
    stats: "50+ Facilities",
    background: "bg-orange-500"
  },
  {
    title: "Property Development",
    description: "Strategic property investment, development, and construction project management",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
    category: "Development",
    stats: "$500M+ Value",
    background: "bg-yellow-500"
  },
  {
    title: "Construction",
    description: "Infrastructure development, construction management, and project delivery services",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
    category: "Construction",
    stats: "25+ Projects",
    background: "bg-gray-600"
  }
]

const categories = ["All", "Marine", "Logistics", "Hospitality", "Management", "Development", "Construction"]

export default function OurDivisions() {
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

    const element = document.getElementById('our-divisions')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const filteredDivisions = activeCategory === "All" 
    ? divisions 
    : divisions.filter(division => division.category === activeCategory)

  return (
    <div className="py-20 bg-gray-50 section-bg-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content-stagger">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading animate-slide-in-down">
            <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Divisions</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            Dynamic display of our active divisions, each specializing in delivering excellence within their respective sectors
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDivisions.map((division, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift-3d hover-glow animate-bounce-in ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 0.1}s` }}
            >
              {/* Division Header with Background */}
              <div className={`h-32 ${division.background} relative overflow-hidden`}>
                <div className="absolute inset-0">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    className="object-cover opacity-30"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <div className="text-white font-bold text-title-sm font-heading">
                    {division.title}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                    {division.stats}
                  </div>
                </div>
              </div>

              {/* Division Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs text-brand-primary font-semibold mb-2 uppercase tracking-wide font-heading">
                    {division.category}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    {division.description}
                  </p>
                </div>

                {/* Division Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                    Specialized expertise
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                    Certified professionals
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                    Advanced technology
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300">
                  Learn More
                </button>
              </div>

              {/* Hover Effect Overlay */}
            </div>
          ))}
        </div>

        {/* Division Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <AnimatedCounter 
              end={8} 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={2000}
            />
            <div className="text-gray-600">Active Divisions</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={6} 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={1800}
            />
            <div className="text-gray-600">Core Sectors</div>
          </div>
          <div className="text-center group">
            <div className="relative">
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-3xl font-bold text-brand-primary mb-2"
                duration={2500}
              />
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-brand-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={100} 
              suffix="%" 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={2200}
            />
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-brand-primary rounded-2xl p-8 text-white">
            <h3 className="text-title-md md:text-title-lg font-semibold mb-4 font-heading">Ready to Work Together?</h3>
            <p className="text-body-lg mb-6 opacity-90 font-body">
              Explore our comprehensive range of services and discover how we can support your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View All Services
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
