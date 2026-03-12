'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

const GAP = 24
const AUTO_INTERVAL = 3000

function getVisibleCount(width: number) {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export default function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const [isVisible, setIsVisible] = useState(false)

  const baseProjects = [
    {
      key: 'neom',
      image: 'https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt912afb408dabb887/668e954f01ef8505e0e12169/Port_20of_20NEOM_20development_20area_20in_20focus_20at_20Oxagon34.jpg?disable=upscale&width=1200&height=630&fit=crop',
      sector: isRtl ? 'البحرية' : 'Marine',
      accent: '#004A81',
    },
    {
      key: 'amaala',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'اللوجستيات' : 'Logistics',
      accent: '#0284C7',
    },
    {
      key: 'redSea',
      image: 'https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Um-Rumah-Island-The-Red-Sea-Project.jpg',
      sector: isRtl ? 'السياحة والفعاليات' : 'Tourism & Events',
      accent: '#059669',
    },
    {
      key: 'cruise',
      image: 'https://i0.wp.com/cruise-arabia.com/wp-content/uploads/2022/07/JeddahMarina_2aac1bc0ca.png?resize=639%2C317&ssl=1',
      sector: isRtl ? 'الضيافة' : 'Hospitality',
      accent: '#B45309',
    },
    {
      key: 'diriyah',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'السياحة والفعاليات' : 'Tourism & Events',
      accent: '#059669',
    },
    {
      key: 'alula',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'الضيافة' : 'Hospitality',
      accent: '#B45309',
    },
    {
      key: 'neomConstruction',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'الإنشاءات' : 'Construction',
      accent: '#D97706',
    },
    {
      key: 'jeddahDistrict',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'الإنشاءات' : 'Construction',
      accent: '#D97706',
    },
    {
      key: 'aramcoSupply',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'سلسلة التوريد' : 'Supply Chain',
      accent: '#7C3AED',
    },
    {
      key: 'nationalDistrib',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'سلسلة التوريد' : 'Supply Chain',
      accent: '#7C3AED',
    },
    {
      key: 'arabianGulf',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'البحرية' : 'Marine',
      accent: '#004A81',
    },
    {
      key: 'jeddahPort',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=800&fit=crop&q=80',
      sector: isRtl ? 'اللوجستيات' : 'Logistics',
      accent: '#0284C7',
    },
  ]

  const N = baseProjects.length
  const looped = [...baseProjects, ...baseProjects, ...baseProjects]

  const containerRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)
  const [trackIndex, setTrackIndex] = useState(N)
  const [transitioning, setTransitioning] = useState(true)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isHoveredRef = useRef(false)

  // Compute card width from container
  const updateSizing = useCallback(() => {
    if (!containerRef.current) return
    const w = containerRef.current.clientWidth
    const vc = getVisibleCount(w)
    setCardWidth((w - GAP * (vc - 1)) / vc)
  }, [])

  useEffect(() => {
    updateSizing()
    const ro = new ResizeObserver(updateSizing)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [updateSizing])

  // Auto-scroll
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setTransitioning(true)
        setTrackIndex(i => i + 1)
      }
    }, AUTO_INTERVAL)
  }, [])

  useEffect(() => {
    startAuto()
    return () => {
      if (autoRef.current) clearInterval(autoRef.current)
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    }
  }, [startAuto])

  // Silently snap back to middle set after crossing an edge
  const handleTransitionEnd = useCallback(() => {
    setTrackIndex(i => {
      if (i >= 2 * N) { setTransitioning(false); return i - N }
      if (i < N)      { setTransitioning(false); return i + N }
      return i
    })
  }, [N])

  // Re-enable transition after silent snap (needs two frames to take effect)
  useEffect(() => {
    if (!transitioning) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitioning(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [transitioning])

  const pauseAndResume = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(startAuto, 6000)
  }, [startAuto])

  const goNext = () => {
    setTransitioning(true)
    setTrackIndex(i => i + 1)
    pauseAndResume()
  }

  const goPrev = () => {
    setTransitioning(true)
    setTrackIndex(i => i - 1)
    pauseAndResume()
  }

  // Scroll-in visibility
  useEffect(() => {
    const el = document.getElementById('featured-projects')
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const translateX = cardWidth > 0 ? -(trackIndex * (cardWidth + GAP)) : 0
  const activeIndex = ((trackIndex - N) % N + N) % N

  return (
    <section
      id="featured-projects"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
            {t('heading')} {t('headingBrand')}
          </h2>
          <div
            className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
          <p className="text-body-md md:text-body-lg text-gray-600 font-body max-w-3xl mx-auto mt-6">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => { isHoveredRef.current = true }}
          onMouseLeave={() => { isHoveredRef.current = false }}
        >
          {/* Track */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: GAP,
                transform: `translateX(${translateX}px)`,
                transition: transitioning
                  ? 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'none',
                willChange: 'transform',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {looped.map((project, i) => (
                <article
                  key={`${project.key}-${i}`}
                  style={{
                    width: cardWidth > 0 ? cardWidth : undefined,
                    flexShrink: 0,
                  }}
                  className="group"
                >
                  <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-md">
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={t(`${project.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Layered overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

                    {/* Sector badge */}
                    <div className={`absolute top-5 ${isRtl ? 'right-5' : 'left-5'}`}>
                      <span
                        className="inline-flex items-center text-white text-[11px] font-heading tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
                        style={{ backgroundColor: `${project.accent}CC` }}
                      >
                        {project.sector}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className={`text-white text-xl font-heading mb-2 leading-snug transition-colors duration-300 group-hover:text-[#66AADD] ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}
                      >
                        {t(`${project.key}.title`)}
                      </h3>
                      <p
                        className={`text-white/70 text-sm font-body leading-relaxed mb-3 ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}
                      >
                        {t(`${project.key}.description`)}
                      </p>
                      <div
                        className={`flex items-center gap-2 text-[#66AADD] text-xs font-body italic ${
                          isRtl ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <span className="w-5 h-px bg-[#66AADD] flex-shrink-0" />
                        {t(`${project.key}.impact`)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={isRtl ? goNext : goPrev}
            aria-label={t('previous')}
            className={`absolute top-1/2 -translate-y-1/2 z-10 ${
              isRtl ? '-right-5' : '-left-5'
            } w-11 h-11 flex items-center justify-center rounded-full
              bg-white hover:bg-brand-primary border border-gray-200 hover:border-brand-primary
              text-brand-primary hover:text-white shadow-lg transition-all duration-300 hover:scale-110`}
          >
            {isRtl ? <ChevronRight size={20} strokeWidth={2} /> : <ChevronLeft size={20} strokeWidth={2} />}
          </button>

          {/* Next arrow */}
          <button
            onClick={isRtl ? goPrev : goNext}
            aria-label={t('next')}
            className={`absolute top-1/2 -translate-y-1/2 z-10 ${
              isRtl ? '-left-5' : '-right-5'
            } w-11 h-11 flex items-center justify-center rounded-full
              bg-white hover:bg-brand-primary border border-gray-200 hover:border-brand-primary
              text-brand-primary hover:text-white shadow-lg transition-all duration-300 hover:scale-110`}
          >
            {isRtl ? <ChevronLeft size={20} strokeWidth={2} /> : <ChevronRight size={20} strokeWidth={2} />}
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {baseProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setTransitioning(true)
                setTrackIndex(N + index)
                pauseAndResume()
              }}
              aria-label={`${t('goTo')} ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 h-2 bg-brand-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

