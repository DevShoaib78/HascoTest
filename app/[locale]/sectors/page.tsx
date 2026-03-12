'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import Projects from '@/src/components/sections/Projects'
import { ArrowRight, Check } from 'lucide-react'

export default function SectorsPage() {
  const t = useTranslations('sectorsPage')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [introVisible, setIntroVisible] = useState(false)
  const [sectorsVisible, setSectorsVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    const createObserver = (setState: (val: boolean) => void, threshold = 0.1) => {
      return new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setState(true) },
        { threshold }
      )
    }

    const introObserver = createObserver(setIntroVisible)
    const sectorsObserver = createObserver(setSectorsVisible)
    const ctaObserver = createObserver(setCtaVisible)

    const introEl = document.getElementById('intro-section')
    const sectorsEl = document.getElementById('sectors-grid')
    const ctaEl = document.getElementById('cta-section')

    if (introEl) introObserver.observe(introEl)
    if (sectorsEl) sectorsObserver.observe(sectorsEl)
    if (ctaEl) ctaObserver.observe(ctaEl)

    return () => {
      clearTimeout(timer)
      introObserver.disconnect()
      sectorsObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  const sectors = [
    { key: 'tourismEvents', image: 'https://images.unsplash.com/photo-1716571349499-0b83f5dbb7a2?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { key: 'hospitality', image: 'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { key: 'construction', image: 'https://images.unsplash.com/photo-1726087282719-a8ab1c218611?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { key: 'supplyChain', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { key: 'marine', image: 'https://images.unsplash.com/photo-1622299542410-0b48bb3d42ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { key: 'logistics', image: 'https://images.unsplash.com/photo-1761307234387-d9291985eaf9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0' },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/saudi3.jpg" alt="HASCO Sectors" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-primary/70 to-brand-primary/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-heading mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('hero.title')}
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('hero.subtitle')}
          </p>
        </div>
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('intro.heading')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${introVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            <p className="mt-6 text-lg text-gray-600 font-body leading-relaxed">
              {t('intro.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section id="sectors-grid" className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
          {sectors.map((sector, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={sector.key}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className={`relative h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl ${isEven ? '' : 'lg:order-2'}`}>
                  <Image src={sector.image} alt={t(`${sector.key}.title`)} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <h3 className="text-2xl lg:text-3xl font-heading text-brand-primary mb-4">
                    {t(`${sector.key}.title`)}
                  </h3>
                  <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
                    {t(`${sector.key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map(i => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-gray-600 font-body">{t(`${sector.key}.feature${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <Projects />

      {/* CTA */}
      <section id="cta-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12 lg:p-16 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-heading mb-6 text-brand-primary">
                {t('cta.heading')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body mb-10">
                {t('cta.text')}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 text-button-lg font-heading rounded-lg shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden relative"
              >
                <span className="relative z-10">{t('cta.button')}</span>
                <ArrowRight className={`w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
