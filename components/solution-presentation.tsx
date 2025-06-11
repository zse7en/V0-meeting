"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Target, Clock, DollarSign, TrendingUp, CheckCircle } from "lucide-react"

export default function SolutionPresentation() {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showROI, setShowROI] = useState(false)

  useEffect(() => {
    const solutionsTimer = setTimeout(() => setShowSolutions(true), 1000)
    const roiTimer = setTimeout(() => setShowROI(true), 3000)

    return () => {
      clearTimeout(solutionsTimer)
      clearTimeout(roiTimer)
    }
  }, [])

  const solutions = [
    {
      title: "工装改进",
      description: "设计新型压装工具，适应硬度变化",
      progress: 100,
      timeline: "14天",
      cost: "28万元",
    },
    {
      title: "培训升级",
      description: "开发VR培训系统，提升操作技能",
      progress: 85,
      timeline: "7天",
      cost: "8万元",
    },
    {
      title: "标准更新",
      description: "修订质检标准，建立预警机制",
      progress: 70,
      timeline: "5天",
      cost: "3万元",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          小瑞AI解决方案
        </h2>
        <div className="text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full flex items-center">
          <Lightbulb className="inline-block mr-1 h-4 w-4" />
          方案生成完成
        </div>
      </div>

      {/* Solution Overview */}
      {showSolutions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-lg p-6 border border-[#1E2334]"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <Target className="h-8 w-8 text-[#10B981] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#10B981]">3%</div>
              <div className="text-sm text-[#94A3B8]">目标不良率</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-[#36BFFA] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#36BFFA]">30天</div>
              <div className="text-sm text-[#94A3B8]">实施周期</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-[#FBBF24] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#FBBF24]">135万</div>
              <div className="text-sm text-[#94A3B8]">预计挽回</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-[#8B5CF6] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#8B5CF6]">96.8%</div>
              <div className="text-sm text-[#94A3B8]">成功概率</div>
            </div>
          </div>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1E2334]/50 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-white">{solution.title}</h3>
                    <p className="text-sm text-[#94A3B8]">{solution.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#10B981] font-medium">{solution.progress}%</div>
                    <div className="text-xs text-[#64748B]">{solution.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="w-full bg-[#374151] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${solution.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="bg-[#10B981] h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm text-[#FBBF24] font-medium">{solution.cost}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ROI Analysis */}
      {showROI && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-[#10B981]/20 to-[#059669]/10 border border-[#10B981]/30 rounded-lg p-6"
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-[#10B981] mr-2" />
            <h3 className="font-medium text-[#10B981] text-lg">投资回报分析</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-2">3个月</div>
              <div className="text-sm text-[#94A3B8]">投资回报周期</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-2">552%</div>
              <div className="text-sm text-[#94A3B8]">年度ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-2">480万</div>
              <div className="text-sm text-[#94A3B8]">年度节约</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#0F1118]/50 rounded-lg">
            <p className="text-sm text-[#E2E8F0] text-center">
              <span className="font-medium text-[#10B981]">小瑞AI建议：</span>
              立即启动技术改进方案，预计3个月内实现投资回报，显著提升产品质量和客户满意度。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
