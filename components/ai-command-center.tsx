"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NeuralBackground from "./ui/neural-background"
import AICore from "./ui/ai-core"
import FloatingPanel from "./ui/floating-panel"
import DataStream from "./ui/data-stream"
import HolographicDisplay from "./ui/holographic-display"
import { Zap, Activity, Database, Network, Brain, Cpu, Eye, Layers } from "lucide-react"

export default function AICommandCenter() {
  const [activePhase, setActivePhase] = useState(0)
  const [aiThinking, setAiThinking] = useState(false)
  const [dataFlowing, setDataFlowing] = useState(false)
  const [systemReady, setSystemReady] = useState(false)
  const [evolutionLevel, setEvolutionLevel] = useState(1)
  const [knowledgeNodes, setKnowledgeNodes] = useState<Array<{id: number, x: number, y: number, type: string, active: boolean}>>([])
  const [aiConsciousness, setAiConsciousness] = useState(0)
  const [decisionTree, setDecisionTree] = useState<Array<{id: number, question: string, answer: string, confidence: number}>>([])

  const phases = [
    {
      id: 0,
      name: "问题检测",
      icon: <Activity className="w-6 h-6" />,
      color: "#FF6B6B",
      position: { x: 15, y: 20 },
      description: "AI感知异常，启动深度学习模式"
    },
    {
      id: 1,
      name: "知识融合",
      icon: <Brain className="w-6 h-6" />,
      color: "#4ECDC4",
      position: { x: 85, y: 17 },
      description: "整合历史数据，构建知识图谱"
    },
    {
      id: 2,
      name: "智能协商",
      icon: <Network className="w-6 h-6" />,
      color: "#45B7D1",
      position: { x: 85, y: 85 },
      description: "多AI顾问协同决策，达成共识"
    },
    {
      id: 3,
      name: "自主进化",
      icon: <Zap className="w-6 h-6" />,
      color: "#96CEB4",
      position: { x: 20, y: 75 },
      description: "基于反馈自动优化，持续学习"
    },
  ]

  // AI进化逻辑
  useEffect(() => {
    const initTimer = setTimeout(() => setSystemReady(true), 1000)
    const dataTimer = setTimeout(() => setDataFlowing(true), 2000)

    // AI意识水平提升
    const consciousnessTimer = setInterval(() => {
      setAiConsciousness(prev => Math.min(prev + 0.5, 100))
    }, 200)

    // 知识节点生长
    const nodeGrowthTimer = setInterval(() => {
      setKnowledgeNodes(prev => {
        if (prev.length < 50) {
          const newNode = {
            id: prev.length,
            x: Math.random() * 100,
            y: Math.random() * 100,
            type: ['experience', 'pattern', 'solution', 'insight'][Math.floor(Math.random() * 4)],
            active: Math.random() > 0.7
          }
          return [...prev, newNode]
        }
        return prev.map(node => ({
          ...node,
          active: Math.random() > 0.8
        }))
      })
    }, 1000)

    // AI进化等级提升
    const evolutionTimer = setInterval(() => {
      setEvolutionLevel(prev => {
        if (prev < 10) {
          return prev + 1
        }
        return prev
      })
    }, 8000)

    // 自主相位切换
    const phaseTimer = setInterval(() => {
      setAiThinking(true)
      
      // 生成决策树
      const newDecision = {
        id: Date.now(),
        question: [
          "材料硬度变化如何影响安装？",
          "工装压力分布是否均匀？",
          "操作人员技能是否匹配？",
          "质量标准是否需要更新？"
        ][Math.floor(Math.random() * 4)],
        answer: "基于神经网络分析得出结论",
        confidence: 85 + Math.random() * 15
      }
      
      setDecisionTree(prev => [newDecision, ...prev.slice(0, 2)])

      setTimeout(() => {
        setActivePhase((prev) => (prev + 1) % phases.length)
        setAiThinking(false)
      }, 3000)
    }, 6000)

    return () => {
      clearTimeout(initTimer)
      clearTimeout(dataTimer)
      clearInterval(consciousnessTimer)
      clearInterval(nodeGrowthTimer)
      clearInterval(evolutionTimer)
      clearInterval(phaseTimer)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
      {/* Enhanced Neural Network Background */}
      <NeuralBackground />
      
      {/* Knowledge Network Visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {knowledgeNodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute w-2 h-2 rounded-full ${
              node.active ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-purple-600/30'
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{
              scale: node.active ? [1, 1.5, 1] : 1,
              opacity: node.active ? [0.8, 1, 0.8] : 0.3,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Enhanced Data Streams */}
      <AnimatePresence>
        {dataFlowing && (
          <>
            <DataStream startX={10} startY={20} endX={50} endY={50} color="#FF6B6B" delay={0} data="实时质量数据" />
            <DataStream startX={90} startY={15} endX={50} endY={50} color="#4ECDC4" delay={1} data="历史经验库" />
            <DataStream startX={85} startY={85} endX={50} endY={50} color="#45B7D1" delay={2} data="专家知识图谱" />
            <DataStream startX={15} startY={80} endX={50} endY={50} color="#96CEB4" delay={3} data="进化算法" />
            
            {/* 新增更多数据流 */}
            <DataStream startX={50} startY={10} endX={50} endY={50} color="#A78BFA" delay={0.5} data="神经网络权重" />
            <DataStream startX={10} startY={50} endX={50} endY={50} color="#F59E0B" delay={1.5} data="模式识别" />
            <DataStream startX={90} startY={50} endX={50} endY={50} color="#EF4444" delay={2.5} data="决策反馈" />
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Central AI Core */}
      <div className="absolute top-[45%] left-[47%] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <AICore 
          isThinking={aiThinking} 
          activePhase={activePhase} 
          systemReady={systemReady}
          evolutionLevel={evolutionLevel}
          consciousness={aiConsciousness}
        />
      </div>

      {/* AI Evolution Status */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="absolute top-4 left-4 z-30"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400">AI系统 v{evolutionLevel}.0 运行中</span>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-gray-400">意识水平</div>
            <div className="w-40 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{ width: `${aiConsciousness}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-xs text-cyan-400">{aiConsciousness.toFixed(1)}% 觉醒度</div>
          </div>

          <div className="text-xs text-gray-400">
            <div>知识节点: {knowledgeNodes.length}</div>
            <div>活跃连接: {knowledgeNodes.filter(n => n.active).length}</div>
          </div>
        </div>
      </motion.div>

      {/* Decision Tree Display */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="absolute top-4 right-4 z-30 w-80"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-3">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-medium">AI思维链路</span>
          </div>
          
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {decisionTree.map((decision) => (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-purple-500/10 border border-purple-500/20 rounded p-2"
              >
                <div className="text-xs text-purple-300 mb-1">{decision.question}</div>
                <div className="text-xs text-gray-300">{decision.answer}</div>
                <div className="text-xs text-cyan-400 mt-1">
                  置信度: {decision.confidence.toFixed(1)}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Phase Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 text-center max-w-md">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phases[activePhase]?.color }}></div>
            <span className="text-white font-medium">{phases[activePhase]?.name}</span>
          </div>
          <div className="text-xs text-gray-400">{phases[activePhase]?.description}</div>
          <div className="text-xs text-cyan-400 mt-1">阶段 {activePhase + 1}/4 • 进化等级 {evolutionLevel}</div>
        </div>
      </motion.div>

      {/* Enhanced Floating Panels */}
      <AnimatePresence>
        {systemReady &&
          phases.map((phase, index) => (
            <FloatingPanel
              key={phase.id}
              phase={phase}
              isActive={activePhase === index}
              isThinking={aiThinking && activePhase === index}
              onClick={() => setActivePhase(index)}
              evolutionLevel={evolutionLevel}
            />
          ))}
      </AnimatePresence>

      {/* Enhanced Holographic Displays */}
      <AnimatePresence>
        {systemReady && (
          <>
            <HolographicDisplay
              position={{ x: 5, y: 5 }}
              width={35}
              height={40}
              title="智能监控"
              activePhase={activePhase}
              phaseIndex={0}
              evolutionLevel={evolutionLevel}
            />
            <HolographicDisplay
              position={{ x: 60, y: 5 }}
              width={35}
              height={40}
              title="知识融合"
              activePhase={activePhase}
              phaseIndex={1}
              evolutionLevel={evolutionLevel}
            />
            <HolographicDisplay
              position={{ x: 60, y: 55 }}
              width={35}
              height={40}
              title="智能协商"
              activePhase={activePhase}
              phaseIndex={2}
              evolutionLevel={evolutionLevel}
            />
            <HolographicDisplay
              position={{ x: 5, y: 55 }}
              width={35}
              height={40}
              title="自主进化"
              activePhase={activePhase}
              phaseIndex={3}
              evolutionLevel={evolutionLevel}
            />
          </>
        )}
      </AnimatePresence>

      {/* Ambient Evolution Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
