type TextGlowEffectProps = {
  children: React.ReactNode
  color?: string
  glows?: number[]
}

function TextGlowEffect({
  children,
  color = "black",
  glows = [10, 10, 10, 30, 50],
}: TextGlowEffectProps) {
  const glowsMapped = glows
      .map((value) => {
        return `drop-shadow(0 0 ${value}px ${color})`
      })
      .join(" "),
    glowStyle = { filter: glowsMapped }

  return (
    <div data-slot="text-glow-effect" style={glowStyle}>
      {children}
    </div>
  )
}

export { TextGlowEffect }
