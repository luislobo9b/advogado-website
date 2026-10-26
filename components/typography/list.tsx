import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

type ListTypes = "ul" | "ol"

const customMarkerBase =
  "list-none [&>li]:relative [&>li]:pl-5 [&>li]:before:absolute [&>li]:before:left-0"

const listVariants = cva(
  "mb-3 ml-5 text-muted-foreground [&>li]:mb-1.5",
  {
    variants: {
      marker: {
        disc: "list-disc",
        decimal: "list-decimal",
        dash: `${customMarkerBase} [&>li]:before:content-['–']`,
        check: `${customMarkerBase} [&>li]:before:font-semibold [&>li]:before:text-gold [&>li]:before:content-['✓']`,
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

type ListProps = React.ComponentProps<ListTypes> &
  Omit<VariantProps<typeof listVariants>, "marker"> & {
    as: ListTypes
    marker?: VariantProps<typeof listVariants>["marker"]
  }

function List({ as = "ul", className, marker, size, ...props }: ListProps) {
  const Component = as as "ul"

  return (
    <Component
      data-slot="list"
      className={cn(listVariants({ marker, size }), className)}
      {...props}
    />
  )
}

export { List }
