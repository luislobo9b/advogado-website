import {
  LuCalendarClock,
  LuGavel,
  LuHandshake,
  LuLock,
  LuMessageSquare,
  LuScale,
} from "react-icons/lu"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

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
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("surface-ink bg-background text-foreground"),
    container: cn(
      "container mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn("gap-14 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"),
  }

  return (
    <section
      id="valores"
      data-slot="values-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div
        data-slot="values-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <Reveal>
          <SectionHeading
            eyebrow="Valores"
            title="O que você pode esperar de um atendimento comigo."
            description="Princípios simples, escritos para que você saiba o que cobrar de mim."
          />
        </Reveal>

        <Reveal delay={0.1}>
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
                    className="size-10 rounded-full bg-foreground/10 text-gold-accent [&_svg]:size-5"
                  >
                    <Icon />
                  </ItemMedia>

                  <ItemContent className="gap-1">
                    <ItemTitle className="font-heading text-2xl text-foreground">
                      {value.title}
                    </ItemTitle>
                    <ItemDescription className="text-sm text-muted-foreground">
                      {value.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              )
            })}
          </ItemGroup>
        </Reveal>
      </div>
    </section>
  )
}

export { ValuesSection }
