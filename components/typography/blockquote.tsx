import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

const blockquoteVariants = cva(
  "mb-5 border-l-5 border-black/10 p-3 text-gray-700 italic dark:border-white/10 dark:text-gray-300",
  {
    variants: {
      variant: {
        secondary: "bg-black/5 bg-none py-5 dark:bg-white/5",
        pull: "border-none border-transparent py-5 text-center text-2xl leading-relaxed dark:border-transparent",
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

type BlockquoteProps = React.ComponentProps<"blockquote"> &
  VariantProps<typeof blockquoteVariants>

function Blockquote({ className, variant, size, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(blockquoteVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Blockquote }
