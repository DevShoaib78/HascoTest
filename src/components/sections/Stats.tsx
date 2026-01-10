'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Stats() {
  const t = useTranslations('stats')
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
    { number: 20, suffix: t('years.suffix'), label: t('years.label'), description: t('years.description') },
    { number: 7, suffix: t('sectors.suffix'), label: t('sectors.label'), description: t('sectors.description') },
    { number: 100, suffix: t('projects.suffix'), label: t('projects.label'), description: t('projects.description') }
  ]

  return (
    <section 
      id="stats-section" 
      className="py-20 bg-gradient-to-br from-brand-primary via-[#003d6b] to-brand-primary relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#66AADD] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Number */}
                <div className="text-7xl md:text-8xl text-white font-heading mb-2">
                  {isVisible && (
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2000} 
                      delay={index * 200}
                      suffix={stat.suffix}
                      className="text-7xl md:text-8xl"
                    />
                  )}
                  {!isVisible && (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-xl md:text-2xl text-white font-heading mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/70 font-body">
                  {stat.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-[#66AADD] mx-auto mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
