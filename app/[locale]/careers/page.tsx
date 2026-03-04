'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import { Rocket, TrendingUp, Globe, Award, MapPin, Briefcase, Clock, ArrowRight, Mail } from 'lucide-react'

export default function CareersPage() {
  const t = useTranslations('careersPage')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [whyVisible, setWhyVisible] = useState(false)
  const [openingsVisible, setOpeningsVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    const createObserver = (setState: (val: boolean) => void, threshold = 0.1) => {
      return new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setState(true) },
        { threshold }
      )
    }

    const whyObserver = createObserver(setWhyVisible)
    const openingsObserver = createObserver(setOpeningsVisible)
    const ctaObserver = createObserver(setCtaVisible)

    const whyEl = document.getElementById('why-section')
    const openingsEl = document.getElementById('openings-section')
    const ctaEl = document.getElementById('cta-section')

    if (whyEl) whyObserver.observe(whyEl)
    if (openingsEl) openingsObserver.observe(openingsEl)
    if (ctaEl) ctaObserver.observe(ctaEl)

    return () => {
      clearTimeout(timer)
      whyObserver.disconnect()
      openingsObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  const benefits = [
    { icon: Rocket, titleKey: 'benefit1Title', descKey: 'benefit1Desc' },
    { icon: TrendingUp, titleKey: 'benefit2Title', descKey: 'benefit2Desc' },
    { icon: Globe, titleKey: 'benefit3Title', descKey: 'benefit3Desc' },
    { icon: Award, titleKey: 'benefit4Title', descKey: 'benefit4Desc' },
  ]

  const positions = [1, 2, 3, 4, 5, 6]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/skyline7.webp" alt="Careers at HASCO" fill className="object-cover" priority />
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

      {/* Why HASCO */}
      <section id="why-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('why.heading')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${whyVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            <p className="mt-6 text-lg text-gray-600 font-body leading-relaxed">
              {t('why.text')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.titleKey}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-brand-primary opacity-[0.15] pointer-events-none" />
                  <h3 className="text-xl font-heading text-brand-primary mb-3 relative z-10">{t(`why.${benefit.titleKey}`)}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed relative z-10">{t(`why.${benefit.descKey}`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings-section" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${openingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('openings.heading')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${openingsVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            <p className="mt-6 text-lg text-gray-600 font-body leading-relaxed">
              {t('openings.text')}
            </p>
          </div>

          <div className="space-y-4">
            {positions.map((pos, index) => (
              <div
                key={pos}
                className={`group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-primary/30 transition-all duration-500 overflow-hidden ${openingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 80 + 300}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-heading text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
                      {t(`openings.position${pos}Title`)}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-body">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-secondary" />
                        {t(`openings.position${pos}Location`)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-secondary" />
                        {t(`openings.position${pos}Type`)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-brand-secondary" />
                        {t(`openings.position${pos}Sector`)}
                      </span>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-6 py-3 rounded-lg font-heading text-sm hover:bg-brand-primary hover:text-white transition-all duration-300 group-hover:shadow-md flex-shrink-0">
                    {t('openings.applyButton')}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #004A81 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`relative bg-gradient-to-br from-brand-primary to-[#003d6b] rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-heading mb-6">
                {t('cta.heading')}
              </h2>
              <p className="text-lg text-white/90 font-body leading-relaxed mb-10">
                {t('cta.text')}
              </p>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${t('cta.email')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-brand-primary px-8 py-4 text-button-lg font-heading rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>{t('cta.button')}</span>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
              <p className="mt-4 text-white/60 font-body text-sm">{t('cta.email')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
