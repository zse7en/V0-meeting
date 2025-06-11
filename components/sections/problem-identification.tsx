"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Clock, ChevronRight } from "lucide-react"

export default function ProblemIdentification() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAll(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const timelineEvents = [
    {
      date: "5/15",
      title: "供应商材料变更",
      description: "EPDM密封条硬度由65±5提升至75±3 Shore A。",
      tagColor: "tag-purple",
    },
    {
      date: "5/20",
      title: "SPC首次预警",
      description: "安装扭矩X-bar图出现漂移，Cpk降至1.12。",
      tagColor: "tag-yellow",
    },
    {
      date: "5/28",
      title: "首例客户投诉",
      description: "车辆在模拟淋雨测试中渗水，密封性能下降40%。",
      tagColor: "tag-yellow",
    },
    {
      date: "6/09",
      title: "系统自动警报",
      description: "MES检测到连续7点超UCL (WECO规则#2)，启动8D流程。",
      tagColor: "tag-red",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          遵循IATF
          16949标准，启动8D问题解决流程。当前阶段：D1（建立团队）与D2（问题描述），旨在全面、准确地定义问题边界。
        </p>
      </div>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-destructive/10 border border-destructive/20 rounded-lg p-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-destructive/20 flex items-center justify-center text-destructive">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-destructive mb-0.5">SPC控制图严重失控警报</h3>
              <p className="text-card-foreground/80 text-sm leading-relaxed">
                A线门框密封条装配工序X-bar & R控制图检测到系统性偏移，过程能力指数(Cpk)已降至0.67，PPM估算为5200。
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground">问题描述 (4W1H)</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-3 text-sm">
              {[
                { title: "What (现象)", description: "前门密封条在装配后出现局部变形、错位，导致密封压力不均。" },
                { title: "Where (位置)", description: "主要发生于A线OP30工位，集中于前门左侧A柱与车顶连接处。" },
                { title: "When (时间)", description: "自5月15日新批次材料上线后，缺陷率呈指数级上升趋势。" },
                {
                  title: "How Much (影响)",
                  description: "影响1,240台车，32起高优先级客户投诉，预估保修与召回损失135万元。",
                },
              ].map((item) => (
                <div key={item.title} className="p-2 bg-card/50 rounded-md">
                  <h4 className="font-medium text-secondary-foreground text-xs">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground">问题演进时间轴</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-card/50 rounded-md">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${event.tagColor}-bg ${event.tagColor}-text`}
                  >
                    {event.date}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-secondary-foreground">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
