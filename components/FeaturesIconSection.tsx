'use client'

import { useState, useEffect, useRef } from 'react'

export default function FeaturesIconSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      ),
      title: "Aenean nec estib ulum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      title: "Nullam tellus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"/>
        </svg>
      ),
      title: "Nulla mattis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4,6H20V8H4V6M4,11H20V13H4V11M4,16H20V18H4V16Z"/>
        </svg>
      ),
      title: "Nulla ac nibh",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    }
  ]

  return (
    <section ref={sectionRef} className="bg-brand-dark py-20 relative overflow-hidden">
      {/* Enhanced background server rack image effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated server rack pattern */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute left-0 w-full h-1 bg-white opacity-20 animate-pulse" 
              style={{ 
                top: `${i * 12.5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 h-full w-1 bg-white opacity-20 animate-pulse" 
              style={{ 
                left: `${i * 16.66}%`,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating tech elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center group hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Premium icon container with glow effect */}
              <div className="flex justify-center mb-6 relative">
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
                  {/* Icon container */}
                  <div className="relative bg-brand-primary/20 p-4 rounded-full group-hover:bg-brand-primary/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:border-white/40 group-hover:rotate-180 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced title with glow */}
              <h3 className="text-title-sm font-semibold text-white mb-4 group-hover:text-glow transition-all duration-300 relative font-heading">
                {feature.title}
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
              </h3>
              
              {/* Enhanced description */}
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-16">
          {[1, 2, 3].map((dot, index) => (
            <div 
              key={dot} 
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                index === 0 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/50 hover:bg-white hover:shadow-lg hover:shadow-white/50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}


