"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Sparkles,
  Zap,
  Settings,
  Database,
  Cpu,
  Brain,
  Target,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react"

export default function SolutionPresentation() {
  const [showOverview, setShowOverview] = useState(false)
  const [showTechnical, setShowTechnical] = useState(false)
  const [showManagement, setShowManagement] = useState(false)
  const [showDepartmental, setShowDepartmental] = useState(false)
  const [showImplementation, setShowImplementation] = useState(false)
  const [showROI, setShowROI] = useState(false)

  useEffect(() => {
    const overviewTimer = setTimeout(() => setShowOverview(true), 500)
    const technicalTimer = setTimeout(() => setShowTechnical(true), 2000)
    const managementTimer = setTimeout(() => setShowManagement(true), 3500)
    const departmentalTimer = setTimeout(() => setShowDepartmental(true), 5000)
    const implementationTimer = setTimeout(() => setShowImplementation(true), 6500)
    const roiTimer = setTimeout(() => setShowROI(true), 8000)

    return () => {
      clearTimeout(overviewTimer)
      clearTimeout(technicalTimer)
      clearTimeout(managementTimer)
      clearTimeout(departmentalTimer)
      clearTimeout(implementationTimer)
      clearTimeout(roiTimer)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Section Description */}
      <div className="text-center mb-8">
        <p className="text-[#94A3B8] text-lg leading-relaxed">
          基于深度分析和多部门协商结果，小瑞AI系统生成全面的解决方案，涵盖技术改进、管理优化和实施计划
        </p>
      </div>

      {/* Solution Overview */}
      {showOverview && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/30 rounded-xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#8B5CF6]">小瑞AI综合解决方案</h3>
              <p className="text-[#64748B]">基于数据驱动的系统性改进方案</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-[#1E2334]/50 rounded-lg p-5 text-center">
              <Target className="w-10 h-10 text-[#10B981] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#10B981] mb-1">3%</div>
              <div className="text-sm text-[#94A3B8]">目标不良率</div>
              <div className="text-xs text-[#64748B] mt-1">当前: 5.2%</div>
            </div>
            <div className="bg-[#1E2334]/50 rounded-lg p-5 text-center">
              <Clock className="w-10 h-10 text-[#3B82F6] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#3B82F6] mb-1">30天</div>
              <div className="text-sm text-[#94A3B8]">实施周期</div>
              <div className="text-xs text-[#64748B] mt-1">分4个阶段</div>
            </div>
            <div className="bg-[#1E2334]/50 rounded-lg p-5 text-center">
              <DollarSign className="w-10 h-10 text-[#F59E0B] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#F59E0B] mb-1">135万</div>
              <div className="text-sm text-[#94A3B8]">预计挽回损失</div>
              <div className="text-xs text-[#64748B] mt-1">年度节约480万</div>
            </div>
            <div className="bg-[#1E2334]/50 rounded-lg p-5 text-center">
              <TrendingUp className="w-10 h-10 text-[#8B5CF6] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#8B5CF6] mb-1">96.8%</div>
              <div className="text-sm text-[#94A3B8]">方案置信度</div>
              <div className="text-xs text-[#64748B] mt-1">小瑞AI评估结果</div>
            </div>
          </div>

          <div className="bg-[#0F1118]/50 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-3">方案核心特点</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-[#E2E8F0]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>系统性解决四大根因问题</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>技术改进与管理优化并重</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>多部门协同执行保障</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-[#E2E8F0]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>投资回报周期短，效益显著</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>建立长效预防机制</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>可复制推广到其他产线</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Technical Solutions */}
      {showTechnical && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E2334]/30 border border-[#1E2334] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-7 h-7 text-[#3B82F6]" />
            <h3 className="text-2xl font-bold text-[#3B82F6]">技术解决方案</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#0F1118]/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-3">工装改进设计</h4>
                    <p className="text-[#94A3B8] mb-4 leading-relaxed">
                      设计新型压装工具，增加弹性缓冲结构，适应硬度增加的密封条，确保安装质量稳定性
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Wrench className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">可调节压力控制系统 (0.5-2.0 MPa)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Wrench className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">弹性缓冲结构设计 (减震30%)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Wrench className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">集成压力传感器实时监控</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Wrench className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">人体工程学手柄设计</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1118]/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-3">工位布局优化</h4>
                    <p className="text-[#94A3B8] mb-4 leading-relaxed">
                      针对前门左侧问题高发区域，重新设计工位布局，改善操作环境和作业流程
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Settings className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">调整工作台高度至最佳人体工程学位置</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Settings className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">改善照明条件，增加局部照明至800lux</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Settings className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">设计辅助支撑装置，减轻手臂负担</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                        <Settings className="w-4 h-4 text-[#10B981]" />
                        <span className="text-sm text-[#E2E8F0]">优化操作顺序，减少不必要动作15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/10 border border-[#3B82F6]/30 rounded-lg p-6">
                <h4 className="font-semibold text-[#3B82F6] mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  技术方案效果预测
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      metric: "安装成功率",
                      current: "94.8%",
                      target: "97.5%",
                      improvement: "+2.7%",
                      color: "text-[#10B981]",
                    },
                    {
                      metric: "操作效率",
                      current: "85%",
                      target: "92%",
                      improvement: "+7%",
                      color: "text-[#3B82F6]",
                    },
                    {
                      metric: "工人疲劳度",
                      current: "高",
                      target: "中",
                      improvement: "显著改善",
                      color: "text-[#8B5CF6]",
                    },
                    {
                      metric: "设备故障率",
                      current: "2.3%",
                      target: "1.1%",
                      improvement: "-52%",
                      color: "text-[#F59E0B]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#1E2334]/50 rounded-lg">
                      <span className="text-sm text-[#94A3B8]">{item.metric}</span>
                      <div className="text-right">
                        <div className="text-sm text-white">
                          {item.current} → {item.target}
                        </div>
                        <div className={`text-xs font-medium ${item.color}`}>{item.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0F1118]/50 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-4">技术投入预算</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#1E2334]/30 rounded-lg">
                    <span className="text-sm text-[#94A3B8]">新工装设计制造</span>
                    <span className="text-sm font-medium text-white">28万元</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#1E2334]/30 rounded-lg">
                    <span className="text-sm text-[#94A3B8]">工位改造升级</span>
                    <span className="text-sm font-medium text-white">15万元</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#1E2334]/30 rounded-lg">
                    <span className="text-sm text-[#94A3B8]">测试验证费用</span>
                    <span className="text-sm font-medium text-white">5万元</span>
                  </div>
                  <div className="border-t border-[#1E2334] pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white">技术改进总投入</span>
                      <span className="text-lg font-bold text-[#3B82F6]">48万元</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Management Solutions */}
      {showManagement && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1E2334]/30 border border-[#1E2334] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Settings className="w-7 h-7 text-[#8B5CF6]" />
            <h3 className="text-2xl font-bold text-[#8B5CF6]">管理解决方案</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "供应商变更管理",
                icon: <Database className="w-6 h-6" />,
                color: "text-[#F59E0B]",
                bgColor: "from-[#F59E0B]/20 to-[#D97706]/10",
                borderColor: "border-[#F59E0B]/30",
                items: [
                  "建立材料变更30天预通知机制",
                  "制定变更影响评估标准流程",
                  "建立材料特性数据库和追溯系统",
                  "设立变更评审委员会多部门参与",
                ],
                timeline: "14天完成",
                investment: "12万元",
              },
              {
                title: "人员培训计划",
                icon: <Brain className="w-6 h-6" />,
                color: "text-[#10B981]",
                bgColor: "from-[#10B981]/20 to-[#059669]/10",
                borderColor: "border-[#10B981]/30",
                items: [
                  "开发交互式培训模块和VR训练",
                  "制作标准化视频教程库",
                  "建立技能评估和认证体系",
                  "设立师徒制和经验分享机制",
                ],
                timeline: "7天完成",
                investment: "8万元",
              },
              {
                title: "质量监控升级",
                icon: <Zap className="w-6 h-6" />,
                color: "text-[#3B82F6]",
                bgColor: "from-[#3B82F6]/20 to-[#1D4ED8]/10",
                borderColor: "border-[#3B82F6]/30",
                items: [
                  "SPC监控频率提升至每班次",
                  "设置三级预警阈值体系",
                  "建立5分钟快速响应流程",
                  "开发质量问题知识库系统",
                ],
                timeline: "3天完成",
                investment: "6万元",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${solution.bgColor} border ${solution.borderColor} rounded-xl p-6`}
              >
                <div className={`flex items-center gap-3 mb-4 ${solution.color}`}>
                  {solution.icon}
                  <h4 className="font-semibold text-lg">{solution.title}</h4>
                </div>
                <ul className="space-y-3 mb-6">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-[#E2E8F0]">
                      <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#94A3B8]">实施周期</span>
                    <span className={`text-sm font-medium ${solution.color}`}>{solution.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#94A3B8]">投入预算</span>
                    <span className={`text-sm font-medium ${solution.color}`}>{solution.investment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Departmental Implementation */}
      {showDepartmental && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1E2334]/30 border border-[#1E2334] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-7 h-7 text-[#10B981]" />
            <h3 className="text-2xl font-bold text-[#10B981]">部门执行方案详细计划</h3>
          </div>

          {/* 质量部详细方案 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-[#3B82F6]/10 to-[#1D4ED8]/5 border border-[#3B82F6]/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3B82F6]">质量部执行方案</h4>
                  <p className="text-sm text-[#64748B]">负责人: 质量经理 张三 | 团队: 8人</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold text-[#3B82F6]">7天</div>
                  <div className="text-sm text-[#64748B]">执行周期</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">核心任务清单</h5>
                  {[
                    {
                      task: "更新密封条安装质量检验标准",
                      details: [
                        "修订现有SOP文件，增加新材料检验要点",
                        "制定三级检验标准：来料-过程-成品",
                        "建立关键控制点(CCP)监控机制",
                        "设计专用检具和量规使用规范",
                      ],
                      priority: "高",
                      timeline: "第1-3天",
                      deliverable: "新版质检标准文件v2.1",
                    },
                    {
                      task: "制定材料变更评估流程",
                      details: [
                        "建立供应商材料变更30天预通知制度",
                        "设计材料特性影响评估矩阵",
                        "制定变更风险等级分类标准",
                        "建立跨部门评审委员会机制",
                      ],
                      priority: "高",
                      timeline: "第2-4天",
                      deliverable: "材料变更管理流程文件",
                    },
                    {
                      task: "升级SPC监控系统频率",
                      details: [
                        "将监控频率从每日调整为每班次",
                        "设置三级预警阈值体系",
                        "建立5分钟快速响应流程",
                        "集成移动端实时推送功能",
                      ],
                      priority: "中",
                      timeline: "第3-5天",
                      deliverable: "SPC系统升级报告",
                    },
                    {
                      task: "建立质量问题快速响应机制",
                      details: [
                        "制定问题分级响应标准",
                        "建立24小时值班制度",
                        "设计问题追溯和闭环管理流程",
                        "建立质量事件知识库系统",
                      ],
                      priority: "中",
                      timeline: "第5-7天",
                      deliverable: "快速响应机制手册",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-[#0F1118]/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h6 className="font-medium text-white mb-2">{item.task}</h6>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.priority === "高"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : "bg-[#F59E0B]/20 text-[#F59E0B]"
                              }`}
                            >
                              {item.priority}优先级
                            </span>
                            <span className="text-[#64748B]">{item.timeline}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <CheckCircle className="w-3 h-3 text-[#10B981] mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-[#1E2334] pt-2">
                        <span className="text-xs text-[#64748B]">交付物: </span>
                        <span className="text-xs text-[#3B82F6]">{item.deliverable}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">资源配置与预算</h5>
                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">人员配置</h6>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">项目经理:</span>
                        <span className="text-white">张三 (质量经理)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">质量工程师:</span>
                        <span className="text-white">3人</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">检验员:</span>
                        <span className="text-white">4人</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">数据分析师:</span>
                        <span className="text-white">1人</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">预算明细</h6>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">人工成本:</span>
                        <span className="text-white">8万元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">系统升级:</span>
                        <span className="text-white">4万元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">培训费用:</span>
                        <span className="text-white">2万元</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">其他费用:</span>
                        <span className="text-white">1万元</span>
                      </div>
                      <div className="border-t border-[#1E2334] pt-2 flex justify-between font-medium">
                        <span className="text-white">总计:</span>
                        <span className="text-[#3B82F6]">15万元</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">风险评估</h6>
                    <div className="space-y-2">
                      {[
                        { risk: "标准制定延期", level: "中", mitigation: "提前启动，并行作业" },
                        { risk: "系统兼容性问题", level: "低", mitigation: "提前测试验证" },
                        { risk: "人员培训不到位", level: "中", mitigation: "分批培训，考核验收" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#1E2334]/30 rounded">
                          <span className="text-xs text-[#94A3B8]">{item.risk}</span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                item.level === "高"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : item.level === "中"
                                    ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                                    : "bg-[#10B981]/20 text-[#10B981]"
                              }`}
                            >
                              {item.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 研发部详细方案 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#7C3AED]/5 border border-[#8B5CF6]/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#8B5CF6]">研发部执行方案</h4>
                  <p className="text-sm text-[#64748B]">负责人: 技术总监 李四 | 团队: 12人</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold text-[#8B5CF6]">17天</div>
                  <div className="text-sm text-[#64748B]">执行周期</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">技术改进任务</h5>
                  {[
                    {
                      task: "设计新型压装工具",
                      details: [
                        "分析新材料硬度特性，设计适配压力系统",
                        "开发可调节压力控制系统(0.5-2.0 MPa)",
                        "集成压力传感器实时监控功能",
                        "设计人体工程学手柄，减少操作疲劳",
                        "制作3D打印原型，进行功能验证",
                      ],
                      priority: "高",
                      timeline: "第1-10天",
                      deliverable: "新型压装工具设计图纸及原型",
                      budget: "25万元",
                    },
                    {
                      task: "开发材料适配性测试系统",
                      details: [
                        "建立材料硬度-压力-变形关系模型",
                        "开发自动化测试设备",
                        "制定材料适配性评估标准",
                        "建立材料数据库和查询系统",
                      ],
                      priority: "高",
                      timeline: "第5-12天",
                      deliverable: "材料测试系统及评估标准",
                      budget: "8万元",
                    },
                    {
                      task: "制定工装设计标准",
                      details: [
                        "总结现有工装设计经验",
                        "制定标准化设计规范",
                        "建立工装验证测试流程",
                        "开发工装设计辅助软件",
                      ],
                      priority: "中",
                      timeline: "第8-15天",
                      deliverable: "工装设计标准文件",
                      budget: "2万元",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-[#0F1118]/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h6 className="font-medium text-white mb-2">{item.task}</h6>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.priority === "高"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : "bg-[#F59E0B]/20 text-[#F59E0B]"
                              }`}
                            >
                              {item.priority}优先级
                            </span>
                            <span className="text-[#64748B]">{item.timeline}</span>
                            <span className="text-[#8B5CF6] font-medium">{item.budget}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <Wrench className="w-3 h-3 text-[#10B981] mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-[#1E2334] pt-2">
                        <span className="text-xs text-[#64748B]">交付物: </span>
                        <span className="text-xs text-[#8B5CF6]">{item.deliverable}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">技术团队配置</h5>
                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <div className="space-y-3">
                      {[
                        { role: "项目总监", name: "李四", experience: "15年", responsibility: "整体技术方案把控" },
                        { role: "机械设计工程师", name: "王工", experience: "8年", responsibility: "工装结构设计" },
                        { role: "电气工程师", name: "张工", experience: "6年", responsibility: "控制系统开发" },
                        { role: "材料工程师", name: "刘工", experience: "10年", responsibility: "材料特性分析" },
                        { role: "测试工程师", name: "陈工", experience: "5年", responsibility: "功能验证测试" },
                      ].map((member, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-[#1E2334]/30 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">
                            {member.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{member.role}</div>
                            <div className="text-xs text-[#64748B]">
                              {member.name} | {member.experience}经验
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">技术里程碑</h6>
                    <div className="space-y-3">
                      {[
                        { milestone: "需求分析完成", date: "第3天", status: "计划中" },
                        { milestone: "初步设计方案", date: "第7天", status: "计划中" },
                        { milestone: "原型制作完成", date: "第12天", status: "计划中" },
                        { milestone: "功能测试验证", date: "第15天", status: "计划中" },
                        { milestone: "最终方案确定", date: "第17天", status: "计划中" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#1E2334]/30 rounded">
                          <span className="text-sm text-white">{item.milestone}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#64748B]">{item.date}</span>
                            <span className="text-xs px-2 py-1 rounded bg-[#F59E0B]/20 text-[#F59E0B]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 生产部详细方案 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/5 border border-[#10B981]/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#10B981]">生产部执行方案</h4>
                  <p className="text-sm text-[#64748B]">负责人: 生产经理 王五 | 团队: 25人</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold text-[#10B981]">10天</div>
                  <div className="text-sm text-[#64748B]">执行周期</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">生产改进计划</h5>
                  {[
                    {
                      task: "优化前门工位布局",
                      details: [
                        "重新设计前门左侧工位，改善操作角度",
                        "调整工作台高度至最佳人体工程学位置",
                        "增加局部照明至800lux标准",
                        "设计辅助支撑装置，减轻手臂负担",
                        "优化物料摆放位置，减少取料时间",
                      ],
                      priority: "高",
                      timeline: "第1-5天",
                      impact: "效率提升15%",
                      cost: "12万元",
                    },
                    {
                      task: "组织操作工紧急培训",
                      details: [
                        "制定新材料安装技巧培训课程",
                        "开发VR虚拟现实培训系统",
                        "建立师徒制一对一指导机制",
                        "设计技能评估和认证体系",
                        "建立持续改进反馈机制",
                      ],
                      priority: "高",
                      timeline: "第2-7天",
                      impact: "技能提升30%",
                      cost: "4万元",
                    },
                    {
                      task: "制定人体工程学标准",
                      details: [
                        "评估现有工位人体工程学状况",
                        "制定标准化作业姿势规范",
                        "设计疲劳度监测和轮岗机制",
                        "建立工位健康评估体系",
                      ],
                      priority: "中",
                      timeline: "第5-8天",
                      impact: "疲劳度降低40%",
                      cost: "2万元",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-[#0F1118]/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h6 className="font-medium text-white mb-2">{item.task}</h6>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.priority === "高"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : "bg-[#F59E0B]/20 text-[#F59E0B]"
                              }`}
                            >
                              {item.priority}优先级
                            </span>
                            <span className="text-[#64748B]">{item.timeline}</span>
                            <span className="text-[#10B981] font-medium">{item.impact}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <Settings className="w-3 h-3 text-[#10B981] mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-[#1E2334] pt-2 flex justify-between">
                        <span className="text-xs text-[#64748B]">预算: </span>
                        <span className="text-xs text-[#10B981]">{item.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">培训计划详情</h5>
                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">培训模块设计</h6>
                    <div className="space-y-3">
                      {[
                        { module: "新材料特性认知", duration: "2小时", method: "理论+实操", target: "全员" },
                        { module: "安装技巧提升", duration: "4小时", method: "VR+实训", target: "操作工" },
                        { module: "质量标准更新", duration: "1小时", method: "在线学习", target: "全员" },
                        { module: "应急处理流程", duration: "2小时", method: "情景模拟", target: "班组长" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-[#1E2334]/30 rounded-lg">
                          <div>
                            <div className="text-sm font-medium text-white">{item.module}</div>
                            <div className="text-xs text-[#64748B]">
                              {item.method} | {item.target}
                            </div>
                          </div>
                          <span className="text-xs text-[#10B981] font-medium">{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">实施进度安排</h6>
                    <div className="space-y-2">
                      {[
                        { phase: "第1-2天", task: "工位改造准备", responsible: "设备组" },
                        { phase: "第3-4天", task: "布局调整实施", responsible: "工程组" },
                        { phase: "第5-6天", task: "培训课程开展", responsible: "培训组" },
                        { phase: "第7-8天", task: "试运行验证", responsible: "生产组" },
                        { phase: "第9-10天", task: "效果评估总结", responsible: "质量组" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#1E2334]/30 rounded">
                          <div>
                            <span className="text-sm text-white">{item.phase}</span>
                            <span className="text-xs text-[#64748B] ml-2">{item.task}</span>
                          </div>
                          <span className="text-xs text-[#10B981]">{item.responsible}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 采购部详细方案 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-[#F59E0B]/10 to-[#D97706]/5 border border-[#F59E0B]/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#F59E0B]">采购部执行方案</h4>
                  <p className="text-sm text-[#64748B]">负责人: 采购总监 赵六 | 团队: 6人</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold text-[#F59E0B]">14天</div>
                  <div className="text-sm text-[#64748B]">执行周期</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">供应链管理改进</h5>
                  {[
                    {
                      task: "建立供应商变更通知机制",
                      details: [
                        "制定30天预通知强制要求",
                        "建立材料变更影响评估流程",
                        "设计供应商变更申请系统",
                        "建立变更审批多级机制",
                        "制定违约责任和处罚条款",
                      ],
                      priority: "高",
                      timeline: "第1-7天",
                      suppliers: "12家核心供应商",
                      impact: "预防100%变更风险",
                    },
                    {
                      task: "修订采购合同管理条款",
                      details: [
                        "增加材料特性变更通知条款",
                        "制定质量责任分担机制",
                        "建立供应商质量保证金制度",
                        "设计长期合作激励机制",
                      ],
                      priority: "高",
                      timeline: "第5-10天",
                      suppliers: "所有供应商",
                      impact: "合同风险降低80%",
                    },
                    {
                      task: "建立材料特性数据库",
                      details: [
                        "收集整理现有材料技术参数",
                        "建立材料变更历史档案",
                        "开发材料查询和比对系统",
                        "建立材料认证和准入标准",
                      ],
                      priority: "中",
                      timeline: "第8-14天",
                      suppliers: "材料数据库",
                      impact: "决策效率提升50%",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-[#0F1118]/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h6 className="font-medium text-white mb-2">{item.task}</h6>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.priority === "高"
                                  ? "bg-[#EF4444]/20 text-[#EF4444]"
                                  : "bg-[#F59E0B]/20 text-[#F59E0B]"
                              }`}
                            >
                              {item.priority}优先级
                            </span>
                            <span className="text-[#64748B]">{item.timeline}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <Database className="w-3 h-3 text-[#F59E0B] mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-[#1E2334] pt-2 grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[#64748B]">覆盖范围: </span>
                          <span className="text-[#F59E0B]">{item.suppliers}</span>
                        </div>
                        <div>
                          <span className="text-[#64748B]">预期效果: </span>
                          <span className="text-[#10B981]">{item.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-white mb-3">供应商管理策略</h5>
                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">核心供应商清单</h6>
                    <div className="space-y-2">
                      {[
                        { name: "A级供应商", count: "3家", category: "密封条主供", risk: "低" },
                        { name: "B级供应商", count: "5家", category: "密封条备供", risk: "中" },
                        { name: "C级供应商", count: "4家", category: "辅助材料", risk: "低" },
                      ].map((supplier, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-[#1E2334]/30 rounded-lg">
                          <div>
                            <div className="text-sm font-medium text-white">{supplier.name}</div>
                            <div className="text-xs text-[#64748B]">{supplier.category}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-[#F59E0B]">{supplier.count}</div>
                            <div
                              className={`text-xs px-2 py-1 rounded ${
                                supplier.risk === "低"
                                  ? "bg-[#10B981]/20 text-[#10B981]"
                                  : "bg-[#F59E0B]/20 text-[#F59E0B]"
                              }`}
                            >
                              {supplier.risk}风险
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0F1118]/50 rounded-lg p-4">
                    <h6 className="font-medium text-white mb-3">合同条款更新要点</h6>
                    <div className="space-y-2 text-sm">
                      {[
                        "材料变更30天预通知义务",
                        "技术参数变更影响评估责任",
                        "质量问题追溯和赔偿机制",
                        "长期合作伙伴激励条款",
                        "应急供货保障承诺",
                      ].map((clause, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-[#1E2334]/30 rounded">
                          <CheckCircle className="w-3 h-3 text-[#10B981] flex-shrink-0" />
                          <span className="text-[#94A3B8]">{clause}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 部门协作流程图 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-xl p-6 border border-[#1E2334]"
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#3B82F6]" />
              部门协作流程与里程碑
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-white mb-4">关键协作节点</h5>
                <div className="space-y-3">
                  {[
                    {
                      day: "第3天",
                      event: "质量标准与技术方案对接",
                      departments: ["质量部", "研发部"],
                      deliverable: "技术要求规格书",
                    },
                    {
                      day: "第5天",
                      event: "工装设计与生产布局协调",
                      departments: ["研发部", "生产部"],
                      deliverable: "工位改造方案",
                    },
                    {
                      day: "第7天",
                      event: "供应商管理与质量标准同步",
                      departments: ["采购部", "质量部"],
                      deliverable: "供应商评估报告",
                    },
                    {
                      day: "第10天",
                      event: "培训内容与技术方案整合",
                      departments: ["生产部", "研发部"],
                      deliverable: "培训教材包",
                    },
                    {
                      day: "第14天",
                      event: "全部门方案整合评审",
                      departments: ["全部门"],
                      deliverable: "整体实施方案",
                    },
                  ].map((node, index) => (
                    <div key={index} className="bg-[#1E2334]/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{node.event}</div>
                            <div className="text-xs text-[#64748B]">{node.day}</div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-11">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {node.departments.map((dept, deptIndex) => (
                            <span key={deptIndex} className="text-xs px-2 py-1 rounded bg-[#3B82F6]/20 text-[#3B82F6]">
                              {dept}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-[#94A3B8]">交付: {node.deliverable}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-4">总体进度甘特图</h5>
                <div className="bg-[#0F1118]/50 rounded-lg p-4">
                  <div className="space-y-2">
                    {[
                      { dept: "质量部", start: 1, duration: 7, color: "bg-[#3B82F6]" },
                      { dept: "研发部", start: 1, duration: 17, color: "bg-[#8B5CF6]" },
                      { dept: "生产部", start: 3, duration: 10, color: "bg-[#10B981]" },
                      { dept: "采购部", start: 1, duration: 14, color: "bg-[#F59E0B]" },
                    ].map((item, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-white">{item.dept}</span>
                          <span className="text-xs text-[#64748B]">{item.duration}天</span>
                        </div>
                        <div className="relative h-6 bg-[#1E2334] rounded">
                          <div
                            className={`absolute h-full ${item.color} rounded`}
                            style={{
                              left: `${(item.start - 1) * 5.88}%`,
                              width: `${item.duration * 5.88}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-[#64748B]">
                    <span>第1天</span>
                    <span>第8天</span>
                    <span>第17天</span>
                  </div>
                </div>

                <div className="mt-4 bg-[#0F1118]/50 rounded-lg p-4">
                  <h6 className="font-medium text-white mb-3">成功指标</h6>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { metric: "按时完成率", target: "100%", current: "规划中" },
                      { metric: "预算控制", target: "±5%", current: "规划中" },
                      { metric: "质量达标", target: "100%", current: "规划中" },
                      { metric: "协作效率", target: "95%", current: "规划中" },
                    ].map((kpi, index) => (
                      <div key={index} className="p-2 bg-[#1E2334]/30 rounded text-center">
                        <div className="text-xs text-[#64748B]">{kpi.metric}</div>
                        <div className="text-sm font-medium text-[#10B981]">{kpi.target}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Implementation Timeline */}
      {showImplementation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1E2334]/30 border border-[#1E2334] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-7 h-7 text-[#3B82F6]" />
            <h3 className="text-2xl font-bold text-[#3B82F6]">实施计划</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <div>
              <h4 className="font-semibold text-white text-lg mb-6">30天实施时间表</h4>
              <div className="space-y-6">
                {[
                  {
                    phase: "第1-7天",
                    title: "紧急措施",
                    color: "bg-[#EF4444]",
                    tasks: ["工装临时调整", "操作工紧急培训", "质检标准临时更新", "供应商沟通"],
                    status: "已规划",
                  },
                  {
                    phase: "第8-14天",
                    title: "技术改进",
                    color: "bg-[#3B82F6]",
                    tasks: ["新工装设计制造", "工位布局优化", "测试验证", "操作标准更新"],
                    status: "待启动",
                  },
                  {
                    phase: "第15-21天",
                    title: "标准更新",
                    color: "bg-[#8B5CF6]",
                    tasks: ["质检标准修订", "培训体系建立", "供应商管理机制更新", "数据库建设"],
                    status: "待启动",
                  },
                  {
                    phase: "第22-30天",
                    title: "系统验证",
                    color: "bg-[#10B981]",
                    tasks: ["效果验证", "持续改进", "经验总结", "推广准备"],
                    status: "待启动",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-4 h-4 rounded-full ${item.color} mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium text-white text-lg">{item.phase}</span>
                        <span className="text-sm text-[#64748B]">{item.title}</span>
                        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-[#1E2334]/50 text-[#94A3B8]">
                          {item.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center gap-2 p-3 bg-[#0F1118]/50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                            <span className="text-sm text-[#E2E8F0]">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Results */}
            <div>
              <h4 className="font-semibold text-white text-lg mb-6">预期效果</h4>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#10B981]/20 to-[#059669]/10 border border-[#10B981]/30 rounded-lg p-5">
                  <h5 className="font-semibold text-[#10B981] mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    质量改善
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">不良率</div>
                      <div className="text-lg font-bold text-[#10B981]">5.2% → 3%</div>
                      <div className="text-xs text-[#64748B]">降低42.3%</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">客户投诉</div>
                      <div className="text-lg font-bold text-[#10B981]">32起 → 6起</div>
                      <div className="text-xs text-[#64748B]">降低81.3%</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">返工成本</div>
                      <div className="text-lg font-bold text-[#10B981]">85万 → 30万</div>
                      <div className="text-xs text-[#64748B]">降低64.7%</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">客户满意度</div>
                      <div className="text-lg font-bold text-[#10B981]">72分 → 85分</div>
                      <div className="text-xs text-[#64748B]">提升18.1%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#3B82F6]/20 to-[#1D4ED8]/10 border border-[#3B82F6]/30 rounded-lg p-5">
                  <h5 className="font-semibold text-[#3B82F6] mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    效率提升
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">安装效率</div>
                      <div className="text-lg font-bold text-[#3B82F6]">+15%</div>
                      <div className="text-xs text-[#64748B]">每台节省12分钟</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">检测时间</div>
                      <div className="text-lg font-bold text-[#3B82F6]">-30%</div>
                      <div className="text-xs text-[#64748B]">自动化程度提高</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">操作工疲劳度</div>
                      <div className="text-lg font-bold text-[#3B82F6]">显著降低</div>
                      <div className="text-xs text-[#64748B]">人体工程学改善</div>
                    </div>
                    <div className="p-3 bg-[#1E2334]/50 rounded-lg">
                      <div className="text-sm text-[#94A3B8] mb-1">问题响应时间</div>
                      <div className="text-lg font-bold text-[#3B82F6]">30分钟 → 5分钟</div>
                      <div className="text-xs text-[#64748B]">提升83.3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ROI Analysis */}
      {showROI && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#F59E0B]/10 to-[#3B82F6]/10 border border-[#F59E0B]/30 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-7 h-7 text-[#F59E0B]" />
            <h3 className="text-2xl font-bold text-[#F59E0B]">投资回报分析</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-[#0F1118]/50 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-4">投资与回报明细</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-3 bg-[#1E2334]/50 rounded-lg">
                    <div className="col-span-1 text-sm text-[#94A3B8]">项目</div>
                    <div className="col-span-1 text-sm text-[#94A3B8] text-center">投入</div>
                    <div className="col-span-1 text-sm text-[#94A3B8] text-right">年度收益</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-3 bg-[#1E2334]/30 rounded-lg">
                    <div className="col-span-1 text-sm text-white">技术改进</div>
                    <div className="col-span-1 text-sm text-[#EF4444] text-center">48万元</div>
                    <div className="col-span-1 text-sm text-[#10B981] text-right">320万元</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-3 bg-[#1E2334]/30 rounded-lg">
                    <div className="col-span-1 text-sm text-white">管理优化</div>
                    <div className="col-span-1 text-sm text-[#EF4444] text-center">26万元</div>
                    <div className="col-span-1 text-sm text-[#10B981] text-right">160万元</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-3 bg-[#1E2334]/30 rounded-lg">
                    <div className="col-span-1 text-sm text-white">培训费用</div>
                    <div className="col-span-1 text-sm text-[#EF4444] text-center">8万元</div>
                    <div className="col-span-1 text-sm text-[#10B981] text-right">不适用</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-3 bg-[#1E2334]/30 rounded-lg">
                    <div className="col-span-1 text-sm text-white">系统验证</div>
                    <div className="col-span-1 text-sm text-[#EF4444] text-center">5万元</div>
                    <div className="col-span-1 text-sm text-[#10B981] text-right">不适用</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#1E2334]/70 rounded-lg font-medium">
                    <div className="col-span-1 text-sm text-white">总计</div>
                    <div className="col-span-1 text-sm text-[#EF4444] text-center">87万元</div>
                    <div className="col-span-1 text-sm text-[#10B981] text-right">480万元</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#0F1118]/50 rounded-lg p-5 h-full flex flex-col justify-between">
                <h4 className="font-semibold text-white mb-4">关键财务指标</h4>

                <div className="space-y-6 flex-grow">
                  <div className="text-center p-4 bg-[#1E2334]/50 rounded-lg">
                    <div className="text-sm text-[#94A3B8] mb-2">投资回报周期</div>
                    <div className="text-3xl font-bold text-[#F59E0B]">3个月</div>
                  </div>

                  <div className="text-center p-4 bg-[#1E2334]/50 rounded-lg">
                    <div className="text-sm text-[#94A3B8] mb-2">年度ROI</div>
                    <div className="text-3xl font-bold text-[#10B981]">552%</div>
                  </div>

                  <div className="text-center p-4 bg-[#1E2334]/50 rounded-lg">
                    <div className="text-sm text-[#94A3B8] mb-2">5年累计收益</div>
                    <div className="text-3xl font-bold text-[#3B82F6]">2400万元</div>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-gradient-to-r from-[#F59E0B]/20 to-[#10B981]/20 rounded-lg">
                  <p className="text-sm text-center text-[#E2E8F0]">
                    <span className="font-medium text-[#F59E0B]">财务结论:</span>{" "}
                    项目具有极高投资回报率，短期内即可收回成本
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
