"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, TrendingUp, Brain, ChevronRight, Layers } from "lucide-react" // Added Layers
import FishboneDiagram from "../charts/fishbone-diagram"
import SurfacePlot3DChart from "@/components/charts/surface-plot-3d" // Import the new 3D chart

const SPCChart = () => {
  // More complex data
  const fullPoints = [
    1.0, 1.1, 0.9, 1.05, 0.95, 1.2, 1.1, 1.3, 1.4, 1.55, 1.45, 1.6, 1.7, 1.8, 1.75, 1.9, 2.0, 2.2, 2.1,
  ]
  const ucl = 1.5
  const lcl = 0.5
  const centerLine = 1.0
  const sigma = (ucl - centerLine) / 3 // Assuming UCL is +3 sigma

  const [points, setPoints] = useState(fullPoints.slice(0, 5))
  const [hoveredPoint, setHoveredPoint] = useState<{ index: number; x: number; y: number; value: number } | null>(null)

  // Simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((currentPoints) => {
        if (currentPoints.length < fullPoints.length) {
          return fullPoints.slice(0, currentPoints.length + 1)
        }
        // Reset animation
        return fullPoints.slice(0, 5)
      })
    }, 800) // Add a point every 800ms
    return () => clearInterval(interval)
  }, [fullPoints])

  const svgWidth = 500
  const svgHeight = 200
  const padding = { top: 20, right: 30, bottom: 20, left: 30 }
  const chartWidth = svgWidth - padding.left - padding.right
  const chartHeight = svgHeight - padding.top - padding.bottom

  const getX = (index: number) => padding.left + (index / (fullPoints.length - 1)) * chartWidth
  const getY = (value: number) =>
    padding.top + chartHeight - ((value - (lcl - sigma)) / (ucl + sigma - (lcl - sigma))) * chartHeight

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(p)}`).join(" ")
  const areaD = `${pathD} L ${getX(points.length - 1)} ${getY(lcl - sigma)} L ${getX(0)} ${getY(lcl - sigma)} Z`

  return (
    <div className="w-full h-64 bg-card/50 rounded-lg p-4 relative overflow-hidden">
      <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`h-grid-${i}`}
            x1={padding.left}
            y1={padding.top + (i * chartHeight) / 4}
            x2={svgWidth - padding.right}
            y2={padding.top + (i * chartHeight) / 4}
            className="stroke-border/50"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: Math.floor(fullPoints.length / 2) }).map((_, i) => (
          <line
            key={`v-grid-${i}`}
            x1={getX(i * 2)}
            y1={padding.top}
            x2={getX(i * 2)}
            y2={svgHeight - padding.bottom}
            className="stroke-border/50"
            strokeWidth="0.5"
          />
        ))}

        {/* Sigma Zones */}
        <rect
          x={padding.left}
          y={getY(centerLine + 2 * sigma)}
          width={chartWidth}
          height={getY(centerLine + sigma) - getY(centerLine + 2 * sigma)}
          className="fill-accent/5"
        />
        <rect
          x={padding.left}
          y={getY(centerLine + sigma)}
          width={chartWidth}
          height={getY(centerLine) - getY(centerLine + sigma)}
          className="fill-tag-green-text/5"
        />
        <rect
          x={padding.left}
          y={getY(centerLine)}
          width={chartWidth}
          height={getY(centerLine - sigma) - getY(centerLine)}
          className="fill-tag-green-text/5"
        />
        <rect
          x={padding.left}
          y={getY(centerLine - sigma)}
          width={chartWidth}
          height={getY(centerLine - 2 * sigma) - getY(centerLine - sigma)}
          className="fill-accent/5"
        />

        {/* Control Lines */}
        <line
          x1={padding.left}
          y1={getY(ucl)}
          x2={svgWidth - padding.right}
          y2={getY(ucl)}
          strokeDasharray="4 2"
          className="stroke-destructive"
          strokeWidth="1"
        />
        <text
          x={svgWidth - padding.right - 5}
          y={getY(ucl) - 4}
          textAnchor="end"
          className="text-[10px] fill-destructive font-semibold"
        >
          UCL
        </text>

        <line
          x1={padding.left}
          y1={getY(centerLine)}
          x2={svgWidth - padding.right}
          y2={getY(centerLine)}
          className="stroke-tag-green-text"
          strokeWidth="1"
        />
        <text
          x={svgWidth - padding.right - 5}
          y={getY(centerLine) - 4}
          textAnchor="end"
          className="text-[10px] fill-tag-green-text font-semibold"
        >
          CL
        </text>

        <line
          x1={padding.left}
          y1={getY(lcl)}
          x2={svgWidth - padding.right}
          y2={getY(lcl)}
          strokeDasharray="4 2"
          className="stroke-destructive"
          strokeWidth="1"
        />
        <text
          x={svgWidth - padding.right - 5}
          y={getY(lcl) + 10}
          textAnchor="end"
          className="text-[10px] fill-destructive font-semibold"
        >
          LCL
        </text>

        {/* Area Gradient */}
        <motion.path
          d={areaD}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Data Path */}
        <motion.path
          d={pathD}
          fill="none"
          className="stroke-primary"
          strokeWidth="2"
          style={{ strokeLinejoin: "round", strokeLinecap: "round" }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, ease: "linear" }}
        />

        {/* Data Points */}
        <AnimatePresence>
          {points.map((p, i) => {
            const isOutOfControl = p > ucl || p < lcl
            return (
              <motion.g
                key={i}
                onMouseEnter={() => setHoveredPoint({ index: i, x: getX(i), y: getY(p), value: p })}
                onMouseLeave={() => setHoveredPoint(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <circle cx={getX(i)} cy={getY(p)} r="8" className="fill-transparent" />
                <motion.circle
                  cx={getX(i)}
                  cy={getY(p)}
                  r="3.5"
                  className={isOutOfControl ? "fill-destructive" : "fill-primary"}
                  style={isOutOfControl ? { filter: "url(#glow)" } : {}}
                >
                  {isOutOfControl && (
                    <animate attributeName="r" values="3.5;6;3.5" dur="1.5s" repeatCount="indefinite" />
                  )}
                </motion.circle>
              </motion.g>
            )
          })}
        </AnimatePresence>
      </svg>
      {hoveredPoint && (
        <div
          className="absolute bg-card border border-border rounded-md px-2 py-1 text-xs shadow-lg pointer-events-none"
          style={{
            transform: `translate(-50%, -100%)`,
            left: `${(hoveredPoint.x / svgWidth) * 100}%`,
            top: `${(hoveredPoint.y / svgHeight) * 100}%`,
            marginTop: "-8px",
          }}
        >
          <p>Sample {hoveredPoint.index + 1}</p>
          <p className="font-semibold">{hoveredPoint.value.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

const ContributionChart = () => {
  const data = [
    { name: "材料", value: 45, color: "bg-destructive" },
    { name: "设备", value: 25, color: "bg-accent" },
    { name: "方法", value: 15, color: "bg-tag-purple-text" },
    { name: "人员", value: 10, color: "bg-tag-green-text" },
    { name: "其他", value: 5, color: "bg-muted-foreground" },
  ]
  return (
    <div className="w-full space-y-2">
      {data.map((item) => (
        <div key={item.name}>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-medium text-card-foreground">{item.value}%</span>
          </div>
          <div className="w-full bg-card/50 rounded-full h-2">
            <motion.div
              className={`${item.color} h-2 rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Data for the Fishbone Diagram
const fishboneData = {
  effect: "密封条安装不良 (PPM: 5200)",
  categories: [
    { name: "人 (Man)", causes: [{ text: "新材料操作熟练度低" }, { text: "SOP培训不足" }, { text: "疲劳操作(夜班)" }] },
    { name: "机 (Machine)", causes: [{ text: "压装工装压力传感器未校准" }, { text: "工装无法自适应硬度变化" }, { text: "设备电机电流过载报警" }] },
    { name: "法 (Method)", causes: [{ text: "SOP (WI-OP-30-A)未更新" }, { text: "安装参数基于旧材料" }, { text: "缺乏首件检验流程" }] },
    { name: "料 (Material)", causes: [{ text: "硬度增加15% (EPDM-K75)" }, { text: "弹性模量变化20%" }, { text: "供应商配方变更未充分验证" }] },
    { name: "测 (Measurement)", causes: [{ text: "检验标准依赖人工目测" }, { text: "未增加轮廓扫描仪验证" }, { text: "量具MSA过期" }] },
    { name: "环 (Environment)", causes: [{ text: "早晚班温差10°C" }, { text: "材料柔韧性受温度影响" }, { text: "工位照明不足" }] },
  ],
}

export default function DataAnalysis() {
  const [showAll, setShowAll] = useState(false)
  const [show3DPlot, setShow3DPlot] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAll(true), 300)
    const plotTimer = setTimeout(() => setShow3DPlot(true), 600)
    return () => {
      clearTimeout(timer)
      clearTimeout(plotTimer)
    }
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          启动8D流程D3（临时围堵措施）与D4（确定根本原因）。运用统计过程控制(SPC)、帕累托分析、石川图（鱼骨图）及3D参数地形图分析法挖掘深层原因。
        </p>
      </div>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground">SPC控制图 (X-bar)</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <SPCChart />
          </div>
          <div className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-card-foreground">根因贡献度 (帕累托)</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <ContributionChart />
          </div>
        </motion.div>
      )}

      {/* 3D Surface Plot */}
      {show3DPlot && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight"
        >
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-primary" />
            <h3 className="text-base font-semibold text-card-foreground">3D参数地形图分析</h3>
          </div>
          <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
            交互式3D表面图，可视化关键参数（如温度、压力）与缺陷率之间的复杂关系，帮助识别最佳工艺窗口和潜在的非线性影响。
          </p>
          <SurfacePlot3DChart />
        </motion.div>
      )}

      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-background rounded-lg p-5 border border-border shadow-inner-highlight"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="text-base font-semibold text-card-foreground">小瑞AI根因分析 - 石川图 (D4)</h3>
          </div>
          {/* -------【只需加一层横向滚动】------- */}
          <div className="w-full aspect-[1000/420] bg-background rounded-lg p-5 border border-border shadow-inner-highlight">
            {/* 重点！FishboneDiagram宽度设为1400px，支持大数据 */}
            <FishboneDiagram
              effect={fishboneData.effect}
              categories={fishboneData.categories}
              width={1000}
              height={420}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
