import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'

const columns = [
  {
    heading: 'PRODUCT',
    links: [
      { label: 'Data Quality', href: '/#data-quality' },
      { label: 'Classification Funnel', href: '/#platform' },
      { label: 'AI Audit', href: '/#how-it-works' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: 'mailto:info@aksiom.ai' },
    ],
  },
  {
    heading: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
]

function FooterLink({ href, children }) {
  const className = 'hover:text-fg transition-colors'
  const isInternalRoute = href.startsWith('/') && !href.includes('#')
  if (isInternalRoute) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 mb-16 max-w-2xl">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-fg mb-4">{col.heading}</h4>
              <ul className="space-y-3 text-fg-muted">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-fg-subtle">
          <Link to="/" className="text-2xl font-semibold text-fg tracking-tight flex items-center gap-2">
            <LogoMark size={24} />
            aksiom.ai
          </Link>
          <div className="text-center md:text-right">
            <div>© {new Date().getFullYear()} Aksiom.ai. All rights reserved.</div>
            <div className="text-xs mt-0.5">Krondalvej 9A, 2610 Rødovre, Denmark</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
