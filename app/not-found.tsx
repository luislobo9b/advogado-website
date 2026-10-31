import Link from "next/link"

import { LuArrowLeft } from "react-icons/lu"

import { pillButtonVariants } from "@/components/pill-button"
import { SectionEyebrow } from "@/components/section-eyebrow"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Heading, Paragraph } from "@/components/typography"

export const metadata = {
  title: "Página não encontrada — Pedro Lucas",
  description:
    "O endereço acessado não existe. Volte para o início ou fale direto com o advogado.",
}

function NotFound() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="pt-(--navbar-size)">
        <section
          data-slot="not-found-section"
          className="grid min-h-dvh place-items-center bg-background text-foreground"
        >
          <div className="container mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-20 md:px-8 md:py-28 lg:px-16">
            <SectionEyebrow>Erro 404</SectionEyebrow>

            <Heading as="h1" size="lg" className="m-0">
              Esta página não existe.
            </Heading>

            <Paragraph tone="strong" className="m-0 max-w-xl">
              O endereço acessado mudou ou nunca existiu. O conteúdo principal
              continua no site — volte para o início ou fale comigo direto pelo
              WhatsApp.
            </Paragraph>

            <Link
              href="/"
              className={pillButtonVariants({ size: "lg" })}
              data-slot="not-found-home-link"
            >
              <LuArrowLeft className="size-5" />
              Voltar para o início
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export default NotFound
