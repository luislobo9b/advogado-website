import Image from "next/image"

import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { Heading, Paragraph } from "@/components/typography"

import { WHATSAPP_LINK_PROPS } from "@/lib/site"

const HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744"

const HERO_PORTRAIT =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a"

type HeroSectionProps = React.ComponentProps<"section">

function HeroSection({ className, ...props }: HeroSectionProps) {
  const CLASSES = {
    section: cn("relative grid min-h-dvh place-items-center overflow-hidden"),
    colors: cn("surface-ink bg-background text-foreground"),
    container: cn(
      "container mx-auto max-w-7xl grid grid-cols-1 items-center md:grid-cols-2"
    ),
    spacing: cn(
      "gap-14 px-5 pt-(--navbar-size) pb-20 md:px-8 md:pb-28 lg:px-16 lg:gap-20 lg:pb-36"
    ),
  }

  return (
    <section
      id="inicio"
      data-slot="hero-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/90 via-ink/80 to-ink" />
      </div>

      <div
        data-slot="hero-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <SectionEyebrow>Advogado · atendimento direto</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading as="h1" size="display" className="max-w-3xl">
              Direito explicado em{" "}
              <em className="text-gold-accent italic">palavras simples</em>
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph className="max-w-xl">
              Atendo de forma direta e personalizada. Explico o que está
              acontecendo, quanto custa e como cada etapa funciona — sem
              juridiquês e sem promessas que eu não possa cumprir.
            </Paragraph>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-5">
              <PillButton {...WHATSAPP_LINK_PROPS} size="lg">
                Falar no WhatsApp
                <LuArrowUpRight className="size-4" />
              </PillButton>

              <a
                href="#sobre"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Conhecer o trabalho
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scaleIn" delay={0.12}>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src={HERO_PORTRAIT}
              alt="Fotografia ilustrativa de um profissional em traje social"
              fill
              preload
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-foreground/15 ring-inset" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { HeroSection }
