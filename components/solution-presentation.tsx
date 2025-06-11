"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Sparkles, FileCheck, Zap, Settings, Database, Cpu, Brain, Layers } from "lucide-react"

export default function SolutionPresentation() {
  const [showTechnical, setShowTechnical] = useState(false)
  const [showManagement, setShowManagement] = useState(false)
  const [showDepartmental, setShowDepartmental] = useState(false)
  const [showStandards, setShowStandards] = useState(false)

  useEffect(() => {
    const technicalTimer = setTimeout(() => setShowTechnical(true), 1000)
    const managementTimer = setTimeout(() => setShowManagement(true), 2000)
    const departmentalTimer = setTimeout(() => setShowDepartmental(true), 3000)
    const standardsTimer = setTimeout(() => setShowStandards(true), 4000)

    return () => {
      clearTimeout(technicalTimer)
      clearTimeout(managementTimer)
      clearTimeout(departmentalTimer)
      clearTimeout(standardsTimer)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          AI推荐解决方案
        </h2>
        <div className="flex items-center space-x-2 text-sm text-[#94A3B8] bg-[#1E2334]/50 px-3 py-1 rounded-full">
          <Layers className="h-4 w-4" />
          <span>方案编号: SOL-2025-0610</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#3245FF]/10 to-[#BC52EE]/10 backdrop-blur-md rounded-lg p-4 border border-[#8B5CF6]/30">
        <div className="flex items-center mb-3">
          <div className="relative mr-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center shadow-glow-purple">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
            </div>
          </div>
          <h3 className="font-medium text-[#8B5CF6]">中央分析引擎解决方案概述</h3>
        </div>

        <div className="pl-11 text-sm text-[#E2E8F0] space-y-2">
          <p>
            基于问题识别、数据分析和圆桌会议讨论，AI系统已生成全面解决方案。该方案针对密封条安装不良问题的四大根因，
            提供技术、管理和标准化三个维度的解决措施。预计实施后可将不良率从5.2%降至3%以下。
          </p>
          <div className="flex space-x-1 text-[#8B5CF6] mt-2">
            <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">置信度: 96.8%</span>
            <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">成功概率: 高</span>
            <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">预计投入: 中等</span>
          </div>
        </div>
      </div>

      {/* Technical solutions */}
      {showTechnical && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
        >
          <h3 className="font-medium text-[#36BFFA] mb-3 flex items-center">
            <Sparkles className="mr-2 h-4 w-4" />
            技术解决方案
          </h3>
          <div className="space-y-4">
            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-blue">
                  1
                </div>
                <div>
                  <p className="font-medium text-white">工装改进设计</p>
                  <p className="text-sm text-[#94A3B8] mt-1">
                    设计新型压装工具，增加弹性缓冲结构，适应硬度增加的密封条。关键特性包括：
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>可调节压力控制系统，适应不同硬度材料</li>
                    <li>弹性缓冲结构，减少材料变形风险</li>
                    <li>人体工程学手柄设计，减轻操作疲劳</li>
                    <li>集成压力传感器，实时监控安装质量</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-blue">
                  2
                </div>
                <div>
                  <p className="font-medium text-white">工位布局优化</p>
                  <p className="text-sm text-[#94A3B8] mt-1">针对前门左侧问题高发区域，优化工位布局和操作流程：</p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>调整工作台高度，符合人体工程学标准</li>
                    <li>改善照明条件，增强视觉反馈</li>
                    <li>设计辅助支撑装置，减轻操作人员手臂负担</li>
                    <li>优化操作顺序，减少不必要动作</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-blue">
                  3
                </div>
                <div>
                  <p className="font-medium text-white">材料适配性测试系统</p>
                  <p className="text-sm text-[#94A3B8] mt-1">
                    开发快速材料适配性测试系统，用于验证新材料与现有工装的兼容性：
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>硬度测试模块，快速评估材料特性</li>
                    <li>安装模拟装置，验证安装过程</li>
                    <li>密封性能测试，确保功能达标</li>
                    <li>数据采集系统，记录测试结果并生成报告</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Management solutions */}
      {showManagement && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
        >
          <h3 className="font-medium text-[#8B5CF6] mb-3 flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            管理解决方案
          </h3>
          <div className="space-y-4">
            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-purple">
                  1
                </div>
                <div>
                  <p className="font-medium text-white">供应商变更管理机制</p>
                  <p className="text-sm text-[#94A3B8] mt-1">建立完善的供应商材料变更通知和验证流程：</p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>要求供应商提前30天通知任何材料或工艺变更</li>
                    <li>建立材料变更评审委员会，包括质量、生产、研发部门代表</li>
                    <li>制定材料变更影响评估流程，包括样品测试和小批量验证</li>
                    <li>建立材料特性数据库，记录历史变更和影响</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-purple">
                  2
                </div>
                <div>
                  <p className="font-medium text-white">操作人员培训计划</p>
                  <p className="text-sm text-[#94A3B8] mt-1">针对新材料特性和工装使用开展专项培训：</p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>开发交互式培训模块，包括理论和实操环节</li>
                    <li>制作视频教程，展示正确安装方法和常见问题</li>
                    <li>建立技能评估体系，确保培训效果</li>
                    <li>设立师徒制，由经验丰富的操作工指导新手</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white text-xs mr-2 mt-0.5 shadow-glow-purple">
                  3
                </div>
                <div>
                  <p className="font-medium text-white">质量监控体系升级</p>
                  <p className="text-sm text-[#94A3B8] mt-1">增强质量监控系统，实现早期预警和快速响应：</p>
                  <ul className="mt-2 space-y-1 text-sm text-[#94A3B8] list-disc list-inside pl-2">
                    <li>增加SPC监控频率，从每日一次提高到每班一次</li>
                    <li>设置多级预警阈值，及时发现异常趋势</li>
                    <li>开发质量异常快速响应流程，明确责任和时限</li>
                    <li>建立质量问题知识库，积累经验并指导未来改进</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Departmental solutions */}
      {showDepartmental && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
        >
          <h3 className="font-medium text-[#36BFFA] mb-3 flex items-center">
            <Zap className="mr-2 h-4 w-4" />
            部门执行方案
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center shadow-glow-blue mr-2">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-medium text-[#36BFFA]">质量部</h4>
              </div>
              <ul className="space-y-1 text-sm text-[#E2E8F0]">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>更新密封条安装质量检验标准，适应新材料特性</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>制定材料变更评估流程，包括测试方法和验收标准</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>升级SPC监控系统，增加监控频率和预警机制</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center shadow-glow-purple mr-2">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-medium text-[#8B5CF6]">研发部</h4>
              </div>
              <ul className="space-y-1 text-sm text-[#E2E8F0]">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>设计新型压装工具，增加弹性缓冲结构</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>开发材料适配性快速测试系统</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>制定工装设计考虑因素清单，增加材料适应性要求</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399] flex items-center justify-center shadow-glow-green mr-2">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-medium text-[#10B981]">生产部</h4>
              </div>
              <ul className="space-y-1 text-sm text-[#E2E8F0]">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>优化前门左侧工位布局，改善操作姿势</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>组织操作工培训，提高新材料安装技能</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>制定工位人体工程学标准，减轻操作疲劳</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] flex items-center justify-center shadow-glow-yellow mr-2">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-medium text-[#FBBF24]">采购部</h4>
              </div>
              <ul className="space-y-1 text-sm text-[#E2E8F0]">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>与供应商建立材料变更通知机制</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>修订采购合同，增加材料变更管理条款</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                  <span>建立供应商材料特性数据库，记录历史变更</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Standards and documentation */}
      {showStandards && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
        >
          <h3 className="font-medium text-[#36BFFA] mb-3 flex items-center">
            <FileCheck className="mr-2 h-4 w-4" />
            标准化文件
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gradient-to-r from-[#0EA5E9]/20 to-[#38BDF8]/10 backdrop-blur-md rounded-lg p-3 border border-[#0EA5E9]/30">
              <div className="flex items-center mb-2">
                <FileCheck className="h-5 w-5 text-[#36BFFA] mr-2" />
                <p className="font-medium text-[#36BFFA]">《材料变更管理规范》</p>
              </div>
              <p className="text-xs text-[#E2E8F0]">
                规定供应商材料变更通知、样品提供和验证流程，明确各部门职责和时间节点。包含材料变更评估表、测试方法和验收标准。
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/10 backdrop-blur-md rounded-lg p-3 border border-[#8B5CF6]/30">
              <div className="flex items-center mb-2">
                <FileCheck className="h-5 w-5 text-[#8B5CF6] mr-2" />
                <p className="font-medium text-[#8B5CF6]">《密封条安装作业指导书》</p>
              </div>
              <p className="text-xs text-[#E2E8F0]">
                更新安装标准，增加不同材料硬度的操作要求，包含详细的安装步骤、关键点和常见问题处理方法。配有图文并茂的操作指南。
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/10 backdrop-blur-md rounded-lg p-3 border border-[#10B981]/30">
              <div className="flex items-center mb-2">
                <FileCheck className="h-5 w-5 text-[#10B981] mr-2" />
                <p className="font-medium text-[#10B981]">《质量异常快速响应机制》</p>
              </div>
              <p className="text-xs text-[#E2E8F0]">
                建立AI辅助的质量问题分析和多部门协同流程，定义异常等级、响应时限和升级机制。包含问题报告模板和分析工具指南。
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#F59E0B]/20 to-[#FBBF24]/10 backdrop-blur-md rounded-lg p-3 border border-[#F59E0B]/30">
              <div className="flex items-center mb-2">
                <FileCheck className="h-5 w-5 text-[#FBBF24] mr-2" />
                <p className="font-medium text-[#FBBF24]">《工装设计考虑因素清单》</p>
              </div>
              <p className="text-xs text-[#E2E8F0]">
                增加材料特性变化适应性要求，提供工装设计的关键考虑因素和验证方法。包含人体工程学设计原则和材料适配性测试标准。
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
