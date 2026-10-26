"use client"

import { usePathname } from "next/navigation"

import { useSyncExternalStore } from "react"

import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { SiteNav, SiteNavMobile } from "@/components/site-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { SITE, WHATSAPP_LINK_PROPS } from "@/lib/site"

/** Rolagem mínima para o cabeçalho deixar de ser transparente. */
const SCROLL_THRESHOLD = 150

/**
 * O hero escuro só existe na página inicial. É a única página em que o
 * cabeçalho pode ficar transparente — nas demais o fundo é claro e o texto
 * claro do cabeçalho ficaria ilegível.
 */
const HOME_PATHNAME = "/"

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true })

  return () => {
    window.removeEventListener("scroll", onStoreChange)
  }
}

function getScrollState() {
  return window.scrollY > SCROLL_THRESHOLD
}

function getServerScrollState() {
  return false
}

type SiteHeaderProps = React.ComponentProps<"header">

function SiteHeader({ className, ...props }: SiteHeaderProps) {
  const pathname = usePathname()

  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollState,
    getServerScrollState
  )

  const isTransparent = pathname === HOME_PATHNAME && !isScrolled

  return (
    <header
      data-slot="site-header"
      className={cn(
        "surface-ink fixed inset-x-0 top-0 z-50 h-20 border-b transition-colors duration-400",
        isTransparent
          ? "border-transparent bg-transparent"
          : "border-border/60 bg-ink/85 backdrop-blur-xl",
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
        <a href="#inicio" className="leading-none">
          <span className="font-heading text-lg font-semibold text-foreground">
            {SITE.name}
            <span className="text-gold">.</span>
          </span>
        </a>

        <SiteNav />

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

          <SiteNavMobile />
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
