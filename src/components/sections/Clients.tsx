'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Clients() {
  const t = useTranslations('clients')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const clients = [
    { name: "neom", logoImage: "https://cms.hotelschool.nl/storage/media/neom-logo-png-saudi-arabia-PNG-Transparent-Images.png?v=1661515082" },
    { name: "red-sea-global", logoImage: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Red_Sea_Global_Logo.svg/1200px-Red_Sea_Global_Logo.svg.png" },
    { name: "amaala", logoImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Amaala_Logo.svg/1200px-Amaala_Logo.svg.png" },
    { name: "saudi-aramco", logoImage: "https://upload.wikimedia.org/wikipedia/de/thumb/a/a7/Saudi_Aramco_logo.svg/1200px-Saudi_Aramco_logo.svg.png?20200315105404" },
    { name: "tronox", logoImage: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tronox_logo.png" }
  ]

  return (
    <div ref={sectionRef} className="bg-white py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl mb-4 font-heading leading-tight text-brand-primary">
            {t('heading')} {t('headingBrand')}
          </h2>
          <p className="text-body-md md:text-body-lg text-gray-600 max-w-3xl mx-auto font-body mb-6">
            {t('subtitle')}
          </p>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Clean Logo Grid */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Top Row - 3 logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl">
            {clients.slice(0, 3).map((client, index) => (
              <div
                key={index}
                className={`group flex items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={client.logoImage}
                    alt={`${client.name} logo`}
                    width={client.name === 'neom' ? 300 : 200}
                    height={client.name === 'neom' ? 150 : 100}
                    className={`object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 w-auto ${client.name === 'neom' ? 'max-h-32 scale-125' : 'max-h-20'
                      }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 logos centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-3xl">
            {clients.slice(3).map((client, index) => (
              <div
                key={index + 3}
                className={`group flex items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={client.logoImage}
                    alt={`${client.name} logo`}
                    width={200}
                    height={100}
                    className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 w-auto max-h-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Partnership Statement */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm md:text-base text-gray-500 font-body italic">
            {t('statement')}
          </p>
        </div>
      </div>
    </div>
  )
}
