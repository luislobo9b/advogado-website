import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const paragraphVariants = cva("mb-3", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
})

type ParagraphProps = React.ComponentProps<"p"> &
  VariantProps<typeof paragraphVariants>

function Paragraph({ className, size, ...props }: ParagraphProps) {
  return <p className={cn(paragraphVariants({ size }), className)} {...props} />
}

export { Paragraph }
