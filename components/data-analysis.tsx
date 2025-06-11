"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { BarChart, LineChart, PieChart, Share2, Filter, Zap, Brain } from "lucide-react"
import { Chart } from "chart.js/auto"

export default function DataAnalysis() {
  const paretoChartRef = useRef<HTMLCanvasElement>(null)
  const spcChartRef = useRef<HTMLCanvasElement>(null)
  const defectPieRef = useRef<HTMLCanvasElement>(null)

  const [showPareto, setShowPareto] = useState(false)
  const [showSPC, setShowSPC] = useState(false)
  const [showFishbone, setShowFishbone] = useState(false)
  const [showPie, setShowPie] = useState(false)
  const [showAiThinking, setShowAiThinking] = useState(false)
  const [aiThinkingComplete, setAiThinkingComplete] = useState(false)

  useEffect(() => {
    const paretoTimer = setTimeout(() => setShowPareto(true), 1000)
    const spcTimer = setTimeout(() => setShowSPC(true), 3000)
    const fishboneTimer = setTimeout(() => setShowFishbone(true), 5000)
    const aiThinkingTimer = setTimeout(() => setShowAiThinking(true), 6000)
    const aiThinkingCompleteTimer = setTimeout(() => setAiThinkingComplete(true), 8000)
    const pieTimer = setTimeout(() => setShowPie(true), 9000)

    return () => {
      clearTimeout(paretoTimer)
      clearTimeout(spcTimer)
      clearTimeout(fishboneTimer)
      clearTimeout(aiThinkingTimer)
      clearTimeout(aiThinkingCompleteTimer)
      clearTimeout(pieTimer)
    }
  }, [])

  useEffect(() => {
    if (showPareto && paretoChartRef.current) {
      const ctx = paretoChartRef.current.getContext("2d")
      if (ctx) {
        const paretoChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["密封条变形", "安装位置偏移", "密封条材质问题", "安装工具不当", "操作失误", "其他"],
            datasets: [
              {
                label: "缺陷数量",
                data: [42, 28, 15, 10, 5, 3],
                backgroundColor: "rgba(54, 191, 250, 0.7)",
                borderColor: "rgba(54, 191, 250, 1)",
                borderWidth: 1,
              },
              {
                label: "累计百分比",
                data: [40.8, 68.0, 82.5, 92.2, 97.1, 100],
                type: "line",
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(139, 92, 246, 1)",
                yAxisID: "y1",
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "缺陷数量",
                  color: "#94A3B8",
                },
                ticks: {
                  color: "#94A3B8",
                },
                grid: {
                  color: "rgba(30, 35, 52, 0.3)",
                },
              },
              y1: {
                beginAtZero: true,
                position: "right",
                max: 100,
                title: {
                  display: true,
                  text: "累计百分比 (%)",
                  color: "#94A3B8",
                },
                ticks: {
                  color: "#94A3B8",
                },
                grid: {
                  display: false,
                },
              },
              x: {
                ticks: {
                  color: "#94A3B8",
                },
                grid: {
                  color: "rgba(30, 35, 52, 0.3)",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "密封条问题帕累托分析",
                color: "#E2E8F0",
                font: {
                  size: 16,
                },
              },
              legend: {
                labels: {
                  color: "#94A3B8",
                },
              },
            },
          },
        })

        return () => {
          paretoChart.destroy()
        }
      }
    }
  }, [showPareto])

  useEffect(() => {
    if (showSPC && spcChartRef.current) {
      const ctx = spcChartRef.current.getContext("2d")
      if (ctx) {
        const spcChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "5/15",
              "5/17",
              "5/19",
              "5/21",
              "5/23",
              "5/25",
              "5/27",
              "5/29",
              "5/31",
              "6/2",
              "6/4",
              "6/6",
              "6/8",
            ],
            datasets: [
              {
                label: "不良率 (%)",
                data: [2.1, 2.3, 2.8, 3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.0, 5.2, 5.3, 5.2],
                backgroundColor: "rgba(244, 63, 94, 0.2)",
                borderColor: "rgba(244, 63, 94, 1)",
                borderWidth: 2,
                tension: 0.3,
                pointBackgroundColor: "rgba(244, 63, 94, 1)",
              },
              {
                label: "UCL (上控制限)",
                data: Array(13).fill(3.5),
                backgroundColor: "transparent",
                borderColor: "rgba(251, 191, 36, 0.8)",
                borderWidth: 2,
                borderDash: [5, 5],
                pointStyle: false,
              },
              {
                label: "目标值",
                data: Array(13).fill(2.0),
                backgroundColor: "transparent",
                borderColor: "rgba(16, 185, 129, 0.8)",
                borderWidth: 2,
                borderDash: [5, 5],
                pointStyle: false,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "不良率 (%)",
                  color: "#94A3B8",
                },
                ticks: {
                  color: "#94A3B8",
                },
                grid: {
                  color: "rgba(30, 35, 52, 0.3)",
                },
              },
              x: {
                ticks: {
                  color: "#94A3B8",
                },
                grid: {
                  color: "rgba(30, 35, 52, 0.3)",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "密封条安装不良率SPC控制图",
                color: "#E2E8F0",
                font: {
                  size: 16,
                },
              },
              legend: {
                labels: {
                  color: "#94A3B8",
                },
              },
              annotation: {
                annotations: {
                  line1: {
                    type: "line",
                    yMin: 3.5,
                    yMax: 3.5,
                    borderColor: "rgba(251, 191, 36, 0.8)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    label: {
                      content: "UCL",
                      enabled: true,
                    },
                  },
                },
              },
            },
          },
        })

        return () => {
          spcChart.destroy()
        }
      }
    }
  }, [showSPC])

  useEffect(() => {
    if (showPie && defectPieRef.current) {
      const ctx = defectPieRef.current.getContext("2d")
      if (ctx) {
        const pieChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["前门左侧", "前门右侧", "后门左侧", "后门右侧"],
            datasets: [
              {
                data: [45, 35, 12, 8],
                backgroundColor: [
                  "rgba(244, 63, 94, 0.8)",
                  "rgba(139, 92, 246, 0.8)",
                  "rgba(54, 191, 250, 0.8)",
                  "rgba(16, 185, 129, 0.8)",
                ],
                borderColor: [
                  "rgba(244, 63, 94, 1)",
                  "rgba(139, 92, 246, 1)",
                  "rgba(54, 191, 250, 1)",
                  "rgba(16, 185, 129, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "缺陷位置分布",
                color: "#E2E8F0",
                font: {
                  size: 16,
                },
              },
              legend: {
                position: "right",
                labels: {
                  color: "#94A3B8",
                },
              },
            },
          },
        })

        return () => {
          pieChart.destroy()
        }
      }
    }
  }, [showPie])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94A3B8]">
          数据分析与根因探索
        </h2>
        <div className="flex space-x-2">
          <button className="bg-[#1E2334]/50 hover:bg-[#1E2334] text-[#36BFFA] px-3 py-1.5 rounded-md text-sm flex items-center transition-colors">
            <Filter className="h-4 w-4 mr-1" />
            筛选
          </button>
          <button className="bg-gradient-to-r from-[#3245FF]/20 to-[#BC52EE]/20 hover:from-[#3245FF]/30 hover:to-[#BC52EE]/30 text-[#8B5CF6] px-3 py-1.5 rounded-md text-sm flex items-center transition-colors border border-[#8B5CF6]/30">
            <Zap className="h-4 w-4 mr-1" />
            AI分析
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pareto Chart */}
        {showPareto && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#36BFFA] flex items-center">
                <BarChart className="mr-2 h-4 w-4" />
                帕累托分析
              </h3>
              <span className="text-xs text-[#94A3B8] bg-[#1E2334]/50 px-2 py-0.5 rounded-full">80/20原则</span>
            </div>
            <div className="h-64">
              <canvas ref={paretoChartRef}></canvas>
            </div>
            <div className="mt-2 text-xs text-[#94A3B8] bg-[#1E2334]/50 p-2 rounded-md">
              <p>分析结果: 密封条变形和安装位置偏移占总缺陷的68%，应优先解决</p>
            </div>
          </motion.div>
        )}

        {/* SPC Chart */}
        {showSPC && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#36BFFA] flex items-center">
                <LineChart className="mr-2 h-4 w-4" />
                SPC控制图分析
              </h3>
              <span className="text-xs text-[#94A3B8] bg-[#1E2334]/50 px-2 py-0.5 rounded-full">统计过程控制</span>
            </div>
            <div className="h-64">
              <canvas ref={spcChartRef}></canvas>
            </div>
            <div className="mt-2 text-xs text-[#94A3B8] bg-[#1E2334]/50 p-2 rounded-md">
              <p>分析结果: 5月23日起不良率持续超出上控制限，显示过程失控</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Fishbone Diagram */}
      {showFishbone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-[#36BFFA] flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              鱼骨图分析
            </h3>
            <span className="text-xs text-[#94A3B8] bg-[#1E2334]/50 px-2 py-0.5 rounded-full">根因探索</span>
          </div>
          <div className="relative h-80 overflow-hidden">
            <svg viewBox="0 0 1000 400" className="w-full h-full">
              {/* Main spine */}
              <path d="M50,200 L900,200" stroke="#1E2334" strokeWidth="3" />

              {/* Problem statement */}
              <rect
                x="900"
                y="170"
                width="80"
                height="60"
                rx="10"
                fill="url(#problemGradient)"
                stroke="#F43F5E"
                strokeWidth="1"
              />
              <text x="940" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="12">
                密封条安装不良
              </text>

              {/* Main categories */}
              {/* 人员 */}
              <path d="M200,200 L200,50" stroke="#1E2334" strokeWidth="2" />
              <text x="200" y="30" textAnchor="middle" fill="#94A3B8" fontSize="14">
                人员
              </text>

              {/* 方法 */}
              <path d="M400,200 L400,50" stroke="#1E2334" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#94A3B8" fontSize="14">
                方法
              </text>

              {/* 机器 */}
              <path d="M600,200 L600,50" stroke="#1E2334" strokeWidth="2" />
              <text x="600" y="30" textAnchor="middle" fill="#94A3B8" fontSize="14">
                机器
              </text>

              {/* 材料 */}
              <path d="M800,200 L800,50" stroke="#1E2334" strokeWidth="2" />
              <text x="800" y="30" textAnchor="middle" fill="#94A3B8" fontSize="14">
                材料
              </text>

              {/* 环境 */}
              <path d="M300,200 L300,350" stroke="#1E2334" strokeWidth="2" />
              <text x="300" y="380" textAnchor="middle" fill="#94A3B8" fontSize="14">
                环境
              </text>

              {/* 测量 */}
              <path d="M700,200 L700,350" stroke="#1E2334" strokeWidth="2" />
              <text x="700" y="380" textAnchor="middle" fill="#94A3B8" fontSize="14">
                测量
              </text>

              {/* Sub-causes - 人员 */}
              <path d="M200,50 L150,80" stroke="#1E2334" strokeWidth="1" />
              <text x="140" y="85" textAnchor="end" fill="#E2E8F0" fontSize="11">
                培训不足
              </text>

              <path d="M200,50 L250,80" stroke="#1E2334" strokeWidth="1" />
              <text x="260" y="85" textAnchor="start" fill="#E2E8F0" fontSize="11">
                操作失误
              </text>

              <path d="M200,50 L180,100" stroke="#1E2334" strokeWidth="1" />
              <text x="170" y="105" textAnchor="end" fill="#E2E8F0" fontSize="11">
                疲劳因素
              </text>

              {/* Sub-causes - 方法 */}
              <path d="M400,50 L350,80" stroke="#1E2334" strokeWidth="1" />
              <text x="340" y="85" textAnchor="end" fill="#E2E8F0" fontSize="11">
                安装流程不当
              </text>

              <path d="M400,50 L450,80" stroke="#1E2334" strokeWidth="1" />
              <text x="460" y="85" textAnchor="start" fill="#E2E8F0" fontSize="11">
                标准不明确
              </text>

              <path d="M400,50 L380,100" stroke="#1E2334" strokeWidth="1" />
              <text x="370" y="105" textAnchor="end" fill="#E2E8F0" fontSize="11">
                检验方法不足
              </text>

              {/* Sub-causes - 机器 */}
              <path d="M600,50 L550,80" stroke="#1E2334" strokeWidth="1" />
              <text x="540" y="85" textAnchor="end" fill="#E2E8F0" fontSize="11">
                工具磨损
              </text>

              <path d="M600,50 L650,80" stroke="#1E2334" strokeWidth="1" />
              <text x="660" y="85" textAnchor="start" fill="#E2E8F0" fontSize="11">
                设备校准不当
              </text>

              <path d="M600,50 L580,100" stroke="#1E2334" strokeWidth="1" />
              <text x="570" y="105" textAnchor="end" fill="#E2E8F0" fontSize="11">
                压力不均匀
              </text>

              {/* Sub-causes - 材料 */}
              <path d="M800,50 L750,80" stroke="#1E2334" strokeWidth="1" />
              <text x="740" y="85" textAnchor="end" fill="#E2E8F0" fontSize="11">
                密封条质量变化
              </text>

              <path d="M800,50 L850,80" stroke="#1E2334" strokeWidth="1" />
              <text x="860" y="85" textAnchor="start" fill="#E2E8F0" fontSize="11">
                材料规格不符
              </text>

              <path d="M800,50 L780,100" stroke="#1E2334" strokeWidth="1" />
              <text x="770" y="105" textAnchor="end" fill="#E2E8F0" fontSize="11">
                供应商变更
              </text>

              {/* Sub-causes - 环境 */}
              <path d="M300,350 L250,320" stroke="#1E2334" strokeWidth="1" />
              <text x="240" y="315" textAnchor="end" fill="#E2E8F0" fontSize="11">
                温度波动
              </text>

              <path d="M300,350 L350,320" stroke="#1E2334" strokeWidth="1" />
              <text x="360" y="315" textAnchor="start" fill="#E2E8F0" fontSize="11">
                湿度过高
              </text>

              <path d="M300,350 L280,300" stroke="#1E2334" strokeWidth="1" />
              <text x="270" y="295" textAnchor="end" fill="#E2E8F0" fontSize="11">
                工位拥挤
              </text>

              {/* Sub-causes - 测量 */}
              <path d="M700,350 L650,320" stroke="#1E2334" strokeWidth="1" />
              <text x="640" y="315" textAnchor="end" fill="#E2E8F0" fontSize="11">
                检测设备不准
              </text>

              <path d="M700,350 L750,320" stroke="#1E2334" strokeWidth="1" />
              <text x="760" y="315" textAnchor="start" fill="#E2E8F0" fontSize="11">
                抽检比例低
              </text>

              <path d="M700,350 L680,300" stroke="#1E2334" strokeWidth="1" />
              <text x="670" y="295" textAnchor="end" fill="#E2E8F0" fontSize="11">
                测量标准不一
              </text>

              {/* Highlight critical factors */}
              <circle cx="250" cy="80" r="8" fill="url(#criticalGradient)" className="shadow-glow-red" />
              <circle cx="450" cy="80" r="8" fill="url(#criticalGradient)" className="shadow-glow-red" />
              <circle cx="750" cy="80" r="8" fill="url(#criticalGradient)" className="shadow-glow-red" />
              <circle cx="580" cy="100" r="8" fill="url(#criticalGradient)" className="shadow-glow-red" />

              {/* Gradients */}
              <defs>
                <linearGradient id="problemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7F1D1D" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
                <linearGradient id="criticalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mt-2 text-xs text-[#94A3B8] bg-[#1E2334]/50 p-2 rounded-md">
            <p>分析结果: 密封条质量变化、安装标准不明确、操作失误和压力不均匀是主要根因</p>
          </div>
        </motion.div>
      )}

      {/* AI Thinking Process */}
      {showAiThinking && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#3245FF]/10 to-[#BC52EE]/10 backdrop-blur-md rounded-lg p-4 border border-[#8B5CF6]/30"
        >
          <div className="flex items-center mb-3">
            <div className="relative mr-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center shadow-glow-purple">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#36BFFA] animate-pulse"></div>
              </div>
            </div>
            <h3 className="font-medium text-[#8B5CF6]">AI 分析处理中</h3>
          </div>

          <div className="space-y-2 pl-11">
            {aiThinkingComplete ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#E2E8F0]">
                <p className="mb-2">分析完成，已识别关键根因并生成解决方案建议。</p>
                <div className="flex space-x-1 text-[#8B5CF6]">
                  <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">数据关联性: 98.2%</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">置信度: 高</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E2334]/50 text-xs">处理时间: 1.2秒</span>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-full bg-[#1E2334] rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-[#36BFFA] to-[#8B5CF6] h-1.5 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <span className="ml-2 text-xs text-[#94A3B8]">75%</span>
                </div>
                <div className="text-xs text-[#94A3B8] italic">正在分析数据模式、识别异常点并建立因果关系...</div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Additional Analysis */}
      {showPie && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"
        >
          <div className="bg-[#1E2334]/30 backdrop-blur-md rounded-lg p-4 border border-[#1E2334]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#36BFFA] flex items-center">
                <PieChart className="mr-2 h-4 w-4" />
                缺陷位置分布
              </h3>
            </div>
            <div className="h-64">
              <canvas ref={defectPieRef}></canvas>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#3245FF]/10 to-[#BC52EE]/10 backdrop-blur-md rounded-lg p-4 border border-[#8B5CF6]/30">
            <div className="flex items-center mb-3">
              <div className="relative mr-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3245FF] to-[#BC52EE] flex items-center justify-center shadow-glow-purple">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="font-medium text-[#8B5CF6]">AI 分析结论</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
                <p className="font-medium text-[#36BFFA] mb-2">主要发现</p>
                <ul className="list-disc list-inside space-y-1 text-[#E2E8F0]">
                  <li>密封条变形和安装位置偏移是主要缺陷类型</li>
                  <li>前门左右侧是问题高发区域，占总缺陷的80%</li>
                  <li>5月23日起不良率持续超出控制上限</li>
                  <li>供应商近期更换了密封条材料配方</li>
                </ul>
              </div>

              <div className="bg-[#1E2334]/50 backdrop-blur-md rounded-lg p-3 border border-[#1E2334]">
                <p className="font-medium text-[#8B5CF6] mb-2">关键根因</p>
                <ol className="list-decimal list-inside space-y-1 text-[#E2E8F0]">
                  <li>密封条材料配方变更导致硬度增加，安装难度提高</li>
                  <li>安装工具压力不均匀，无法适应新材料特性</li>
                  <li>操作人员未接受新材料安装培训</li>
                  <li>质量检验标准未随材料变更而更新</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
