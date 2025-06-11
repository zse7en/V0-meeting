"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react"

export default function DataAnalysis() {
  const [showCharts, setShowCharts] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)

  useEffect(() => {
    const chartsTimer = setTimeout(() => setShowCharts(true), 1000)
    const analysisTimer = setTimeout(() => setShowAnalysis(true), 3000)

    return () => {
      clearTimeout(chartsTimer)
      clearTimeout(analysisTimer)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          数据分析与根因识别
        </h2>
        <div className="text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full flex items-center">
          <Activity className="inline-block mr-1 h-4 w-4" />
          小瑞AI分析中
        </div>
      </div>

      {/* Analysis Tools */}
      {showCharts && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <div className="flex items-center mb-3">
              <BarChart3 className="h-5 w-5 text-[#36BFFA] mr-2" />
              <h3 className="font-medium text-[#36BFFA]">帕累托分析</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">密封条变形:</span>
                <span className="text-[#F87171]">40.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">安装偏移:</span>
                <span className="text-[#FBBF24]">27.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">其他:</span>
                <span className="text-[#10B981]">32.0%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <div className="flex items-center mb-3">
              <TrendingUp className="h-5 w-5 text-[#8B5CF6] mr-2" />
              <h3 className="font-medium text-[#8B5CF6]">SPC控制图</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">失控点:</span>
                <span className="text-[#F87171]">8个</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">趋势:</span>
                <span className="text-[#F87171]">上升</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Cpk值:</span>
                <span className="text-[#FBBF24]">0.85</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <div className="flex items-center mb-3">
              <PieChart className="h-5 w-5 text-[#10B981] mr-2" />
              <h3 className="font-medium text-[#10B981]">位置分布</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">前门左侧:</span>
                <span className="text-[#F87171]">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">前门右侧:</span>
                <span className="text-[#FBBF24]">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">后门:</span>
                <span className="text-[#10B981]">20%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* AI Analysis Results */}
      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-lg p-6 border border-[#1E2334]"
        >
          <h3 className="font-medium text-[#36BFFA] mb-4">小瑞AI根因分析结果</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">主要根因</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-[#F87171] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    1
                  </span>
                  <span className="text-[#E2E8F0]">密封条材料硬度增加15%，工装压力不适配</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FBBF24] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    2
                  </span>
                  <span className="text-[#E2E8F0]">操作人员未接受新材料安装培训</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#8B5CF6] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    3
                  </span>
                  <span className="text-[#E2E8F0]">质量检验标准未随材料变更而更新</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">关联性分析</h4>
              <div className="space-y-3">
                <div className="bg-[#1E2334]/50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#94A3B8] text-sm">材料变更关联度:</span>
                    <span className="text-[#F87171] font-medium">95%</span>
                  </div>
                  <div className="w-full bg-[#374151] rounded-full h-2">
                    <div className="bg-[#F87171] h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="bg-[#1E2334]/50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#94A3B8] text-sm">培训缺失关联度:</span>
                    <span className="text-[#FBBF24] font-medium">78%</span>
                  </div>
                  <div className="w-full bg-[#374151] rounded-full h-2">
                    <div className="bg-[#FBBF24] h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
