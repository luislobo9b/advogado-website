import { cn } from "cn"

type GlowCircleProps = {
  shape?: "circle" | "ellipse"
  position?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right"
  color?: string
  start?: string
  end?: string
} & React.ComponentProps<"div">

function GlowCircle({
  shape = "circle",
  position = "center",
  color = "black",
  start = "0%",
  end = "100%",
  className,
  style,
  ...props
}: GlowCircleProps) {
  const gradientStyle: React.CSSProperties = {
    background: `radial-gradient(${shape} at ${position}, ${color} ${start}, transparent ${end})`,
    ...style,
  }

  return (
    <div
      data-slot="glow-circle"
      className={cn(className)}
      style={gradientStyle}
      {...props}
    />
  )
}

export { GlowCircle }
