'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import { ArrowRight } from 'lucide-react'

function AnimatedCounter({ end, duration = 2000, delay = 0, suffix = '', isVisible = true }: {
  end: number; duration?: number; delay?: number; suffix?: string; isVisible?: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true
    const timeout = setTimeout(() => {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) requestAnimationFrame(animate)
        else setCount(end)
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timeout)
  }, [end, duration, delay, isVisible])

  return <span>{count}{suffix}</span>
}

export default function ClientsPage() {
  const t = useTranslations('clientsPage')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [introVisible, setIntroVisible] = useState(false)
  const [clientsVisible, setClientsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
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
    const clientsObserver = createObserver(setClientsVisible)
    const statsObserver = createObserver(setStatsVisible, 0.2)
    const ctaObserver = createObserver(setCtaVisible)

    const introEl = document.getElementById('intro-section')
    const clientsEl = document.getElementById('clients-section')
    const statsEl = document.getElementById('stats-section')
    const ctaEl = document.getElementById('cta-section')

    if (introEl) introObserver.observe(introEl)
    if (clientsEl) clientsObserver.observe(clientsEl)
    if (statsEl) statsObserver.observe(statsEl)
    if (ctaEl) ctaObserver.observe(ctaEl)

    return () => {
      clearTimeout(timer)
      introObserver.disconnect()
      clientsObserver.disconnect()
      statsObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  const clients = [
    { key: 'neom', logo: '/images/NEOM logo.png' },
    { key: 'redSeaGlobal', logo: '/images/Red Sead Global logo.png' },
    { key: 'amaala', logo: '/images/Amaala Logo.png' },
    { key: 'saudiAramco', logo: '/images/Saudi Aramco Logo.png' },
    { key: 'tronox', logo: '/images/Tronox logo.png' },
  ]

  const stats = [
    { label: t('partnership.stat1Label'), value: parseInt(t('partnership.stat1Value')), suffix: '+' },
    { label: t('partnership.stat2Label'), value: parseInt(t('partnership.stat2Value')), suffix: '+' },
    { label: t('partnership.stat3Label'), value: parseInt(t('partnership.stat3Value')), suffix: '+' },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/skyline1.jpg" alt="HASCO Clients" fill className="object-cover" priority />
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

      {/* Client Cards */}
      <section id="clients-section" className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {clients.map((client, index) => {
              const isReversed = index % 2 !== 0
              const logoEl = (
                <div className={`bg-gray-50 flex items-center justify-center p-8 md:p-12 md:min-h-[220px] md:w-[300px] flex-shrink-0 border-b md:border-b-0 ${isReversed ? 'md:border-l' : 'md:border-r'} border-gray-200 group-hover:bg-brand-primary/5 transition-colors duration-300`}>
                  <div className="relative w-56 h-32">
                    <Image src={client.logo} alt={t(`${client.key}.name`)} fill className="object-contain" />
                  </div>
                </div>
              )
              const textEl = (
                <div className="p-8 md:p-10 flex-1">
                  <h3 className="text-2xl font-heading text-brand-primary mb-2">
                    {t(`${client.key}.name`)}
                  </h3>
                  <span className="inline-block text-sm font-heading text-brand-secondary bg-brand-primary/5 px-3 py-1 rounded-full mb-4">
                    {t(`${client.key}.scope`)}
                  </span>
                  <p className="text-gray-600 font-body text-lg leading-relaxed">
                    {t(`${client.key}.description`)}
                  </p>
                </div>
              )
              return (
                <div
                  key={client.key}
                  className={`group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className={`flex flex-col items-stretch ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {logoEl}
                    {textEl}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section id="stats-section" className="py-20 bg-gradient-to-br from-brand-primary via-[#003d6b] to-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center mb-12 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl text-white font-heading mb-4">{t('partnership.heading')}</h2>
            <p className="text-white/80 font-body text-lg max-w-2xl mx-auto">{t('partnership.text')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="text-6xl md:text-7xl text-white font-heading mb-2">
                  <AnimatedCounter end={stat.value} duration={2000} delay={index * 200} suffix={stat.suffix} isVisible={statsVisible} />
                </div>
                <p className="text-white/80 font-body text-base">{stat.label}</p>
                <div className="w-12 h-1 bg-brand-secondary mx-auto mt-4 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
