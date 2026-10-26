"use client"

import { useMediaQuery } from "usehooks-ts"

import { BREAKPOINTS } from "@/utils/breakpoints"

import type { Breakpoint } from "@/utils/breakpoints"

function useBreakpoint(): Breakpoint {
  const { "2xl": xl2, xl, lg, md, sm } = BREAKPOINTS,
    is2xl = useMediaQuery(`(min-width: ${xl2}px)`),
    isXl = useMediaQuery(`(min-width: ${xl}px)`),
    isLg = useMediaQuery(`(min-width: ${lg}px)`),
    isMd = useMediaQuery(`(min-width: ${md}px)`),
    isSm = useMediaQuery(`(min-width: ${sm}px)`)

  if (is2xl) return "2xl"
  if (isXl) return "xl"
  if (isLg) return "lg"
  if (isMd) return "md"
  if (isSm) return "sm"

  return "xs"
}

export { useBreakpoint }
