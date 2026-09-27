import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GithubIcon, ExternalIcon, ArrowUpRight } from './ui/Icons'

// A 3D tilt card that reacts to cursor position.
export default function ProjectCard({ project, featured = false }) {
  const ref = useRef(null)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
    setHovering(false)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`group glass relative flex h-full flex-col overflow-hidden p-6 transition-shadow duration-300 hover:shadow-glow-lg ${
        featured ? 'sm:p-7' : ''
      }`}
    >
      {/* Accent glow header */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
      />

      <div style={{ transform: 'translateZ(40px)' }} className="relative flex h-full flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.featured && (
              <span className="mb-2 inline-block rounded-full bg-accent-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-300">
                Featured
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100">{project.name}</h3>
            <p className="mt-1 text-sm text-accent-400">{project.tagline}</p>
          </div>
          <div className="flex gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:text-accent-300"
              >
                <GithubIcon width={17} height={17} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:text-accent-300"
              >
                <ExternalIcon width={17} height={17} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
            >
              Explore project <ArrowUpRight width={15} height={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
