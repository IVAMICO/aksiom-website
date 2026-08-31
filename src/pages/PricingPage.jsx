import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Tag, CheckCircle2, Layers, ShieldCheck, Rocket, ChevronDown } from 'lucide-react'
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
    a: "No. The entity and usage fees are the entire price list — implementation support during your 8–10 week rollout is included.",
  },
  {
    q: 'What do we need to provide to get started?',
    a: 'Mostly things you already have: SAP extracts, a PostgreSQL instance, your standard hosting/SSO pattern, an entity list, and your transaction-type matrix. Review time during calibration is the only genuinely new ask.',
  },
]

const SLIDER_MIN = 1
const SLIDER_MAX = 300
const TIER_MARKERS = [25, 75, 150]

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

// Assumes ~100,000 journal entries per entity, per year.
function discountForEntities(n) {
  if (n >= 300) return 40
  if (n >= 150) return 30
  if (n >= 75) return 20
  if (n >= 25) return 10
  return 0
}

// Which worked-example column the slider's current tier corresponds to —
// same boundaries as discountForEntities, so the table highlight always
// matches the discount % shown above it.
function activeExampleIndex(entities) {
  if (entities >= 300) return 4
  if (entities >= 150) return 3
  if (entities >= 75) return 2
  if (entities >= 25) return 1
  return 0
}

function priceForEntities(entities) {
  const entityFees = entities * 1200
  const usage = entities * 500 // 100k entries/entity → 100 * (€5/1000)
  const subtotal = entityFees + usage
  const discountPct = discountForEntities(entities)
  const discount = Math.round(subtotal * (discountPct / 100))
  const total = subtotal - discount
  return { discountPct, total, perEntity: Math.round(total / entities) }
}

function sliderPct(n) {
  return ((n - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100
}

function FaqItem({ q, a }) {
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
      {open && <p className="text-fg-muted text-sm leading-relaxed mt-3 max-w-2xl">{a}</p>}
    </div>
  )
}

export default function PricingPage() {
  useDocumentTitle('Pricing')
  const [entities, setEntities] = useState(75)
  const { discountPct, total, perEntity } = priceForEntities(entities)
  const fillPct = sliderPct(entities)
  const activeIndex = activeExampleIndex(entities)

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
        {/* Interactive slider — drag to see your price */}
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
              Drag the slider to see how the volume discount applies to your own entity count.
            </p>
          </div>

          <div className="rounded-2xl border border-divider-subtle bg-surface/30 p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="text-fg-muted text-sm mb-2">Number of entities</div>
              <div className="text-5xl font-semibold tracking-tight text-fg">
                {entities}{entities === SLIDER_MAX ? '+' : ''}
              </div>
            </div>

            <div className="relative pb-2">
              <input
                type="range"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                value={entities}
                onChange={(e) => setEntities(Number(e.target.value))}
                className="aksiom-slider relative z-10"
                style={{
                  background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${fillPct}%, var(--color-divider) ${fillPct}%, var(--color-divider) 100%)`,
                }}
                aria-label="Number of entities"
              />
              {TIER_MARKERS.map((n) => (
                <div
                  key={n}
                  className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-canvas/60 pointer-events-none"
                  style={{ left: `${sliderPct(n)}%` }}
                />
              ))}
            </div>
            <div className="relative text-xs text-fg-disabled h-4 mt-1">
              <span className="absolute left-0">1</span>
              {TIER_MARKERS.map((n) => (
                <span key={n} className="absolute -translate-x-1/2" style={{ left: `${sliderPct(n)}%` }}>
                  {n}
                </span>
              ))}
              <span className="absolute right-0">300+</span>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-8 border-t border-divider-subtle text-center">
              <div>
                <div className="text-xl sm:text-2xl font-semibold tracking-tight text-fg">{eur(perEntity)}</div>
                <div className="text-fg-muted text-xs mt-1">per entity, per year</div>
              </div>
              <div>
                <div className={`text-xl sm:text-2xl font-semibold tracking-tight ${discountPct ? 'text-accent' : 'text-fg-subtle'}`}>
                  {discountPct ? `−${discountPct}%` : '—'}
                </div>
                <div className="text-fg-muted text-xs mt-1">volume discount</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold tracking-tight text-fg">{eur(total)}</div>
                <div className="text-fg-muted text-xs mt-1">total per year</div>
              </div>
            </div>
          </div>

          {/* The full math behind five example sizes — the column matching the
              slider above is highlighted live as you drag */}
          <div className="mt-10">
            <h3 className="text-fg-muted text-sm font-medium text-center mb-4">
              The full math behind the highlighted size
            </h3>
            <div className="overflow-x-auto rounded-xl border border-divider-subtle">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-divider-subtle">
                    <th className="text-left font-medium text-fg-subtle p-4">Entities</th>
                    {EXAMPLES.map((ex, i) => (
                      <th
                        key={ex.entities}
                        className={`text-right font-medium p-4 whitespace-nowrap transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40 text-accent' : 'text-fg'}`}
                      >
                        {i === activeIndex && (
                          <div className="text-accent text-[10px] font-semibold uppercase tracking-wide mb-1">
                            Your size
                          </div>
                        )}
                        {ex.entities}
                        <div className="text-fg-disabled text-xs font-normal">{ex.entries} entries</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-fg-muted">
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Entity fees</td>
                    {EXAMPLES.map((ex, i) => (
                      <td key={ex.entities} className={`text-right p-4 transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40' : ''}`}>{eur(ex.entityFees)}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Usage</td>
                    {EXAMPLES.map((ex, i) => (
                      <td key={ex.entities} className={`text-right p-4 transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40' : ''}`}>{eur(ex.usage)}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4">Discount</td>
                    {EXAMPLES.map((ex, i) => {
                      const subtotal = ex.entityFees + ex.usage
                      const discount = Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className={`text-right p-4 text-accent transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40' : ''}`}>
                          {discount ? `−${eur(discount)}` : '—'}
                          {ex.discountPct > 0 && (
                            <div className="text-xs opacity-70">{ex.discountPct}% off</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b border-divider-subtle">
                    <td className="p-4 font-semibold text-fg bg-surface/30">Total per year</td>
                    {EXAMPLES.map((ex, i) => {
                      const subtotal = ex.entityFees + ex.usage
                      const total = subtotal - Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className={`text-right p-4 font-semibold text-fg transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40' : 'bg-surface/30'}`}>{eur(total)}</td>
                      )
                    })}
                  </tr>
                  <tr>
                    <td className="p-4 text-accent font-medium">Per entity</td>
                    {EXAMPLES.map((ex, i) => {
                      const subtotal = ex.entityFees + ex.usage
                      const total = subtotal - Math.round(subtotal * (ex.discountPct / 100))
                      return (
                        <td key={ex.entities} className={`text-right p-4 text-accent font-medium transition-colors duration-300 ${i === activeIndex ? 'bg-accent-subtle/40' : ''}`}>
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
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
        </div>

        <FinalCTA />
      </div>
    </div>
  )
}
