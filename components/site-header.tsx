import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { MobileNav } from "@/components/mobile-nav"
import { PillButton } from "@/components/pill-button"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  NAV_LINKS,
  SITE,
  WHATSAPP_LINK_PROPS,
} from "@/lib/site"

type SiteHeaderProps = React.ComponentProps<"header">

function SiteHeader({ className, ...props }: SiteHeaderProps) {
  return (
    <header
      data-slot="site-header"
      className={cn(
        "surface-ink fixed inset-x-0 top-0 z-50 h-(--navbar-size) border-b border-border/60 bg-ink/85 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8 lg:px-16">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-heading text-lg font-semibold text-foreground">
            {SITE.name}
            <span className="text-gold">.</span>
          </span>
          <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {SITE.role}
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
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

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <PillButton
            {...WHATSAPP_LINK_PROPS}
            variant="light"
            className="hidden gap-2.5 pl-2 sm:inline-flex"
          >
            <span
              aria-hidden
              className="grid size-7 place-items-center rounded-full bg-gold text-ink"
            >
              <LuArrowUpRight className="size-3.5" />
            </span>
            Vamos conversar
          </PillButton>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
