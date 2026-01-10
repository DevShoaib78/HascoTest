'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

export default function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: t('neom.title'),
      description: t('neom.description'),
      image: "https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt912afb408dabb887/668e954f01ef8505e0e12169/Port_20of_20NEOM_20development_20area_20in_20focus_20at_20Oxagon34.jpg?disable=upscale&width=1200&height=630&fit=crop",
      impact: t('neom.impact')
    },
    {
      title: t('amaala.title'),
      description: t('amaala.description'),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80",
      impact: t('amaala.impact')
    },
    {
      title: t('redSea.title'),
      description: t('redSea.description'),
      image: "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Um-Rumah-Island-The-Red-Sea-Project.jpg",
      impact: t('redSea.impact')
    },
    {
      title: t('cruise.title'),
      description: t('cruise.description'),
      image: "https://i0.wp.com/cruise-arabia.com/wp-content/uploads/2022/07/JeddahMarina_2aac1bc0ca.png?resize=639%2C317&ssl=1",
      impact: t('cruise.impact')
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('featured-projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Update current index on scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPosition = Math.abs(container.scrollLeft)
      const cardWidth = container.scrollWidth / projects.length
      const newIndex = Math.round(scrollPosition / cardWidth)
      setCurrentIndex(newIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [projects.length])

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cards = container.children
      
      if (cards[index]) {
        // Use scrollIntoView for better RTL/LTR compatibility
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        })
      }
      setCurrentIndex(index)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    scrollToProject(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    scrollToProject(newIndex)
  }

  return (
    <section id="featured-projects" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
            {t('heading')} {t('headingBrand')}
          </h2>
          <p className="text-body-md md:text-body-lg text-gray-600 font-body max-w-3xl mx-auto mb-6">
            {t('subtitle')}
          </p>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Projects Carousel */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="relative snap-center flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Title */}
                    <h3 className="text-white text-xl md:text-2xl font-heading mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/90 text-sm font-body mb-3">
                      {project.description}
                    </p>
                    
                    {/* Impact */}
                    <p className="text-white/70 text-xs font-body italic">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className={`absolute ${locale === 'ar' ? 'right-0 translate-x-4' : 'left-0 -translate-x-4'} top-1/2 -translate-y-1/2 bg-white hover:bg-brand-primary text-brand-primary hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group`}
            aria-label={t('previous')}
          >
            {locale === 'ar' ? <ChevronRight size={24} strokeWidth={2.5} /> : <ChevronLeft size={24} strokeWidth={2.5} />}
          </button>
          
          <button
            onClick={handleNext}
            className={`absolute ${locale === 'ar' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'} top-1/2 -translate-y-1/2 bg-white hover:bg-brand-primary text-brand-primary hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group`}
            aria-label={t('next')}
          >
            {locale === 'ar' ? <ChevronLeft size={24} strokeWidth={2.5} /> : <ChevronRight size={24} strokeWidth={2.5} />}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-8 h-2 bg-brand-primary' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-brand-primary/50'
                }`}
                aria-label={`${t('goTo')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
