"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface FloatingPanelProps {
  phase: {
    id: number
    name: string
    icon: React.ReactNode
    color: string
    position: { x: number; y: number }
  }
  isActive: boolean
  isThinking: boolean
  onClick: () => void
}

export default function FloatingPanel({ phase, isActive, isThinking, onClick }: FloatingPanelProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.1 : 1,
        x: "-50%",
        y: "-50%",
      }}
      transition={{ duration: 0.5, delay: phase.id * 0.1 }}
      className="absolute z-10 cursor-pointer"
      style={{
        left: `${phase.position.x}%`,
        top: `${phase.position.y}%`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          opacity: isActive ? [0.5, 0.8, 0.5] : 0.3,
        }}
        transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
        className="absolute inset-0 rounded-full blur-xl"
        style={{ backgroundColor: phase.color }}
      />

      {/* Main Panel */}
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          rotateY: isActive ? [0, 5, -5, 0] : 0,
        }}
        transition={{ duration: isActive ? 2 : 0.3, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
        className="relative w-[120px] h-[120px] rounded-xl bg-black/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center p-2"
        style={{
          boxShadow: isActive ? `0 0 30px ${phase.color}60` : `0 0 15px ${phase.color}30`,
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: isThinking && isActive ? 360 : 0,
            scale: isActive ? [1, 1.1, 1] : 1,
          }}
          transition={{
            rotate: { duration: 2, repeat: isThinking && isActive ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
            scale: { duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 },
          }}
          style={{ color: phase.color }}
        >
          {phase.icon}
        </motion.div>

        {/* Name */}
        <div className="text-s text-white/80 mt-3 text-center font-medium">{phase.name}</div>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: phase.color }}
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-full h-full rounded-full"
              style={{ backgroundColor: phase.color }}
            />
          </motion.div>
        )}

        {/* Thinking Indicator */}
        {isThinking && isActive && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: phase.color }}
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
