'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function SplashScreen() {
  const pathname = usePathname()
  const [shouldShow, setShouldShow] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Check if this is the homepage (with or without locale prefix)
    const pathWithoutLocale = pathname?.replace(/^\/(en|ar)/, '') || '/'
    const isHomePage = pathWithoutLocale === '' || pathWithoutLocale === '/'

    // Only show splash on homepage
    if (!isHomePage) {
      setShouldShow(false)
      return
    }

    // Show the splash screen on every homepage visit
    setShouldShow(true)

    // Animate progress bar over 2.5 seconds
    const progressDuration = 2500
    const progressInterval = 20
    const progressStep = (100 / progressDuration) * progressInterval

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = prev + progressStep
        if (next >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return next
      })
    }, progressInterval)

    // Start exit animation after 3 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 3000)

    // Hide splash after exit animation completes (500ms)
    const hideTimer = setTimeout(() => {
      setShouldShow(false)
    }, 3500)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  // Don't render anything if shouldn't show
  if (!shouldShow) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500 ease-out ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right accent */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #004A81 0%, transparent 70%)' }}
        />
        {/* Bottom left accent */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #66AADD 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-sm">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ease-out ${
            isExiting
              ? 'opacity-0 translate-y-4'
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            transitionDelay: isExiting ? '0ms' : '100ms',
            animation: !isExiting ? 'fadeSlideUp 0.6s ease-out forwards' : 'none'
          }}
        >
          <div className="relative w-48 h-20 sm:w-56 sm:h-24">
            <Image
              src="/images/hascoblue.png"
              alt="HASCO Group"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading Bar Container */}
        <div
          className={`mt-10 w-full transition-all duration-700 ease-out ${
            isExiting
              ? 'opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            transitionDelay: isExiting ? '50ms' : '200ms',
            animation: !isExiting ? 'fadeSlideUp 0.6s ease-out 0.15s forwards' : 'none',
            opacity: isExiting ? 0 : undefined
          }}
        >
          {/* Progress bar track */}
          <div className="h-[2px] bg-gray-100 rounded-full overflow-hidden">
            {/* Progress bar fill */}
            <div
              className="h-full rounded-full transition-[width] duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #004A81 0%, #66AADD 100%)'
              }}
            />
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mt-6 text-center transition-all duration-700 ease-out ${
            isExiting
              ? 'opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            transitionDelay: isExiting ? '100ms' : '300ms',
            animation: !isExiting ? 'fadeSlideUp 0.6s ease-out 0.25s forwards' : 'none',
            opacity: isExiting ? 0 : undefined
          }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase font-body text-gray-400"
          >
            Integrated Excellence
          </p>
        </div>
      </div>

      {/* Inline keyframes for initial animation */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
