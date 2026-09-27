import { achievements } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import { RevealGroup, RevealItem } from '../components/ui/Reveal'

const TrophyIcon = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
)

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements & Certifications"
          description="Competitive programming wins and industry-recognized GenAI / ML certifications."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {achievements.map((a) => (
            <RevealItem
              key={a.title}
              direction="scale"
              className="glass group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-400/15 text-accent-300">
                    <TrophyIcon />
                  </span>
                  <span className="chip border-accent-400/30 text-accent-300">{a.tag}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-100 dark:text-slate-100">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
