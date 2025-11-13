'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function StatsSection() {
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

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 20, suffix: '+', label: 'Years of Excellence' },
    { number: 7, suffix: '+', label: 'Core Sectors' },
    { number: 100, suffix: '+', label: 'Projects Delivered' }
  ]

  return (
    <section 
      id="stats-section" 
      className="py-24 bg-brand-primary"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-6xl md:text-7xl font-bold text-white font-heading transition-colors duration-300 flex items-center justify-center">
                {isVisible && (
                  <AnimatedCounter 
                    end={stat.number} 
                    duration={2500} 
                    delay={index * 300}
                    suffix={stat.suffix}
                    className="text-6xl md:text-7xl"
                  />
                )}
                {!isVisible && (
                  <span className="text-6xl md:text-7xl">0{stat.suffix}</span>
                )}
              </div>
              <p className="text-body-lg text-white font-heading transition-colors duration-300">
                {stat.label}
              </p>
              
              {/* Decorative line */}
              <div className="w-16 h-1 bg-[#66AADD] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
