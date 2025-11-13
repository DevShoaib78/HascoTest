'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'
import Image from 'next/image'

const projects = [
  {
    title: "Red Sea Marine Terminal",
    location: "Jeddah",
    duration: "24 months",
    description: "Comprehensive marine terminal development with state-of-the-art facilities and advanced logistics infrastructure",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    category: "Marine Development",
    stats: {
      investment: "$150M",
      capacity: "500+ Vessels",
      area: "2.5M sq ft"
    }
  },
  {
    title: "Industrial Logistics Hub",
    location: "Dammam",
    duration: "18 months",
    description: "Automated warehousing and freight forwarding facility with cutting-edge technology and sustainable operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: {
      investment: "$200M",
      capacity: "50K+ Containers",
      area: "1.8M sq ft"
    }
  },
  {
    title: "Coastal Development Project",
    location: "Al Khobar",
    duration: "36 months",
    description: "Integrated coastal development featuring mixed-use facilities, marine services, and environmental sustainability",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
    category: "Development",
    stats: {
      investment: "$300M",
      capacity: "10K+ Residents",
      area: "5.2M sq ft"
    }
  },
  {
    title: "Hospitality & Events Complex",
    location: "Riyadh",
    duration: "12 months",
    description: "Premium hospitality facility with world-class event management capabilities and luxury accommodations",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    category: "Hospitality",
    stats: {
      investment: "$100M",
      capacity: "5000+ Guests",
      area: "800K sq ft"
    }
  }
]

export default function ProjectsShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
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

    const element = document.getElementById('projects-showcase')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="py-20 bg-white section-bg-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content-stagger">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading animate-slide-in-down">
            <span className="font-extralight">Featured </span><span className="font-extralight text-gray-900">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            Showcasing our expertise through landmark projects that demonstrate our commitment to excellence and innovation
          </p>
        </div>

        {/* Project Carousel */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image/Visual */}
              <div className="relative">
                <div className="bg-brand-primary/10 rounded-2xl overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <h3 className="text-title-sm font-semibold text-gray-900 mb-2 font-heading">
                          {projects[currentProject].category}
                        </h3>
                        <div className="flex justify-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {projects[currentProject].location}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {projects[currentProject].duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 mb-4 font-heading">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-body-lg font-body">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Project Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-1">
                      {projects[currentProject].stats.investment}
                    </div>
                    <div className="text-sm text-gray-600">Investment</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-1">
                      {projects[currentProject].stats.capacity}
                    </div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-1">
                      {projects[currentProject].stats.area}
                    </div>
                    <div className="text-sm text-gray-600">Area</div>
                  </div>
                </div>

                {/* Project Features */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      State-of-the-art infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Sustainable operations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Advanced technology integration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Environmental compliance
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition-colors duration-300">
                    View Details
                  </button>
                  <button className="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300">
                    Similar Projects
                  </button>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-brand-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
