"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  CheckCircle,
  Users,
  ChevronRight,
  Bot,
  Factory,
  TestTube2,
  Package,
  Wrench,
  Cog,
} from "lucide-react"

interface Message {
  id: number
  speaker: string
  message: string
  type: "discussion" | "proposal" | "concern" | "agreement"
  icon: React.ElementType
}

export default function VirtualMeeting() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [showSummary, setShowSummary] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const participants = [
    { name: "质量AI", icon: Bot },
    { name: "生产AI", icon: Factory },
    { name: "研发AI", icon: TestTube2 },
    { name: "采购AI", icon: Package },
    { name: "设备AI", icon: Cog },
    { name: "工艺AI", icon: Wrench },
  ]

  const allMessages: Message[] = [
    { id: 1, speaker: "质量AI", message: "SPC失控，PPM达5200，建议启动根因分析。", type: "concern", icon: Bot },
    {
      id: 2,
      speaker: "采购AI",
      message: "确认：供应商于5/15切换材料配方(EPDM-K75)，硬度增15%。ECN已归档。",
      type: "discussion",
      icon: Package,
    },
    {
      id: 3,
      speaker: "生产AI",
      message: "数据吻合：OP30工位操作工平均用力增32%，节拍时间延长18%。",
      type: "discussion",
      icon: Factory,
    },
    {
      id: 4,
      speaker: "设备AI",
      message: "压装工装FX-A2压力传感器反馈压力在正常范围，但电机电流过载报警增加。",
      type: "concern",
      icon: Cog,
    },
    {
      id: 5,
      speaker: "研发AI",
      message: "建议重设工装，集成自适应压力控制系统，补偿材料硬度变化。",
      type: "proposal",
      icon: TestTube2,
    },
    {
      id: 6,
      speaker: "工艺AI",
      message: "建议更新SOP，重标工艺窗口，并为操作工制定VR培训模块。",
      type: "proposal",
      icon: Wrench,
    },
    {
      id: 7,
      speaker: "质量AI",
      message: "同意。同时更新FMEA，将材料硬度列为关键输入，并增加入货检验。",
      type: "agreement",
      icon: Bot,
    },
  ]

  useEffect(() => {
    if (currentMessageIndex < allMessages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, allMessages[currentMessageIndex]])
        setCurrentMessageIndex((prev) => prev + 1)
      }, 900)
      return () => clearTimeout(timer)
    } else if (currentMessageIndex === allMessages.length && !showSummary) {
      const timer = setTimeout(() => setShowSummary(true), 700)
      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, showSummary])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [displayedMessages])

  const getTagStyles = (type: Message["type"]) => {
    if (type === "proposal") return "bg-tag-purple-bg text-tag-purple-text"
    if (type === "concern") return "bg-tag-red-bg text-tag-red-text"
    if (type === "agreement") return "bg-tag-green-bg text-tag-green-text"
    return "bg-tag-gray-bg text-tag-gray-text"
  }

  const allMessagesRef = useRef(allMessages)

  useEffect(() => {
    allMessagesRef.current = allMessages
  }, [allMessages])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          小瑞AI顾问团进行实时虚拟会议，跨领域协作，通过多智能体协商（Multi-Agent
          Negotiation）快速定位问题并形成解决方案共识。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-1 bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-card-foreground">AI顾问团</h3>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {participants.map((p) => (
              <div key={p.name} className="text-center p-2 bg-card/50 rounded-md">
                <p.icon className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                <p className="text-xs font-medium text-secondary-foreground">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-card-foreground">实时协商讨论</h3>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-2.5 h-72 overflow-y-auto pr-2">
            {displayedMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2"
              >
                <div className="p-1 bg-secondary rounded-full mt-0.5">
                  <msg.icon className="w-3 h-3 text-card-foreground" />
                </div>
                <div className="flex-1 bg-card/50 p-1.5 rounded-md">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="font-medium text-xs text-secondary-foreground">{msg.speaker}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${getTagStyles(msg.type)}`}>
                      {msg.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{msg.message}</p>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {showSummary && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-tag-green-bg border border-tag-green-text/30 rounded-lg p-5"
        >
          <div className="flex items-center mb-3">
            <CheckCircle className="h-5 w-5 text-tag-green-text mr-2" />
            <h3 className="font-semibold text-tag-green-text text-base">AI圆桌会议共识与决策</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-medium text-tag-green-text/90 mb-1">根因分析共识:</h4>
              <ul className="list-disc list-inside space-y-0.5 text-tag-green-text/80">
                <li>主要原因：材料特性变化（硬度提升15%）</li>
                <li>次要原因：设备参数不匹配，SOP未更新</li>
                <li>根本原因：供应商变更管理流程存在漏洞</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-tag-green-text/90 mb-1">集成解决方案方向:</h4>
              <ul className="list-disc list-inside space-y-0.5 text-tag-green-text/80">
                <li>技术对策：开发智能工装，集成自适应压力控制</li>
                <li>管理对策：强化SQA流程，实施AI驱动的APQP</li>
                <li>人员对策：开发VR虚拟训练及AR实时指导系统</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
