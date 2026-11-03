"use client"

import { cn } from "cn"
import { useEffect, useRef, useState } from "react"

type AnchorPosition = "left" | "top" | "right" | "bottom" | "center"

type LineBezierConnectorProps = {
  className?: string
  from: HTMLElement | null
  to: HTMLElement | null
  fromAnchor?: AnchorPosition
  toAnchor?: AnchorPosition
  pollingInterval?: number
  strokeWidth?: number
} & Omit<React.ComponentProps<"svg">, "from" | "to">

type Point = {
  x: number
  y: number
}

function LineBezierConnector({
  className = "",
  from,
  to,
  fromAnchor = "center",
  toAnchor = "center",
  pollingInterval = 1000,
  strokeWidth = 1.25,
  ...props
}: LineBezierConnectorProps) {
  const svgRef = useRef<SVGSVGElement>(null),
    [path, setPath] = useState("")

  useEffect(() => {
    const svg = svgRef.current,
      container = svg?.parentElement

    if (!svg || !container || !from || !to) {
      setPath("")
      return
    }

    const getAnchor = (element: HTMLElement, anchor: AnchorPosition): Point => {
      const elementRect = element.getBoundingClientRect(),
        containerRect = svg.getBoundingClientRect()

      const width = elementRect.width,
        height = elementRect.height

      const offsetX = width * 0.1,
        offsetY = height * 0.1

      const left = elementRect.left - containerRect.left,
        top = elementRect.top - containerRect.top

      const anchors: Record<AnchorPosition, Point> = {
        left: {
          x: left + offsetX,
          y: top + height / 2,
        },
        right: {
          x: left + width - offsetX,
          y: top + height / 2,
        },
        top: {
          x: left + width / 2,
          y: top + offsetY,
        },
        bottom: {
          x: left + width / 2,
          y: top + height - offsetY,
        },
        center: {
          x: left + width / 2,
          y: top + height / 2,
        },
      }

      return anchors[anchor]
    }

    const updatePath = () => {
      const width = container.clientWidth,
        height = container.clientHeight

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

      const start = getAnchor(from, fromAnchor),
        end = getAnchor(to, toAnchor)

      const dy = end.y - start.y,
        bend = Math.min(Math.abs(dy) * 0.42, 110)

      const d = [
        `M ${start.x} ${start.y}`,
        `C ${start.x + bend} ${start.y + dy * 0.32}`,
        `${end.x - bend} ${end.y - dy * 0.32}`,
        `${end.x} ${end.y}`,
      ].join(" ")

      setPath(d)
    }

    updatePath()

    // RAF polling
    let animationFrameId = 0,
      elapsedTime = 0,
      previousTimestamp = 0

    const animate = (timestamp: number) => {
      if (!previousTimestamp) previousTimestamp = timestamp

      const deltaTime = timestamp - previousTimestamp
      previousTimestamp = timestamp

      elapsedTime += deltaTime

      if (elapsedTime >= pollingInterval) {
        updatePath()
        elapsedTime %= pollingInterval
      }

      animationFrameId = window.requestAnimationFrame(animate)
    }

    animationFrameId = window.requestAnimationFrame(animate)

    const resizeObserver = new ResizeObserver(updatePath)

    resizeObserver.observe(from)
    resizeObserver.observe(to)
    resizeObserver.observe(container)

    window.addEventListener("resize", updatePath)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePath)
    }
  }, [from, to, fromAnchor, toAnchor, pollingInterval])

  return (
    <svg
      data-slot="line-bezier-connector"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      aria-hidden="true"
      ref={svgRef}
      {...props}
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export { LineBezierConnector }
