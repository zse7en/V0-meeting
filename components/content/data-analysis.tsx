"use client"

import { motion } from "framer-motion"
import { BarChart3, PieChart, TrendingUp } from "lucide-react"

interface DataAnalysisProps {
  isActive: boolean
}

export default function DataAnalysis({ isActive }: DataAnalysisProps) {
  return (
    <div className="space-y-3 text-xs">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
        className="flex items-center space-x-2 text-cyan-400"
      >
        <BarChart3 className="w-4 h-4" />
        <span>多维度分析</span>
      </motion.div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded p-2">
          <div className="flex items-center space-x-1 text-cyan-400 mb-1">
            <PieChart className="w-3 h-3" />
            <span className="text-xs">帕累托</span>
          </div>
          <div className="text-xs text-gray-300">
            变形: 40.8%
            <br />
            偏移: 27.2%
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2">
          <div className="flex items-center space-x-1 text-blue-400 mb-1">
            <TrendingUp className="w-3 h-3" />
            <span className="text-xs">SPC</span>
          </div>
          <div className="text-xs text-gray-300">
            失控点: 8个
            <br />
            趋势: 上升
          </div>
        </div>
      </div>

      <motion.div animate={{ height: isActive ? "auto" : 0 }} className="overflow-hidden">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded p-2 mt-2">
          <div className="text-xs text-purple-400 mb-1">根因分析</div>
          <div className="text-xs text-gray-300">材料硬度增加15%，工装不适配</div>
        </div>
      </motion.div>
    </div>
  )
}
