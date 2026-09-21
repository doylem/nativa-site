"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Header bar shared by `/` and `/elevated`: sticky, same heights on both pages,
 * gains a shadow once scrolled. Pass the background colour for the page's brand.
 *
 * Sticky (not fixed) on purpose: fixed headers get pushed partly off-screen on
 * Android browsers while the URL bar collapses, clipping the logo and button.
 */
export function HeaderBar({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
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
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/30",
        className
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20">
        {children}
      </nav>
    </header>
  )
}

/** Nativa-style pill button for header links. Use on both pages. */
export const headerButtonClass =
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-nativa-ivory/60 px-3.5 py-1.5 font-body text-xs font-medium uppercase tracking-wider text-nativa-ivory transition-colors hover:border-nativa-lime hover:bg-nativa-lime hover:text-nativa-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nativa-lime focus-visible:ring-offset-2 focus-visible:ring-offset-nativa-navy sm:px-5 sm:py-2 sm:text-sm sm:tracking-widest"

/** Top menu for the Nativa homepage. */
export function SiteHeader() {
  return (
    <HeaderBar className="bg-nativa-navy">
      <Link href="/" aria-label="Nativa home" className="flex items-center">
        <Image
          src="/images/brand-v2/nativa-monogram.svg"
          alt=""
          width={878}
          height={764}
          className="h-9 w-auto md:h-10"
        />
      </Link>
    </HeaderBar>
  )
}
