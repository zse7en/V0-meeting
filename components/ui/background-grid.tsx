"use client"

import { useEffect, useRef } from "react"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 40
    const gridOpacity = 0.07
    const dotSize = 1

    // Animation properties
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const particleCount = 15
    const particleMaxSpeed = 0.2
    const particleMaxSize = 3
    const particleMinSize = 1
    const particleOpacity = 0.3
    const connectionDistance = 150
    const connectionOpacity = 0.05

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleMaxSpeed,
        vy: (Math.random() - 0.5) * particleMaxSpeed,
        size: Math.random() * (particleMaxSize - particleMinSize) + particleMinSize,
      })
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.fillStyle = `rgba(30, 35, 52, ${gridOpacity})`
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw particles
      ctx.fillStyle = `rgba(54, 191, 250, ${particleOpacity})`
      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(54, 191, 250, ${connectionOpacity * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30" />
}
