'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'
import Image from 'next/image'

const coreServices = [
  {
    title: "SHIP AGENCY",
    description: "Port Operations & Vessel Handling",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    stats: "15+ Ports Served"
  },
  {
    title: "SHIPPING (NVOCC)",
    description: "Global Cargo Solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    stats: "50+ Global Routes"
  },
  {
    title: "MARINE OPERATIONS",
    description: "Professional Diving & Consultancy",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
    stats: "200+ Marine Projects"
  },
  {
    title: "HOSPITALITY",
    description: "Events & Catering Services",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    stats: "1000+ Events Managed"
  }
]

export default function AboutHASCOGroup() {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div className="py-20 bg-gray-50 section-bg-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content-stagger">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
            <span className="font-extralight">About </span><span className="font-extralight text-gray-900">HASCO Group</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
            Pioneering excellence in integrated solutions across marine, logistics, and development sectors with 
            <span className="text-brand-primary font-semibold"> 19+ years of proven expertise</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Story */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="apple-card rounded-2xl p-8 shadow-xl apple-hover-lift">
              <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 mb-6 font-heading apple-slide-up apple-stagger-3">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-body-md font-body">
                Established in 2005, HASCO Group was founded with a vision to provide integrated supply chain and logistics solutions. Over the past 19+ years, we have grown from a small marine services company to a comprehensive group of companies that has become a leading force in the maritime and logistics sector of the Middle East.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-body-md font-body">
                Our commitment to excellence and innovation has enabled us to serve clients across multiple sectors, from marine operations to hospitality, creating value through integrated solutions that drive sustainable growth.
              </p>
              
              {/* Founder Testimonial */}
              <div className="bg-brand-primary/5 rounded-lg p-6 border-l-4 border-brand-primary apple-card apple-hover-lift apple-reveal apple-stagger-4">
                <blockquote className="text-gray-700 italic mb-4 font-body apple-slide-up">
                  "HASCO Group is the work of our entire life... in 18 years we have created a powerful group of companies that has become a leading force in the maritime and logistics sector of the Middle East."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold mr-4 font-heading apple-float">
                    CF
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-heading">Co-Founders</p>
                    <p className="text-sm text-gray-600 font-body">HASCO Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading">Our Core Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="group apple-card rounded-xl overflow-hidden shadow-lg apple-hover-lift apple-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover apple-img-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-500 font-heading">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 font-body group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="text-brand-primary font-semibold text-sm font-heading apple-text-shimmer">
                      {service.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="apple-card rounded-xl p-6 shadow-lg apple-hover-lift apple-fade-in apple-stagger-5">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-4 apple-float">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 apple-text-shimmer">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Deliver exceptional integrated solutions across marine, logistics, and development sectors while maintaining the highest standards of quality, safety, and environmental responsibility. We are committed to sustainable growth and creating lasting value for our clients and communities.
            </p>
          </div>
          <div className="apple-card rounded-xl p-6 shadow-lg apple-hover-lift apple-fade-in apple-stagger-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 apple-float" style={{ animationDelay: '0.5s' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 apple-text-shimmer">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Be the leading integrated solutions provider in the Middle East, recognized for our innovation, reliability, and commitment to excellence. We aim to be the preferred partner for organizations seeking comprehensive solutions that drive growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
