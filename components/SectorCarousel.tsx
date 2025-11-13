'use client'

import { useState, useEffect } from 'react'


export default function SectorCarousel() {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isClient])


  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero.jpeg)'
      }}
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Solid overlay for depth (no gradients) */}
        <div className="absolute inset-0 bg-black/30"></div>
        

        
      </div>

      {/* Premium Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full">
          <div className="flex items-start justify-start h-full pt-32 pl-6 sm:pl-8 lg:pl-12">
            {/* Main Content - Extreme Left Aligned */}
            <div className="flex flex-col justify-start space-y-8 text-left max-w-4xl">
              {/* Professional headline */}
              <div className="space-y-4">
                <h1 className="text-title-lg md:text-title-xl lg:text-title-xl font-light text-white leading-tight tracking-tight font-heading">
                  <span className="block font-extralight animate-slide-in-left stagger-1">
                    Diversified Strength.
                  </span>
                  <span className="block font-extralight text-white animate-slide-in-right stagger-2">
                    Unified Vision.
                  </span>
                </h1>
              </div>
              
              {/* Elegant description */}
              <div className="max-w-2xl">
                <p className="text-body-md md:text-body-lg text-slate-300 leading-relaxed font-light font-body animate-slide-in-up stagger-3">
                  From marine expertise to logistics, construction, tourism, and beyond — HASCO delivers world-class solutions that power the Kingdom's growth and global ambitions.
                </p>
              </div>

              {/* Professional buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in stagger-4 justify-start">
                <button className="apple-btn bg-brand-primary text-white px-6 py-3 text-button-lg font-medium font-heading hover:bg-brand-secondary rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 tracking-wide">Explore Our Sectors</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
