import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"

const pillButtonVariants = cva(buttonVariants({ variant: "default", size: "lg" }), {
  variants: {
    variant: {
      primary: "rounded-full bg-gold text-ink hover:bg-gold-light",
      light: "rounded-full bg-paper text-ink hover:bg-paper/90",
      outline:
        "rounded-full border border-border bg-card text-foreground hover:border-gold",
    },
    size: {
      sm: "h-9 px-4 text-sm",
      default: "h-11 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
})

type PillButtonProps = React.ComponentProps<"a"> &
  VariantProps<typeof pillButtonVariants>

function PillButton({
  className,
  variant,
  size,
  ...props
}: PillButtonProps) {
  return (
    <a
      data-slot="pill-button"
      className={cn(pillButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { PillButton, pillButtonVariants }
