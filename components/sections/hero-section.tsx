import Image from "next/image"

import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { pillButtonVariants } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { Heading, Paragraph } from "@/components/typography"
import { TextGlowEffect } from "../text-glow-effect"

import WaveDivider from "@/components/wave-divider"

const HERO_GLOW =
  "bg-[radial-gradient(circle_at_center,#996f3d_0%,transparent_70%)] opacity-40 mix-blend-lighten contrast-200"

const HERO_BACKGROUND = "/images/books.jpg"

const HERO_PORTRAIT = "/images/person.webp"
const HERO_PORTRAIT_MOBILE = "/images/person-mobile.webp"

type HeroSectionProps = React.ComponentProps<"section">

function HeroSection({ className, ...props }: HeroSectionProps) {
  const personPosition = cn(
    `min-h-[calc(100dvh+1.5rem)] lg:min-h-[calc(100dvh+3rem)]`
  )

  const CLASSES = {
    section: cn(
      "relative isolate grid place-items-center overflow-hidden",
      personPosition
    ),
    colors: cn("surface-ink bg-background text-foreground"),
    container: cn(
      "container mx-auto grid max-w-7xl grid-cols-1 items-stretch xl:grid-cols-2"
    ),
    spacing: cn("gap-8 px-5 pt-(--navbar-size) lg:gap-20 xl:gap-14"),
  }

  const DELAY = 0.4

  return (
    <section
      id="inicio"
      data-slot="hero-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div className="absolute top-0 left-0">
        <div
          className={cn("absolute -top-75 -left-75 h-150 w-150", HERO_GLOW)}
        />
      </div>

      <div
        className={cn("absolute -right-75 bottom-0 h-150 w-150", HERO_GLOW)}
      />

      <div className="absolute -top-35 -left-35 h-100 w-100 bg-[radial-gradient(circle_at_center,#996f3d_0%,transparent_70%)] opacity-3 mix-blend-lighten contrast-200" />

      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          preload
          sizes="100vw"
          className="bg-right object-cover opacity-100 brightness-100 contrast-150"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/95 via-ink/75 to-ink" />
      </div>

      <div
        data-slot="hero-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <div className="xs:mb-5 order-2 mb-20 grid grid-cols-1 place-items-center md:mb-15">
          <div>
            <Reveal className="mb-5" delay={DELAY * 1}>
              <TextGlowEffect color="rgba(0, 0, 0, 0.33)">
                <Heading as="h1">
                  Direito explicado <br />
                  em{" "}
                  <Reveal className="inline" delay={DELAY * 2}>
                    <em className="text-gold italic">palavras simples</em>
                  </Reveal>
                </Heading>
              </TextGlowEffect>
            </Reveal>

            <Reveal className="mb-5" delay={DELAY * 3}>
              <Paragraph>
                Atendo de forma direta e personalizada. Explico o que está
                acontecendo, quanto custa e como cada etapa funciona — sem
                juridiquês e sem promessas que eu não possa cumprir.
              </Paragraph>
            </Reveal>

            <Reveal delay={DELAY * 4}>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#sobre"
                  className={cn(pillButtonVariants({ size: "lg" }))}
                >
                  Conhecer o trabalho
                  <LuArrowUpRight className="size-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="right-[4vw] bottom-0 order-1 xl:absolute 2xl:right-[5.5vw]">
          <Reveal delay={0.12}>
            <Image
              className="mx-auto hidden w-auto max-w-4/5 object-cover xl:block xl:max-h-[95dvh] xl:max-w-full"
              src={HERO_PORTRAIT}
              alt="Fotografia ilustrativa de um profissional em traje social"
              width={1218}
              height={1292}
            />
            <Image
              className="mx-auto block w-auto max-w-4/5 object-cover md:max-w-3/5 lg:max-w-1/2 xl:hidden xl:max-h-[85dvh] xl:max-w-full"
              src={HERO_PORTRAIT_MOBILE}
              alt="Fotografia ilustrativa de um profissional em traje social"
              width={1218}
              height={1292}
            />
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
          shapeColor: "var(--foreground)",
        }}
      />
      <WaveDivider
        className="absolute bottom-0 z-1 hidden h-6 w-full lg:h-12 dark:block"
        waveSettings={{
          softStart: false,
          softEnd: false,
          points: [5, 95],
          backgroundColor: "transparent",
          shapeColor: "var(--background)",
        }}
      />
    </section>
  )
}

export { HeroSection }
