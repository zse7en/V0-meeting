"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Activity } from "lucide-react"

interface ProblemDetectionProps {
  isActive: boolean
}

export default function ProblemDetection({ isActive }: ProblemDetectionProps) {
  return (
    <div className="space-y-3 text-xs">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
        className="flex items-center space-x-2 text-red-400"
      >
        <AlertTriangle className="w-4 h-4" />
        <span>质量异常检测</span>
      </motion.div>

      <div className="space-y-2">
        <div className="flex justify-between text-gray-300">
          <span>不良率:</span>
          <motion.span animate={{ color: isActive ? "#ef4444" : "#6b7280" }} className="font-mono">
            5.2%
          </motion.span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>控制上限:</span>
          <span className="font-mono text-yellow-400">3.5%</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>影响数量:</span>
          <span className="font-mono text-red-400">1,240台</span>
        </div>
      </div>

      <motion.div animate={{ height: isActive ? "auto" : 0 }} className="overflow-hidden">
        <div className="bg-red-500/10 border border-red-500/20 rounded p-2 mt-2">
          <div className="flex items-center space-x-1 text-red-400 mb-1">
            <Activity className="w-3 h-3" />
            <span className="text-xs">实时监控</span>
          </div>
          <div className="text-xs text-gray-300">密封条安装异常，主要集中在前门区域</div>
        </div>
      </motion.div>
    </div>
  )
}
