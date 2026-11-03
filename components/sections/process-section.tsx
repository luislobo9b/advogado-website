import Image from "next/image"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Heading, Paragraph } from "@/components/typography"

const PROCESS_IMAGE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
const PROCESS_BACKGROUND = "/images/simple-bg.webp"

const PROCESS_STEPS = [
  {
    title: "Você conta o que está acontecendo",
    description:
      "Manda sua dúvida pelo WhatsApp, sem formulário longo. Não precisa ter certeza de nada: comece pelo que você sabe.",
  },
  {
    title: "Você entende o caso",
    description:
      "Explico o que é possível fazer, quais documentos são necessários, os prazos realisticamente possíveis e quanto custa.",
  },
  {
    title: "Você decide com calma",
    description:
      "Nada começa sem você entender e concordar. Honorários e escopo ficam definidos antes de qualquer assinatura.",
  },
  {
    title: "Você acompanha cada etapa",
    description:
      "Você recebe as atualizações do processo e sabe exatamente o que está em andamento, sem precisar cobrar resposta.",
  },
] as const

type ProcessSectionProps = React.ComponentProps<"section">

function ProcessSection({ className, ...props }: ProcessSectionProps) {
  const CLASSES = {
    section: cn("relative grid min-h-dvh place-items-center"),
    colors: cn("bg-background/80 text-foreground"),
    container: cn(
      "container mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn("gap-14 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"),
  }

  return (
    <section
      id="passo-a-passo"
      data-slot="process-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 h-full w-full opacity-100"
          style={{
            backgroundImage: `url(${PROCESS_BACKGROUND})`,
            backgroundRepeat: "repeat",
            backgroundSize: "800px auto",
          }}
        />
      </div>

      <div
        data-slot="process-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow="Passo a passo"
              title="Como é a conversa, do primeiro contato ao fim."
              description="Você nunca fica no escuro sobre o que está acontecendo nem sobre o que vai custar."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-3/2 overflow-hidden rounded-3xl">
              <Image
                src={PROCESS_IMAGE}
                alt="Fotografia ilustrativa de um ambiente de atendimento"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-foreground/10 ring-inset" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <ol className="flex flex-col gap-10">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <span
                  aria-hidden
                  className="shrink-0 font-heading text-5.5xl text-gold-accent tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2 border-b border-border pb-8 last:border-0 last:pb-0">
                  <Heading as="h3" size="sm" className="m-0">
                    {step.title}
                  </Heading>
                  <Paragraph className="m-0">{step.description}</Paragraph>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

export { ProcessSection }
