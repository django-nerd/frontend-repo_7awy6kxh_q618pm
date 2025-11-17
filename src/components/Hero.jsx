import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-fuchsia-300/90 text-sm backdrop-blur-xl bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            We build animated journey websites
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl leading-[1.05] font-semibold tracking-tight text-white">
            Transform your story into an interactive, cinematic web experience
          </h1>
          <p className="mt-5 text-white/70 text-lg">
            We craft immersive narratives where 3D, motion, and micro-interactions guide users through your brand. No scrolling boredom—only moments that stick.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#journey" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">See the journey</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
