import { cn } from "cn"

type LinearGradientProps = {
  direction?:
    | "left"
    | "top"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
  viaPosition: number
  via2Position: number
} & React.ComponentProps<"div">

function LinearGradient({
  direction = "left",
  viaPosition,
  via2Position,
  className,
  style,
  ...props
}: LinearGradientProps) {
  const directionMap = {
    left: "bg-linear-to-l",
    top: "bg-linear-to-t",
    right: "bg-linear-to-r",
    bottom: "bg-linear-to-b",
    "top-left": "bg-linear-to-tl",
    "top-right": "bg-linear-to-tr",
    "bottom-left": "bg-linear-to-bl",
    "bottom-right": "bg-linear-to-br",
  }

  return (
    <div
      data-slot="linear-gradient"
      className={cn("absolute inset-0", directionMap[direction], className)}
      style={
        {
          "--tw-gradient-stops": `var(--tw-gradient-position), var(--tw-gradient-from) 0%, var(--tw-gradient-via) ${viaPosition}%, var(--tw-gradient-to) ${via2Position}%`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { LinearGradient }
