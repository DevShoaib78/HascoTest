'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/skyline7.webp)',
        backgroundPosition: 'center 40%'
      }}
    >
      {/* Subtle black overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight font-heading mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block">{t('title1')}</span>
              <span className="block">{t('title2')}</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed font-body max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
