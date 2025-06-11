"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Brain, ChevronUp, Settings, Bell, UserCircle, Plus } from "lucide-react"
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
    { id: "meeting", name: "AI圆桌会议", component: <VirtualMeeting /> },
    { id: "solution", name: "解决方案", component: <SolutionPresentation /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return
      const headerHeight = 80
      const scrollPosition = window.scrollY + headerHeight + 40 // Increased offset
      setShowBackToTop(window.scrollY > 400)

      let currentSectionIndex = -1
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const ref = sectionRefs.current[i]
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSectionIndex = i
        } else {
          break
        }
      }
      if (currentSectionIndex !== -1 && currentSectionIndex !== activeSection) {
        setActiveSection(currentSectionIndex)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections.length, activeSection])

  const scrollToSection = (index: number) => {
    const ref = sectionRefs.current[index]
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative w-full bg-background min-h-screen text-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-lg py-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-base font-semibold tracking-tight">瑞元 · 数智</h1>
            </div>
            <nav className="hidden md:flex items-center gap-1 bg-card border border-border rounded-full p-1 shadow-sm">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    activeSection === index
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-card text-muted-foreground hover:text-foreground">
                <Settings className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-card text-muted-foreground hover:text-foreground relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 block h-1.5 w-1.5 rounded-full bg-destructive ring-1 ring-background" />
              </button>
              <div className="flex items-center gap-2 p-1 pr-2 rounded-full bg-card border border-border">
                <UserCircle className="w-6 h-6 text-muted-foreground" />
                <span className="text-xs font-medium">0x70cA...F2B7</span>
              </div>
              <button className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        <main>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">AI驱动的质量问题智能分析</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              运用小瑞AI先进的人工智能技术，对主机厂A线密封条安装质量问题进行全方位分析，提供完整的智能化质量管理解决方案。
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="scroll-mt-28"
                id={section.id}
              >
                <div className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-card shadow-inner-highlight">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-primary font-bold text-lg">
                      {index + 1}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-card-foreground">{section.name}</h2>
                  </div>
                  {section.component}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-card shadow-inner-highlight">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3">小瑞AI分析完成</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
                  通过小瑞AI驱动的全流程分析，我们成功识别了根本原因，并生成了包含技术改进、管理优化和实施计划的综合解决方案。
                </p>
              </div>
            </div>
          </motion.section>
        </main>

        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground shadow-md hover:bg-secondary transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}

        <footer className="text-center py-12 mt-8">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} 瑞元 · 数智质量分析平台</p>
        </footer>
      </div>
    </div>
  )
}
