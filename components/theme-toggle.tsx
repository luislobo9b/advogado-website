"use client"

import * as React from "react"

import { LuMoon, LuSun } from "react-icons/lu"

import { useTheme } from "next-themes"

import { useIsClient } from "usehooks-ts"

import { cn } from "cn"

import { Button } from "@/components/ui/button"

type ThemeToggleProps = React.ComponentProps<typeof Button>

function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const isClient = useIsClient()
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  if (!isClient) {
    return (
      <div
        data-slot="theme-toggle"
        className={cn("size-9", className)}
        aria-hidden
      />
    )
  }

  return (
    <Button
      data-slot="theme-toggle"
      variant="ghost"
      size="icon-lg"
      className={cn(
        "rounded-full text-foreground/70 hover:text-foreground",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      {...props}
    >
      {isDark ? <LuSun className="size-4" /> : <LuMoon className="size-4" />}
    </Button>
  )
}

export { ThemeToggle }
