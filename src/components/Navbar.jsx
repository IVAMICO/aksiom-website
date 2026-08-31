import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoMark from './LogoMark'

const navLinks = [
  { label: 'The Challenge', href: '/#problem' },
  { label: 'Platform', href: '/#platform' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', to: '/pricing' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
]

function NavItem({ link, onClick, className }) {
  return link.to ? (
    <Link to={link.to} onClick={onClick} className={className}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-canvas/85 backdrop-blur-xl border-b border-divider-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-fg font-semibold text-lg tracking-tight flex items-center gap-2" onClick={() => setOpen(false)}>
          <LogoMark size={26} />
          aksiom
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} className="text-sm text-fg-muted hover:text-fg transition-colors" />
          ))}
          <span className="w-px h-4 bg-divider-subtle" aria-hidden="true" />
          {companyLinks.map((link) => (
            <NavItem key={link.label} link={link} className="text-sm text-fg-muted hover:text-fg transition-colors" />
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
            <NavItem key={link.label} link={link} onClick={() => setOpen(false)} className="text-sm text-fg-muted hover:text-fg transition-colors" />
          ))}
          {companyLinks.map((link) => (
            <NavItem key={link.label} link={link} onClick={() => setOpen(false)} className="text-sm text-fg-muted hover:text-fg transition-colors" />
          ))}
        </div>
      )}
    </nav>
  )
}
