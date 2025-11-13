'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Sectors() {
  const t = useTranslations('sectors')
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('sectors-overview')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const sectors = [
    {
      title: t('marine.title'),
      description: t('marine.description'),
      backgroundImage: "https://images.unsplash.com/photo-1622299542410-0b48bb3d42ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('logistics.title'),
      description: t('logistics.description'),
      backgroundImage: "https://images.unsplash.com/photo-1761307234387-d9291985eaf9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('construction.title'),
      description: t('construction.description'),
      backgroundImage: "https://images.unsplash.com/photo-1726087282719-a8ab1c218611?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('hospitality.title'),
      description: t('hospitality.description'),
      backgroundImage: "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('tourism.title'),
      description: t('tourism.description'),
      backgroundImage: "https://images.unsplash.com/photo-1716571349499-0b83f5dbb7a2?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: t('consultancy.title'),
      description: t('consultancy.description'),
      backgroundImage: "https://images.unsplash.com/photo-1681505515542-3a6c4ef756c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <section id="sectors-overview" className="py-20 bg-white relative overflow-hidden">
      <div className="w-full">
        <div className={`text-center mb-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-4">
            <span className="font-extralight">{t('heading')} </span>
            <span className="font-semibold text-brand-primary">{t('headingBrand')}</span>
          </h2>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Desktop: Red Sea Global Style Hover-Expand Layout */}
        <div className={`hidden md:flex h-[320px] lg:h-[360px] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                hoveredIndex === null 
                  ? 'flex-1' 
                  : hoveredIndex === index 
                    ? 'flex-[2]' 
                    : 'flex-[0.7]'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <Image
                src={sector.backgroundImage}
                alt={sector.title}
                fill
                className="object-cover transition-transform duration-500"
                priority={index < 3}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'bg-black/40' 
                  : hoveredIndex === null 
                    ? 'bg-black/50' 
                    : 'bg-black/70'
              }`}></div>
              
              {/* Content */}
              <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 pb-8 md:pb-10 transition-all duration-500 ease-out ${
                hoveredIndex === index 
                  ? 'items-start' 
                  : 'items-center'
              }`}>
                {/* Title - Always Visible */}
                <h3 className="text-white font-semibold font-heading text-xl lg:text-2xl mb-3 text-center">
                  {sector.title}
                </h3>
                
                {/* Description - Fade in AFTER card fully expands */}
                <div className={`transition-all ${
                  hoveredIndex === index 
                    ? 'opacity-100 duration-300 delay-300' 
                    : 'opacity-0 duration-200 delay-0 pointer-events-none'
                }`}>
                  <p className="text-white/90 font-body text-sm md:text-base leading-relaxed max-w-lg">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Card Grid Layout */}
        <div className={`md:hidden grid grid-cols-1 gap-6 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className="relative overflow-hidden rounded-2xl shadow-lg h-[280px]"
            >
              {/* Background Image */}
              <Image
                src={sector.backgroundImage}
                alt={sector.title}
                fill
                className="object-cover"
                priority={index < 3}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Title */}
                <h3 className="text-white font-semibold font-heading text-xl mb-3">
                  {sector.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 font-body text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative bg-brand-primary text-white px-8 py-4 text-button-lg font-semibold font-heading hover:bg-brand-secondary rounded-lg shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 tracking-wide">{t('button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
