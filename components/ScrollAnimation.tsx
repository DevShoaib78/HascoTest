'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: string
  delay?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-slide-in-up'
      case 'fade-in-down':
        return 'animate-slide-in-down'
      case 'fade-in-left':
        return 'animate-slide-in-left'
      case 'fade-in-right':
        return 'animate-slide-in-right'
      case 'scale-in':
        return 'animate-scale-in'
      case 'bounce-in':
        return 'animate-bounce-in'
      case 'flip-in':
        return 'animate-flip-in'
      case 'rotate-in':
        return 'animate-rotate-in'
      case 'elastic-in':
        return 'animate-elastic-in'
      default:
        return 'animate-fade-in-up'
    }
  }

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}
