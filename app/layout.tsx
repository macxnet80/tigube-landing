import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "tigube - Tierbetreuung startet bald!",
  description:
    "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland. Seien Sie unter den Ersten, die davon erfahren!",
  generator: "tigube - Tierbetreuung startet bald!",
  keywords: ["Tierbetreuung", "Hundebetreuung", "Katzenbetreuung", "Tiersitter", "Deutschland"],
  authors: [{ name: "tigube" }],
  openGraph: {
    title: "tigube - Tierbetreuung startet bald!",
    description: "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "tigube - Tierbetreuung startet bald!",
    description: "Die vertrauensvolle Plattform für professionelle Tierbetreuung in Deutschland.",
  },
  icons: {
    icon: "/Logos/favicon.png",
    shortcut: "/Logos/favicon.png",
    apple: "/Logos/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Logos/favicon.png" sizes="any" />
        <link rel="icon" href="/Logos/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/Logos/favicon.png" />
        <link rel="apple-touch-icon" href="/Logos/favicon.png" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
