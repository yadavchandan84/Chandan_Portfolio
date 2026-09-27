import { profile } from '../data/portfolio'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  CodeIcon,
  ArrowUpRight,
} from '../components/ui/Icons'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, Icon: PhoneIcon },
]

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: 'LeetCode', href: profile.socials.leetcode, Icon: CodeIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something"
          description="Open to full-time roles, internships, and interesting collaborations. My inbox is always open."
        />

        <Reveal direction="scale" className="mx-auto mt-14 max-w-3xl">
          <div className="glass relative overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
            </div>

            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Want to work together?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Drop me a message and I&rsquo;ll get back to you as soon as I can.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn-primary mx-auto mt-7"
            >
              <MailIcon width={18} height={18} /> Say hello
            </a>

            {/* Contact channels */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent-400/50"
                >
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-accent-400/15 text-accent-300">
                    <Icon width={19} height={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate font-medium text-slate-200 group-hover:text-accent-300">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-accent-400/50 hover:text-accent-300"
                >
                  <Icon width={19} height={19} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
