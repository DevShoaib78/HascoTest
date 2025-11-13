'use client'

import { useState, useEffect, useRef } from 'react'

interface AdvancedParticle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
  type: 'sparkle' | 'trail' | 'glow' | 'star'
  rotation: number
  rotationSpeed: number
}

export default function AdvancedParticleSystem() {
  const [particles, setParticles] = useState<AdvancedParticle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const animationRef = useRef<number>()
  const lastMouseMove = useRef<number>(0)
  const particleId = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      lastMouseMove.current = Date.now()

      // Create different types of particles based on movement speed
      const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2)
      createAdvancedParticles(e.clientX, e.clientY, speed)
    }

    const handleMouseLeave = () => {
      setIsMouseMoving(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const createAdvancedParticles = (x: number, y: number, speed: number) => {
    const newParticles: AdvancedParticle[] = []
    const particleCount = Math.min(Math.floor(speed / 5) + 2, 8) // More particles for faster movement

    for (let i = 0; i < particleCount; i++) {
      const type = ['sparkle', 'trail', 'glow', 'star'][Math.floor(Math.random() * 4)] as AdvancedParticle['type']
      const colors = ['#014C83', '#FFFFFF', '#FFBB5B', '#5BA7DB', '#000000']
      
      newParticles.push({
        id: particleId.current++,
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 2,
        size: type === 'star' ? Math.random() * 4 + 2 : Math.random() * 3 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: type === 'trail' ? 120 : Math.random() * 80 + 40,
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      })
    }

    setParticles(prev => [...prev, ...newParticles])
  }

  const updateParticles = () => {
    setParticles(prev => 
      prev
        .map(particle => {
          let newVx = particle.vx
          let newVy = particle.vy

          // Different physics for different particle types
          switch (particle.type) {
            case 'sparkle':
              newVy += 0.02 // Light gravity
              break
            case 'trail':
              newVy += 0.01 // Very light gravity
              newVx *= 0.98 // Air resistance
              break
            case 'glow':
              newVy += 0.03 // Normal gravity
              break
            case 'star':
              newVy += 0.01 // Light gravity
              newVx *= 0.99 // Slight air resistance
              break
          }

          return {
            ...particle,
            x: particle.x + newVx,
            y: particle.y + newVy,
            vx: newVx,
            vy: newVy,
            opacity: particle.opacity * (1 - particle.life / particle.maxLife),
            life: particle.life + 1,
            rotation: particle.rotation + particle.rotationSpeed
          }
        })
        .filter(particle => particle.life < particle.maxLife && particle.opacity > 0.01)
    )
  }

  useEffect(() => {
    const animate = () => {
      updateParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Stop creating particles after mouse stops moving
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastMouseMove.current > 150) {
        setIsMouseMoving(false)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const renderParticle = (particle: AdvancedParticle) => {
    const baseStyle = {
      left: particle.x - particle.size / 2,
      top: particle.y - particle.size / 2,
      width: particle.size,
      height: particle.size,
      opacity: particle.opacity,
      transform: `rotate(${particle.rotation}deg)`,
      transition: 'opacity 0.1s ease-out'
    }

    switch (particle.type) {
      case 'sparkle':
        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              ...baseStyle,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              animation: 'pulse 0.5s ease-in-out infinite alternate'
            }}
          />
        )
      
      case 'trail':
        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              ...baseStyle,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              filter: 'blur(1px)'
            }}
          />
        )
      
      case 'glow':
        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              ...baseStyle,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
              filter: 'blur(2px)'
            }}
          />
        )
      
      case 'star':
        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              ...baseStyle,
              width: particle.size * 2,
              height: particle.size * 2,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
            }}
          />
        )
      
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(renderParticle)}
    </div>
  )
}






















