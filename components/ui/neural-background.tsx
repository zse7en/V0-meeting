"use client"

import { useEffect, useRef } from "react"

export default function NeuralBackground() {
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

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = []
    const nodeCount = 50
    const maxConnections = 3
    const connectionDistance = 150

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      })
    }

    // Create connections
    nodes.forEach((node, i) => {
      const distances = nodes
        .map((otherNode, j) => ({
          index: j,
          distance: Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2),
        }))
        .filter((d) => d.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, maxConnections)

      node.connections = distances.map((d) => d.index)
    })

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8)
        gradient.addColorStop(0, "rgba(100, 200, 255, 0.8)")
        gradient.addColorStop(1, "rgba(100, 200, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          const distance = Math.sqrt((node.x - connectedNode.x) ** 2 + (node.y - connectedNode.y) ** 2)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()

            // Animated pulse along connection
            const pulsePosition = (Date.now() * 0.001 + i * 0.1) % 1
            const pulseX = node.x + (connectedNode.x - node.x) * pulsePosition
            const pulseY = node.y + (connectedNode.y - node.y) * pulsePosition

            ctx.fillStyle = `rgba(255, 100, 150, ${opacity * 0.8})`
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
