import { LuArrowUpRight, LuMail, LuMapPin, LuScale } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { Heading, Paragraph } from "@/components/typography"
import { Card, CardContent } from "@/components/ui/card"

import { LGPD_NOTICE, PROFESSIONAL, WHATSAPP_LINK_PROPS } from "@/lib/site"
import { globalContainerClasses } from "@/utils/globals"
import WaveDivider from "@/components/wave-divider"

const IDENTIFICATION = [
  { icon: LuScale, label: "Inscrição", value: PROFESSIONAL.oab },
  { icon: LuMapPin, label: "Endereço", value: PROFESSIONAL.address },
  { icon: LuMail, label: "E-mail", value: PROFESSIONAL.email },
] as const

type ContactSectionProps = React.ComponentProps<"section">

const CONTACT_BACKGROUND = "/images/simple-bg.webp"

function ContactSection({ className, ...props }: ContactSectionProps) {
  const CLASSES = {
    section: cn("relative grid place-items-center"),
    colors: cn("bg-background/80 text-foreground"),
    container: cn(globalContainerClasses, "xl:grid-cols-2"),
    spacing: cn("gap-4 gap-14 px-4 md:py-6 lg:gap-8 lg:py-16 lg:pb-24"),
  }

  return (
    <section
      id="contato"
      data-slot="contact-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 h-full w-full opacity-100"
          style={{
            backgroundImage: `url(${CONTACT_BACKGROUND})`,
            backgroundRepeat: "repeat",
            backgroundSize: "800px auto",
          }}
        />
      </div>

      <div
        data-slot="contact-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <Reveal delay={0.4}>
          <Card className="w-fit rounded-3xl border-border/70 bg-background shadow-none xl:w-75/100">
            <CardContent className="flex flex-col gap-6 p-8">
              <Heading as="h3" size="sm" className="m-0">
                Identificação profissional
              </Heading>

              <ul className="flex flex-col gap-5">
                {IDENTIFICATION.map((item) => {
                  const Icon = item.icon

                  return (
                    <li key={item.label} className="flex gap-6">
                      <span className="mt-0.5 flex size-14 shrink-0 items-center justify-center rounded-full bg-muted text-gold-accent">
                        <Icon className="size-7" />
                      </span>

                      <span className="flex flex-col justify-center gap-1">
                        <span className="text-base tracking-[0.14em] text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="text-base text-foreground">
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

        <div className="flex flex-col items-start gap-6">
          <Reveal
            className="mt-12 w-full text-center md:mt-0 xl:text-left"
            delay={0.4}
          >
            <SectionEyebrow>Contato</SectionEyebrow>
            <Heading className="mb-2" as="h2">
              Vamos conversar <br className="hidden md:block" />{" "}
              <span className="text-gold">sobre o seu caso</span>.
            </Heading>
            <Paragraph>
              Descreva sua situação em poucas linhas. Eu respondo pessoalmente
              e, se eu puder ajudar, combinamos os próximos passos juntos.
            </Paragraph>

            <Reveal className="mt-8 mb-4" delay={0.4}>
              <PillButton {...WHATSAPP_LINK_PROPS} size="lg">
                Falar no WhatsApp
                <LuArrowUpRight className="size-5" />
              </PillButton>
            </Reveal>

            <Reveal className="text-center md:text-left" delay={0.4}>
              <Paragraph
                className="mx-auto max-w-lg text-muted-foreground md:max-w-full"
                size="sm"
              >
                {LGPD_NOTICE}
              </Paragraph>
            </Reveal>
          </Reveal>
        </div>
      </div>

      <WaveDivider
        className="absolute bottom-0 z-1 h-6 w-full lg:h-12 dark:hidden"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [5, 95],
          backgroundColor: "transparent",
          shapeColor: "var(--color-ink)",
        }}
      />
      <WaveDivider
        className="absolute bottom-0 z-1 hidden h-6 w-full lg:h-12 dark:block"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [5, 95],
          backgroundColor: "transparent",
          shapeColor: "white",
        }}
      />
    </section>
  )
}

export { ContactSection }
