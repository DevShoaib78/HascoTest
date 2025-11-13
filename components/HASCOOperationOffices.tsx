'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'


export default function HASCOOperationOffices() {
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

    const element = document.getElementById('operation-offices')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="operation-offices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading">
            HASCO <span className="text-brand-primary">Operation Offices</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            Strategic presence across Saudi Arabia, ensuring comprehensive coverage and local expertise in every region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Interactive Map */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 mb-6 font-heading">Our Geographic Presence</h3>
              
              {/* Map Container */}
              <div className="relative rounded-xl h-96 border-2 border-gray-200 overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/images/saudi-arabia-map.png"
                  alt="Saudi Arabia Map"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 mb-6 font-heading">Office Information</h3>
              
              {/* Office Details */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-title-sm font-semibold text-gray-900 mb-4 font-heading">Our Network</h4>
                  <p className="text-gray-600 leading-relaxed mb-4 text-body-md font-body">
                    HASCO Group operates across multiple strategic locations throughout Saudi Arabia, ensuring comprehensive coverage and local expertise in every region we serve.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      <span className="text-gray-700">6 Office Locations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      <span className="text-gray-700">100% Saudi Coverage</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4">Our Office Locations</h5>
                  <div className="text-sm text-gray-600">
                    <div className="mb-2">Dammam, Jeddah, Riyadh, Al Khobar, Yanbu, Jubail</div>
                    <div>Ras Al Khair, Khafji, Al Wajh, Magna, Diba, Jazan</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


