import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * ElevatED logo (icon + wordmark).
 *
 * TODO: swap for a local SVG once we have the source file. For now this uses
 * the PNG uploaded to LearnWorlds. That file is 1750x700 with a lot of
 * transparent padding, so we crop to the artwork (x 70-1627, y 184-524).
 */
const SRC =
  "https://lwfiles.mycourse.app/6a27e386f86d8916fd0155ab-public/39a65c6506542a2cf32e7860c1cdcafd.png"
const FULL = { w: 1750, h: 700 }
const CROP = { x: 70, y: 184, w: 1557, h: 340 }

export function ElevatedLogo({
  className,
  sizes = "240px",
  priority = false,
}: {
  className?: string
  /** Passed to next/image; describe the rendered width of the logo. */
  sizes?: string
  priority?: boolean
}) {
  return (
    <span
      className={cn("relative block overflow-hidden", className)}
      style={{ aspectRatio: `${CROP.w} / ${CROP.h}` }}
    >
      <Image
        src={SRC}
        alt="ElevatED"
        width={FULL.w}
        height={FULL.h}
        sizes={sizes}
        priority={priority}
        className="absolute max-w-none"
        style={{
          width: `${(FULL.w / CROP.w) * 100}%`,
          height: "auto",
          left: `${(-CROP.x / CROP.w) * 100}%`,
          top: `${(-CROP.y / CROP.h) * 100}%`,
        }}
      />
    </span>
  )
}
