/**
 * ElevatED course library shown on /elevated.
 *
 * Courses are organised into series. Each series lists the audiences it is
 * aimed at (prescribers, pharmacists, nurses) and can carry its own bundle.
 * More series and per-course details (format, CPD hours, summaries) will be
 * added as they are confirmed. Those fields are optional and only render
 * when present.
 */

export const IS_SAMPLE_CATALOGUE = false

export type Audience = "prescriber" | "pharmacist" | "nurse"

export const audienceLabels: Record<Audience, string> = {
  prescriber: "Prescribers",
  pharmacist: "Pharmacists",
  nurse: "Nurses",
}

/** Accent colour used for a series (card bars, heading rule, bundle bar). */
export type Accent = "periwinkle" | "lime"

export type CourseFormat = "On-demand" | "Live webinar" | "Workshop"

export interface Course {
  id: string
  /** Shown above the title, e.g. "MC Foundations 1". */
  label: string
  title: string
  format?: CourseFormat
  cpdHours?: number
  summary?: string
  /** Whole Australian dollars, including GST. */
  priceAud: number
}

export interface Bundle {
  title: string
  summary: string
  /** Whole Australian dollars, including GST. */
  priceAud: number
}

export interface Series {
  id: string
  label: string
  accent: Accent
  audiences: Audience[]
  courses: Course[]
  bundle?: Bundle
}

export const series: Series[] = [
  {
    id: "mc-foundations",
    label: "MC Foundations",
    accent: "periwinkle",
    audiences: ["prescriber", "pharmacist", "nurse"],
    courses: [
      {
        id: "mc-foundations-1",
        label: "MC Foundations 1",
        title: "Australian Legislation & Prescribing Basics",
        format: "On-demand",
        cpdHours: 1.5,
        priceAud: 80,
      },
      {
        id: "mc-foundations-2",
        label: "MC Foundations 2",
        title: "The Endocannabinoid System",
        format: "On-demand",
        cpdHours: 1.5,
        priceAud: 80,
      },
      {
        id: "mc-foundations-3",
        label: "MC Foundations 3",
        title: "Phytocannabinoids & The Entourage Effect",
        format: "On-demand",
        cpdHours: 1.5,
        priceAud: 80,
      },
      {
        id: "mc-foundations-4",
        label: "MC Foundations 4",
        title: "Products & Clinical Considerations",
        format: "On-demand",
        cpdHours: 1.5,
        priceAud: 80,
      },
    ],
    bundle: {
      title: "MC Foundations Bundle",
      summary: "All four MC Foundations courses at a single price.",
      priceAud: 200,
    },
  },
  {
    id: "advanced-indications",
    label: "Advanced Indications with Case Study",
    accent: "lime",
    audiences: ["prescriber", "pharmacist", "nurse"],
    courses: [
      ["chronic-pain", "Chronic Pain"],
      ["anxiety", "Anxiety"],
      ["endometriosis", "Endometriosis"],
      ["palliative-care", "Palliative Care"],
      ["adhd", "ADHD"],
    ].map(([slug, topic]) => ({
      id: `advanced-${slug}`,
      label: "Advanced Indications",
      title: `Medicinal Cannabis for ${topic}`,
      format: "On-demand" as const,
      cpdHours: 1.5,
      priceAud: 80,
    })),
    bundle: {
      title: "Advanced Indications Bundle",
      summary: "All five Advanced Indications with Case Study courses at a single price.",
      priceAud: 250,
    },
  },
]

export const seriesCpdHours = (s: Series) =>
  s.courses.reduce((sum, c) => sum + (c.cpdHours ?? 0), 0)

export const seriesFullPriceAud = (s: Series) =>
  s.courses.reduce((sum, c) => sum + c.priceAud, 0)

export const allCoursesBundle: Bundle = {
  title: "The Complete ElevatED Bundle",
  summary:
    "Every course in the library, MC Foundations and Advanced Indications. Ideal for clinics and pharmacies upskilling a whole team.",
  priceAud: 400,
}

export const allCoursesFullPriceAud = series.reduce(
  (sum, s) => sum + seriesFullPriceAud(s),
  0,
)

export const allCoursesCpdHours = series.reduce(
  (sum, s) => sum + seriesCpdHours(s),
  0,
)
