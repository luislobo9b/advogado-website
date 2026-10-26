import { Geist_Mono, Inter } from "next/font/google"

import "@/styles/globals.css"
import { GlobalProviders } from "@/providers/global-providers"
import { cn } from "cn"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}

export default RootLayout
