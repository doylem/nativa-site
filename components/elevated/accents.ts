import type { Accent } from "@/data/courses"

/**
 * Tailwind needs full class names in the source to generate them, so the
 * accent colours are spelled out here rather than built from strings.
 */
export const accentClasses: Record<Accent, { bar: string; border: string }> = {
  periwinkle: {
    bar: "bg-elevated-periwinkle",
    border: "border-elevated-periwinkle",
  },
  lime: {
    bar: "bg-elevated-lime",
    border: "border-elevated-lime",
  },
}
