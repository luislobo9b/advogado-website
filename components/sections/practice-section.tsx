import Image from "next/image"

import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Heading, Paragraph } from "@/components/typography"
import { Card, CardContent } from "@/components/ui/card"

const PRACTICE_AREAS = [
  {
    title: "Família e sucessões",
    description:
      "Divórcio, guarda dos filhos, pensão alimentícia, partilha de bens e inventário.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Consumidor e cobranças",
    description:
      "Cobrança indevida, cartão, banco, empresa que não cumpre o combinado e revisão de contratos.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  {
    title: "Trabalhista",
    description:
      "Rescisão do contrato, férias, horas extras, verbas rescisórias e questões de vínculo.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f",
  },
] as const

type PracticeSectionProps = React.ComponentProps<"section">

function PracticeSection({ className, ...props }: PracticeSectionProps) {
  const CLASSES = {
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("bg-card text-card-foreground"),
    container: cn(
      "container mx-auto max-w-7xl grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn("gap-14 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"),
  }

  return (
    <section
      id="atuacao"
      data-slot="practice-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div
        data-slot="practice-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <Reveal>
          <SectionHeading
            eyebrow="Atuação"
            title="Os problemas que mais chegam no primeiro contato."
            description="A lista abaixo é geral e serve como ponto de partida. Se o seu caso não estiver aqui, converse comigo do mesmo jeito."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-6 md:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.title}>
                <Card className="group h-full overflow-hidden rounded-3xl border-0 surface-ink bg-background p-0 text-foreground shadow-none">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={area.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-transparent" />
                  </div>

                  <CardContent className="flex flex-col gap-3 p-6">
                    <Heading as="h3" size="sm" className="m-0">
                      {area.title}
                    </Heading>

                    <Paragraph size="sm" className="m-0 text-muted-foreground">
                      {area.description}
                    </Paragraph>

                    <a
                      href="#contato"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-gold-accent underline-offset-4 transition-colors hover:text-gold-light hover:underline"
                    >
                      Falar sobre isso
                      <LuArrowUpRight className="size-5" />
                    </a>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export { PracticeSection }
