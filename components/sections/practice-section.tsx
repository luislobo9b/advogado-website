import Image from "next/image"

import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { Heading, Paragraph } from "@/components/typography"
import { Card, CardContent } from "@/components/ui/card"
import { LinearGradient } from "../linear-gradient"
import { SectionEyebrow } from "../section-eyebrow"
import { GlowCircle } from "../glow-circle"
import { globalContainerClasses } from "@/utils/globals"

const PRACTICE_AREAS = [
  {
    title: "Família e sucessões",
    description:
      "Divórcio, guarda dos filhos, pensão alimentícia, partilha de bens e inventário.",
    imgUrl: "/images/card-1.webp",
    mobileImgUrl: "/images/card-mobile-1.webp",
  },
  {
    title: "Consumidor e cobranças",
    description:
      "Cobrança indevida, cartão, banco, empresa que não cumpre o combinado e revisão de contratos.",
    imgUrl: "/images/card-2.webp",
    mobileImgUrl: "/images/card-mobile-2.webp",
  },
  {
    title: "Trabalhista",
    description:
      "Rescisão do contrato, férias, horas extras, verbas rescisórias e questões de vínculo.",
    imgUrl: "/images/card-3.webp",
    mobileImgUrl: "/images/card-mobile-3.webp",
  },
] as const

const IMG_SIZES = [
  {
    imgUrl: "card-1.webp",
    width: 1024,
    height: 1536,
  },
  {
    imgUrl: "card-2.webp",
    width: 1024,
    height: 1536,
  },
  {
    imgUrl: "card-3.webp",
    width: 1024,
    height: 1536,
  },
  {
    imgUrl: "card-mobile-1.webp",
    width: 1536,
    height: 1024,
  },
  {
    imgUrl: "card-mobile-2.webp",
    width: 1536,
    height: 1024,
  },
  {
    imgUrl: "card-mobile-3.webp",
    width: 1536,
    height: 1024,
  },
] as const

const GLOW_VALUES = [
  cn("-top-75 -left-75 opacity-75"),
  cn("-top-0 -left-75 opacity-30"),
  cn("-top-75 -right-75 opacity-50"),
] as const

type PracticeSectionProps = React.ComponentProps<"section">

function PracticeSection({ className, ...props }: PracticeSectionProps) {
  const CLASSES = {
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("bg-card text-card-foreground"),
    container: cn(globalContainerClasses),
    spacing: cn("gap-4 py-4 md:py-6 lg:gap-8 lg:py-8"),
  }

  const bigCard = {
    parent: cn("mt-0 lg:mt-[100px]"),
    card: cn("-top-[0] h-auto lg:-top-[100px] lg:h-[calc(95%_+_100px)]"),
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
        <Reveal className="w-full text-center">
          <SectionEyebrow>Atuação</SectionEyebrow>
          <Heading className="mb-2" as="h2">
            Os problemas que mais <br className="hidden md:block" /> chegam no{" "}
            <span className="text-gold">primeiro contato.</span>
          </Heading>
          <Paragraph>
            A lista abaixo é geral e serve como ponto de partida. Se o seu caso
            não estiver aqui, converse comigo do mesmo jeito.
          </Paragraph>
        </Reveal>

        <ul
          className={cn(
            `grid gap-6 md:grid-cols-1 lg:grid-cols-3`,
            bigCard.parent
          )}
        >
          {PRACTICE_AREAS.map((area, index) => {
            const DELAY = 0.2
            const isCenterCard = index === 1
            const { width: imgWidth, height: imgHeight } = IMG_SIZES.find(
              (img) => area.imgUrl.endsWith(img.imgUrl)
            )!
            const { width: mobileImgWidth, height: mobileImgHeight } =
              IMG_SIZES.find((img) => area.mobileImgUrl.endsWith(img.imgUrl))!

            return (
              <li
                key={area.title}
                className="mx-auto max-w-[500px] px-4 lg:max-w-full lg:px-0"
              >
                <Card
                  className={cn(
                    `group surface-ink relative overflow-hidden rounded-3xl border-0 bg-transparent p-0 text-foreground shadow-none lg:min-h-fit`,
                    !isCenterCard && "h-[calc(95%)]",
                    isCenterCard && bigCard.card
                  )}
                >
                  <Reveal
                    delay={DELAY * index}
                    className="relative grid h-full grid-rows-[1fr_1fr]"
                  >
                    <GlowCircle
                      className={cn(
                        `absolute z-2 h-150 w-150 mix-blend-lighten contrast-200`,
                        GLOW_VALUES[index]
                      )}
                      color="#996f3d"
                      start="0%"
                      end="70%"
                    />
                    <div className="absolute h-full w-full">
                      <Image
                        src={area.imgUrl}
                        alt=""
                        width={imgWidth}
                        height={imgHeight}
                        className="h-full w-full object-cover brightness-110 transition-transform duration-400 group-hover:scale-105"
                      />
                      <LinearGradient
                        className="from-ink via-ink to-transparent"
                        direction="top"
                        viaPosition={25}
                        via2Position={60}
                      />
                    </div>

                    <CardContent className="relative z-1 flex flex-col gap-3 px-0">
                      <div className="relative aspect-4/3 overflow-hidden">
                        <Image
                          src={area.mobileImgUrl}
                          alt=""
                          width={mobileImgWidth}
                          height={mobileImgHeight}
                          className="h-full w-full object-cover opacity-0 transition-transform duration-400 group-hover:scale-105"
                        />
                        <LinearGradient
                          className="from-ink via-ink to-transparent opacity-0"
                          direction="top"
                          viaPosition={10}
                          via2Position={100}
                        />
                      </div>
                    </CardContent>
                    <CardContent className="relative z-1 flex flex-col gap-3">
                      <div className="mt-auto flex flex-col gap-3 pt-6 pb-8">
                        <Heading as="h2" className="m-0 text-4xl">
                          {area.title}
                        </Heading>

                        <Paragraph className="m-0 text-muted-foreground">
                          {area.description}
                        </Paragraph>

                        <a
                          href="#contato"
                          className="mt-1 inline-flex items-center gap-1.5 text-base font-medium text-gold-accent underline-offset-4 transition-colors hover:text-gold-light hover:underline"
                        >
                          Falar sobre isso
                          <LuArrowUpRight className="size-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Reveal>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export { PracticeSection }
