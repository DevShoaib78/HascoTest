'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OurClientsSection() {
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
    { name: "neom", logo: "NEOM", logoImage: "https://cms.hotelschool.nl/storage/media/neom-logo-png-saudi-arabia-PNG-Transparent-Images.png?v=1661515082", description: "Future city development" },
    { name: "red-sea-global", logo: "Red Sea Global", logoImage: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Red_Sea_Global_Logo.svg/1200px-Red_Sea_Global_Logo.svg.png", description: "Tourism development" },
    { name: "amaala", logo: "AMAALA", logoImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Amaala_Logo.svg/1200px-Amaala_Logo.svg.png", description: "Luxury tourism" },
    { name: "saudi-aramco", logo: "Saudi Aramco", logoImage: "https://icon2.cleanpng.com/lnd/20250115/yi/6bda30212c79b17fd77b85b392428e.webp", description: "Energy sector" },
    { name: "tronox", logo: "TRONOX", logoImage: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tronox_logo.png", description: "Chemical industry" },
    { name: "additional-partners", logo: "Additional Partners", logoImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=100&fit=crop&crop=center", description: "Various sectors" }
  ]

  const clientInfo = [
    {
      title: "NEOM Partnership",
      description: "Supporting the development of the world's most ambitious smart city project with comprehensive logistics and marine services."
    },
    {
      title: "Red Sea Global",
      description: "Providing integrated solutions for the world's most ambitious regenerative tourism destination project."
    },
    {
      title: "Saudi Aramco",
      description: "Delivering specialized marine operations and logistics services to support the world's largest oil company."
    },
    {
      title: "TRONOX Collaboration",
      description: "Supporting chemical industry operations with specialized logistics and supply chain management solutions."
    }
  ]

  return (
    <div ref={sectionRef} className="bg-gray-100 py-20 relative overflow-hidden section-bg-transition">
      {/* Enhanced background pattern with animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-brand-dark mb-4 font-heading">
            Trusted <span className="font-extralight text-brand-dark">Partnerships</span>
          </h2>
          <p className="text-body-md md:text-body-lg text-gray-600 max-w-3xl mx-auto font-body mb-4">
            From NEOM to AMAALA, The Red Sea Development, and Saudi Cruise, HASCO has been a trusted partner in some of the Kingdom's most ambitious projects.
          </p>
          <div className={`w-24 h-1 bg-brand-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Premium Client Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl text-center transition-all duration-300 border border-gray-100 hover:border-[#66AADD] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 h-24 flex items-center justify-center">
                <Image
                  src={client.logoImage}
                  alt={client.logo}
                  width={200}
                  height={100}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 max-h-20"
                />
              </div>
              <div className="text-subtitle-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors duration-300 mb-3 font-heading">
                {client.logo}
              </div>
              <div className="text-body-md text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-body">
                {client.description}
              </div>
              {/* Simple bottom border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}


