import { motion } from 'motion/react'
import { Newspaper, Download, Mail } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const facts = [
  { label: 'Founded', value: 'Summer 2026' },
  { label: 'Headquarters', value: 'Copenhagen, Denmark' },
  { label: 'Founders', value: 'Vidak, Vuk & Milo Rajovic' },
  { label: 'Registered Address', value: 'Krondalvej 9A, 2610 Rødovre, Denmark' },
]

export default function InformationPage() {
  useDocumentTitle('Press & Information')
  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            Press &amp; Information
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-6 leading-tight">
            Aksiom press kit
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed mb-16">
            Aksiom is transfer pricing intercompany transaction classification software for multinational
            finance and tax teams — turning ERP journal entries into an audit-ready, classified dataset.
          </p>
        </motion.div>

        <section className="mb-16">
          <h2 className="text-fg text-sm font-semibold uppercase tracking-wider mb-6">Logo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-divider-subtle bg-canvas p-8 flex items-center justify-center">
              <img src="/press/aksiom-logo-dark-bg.svg" alt="Aksiom logo, for dark backgrounds" className="h-10" />
            </div>
            <div className="rounded-xl border border-divider-subtle bg-gray-950 p-8 flex items-center justify-center">
              <img src="/press/aksiom-logo-light-bg.svg" alt="Aksiom logo, for light backgrounds" className="h-10" />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="/press/aksiom-logo-dark-bg.svg" download className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Download className="w-3.5 h-3.5" /> Dark background (.svg)
            </a>
            <a href="/press/aksiom-logo-light-bg.svg" download className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Download className="w-3.5 h-3.5" /> Light background (.svg)
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-fg text-sm font-semibold uppercase tracking-wider mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <div className="text-[10px] uppercase tracking-widest text-fg-subtle mb-1">{fact.label}</div>
                <div className="text-fg-muted text-sm">{fact.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-fg text-sm font-semibold uppercase tracking-wider mb-4">Press Contact</h2>
          <a href="mailto:info@aksiom.ai" className="inline-flex items-center gap-2 text-accent hover:underline">
            <Mail className="w-4 h-4" /> info@aksiom.ai
          </a>
        </section>
      </div>
    </div>
  )
}
