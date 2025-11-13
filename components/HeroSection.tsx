'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
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
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Subtle overlay for depth without color */}
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>
        
        {/* Advanced floating particles with mouse interaction */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => {
            if (!isClient) return null
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            )
          })}
        </div>

        
        {/* Premium clock background with parallax */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`
          }}
        >
          <div className="w-full h-full border-2 border-white rounded-full relative shadow-2xl shadow-white/20">
            {/* Animated clock markings with enhanced effects */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-white origin-bottom animate-pulse"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-300px)`,
                  transformOrigin: '50% 300px',
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
            {/* Rotating center dot */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
              style={{
                animation: 'spin 20s linear infinite',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
              }}
            />
          </div>
      </div>

        {/* Premium jumping person with parallax */}
        <div 
          className="absolute bottom-0 right-0 w-80 h-96 opacity-20"
          style={{
            transform: `translateY(${scrollY * -0.1}px) translateX(${scrollY * 0.05}px)`
          }}
        >
          {/* Enhanced red glow with animation */}
          <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-full h-full">
            {/* Body with enhanced animation */}
            <div 
              className="absolute bottom-0 right-20 w-6 h-40 bg-white rounded-t-full shadow-lg animate-bounce" 
              style={{ 
                animationDuration: '3s',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            ></div>
            {/* Head with glow */}
            <div 
              className="absolute bottom-32 right-18 w-8 h-8 bg-white rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
              }}
            ></div>
            {/* Premium briefcase with enhanced shine */}
            <div className="absolute bottom-20 right-12 w-8 h-6 bg-white rounded-sm shadow-lg relative overflow-hidden">
            </div>
            {/* Briefcase handle */}
            <div className="absolute bottom-24 right-14 w-4 h-1 bg-white shadow-sm"></div>
            {/* Arms with enhanced movement */}
            <div 
              className="absolute bottom-28 right-16 w-1 h-8 bg-white rotate-12 shadow-sm animate-pulse" 
              style={{ 
                animationDelay: '0.5s',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
              }}
            ></div>
            <div 
              className="absolute bottom-28 right-22 w-1 h-8 bg-white -rotate-12 shadow-sm animate-pulse" 
              style={{ 
                animationDelay: '1s',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
              }}
            ></div>
            {/* Legs with glow */}
            <div 
              className="absolute bottom-0 right-18 w-2 h-16 bg-white rounded-t-full shadow-sm"
              style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}
            ></div>
            <div 
              className="absolute bottom-0 right-22 w-2 h-16 bg-white rounded-t-full shadow-sm"
              style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}
            ></div>
            </div>
          </div>

        {/* Premium iMac monitor with parallax */}
        <div 
          className="absolute top-1/2 right-10 transform -translate-y-1/2 w-80 h-60 opacity-90"
          style={{
            transform: `translateY(-50%) translateY(${scrollY * -0.15}px) translateX(${scrollY * 0.08}px)`
          }}
        >
          <div className="relative w-full h-full">
            {/* Monitor screen with advanced effects */}
            <div className="bg-white rounded-lg p-2 shadow-2xl shadow-black/50 relative overflow-hidden">
              {/* Screen reflection effect */}
              <div className="bg-gray-800 rounded h-full flex items-center justify-center relative">
                {/* Animated screen content */}
                <div className="text-gray-400 text-sm animate-pulse">Monitor Display</div>
                {/* Enhanced screen glow effect */}
                <div className="absolute inset-0 bg-brand-secondary/10 rounded animate-pulse"></div>
                {/* Screen scan lines */}
                {/* Corner highlights */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
              </div>
              {/* Monitor frame glow */}
            </div>
            {/* Premium monitor stand with glow */}
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-white rounded-b-lg shadow-lg"
              style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Premium Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Premium headline with text effects */}
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] mb-8 text-left font-primary">
            <span className="block drop-shadow-2xl animate-fade-in-up font-primary" style={{ animationDelay: '0.2s' }}>
              ONLY CERTIFIED
            </span>
            <span className="block text-brand-primary text-8xl md:text-[10rem] drop-shadow-2xl animate-fade-in-up font-primary" style={{ animationDelay: '0.4s' }}>
              PHONES
            </span>
          </h1>
          
          {/* Premium description with subtle animation */}
          <p className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed animate-fade-in-up font-secondary" style={{ animationDelay: '0.6s' }}>
            Quisque elementum vulputate risus, id pellentesque
          </p>

          {/* Premium buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button className="group relative bg-brand-primary text-white px-8 py-4 text-lg font-semibold hover:bg-brand-secondary transition-all duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 transform hover:scale-105">
              {/* Button shine effect */}
              <span className="relative z-10">READ MORE</span>
            </button>
            <button className="group relative bg-white text-brand-primary border-2 border-brand-primary px-8 py-4 text-lg font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 transform hover:scale-105">
              {/* Button shine effect */}
              <span className="relative z-10">JOIN US</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
