"use client"

import { motion } from "framer-motion"
import { Lightbulb, CheckCircle } from "lucide-react"

interface SolutionGenerationProps {
  isActive: boolean
}

export default function SolutionGeneration({ isActive }: SolutionGenerationProps) {
  const solutions = [
    { name: "工装改进", progress: 100, color: "#10b981" },
    { name: "标准更新", progress: 85, color: "#3b82f6" },
    { name: "培训计划", progress: 70, color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-3 text-xs">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
        className="flex items-center space-x-2 text-green-400"
      >
        <Lightbulb className="w-4 h-4" />
        <span>方案生成</span>
      </motion.div>

      <div className="space-y-2">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{solution.name}</span>
              <span className="text-xs" style={{ color: solution.color }}>
                {solution.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isActive ? `${solution.progress}%` : "0%" }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="h-1 rounded-full"
                style={{ backgroundColor: solution.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div animate={{ height: isActive ? "auto" : 0 }} className="overflow-hidden">
        <div className="bg-green-500/10 border border-green-500/20 rounded p-2 mt-2">
          <div className="flex items-center space-x-1 text-green-400 mb-1">
            <CheckCircle className="w-3 h-3" />
            <span className="text-xs">预期效果</span>
          </div>
          <div className="text-xs text-gray-300">不良率降至3%以下，挽回损失¥135万</div>
        </div>
      </motion.div>
    </div>
  )
}
