function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_100%_0%,rgba(59,130,246,0.18),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Let’s build your journey</h2>
        <p className="mt-3 text-white/70">Tell us your goal. We’ll design an interactive experience that moves people and moves metrics.</p>

        <form className="mt-10 grid gap-4 sm:grid-cols-3 bg-white/5 ring-1 ring-white/10 rounded-2xl p-4">
          <input required placeholder="Your name" className="sm:col-span-1 px-4 py-3 rounded-lg bg-black/40 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input required placeholder="Email" type="email" className="sm:col-span-1 px-4 py-3 rounded-lg bg-black/40 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input required placeholder="Company" className="sm:col-span-1 px-4 py-3 rounded-lg bg-black/40 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <textarea required placeholder="What are you trying to achieve?" className="sm:col-span-3 px-4 py-3 rounded-lg bg-black/40 text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[120px]" />
          <button className="sm:col-span-3 px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Get proposal</button>
        </form>

        <p className="mt-6 text-white/50 text-sm">Average timeline: 3–6 weeks • Spots available this month</p>
      </div>
    </section>
  )
}

export default CTA
