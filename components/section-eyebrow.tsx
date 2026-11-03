import { cn } from "cn"

import { Paragraph } from "@/components/typography"

type SectionEyebrowProps = React.ComponentProps<"p">

function SectionEyebrow({
  className,
  children,
  ...props
}: SectionEyebrowProps) {
  return (
    <Paragraph
      size="sm"
      className={cn(
        "mb-0 text-base font-medium tracking-[0.22em] text-muted-foreground uppercase",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="size-1.5 shrink-0 rounded-full bg-gold-accent"
      />
      {children}
    </Paragraph>
  )
}

export { SectionEyebrow }
