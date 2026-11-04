import Image from "next/image"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { Heading, Paragraph } from "@/components/typography"
import {
  ScrollProgressChars,
  ScrollProgressGroup,
} from "@/components/ui/scroll-text"
import WaveDivider from "@/components/wave-divider"
import { globalContainerClasses } from "@/utils/globals"

const HIGHLIGHTS = [
  {
    icon: "/images/icons/golden-handshake.webp",
    title: "Direto com você",
    description:
      "Você fala com quem está cuidando do seu caso. Sem central de atendimento e sem intermediário.",
  },
  {
    icon: "/images/icons/golden-clock.webp",
    title: "Custo antes de começar",
    description:
      "Honorários e escopo são definidos antes de qualquer assinatura, com valores explicados.",
  },
  {
    icon: "/images/icons/golden-padlock.webp",
    title: "Sigilo",
    description:
      "Tudo o que você conta em uma conversa ou por mensagem fica entre nós.",
  },
] as const

const DELAY = 0.4

const ABOUT_BACKGROUND = "/images/simple-bg.webp"

type AboutSectionProps = React.ComponentProps<"section">

function AboutSection({ className, ...props }: AboutSectionProps) {
  const CLASSES = {
    section: cn("relative grid min-h-dvh place-items-center"),
    colors: cn("bg-background/80 text-foreground"),
    container: cn(globalContainerClasses),
    spacing: cn("px-5 py-6 md:px-8 md:py-12 lg:px-16 lg:py-18"),
  }

  const iconsSize = {
    width: 1190,
    height: 1177,
  }

  return (
    <section
      data-slot="about-section"
      id="sobre"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 h-full w-full opacity-100"
          style={{
            backgroundImage: `url(${ABOUT_BACKGROUND})`,
            backgroundRepeat: "repeat",
            backgroundSize: "800px auto",
          }}
        />
      </div>

      <div
        data-slot="about-section-container"
        className={cn(CLASSES.container, CLASSES.spacing, "text-center")}
      >
        <ScrollProgressGroup className="mb-10">
          <ScrollProgressChars>
            <Heading className="inline italic" as="h2">
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
              return (
                <div className="flex items-center" key={highlight.title}>
                  <div>
                    <Image
                      className="mx-auto size-15 h-48 w-auto text-center"
                      src={highlight.icon}
                      width={iconsSize.width / 2}
                      height={iconsSize.height / 2}
                      alt={highlight.title}
                    />

                    <div>
                      <span className="mt-4 mb-2 block font-heading text-3xl text-foreground">
                        {highlight.title}
                      </span>
                      <Paragraph
                        className="m-0 mx-auto max-w-90 md:max-w-full"
                        size="base"
                      >
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
