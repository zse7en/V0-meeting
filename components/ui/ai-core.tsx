"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"

interface AICoreProps {
  isThinking: boolean
  activePhase: number
  systemReady: boolean
}

export default function AICore({ isThinking, activePhase, systemReady }: AICoreProps) {
  const phaseColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: systemReady ? 1 : 0, opacity: systemReady ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative"
    >
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 w-32 h-32 rounded-full border border-white/20"
        style={{
          background: `conic-gradient(from 0deg, ${phaseColors[activePhase]}40, transparent, ${phaseColors[activePhase]}40)`,
        }}
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-2 w-28 h-28 rounded-full border border-white/30"
        style={{
          background: `conic-gradient(from 90deg, transparent, ${phaseColors[activePhase]}60, transparent)`,
        }}
      />

      {/* Inner Core */}
      <motion.div
        animate={{
          scale: isThinking ? [1, 1.1, 1] : 1,
          boxShadow: isThinking
            ? [
                `0 0 20px ${phaseColors[activePhase]}80`,
                `0 0 40px ${phaseColors[activePhase]}60`,
                `0 0 20px ${phaseColors[activePhase]}80`,
              ]
            : `0 0 20px ${phaseColors[activePhase]}40`,
        }}
        transition={{ duration: 2, repeat: isThinking ? Number.POSITIVE_INFINITY : 0 }}
        className="absolute inset-4 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/40 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isThinking ? 360 : 0 }}
          transition={{ duration: 1, repeat: isThinking ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
        >
          <Brain className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* Thinking Particles */}
      {isThinking && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: phaseColors[activePhase] }}
              initial={{
                x: 64,
                y: 64,
                scale: 0,
              }}
              animate={{
                x: 64 + Math.cos((i * Math.PI * 2) / 8) * 60,
                y: 64 + Math.sin((i * Math.PI * 2) / 8) * 60,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Data Flow Indicators */}
      <div className="absolute inset-0 w-32 h-32">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-4 rounded-full bg-gradient-to-t from-transparent to-white/60"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "50% 64px",
              transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
