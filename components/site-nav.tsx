"use client"

import { useState } from "react"

import { LuMenu, LuMessageCircle } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { NAV_LINKS, WHATSAPP_LINK_PROPS } from "@/lib/site"

type SiteNavProps = React.ComponentProps<typeof NavigationMenu>

/**
 * Navegação principal do desktop.
 *
 * O `NavigationMenu` já renderiza um `nav` — aninhar outro `nav` criaria um
 * landmark inválido — e estrutura os links como `ul`/`li`/`a`, adicionando a
 * navegação por setas entre os itens. Só aparece a partir de `lg`, onde
 * existe espaço para a lista horizontal.
 */
function SiteNav({ className, ...props }: SiteNavProps) {
  return (
    <NavigationMenu
      data-slot="site-nav"
      className={cn("hidden lg:flex", className)}
      aria-label="Navegação principal"
      {...props}
    >
      <NavigationMenuList className="gap-1">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-md text-muted-foreground hover:text-foreground"
              )}
              href={link.href}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type SiteNavMobileProps = React.ComponentProps<typeof Button>

/**
 * Menu principal do mobile.
 *
 * Substitui a lista horizontal por uma `Sheet` acionada pelo botão de menu.
 * O estado (`aria-expanded`) e o vínculo com o diálogo (`aria-controls`) são
 * fornecidos pelo `SheetTrigger`.
 */
function SiteNavMobile({ className, ...props }: SiteNavMobileProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className={cn(
              "rounded-full text-foreground/70 hover:text-foreground lg:hidden",
              className
            )}
            aria-label="Abrir menu"
            {...props}
          />
        }
      >
        <LuMenu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-3/4 gap-6 bg-card">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
          <SheetDescription>
            Navegue pelas seções do site ou fale direto no WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Navegação móvel" className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-lg text-foreground transition-colors duration-400 hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SheetFooter>
          <PillButton {...WHATSAPP_LINK_PROPS} className="w-full">
            <LuMessageCircle className="size-5" />
            Falar no WhatsApp
          </PillButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { SiteNav, SiteNavMobile }
