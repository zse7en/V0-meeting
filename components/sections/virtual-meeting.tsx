"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MessageSquare, CheckCircle, Clock, AlertTriangle, Brain } from "lucide-react"

interface Message {
  id: number
  speaker: string
  role: string
  department: string
  message: string
  timestamp: string
  type: "discussion" | "question" | "proposal" | "agreement" | "concern"
  avatar: string
  priority?: "high" | "medium" | "low"
}

export default function VirtualMeeting() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [meetingPhase, setMeetingPhase] = useState("讨论进行中")
  const [showSummary, setShowSummary] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const participants = [
    {
      name: "小瑞质量顾问",
      role: "Quality Agent Q-7",
      department: "质量部AI顾问",
      avatar: "🤖",
      status: "分析中",
      expertise: "SPC统计分析、FMEA风险评估",
      aiModel: "质量管理专家模型",
    },
    {
      name: "小瑞生产顾问",
      role: "Production Agent P-3",
      department: "生产部AI顾问",
      avatar: "🏭",
      status: "在线",
      expertise: "精益生产、工艺优化",
      aiModel: "生产管理专家模型",
    },
    {
      name: "小瑞研发顾问",
      role: "R&D Agent R-5",
      department: "研发部AI顾问",
      avatar: "🔬",
      status: "设计中",
      expertise: "产品设计、技术创新",
      aiModel: "工程设计专家模型",
    },
    {
      name: "小瑞采购顾问",
      role: "Procurement Agent S-2",
      department: "采购部AI顾问",
      avatar: "📦",
      status: "评估中",
      expertise: "供应链管理、成本控制",
      aiModel: "采购管理专家模型",
    },
    {
      name: "小瑞设备顾问",
      role: "Equipment Agent E-4",
      department: "设备部AI顾问",
      avatar: "⚙️",
      status: "监控中",
      expertise: "设备维护、自动化控制",
      aiModel: "设备管理专家模型",
    },
    {
      name: "小瑞工艺顾问",
      role: "Process Agent T-6",
      department: "工艺部AI顾问",
      avatar: "🔧",
      status: "优化中",
      expertise: "工艺改进、标准制定",
      aiModel: "工艺管理专家模型",
    },
  ]

  const allMessages: Message[] = [
    {
      id: 1,
      speaker: "小瑞质量顾问",
      role: "Quality Agent Q-7",
      department: "质量部AI顾问",
      message:
        "各位AI同事，我通过SPC控制图深度学习分析发现，从5月15日开始密封条安装不良率呈指数上升趋势。当前PPM已达5200，超出UCL阈值67%。我的神经网络模型识别出连续7个异常点，符合Nelson规则第4条判定准则，建议立即启动根因分析算法。",
      timestamp: "14:32:15",
      type: "discussion",
      avatar: "🤖",
      priority: "high",
    },
    {
      id: 2,
      speaker: "小瑞采购顾问",
      role: "Procurement Agent S-2",
      department: "采购部AI顾问",
      message:
        "Q-7分析正确。我的供应链追溯算法显示，5月15日德国EPDM供应商执行了材料配方升级，硬度参数从65±5 Shore A调整至75±3 Shore A。我的风险评估模型当时预警等级为中等，但现在看来应该提升为高风险。建议激活供应商变更影响评估协议。",
      timestamp: "14:32:45",
      type: "discussion",
      avatar: "📦",
      priority: "high",
    },
    {
      id: 3,
      speaker: "小瑞生产顾问",
      role: "Production Agent P-3",
      department: "生产部AI顾问",
      message:
        "我的现场监控传感器网络确认了这一变化。通过计算机视觉分析，我观察到操作工在前门左侧工位的动作模式发生显著变化，用力程度增加32%，操作时间延长18%。我的疲劳度预测模型显示，当前工艺参数下操作工疲劳度将在2小时内达到红色预警线。",
      timestamp: "14:33:12",
      type: "concern",
      avatar: "🏭",
      priority: "medium",
    },
    {
      id: 4,
      speaker: "小瑞设备顾问",
      role: "Equipment Agent E-4",
      department: "设备部AI顾问",
      message:
        "我的设备健康监测系统检测到压装工装的负载曲线异常。当前2.1kN的压装力对于新材料硬度明显不足，我的力学仿真模型计算出至少需要2.8kN才能达到理想变形量。同时，工装磨损传感器显示磨损率比正常值高出45%，建议立即进行预防性维护。",
      timestamp: "14:33:38",
      type: "concern",
      avatar: "⚙️",
      priority: "high",
    },
    {
      id: 5,
      speaker: "小瑞研发顾问",
      role: "R&D Agent R-5",
      department: "研发部AI顾问",
      message:
        "基于我的材料力学分析引擎，硬度提升15%对应弹性模量增加约12-18%。我的CAE仿真显示，需要重新设计压装工装，集成自适应压力控制系统。我建议采用PID控制算法，实现压力范围0.5-3.2kN的动态调节，并增加力反馈传感器实现闭环控制。预计设计周期7天，验证周期3天。",
      timestamp: "14:34:05",
      type: "proposal",
      avatar: "🔬",
      priority: "high",
    },
    {
      id: 6,
      speaker: "小瑞工艺顾问",
      role: "Process Agent T-6",
      department: "工艺部AI顾问",
      message:
        "我的工艺优化算法分析了当前作业参数，发现多个关键控制点需要重新标定。基于新材料特性，我重新计算了最优工艺窗口：压装角度15±2°，保压时间3.5±0.5秒，回弹补偿量1.2mm。我的培训需求分析模型建议为操作工制定VR虚拟训练程序，预计培训效果提升60%。",
      timestamp: "14:34:32",
      type: "proposal",
      avatar: "🔧",
      priority: "medium",
    },
    {
      id: 7,
      speaker: "小瑞质量顾问",
      role: "Quality Agent Q-7",
      department: "质量部AI顾问",
      message:
        "T-6的工艺参数优化很有价值。我的质量预测模型需要相应更新检验标准。基于新的工艺窗口，我重新计算了SPC控制限：UCL=3.2%，LCL=0.8%，目标值2.0%。同时建议增加材料硬度的进货检验，采用自动化硬度测试设备，检验频率100%，数据自动上传至质量数据库。",
      timestamp: "14:34:58",
      type: "agreement",
      avatar: "🤖",
      priority: "medium",
    },
    {
      id: 8,
      speaker: "小瑞采购顾问",
      role: "Procurement Agent S-2",
      department: "采购部AI顾问",
      message:
        "我将立即激活供应商管理协议升级程序。基于这次事件，我的风险评估算法建议建立30天预通知机制，任何材料变更必须提前通知并进行影响评估。我会部署区块链技术确保变更记录的不可篡改性，同时建立AI驱动的供应商绩效评估体系。",
      timestamp: "14:35:25",
      type: "agreement",
      avatar: "📦",
      priority: "high",
    },
    {
      id: 9,
      speaker: "小瑞生产顾问",
      role: "Production Agent P-3",
      department: "生产部AI顾问",
      message:
        "我建议启动三级应急响应预案：Level 1-立即增加质量检验频次至100%，部署机器视觉检测系统；Level 2-调配经验丰富的操作工到关键工位，启动实时指导系统；Level 3-临时调整生产节拍，降低15%以确保质量稳定。我的排产优化算法已经计算出最优调整方案。",
      timestamp: "14:35:52",
      type: "proposal",
      avatar: "🏭",
      priority: "high",
    },
    {
      id: 10,
      speaker: "小瑞研发顾问",
      role: "R&D Agent R-5",
      department: "研发部AI顾问",
      message:
        "支持P-3的应急方案。我的快速原型系统已经开始工装重新设计，采用模块化设计理念，集成IoT传感器和边缘计算单元。新工装将具备自学习能力，能够根据材料特性自动调整参数。预计72小时内完成数字化设计，120小时内完成物理验证。",
      timestamp: "14:36:18",
      type: "agreement",
      avatar: "🔬",
      priority: "high",
    },
    {
      id: 11,
      speaker: "小瑞设备顾问",
      role: "Equipment Agent E-4",
      department: "设备部AI顾问",
      message:
        "我的预测性维护系统将立即执行全面设备健康检查。基于数字孪生模型，我已经识别出3台关键设备需要立即维护，7台设备需要参数重新标定。我会部署边缘AI计算节点，实现设备状态的毫秒级监控和预警，确保新工艺参数下的设备稳定运行。",
      timestamp: "14:36:45",
      type: "agreement",
      avatar: "⚙️",
      priority: "medium",
    },
    {
      id: 12,
      speaker: "小瑞工艺顾问",
      role: "Process Agent T-6",
      department: "工艺部AI顾问",
      message:
        "我的知识图谱系统将整合所有工艺改进方案，生成标准化作业程序2.0版本。基于深度学习算法，我会为每个操作工生成个性化的技能提升路径，结合AR增强现实技术提供实时作业指导。预计培训完成后，操作一致性将提升40%，技能水平提升25%。",
      timestamp: "14:37:12",
      type: "agreement",
      avatar: "🔧",
      priority: "medium",
    },
    {
      id: 13,
      speaker: "小瑞质量顾问",
      role: "Quality Agent Q-7",
      department: "质量部AI顾问",
      message:
        "优秀！我的决策支持系统已经整合了所有AI顾问的方案建议。综合评估显示：技术改进方案可行性96.8%，管理优化方案有效性94.2%，供应链改进方案可靠性97.1%。基于蒙特卡洛仿真，预计30天内不良率降至2.8%±0.3%的概率为95.6%。建议立即启动集成实施方案。",
      timestamp: "14:37:38",
      type: "agreement",
      avatar: "🤖",
      priority: "high",
    },
  ]

  useEffect(() => {
    if (currentMessageIndex < allMessages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, allMessages[currentMessageIndex]])
        setCurrentMessageIndex((prev) => prev + 1)
      }, 2500)

      return () => clearTimeout(timer)
    } else if (currentMessageIndex === allMessages.length && !showSummary) {
      setMeetingPhase("AI共识达成")
      const timer = setTimeout(() => {
        setShowSummary(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, allMessages.length, showSummary])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [displayedMessages])

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case "proposal":
        return "border-l-blue-400 bg-blue-500/10"
      case "concern":
        return "border-l-red-400 bg-red-500/10"
      case "agreement":
        return "border-l-green-400 bg-green-500/10"
      case "question":
        return "border-l-yellow-400 bg-yellow-500/10"
      default:
        return "border-l-slate-400 bg-slate-500/10"
    }
  }

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case "proposal":
        return "💡"
      case "concern":
        return "⚠️"
      case "agreement":
        return "✅"
      case "question":
        return "❓"
      default:
        return "🤖"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          小瑞AI圆桌会议
        </h2>
        <div className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full flex items-center">
          <Brain className="inline-block mr-1 h-4 w-4" />
          {meetingPhase}
        </div>
      </div>

      {/* Meeting Progress */}
      <div className="bg-slate-800/30 backdrop-blur-md rounded-lg p-4 border border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-blue-400">AI协商进度</h3>
          <span className="text-sm text-slate-400">
            {displayedMessages.length}/{allMessages.length} 条AI分析
          </span>
        </div>
        <div className="w-full bg-slate-600 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(displayedMessages.length / allMessages.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* AI Participants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {participants.map((participant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-lg p-4 border border-slate-700"
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{participant.avatar}</span>
              <div className="flex-1">
                <h3 className="font-medium text-white text-sm">{participant.name}</h3>
                <p className="text-xs text-blue-400">{participant.role}</p>
                <p className="text-xs text-slate-500">{participant.department}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-xs text-slate-400">{participant.status}</span>
              </div>
              <div className="text-xs text-slate-500">
                <span className="text-purple-400">专长:</span> {participant.expertise}
              </div>
              <div className="text-xs text-slate-600">
                <span className="text-cyan-400">模型:</span> {participant.aiModel}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Meeting Discussion */}
      <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-blue-400 mr-2" />
            <h3 className="font-medium text-blue-400">AI实时协商讨论</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-400">AI深度分析中</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">2025-06-09 14:32</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {displayedMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`border-l-4 pl-4 py-3 rounded-r-lg ${getMessageTypeColor(message.type)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{message.avatar}</span>
                  <div>
                    <span className="font-medium text-white text-sm">{message.speaker}</span>
                    <span className="text-xs text-blue-400 ml-2">{message.role}</span>
                    <div className="text-xs text-slate-500">{message.department}</div>
                  </div>
                  <span className="text-xs">{getMessageTypeIcon(message.type)}</span>
                </div>
                <div className="flex items-center gap-2">
                  {message.priority === "high" && <AlertTriangle className="h-3 w-3 text-red-400" />}
                  <span className="text-xs text-slate-500">{message.timestamp}</span>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">{message.message}</p>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* AI Consensus Summary */}
      {showSummary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500/20 to-emerald-600/10 border border-green-500/30 rounded-lg p-6"
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
            <h3 className="font-medium text-green-500 text-lg">小瑞AI圆桌会议共识与决策</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">AI根因分析共识</h4>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span>材料特性变化：EPDM硬度提升15%，弹性模量增加12-18%</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>设备参数不匹配：压装力需从2.1kN提升至2.8kN</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>工艺窗口偏移：需重新标定压装角度、保压时间等参数</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span>标准体系滞后：SPC控制限、检验标准需同步更新</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">AI集成解决方案</h4>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>智能工装：集成IoT传感器和自适应压力控制系统</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>AI培训：VR虚拟训练+AR实时指导，个性化技能提升</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>预测维护：边缘AI计算节点，毫秒级设备监控</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>供应链AI：区块链变更追溯+30天预通知机制</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">AI预测效果：</span>
              <div className="flex items-center gap-6">
                <span className="text-sm text-green-400">不良率：5.2% → 2.8%±0.3%</span>
                <span className="text-sm text-blue-400">方案可行性：96.8%</span>
                <span className="text-sm text-purple-400">实施周期：30天</span>
                <span className="text-sm text-amber-400">成功概率：95.6%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
