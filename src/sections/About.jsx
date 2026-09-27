import { about, profile } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who I am"
          title={about.heading}
          description="A quick snapshot of my background, what drives me, and where I'm headed."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Bio */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="glass h-full p-7 sm:p-9">
              <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-ghost">
                  GitHub
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                  LinkedIn
                </a>
                <a href="#contact" className="btn-primary">
                  Let&rsquo;s talk
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick facts */}
          <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2" stagger={0.1}>
            {about.quickFacts.map((fact) => (
              <RevealItem
                key={fact.label}
                direction="scale"
                className="glass group flex flex-col justify-center p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                  {fact.label}
                </div>
                <div className="mt-2 text-lg font-bold text-slate-100 dark:text-slate-100">
                  {fact.value}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
