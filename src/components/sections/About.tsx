'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  const locale = useLocale()
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

    const element = document.getElementById('hasco-snapshot')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hasco-snapshot" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image - Clean and Visible */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-3/5 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Slide5.jpeg)'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="pl-4 sm:pl-6 lg:pl-8 pr-6 sm:pr-8 lg:pr-16">
          {/* Section Heading - Far Left */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('heading')} {t('headingBrand')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'} ${locale === 'ar' ? 'origin-right' : 'origin-left'}`}></div>
          </div>
          
          <div className="max-w-2xl">
            {/* Company Introduction - Far Left */}
            <div className="space-y-8">
              <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-4">
                  <p className="text-body-md md:text-body-lg text-gray-700 leading-relaxed font-body">
                    {t('description')}
                  </p>
                </div>
              </div>

              <div className={`pt-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <button className="group relative bg-brand-primary text-white px-8 py-4 text-button-lg font-heading hover:bg-brand-secondary rounded-lg shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 tracking-wide">{t('button')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
