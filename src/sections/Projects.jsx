import { projects } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { RevealGroup, RevealItem } from '../components/ui/Reveal'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="What I've built"
          title="Projects"
          description="Full-stack products and GenAI systems — from secure blogging platforms to citation-grounded RAG."
        />

        {/* Featured */}
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.1}>
          {featured.map((project) => (
            <RevealItem key={project.name} direction="up">
              <ProjectCard project={project} featured />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
              More projects & research
            </h3>
            <RevealGroup className="mt-8 grid gap-6 md:grid-cols-2" stagger={0.1}>
              {others.map((project) => (
                <RevealItem key={project.name} direction="up">
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </RevealGroup>
          </>
        )}
      </div>
    </section>
  )
}
