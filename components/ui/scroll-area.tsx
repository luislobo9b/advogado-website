"use client"

import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"

import { cn } from "cn"

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  scrollbarClassName?: string
  thumbClassName?: string
  viewportRef?: React.RefObject<HTMLDivElement | null>
}

function ScrollArea({
  className,
  scrollbarClassName,
  thumbClassName,
  children,
  viewportRef: viewportRefProp,
  ...props
}: ScrollAreaProps) {
  // This is the internal state of the component.
  // We use viewportRefProp to expose the viewport to the outside.
  const _viewportRef = React.useRef<HTMLDivElement>(null)
  const viewportRef = viewportRefProp ?? _viewportRef

  // Workaround: when a sidebar item expands, a scroll event is triggered manually
  // because Base UI does not recalculate scroll-area values on resize
  React.useEffect(() => {
    const viewport = viewportRef?.current
    const content = viewport?.firstElementChild
    let rafId: number | null = null

    if (!viewport || !content) return

    const observer = new ResizeObserver(() => {
      if (rafId !== null) cancelAnimationFrame(rafId)

      rafId = requestAnimationFrame(() => {
        viewport.dispatchEvent(new Event("scroll"))
      })
    })

    observer.observe(content)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)

      observer.disconnect()
    }
  }, [])

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
        ref={viewportRef}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar
        className={scrollbarClassName}
        thumbClassName={thumbClassName}
        orientation="vertical"
      />
      <ScrollBar
        className={scrollbarClassName}
        thumbClassName={thumbClassName}
        orientation="horizontal"
      />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

type ScrollBarProps = ScrollAreaPrimitive.Scrollbar.Props & {
  thumbClassName?: string
}

function ScrollBar({
  className,
  thumbClassName,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors duration-400 select-none data-horizontal:h-(--scrollbar-size) data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-(--scrollbar-size) data-vertical:border-l data-vertical:border-l-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={cn(
          "relative flex-1 rounded-full bg-scrollbar-thumb transition-colors duration-400 hover:bg-scrollbar-thumb-hover",
          thumbClassName
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export type { ScrollAreaProps }
export { ScrollArea, ScrollBar }
