import { experience } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Where I've worked"
          title="Experience"
          description="Hands-on full-stack and GenAI work, shipping real features for real users."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-400/60 via-accent-400/20 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-0">
                  {/* Node */}
                  <span className="absolute left-2.5 top-2 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-accent-400 shadow-glow sm:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
                  </span>

                  <div className="glass p-6 sm:ml-[calc(50%+2rem)] sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100">
                        {job.role}
                      </h3>
                      <span className="chip border-accent-400/30 text-accent-300">{job.mode}</span>
                    </div>
                    <p className="mt-1 font-mono text-sm text-accent-400">{job.company}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{job.period}</p>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
