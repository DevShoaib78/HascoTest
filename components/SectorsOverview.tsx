'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SectorsOverview() {
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
      title: "Marine Operations",
      description: "Comprehensive marine services including consultancy, operations, construction, and professional diving services.",
      icon: "/images/cruise.png",
      backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Integrated logistics solutions with freight forwarding, transportation, and supply chain management.",
      icon: "/images/truck.png",
      backgroundImage: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2024/04/logistics-management-768x435.png.webp"
    },
    {
      title: "Construction",
      description: "General construction projects with focus on safety, quality, and sustainability.",
      icon: "/images/construction-site.png",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Hospitality & Events",
      description: "High-quality hospitality, catering, and event management services.",
      icon: "/images/reception.png",
      backgroundImage: "https://aaft.com/blog/wp-content/uploads/2025/05/tourist-giving-passport-receptionist-scaled.jpg"
    },
    {
      title: "Tourism",
      description: "Tourism development and management services for the Kingdom's growing tourism sector.",
      icon: "/images/flight.png",
      backgroundImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Consultancy",
      description: "Professional consultancy services across various sectors and industries.",
      icon: "/images/talk.png",
      backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center"
    }
  ]

  return (
    <section id="sectors-overview" className="py-20 bg-white relative overflow-hidden">
      <div className="w-full">
        <div className={`text-center mb-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-4">
            <span className="font-extralight">Sectors at a </span>
            <span className="font-extralight text-gray-900">Glance</span>
          </h2>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Ongoing Carousel */}
        <div className="relative overflow-hidden">
          {/* Carousel Track - Infinite Loop */}
          <div className="flex animate-scroll-infinite gap-4">
            {/* Triple the sectors for seamless loop */}
            {[...sectors, ...sectors, ...sectors].map((sector, index) => (
              <div
                key={`sector-${index}`}
                className="relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[400px] lg:w-[450px] h-[450px] md:h-[500px] lg:h-[550px] group cursor-pointer"
              >
                {/* Background Image - Fully visible */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={sector.backgroundImage}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 450px"
                  />
                </div>

                {/* Subtle Gradient Overlay - lighter so image is fully visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>

                {/* Content - Always visible */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 rounded-2xl">
                  {/* Title - Always visible */}
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 drop-shadow-2xl leading-tight">
                    {sector.title}
                  </h3>
                  
                  {/* Description - Always visible */}
                  <p className="text-white/95 text-sm md:text-base leading-relaxed drop-shadow-lg line-clamp-3">
                    {sector.description}
                  </p>
                </div>

                {/* Hover Effect - Subtle scale */}
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-brand-secondary rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        </div>

        <style jsx global>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 45s linear infinite;
            will-change: transform;
          }

          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className={`text-center mt-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-brand-primary text-white px-8 py-4 text-button-lg font-medium font-heading hover:bg-brand-secondary rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore All Sectors
          </button>
        </div>
      </div>
    </section>
  )
}
