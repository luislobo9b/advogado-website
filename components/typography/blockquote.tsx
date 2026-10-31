import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const blockquoteVariants = cva(
  "border-l border-gold/60 text-muted-foreground italic",
  {
    variants: {
      variant: {
        secondary: "bg-muted px-5 py-4",
        pull: "border-l-0 border-transparent px-0 py-4 text-center text-2xl not-italic",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

type BlockquoteProps = React.ComponentProps<"blockquote"> &
  VariantProps<typeof blockquoteVariants>

function Blockquote({ className, variant, size, ...props }: BlockquoteProps) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn(blockquoteVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Blockquote }
