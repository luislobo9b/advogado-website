import { cn } from "cn"

import { SectionEyebrow } from "@/components/section-eyebrow"
import { Heading, Paragraph } from "@/components/typography"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  as?: "h1" | "h2" | "h3"
  align?: "start" | "center"
  className?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}

      <Heading
        as={as}
        className={cn(
          "max-w-3xl text-balance",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </Heading>

      {description ? (
        <Paragraph className={cn(align === "center" && "mx-auto")}>
          {description}
        </Paragraph>
      ) : null}
    </div>
  )
}

export { SectionHeading }
