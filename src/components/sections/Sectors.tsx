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
          <h2 className="text-title-lg md:text-title-xl leading-tight font-heading font-bold mb-4" style={{ fontWeight: 700 }}>
            <span className="text-gray-900">{t('heading')} </span>
            <span className="text-brand-primary">{t('headingBrand')}</span>
          </h2>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Desktop: Ongoing Carousel */}
        <div className={`hidden md:block relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-sectors-scroll gap-4">
            {/* Triple the sectors for seamless infinite loop */}
            {[...sectors, ...sectors, ...sectors].map((sector, index) => (
              <div
                key={`sector-${index}`}
                className="relative flex-shrink-0 w-[350px] lg:w-[420px] h-[450px] lg:h-[500px] group cursor-pointer"
              >
                {/* Background Image - Fully visible */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={sector.backgroundImage}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 350px, 420px"
                  />
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent rounded-2xl"></div>

                {/* Content - Always visible */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 rounded-2xl">
                  {/* Title - Always visible */}
                  <h3 className="text-white text-2xl lg:text-3xl mb-3 drop-shadow-2xl leading-tight font-heading">
                    {sector.title}
                  </h3>
                  
                  {/* Description - Always visible */}
                  <p className="text-white/95 text-sm lg:text-base leading-relaxed drop-shadow-lg font-body line-clamp-3">
                    {sector.description}
                  </p>
                </div>

                {/* Hover Ring Effect */}
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-brand-secondary rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

        </div>

        <style jsx global>{`
          @keyframes sectors-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .animate-sectors-scroll {
            animation: sectors-scroll 20s linear infinite;
            will-change: transform;
          }
        `}</style>

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
                <h3 className="text-white font-heading text-xl mb-3">
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
          <button className="group relative bg-brand-primary text-white px-8 py-4 text-button-lg font-heading hover:bg-brand-secondary rounded-lg shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 tracking-wide">{t('button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
