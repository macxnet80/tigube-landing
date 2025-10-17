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
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1118767467115751');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Meta Pixel Code - noscript fallback */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1118767467115751&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
