import "@/styles/globals.css"

import { cn } from "cn"

import { GlobalProviders } from "@/providers/global-providers"

import { fontClassNames } from "@/styles/fonts"

import type { Metadata, Viewport } from "next"

const metadata: Metadata = {
  title: "Pedro Lucas — Advogado",
  description:
    "Atendimento jurídico direto, com clareza e proximidade. Fale com o advogado Pedro Lucas pelo WhatsApp.",
  openGraph: {
    title: "Pedro Lucas — Advogado",
    description:
      "Atendimento jurídico direto, com clareza e proximidade. Fale com o advogado Pedro Lucas pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
}

const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#211c17" },
  ],
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn(...fontClassNames)}>
      <body>
        {/*
          Sem JavaScript, o conteúdo revelado por animação ficaria invisível.
          Este fallback garante que todo o texto e os links permaneçam legíveis.
        */}
        <noscript>
          <style>{`[data-slot="reveal"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}

export { metadata, viewport }

export default RootLayout
