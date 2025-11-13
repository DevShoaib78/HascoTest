'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

const differentiators = [
  {
    title: "Integrated Solutions",
    description: "Comprehensive services across multiple sectors under one roof",
    icon: "🔗",
    stat: "8 Divisions"
  },
  {
    title: "Strategic Presence",
    description: "Extensive network across Saudi Arabia with 12 office locations",
    icon: "📍",
    stat: "12 Locations"
  },
  {
    title: "Vision 2030 Alignment",
    description: "Supporting Saudi Arabia's national transformation goals",
    icon: "🇸🇦",
    stat: "100% Aligned"
  },
  {
    title: "Qualified Experts",
    description: "Highly skilled professionals with industry certifications",
    icon: "👥",
    stat: "50+ Experts"
  },
  {
    title: "Sustainable Operations",
    description: "Commitment to environmental responsibility and sustainability",
    icon: "🌱",
    stat: "Eco-Friendly"
  },
  {
    title: "Innovation & Technology",
    description: "Cutting-edge technology and innovative solutions",
    icon: "💡",
    stat: "Tech-Forward"
  }
]


export default function WhyHASCO() {
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

    const element = document.getElementById('why-hasco')
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
    <section id="why-hasco" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading">
            <span className="font-extralight">Why </span><span className="font-extralight text-gray-900">HASCO?</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            With over 19 years of excellence in integrated supply chain and logistics solutions, we deliver unmatched value and expertise
          </p>
        </div>

        {/* Foundation of Excellence */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 mb-4 font-heading">Foundation of Excellence</h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Since 2005, HASCO Group has been at the forefront of integrated solutions in the Middle East. Our journey from a small marine services company to a comprehensive group of companies reflects our unwavering commitment to excellence, innovation, and client satisfaction. We have built our reputation on trust, reliability, and the ability to deliver complex projects that drive sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-16">
          <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 text-center mb-12 font-heading">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-title-sm font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300 font-heading">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="text-brand-primary font-semibold">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  )
}

