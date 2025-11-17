import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Journey', href: '#journey' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Your Agency</p>
            <p className="text-xs text-white/60">Animated Journeys</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((i) => (
            <a key={i.label} href={i.href} className="text-white/80 hover:text-white transition-colors text-sm">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 text-sm px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">
            Start a Project
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 grid gap-3">
            {navItems.map((i) => (
              <a key={i.label} href={i.href} onClick={() => setOpen(false)} className="text-white/90">
                {i.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-center px-4 py-2 rounded-md bg-white text-black font-medium">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
