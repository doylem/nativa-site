import { Clock, MonitorPlay, Presentation, Video } from "lucide-react"
import type { Course, CourseFormat } from "@/data/courses"
import { formatAud } from "@/lib/format"

const formatIcon: Record<CourseFormat, typeof Clock> = {
  "On-demand": MonitorPlay,
  "Live webinar": Video,
  Workshop: Presentation,
}

export function CourseCard({
  course,
  barClass = "bg-elevated-lime",
}: {
  course: Course
  barClass?: string
}) {
  const FormatIcon = course.format ? formatIcon[course.format] : null

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg">
      <div className={`h-1.5 ${barClass}`} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-elevated-navy/60">
          {course.label}
        </p>
        <h4 className="mt-2 font-mukta text-2xl font-bold leading-tight">
          {course.title}
        </h4>
        {(course.format || course.cpdHours) && (
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-elevated-navy/70">
            {FormatIcon && course.format && (
              <li className="flex items-center gap-1.5">
                <FormatIcon className="h-4 w-4" aria-hidden="true" />
                {course.format}
              </li>
            )}
            {course.cpdHours && (
              <li className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {course.cpdHours} CPD hours
              </li>
            )}
          </ul>
        )}
        {course.summary && (
          <p className="mt-4 leading-relaxed text-elevated-navy/80">{course.summary}</p>
        )}
        <div className="flex-1" />
        <p className="mt-6 border-t border-elevated-navy/10 pt-4 font-mukta text-3xl font-bold">
          {formatAud(course.priceAud)}
          <span className="ml-1 font-raleway text-sm font-normal text-elevated-navy/60">
            AUD inc. GST
          </span>
        </p>
      </div>
    </article>
  )
}
