'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [data-cursor-hover]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="absolute w-6 h-6 bg-brand-primary/20 rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(1, 76, 131, 0.4)' 
            : '0 0 10px rgba(1, 76, 131, 0.2)'
        }}
      />
    </>
  )
}






















