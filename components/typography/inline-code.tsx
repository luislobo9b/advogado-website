import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const inlineCodeVariants = cva(
  "rounded bg-muted px-1.5 py-0.5 font-mono text-foreground",
  {
    variants: {
      variant: {
        muted: "bg-muted text-muted-foreground",
        outline: "border border-border bg-transparent",
      },
      size: {
        sm: "text-body-sm",
        base: "text-body",
        lg: "text-body-lg",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

type InlineCodeProps = React.ComponentProps<"code"> &
  VariantProps<typeof inlineCodeVariants>

function InlineCode({ className, variant, size, ...props }: InlineCodeProps) {
  return (
    <code
      data-slot="inline-code"
      className={cn(inlineCodeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { InlineCode }
