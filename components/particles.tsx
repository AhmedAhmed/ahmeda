'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const getParticleColor = () => {
    if (!mounted) return '#ffffff'
    const currentTheme = theme === 'system' ? systemTheme : theme
    return currentTheme === 'dark' ? '#ffffff' : '#000000'
  }

  // Particle class to manage individual particles
  class Particle implements Particle {
    x: number
    y: number
    size: number
    baseX: number
    baseY: number
    density: number
    color: string

    constructor(x: number, y: number, size: number, color: string) {
      this.x = x
      this.y = y
      this.size = size
      this.baseX = x
      this.baseY = y
      this.density = Math.random() * 30 + 1
      this.color = color
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    }

    update(mouseX: number, mouseY: number) {
      // Calculate distance between particle and mouse
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Define force direction
      const forceDirectionX = dx / distance
      const forceDirectionY = dy / distance

      // Distance past which the particle is not affected
      const maxDistance = 100

      // Calculate force to apply (closer = stronger)
      const force = (maxDistance - distance) / maxDistance

      // Apply force if mouse is close enough
      if (distance < maxDistance) {
        this.x -= forceDirectionX * force * this.density
        this.y -= forceDirectionY * force * this.density
      } else {
        // Return to original position
        if (this.x !== this.baseX) {
          const dx = this.baseX - this.x
          this.x += dx / 10
        }
        if (this.y !== this.baseY) {
          const dy = this.baseY - this.y
          this.y += dy / 10
        }
      }
    }
  }

  // Check if a point is on the 404 text
  const isOnText = (x: number, y: number, textImageData: ImageData | null): boolean => {
    if (!textImageData) return false

    // Get the pixel data at the position
    const pixelIndex = (Math.floor(y) * textImageData.width + Math.floor(x)) * 4

    // Check if the alpha channel is not 0 (pixel is part of the text)
    return textImageData.data[pixelIndex + 3] > 128
  }

  // Initialize particles in 404 text shape
  const initParticles = (width: number, height: number, color: string) => {
    const particles: Particle[] = []
    const particleCount = 3000
    const particleSize = 2

    // Create an off-screen canvas to render the text
    const textCanvas = document.createElement('canvas')
    const textCtx = textCanvas.getContext('2d')
    if (!textCtx) return particles

    textCanvas.width = width
    textCanvas.height = height

    // Draw the 404 text
    textCtx.fillStyle = 'white'
    textCtx.font = 'bold 300px sans-serif'
    textCtx.textAlign = 'center'
    textCtx.textBaseline = 'middle'
    textCtx.fillText('404', width / 2, height / 2)

    // Get the image data
    const imageData = textCtx.getImageData(0, 0, width, height)

    // Try random positions until we have enough particles
    let attempts = 0
    while (particles.length < particleCount && attempts < 100000) {
      attempts++

      // Generate random position within the canvas
      const x = Math.random() * width
      const y = Math.random() * height

      // Check if this position is on the text
      if (isOnText(x, y, imageData)) {
        particles.push(new Particle(x, y, particleSize, color))
      }
    }

    return particles
  }

  // Mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight
        setDimensions({ width, height })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Initialize particles when dimensions change or theme changes
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0 && mounted) {
      const color = getParticleColor()
      particlesRef.current = initParticles(dimensions.width, dimensions.height, color)
    }
  }, [dimensions, theme, systemTheme, mounted])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Optional: Add a subtle glow effect
      ctx.shadowBlur = 10
      const color = getParticleColor()
      ctx.shadowColor = color === '#ffffff' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'

      particlesRef.current.forEach((particle) => {
        particle.update(mouseRef.current.x, mouseRef.current.y)
        particle.draw(ctx)
      })

      // Reset shadow for next frame
      ctx.shadowBlur = 0

      animationRef.current = requestAnimationFrame(animate)
    }

    if (dimensions.width > 0 && dimensions.height > 0) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, mounted])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 block pointer-events-none"
    />
  )
}

