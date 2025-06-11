"use client"

import SurfacePlot3DChart from "@/components/charts/surface-plot-3d"
import { motion } from "framer-motion"
import { Layers } from "lucide-react"

export default function SurfacePlotVisualization() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-primary mb-2">
          <Layers className="w-5 h-5" />
          <h3 className="text-base font-semibold">Interactive Parameter Landscape</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          This 3D surface plot visualizes the relationship between two key process parameters (X, Y) and a critical
          quality metric (Z). Peaks may indicate optimal zones, while valleys could highlight areas of concern or defect
          concentration. Use this interactive tool to explore the parameter space and gain deeper insights.
        </p>
      </div>
      <SurfacePlot3DChart />
    </motion.div>
  )
}
