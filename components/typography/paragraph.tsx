import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const paragraphVariants = cva("mb-3", {
  variants: {
    size: {
      sm: "text-body-sm",
      base: "text-body",
      lg: "text-body-lg",
    },
    tone: {
      default: "text-muted-foreground",
      strong: "text-foreground",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "default",
  },
})

type ParagraphProps = React.ComponentProps<"p"> &
  VariantProps<typeof paragraphVariants>

function Paragraph({ className, size, tone, ...props }: ParagraphProps) {
  return (
    <p
      data-slot="paragraph"
      className={cn(paragraphVariants({ size, tone }), className)}
      {...props}
    />
  )
}

export { Paragraph }
