import { Geist_Mono, Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

/**
 * A fonte mono só é usada por `components/ui/code-block.tsx`, que não faz parte
 * da página. Mantemos a variável disponível, mas sem preload: o arquivo só é
 * baixado se algum dia o bloco de código for renderizado.
 */
const geistMono = Geist_Mono({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
})

const fontClassNames = [
  "antialiased",
  inter.variable,
  playfairDisplay.variable,
  geistMono.variable,
] as const

export { inter, playfairDisplay, geistMono, fontClassNames }
