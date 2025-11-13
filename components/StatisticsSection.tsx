'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function StatisticsSection() {
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

    const element = document.getElementById('statistics')
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
    <section id="statistics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <AnimatedCounter 
                  end={19} 
                  suffix="+" 
                  className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                  duration={2000}
                />
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-brand-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 text-sm md:text-base">Years of Excellence</div>
            </div>
            
            <div className="text-center">
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                duration={2500}
              />
              <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <AnimatedCounter 
                end={100} 
                suffix="%" 
                className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                duration={1800}
              />
              <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <AnimatedCounter 
                end={15} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                duration={1500}
              />
              <div className="text-gray-600 text-sm md:text-base">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
