import { LuArrowUpRight, LuMail, LuMapPin, LuScale } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Heading, Paragraph } from "@/components/typography"
import { Card, CardContent } from "@/components/ui/card"

import { LGPD_NOTICE, PROFESSIONAL, WHATSAPP_LINK_PROPS } from "@/lib/site"

const IDENTIFICATION = [
  { icon: LuScale, label: "Inscrição", value: PROFESSIONAL.oab },
  { icon: LuMapPin, label: "Endereço", value: PROFESSIONAL.address },
  { icon: LuMail, label: "E-mail", value: PROFESSIONAL.email },
] as const

type ContactSectionProps = React.ComponentProps<"section">

function ContactSection({ className, ...props }: ContactSectionProps) {
  const CLASSES = {
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("bg-card text-card-foreground"),
    container: cn(
      "container mx-auto max-w-7xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn("gap-14 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"),
  }

  return (
    <section
      id="contato"
      data-slot="contact-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div
        data-slot="contact-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Contato"
              title="Vamos conversar sobre o seu caso."
              description="Descreva sua situação em poucas linhas. Eu respondo pessoalmente e, se eu puder ajudar, combinamos os próximos passos juntos."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <PillButton
              {...WHATSAPP_LINK_PROPS}
              size="lg"
            >
              Falar no WhatsApp
              <LuArrowUpRight className="size-5" />
            </PillButton>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph size="sm" className="max-w-xl text-muted-foreground">
              {LGPD_NOTICE}
            </Paragraph>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Card className="rounded-3xl border-border/70 bg-background shadow-none">
            <CardContent className="flex flex-col gap-6 p-8">
              <Heading as="h3" size="sm" className="m-0">
                Identificação profissional
              </Heading>

              <ul className="flex flex-col gap-5">
                {IDENTIFICATION.map((item) => {
                  const Icon = item.icon

                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-gold-accent">
                        <Icon className="size-5" />
                      </span>

                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm tracking-[0.14em] text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="text-sm text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export { ContactSection }
