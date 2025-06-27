"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, FileText, Clock, AlertCircle, MapPin, Activity, Target } from "lucide-react"

export default function ProblemIdentification() {
  const [showAlert, setShowAlert] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)
  const [showImpact, setShowImpact] = useState(false)

  useEffect(() => {
    const alertTimer = setTimeout(() => setShowAlert(true), 500)
    const detailsTimer = setTimeout(() => setShowDetails(true), 1500)
    const timelineTimer = setTimeout(() => setShowTimeline(true), 2500)
    const impactTimer = setTimeout(() => setShowImpact(true), 3500)

    return () => {
      clearTimeout(alertTimer)
      clearTimeout(detailsTimer)
      clearTimeout(timelineTimer)
      clearTimeout(impactTimer)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Section Description */}
      <div className="text-center mb-8">
        <p className="text-[#94A3B8] text-lg leading-relaxed">
          基于ISO 9001:2015质量管理体系和IATF 16949汽车行业标准，运用8D问题解决方法论进行系统性问题识别与根因分析
        </p>
      </div>

      {/* Alert Notification */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-500/20 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-red-400">SPC控制图异常警报</h3>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                  Level 1 - 紧急
                </span>
              </div>
              <p className="text-slate-200 mb-4 text-lg leading-relaxed">
                A线门框密封条装配工序SPC监控显示连续7个点超出UCL=3.5%，当前PPM=5200，触发Nelson规则4，需立即启动遏制措施
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="text-sm text-slate-400">问题工位</div>
                    <div className="text-white font-medium">A线OP30门框装配</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-sm text-slate-400">FMEA风险等级</div>
                    <div className="text-amber-400 font-medium">RPN=240 (高风险)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">检测时间</div>
                    <div className="text-white font-medium">2025-06-09 14:32:15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Problem Details Grid */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Problem Overview */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">8D问题描述 (D1-D2)</h3>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: "问题现象 (What)",
                  description: "前门密封条装配后出现变形、错位，导致密封性能不达标，雨水渗透测试失效率52%",
                  severity: "high",
                  code: "DEF-2025-0609-001",
                },
                {
                  title: "发生位置 (Where)",
                  description: "主要发生在A线OP30工位，前门左侧密封条安装区域，占总缺陷的68%",
                  severity: "high",
                  code: "LOC-A30-FDL",
                },
                {
                  title: "发生时间 (When)",
                  description: "自2025年5月15日材料供应商变更后，缺陷率呈上升趋势，早班(06:00-14:00)问题最严重",
                  severity: "medium",
                  code: "TIME-0515-ES",
                },
                {
                  title: "影响程度 (How Much)",
                  description: "累计影响1,240台车辆，客户投诉32起，潜在召回风险，预估损失135万元",
                  severity: "high",
                  code: "IMP-1240-135W",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <span className="text-xs text-slate-500 font-mono">{item.code}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.severity === "high" ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {item.severity === "high" ? "高影响" : "中影响"}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Initial Data */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">质量数据快照</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "当前PPM",
                  value: "5,200 ppm",
                  target: "≤2,000 ppm",
                  color: "text-red-400",
                  icon: "📊",
                  status: "超标160%",
                },
                {
                  label: "过程能力指数",
                  value: "Cpk = 0.67",
                  target: "Cpk ≥ 1.33",
                  color: "text-red-400",
                  icon: "📈",
                  status: "不合格",
                },
                {
                  label: "西格玛水平",
                  value: "2.8σ",
                  target: "≥4.0σ",
                  color: "text-amber-400",
                  icon: "🎯",
                  status: "低于标准",
                },
                {
                  label: "首次通过率",
                  value: "94.8%",
                  target: "≥98%",
                  color: "text-amber-400",
                  icon: "✅",
                  status: "需改进",
                },
                {
                  label: "客户满意度",
                  value: "72分",
                  target: "≥85分",
                  color: "text-red-400",
                  icon: "😐",
                  status: "不达标",
                },
                {
                  label: "返工成本",
                  value: "85万元/月",
                  target: "≤30万元/月",
                  color: "text-red-400",
                  icon: "💰",
                  status: "超预算183%",
                },
                {
                  label: "MTBF",
                  value: "2.3小时",
                  target: "≥8小时",
                  color: "text-red-400",
                  icon: "⏱️",
                  status: "频繁故障",
                },
                {
                  label: "OEE",
                  value: "76.5%",
                  target: "≥85%",
                  color: "text-amber-400",
                  icon: "⚙️",
                  status: "效率偏低",
                },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <div className="text-xs text-slate-500">目标: {item.target}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-semibold ${item.color}`}>{item.value}</span>
                    <div className="text-xs text-slate-500">{item.status}</div>
                  </div>
                </div>
              ))}
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
          className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-blue-400">问题演进时间轴 (Chronological Analysis)</h3>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-amber-500 to-red-500" />

            {[
              {
                date: "5/15",
                time: "09:30",
                title: "供应商材料变更",
                description:
                  "德国EPDM密封条供应商(Supplier ID: DE-2024-07)更换配方，硬度从65±5 Shore A提升至75±3 Shore A，提高耐候性能",
                color: "bg-blue-500",
                impact: "变更",
                metrics: "硬度+15.4%",
                responsible: "采购部",
              },
              {
                date: "5/20",
                time: "14:15",
                title: "SPC首次预警",
                description: "质量工程师发现OP30工位密封条安装扭矩异常，SPC图显示连续5点接近UCL，Cpk从1.45下降至1.12",
                color: "bg-purple-500",
                impact: "预警",
                metrics: "Cpk↓23%",
                responsible: "质量部",
              },
              {
                date: "5/28",
                time: "16:45",
                title: "首例客户投诉",
                description: "经销商报告VIN:ABCD123456789车辆雨天渗水，检测发现前门密封条变形，密封性能下降40%",
                color: "bg-amber-500",
                impact: "客诉",
                metrics: "密封性↓40%",
                responsible: "客服部",
              },
              {
                date: "6/05",
                time: "11:20",
                title: "问题升级",
                description: "累计客户投诉达25起，现场审核发现68%缺陷集中在前门左侧，FMEA风险评级上调至RPN=240",
                color: "bg-pink-500",
                impact: "升级",
                metrics: "RPN=240",
                responsible: "质量部",
              },
              {
                date: "6/09",
                time: "14:32",
                title: "系统自动警报",
                description: "MES系统检测到连续7个数据点超出UCL，触发Nelson规则4，自动启动8D问题解决流程",
                color: "bg-red-500",
                impact: "紧急",
                metrics: "Nelson规则4",
                responsible: "系统自动",
              },
            ].map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 pb-8 last:pb-0">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full ${event.color} flex flex-col items-center justify-center text-white font-bold text-xs z-10 shadow-lg`}
                >
                  <div>{event.date}</div>
                  <div className="text-[10px] opacity-80">{event.time}</div>
                </div>
                <div className="flex-1 bg-gray-900/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white text-lg">{event.title}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.impact === "紧急"
                            ? "bg-red-500/20 text-red-400"
                            : event.impact === "升级"
                              ? "bg-pink-500/20 text-pink-400"
                              : event.impact === "客诉"
                                ? "bg-amber-500/20 text-amber-400"
                                : event.impact === "预警"
                                  ? "bg-purple-500/20 text-purple-400"
                                  : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {event.impact}
                      </span>
                      <span className="text-xs text-slate-500">{event.responsible}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-3">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-slate-500">关键指标:</span>
                    <span className="text-blue-400 font-medium">{event.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Impact Analysis */}
      {showImpact && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-3">
            <Target className="w-6 h-6" />
            多维度影响评估 (Impact Assessment Matrix)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-5">
              <h4 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                质量影响 (Quality Impact)
              </h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center justify-between">
                  <span>PPM超标率:</span>
                  <span className="text-red-400 font-medium">+160%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>过程能力指数:</span>
                  <span className="text-red-400 font-medium">Cpk=0.67</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>西格玛水平:</span>
                  <span className="text-amber-400 font-medium">2.8σ</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>FMEA风险等级:</span>
                  <span className="text-red-400 font-medium">RPN=240</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>客户满意度:</span>
                  <span className="text-red-400 font-medium">-18%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-5">
              <h4 className="font-semibold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                财务影响 (Financial Impact)
              </h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center justify-between">
                  <span>直接损失:</span>
                  <span className="text-amber-400 font-medium">¥85万/月</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>返工成本:</span>
                  <span className="text-amber-400 font-medium">¥32万</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>潜在召回风险:</span>
                  <span className="text-red-400 font-medium">¥480万</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>品牌声誉损失:</span>
                  <span className="text-amber-400 font-medium">¥120万</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>机会成本:</span>
                  <span className="text-amber-400 font-medium">¥65万</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-5">
              <h4 className="font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                运营影响 (Operational Impact)
              </h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center justify-between">
                  <span>OEE下降:</span>
                  <span className="text-purple-400 font-medium">-11.1%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>产能损失:</span>
                  <span className="text-purple-400 font-medium">156台/天</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>额外检验时间:</span>
                  <span className="text-purple-400 font-medium">+45分钟/台</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>人员加班成本:</span>
                  <span className="text-purple-400 font-medium">¥18万/月</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>供应链信任度:</span>
                  <span className="text-amber-400 font-medium">-25%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-red-400">风险评估结论</span>
            </div>
            <p className="text-slate-200 text-center leading-relaxed">
              基于FMEA分析，当前问题严重度S=8，发生度O=6，检出度D=5，风险优先数RPN=240， 属于
              <span className="font-semibold text-red-400">高风险等级</span>，建议立即启动
              <span className="font-semibold text-blue-400">8D问题解决流程</span>和
              <span className="font-semibold text-amber-400">临时遏制措施</span>。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
