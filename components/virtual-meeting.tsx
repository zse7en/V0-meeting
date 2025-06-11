"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, MessageSquare, Brain, CheckCircle } from "lucide-react"

export default function VirtualMeeting() {
  const [meetingPhase, setMeetingPhase] = useState(0)
  const [discussions, setDiscussions] = useState<string[]>([])

  const phases = ["问题确认", "根因讨论", "方案制定", "共识达成"]

  const participants = [
    { name: "小瑞质量顾问", role: "Q-7", status: "在线", avatar: "🤖" },
    { name: "小瑞生产顾问", role: "P-3", status: "分析中", avatar: "🔧" },
    { name: "小瑞研发顾问", role: "R-5", status: "设计中", avatar: "💡" },
    { name: "小瑞采购顾问", role: "S-2", status: "评估中", avatar: "📋" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (meetingPhase < phases.length - 1) {
        setMeetingPhase((prev) => prev + 1)
        setDiscussions((prev) => [...prev, `${phases[meetingPhase]} 完成`])
      }
    }, 4000)

    return () => clearInterval(timer)
  }, [meetingPhase, phases])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          AI虚拟圆桌会议
        </h2>
        <div className="text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full flex items-center">
          <Users className="inline-block mr-1 h-4 w-4" />
          {phases[meetingPhase]}
        </div>
      </div>

      {/* Meeting Participants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {participants.map((participant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{participant.avatar}</span>
              <div>
                <h3 className="font-medium text-white text-sm">{participant.name}</h3>
                <p className="text-xs text-[#64748B]">{participant.role}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#10B981] mr-2 animate-pulse"></div>
              <span className="text-xs text-[#94A3B8]">{participant.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meeting Discussion */}
      <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-6 border border-[#1E2334]">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-5 w-5 text-[#36BFFA] mr-2" />
          <h3 className="font-medium text-[#36BFFA]">会议讨论</h3>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto">
          {discussions.map((discussion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start space-x-3"
            >
              <Brain className="h-4 w-4 text-[#8B5CF6] mt-1 flex-shrink-0" />
              <div className="bg-[#0F1118]/50 rounded-lg p-3 flex-1">
                <p className="text-sm text-[#E2E8F0]">{discussion}</p>
              </div>
            </motion.div>
          ))}

          {meetingPhase === phases.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-[#10B981]/20 to-[#059669]/10 border border-[#10B981]/30 rounded-lg p-4"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#10B981] mr-2" />
                <span className="font-medium text-[#10B981]">会议共识达成</span>
              </div>
              <p className="text-sm text-[#E2E8F0] mt-2">
                四大根因确认：材料变更、工装不适配、培训缺失、标准滞后。制定系统性解决方案。
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
