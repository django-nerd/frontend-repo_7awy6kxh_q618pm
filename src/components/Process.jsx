function Process() {
  const steps = [
    {
      title: 'Story Sprint',
      desc: 'We extract your brand narrative and structure it into a clear journey with emotional beats.',
    },
    {
      title: 'Mood + Motion',
      desc: 'We define the motion language, visual systems, and interaction patterns for the experience.',
    },
    {
      title: 'Build + Polish',
      desc: 'We develop, tune performance, and add delightful micro-interactions that feel alive.',
    },
  ]

  return (
    <section id="process" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_0%_0%,rgba(236,72,153,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">How we craft</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A high-touch, creative process from concept to conversion—made for teams who value originality and polish.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 leading-none">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
