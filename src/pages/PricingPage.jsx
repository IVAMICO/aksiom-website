import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Tag, CheckCircle2, Layers, ShieldCheck, Rocket, ChevronDown, TrendingDown } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import HeroMeshBackground from '../components/HeroMeshBackground'
import FinalCTA from '../components/FinalCTA'

const FEATURE_GROUPS = [
  {
    heading: 'Coverage',
    icon: Layers,
    items: [
      'Every entity and journal entry included — no per-seat pricing',
      'Volume discount applied automatically, no negotiation needed',
      'Billed annually in EUR, no hidden fees',
    ],
  },
  {
    heading: 'Classification & Audit',
    icon: ShieldCheck,
    items: [
      'The full classification funnel: fixed rules, your manual rules, historical precedent, and AI for the rest',
      'Built-in data quality checks — integrity, blocker, and coverage',
      'Audit-ready output with a confidence score on every classification',
    ],
  },
  {
    heading: 'Getting Live',
    icon: Rocket,
    items: [
      'Live in 8–10 weeks, guided by Aksiom the whole way',
      'Seven of eight setup requirements already exist in your stack today',
      'Kickoff, configuration workshops, and calibration included',
    ],
  },
]

const FAQS = [
  {
    q: 'What counts as an entity?',
    a: 'A legal entity in scope on the platform — a subsidiary, branch, or other legal unit whose intercompany transactions you want classified.',
  },
  {
    q: 'What counts as a journal entry?',
    a: 'A unique intercompany accounting document processed by Aksiom, measured annually.',
  },
  {
    q: 'How does the volume discount work?',
    a: "It's keyed to your total entity count, known before you sign, and applied automatically to the whole invoice — entity fees and usage alike. No negotiation needed.",
  },
  {
    q: 'Is there a setup fee?',
    a: '[Placeholder — pending internal alignment on this.]',
    placeholder: true,
  },
  {
    q: 'What do we need to provide to get started?',
    a: '[Placeholder — pending internal alignment on this.]',
    placeholder: true,
  },
]

// Assumes ~100,000 journal entries per entity, per year.
const EXAMPLES = [
  { entities: 20, entries: '2M', entityFees: 24000, usage: 10000, discountPct: 0 },
  { entities: 50, entries: '5M', entityFees: 60000, usage: 25000, discountPct: 10 },
  { entities: 100, entries: '10M', entityFees: 120000, usage: 50000, discountPct: 20 },
  { entities: 150, entries: '15M', entityFees: 180000, usage: 75000, discountPct: 30 },
  { entities: 300, entries: '30M', entityFees: 360000, usage: 150000, discountPct: 40 },
]

function eur(n) {
  return `€${n.toLocaleString('en-US')}`
}

function FaqItem({ q, a, placeholder }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-divider-subtle py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-fg font-medium text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-4 h-4 text-fg-muted shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className={`text-sm leading-relaxed mt-3 max-w-2xl ${placeholder ? 'italic text-fg-subtle' : 'text-fg-muted'}`}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function PricingPage() {
  useDocumentTitle('Pricing')

  return (
    <div className="relative overflow-hidden font-sans">
      {/* Brand mesh texture flows continuously behind the whole page — no boxed section */}
      <div className="absolute inset-0 pointer-events-none">
        <HeroMeshBackground />
      </div>

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 sm:pt-40 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
              <Tag className="w-3.5 h-3.5" />
              Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-6 leading-tight">
              Two prices. That's it.
            </h1>
            <p className="text-lg text-fg-muted leading-relaxed">
              No tiers to pick between, no feature gates — and it gets cheaper the bigger your group is.
            </p>
          </motion.div>

          {/* The one plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-accent-muted/40 bg-gradient-to-b from-accent-subtle/60 to-surface/60 backdrop-blur-sm overflow-hidden shadow-elevated"
          >
            <div className="p-8 sm:p-10 flex flex-col items-center text-center gap-8 border-b border-divider-subtle">
              <div className="flex items-center gap-6 sm:gap-10 justify-center">
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg">€1,200</div>
                  <div className="text-fg-muted text-sm mt-1">per entity, per year</div>
                </div>
                <div className="text-2xl text-fg-disabled">+</div>
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg">€5</div>
                  <div className="text-fg-muted text-sm mt-1">per 1,000 journal entries</div>
                </div>
              </div>
              <Link
                to="/demo"
                className="px-6 py-3 rounded-lg bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors text-center"
              >
                Request a Demo
              </Link>
            </div>

            <a
              href="#volume-discount"
              className="block px-6 py-4 bg-accent-subtle/40 border-b border-divider-subtle text-fg-muted hover:text-fg transition-colors group"
            >
              <div className="flex items-center justify-center gap-2 mb-2.5">
                <TrendingDown className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />
                <span className="text-sm font-medium text-fg">
                  Have more entities? You pay less per one — automatically.
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-3 gap-y-1 flex-wrap text-xs">
                <span>25+ entities <span className="text-accent font-semibold">−10%</span></span>
                <span className="text-fg-disabled">·</span>
                <span>75+ <span className="text-accent font-semibold">−20%</span></span>
                <span className="text-fg-disabled">·</span>
                <span>150+ <span className="text-accent font-semibold">−30%</span></span>
                <span className="text-fg-disabled">·</span>
                <span>300+ <span className="text-accent font-semibold">−40%</span></span>
                <span className="text-accent ml-1 group-hover:underline underline-offset-2">See the full breakdown ↓</span>
              </div>
            </a>

            <div className="p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {FEATURE_GROUPS.map((group) => (
                <div key={group.heading}>
                  <div className="flex items-center gap-2 mb-4">
                    <group.icon className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                    <h2 className="text-fg text-sm font-semibold uppercase tracking-wider">{group.heading}</h2>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                        <span className="text-fg-muted text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div id="volume-discount" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 sm:mt-8"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-3">
              Save more as your group grows
            </h2>
            <p className="text-fg-muted text-sm leading-relaxed">
              The discount is keyed to entity count, known before you sign, and applied to your whole
              invoice — entity fees and usage alike.
            </p>
          </div>

          <div>
            <div className="overflow-x-auto rounded-xl border border-divider-subtle">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-divider-subtle">
                    <th className="text-left font-medium text-fg-subtle p-4">Entities</th>
                    {EXAMPLES.map((ex) => (
                      <th key={ex.entities} className="text-right font-medium text-fg p-4 whitespace-nowrap">
                        {ex.entities}
                        <div className="text-fg-disabled text-xs font-normal">{ex.entries} entries</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-fg-muted">
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Entity fees</td>
                    {EXAMPLES.map((ex) => (
                      <td key={ex.entities} className="text-right p-4">{eur(ex.entityFees)}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Usage</td>
                    {EXAMPLES.map((ex) => (
                      <td key={ex.entities} className="text-right p-4">{eur(ex.usage)}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Discount</td>
                    {EXAMPLES.map((ex) => {
                      const subtotal = ex.entityFees + ex.usage
                      const discount = Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className="text-right p-4 text-accent">
                          {discount ? `−${eur(discount)}` : '—'}
                          {ex.discountPct > 0 && (
                            <div className="text-xs opacity-70">{ex.discountPct}% off</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b border-divider-subtle bg-surface/30">
                    <td className="p-4 font-semibold text-fg">Total per year</td>
                    {EXAMPLES.map((ex) => {
                      const subtotal = ex.entityFees + ex.usage
                      const total = subtotal - Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className="text-right p-4 font-semibold text-fg">{eur(total)}</td>
                      )
                    })}
                  </tr>
                  <tr>
                    <td className="p-4 text-accent font-medium">Per entity</td>
                    {EXAMPLES.map((ex) => {
                      const subtotal = ex.entityFees + ex.usage
                      const total = subtotal - Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className="text-right p-4 text-accent font-medium">
                          {eur(Math.round(total / ex.entities))}
                        </td>
                      )
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-fg-disabled text-xs leading-relaxed mt-6 max-w-2xl mx-auto text-center">
            Assumes ~100,000 journal entries per entity, per year. An entity is a legal entity in scope on
            the platform; a journal entry is a unique intercompany accounting document, measured annually.
          </p>
        </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-28 pb-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-8 text-center">
            Questions about pricing
          </h2>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} placeholder={faq.placeholder} />
            ))}
          </div>
        </motion.div>
        </div>

        <FinalCTA />
      </div>
    </div>
  )
}
