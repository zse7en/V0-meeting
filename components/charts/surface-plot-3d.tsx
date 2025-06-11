"use client"

import type React from "react"

import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Html } from "@react-three/drei"
import * as THREE from "three"
import { useMemo, useRef, useEffect, useState } from "react"

// Helper to generate data for the surface plot
const generateSurfaceData = (width: number, depth: number): number[][] => {
  const data: number[][] = []
  for (let i = 0; i < width; i++) {
    data[i] = []
    for (let j = 0; j < depth; j++) {
      const x = (i / (width - 1) - 0.5) * 10 // Range -5 to 5
      const y = (j / (depth - 1) - 0.5) * 10 // Range -5 to 5
      // Example function: Peaks and valleys, could represent defect concentration
      data[i][j] =
        Math.sin(x * 0.6 + Math.cos(y * 0.3)) * 1.5 +
        Math.cos(y * 0.8 + Math.sin(x * 0.4)) * 1.5 +
        Math.exp(-(x * x + y * y) / 20) * 2 -
        Math.exp(-((x - 3) * (x - 3) + (y - 3) * (y - 3)) / 5) * 3 + // A dip
        Math.exp(-((x + 2) * (x + 2) + (y + 1) * (y + 1)) / 8) * 2.5 // A peak
    }
  }
  return data
}

// Colormap function (viridis-like)
const getColorForValue = (value: number, minZ: number, maxZ: number): THREE.Color => {
  const t = (value - minZ) / (maxZ - minZ || 1) // Normalize value
  // Viridis-like: blue -> cyan -> green -> yellow
  if (t < 0.25) return new THREE.Color(0.27, 0.0, 0.53).lerp(new THREE.Color(0.12, 0.29, 0.8), t / 0.25) // Deep blue to blue
  if (t < 0.5) return new THREE.Color(0.12, 0.29, 0.8).lerp(new THREE.Color(0.06, 0.53, 0.56), (t - 0.25) / 0.25) // Blue to teal
  if (t < 0.75) return new THREE.Color(0.06, 0.53, 0.56).lerp(new THREE.Color(0.46, 0.76, 0.23), (t - 0.5) / 0.25) // Teal to green
  return new THREE.Color(0.46, 0.76, 0.23).lerp(new THREE.Color(0.99, 0.91, 0.14), (t - 0.75) / 0.25) // Green to yellow
}

interface SurfaceMeshProps {
  data: number[][]
}

const SurfaceMesh: React.FC<SurfaceMeshProps> = ({ data }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const geometry = useMemo(() => {
    const width = data.length
    const depth = data[0].length
    const geom = new THREE.PlaneGeometry(10, 10, width - 1, depth - 1)
    const vertices = geom.attributes.position.array as Float32Array
    const colors = new Float32Array(vertices.length)

    let minZ = Number.POSITIVE_INFINITY
    let maxZ = Number.NEGATIVE_INFINITY
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < depth; j++) {
        minZ = Math.min(minZ, data[i][j])
        maxZ = Math.max(maxZ, data[i][j])
      }
    }

    for (let i = 0, k = 0; i < width; i++) {
      for (let j = 0; j < depth; j++, k++) {
        const z = data[i][j]
        vertices[k * 3 + 2] = z

        const color = getColorForValue(z, minZ, maxZ)
        colors[k * 3] = color.r
        colors[k * 3 + 1] = color.g
        colors[k * 3 + 2] = color.b
      }
    }

    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geom.computeVertexNormals()
    return geom
  }, [data])

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.3, 0, 0]}>
      <meshStandardMaterial vertexColors side={THREE.DoubleSide} metalness={0.2} roughness={0.8} />
    </mesh>
  )
}

const AxesAndLabels = () => {
  const { scene } = useThree()
  useEffect(() => {
    const axes = new THREE.AxesHelper(5.5) // Length of axes lines
    ;(axes.material as THREE.Material).depthTest = false
    axes.renderOrder = 1 // Ensure axes are rendered on top or correctly with other elements
    scene.add(axes)
    return () => {
      scene.remove(axes)
      ;(axes.material as THREE.Material).dispose() // Dispose material
      axes.geometry.dispose() // Dispose geometry
    }
  }, [scene])

  const textProps = {
    fontSize: 0.25,
    color: "hsl(var(--foreground))",
    anchorX: "center" as const,
    anchorY: "middle" as const,
  }

  return (
    <>
      <Text position={[6, 0, 0]} {...textProps}>
        Param X
      </Text>
      <Text position={[0, -6, 0]} {...textProps} rotation={[0, 0, 0]}>
        {" "}
        {/* Adjusted for plane rotation */}
        Param Y
      </Text>
      <Text position={[0, 0.2, 5.8]} {...textProps} rotation={[Math.PI / 2, 0, 0]}>
        Metric Z
      </Text>
      {/* Labels along axes */}
      {[-5, 0, 5].map((val) => (
        <group key={`x-${val}`}>
          <Text
            position={[val, -0.3, -5.2]}
            fontSize={0.15}
            color="hsl(var(--muted-foreground))"
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {val}
          </Text>
          <mesh position={[val, 0, -5.1]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
            <meshBasicMaterial color="hsl(var(--muted-foreground))" />
          </mesh>
        </group>
      ))}
      {[-5, 0, 5].map((val) => (
        <group key={`y-${val}`}>
          <Text
            position={[5.2, -0.3, val]}
            fontSize={0.15}
            color="hsl(var(--muted-foreground))"
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            {val}
          </Text>
          <mesh position={[5.1, 0, val]} rotation={[-Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
            <meshBasicMaterial color="hsl(var(--muted-foreground))" />
          </mesh>
        </group>
      ))}
    </>
  )
}

export default function SurfacePlot3DChart() {
  const data = useMemo(() => generateSurfaceData(60, 60), []) // Increased resolution
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the chart data processing or rendering
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden relative border border-border bg-background shadow-inner-highlight">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/80 z-10">
          <p className="text-muted-foreground">Loading 3D Plot...</p>
        </div>
      )}
      <Canvas camera={{ position: [7, 7, 10], fov: 55, up: [0, 0, 1] }} style={{ background: "transparent" }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 12]} intensity={1.5} castShadow />
        <directionalLight position={[-5, -5, 5]} intensity={0.8} />

        <SurfaceMesh data={data} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <AxesAndLabels />
        <gridHelper
          args={[10, 10, `hsl(var(--border))`, `hsl(var(--muted))`]}
          rotation={[0, 0, 0]}
          position={[0, -0.01, 0]} // Slightly below the main plane to avoid z-fighting
        />
        {/* MOVED HTML INSIDE CANVAS */}
        <Html fullscreen style={{ pointerEvents: "none" }}>
          {" "}
          {/* Added pointerEvents: 'none' to the Html wrapper div */}
          <div className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-card/70 p-1.5 rounded shadow">
            Drag to rotate. Scroll to zoom.
          </div>
        </Html>
      </Canvas>
    </div>
  )
}
