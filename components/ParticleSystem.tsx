'use client'

import { useState, useEffect, useRef } from 'react'

interface Particle {
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
}

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const animationRef = useRef<number>()
  const lastMouseMove = useRef<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      lastMouseMove.current = Date.now()

      // Create new particles on mouse move
      createParticles(e.clientX, e.clientY)
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

  const createParticles = (x: number, y: number) => {
    const newParticles: Particle[] = []
    const particleCount = Math.random() * 3 + 2 // 2-5 particles per mouse move

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 1, // Slight upward bias
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.7 ? '#014C83' : '#FFFFFF', // 30% brand primary, 70% white
        life: 0,
        maxLife: Math.random() * 60 + 30 // 30-90 frames
      })
    }

    setParticles(prev => [...prev, ...newParticles])
  }

  const updateParticles = () => {
    setParticles(prev => 
      prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.05, // Gravity
          opacity: particle.opacity * (1 - particle.life / particle.maxLife),
          life: particle.life + 1
        }))
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
      if (Date.now() - lastMouseMove.current > 100) {
        setIsMouseMoving(false)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: particle.color === '#014C83' 
              ? `0 0 ${particle.size * 2}px ${particle.color}` 
              : `0 0 ${particle.size}px ${particle.color}`,
            transition: 'opacity 0.1s ease-out'
          }}
        />
      ))}
    </div>
  )
}






















