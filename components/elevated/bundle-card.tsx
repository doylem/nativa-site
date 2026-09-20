import { Clock } from "lucide-react"
import type { Bundle } from "@/data/courses"
import { formatAud } from "@/lib/format"

export function BundleCard({
  bundle,
  fullPriceAud,
  cpdHours,
  eyebrow = "Best value",
}: {
  bundle: Bundle
  fullPriceAud: number
  cpdHours: number
  eyebrow?: string
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-lg bg-elevated-navy text-elevated-cream shadow-xl">
      <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-elevated-lime">
            {eyebrow}
          </p>
          <h3 className="mt-2 font-mukta text-3xl font-bold md:text-4xl">{bundle.title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-elevated-cream/80">{bundle.summary}</p>
          <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-elevated-lime">
            <Clock className="h-5 w-5" aria-hidden="true" />
            {cpdHours} CPD hours in total
          </p>
        </div>
        <div className="shrink-0 md:text-right">
          <p className="font-mukta text-3xl font-bold text-elevated-cream/80 line-through decoration-elevated-lime decoration-4 md:text-4xl">
            {formatAud(fullPriceAud)}
          </p>
          <p className="font-mukta text-6xl font-bold text-elevated-lime">
            {formatAud(bundle.priceAud)}
            <span className="ml-1 font-raleway text-base font-normal text-elevated-cream/70">
              AUD inc. GST
            </span>
          </p>
          <p className="mt-3 inline-block rounded-full bg-elevated-lime px-4 py-1.5 text-lg font-bold text-elevated-navy">
            Save {formatAud(fullPriceAud - bundle.priceAud)}
          </p>
        </div>
      </div>
    </div>
  )
}
