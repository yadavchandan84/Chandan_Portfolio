import Reveal from './Reveal'
import { SparkIcon } from './Icons'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <Reveal className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow">
          <SparkIcon width={13} height={13} />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title gradient-text">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
      )}
      <div className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent-400 to-cyan-400 ${align === 'center' ? '' : ''}`} />
    </Reveal>
  )
}
