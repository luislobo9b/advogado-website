import Link from "next/link"

import { LuMail, LuMapPin, LuMessageCircle, LuScale } from "react-icons/lu"

import { cn } from "cn"

import { Paragraph } from "@/components/typography"
import { Separator } from "@/components/ui/separator"

import {
  NAV_LINKS,
  PENDING_NOTICE,
  PROFESSIONAL,
  PROFESSIONAL_EMAIL_LINK,
  SITE,
  WHATSAPP_LINK_PROPS,
} from "@/lib/site"

type SiteFooterProps = React.ComponentProps<"footer">

function SiteFooter({ className, ...props }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      data-slot="site-footer"
      className={cn("surface-ink bg-background text-foreground", className)}
      {...props}
    >
        <div className="flex flex-col gap-4">
          <span className="font-heading text-2xl font-semibold">
            {SITE.name}
          </span>
          <Paragraph size="sm" className="m-0 max-w-xs">
            {SITE.tagline}
          </Paragraph>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Atendimento
          </span>

          <a
            {...WHATSAPP_LINK_PROPS}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
          >
            <LuMessageCircle className="size-5 shrink-0 text-gold-accent" />
            WhatsApp
          </a>

          {PROFESSIONAL_EMAIL_LINK ? (
            <a
              href={PROFESSIONAL_EMAIL_LINK}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
            >
              <LuMail className="size-5 shrink-0 text-gold-accent" />
              {PROFESSIONAL.email}
            </a>
          ) : null}

          <span className="flex items-start gap-2 text-sm text-muted-foreground">
            <LuMapPin className="mt-0.5 size-5 shrink-0 text-gold-accent" />
            {PROFESSIONAL.address}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Navegação
          </span>

          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
            Identificação
          </span>

          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <LuScale className="size-5 shrink-0 text-gold-accent" />
            {PROFESSIONAL.oab}
          </span>

          <Paragraph size="sm" className="m-0 text-muted-foreground/70">
            {PENDING_NOTICE}
          </Paragraph>
        </div>
      </div>

      <Separator />

      {/*
        * `pb-20` no desktop reserva a faixa do botão fixo do WhatsApp:
        * sem isso, o botão cobre o link "Política de privacidade".
        */}
        <Paragraph size="sm" className="m-0">
          © {year} {SITE.name} — {SITE.role}. Todos os direitos reservados.
        </Paragraph>

        <Link
          href="/privacidade"
          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Política de privacidade
        </Link>
      </div>
    </footer>
  )
}

export { SiteFooter }
