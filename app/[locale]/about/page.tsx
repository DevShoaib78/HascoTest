'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import { Ship, Package, Anchor, UtensilsCrossed, ArrowRight } from 'lucide-react'

function AnimatedCounter({ end, duration = 2000, delay = 0, suffix = '', isVisible = true }: {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  isVisible?: boolean
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
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timeout)
  }, [end, duration, delay, isVisible])

  return <span>{count}{suffix}</span>
}

export default function AboutPage() {
  const t = useTranslations('aboutPage')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [storyVisible, setStoryVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [missionVisible, setMissionVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)

    const createObserver = (setState: (val: boolean) => void, threshold = 0.1) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true)
          }
        },
        { threshold }
      )
    }

    const storyObserver = createObserver(setStoryVisible)
    const statsObserver = createObserver(setStatsVisible, 0.2)
    const servicesObserver = createObserver(setServicesVisible)
    const missionObserver = createObserver(setMissionVisible, 0.2)
    const ctaObserver = createObserver(setCtaVisible)

    const storyEl = document.getElementById('story-section')
    const statsEl = document.getElementById('stats-section')
    const servicesEl = document.getElementById('services-section')
    const missionEl = document.getElementById('mission-section')
    const ctaEl = document.getElementById('cta-section')

    if (storyEl) storyObserver.observe(storyEl)
    if (statsEl) statsObserver.observe(statsEl)
    if (servicesEl) servicesObserver.observe(servicesEl)
    if (missionEl) missionObserver.observe(missionEl)
    if (ctaEl) ctaObserver.observe(ctaEl)

    return () => {
      clearTimeout(timer)
      storyObserver.disconnect()
      statsObserver.disconnect()
      servicesObserver.disconnect()
      missionObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  const stats = [
    { number: 19, suffix: '+', label: t('stats.years.label') },
    { number: 500, suffix: '+', label: t('stats.projects.label') },
    { number: 50, suffix: '+', label: t('stats.team.label') },
    { number: 15, suffix: '+', label: t('stats.countries.label') }
  ]

  const services = [
    { icon: Ship, title: t('services.shipAgency.title'), description: t('services.shipAgency.description') },
    { icon: Package, title: t('services.shipping.title'), description: t('services.shipping.description') },
    { icon: Anchor, title: t('services.marine.title'), description: t('services.marine.description') },
    { icon: UtensilsCrossed, title: t('services.hospitality.title'), description: t('services.hospitality.description') }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/skyline2.jpg"
            alt="HASCO Group"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-primary/70 to-brand-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-heading mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('hero.title')}
          </h1>
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Decorative wave - flows directly into white section */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className={`relative transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Slide5.jpeg"
                  alt="HASCO Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* Heading matching homepage style */}
              <div className="mb-8">
                <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
                  {t('story.heading')}
                </h2>
                <div className={`w-24 h-1 bg-brand-primary rounded-full transition-all duration-1000 delay-500 ${storyVisible ? 'scale-x-100' : 'scale-x-0'} ${locale === 'ar' ? 'origin-right' : 'origin-left'}`}></div>
              </div>
              
              <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p className="text-brand-primary font-medium">{t('story.paragraph3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-br from-brand-primary via-[#003d6b] to-brand-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl text-white font-heading mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    duration={2000}
                    delay={index * 200}
                    suffix={stat.suffix}
                    isVisible={statsVisible}
                  />
                </div>
                <p className="text-white/80 font-body text-sm sm:text-base">{stat.label}</p>
                <div className="w-12 h-1 bg-brand-secondary mx-auto mt-4 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Heading matching homepage style */}
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('services.heading')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${servicesVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading text-brand-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #004A81 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div 
              className={`relative bg-gradient-to-br from-brand-primary to-[#003d6b] rounded-3xl p-8 lg:p-12 text-white overflow-hidden transition-all duration-1000 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading mb-4">{t('mission.heading')}</h3>
                <p className="text-white/90 font-body text-lg leading-relaxed">{t('mission.text')}</p>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className={`relative bg-white border-2 border-brand-primary/20 rounded-3xl p-8 lg:p-12 overflow-hidden transition-all duration-1000 delay-200 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading text-brand-primary mb-4">{t('vision.heading')}</h3>
                <p className="text-gray-600 font-body text-lg leading-relaxed">{t('vision.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12 lg:p-16 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto text-center">
              {/* Heading matching homepage CTA style */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-heading mb-6">
                <span className="text-brand-primary">{t('cta.heading')}</span>
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
