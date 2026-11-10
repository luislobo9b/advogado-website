import Image from "next/image"

import {
  LuCalendarClock,
  LuGavel,
  LuHandshake,
  LuLock,
  LuMessageSquare,
  LuScale,
} from "react-icons/lu"

import { cn } from "cn"

const VALUES_BACKGROUND = "/images/judges-gavel.jpg"

import { GlowCircle } from "@/components/glow-circle"
import { Reveal } from "@/components/reveal"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { Heading, Paragraph } from "@/components/typography"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import WaveDivider from "@/components/wave-divider"
import { globalContainerClasses } from "@/utils/globals"

const VALUES = [
  {
    icon: LuMessageSquare,
    title: "Clareza",
    description:
      "Termo técnico existe, mas você não precisa dele para entender o que está acontecendo.",
  },
  {
    icon: LuScale,
    title: "Transparência",
    description:
      "Custo, escopo e riscos são explicados antes de você decidir — não depois.",
  },
  {
    icon: LuHandshake,
    title: "Proximidade",
    description:
      "Você fala direto com o advogado que acompanha o seu caso, sem central de atendimento.",
  },
  {
    icon: LuGavel,
    title: "Ética",
    description:
      "Recuso causas em que não acredito. Só assumo o que consigo defender com honestidade.",
  },
  {
    icon: LuLock,
    title: "Sigilo",
    description:
      "Tudo o que você me conta fica entre nós, inclusive o que você ainda não contou a ninguém.",
  },
  {
    icon: LuCalendarClock,
    title: "Respeito com o seu tempo",
    description:
      "Consultas com horário marcado e aviso quando não puder atender no dia.",
  },
] as const

type ValuesSectionProps = React.ComponentProps<"section">

function ValuesSection({ className, ...props }: ValuesSectionProps) {
  const CLASSES = {
    section: cn(
      "relative grid min-h-[105dvh] place-items-center overflow-hidden"
    ),
    colors: cn("surface-ink bg-background/40 text-foreground"),
    container: cn(globalContainerClasses, "xl:grid-cols-2"),
    spacing: cn("gap-4 gap-14 px-4 lg:gap-12"),
  }

  return (
    <section
      id="valores"
      data-slot="values-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <WaveDivider
        className="absolute top-0 z-1 h-6 w-full rotate-180 lg:h-12 dark:hidden"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [95, 5],
          backgroundColor: "transparent",
          shapeColor: "var(--foreground)",
        }}
      />

      <GlowCircle
        className="absolute -top-75 -left-75 h-150 w-150 opacity-40 mix-blend-lighten contrast-200"
        color="#996f3d"
        start="0%"
        end="70%"
      />

      <GlowCircle
        className="absolute -right-75 bottom-0 h-150 w-150 opacity-40 mix-blend-lighten contrast-200"
        color="#996f3d"
        start="0%"
        end="70%"
      />

      <GlowCircle
        className="absolute -top-35 -left-35 h-100 w-100 opacity-3 mix-blend-lighten contrast-200"
        color="#996f3d"
        start="0%"
        end="70%"
      />

      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={VALUES_BACKGROUND}
          alt=""
          width={1600}
          height={1067}
          className="absolute inset-0 h-full w-full scale-x-[-1] object-cover opacity-100 brightness-110 contrast-130"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/90 via-ink/70 to-ink" />
      </div>

      <div
        data-slot="values-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <Reveal className="mt-25 w-full text-center md:mt-0 xl:text-left">
          <SectionEyebrow>Valores</SectionEyebrow>
          <Heading className="mb-2" as="h2">
            O que você pode esperar de um{" "}
            <span className="text-gold">atendimento comigo</span>.
          </Heading>
          <Paragraph>
            Princípios simples, escritos para que você saiba o que cobrar de
            mim.
          </Paragraph>
        </Reveal>

        <Reveal delay={0.4}>
          <ItemGroup className="grid gap-x-10 gap-y-2 md:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon

              return (
                <Item
                  key={value.title}
                  role="listitem"
                  variant="outline"
                  className="items-start gap-4 rounded-none border-0 border-b border-border px-0 py-6"
                >
                  <ItemMedia
                    variant="icon"
                    className="size-14 rounded-full bg-foreground/10 text-gold-accent"
                  >
                    <Icon className="size-7" />
                  </ItemMedia>

                  <ItemContent className="gap-1">
                    <ItemTitle className="font-heading text-2xl text-foreground">
                      {value.title}
                    </ItemTitle>
                    <ItemDescription className="line-clamp-none text-sm text-muted-foreground">
                      {value.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              )
            })}
          </ItemGroup>
        </Reveal>
      </div>

      <WaveDivider
        className="absolute bottom-0 z-1 h-6 w-full lg:h-12 dark:hidden"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [95, 5],
          backgroundColor: "transparent",
          shapeColor: "var(--foreground)",
        }}
      />
    </section>
  )
}

export { ValuesSection }
