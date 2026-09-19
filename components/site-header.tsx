"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/** Top menu for the Nativa homepage. Transparent over the hero, solid once scrolled. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-nativa-olive/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
        <Link href="/" aria-label="Nativa home" className="flex items-center">
          <Image
            src="/images/nativa-logo-leaf-only.png"
            alt=""
            width={120}
            height={160}
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <Link
          href="/elevated"
          className="rounded-full border border-white/60 px-5 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-nativa-olive"
        >
          Education
        </Link>
      </nav>
    </header>
  )
}
