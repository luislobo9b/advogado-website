import { Geist_Mono, Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-geist-mono",
  display: "swap",
})

const fontClassNames = [
  "antialiased",
  inter.variable,
  playfairDisplay.variable,
  geistMono.variable,
] as const

export { inter, playfairDisplay, geistMono, fontClassNames }
