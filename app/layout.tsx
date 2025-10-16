import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nativa",
  description:
    "Elevating the medicinal cannabis industry in Australia and across the globe by fostering transparency, collaboration and excellence.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/nativa-logo-leaf-only.png', type: 'image/png' },
    ],
    apple: '/images/nativa-logo-leaf-only.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
