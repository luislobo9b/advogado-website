import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingSize = "sm" | "base" | "lg" | "display"

const headingVariants = cva(
  "scroll-mt-(--navbar-size) font-heading font-medium text-balance text-foreground",
  {
    variants: {
      size: {
        sm: "text-3xl tracking-tight",
        base: "text-5.5xl tracking-[-0.02em]",
        lg: "text-7xl tracking-[-0.035em]",
        display: "text-9xl tracking-[-0.04em]",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

const defaultFontSize: Record<HeadingLevel, HeadingSize> = {
  h1: "lg",
  h2: "base",
  h3: "sm",
  h4: "sm",
  h5: "sm",
  h6: "sm",
}

type HeadingProps = React.ComponentProps<HeadingLevel> &
  VariantProps<typeof headingVariants> & { as: HeadingLevel }

function Heading({ as = "h1", className, size, ...props }: HeadingProps) {
  const Component = as
  const resolvedSize = size ?? defaultFontSize[as]

  return (
    <Component
      data-slot="heading"
      className={cn(headingVariants({ size: resolvedSize }), className)}
      {...props}
    />
  )
}

export { Heading, defaultFontSize }

export type { HeadingLevel, HeadingSize }
