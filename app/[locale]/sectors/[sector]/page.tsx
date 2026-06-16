'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { sectors as sectorDefs, getSectorBySlug } from '@/src/lib/sectors'

interface Capability {
  title: string
  text: string
}

// Scroll-reveal hook — mirrors the IntersectionObserver pattern used across
// the inner pages (about, sectors).
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

// A single capability rendered as a numbered stop on the vertical "route".
// Each waypoint reveals on its own as it scrolls into view, and its node on
// the line lights up when reached.
function Waypoint({ cap, index }: { cap: Capability; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>(0.25)
  const num = String(index + 1).padStart(2, '0')
  const left = index % 2 === 0

  return (
    <li ref={ref} className="relative">
      {/* Node on the route line */}
      <span
        aria-hidden="true"
        className={`absolute top-1.5 lg:top-1/2 start-5 lg:start-[50%] -ms-[9px] lg:-mt-[9px] z-10 h-[18px] w-[18px] rounded-full border-2 transition-all duration-500 ${
          visible
            ? 'bg-brand-primary border-brand-primary scale-110'
            : 'bg-gray-50 border-brand-primary/40'
        }`}
      ></span>

      <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div
          className={`ps-14 lg:ps-0 transition-all duration-700 ${
            left
              ? 'lg:col-start-1 lg:ms-auto lg:max-w-md lg:text-end'
              : 'lg:col-start-2 lg:me-auto lg:max-w-md lg:text-start'
          } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="block font-heading font-bold leading-none text-5xl lg:text-6xl text-brand-primary/25 mb-2">
            {num}
          </span>
          <h3 className="text-xl lg:text-2xl font-heading text-brand-primary mb-3">{cap.title}</h3>
          <p className="text-gray-600 font-body leading-relaxed">{cap.text}</p>
        </div>
      </div>
    </li>
  )
}

export default function SectorDetailPage() {
  const params = useParams()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const t = useTranslations('sectorsPage')

  const slug = (Array.isArray(params.sector) ? params.sector[0] : params.sector) || ''
  const sector = getSectorBySlug(slug)

  const [heroVisible, setHeroVisible] = useState(false)
  const overview = useReveal<HTMLDivElement>()
  const caps = useReveal<HTMLDivElement>()
  const approach = useReveal<HTMLDivElement>()
  const others = useReveal<HTMLDivElement>()
  const cta = useReveal<HTMLDivElement>()

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!sector) {
    notFound()
  }

  const { key, image } = sector
  const name = t(`${key}.title`)
  const tagline = t(`${key}.detail.tagline`)
  const overviewParas = t.raw(`${key}.detail.overview`) as string[]
  const capabilities = t.raw(`${key}.detail.capabilities`) as Capability[]
  const approachParas = t.raw(`${key}.detail.approach`) as string[]
  const highlights = t.raw(`${key}.detail.highlights`) as string[]
  const otherSectors = sectorDefs.filter((s) => s.slug !== sector.slug)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={image} alt={name} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/85 via-brand-primary/75 to-brand-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-white/80 text-sm font-body mb-7 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {t('detailCommon.breadcrumbHome')}
            </Link>
            <ChevronRight className={`w-4 h-4 text-white/50 ${isRtl ? 'rotate-180' : ''}`} />
            <Link href={`/${locale}/sectors`} className="hover:text-white transition-colors">
              {t('detailCommon.breadcrumbSectors')}
            </Link>
            <ChevronRight className={`w-4 h-4 text-white/50 ${isRtl ? 'rotate-180' : ''}`} />
            <span className="text-white">{name}</span>
          </nav>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-heading mb-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {name}
          </h1>
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {tagline}
          </p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div
          ref={overview.ref}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-3 gap-8 lg:gap-16"
        >
          <div className={`transition-all duration-1000 ${overview.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-brand-secondary">
              {t('detailCommon.overviewLabel')}
            </span>
            <h2 className="mt-3 text-title-md md:text-title-lg font-heading text-brand-primary leading-tight">
              {name}
            </h2>
            <div className="w-24 h-1 bg-brand-primary rounded-full mt-4"></div>
          </div>
          <div className={`lg:col-span-2 space-y-5 transition-all duration-1000 delay-200 ${overview.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {overviewParas.map((para, i) => (
              <p
                key={i}
                className={`font-body leading-relaxed ${i === 0 ? 'text-lg md:text-xl text-gray-700' : 'text-base md:text-lg text-gray-600'}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — "expedition route": a vertical path of numbered waypoints */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            ref={caps.ref}
            className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${caps.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-title-lg md:text-title-xl font-heading text-brand-primary leading-tight">
              {t('detailCommon.capabilitiesLabel')}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* The route */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 start-5 lg:start-[50%] w-px -ms-[0.5px] bg-gradient-to-b from-brand-primary/40 via-brand-primary/25 to-brand-primary/5"
            ></div>
            <ul className="space-y-12 lg:space-y-20">
              {capabilities.map((cap, i) => (
                <Waypoint key={i} cap={cap} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach + Highlights */}
      <section className="py-20 bg-white">
        <div
          ref={approach.ref}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className={`transition-all duration-1000 ${approach.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-md md:text-title-lg font-heading text-brand-primary leading-tight">
              {t('detailCommon.approachLabel')}
            </h2>
            <div className="w-24 h-1 bg-brand-primary rounded-full mt-4 mb-6"></div>
            {approachParas.map((para, i) => (
              <p key={i} className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          <div className={`rounded-3xl bg-gradient-to-br from-brand-primary to-[#003d6b] p-8 lg:p-10 shadow-2xl transition-all duration-1000 delay-200 ${approach.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-white font-heading text-xl mb-6">{t('detailCommon.highlightsLabel')}</h3>
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white/90 font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore other sectors */}
      <section className="py-20 bg-gray-50">
        <div ref={others.ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${others.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg font-heading text-brand-primary leading-tight">
              {t('detailCommon.otherSectorsLabel')}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mt-4"></div>
            <p className="mt-5 text-gray-600 font-body">{t('detailCommon.otherSectorsText')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {otherSectors.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${locale}/sectors/${s.slug}`}
                aria-label={t(`${s.key}.title`)}
                className={`group relative h-40 lg:h-44 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${others.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-white font-heading text-sm lg:text-base leading-tight block drop-shadow-lg">
                    {t(`${s.key}.title`)}
                  </span>
                </div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-brand-secondary rounded-2xl transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div
            ref={cta.ref}
            className={`bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12 lg:p-16 transition-all duration-1000 ${cta.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
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
                <ArrowRight className={`w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
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
