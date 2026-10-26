"use client"

import * as React from "react"

import { LuMenu, LuMessageCircle } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  NAV_LINKS,
  WHATSAPP_LINK_PROPS,
} from "@/lib/site"

type MobileNavProps = {
  /** Classes aplicadas ao botão que abre o menu. */
  className?: string
}

function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

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
          <PillButton
            {...WHATSAPP_LINK_PROPS}
            className="w-full"
          >
            <LuMessageCircle className="size-4" />
            Falar no WhatsApp
          </PillButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { MobileNav }
