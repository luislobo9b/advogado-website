"use client"

import { LineBezierConnector } from "@/components/line-bezier-connector"
import Image from "next/image"

import { cn } from "cn"
import { useRef, useState, useEffect } from "react"

import { Reveal } from "@/components/reveal"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { Heading, Paragraph } from "@/components/typography"
import WaveDivider from "@/components/wave-divider"
import { Card } from "../ui/card"
import { globalContainerClasses } from "@/utils/globals"

const PROCESS_IMAGE = "/images/scales-of-justice.webp"

const PROCESS_BACKGROUND = "/images/simple-bg.webp"

const PROCESS_STEPS = [
  {
    title: "Você conta o que está acontecendo",
    description:
      "Manda sua dúvida pelo WhatsApp, sem formulário longo. Não precisa ter certeza de nada: comece pelo que você sabe.",
  },
  {
    title: "Você entende o caso e decide com segurança",
    description:
      "Explico as possibilidades, documentos, prazos e custos. Nada começa sem sua aprovação, com honorários e escopo definidos.",
  },
  {
    title: "Você acompanha cada etapa",
    description:
      "Você recebe as atualizações do processo e sabe exatamente o que está em andamento, sem precisar cobrar resposta.",
  },
] as const

type ProcessSectionProps = React.ComponentProps<"section">

function ProcessSection({ className, ...props }: ProcessSectionProps) {
  const lineRef1 = useRef<HTMLDivElement>(null),
    lineRef2 = useRef<HTMLDivElement>(null),
    lineRef3 = useRef<HTMLDivElement>(null),
    refs = [lineRef1, lineRef2, lineRef3],
    [ready, setReady] = useState(false),
    [nodes, setNodes] = useState<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setNodes(refs.map((r) => r.current))
      setReady(true)
    })
    return () => cancelAnimationFrame(frame)
  })

  const CLASSES = {
    section: cn("relative grid min-h-dvh place-items-center"),
    colors: cn("bg-background/80 text-foreground"),
    container: cn(globalContainerClasses, "grid-cols-[40%_60%] xl:grid-cols-2"),
    spacing: cn("gap-4 px-4 md:py-6 lg:gap-8 lg:py-16 xl:gap-20"),
  }

  return (
    <section
      data-slot="process-section"
      id="passo-a-passo"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <WaveDivider
        className="absolute top-0 z-1 h-6 w-full lg:h-12 dark:hidden"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [5, 95],
          backgroundColor: "white",
          shapeColor: "var(--background)",
        }}
      />

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
        className={cn(CLASSES.spacing)}
      >
        <Reveal className="mb-8 w-full text-center xl:mb-12 xl:text-left">
          <SectionEyebrow>Passo a passo</SectionEyebrow>
          <Heading className="mb-2" as="h2">
            Como é a conversa, do <br className="hidden md:block" />
            <span className="text-gold">primeiro contato</span> ao fim.
          </Heading>

          <Paragraph className="text-1xl">
            Você nunca fica no escuro sobre o que está acontecendo nem sobre o
            que vai custar.
          </Paragraph>
        </Reveal>

        <div className={cn(CLASSES.container)}>
          <div className="order-2 mt-8 md:mt-0 xl:order-1">
            <ol className="flex flex-col gap-10">
              {PROCESS_STEPS.map((step, index) => {
                const itemNumber = String(index + 1).padStart(2, "0"),
                  isCenterCard = index === 1

                return (
                  <Reveal key={step.title} delay={0.4}>
                    <li className="flex gap-6">
                      <div
                        className={cn(
                          "relative flex items-center gap-6",
                          isCenterCard && "left-7"
                        )}
                      >
                        <div>
                          <div
                            className="relative z-2 w-fit rounded-full border-3 border-[#ccc] bg-white px-2.5 py-2.5 font-heading text-4.5xl font-medium text-gold-accent not-only:block"
                            ref={refs[index]}
                            aria-hidden
                          >
                            <span className="relative -top-1.5 text-foreground">
                              {itemNumber}
                            </span>
                          </div>
                        </div>
                        <Card
                          className={cn(
                            "relative w-7/10 p-4 sm:w-8/10 xl:w-9/10"
                          )}
                        >
                          <div className="flex flex-col gap-2 border-b border-border pb-8 last:border-0 last:pb-0">
                            <Heading className="m-0" as="h3" size="sm">
                              {step.title}
                            </Heading>
                            <Paragraph className="m-0">
                              {step.description}
                            </Paragraph>
                          </div>
                        </Card>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
              {ready && (
                <Reveal
                  className="pointer-events-none absolute inset-0 z-1"
                  delay={0.4}
                >
                  <>
                    <LineBezierConnector
                      className="text-[#ddd]"
                      fromAnchor="bottom"
                      toAnchor="top"
                      strokeWidth={3}
                      from={nodes[0]}
                      to={nodes[1]}
                    />
                    <LineBezierConnector
                      className="text-[#ddd]"
                      fromAnchor="bottom"
                      toAnchor="top"
                      strokeWidth={3}
                      from={nodes[1]}
                      to={nodes[2]}
                    />
                  </>
                </Reveal>
              )}
            </ol>
          </div>

          <div className="order-1 mt-12 flex h-full flex-col items-center justify-center gap-8 md:mt-0 xl:order-2">
            <Reveal delay={0.4}>
              <Image
                className="mx-auto w-auto max-w-7/10 px-10 md:max-h-[500px] xl:max-h-none xl:max-w-9/10"
                src={PROCESS_IMAGE}
                alt="Balança da justiça dourada com martelo"
                width={981}
                height={1074}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ProcessSection }
