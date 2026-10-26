"use client"

import { MotionConfig } from "motion/react"

import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"

function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export { GlobalProviders }
