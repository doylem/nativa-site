import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Stethoscope,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BundleCard } from "@/components/elevated/bundle-card";
import { accentClasses } from "@/components/elevated/accents";
import { CourseCard } from "@/components/elevated/course-card";
import { ElevatedLogo } from "@/components/elevated/elevated-logo";
import { HeaderBar, headerButtonClass } from "@/components/site-header";
import {
  IS_SAMPLE_CATALOGUE,
  allCoursesBundle,
  allCoursesCpdHours,
  allCoursesFullPriceAud,
  audienceLabels,
  series,
  seriesCpdHours,
  seriesFullPriceAud,
} from "@/data/courses";
import { ELEVATED_REGISTER_URL } from "@/lib/links";

const pillars = [
  {
    icon: BookOpen,
    title: "Researched",
    badge: "bg-elevated-forest text-elevated-lime",
    body: "Grounded in current evidence and clinical literature.",
  },
  {
    icon: BadgeCheck,
    title: "Reviewed",
    badge: "bg-elevated-forest text-elevated-lime",
    body: "Expert-reviewed for accuracy and clinical relevance.",
  },
  {
    icon: Target,
    title: "Relevant",
    badge: "bg-elevated-forest text-elevated-lime",
    body: "Designed for practical application in contemporary clinical practice.",
  },
  {
    icon: Stethoscope,
    title: "Practical",
    badge: "bg-elevated-forest text-elevated-lime",
    body: "Translates evidence into confident, real-world clinical practice.",
  },
];

export default function ElevatedPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header */}

      <HeaderBar className="bg-elevated-navy">
        <Link
          href="/elevated"
          aria-label="ElevatED home"
          className="w-28 min-w-0 shrink sm:w-36 md:w-44"
        >
          <ElevatedLogo sizes="176px" priority />
        </Link>

        <div className="flex shrink-0 items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-elevated-cream/80 transition-colors hover:text-elevated-lime"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Nativa
          </Link>
          <a href="#register" className={headerButtonClass}>
            Register
          </a>
        </div>
      </HeaderBar>

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

        {/* Evidence-led */}
        <section className="bg-elevated-sage px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mx-auto max-w-3xl text-center font-mukta text-4xl font-bold">
              Evidence-led education for Healthcare Professionals
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="text-center">
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${pillar.badge}`}
                  >
                    <pillar.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-mukta text-xl font-bold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-elevated-navy/80">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Course library */}
        <section
          id="courses"
          className="scroll-mt-16 md:scroll-mt-20 px-4 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-mukta text-4xl font-bold md:text-5xl">
              Course Library
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-elevated-navy/80">
              Practical, evidence-based CPD for prescribers, pharmacists and
              nurses. All courses are accredited by the relevant professional
              bodies (APC, RACGP and ACRRM).
            </p>
            <Image
              src="/images/elevated/APC_RACGP_ACCRM.png"
              alt="Accredited CPD: Australian Pharmacy Council, RACGP CPD Approved Activity, and ACRRM CPD Accredited Activity 2026-2028"
              width={851}
              height={315}
              className="mx-auto mt-6 h-auto w-full max-w-xl"
            />
            {IS_SAMPLE_CATALOGUE && (
              <p className="mx-auto mt-4 w-fit rounded-full bg-elevated-lime/30 px-4 py-1 text-sm">
                Sample courses. Final course list and pricing coming soon.
              </p>
            )}

            {series.map((s) => {
              const fullPrice = seriesFullPriceAud(s);
              return (
                <div key={s.id} className="mt-14">
                  <div
                    className={`mb-6 border-l-4 pl-4 ${accentClasses[s.accent].border}`}
                  >
                    <h3 className="font-mukta text-3xl font-bold">{s.label}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {s.audiences.map((a) => (
                        <li
                          key={a}
                          className="rounded-full bg-elevated-navy/10 px-3 py-0.5 text-sm text-elevated-navy/80"
                        >
                          {audienceLabels[a]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`grid gap-6 md:grid-cols-2 ${
                      s.courses.length % 4 === 0
                        ? "lg:grid-cols-4"
                        : "lg:grid-cols-3"
                    }`}
                  >
                    {s.courses.map((course) => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        barClass={accentClasses[s.accent].bar}
                      />
                    ))}
                  </div>

                  {s.bundle && (
                    <BundleCard
                      bundle={s.bundle}
                      fullPriceAud={fullPrice}
                      cpdHours={seriesCpdHours(s)}
                      barClasses={[accentClasses[s.accent].bar]}
                    />
                  )}
                </div>
              );
            })}

            <div className="mt-14">
              <BundleCard
                bundle={allCoursesBundle}
                fullPriceAud={allCoursesFullPriceAud}
                cpdHours={allCoursesCpdHours}
                eyebrow="Best value: every course"
                barClasses={["bg-elevated-periwinkle"]}
              />
            </div>
          </div>
        </section>

        {/* Register */}
        <section
          id="register"
          className="scroll-mt-16 md:scroll-mt-20 bg-elevated-navy px-4 py-24 text-center text-elevated-cream"
        >
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
              <a
                href={ELEVATED_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <Link
              href="/"
              className="text-elevated-lime underline-offset-4 hover:underline"
            >
              Nativa Education &amp; Consulting
            </Link>
            .
          </p>
          <p>
            &copy; {currentYear} Nativa Education &amp; Consulting Pty Ltd. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
