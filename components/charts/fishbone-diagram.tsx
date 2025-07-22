"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Cause {
  text: string
  level?: number
}
interface Category {
  name: string
  causes: Cause[]
}
interface FishboneDiagramProps {
  effect: string
  categories: Category[]
  width?: number
  height?: number
}

const FishboneDiagram: React.FC<FishboneDiagramProps> = ({
  effect,
  categories,
  width = 1000,
  height = 420,
}) => {
  const PADDING_X = 60
  const SPINE_Y = height / 2
  const HEAD_X = width - 80
  const TAIL_X = 80
  const BONE_LENGTH = width > 1200 ? 340 : 260
  const SUB_BONE_LENGTH = width > 1200 ? 180 : 130
  const ANGLE = 45 // degrees

  const categoryColors = [
    "text-primary", "text-accent", "text-tag-green-text", "text-blue-500",
    "text-orange-500", "text-pink-500",
  ]

  const markerId = "arrowhead"

  return (
    <div className="w-full h-full bg-card/30 p-4 rounded-lg border border-border">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
            className="fill-muted-foreground"
          >
            <path d="M0,0 L0,6 L8,3 z" />
          </marker>
          <filter id="textBg">
            <feFlood floodColor="hsl(var(--card))" floodOpacity="0.7" result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite" />
            <feGaussianBlur in="composite" stdDeviation="2" result="blur" />
            <feOffset dx="0" dy="0" result="offset" />
            <feMerge>
              <feMergeNode in="offset" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Spine */}
        <motion.line
          x1={TAIL_X}
          y1={SPINE_Y}
          x2={HEAD_X - 15}
          y2={SPINE_Y}
          className="stroke-muted-foreground"
          strokeWidth="2.5"
          markerEnd={`url(#${markerId})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Head (Effect) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <rect
            x={HEAD_X - 10}
            y={SPINE_Y - 30}
            width={130}
            height={60}
            rx="8"
            className="fill-destructive/80 stroke-destructive"
            strokeWidth="1.5"
          />
          <text
            x={HEAD_X + 55}
            y={SPINE_Y - 5}
            textAnchor="middle"
            className="fill-destructive-foreground font-semibold text-sm"
          >
            {effect.split(" (")[0]}
          </text>
          {effect.split(" (")[1] && (
            <text
              x={HEAD_X + 55}
              y={SPINE_Y + 13}
              textAnchor="middle"
              className="fill-destructive-foreground/80 font-medium text-xs"
            >
              ({effect.split(" (")[1]}
            </text>
          )}
        </motion.g>

        {categories.map((category, catIndex) => {
          const isTopBone = catIndex < categories.length / 2
          const boneAngleRad = (isTopBone ? -ANGLE : ANGLE) * (Math.PI / 180)
          const boneStartX =
            TAIL_X +
            PADDING_X +
            catIndex * ((HEAD_X - TAIL_X - 2 * PADDING_X - 50) / (categories.length - 1))
          const boneEndX = boneStartX + BONE_LENGTH * Math.cos(boneAngleRad)
          const boneEndY = SPINE_Y + BONE_LENGTH * Math.sin(boneAngleRad)

          return (
            <g key={category.name}>
              {/* Main Bone */}
              <motion.line
                x1={boneStartX}
                y1={SPINE_Y}
                x2={boneEndX}
                y2={boneEndY}
                className="stroke-muted-foreground/80"
                strokeWidth="2"
                markerEnd={`url(#${markerId})`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2 + catIndex * 0.15, duration: 0.8 }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + catIndex * 0.15, duration: 0.5 }}
              >
                <text
                  x={boneEndX + (isTopBone ? -10 : 10) * Math.cos(boneAngleRad) + (isTopBone ? -5 : 5)}
                  y={boneEndY + (isTopBone ? -10 : 18)}
                  textAnchor={isTopBone ? "end" : "start"}
                  className={`font-bold text-sm ${categoryColors[catIndex % categoryColors.length]}`}
                  filter="url(#textBg)"
                >
                  {category.name}
                </text>
              </motion.g>
              {/* Sub Bones & Causes */}
              {category.causes.map((cause, causeIndex) => {
                const subBoneStartRatio = (causeIndex + 1) / (category.causes.length + 1.5)
                const subBoneStartX = boneStartX + (boneEndX - boneStartX) * subBoneStartRatio
                const subBoneStartY = SPINE_Y + (boneEndY - SPINE_Y) * subBoneStartRatio
                const subBoneEndX = subBoneStartX + SUB_BONE_LENGTH * Math.cos(boneAngleRad)
                const subBoneEndY = subBoneStartY + SUB_BONE_LENGTH * Math.sin(boneAngleRad)
                return (
                  <g key={cause.text}>
                    <motion.line
                      x1={subBoneStartX}
                      y1={subBoneStartY}
                      x2={subBoneEndX}
                      y2={subBoneEndY}
                      className="stroke-muted-foreground/60"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: 0.6 + catIndex * 0.2 + causeIndex * 0.1,
                        duration: 0.7,
                      }}
                    />
                    <motion.circle
                      cx={subBoneStartX}
                      cy={subBoneStartY}
                      r="2.5"
                      className={`fill-muted-foreground/70`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.55 + catIndex * 0.2 + causeIndex * 0.1,
                        duration: 0.4,
                      }}
                    />
                    <motion.text
                      x={subBoneEndX + (isTopBone ? -5 : 5) * Math.cos(boneAngleRad)}
                      y={subBoneEndY + (isTopBone ? -5 : 10)}
                      textAnchor={isTopBone ? "end" : "start"}
                      className="fill-card-foreground/90 text-[11px] font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.1 + catIndex * 0.2 + causeIndex * 0.1,
                        duration: 0.5,
                      }}
                    >
                      {cause.text}
                    </motion.text>
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default FishboneDiagram
