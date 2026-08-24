import { motion } from 'motion/react'
import { Shield, AlertTriangle, Eye } from 'lucide-react'

const checks = [
  {
    id: 'integrity',
    icon: Shield,
    title: 'Integrity',
    description: 'Structural checks across the pipeline itself, catching malformed data before it ever reaches classification.',
  },
  {
    id: 'blocker',
    icon: AlertTriangle,
    title: 'Blocker',
    description: 'Named problems already sitting in your source ERP data that need investigation, not classification.',
  },
  {
    id: 'coverage',
    icon: Eye,
    title: 'Coverage',
    description: 'How much of your transaction population is actually reachable, so gaps in scope are visible, not silent.',
  },
]

const mockColumns = [
  { id: 'integrity', icon: Shield, label: 'Integrity', hero: '0', caption: 'rows affected' },
  { id: 'blocker', icon: AlertTriangle, label: 'Blocker', hero: '184', caption: 'rows affected' },
  { id: 'coverage', icon: Eye, label: 'Coverage', hero: '48,206', caption: 'transactions' },
]

export default function DataQualitySection() {
  return (
    <section id="data-quality" className="bg-transparent py-24 sm:py-32 relative overflow-hidden font-sans">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6 w-fit">
              <Shield className="w-3.5 h-3.5" />
              Before classification
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4 leading-tight">
              Trust the source data first
            </h2>
            <p className="text-fg-muted leading-relaxed mb-10">
              Problems already sitting in your ERP data can't be fixed by better classification. Aksiom surfaces
              them before they ever reach the pipeline, so you investigate the real issue instead of debugging a
              symptom.
            </p>

            <div className="space-y-6">
              {checks.map((check) => {
                const Icon = check.icon
                return (
                  <div key={check.id} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-divider-subtle flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-fg text-sm font-semibold mb-1">{check.title}</h3>
                      <p className="text-fg-muted text-sm leading-relaxed">{check.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-surface/40 border border-divider-subtle p-6 sm:p-8 backdrop-blur-md shadow-elevated">
              <div className="flex items-center gap-1.5 mb-6">
                <Shield className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                <h3 className="text-fg text-sm font-medium">Data Quality</h3>
                <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-fg-disabled">Illustrative sample</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-divider-subtle">
                {mockColumns.map((col) => {
                  const Icon = col.icon
                  return (
                    <div key={col.id} className="flex flex-col gap-3 pt-6 sm:pt-0 first:pt-0 sm:first:pl-0 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-fg-muted" strokeWidth={1.75} />
                        <span className="text-fg text-sm font-semibold">{col.label}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className={`font-mono text-2xl font-bold tabular-nums ${col.hero === '0' ? 'text-fg-subtle' : 'text-fg'}`}>
                          {col.hero}
                        </span>
                        <span className="text-fg-subtle text-xs">{col.caption}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
