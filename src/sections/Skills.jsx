import { skills } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import { RevealGroup, RevealItem } from '../components/ui/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="My toolkit"
          title="Skills & Technologies"
          description="The languages, frameworks, and tools I reach for across the full stack and AI/GenAI."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {skills.map((group) => (
            <RevealItem
              key={group.group}
              direction="up"
              className="glass group p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-accent-400 to-cyan-400" />
                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100">
                  {group.group}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-accent-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
