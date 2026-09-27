import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, CodeIcon, MailIcon } from './ui/Icons'

const socials = [
  { href: profile.socials.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: profile.socials.leetcode, label: 'LeetCode', Icon: CodeIcon },
  { href: profile.socials.email, label: 'Email', Icon: MailIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-bold">
            Chandan<span className="text-accent-400">.</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Built with React, Tailwind & Three.js · © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-accent-400/50 hover:text-accent-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
