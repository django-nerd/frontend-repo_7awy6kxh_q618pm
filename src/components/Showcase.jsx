function Showcase() {
  const logos = ['Figma', 'Notion', 'Vercel', 'Linear', 'Framer']
  const cards = [
    {
      title: 'Interactive Launch Microsite',
      badge: 'Fintech',
      desc: 'A guided story through product benefits with kinetic typography and scroll-triggered scenes.',
    },
    {
      title: 'Cinematic Product Reveal',
      badge: 'E‑commerce',
      desc: 'A 3D-led reveal experience that increases perceived value and session time.',
    },
    {
      title: 'Narrative Employer Brand',
      badge: 'Recruitment',
      desc: 'A journey that turns culture into moments—show, don’t tell.',
    },
  ]

  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Selected capabilities</h2>
            <p className="mt-3 text-white/70 max-w-xl">We combine 3D, WebGL, and motion systems to craft interactive stories that convert.</p>
          </div>
          <div className="flex gap-4 text-xs text-white/60">
            {logos.map((l) => (
              <span key={l} className="px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">{l}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group relative p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 50%)'
              }} />
              <div className="relative z-10">
                <span className="text-xs text-white/60">{c.badge}</span>
                <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-white/70 text-sm">{c.desc}</p>
                <div className="mt-6 h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
