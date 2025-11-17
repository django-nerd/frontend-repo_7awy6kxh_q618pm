import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Journey from './components/Journey'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Journey />
        <Process />
        <CTA />
      </main>
      <footer className="bg-black text-white/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Your Agency — Animated Journey Websites</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Start a project</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
