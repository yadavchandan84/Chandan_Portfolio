import { Suspense, lazy, useMemo } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import {
  GithubIcon,
  LinkedinIcon,
  CodeIcon,
  DownloadIcon,
  ArrowUpRight,
  MailIcon,
} from '../components/ui/Icons'
import { hasWebGL, CSSFallbackOrb, SceneBoundary } from '../components/three/SceneFallback'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '1000+', label: 'DSA Problems' },
  { value: '15+', label: 'REST APIs Built' },
  { value: '10K+', label: 'Docs in RAG' },
]

export default function Hero() {
  const webgl = useMemo(() => hasWebGL(), [])

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 sm:pt-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.span variants={item} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I&rsquo;m <span className="gradient-text animate-gradient-pan">{profile.name}</span>
            <br />
            <span className="text-slate-400 dark:text-slate-400">I build for the web & AI.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-mono text-sm text-accent-400 sm:text-base">
            {profile.role} · {profile.focus}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-primary">
              <GithubIcon width={18} height={18} /> View GitHub
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <DownloadIcon width={18} height={18} /> Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact <ArrowUpRight width={16} height={16} />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            {[
              { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
              { href: profile.socials.leetcode, label: 'LeetCode', Icon: CodeIcon },
              { href: profile.socials.email, label: 'Email', Icon: MailIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-accent-400/50 hover:text-accent-300"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass px-3 py-4 text-center">
                <div className="gradient-text text-2xl font-extrabold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="order-1 h-[340px] w-full sm:h-[440px] lg:order-2 lg:h-[540px]"
        >
          {webgl ? (
            <SceneBoundary>
              <Suspense fallback={<CSSFallbackOrb />}>
                <HeroScene />
              </Suspense>
            </SceneBoundary>
          ) : (
            <CSSFallbackOrb />
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-500/50 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-accent-400"
          />
        </div>
      </motion.a>
    </section>
  )
}
