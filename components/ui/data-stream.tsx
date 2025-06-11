"use client"

import { motion } from "framer-motion"

interface DataStreamProps {
  startX: number
  startY: number
  endX: number
  endY: number
  color: string
  delay: number
  data: string
}

export default function DataStream({ startX, startY, endX, endY, color, delay, data }: DataStreamProps) {
  const pathLength = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* 保留数据流动的点 - 增加密度 */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{
            left: `${startX}%`,
            top: `${startY}%`,
            scale: 0,
          }}
          animate={{
            left: `${endX}%`,
            top: `${endY}%`,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: delay + i * 0.2, // 减少延迟间隔，从0.5秒改为0.2秒
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1.5, // 稍微减少重复延迟
          }}
        />
      ))}

      {/* Data Label */}
      <motion.div
        className="absolute text-xs font-mono"
        style={{
          left: `${(startX + endX) / 2}%`,
          top: `${(startY + endY) / 2 - 2}%`,
          color: color,
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 1 }}
      >
        {data}
      </motion.div>
    </motion.div>
  )
}
