'use client'

import { useState, useEffect } from 'react'

export default function ClosingCTA() {
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

    const element = document.getElementById('closing-cta')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('closing-cta')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="closing-cta" 
      className="py-24 bg-brand-primary relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 bg-element-rotate" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 bg-element-float" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full bg-element-pulse" style={{ animationDuration: '6s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl font-light text-white leading-tight font-heading">
              <span className="block font-extralight">Partner with HASCO</span>
              <span className="block font-extralight text-white">
                — where experience, innovation, and vision meet
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-body-md md:text-body-lg text-gray-300 leading-relaxed font-body">
              Join us in shaping the future of Saudi Arabia. Whether you're planning a mega-project, need specialized marine services, or require comprehensive logistics solutions, HASCO delivers the expertise and reliability you need.
            </p>
          </div>

          {/* Contact Form */}
          <div className={`pt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#66AADD] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#66AADD]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-[#66AADD] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#66AADD]"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-[#66AADD] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#66AADD]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#66AADD] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#66AADD]"
                required
              />
              <div className="flex justify-center">
                <button type="submit" className="bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
