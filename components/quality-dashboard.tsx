"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProblemIdentification from "./problem-identification"
import DataAnalysis from "./data-analysis"
import VirtualMeeting from "./virtual-meeting"
import SolutionPresentation from "./solution-presentation"
import NavigationPanel from "./navigation-panel"
import { BarChart3, Users, Lightbulb, Brain } from "lucide-react"
import BackgroundGrid from "./ui/background-grid"

export default function QualityDashboard() {
  const [activeStep, setActiveStep] = useState(0)
  const [autoProgress, setAutoProgress] = useState(true)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    { id: 0, name: "问题识别", icon: <BarChart3 className="w-5 h-5" />, component: <ProblemIdentification /> },
    { id: 1, name: "数据分析", icon: <BarChart3 className="w-5 h-5" />, component: <DataAnalysis /> },
    { id: 2, name: "虚拟会议", icon: <Users className="w-5 h-5" />, component: <VirtualMeeting /> },
    { id: 3, name: "解决方案", icon: <Lightbulb className="w-5 h-5" />, component: <SolutionPresentation /> },
  ]

  useEffect(() => {
    if (!autoProgress) return

    const timer = setTimeout(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1)
        setCompletedSteps((prev) => [...prev, activeStep])
      } else {
        setAutoProgress(false)
      }
    }, 20000) // 20 seconds per step for demo

    return () => clearTimeout(timer)
  }, [activeStep, autoProgress, steps.length])

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId)
    setAutoProgress(false)
  }

  return (
    <div className="flex flex-col h-screen relative">
      {/* Background elements */}
      <BackgroundGrid />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1E2334] bg-[#0A0C10]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <div className="relative mr-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6]">
                      AI
                    </span>
                    <span className="text-white">质量分析平台</span>
                  </h1>
                  <p className="text-[#64748B] text-sm">主机厂A线质量问题智能分析系统</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1 bg-[#1E2334]/50 px-3 py-1.5 rounded-full text-xs text-[#94A3B8]">
                <span className="h-2 w-2 rounded-full bg-[#10B981]"></span>
                <span>系统状态: 正常</span>
              </div>
              <div className="bg-[#1E2334]/50 px-3 py-1.5 rounded-full text-xs text-[#94A3B8] flex items-center">
                <span className="mr-1">ID:</span>
                <span className="text-[#36BFFA]">QA-2025-0610</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden relative z-10">
        {/* Navigation sidebar */}
        <NavigationPanel
          steps={steps}
          activeStep={activeStep}
          completedSteps={completedSteps}
          onStepChange={handleStepChange}
        />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-[#0A0C10] p-4">
          <div className="container mx-auto">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative backdrop-blur-md rounded-xl shadow-2xl p-4 md:p-6 border border-[#1E2334] bg-[#0F1118]/40"
            >
              {steps[activeStep].component}
            </motion.div>
          </div>
        </main>
      </div>

      {/* Progress indicator */}
      <div className="relative z-10 border-t border-[#1E2334] bg-[#0A0C10]/80 backdrop-blur-xl p-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-1">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`h-1 w-16 rounded-full transition-all duration-500 ${
                  index === activeStep
                    ? "bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6]"
                    : completedSteps.includes(index)
                      ? "bg-[#10B981]"
                      : "bg-[#1E2334]"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-[#64748B] flex items-center">
            {autoProgress && (
              <>
                <div className="mr-2 h-2 w-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
                自动演示中...
              </>
            )}
            {!autoProgress && <span>手动模式</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
