import { Component } from 'react'

// Detect WebGL support once at module load.
export function hasWebGL() {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

// A pure-CSS animated orb used when WebGL is unavailable or the 3D scene errors.
export function CSSFallbackOrb() {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-accent-400/60 to-cyan-500/40 blur-2xl" />
        <div className="absolute inset-6 animate-float rounded-full border border-accent-400/40 bg-gradient-to-br from-accent-500/30 to-cyan-600/20 backdrop-blur-xl" />
        <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-accent-400/30" />
        <div className="absolute inset-4 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-dashed border-cyan-400/20" />
      </div>
    </div>
  )
}

// Error boundary: if the WebGL scene throws at runtime, render the CSS orb.
export class SceneBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return <CSSFallbackOrb />
    return this.props.children
  }
}
