'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
  transitionType?: 'fade-in' | 'slide-up' | 'scale-in' | 'reveal'
  delay?: number
  threshold?: number
  addDivider?: boolean
  addGradientOverlay?: boolean
}

export default function SectionTransition({ 
  children, 
  className = '',
  transitionType = 'fade-in',
  delay = 0,
  threshold = 0.1,
  addDivider = false,
  addGradientOverlay = false
}: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getTransitionClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (transitionType) {
      case 'fade-in':
        return 'apple-fade-in'
      case 'slide-up':
        return 'apple-slide-up'
      case 'scale-in':
        return 'apple-scale-in'
      case 'reveal':
        return 'apple-reveal'
      default:
        return 'apple-fade-in'
    }
  }

  const sectionClasses = [
    'section-transition',
    getTransitionClass(),
    addGradientOverlay ? 'gradient-overlay' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <>
      {addDivider && <div className="section-divider"></div>}
      <section 
        ref={ref} 
        className={sectionClasses}
      >
        {children}
      </section>
    </>
  )
}
