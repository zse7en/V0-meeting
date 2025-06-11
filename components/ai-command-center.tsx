"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NeuralBackground from "./ui/neural-background"
import AICore from "./ui/ai-core"
import FloatingPanel from "./ui/floating-panel"
import DataStream from "./ui/data-stream"
import HolographicDisplay from "./ui/holographic-display"
import { Zap, Activity, Database, Network } from "lucide-react"

export default function AICommandCenter() {
  const [activePhase, setActivePhase] = useState(0)
  const [aiThinking, setAiThinking] = useState(false)
  const [dataFlowing, setDataFlowing] = useState(false)
  const [systemReady, setSystemReady] = useState(false)

  const phases = [
    {
      id: 0,
      name: "问题检测",
      icon: <Activity className="w-6 h-6" />,
      color: "#FF6B6B",
      position: { x: 15, y: 20 },
    },
    {
      id: 1,
      name: "数据分析",
      icon: <Database className="w-6 h-6" />,
      color: "#4ECDC4",
      position: { x: 75, y: 15 },
    },
    {
      id: 2,
      name: "AI协商",
      icon: <Network className="w-6 h-6" />,
      color: "#45B7D1",
      position: { x: 85, y: 70 },
    },
    {
      id: 3,
      name: "方案生成",
      icon: <Zap className="w-6 h-6" />,
      color: "#96CEB4",
      position: { x: 20, y: 75 },
    },
  ]

  useEffect(() => {
    // Initialize system
    const initTimer = setTimeout(() => setSystemReady(true), 1000)
    const dataTimer = setTimeout(() => setDataFlowing(true), 2000)

    // Auto progression through phases
    const phaseTimer = setInterval(() => {
      setAiThinking(true)
      setTimeout(() => {
        setActivePhase((prev) => (prev + 1) % phases.length)
        setAiThinking(false)
      }, 3000)
    }, 8000)

    return () => {
      clearTimeout(initTimer)
      clearTimeout(dataTimer)
      clearInterval(phaseTimer)
    }
  }, [phases.length])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Data Streams */}
      <AnimatePresence>
        {dataFlowing && (
          <>
            <DataStream startX={10} startY={20} endX={50} endY={50} color="#FF6B6B" delay={0} data="质量数据流" />
            <DataStream startX={90} startY={15} endX={50} endY={50} color="#4ECDC4" delay={1} data="分析结果" />
            <DataStream startX={85} startY={85} endX={50} endY={50} color="#45B7D1" delay={2} data="AI决策" />
            <DataStream startX={15} startY={80} endX={50} endY={50} color="#96CEB4" delay={3} data="解决方案" />
          </>
        )}
      </AnimatePresence>

      {/* Central AI Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <AICore isThinking={aiThinking} activePhase={activePhase} systemReady={systemReady} />
      </div>

      {/* Floating Phase Panels */}
      <AnimatePresence>
        {systemReady &&
          phases.map((phase, index) => (
            <FloatingPanel
              key={phase.id}
              phase={phase}
              isActive={activePhase === index}
              isThinking={aiThinking && activePhase === index}
              onClick={() => setActivePhase(index)}
            />
          ))}
      </AnimatePresence>

      {/* Holographic Displays */}
      <AnimatePresence>
        {systemReady && (
          <>
            <HolographicDisplay
              position={{ x: 5, y: 5 }}
              width={35}
              height={40}
              title="质量监控"
              activePhase={activePhase}
              phaseIndex={0}
            />
            <HolographicDisplay
              position={{ x: 60, y: 5 }}
              width={35}
              height={40}
              title="数据分析"
              activePhase={activePhase}
              phaseIndex={1}
            />
            <HolographicDisplay
              position={{ x: 60, y: 55 }}
              width={35}
              height={40}
              title="AI协商"
              activePhase={activePhase}
              phaseIndex={2}
            />
            <HolographicDisplay
              position={{ x: 5, y: 55 }}
              width={35}
              height={40}
              title="解决方案"
              activePhase={activePhase}
              phaseIndex={3}
            />
          </>
        )}
      </AnimatePresence>

      {/* System Status */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-4 left-4 z-30">
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400">AI系统运行中</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">主机厂A线质量分析</div>
        </div>
      </motion.div>

      {/* Phase Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 right-4 z-30"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phases[activePhase]?.color }}></div>
            <span className="text-white font-medium">{phases[activePhase]?.name}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">阶段 {activePhase + 1}/4</div>
        </div>
      </motion.div>

      {/* Bottom Control Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
          <div className="flex items-center space-x-6">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  activePhase === index ? "bg-white/20 scale-110" : "bg-white/5 hover:bg-white/10 scale-100"
                }`}
              >
                <div style={{ color: phase.color }}>{phase.icon}</div>
                {activePhase === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: phase.color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
