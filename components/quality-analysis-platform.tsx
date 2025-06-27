"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Brain, Activity, ChevronUp } from "lucide-react"
import ProblemIdentification from "./sections/problem-identification"
import DataAnalysis from "./sections/data-analysis"
import VirtualMeeting from "./sections/virtual-meeting"
import SolutionPresentation from "./sections/solution-presentation"

export default function QualityAnalysisPlatform() {
  const [activeSection, setActiveSection] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const sections = [
    { id: "problem", name: "问题识别", component: <ProblemIdentification /> },
    { id: "analysis", name: "数据分析", component: <DataAnalysis /> },
    { id: "meeting", name: "AI协商", component: <VirtualMeeting /> },
    { id: "solution", name: "解决方案", component: <SolutionPresentation /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      const scrollPosition = window.scrollY + 200

      // Show back to top button
      setShowBackToTop(window.scrollY > 500)

      // Update active section based on scroll position
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (index: number) => {
    const ref = sectionRefs.current[index]
    if (ref && typeof window !== "undefined") {
      ref.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const currentSection = sections[activeSection] || sections[0]

  return (
    <div className="relative w-full">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    瑞元 · 数智质量分析平台
                  </span>
                </h1>
                <p className="text-sm text-slate-500">主机厂A线质量问题智能分析系统 - 小瑞AI助手</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>

            {/* Status Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg text-sm">
                <Activity className="w-4 h-4 text-green-500" />
                <span className="text-slate-400">系统运行正常</span>
              </div>

              <div className="bg-slate-800/50 px-3 py-1.5 rounded-lg text-sm">
                <span className="text-slate-500">案例ID: </span>
                <span className="text-blue-400 font-mono">QA-2025-0610</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-20 left-4 right-4 z-40 bg-slate-800/95 backdrop-blur-xl rounded-lg border border-slate-700 p-2">
        <div className="flex gap-1 overflow-x-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-24 md:pt-20 w-full">
        <div className="w-full px-6">
          {/* Platform Overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">小瑞AI驱动的质量问题智能分析</h2>
            <p className="text-lg text-slate-400 max-w-4xl mx-auto">
              运用小瑞AI先进的人工智能技术，对主机厂A线密封条安装质量问题进行全方位分析，
              从问题识别到解决方案生成，提供完整的智能化质量管理解决方案。
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="mb-8 bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">分析进度</h3>
              <span className="text-sm text-slate-500">当前阶段: {currentSection.name}</span>
            </div>
            <div className="flex gap-2">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                    index <= activeSection ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-slate-500">
              {sections.map((section, index) => (
                <span key={section.id} className={index <= activeSection ? "text-blue-400" : ""}>
                  {section.name}
                </span>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                ref={(el) => {
                  if (sectionRefs.current) {
                    sectionRefs.current[index] = el
                  }
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="scroll-mt-24"
                id={section.id}
              >
                {/* Section Divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="h-px bg-gradient-to-r from-blue-500 to-purple-600 w-20"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.name}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-600 to-transparent"></div>
                </div>

                {/* Section Content */}
                <div className="bg-gray-900/30 border border-slate-700 rounded-2xl p-8">{section.component}</div>
              </motion.section>
            ))}
          </div>

          {/* Summary Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-12"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">小瑞AI分析完成</h3>
                <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                  通过小瑞AI驱动的全流程分析，我们成功识别了密封条安装质量问题的根本原因，
                  并生成了包含技术改进、管理优化和实施计划的综合解决方案。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-500 mb-1">5.2% → 3%</div>
                    <div className="text-sm text-slate-400">不良率改善</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">30天</div>
                    <div className="text-sm text-slate-400">实施周期</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-400 mb-1">135万</div>
                    <div className="text-sm text-slate-400">预计挽回损失</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">96.8%</div>
                    <div className="text-sm text-slate-400">方案置信度</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-slate-700 py-8">
        <div className="w-full px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">瑞元 · 数智质量分析平台</span>
          </div>
          <p className="text-slate-500 text-sm">© 2025 AI质量分析平台. 基于小瑞AI技术的瑞元数智质量管理解决方案.</p>
        </div>
      </footer>
    </div>
  )
}
