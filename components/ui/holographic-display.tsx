"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ProblemDetection from "../content/problem-detection"
import DataAnalysis from "../content/data-analysis"
import AIConsultation from "../content/ai-consultation"
import SolutionGeneration from "../content/solution-generation"

interface HolographicDisplayProps {
  position: { x: number; y: number }
  width: number
  height: number
  title: string
  activePhase: number
  phaseIndex: number
}

export default function HolographicDisplay({
  position,
  width,
  height,
  title,
  activePhase,
  phaseIndex,
}: HolographicDisplayProps) {
  const [isVisible, setIsVisible] = useState(false)
  const isActive = activePhase === phaseIndex

  useEffect(() => {
    if (isActive) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  const getContent = () => {
    switch (phaseIndex) {
      case 0:
        return <ProblemDetection isActive={isActive} />
      case 1:
        return <DataAnalysis isActive={isActive} />
      case 2:
        return <AIConsultation isActive={isActive} />
      case 3:
        return <SolutionGeneration isActive={isActive} />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={{
            opacity: isActive ? 1 : 0.3,
            scale: isActive ? 1 : 0.9,
            rotateX: 0,
          }}
          exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            width: `${width}%`,
            height: `${height}%`,
            perspective: "1000px",
          }}
        >
          {/* Holographic Frame */}
          <div className="relative w-full h-full">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60"></div>

            {/* Scanning Lines */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />

            {/* Main Display */}
            <motion.div
              animate={{
                boxShadow: isActive
                  ? [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                    ]
                  : "0 0 10px rgba(6, 182, 212, 0.2)",
              }}
              transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
              className="w-full h-full bg-black/10 backdrop-blur-xl border border-cyan-400/30 rounded-lg p-4 overflow-hidden flex flex-col"
            >
              {/* Title Bar */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-400/20">
                <h3 className="text-cyan-400 font-mono text-sm">{title}</h3>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                  <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden mb-3">{getContent()}</div>

              {/* AI Status Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                className="mt-auto pt-2 border-t border-cyan-400/20"
              >
                <p className="text-cyan-300 text-base font-mono leading-relaxed">
                  小瑞正在总结经验，并自动生成相关功能
                </p>
              </motion.div>
            </motion.div>

            {/* Holographic Glow */}
            <motion.div
              animate={{
                opacity: isActive ? [0.3, 0.6, 0.3] : 0.1,
              }}
              transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
              className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
