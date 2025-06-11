"use client"

import type React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { AlertTriangle, BarChart3, Users, Lightbulb, CheckCircle, Brain } from "lucide-react"

interface AppSidebarProps {
  sections: Array<{ id: number; name: string; component: React.ReactNode }>
  activeSection: number
  completedSections: number[]
  onSectionChange: (sectionId: number) => void
}

export default function AppSidebar({ sections, activeSection, completedSections, onSectionChange }: AppSidebarProps) {
  const sectionIcons = [
    <AlertTriangle key="alert" className="w-4 h-4" />,
    <BarChart3 key="chart" className="w-4 h-4" />,
    <Users key="users" className="w-4 h-4" />,
    <Lightbulb key="lightbulb" className="w-4 h-4" />,
  ]

  return (
    <Sidebar className="border-r border-[#1E2334]">
      <SidebarHeader className="border-b border-[#1E2334] p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-white">分析流程</h2>
            <p className="text-xs text-[#64748B]">AI驱动质量分析</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>分析阶段</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section, index) => (
                <SidebarMenuItem key={section.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(section.id)}
                    isActive={activeSection === index}
                    className="w-full justify-start"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeSection === index
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white"
                          : completedSections.includes(index)
                            ? "bg-[#10B981] text-white"
                            : "bg-[#1E2334] text-[#64748B]"
                      }`}
                    >
                      {completedSections.includes(index) ? <CheckCircle className="w-4 h-4" /> : sectionIcons[index]}
                    </div>
                    <span className="ml-3">{section.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>案例信息</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="bg-[#1E2334]/50 rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">案例编号:</span>
                <span className="text-[#3B82F6] font-mono">QA-2025-0610</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">生产线:</span>
                <span className="text-white">主机厂A线</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">优先级:</span>
                <span className="text-[#EF4444] font-medium">高</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">开始时间:</span>
                <span className="text-[#64748B]">14:32</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-[#1E2334] p-4">
        <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-lg p-3 flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0A0C10] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-white">AI分析引擎</div>
            <div className="text-xs text-[#64748B]">实时运行中</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
