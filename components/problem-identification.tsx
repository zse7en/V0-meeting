"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, FileText, Clock, AlertCircle } from "lucide-react"

export default function ProblemIdentification() {
  const [showAlert, setShowAlert] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)

  useEffect(() => {
    const alertTimer = setTimeout(() => setShowAlert(true), 1000)
    const detailsTimer = setTimeout(() => setShowDetails(true), 3000)
    const timelineTimer = setTimeout(() => setShowTimeline(true), 5000)

    return () => {
      clearTimeout(alertTimer)
      clearTimeout(detailsTimer)
      clearTimeout(timelineTimer)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          问题识别与初步分析
        </h2>
        <div className="text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full flex items-center">
          <Clock className="inline-block mr-1 h-4 w-4" />
          检测时间: 2025-06-09 14:32
        </div>
      </div>

      {/* Alert notification */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#7F1D1D]/20 to-[#991B1B]/5 backdrop-blur-sm border border-[#F87171]/20 rounded-lg p-4 flex items-start"
        >
          <div className="bg-gradient-to-r from-[#EF4444] to-[#F87171] rounded-full p-2 mr-4">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-[#F87171]">质量异常警报</h3>
            <p className="text-sm text-[#CBD5E1]">
              系统检测到主机厂A线装配质量异常，不良率超过阈值 3.5%，当前不良率为 5.2%
            </p>
          </div>
        </motion.div>
      )}

      {/* Problem details */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <h3 className="font-medium text-[#36BFFA] mb-3 flex items-center">
              <TrendingDown className="mr-2 h-4 w-4" />
              问题概述
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  1
                </span>
                <span className="text-[#E2E8F0]">主机厂A线装配车间发现车门密封条安装不良</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  2
                </span>
                <span className="text-[#E2E8F0]">客户报告雨天行驶时有水渗入车内现象</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  3
                </span>
                <span className="text-[#E2E8F0]">问题主要集中在前门密封，影响客户满意度评分</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <h3 className="font-medium text-[#36BFFA] mb-3 flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              初步数据
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 rounded-md bg-[#1E2334]/50">
                <span className="text-[#94A3B8]">影响车型:</span>
                <span className="text-white">A系列轿车 (2025款)</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-md bg-[#1E2334]/50">
                <span className="text-[#94A3B8]">问题批次:</span>
                <span className="text-white">2025年5月15日-6月8日生产</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-md bg-[#1E2334]/50">
                <span className="text-[#94A3B8]">影响数量:</span>
                <span className="text-[#F87171] font-medium">约 1,240 台</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-md bg-[#1E2334]/50">
                <span className="text-[#94A3B8]">客户投诉:</span>
                <span className="text-[#FBBF24] font-medium">32 起</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Timeline */}
      {showTimeline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <h3 className="font-medium text-[#36BFFA] mb-4">问题发现时间线</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5CF6] to-[#F43F5E]" />

            <div className="relative pl-10 pb-6">
              <div className="absolute left-0 rounded-full h-8 w-8 bg-[#8B5CF6] flex items-center justify-center">
                <span className="text-xs text-white">5/20</span>
              </div>
              <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
                <p className="text-sm text-[#E2E8F0]">质检部门首次发现密封条安装异常，记录在日常质检报告中</p>
              </div>
            </div>

            <div className="relative pl-10 pb-6">
              <div className="absolute left-0 rounded-full h-8 w-8 bg-[#A855F7] flex items-center justify-center">
                <span className="text-xs text-white">5/28</span>
              </div>
              <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
                <p className="text-sm text-[#E2E8F0]">收到首例客户投诉，报告雨天行驶时驾驶室进水</p>
              </div>
            </div>

            <div className="relative pl-10 pb-6">
              <div className="absolute left-0 rounded-full h-8 w-8 bg-[#EC4899] flex items-center justify-center">
                <span className="text-xs text-white">6/05</span>
              </div>
              <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
                <p className="text-sm text-[#E2E8F0]">客户投诉数量增加至25起，客户满意度指标下降</p>
              </div>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 rounded-full h-8 w-8 bg-[#F43F5E] flex items-center justify-center">
                <span className="text-xs text-white">6/09</span>
              </div>
              <div className="bg-gradient-to-r from-[#7F1D1D]/20 to-[#991B1B]/5 backdrop-blur-sm border border-[#F87171]/20 rounded-lg p-3">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-[#F87171] mr-2" />
                  <p className="text-sm text-[#E2E8F0]">质量管理系统触发自动警报，启动AI分析流程</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
