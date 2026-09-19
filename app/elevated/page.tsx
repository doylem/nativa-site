import Link from "next/link"
import { ArrowLeft, ArrowRight, BadgeCheck, ListChecks, MailCheck, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/elevated/course-card"
import { ElevatedLogo } from "@/components/elevated/elevated-logo"
import {
  IS_SAMPLE_CATALOGUE,
  bundle,
  bundleFullPriceAud,
  courses,
  streams,
} from "@/data/courses"
import { formatAud } from "@/lib/format"
import { ELEVATED_REGISTER_URL } from "@/lib/links"

const steps = [
  {
    icon: ListChecks,
    title: "Choose your courses",
    body: "Browse the catalogue below and pick individual courses or the full bundle.",
  },
  {
    icon: PenLine,
    title: "Register",
    body: "Tell us about yourself and which courses you'd like. It only takes a few minutes.",
  },
  {
    icon: BadgeCheck,
    title: "We verify your registration",
    body: "ElevatED is for healthcare professionals, so we check your AHPRA registration.",
  },
  {
    icon: MailCheck,
    title: "Start learning",
    body: "You'll receive your ElevatED login by email with your courses ready to go.",
  },
]

export default function ElevatedPage() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-elevated-navy text-elevated-cream shadow-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/elevated" aria-label="ElevatED home" className="w-36 md:w-44">
            <ElevatedLogo sizes="176px" priority />
          </Link>
          <div className="flex items-center gap-4 text-sm md:gap-6">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-elevated-cream/80 transition-colors hover:text-elevated-lime"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Nativa
            </Link>
            <a
              href="#register"
              className="rounded border border-elevated-lime px-3 py-1.5 font-semibold text-elevated-lime transition-colors hover:bg-elevated-lime hover:text-elevated-navy"
            >
              Register
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(110deg,#3b4166_0%,#646a8c_30%,#e7e2d8_58%,#dcdfd2_100%)] px-4 py-10 md:py-16">
          <div className="mx-auto max-w-4xl bg-elevated-navy px-6 py-10 text-center shadow-xl md:px-16 md:py-14">
            <p className="text-lg text-elevated-lime md:text-xl">
              Evidence-led education for Healthcare Professionals
            </p>
            <h1 className="mx-auto my-8 w-full max-w-xl md:my-10">
              <ElevatedLogo sizes="(max-width: 768px) 90vw, 576px" priority />
            </h1>
            <p className="text-base italic tracking-wide text-elevated-cream md:text-right md:text-lg">
              EMERGING MEDICINES. ELEVATED LEARNING.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-elevated-sage px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-mukta text-4xl font-bold">How it works</h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-elevated-navy text-elevated-lime">
                    <step.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-mukta text-xl font-bold">
                    <span className="text-elevated-navy/50">{i + 1}.</span> {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-elevated-navy/80">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="scroll-mt-16 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-mukta text-4xl font-bold md:text-5xl">Courses</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-elevated-navy/80">
              Practical, evidence-based CPD for prescribers and pharmacists.
            </p>
            {IS_SAMPLE_CATALOGUE && (
              <p className="mx-auto mt-4 w-fit rounded-full bg-elevated-lime/30 px-4 py-1 text-sm">
                Sample courses. Final course list and pricing coming soon.
              </p>
            )}

            {streams.map((stream) => (
              <div key={stream.id} className="mt-14">
                <div className="mb-6 border-l-4 border-elevated-lime pl-4">
                  <h3 className="font-mukta text-3xl font-bold">{stream.label}</h3>
                  <p className="text-elevated-navy/70">{stream.blurb}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courses
                    .filter((c) => c.stream === stream.id)
                    .map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                </div>
              </div>
            ))}

            {/* Bundle */}
            <div className="mt-16 overflow-hidden rounded-lg bg-elevated-navy text-elevated-cream shadow-xl">
              <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-widest text-elevated-lime">
                    Best value
                  </p>
                  <h3 className="mt-2 font-mukta text-3xl font-bold md:text-4xl">
                    {bundle.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-elevated-cream/80">
                    {bundle.summary}
                  </p>
                </div>
                <div className="shrink-0 md:text-right">
                  <p className="text-elevated-cream/60 line-through">
                    {formatAud(bundleFullPriceAud)}
                  </p>
                  <p className="font-mukta text-6xl font-bold text-elevated-lime">
                    {formatAud(bundle.priceAud)}
                    <span className="ml-1 font-raleway text-base font-normal text-elevated-cream/70">
                      AUD
                    </span>
                  </p>
                  <p className="mt-2 inline-block rounded-full bg-elevated-lime px-3 py-1 text-sm font-bold text-elevated-navy">
                    Save {formatAud(bundleFullPriceAud - bundle.priceAud)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Register */}
        <section id="register" className="scroll-mt-16 bg-elevated-navy px-4 py-24 text-center text-elevated-cream">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-mukta text-4xl font-bold md:text-5xl">
              Ready to elevate your practice?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-elevated-cream/80">
              Registration is open to AHPRA-registered healthcare professionals.
              Let us know which courses you&apos;re interested in and we&apos;ll
              verify your registration and set up your ElevatED access.
            </p>
            <Button
              asChild
              className="mt-10 h-auto rounded-md bg-elevated-lime px-16 py-6 font-mukta text-3xl font-bold text-elevated-navy shadow-lg hover:bg-elevated-cream"
            >
              <a href={ELEVATED_REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register
                <ArrowRight className="ml-3 !h-7 !w-7" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <p className="mt-4 text-sm text-elevated-cream/60">
              Opens our registration form in a new tab.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-elevated-navy px-4 pb-10 text-center text-sm text-elevated-cream/70">
        <div className="mx-auto max-w-6xl space-y-3 border-t border-elevated-cream/10 pt-8">
          <p>
            ElevatED is an education platform by{" "}
            <Link href="/" className="text-elevated-lime underline-offset-4 hover:underline">
              Nativa Education &amp; Consulting
            </Link>
            .
          </p>
          <p>&copy; {currentYear} Nativa Education &amp; Consulting Pty Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
