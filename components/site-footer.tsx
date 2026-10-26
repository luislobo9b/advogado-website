import Link from "next/link"

import { LuMail, LuMapPin, LuMessageCircle, LuScale } from "react-icons/lu"

import { cn } from "cn"

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
      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-4 lg:gap-16 lg:px-16">
        <div className="flex flex-col gap-4">
          <span className="font-heading text-subtitle font-semibold">
            {SITE.name}
          </span>
          <p className="max-w-xs text-body-sm text-muted-foreground">
            {SITE.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-label tracking-[0.18em] text-muted-foreground uppercase">
            Atendimento
          </span>

          <a
            {...WHATSAPP_LINK_PROPS}
            className="flex items-center gap-2 text-body-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
          >
            <LuMessageCircle className="size-4 shrink-0 text-gold-accent" />
            WhatsApp
          </a>

          {PROFESSIONAL_EMAIL_LINK ? (
            <a
              href={PROFESSIONAL_EMAIL_LINK}
              className="flex items-center gap-2 text-body-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
            >
              <LuMail className="size-4 shrink-0 text-gold-accent" />
              {PROFESSIONAL.email}
            </a>
          ) : null}

          <span className="flex items-start gap-2 text-body-sm text-muted-foreground">
            <LuMapPin className="mt-0.5 size-4 shrink-0 text-gold-accent" />
            {PROFESSIONAL.address}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-label tracking-[0.18em] text-muted-foreground uppercase">
            Navegação
          </span>

          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm text-muted-foreground transition-colors duration-400 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-label tracking-[0.18em] text-muted-foreground uppercase">
            Identificação
          </span>

          <span className="flex items-center gap-2 text-body-sm text-muted-foreground">
            <LuScale className="size-4 shrink-0 text-gold-accent" />
            {PROFESSIONAL.oab}
          </span>

          <p className="text-body-sm text-muted-foreground/70">{PENDING_NOTICE}</p>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto max-w-7xl flex flex-col gap-4 px-5 pt-8 pb-24 text-body-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-16 lg:pb-8">
        <p>
          © {year} {SITE.name} — {SITE.role}. Todos os direitos reservados.
        </p>

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
