import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const headingVariants = cva(
  "scroll-mt-(--navbar-size) font-heading tracking-tight text-gray-700 dark:text-gray-300",
  {
    variants: {
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
      },
    },
  }
)

type HeadingProps = React.ComponentProps<HeadingLevel> &
  VariantProps<typeof headingVariants> & { as: HeadingLevel }

const defaultFontSize = {
  h1: "text-6.5xl",
  h2: "text-5.5xl",
  h3: "text-4.5xl",
  h4: "text-3.5xl",
  h5: "text-2.5xl",
  h6: "text-1.5xl",
}

const defaultFontWeight = {
  h1: "font-black",
  h2: "font-extrabold",
  h3: "font-bold",
  h4: "font-semibold",
  h5: "font-medium",
  h6: "font-normal",
}

const defaultMargins = {
  h1: "mb-6",
  h2: "mb-5",
  h3: "mb-4",
  h4: "mb-3",
  h5: "mb-2",
  h6: "mb-1",
}

function Heading({ as = "h1", className, size, ...props }: HeadingProps) {
  const Component = as

  return (
    <Component
      className={cn(
        // "faux-stroke",
        defaultFontWeight[as],
        defaultFontSize[as],
        defaultMargins[as],
        as === "h1" && "text-balance",
        as === "h2" && "first:mt-0",
        headingVariants({ size }),
        className
      )}
      {...props}
    />
  )
}

export { Heading, defaultFontSize, defaultFontWeight, defaultMargins }
