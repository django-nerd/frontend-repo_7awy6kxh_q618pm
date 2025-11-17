import { useEffect, useRef } from 'react'

function Journey() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const steps = Array.from(container.querySelectorAll('[data-step]'))

    const onScroll = () => {
      const viewportH = window.innerHeight
      steps.forEach((el, idx) => {
        const rect = el.getBoundingClientRect()
        const progress = 1 - Math.min(Math.max((rect.top - viewportH * 0.6) / (viewportH * 0.8), 0), 1)
        el.style.setProperty('--reveal', progress.toString())
        el.style.opacity = String(0.15 + progress * 0.85)
        el.style.transform = `translateY(${(1 - progress) * 40}px)`
        el.style.filter = `blur(${(1 - progress) * 6}px)`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    {
      k: '01',
      title: 'Discover the Core Story',
      text: 'We translate your brand into a narrative arc: characters, stakes, set pieces. This becomes the backbone of the experience.'
    },
    {
      k: '02',
      title: 'Design the Interactive Beats',
      text: 'From parallax scenes to tactile micro-interactions, we architect the key moments users will feel and remember.'
    },
    {
      k: '03',
      title: 'Build with Real-time Motion',
      text: 'WebGL, 3D scenes, and subtle transitions merge for fluid, performant motion across devices.'
    },
    {
      k: '04',
      title: 'Launch and Measure Impact',
      text: 'We tune for speed, accessibility, and conversion—then iterate with analytics-guided updates.'
    }
  ]

  return (
    <section id="journey" className="relative bg-black text-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Your customer journey, choreographed</h2>
          <p className="mt-4 text-white/70">A step-by-step narrative where each scroll triggers motion, depth, and meaning.</p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-10">
          {items.map((it, i) => (
            <div
              key={it.k}
              data-step
              className="group relative p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(40px)', filter: 'blur(6px)', transition: 'all 800ms cubic-bezier(0.22, 1, 0.36, 1)' }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:opacity-80 transition-opacity" />
              <div className="text-sm text-white/50">{it.k}</div>
              <h3 className="mt-1 text-2xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-white/70">{it.text}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="mt-4 flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                <span className="text-white/70">Scene progress: <span className="text-white" style={{ opacity: 'var(--reveal)' }}>active</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
