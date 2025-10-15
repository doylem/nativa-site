import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nativa",
  description:
    "Elevating the medicinal cannabis industry in Australia and across the globe by fostering transparency, collaboration and excellence.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
