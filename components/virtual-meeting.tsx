"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Users, Brain, Cpu, Zap, Database, Settings, Layers } from "lucide-react"

export default function VirtualMeeting() {
  const [messages, setMessages] = useState<any[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const allMessages = [
    {
      id: 1,
      avatar: <Brain className="w-5 h-5 text-white" />,
      name: "质量顾问 Q-7",
      role: "质量部",
      message: "根据数据分析，主机厂A线密封条安装不良率达5.2%，远超3.5%控制上限。主要问题集中在前门区域。",
      color: "bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]",
    },
    {
      id: 2,
      avatar: <Cpu className="w-5 h-5 text-white" />,
      name: "生产顾问 P-3",
      role: "生产部",
      message: "数据显示不良率上升与5月10日新供应商密封条材料变更时间高度吻合。",
      color: "bg-gradient-to-r from-[#10B981] to-[#34D399]",
    },
    {
      id: 3,
      avatar: <Zap className="w-5 h-5 text-white" />,
      name: "研发顾问 R-5",
      role: "研发部",
      message: "材料分析显示新密封条硬度增加15%，现有工装和安装方法不适配新材料特性。",
      color: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]",
    },
    {
      id: 4,
      avatar: <Database className="w-5 h-5 text-white" />,
      name: "采购顾问 S-2",
      role: "采购部",
      message: "供应商变更材料配方提高耐候性，但未提供完整特性变化说明，导致生产适配不足。",
      color: "bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]",
    },
    {
      id: 5,
      avatar: <Settings className="w-5 h-5 text-white" />,
      name: "装配顾问 A-9",
      role: "装配车间",
      message: "操作工反馈新密封条安装困难，需更大力气才能装到位。工位布局也不利于前门左侧安装。",
      color: "bg-gradient-to-r from-[#EF4444] to-[#F87171]",
    },
    {
      id: 6,
      avatar: <Layers className="w-5 h-5 text-white" />,
      name: "中央分析引擎",
      role: "AI核心",
      message: "综合分析显示四个关键根因：1.材料硬度变化；2.工装不适配；3.操作人员未培训；4.质检标准未更新。",
      color: "bg-gradient-to-r from-[#3245FF] to-[#BC52EE]",
      isCore: true,
    },
    {
      id: 7,
      avatar: <Brain className="w-5 h-5 text-white" />,
      name: "质量顾问 Q-7",
      role: "质量部",
      message: "建议立即更新质检标准，并与供应商建立材料变更通知机制。",
      color: "bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]",
    },
    {
      id: 8,
      avatar: <Zap className="w-5 h-5 text-white" />,
      name: "研发顾问 R-5",
      role: "研发部",
      message: "我们需要重新设计工装，增加弹性缓冲结构适应新材料硬度。",
      color: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]",
    },
    {
      id: 9,
      avatar: <Cpu className="w-5 h-5 text-white" />,
      name: "生产顾问 P-3",
      role: "生产部",
      message: "同时应优化前门左侧工位布局，改善操作姿势，减轻工人疲劳。",
      color: "bg-gradient-to-r from-[#10B981] to-[#34D399]",
    },
    {
      id: 10,
      avatar: <Layers className="w-5 h-5 text-white" />,
      name: "中央分析引擎",
      role: "AI核心",
      message: "已生成完整解决方案，包括技术改进、管理优化和标准更新。预计实施后可将不良率降至3%以下。",
      color: "bg-gradient-to-r from-[#3245FF] to-[#BC52EE]",
      isCore: true,
    },
  ]

  useEffect(() => {
    if (currentMessageIndex < allMessages.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, allMessages[currentMessageIndex]])
        setCurrentMessageIndex((prev) => prev + 1)
      }, 1500) // Faster message display (1.5 seconds)

      return () => clearTimeout(timer)
    } else if (currentMessageIndex === allMessages.length && !showSummary) {
      const timer = setTimeout(() => {
        setShowSummary(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, allMessages.length, showSummary])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          AI顾问圆桌会议
        </h2>
        <div className="flex items-center space-x-2 text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full">
          <Users className="h-4 w-4" />
          <span>5个部门AI顾问</span>
        </div>
      </div>

      {/* Round table visualization */}
      <div className="relative h-32 mb-4 hidden md:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-[#1E2334] bg-[#1E2334]/30 backdrop-blur-md flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center shadow-glow-purple">
              <Layers className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Participants around the table */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center shadow-glow-blue">
              <Brain className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute top-1/4 right-0 translate-x-1/2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center shadow-glow-purple">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-1/4 right-0 translate-x-1/2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] flex items-center justify-center shadow-glow-yellow">
              <Database className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#EF4444] to-[#F87171] flex items-center justify-center shadow-glow-red">
              <Settings className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-1/4 left-0 -translate-x-1/2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399] flex items-center justify-center shadow-glow-green">
              <Cpu className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <line x1="50%" y1="0" x2="50%" y2="50%" stroke="rgba(54, 191, 250, 0.3)" strokeWidth="1" />
            <line x1="100%" y1="25%" x2="50%" y2="50%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="100%" y1="75%" x2="50%" y2="50%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" />
            <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" />
            <line x1="0" y1="75%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Meeting interface */}
      <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-[#1E2334]">
        {/* Header */}
        <div className="bg-[#0A0C10]/80 backdrop-blur-xl p-3 border-b border-[#1E2334] flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-[#EF4444] shadow-glow-red"></div>
            <div className="h-3 w-3 rounded-full bg-[#FBBF24] shadow-glow-yellow"></div>
            <div className="h-3 w-3 rounded-full bg-[#10B981] shadow-glow-green"></div>
          </div>
          <div className="text-sm font-medium text-white">质量问题分析会议</div>
          <div className="text-xs text-[#94A3B8] bg-[#1E2334]/50 px-2 py-1 rounded-full">会话ID: QA-2025-0610</div>
        </div>

        {/* Messages area */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-3"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full ${msg.color} flex items-center justify-center text-xl shadow-lg ${
                  msg.isCore ? "ring-2 ring-white ring-opacity-50" : ""
                }`}
              >
                {msg.avatar}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <span className="font-medium text-white">{msg.name}</span>
                  <span className="ml-2 text-xs text-[#94A3B8] bg-[#1E2334]/50 px-2 py-0.5 rounded-full">
                    {msg.role}
                  </span>
                </div>
                <div
                  className={`mt-1 text-sm rounded-lg p-3 ${
                    msg.isCore
                      ? "bg-gradient-to-r from-[#3245FF]/20 to-[#BC52EE]/20 border border-[#8B5CF6]/30"
                      : "bg-[#1E2334]/50 backdrop-blur-md"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            </motion.div>
          ))}

          {currentMessageIndex < allMessages.length && (
            <div className="flex justify-center py-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-[#36BFFA] animate-bounce"></div>
                <div
                  className="h-2 w-2 rounded-full bg-[#36BFFA] animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-[#36BFFA] animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="bg-[#0A0C10]/80 backdrop-blur-xl p-3 border-t border-[#1E2334]">
          <div className="flex items-center bg-[#1E2334]/50 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="输入指令..."
              className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder-[#64748B]"
              disabled
            />
            <button className="text-[#36BFFA] ml-2" disabled>
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Meeting summary */}
      {showSummary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 mt-6 border border-[#1E2334]"
        >
          <div className="flex items-center mb-3">
            <div className="relative mr-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center shadow-glow-purple">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
              </div>
            </div>
            <h3 className="font-medium text-[#36BFFA]">会议结论</h3>
          </div>

          <div className="space-y-4 pl-11">
            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <h4 className="font-medium text-sm mb-2 text-[#10B981]">根因确认</h4>
              <ul className="text-sm space-y-1 text-[#E2E8F0]">
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  密封条材料硬度增加15%，现有工装不适配
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  供应商变更未充分沟通，操作人员未接受培训
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  安装标准未随材料变更而更新
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  工位布局影响操作姿势，前门左侧问题最严重
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#3245FF]/20 to-[#BC52EE]/10 backdrop-blur-md border border-[#8B5CF6]/30 rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2 text-[#8B5CF6]">解决方向</h4>
              <div className="space-y-2 text-sm text-[#E2E8F0]">
                <p>1. 技术改进：重新设计工装，优化工位布局</p>
                <p>2. 管理优化：更新安装标准，组织操作工培训</p>
                <p>3. 供应链管理：建立材料变更通知机制</p>
                <p>4. 质量监控：增加SPC监控频率，设置预警机制</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
