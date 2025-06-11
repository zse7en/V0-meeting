"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Brain } from "lucide-react"

type Step = {
  id: number
  name: string
  icon: React.ReactNode
  component: React.ReactNode
}

type NavigationPanelProps = {
  steps: Step[]
  activeStep: number
  completedSteps: number[]
  onStepChange: (stepId: number) => void
}

export default function NavigationPanel({ steps, activeStep, completedSteps, onStepChange }: NavigationPanelProps) {
  return (
    <nav className="w-full md:w-64 bg-[#0A0C10]/80 backdrop-blur-xl border-r border-[#1E2334] p-4 relative z-10">
      <div className="space-y-1">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepChange(step.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
              activeStep === step.id
                ? "bg-gradient-to-r from-[#1E2334]/80 to-[#1E2334]/20 text-white"
                : "hover:bg-[#1E2334]/50 text-[#94A3B8]"
            }`}
          >
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                activeStep === step.id
                  ? "bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6]"
                  : completedSteps.includes(step.id)
                    ? "bg-[#10B981]"
                    : "bg-[#1E2334]"
              }`}
            >
              {completedSteps.includes(step.id) ? <CheckCircle className="w-4 h-4 text-white" /> : step.icon}
            </div>
            <span className="text-sm font-medium">{step.name}</span>
            {activeStep === step.id && (
              <motion.div layoutId="activeIndicator" className="ml-auto">
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-[#1E2334]">
        <div className="text-xs text-[#64748B] mb-2">项目信息</div>
        <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
          <div className="flex justify-between mb-2">
            <span className="text-[#94A3B8] text-xs">项目编号:</span>
            <span className="text-[#36BFFA] text-xs font-medium">QA-2025-0610</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-[#94A3B8] text-xs">生产线:</span>
            <span className="text-white text-xs">主机厂A线</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#94A3B8] text-xs">优先级:</span>
            <span className="text-[#F43F5E] text-xs font-medium">高</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-lg p-3 border border-[#1E2334] flex items-center">
          <div className="mr-3 relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-white">小瑞AI驱动质量分析</div>
            <div className="text-[#64748B] text-xs">实时运行中</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
