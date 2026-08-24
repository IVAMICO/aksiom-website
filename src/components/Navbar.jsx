import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'The Challenge', href: '/#problem' },
  { label: 'Platform', href: '/#platform' },
  { label: 'How It Works', href: '/#how-it-works' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-canvas/85 backdrop-blur-xl border-b border-divider-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-fg font-semibold text-lg tracking-tight flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-2 h-2 rounded-full bg-accent" />
          Aksiom
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-fg-muted hover:text-fg transition-colors">
              {link.label}
            </a>
          ))}
          <span className="w-px h-4 bg-divider-subtle" aria-hidden="true" />
          {companyLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-sm text-fg-muted hover:text-fg transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/demo"
            className="px-4 py-2 rounded-lg bg-accent text-fg-on-accent text-sm font-medium hover:bg-accent-muted transition-colors"
          >
            Request Demo
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-fg-muted hover:text-fg"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-divider-subtle bg-canvas/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm text-fg-muted hover:text-fg transition-colors">
              {link.label}
            </a>
          ))}
          {companyLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className="text-sm text-fg-muted hover:text-fg transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
