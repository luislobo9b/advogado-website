import { cn } from "cn"

import { LuClock, LuHandshake, LuLock } from "react-icons/lu"

import { Reveal } from "@/components/reveal"
import { Heading, Paragraph } from "@/components/typography"
import {
  ScrollProgressChars,
  ScrollProgressGroup,
} from "@/components/ui/scroll-text"
import WaveDivider from "../wave-divider"

const HIGHLIGHTS = [
  {
    icon: LuHandshake,
    title: "Direto com você",
    description:
      "Você fala com quem está cuidando do seu caso. Sem central de atendimento e sem intermediário.",
  },
  {
    icon: LuClock,
    title: "Custo antes de começar",
    description:
      "Honorários e escopo são definidos antes de qualquer assinatura, com valores explicados.",
  },
  {
    icon: LuLock,
    title: "Sigilo",
    description:
      "Tudo o que você conta em uma conversa ou por mensagem fica entre nós.",
  },
] as const

const DELAY = 0.4

type AboutSectionProps = React.ComponentProps<"section">

function AboutSection({ className, ...props }: AboutSectionProps) {
  const CLASSES = {
    section: cn("relative grid min-h-dvh place-items-center"),
    colors: cn("bg-background text-foreground"),
    container: cn("container mx-auto grid max-w-7xl grid-cols-1 items-center"),
    spacing: cn("px-5 py-6 md:px-8 md:py-12 lg:px-16 lg:py-18"),
  }

  return (
    <section
      id="sobre"
      data-slot="about-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div
        data-slot="about-section-container"
        className={cn(CLASSES.container, CLASSES.spacing, "text-center")}
      >
        <ScrollProgressGroup className="mb-10">
          <ScrollProgressChars>
            <Heading className="inline max-w-2xl text-pretty italic" as="h2">
              Um advogado de verdade, do <br className="hidden md:block" />
              <span className="text-gold">outro lado da mesa.</span>
            </Heading>

            <Paragraph className="mt-5 xl:text-1.5xl">
              Sou Pedro Lucas, advogado. Atendo pessoas que estão diante de um
              problema jurídico e precisam entender, antes de tudo, o que está
              acontecendo. Meu trabalho é traduzir o processo: explicar as
              opções, dizer quanto custa, apontar prazos e riscos reais. Atendo
              com tempo para ouvir, porque pressa só produz erro. Quando um caso
              não faz sentido — ou não combina com os meus princípios — eu digo
              isso na hora. Prefiro recusar a prometer o que não posso cumprir.
            </Paragraph>
          </ScrollProgressChars>
        </ScrollProgressGroup>

        <Reveal delay={DELAY}>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-4">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon

              return (
                <div className="flex items-center" key={highlight.title}>
                  <div>
                    <Icon className="mx-auto size-15 text-center text-gold-accent" />

                    <div>
                      <span className="mt-4 mb-2 block font-heading text-subtitle text-foreground">
                        {highlight.title}
                      </span>
                      <Paragraph size="sm" className="m-0">
                        {highlight.description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>

      <WaveDivider
        className="absolute bottom-0 z-1 h-6 w-full lg:h-12 dark:hidden"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [95, 5],
          backgroundColor: "transparent",
          shapeColor: "white",
        }}
      />
      <WaveDivider
        className="absolute bottom-0 z-1 hidden h-6 w-full lg:h-12 dark:block"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [95, 5],
          backgroundColor: "transparent",
          shapeColor: "white",
        }}
      />
    </section>
  )
}

export { AboutSection }
