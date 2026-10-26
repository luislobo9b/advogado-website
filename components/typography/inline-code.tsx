import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const inlineCodeVariants = cva(
  "relative mb-3 rounded bg-black/7.5 px-1 py-2 font-mono text-gray-700 dark:bg-white/7.5 dark:text-gray-300",
  {
    variants: {
      variant: {
        muted: "bg-muted text-gray-500 dark:text-gray-500",
        outline: "border border-border bg-transparent",
      },
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

type InlineCodeProps = React.ComponentProps<"code"> &
  VariantProps<typeof inlineCodeVariants>

function InlineCode({ className, variant, size, ...props }: InlineCodeProps) {
  return (
    <code
      className={cn(inlineCodeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { InlineCode }
