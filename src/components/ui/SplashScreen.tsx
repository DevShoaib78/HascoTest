'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Trigger logo reveal animation after mount
    setTimeout(() => setIsLoaded(true), 200)

    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2000)

    // Remove component after exit animation completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false)
    }, 3500) // 2s display + 1.5s exit animation

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#004A81] via-[#003d6b] to-[#002a4d] transition-all duration-1500 ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#66AADD]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#004A81]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Smooth Reveal */}
        <div
          className={`relative transition-all duration-2000 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Animated Glow Effect Behind Logo */}
          <div className={`absolute inset-0 bg-white/30 rounded-full blur-3xl transition-all duration-2000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}></div>
          
          {/* Logo with White Version */}
          <div className="relative w-64 h-32 md:w-80 md:h-40 lg:w-96 lg:h-48">
            <Image
              src="/images/hascowhite.png"
              alt="HASCO Group"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`text-center mt-12 transition-all duration-2000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/70 text-sm md:text-base font-light tracking-wider font-body">
            Powering Saudi Arabia's Vision 2030
          </p>
        </div>
      </div>
    </div>
  )
}
