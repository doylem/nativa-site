/**
 * ElevatED course catalogue shown on /elevated.
 *
 * PLACEHOLDER DATA: titles, CPD hours and prices are made up for layout
 * purposes. Replace with the real catalogue before this goes live, then set
 * IS_SAMPLE_CATALOGUE to false to hide the "sample courses" notice.
 */

export const IS_SAMPLE_CATALOGUE = true

export type Stream = "prescriber" | "pharmacist"

export type CourseFormat = "On-demand" | "Live webinar" | "Workshop"

export interface Course {
  id: string
  title: string
  stream: Stream
  format: CourseFormat
  cpdHours: number
  summary: string
  /** Whole Australian dollars. */
  priceAud: number
}

export interface Bundle {
  title: string
  summary: string
  /** Whole Australian dollars. */
  priceAud: number
}

export const streams: { id: Stream; label: string; blurb: string }[] = [
  {
    id: "prescriber",
    label: "Prescribers",
    blurb:
      "Evidence-based, practical courses for doctors and nurse practitioners.",
  },
  {
    id: "pharmacist",
    label: "Pharmacists",
    blurb:
      "Dispensing, compliance and patient management for pharmacy teams.",
  },
]

export const courses: Course[] = [
  {
    id: "ecs-foundations",
    title: "ECS Science for Prescribers",
    stream: "prescriber",
    format: "On-demand",
    cpdHours: 2,
    summary:
      "The endocannabinoid system explained, from receptor pharmacology to what the current evidence supports.",
    priceAud: 150,
  },
  {
    id: "prescribing-pathways",
    title: "Australian Prescribing Pathways",
    stream: "prescriber",
    format: "Live webinar",
    cpdHours: 1.5,
    summary:
      "A step-by-step guide to the TGA access pathways, documentation and your obligations as a prescriber.",
    priceAud: 150,
  },
  {
    id: "patient-management",
    title: "Patient Selection & Monitoring",
    stream: "prescriber",
    format: "On-demand",
    cpdHours: 2,
    summary:
      "Assessing suitability, setting goals, titration principles and structured follow-up.",
    priceAud: 150,
  },
  {
    id: "pharmacy-compliance",
    title: "Pharmacy Regulations & Compliance",
    stream: "pharmacist",
    format: "On-demand",
    cpdHours: 1.5,
    summary:
      "Scheduling, storage, record keeping and audit readiness for community pharmacy.",
    priceAud: 150,
  },
  {
    id: "dose-forms",
    title: "Dose Forms & Device Education",
    stream: "pharmacist",
    format: "Workshop",
    cpdHours: 2,
    summary:
      "Oils, capsules, inhaled and topical formats, and how to counsel patients on each device.",
    priceAud: 150,
  },
  {
    id: "pharmacy-patient-care",
    title: "Patient Management in Pharmacy",
    stream: "pharmacist",
    format: "Live webinar",
    cpdHours: 1.5,
    summary:
      "Counselling, adverse event monitoring and working alongside prescribers for continuity of care.",
    priceAud: 150,
  },
]

export const bundle: Bundle = {
  title: "The Complete ElevatED Bundle",
  summary:
    "All six courses across both streams. Ideal for clinics and pharmacies upskilling a whole team.",
  priceAud: 500,
}

export const bundleFullPriceAud = courses.reduce((sum, c) => sum + c.priceAud, 0)
