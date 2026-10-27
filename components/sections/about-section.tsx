import Image from "next/image"

import { LuClock, LuHandshake, LuLock } from "react-icons/lu"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Paragraph } from "@/components/typography"

const ABOUT_PORTRAIT =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"

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

type AboutSectionProps = React.ComponentProps<"section">

function AboutSection({ className, ...props }: AboutSectionProps) {
  const CLASSES = {
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("bg-background text-foreground"),
    container: cn(
      "container mx-auto max-w-7xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn(
      "gap-14 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"
    ),
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
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <div className="flex flex-col gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre mim"
              title={
                <>
                  Um advogado de verdade, do{" "}
                  <em className="text-gold-accent italic">outro lado da mesa</em>.
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4">
              <Paragraph tone="strong">
                Sou Pedro Lucas, advogado. Atendo pessoas que estão diante de
                um problema jurídico e precisam entender, antes de tudo, o que
                está acontecendo.
              </Paragraph>

              <Paragraph>
                Meu trabalho é traduzir o processo: explicar as opções, dizer
                quanto custa, apontar prazos e riscos reais. Atendo com tempo
                para ouvir, porque pressa só produz erro.
              </Paragraph>

              <Paragraph>
                Quando um caso não faz sentido — ou não combina com os meus
                princípios — eu digo isso na hora. Prefiro recusar a prometer o
                que não posso cumprir.
              </Paragraph>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-4 grid gap-6 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon

                return (
                  <li key={highlight.title} className="flex flex-col gap-3">
                    <Icon className="size-5 text-gold-accent" />
                    <span className="font-heading text-subtitle text-foreground">
                      {highlight.title}
                    </span>
                    <Paragraph size="sm" className="m-0">
                      {highlight.description}
                    </Paragraph>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-3/4 overflow-hidden rounded-3xl">
            <Image
              src={ABOUT_PORTRAIT}
              alt="Fotografia ilustrativa de um profissional em ambiente claro"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-foreground/10 ring-inset" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { AboutSection }
