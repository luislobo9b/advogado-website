import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "cn"

type ListTypes = "ul" | "ol"

const customMarkerBase = `ml-2 list-none [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-[-4]`

const listVariants = cva(
  "mb-3 ml-6 text-gray-700 dark:text-gray-300 [&>li]:mb-1.5",
  {
    variants: {
      marker: {
        disc: "list-disc",
        decimal: "list-decimal",
        dash: `${customMarkerBase} [&>li]:before:content-['—']`,
        check: `${customMarkerBase} [&>li]:before:text-malachite-400 [&>li]:before:font-bold [&>li]:before:content-['✓']`,
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

type ListProps = React.ComponentProps<ListTypes> &
  Omit<VariantProps<typeof listVariants>, "marker"> & {
    as: ListTypes
    marker?: VariantProps<typeof listVariants>["marker"]
  }

function List({ as = "ul", className, marker, size, ...props }: ListProps) {
  const Component = as as "ul"

  return (
    <Component
      className={cn(
        as === "ol" ? "list-decimal" : "list-disc",
        listVariants({ marker, size }),
        className
      )}
      {...props}
    />
  )
}

export { List }
