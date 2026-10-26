import "@/styles/globals.css"
import { GlobalProviders } from "@/providers/global-providers"
import { cn } from "cn"
import { fontClassNames } from "@/styles/fonts"

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(...fontClassNames)}>
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}

export default RootLayout
