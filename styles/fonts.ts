import { Geist_Mono, Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

const fontClassNames = [
  "antialiased",
  "font-sans",
  inter.variable,
  geistMono.variable,
] as const

export { inter, geistMono, fontClassNames }
