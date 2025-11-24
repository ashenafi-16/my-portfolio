import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ashenafi Mulugeta - Backend Developer</title>
        <meta
          name="description"
          content="Ashenafi Mulugeta's portfolio - Backend Developer & Software Engineering Student"
        />
      </head>
      <body>
        <ThemeScript />
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
