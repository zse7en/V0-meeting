"use client"

import { motion } from "framer-motion"
import { Users, MessageSquare } from "lucide-react"

interface AIConsultationProps {
  isActive: boolean
}

export default function AIConsultation({ isActive }: AIConsultationProps) {
  const consultants = [
    { name: "质量顾问Q-7", status: "分析中", color: "#3b82f6" },
    { name: "生产顾问P-3", status: "建议中", color: "#10b981" },
    { name: "研发顾问R-5", status: "设计中", color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-3 text-xs">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
        className="flex items-center space-x-2 text-blue-400"
      >
        <Users className="w-4 h-4" />
        <span>AI圆桌协商</span>
      </motion.div>

      <div className="space-y-2">
        {consultants.map((consultant, index) => (
          <motion.div
            key={consultant.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center justify-between p-2 bg-gray-800/30 rounded"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: consultant.color }} />
              <span className="text-gray-300">{consultant.name}</span>
            </div>
            <span className="text-xs" style={{ color: consultant.color }}>
              {consultant.status}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div animate={{ height: isActive ? "auto" : 0 }} className="overflow-hidden">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2 mt-2">
          <div className="flex items-center space-x-1 text-blue-400 mb-1">
            <MessageSquare className="w-3 h-3" />
            <span className="text-xs">协商结果</span>
          </div>
          <div className="text-xs text-gray-300">四大根因确认，解决方案达成共识</div>
        </div>
      </motion.div>
    </div>
  )
}
