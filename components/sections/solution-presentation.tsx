"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Settings, Target, Clock, DollarSign, TrendingUp, ChevronRight } from "lucide-react"

export default function SolutionPresentation() {
  const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShowAll(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const StatCard = ({
    icon: Icon,
    value,
    label,
    color,
  }: { icon: React.ElementType; value: string; label: string; color: string }) => (
    <div className="bg-background border border-border rounded-lg p-3 text-center shadow-inner-highlight">
      <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
      <div className={`text-lg font-bold ${color} mb-0.5`}>{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )

  const SolutionItem = ({
    icon: Icon,
    title,
    children,
    color,
  }: { icon: React.ElementType; title: string; children: React.ReactNode; color: string }) => (
    <div className="bg-background border border-border rounded-lg p-5 shadow-inner-highlight h-full">
      <div className={`flex items-center justify-between mb-3`}>
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${color}`} />
          <h4 className="font-semibold text-sm text-card-foreground">{title}</h4>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="space-y-2 text-xs text-muted-foreground">{children}</div>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          启动8D流程D5-D8。基于AI共识，生成覆盖技术、管理、实施的全方位、可执行的解决方案，并建立预防机制。
        </p>
      </div>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/20 rounded-lg p-6"
        >
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-primary">小瑞AI综合解决方案 (D5-D7)</h3>
            <p className="text-muted-foreground text-xs">确定、验证并实施永久纠正措施</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard icon={Target} value="<0.3%" label="目标不良率" color="text-tag-green-text" />
            <StatCard icon={Clock} value="30天" label="实施周期" color="text-tag-purple-text" />
            <StatCard icon={DollarSign} value="135万" label="预计挽回损失" color="text-accent" />
            <StatCard icon={TrendingUp} value="96.8%" label="方案置信度" color="text-primary" />
          </div>
        </motion.div>
      )}

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <SolutionItem icon={Sparkles} title="技术与工程对策" color="text-tag-purple-text">
            <p>
              <strong>技术部 (Engineering):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>主导新型自适应压装工装(FX-A3)的设计与验证，集成扭矩/压力双闭环控制系统。</li>
                <li>完成工装的详细FEA仿真分析，确保结构强度与疲劳寿命。</li>
                <li>输出工装设计图纸、BOM清单及维护手册。</li>
              </ul>
            </p>
            <p>
              <strong>工艺部 (Process Engineering):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>修订并发布OP30工位SOP (WI-OP-30-A Rev.C)，明确新材料工艺窗口（压力范围、压装速度、保压时间）。</li>
                <li>进行工艺验证(PV)，确保新工艺参数的稳定性和可重复性。</li>
                <li>与培训部门协作，开发工艺操作要点及故障排除指南。</li>
              </ul>
            </p>
            <p>
              <strong>模具部 (Tooling Department):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>根据技术部设计，负责FX-A3工装的制造、装配与调试。</li>
                <li>建立工装的预防性维护计划(PM)，包括定期校准和易损件更换。</li>
                <li>管理工装台账，追踪使用寿命与维修记录。</li>
              </ul>
            </p>
          </SolutionItem>
          <SolutionItem icon={Settings} title="质量与管理对策" color="text-primary">
            <p>
              <strong>质量部 (Quality Assurance):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>更新控制计划(Control Plan Rev.D)与过程FMEA (PFMEA Rev.E)，将材料硬度列为关键特性(KC)。</li>
                <li>强化入料检验(IQC)流程，增加对密封条硬度和尺寸的抽检频率与样本量。</li>
                <li>负责新工艺的PPAP提交与批准，监控实施后的PPM与Cpk指标。</li>
              </ul>
            </p>
            <p>
              <strong>SQA部 (Supplier Quality Assurance):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>立即对密封条供应商执行过程审核(Process Audit)，评估其变更管理流程有效性。</li>
                <li>将APQP核心工具要求（如Control Plan, FMEA）嵌入供应商变更管理系统。</li>
                <li>与供应商共同制定材料特性一致性保证计划。</li>
              </ul>
            </p>
            <p>
              <strong>HR部 (Human Resources):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>联合工艺部、培训部开发VR/AR混合现实培训模块，针对OP30工位全员进行新SOP的认证培训。</li>
                <li>更新技能矩阵，追踪操作员培训完成情况与考核结果。</li>
              </ul>
            </p>
          </SolutionItem>
          <SolutionItem icon={Zap} title="实施、IT与预防 (D8)" color="text-accent">
            <p>
              <strong>项目管理组 (PMO):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>采用敏捷项目管理方法，制定详细的30天分阶段实施计划，每日召开站会跟踪进展。</li>
                <li>协调各部门资源，确保按时完成A/B测试及效果验证。</li>
                <li>负责项目风险管理与沟通协调。</li>
              </ul>
            </p>
            <p>
              <strong>设备部 (Equipment Maintenance):</strong>
              <ul class="list-disc list-inside pl-3">
                <li>协助安装调试新工装FX-A3，确保与现有生产线PLC系统兼容。</li>
                <li>负责新工装的日常点检与维护，确保设备OEE达标。</li>
                <li>记录设备故障数据，配合数据科学团队进行预测性维护模型训练。</li>
              </ul>
            </p>
            <p>
              <strong>IT与数据科学团队:</strong>
              <ul class="list-disc list-inside pl-3">
                <li>将新工艺参数、设备状态监控点集成至MES与SCADA系统。</li>
                <li>部署AI模型持续监控Cpk及关键工艺参数，建立早期预警机制。</li>
                <li>
                  将此8D案例及解决方案结构化归档至公司知识库，用于未来产品开发和FMEA更新，实现经验教训的闭环管理。
                </li>
              </ul>
            </p>
          </SolutionItem>
        </motion.div>
      )}

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background border border-border rounded-lg p-5 shadow-inner-highlight"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-card-foreground">投资回报分析 (年度)</h3>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">总投入 (CAPEX + OPEX)</p>
              <p className="text-xl font-bold text-destructive">87万元</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">总收益 (质量成本节约)</p>
              <p className="text-xl font-bold text-tag-green-text">480万元</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">年度ROI</p>
              <p className="text-xl font-bold text-tag-green-text">552%</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
