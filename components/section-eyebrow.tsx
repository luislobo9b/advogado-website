import { cn } from "cn"

import { Paragraph } from "@/components/typography"

type SectionEyebrowProps = React.ComponentProps<"p">

function SectionEyebrow({ className, children, ...props }: SectionEyebrowProps) {
  return (
    <Paragraph
      size="sm"
      className={cn(
        "mb-0 flex items-center gap-2.5 text-sm font-medium tracking-[0.22em] uppercase text-muted-foreground",
        className
      )}
      {...props}
    >
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-gold-accent" />
      {children}
    </Paragraph>
  )
}

export { SectionEyebrow }
