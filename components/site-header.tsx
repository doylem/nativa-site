"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/** Top menu for the Nativa homepage. Always Nativa Navy; gains a shadow once scrolled. */
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
        "fixed inset-x-0 top-0 z-50 bg-nativa-navy transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/30"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
        <Link href="/" aria-label="Nativa home" className="flex items-center">
          <Image
            src="/images/brand-v2/nativa-monogram.svg"
            alt=""
            width={878}
            height={764}
            className="h-9 w-auto md:h-10"
          />
        </Link>
        <Link
          href="/elevated"
          className="rounded-full border border-nativa-ivory/60 px-5 py-2 text-sm font-medium uppercase tracking-widest text-nativa-ivory transition-colors hover:border-nativa-lime hover:bg-nativa-lime hover:text-nativa-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nativa-lime focus-visible:ring-offset-2 focus-visible:ring-offset-nativa-navy"
        >
          Education
        </Link>
      </nav>
    </header>
  )
}
