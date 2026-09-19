import type { Metadata } from "next"
import { Mukta, Raleway } from "next/font/google"

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mukta",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ElevatED by Nativa",
  description:
    "Evidence-led education in emerging medicines for Australian healthcare professionals.",
  // TODO: remove once the real course catalogue replaces the sample data
  robots: { index: false, follow: false },
}

export default function ElevatedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${mukta.variable} ${raleway.variable} min-h-screen bg-elevated-mist font-raleway text-elevated-navy`}
    >
      {children}
    </div>
  )
}
