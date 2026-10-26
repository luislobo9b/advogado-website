import { LuMessageCircle } from "react-icons/lu"

import { cn } from "cn"

import { PillButton } from "@/components/pill-button"

import { WHATSAPP_LINK_PROPS } from "@/lib/site"

type WhatsAppButtonProps = {
  className?: string
}

function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <PillButton
      {...WHATSAPP_LINK_PROPS}
      data-slot="whatsapp-button"
      aria-label="Falar com o advogado Pedro Lucas no WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-40 shadow-lg shadow-ink/20 md:right-6 md:bottom-6",
        className
      )}
    >
      <LuMessageCircle className="size-4" />
      <span className="max-sm:sr-only">Falar no WhatsApp</span>
    </PillButton>
  )
}

export { WhatsAppButton }
