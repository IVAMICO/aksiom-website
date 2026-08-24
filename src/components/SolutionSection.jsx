import { motion } from 'motion/react'
import { Pin, SlidersHorizontal, History, Sparkles, Target } from 'lucide-react'

const methods = [
  {
    icon: Pin,
    step: '01',
    title: 'Fixed Type',
    note: 'Resolved instantly',
    description: "When an entity pair has only one valid transaction type, there's nothing to decide — it's assigned instantly.",
  },
  {
    icon: SlidersHorizontal,
    step: '02',
    title: 'Manual Rules',
    note: 'Your rules, applied',
    description: 'Rules your team has already defined apply automatically, every time, with no re-entry.',
  },
  {
    icon: History,
    step: '03',
    title: 'Historical Matches',
    note: 'Precedent, trusted',
    description: 'Consistent precedent is trusted rather than re-decided from scratch.',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'AI',
    note: 'Handles what remains',
    description: 'Everything left over gets an AI classification, with a confidence score attached.',
  },
]

export default function SolutionSection() {
  return (
    <section id="platform" className="bg-transparent py-24 sm:py-32 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-subtle/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 mb-6"
          >
            <Target className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs sm:text-sm font-medium tracking-wider text-accent uppercase">The Classification Funnel</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg leading-tight mb-6"
          >
            Deterministic first. AI only when it has to be.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-fg-muted leading-relaxed"
          >
            Most transactions never need AI at all. Aksiom reaches for faster, fully explainable methods first
            — AI only picks up what nothing else could resolve.
          </motion.p>
        </div>

        <div className="relative max-w-xl mx-auto">
          {/* Connecting line + animated flow dot */}
          <div className="absolute left-6 top-6 bottom-6 w-px">
            <div className="w-full h-full bg-divider-subtle" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(91,161,240,0.8)]"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {methods.map((method, i) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-canvas-raised border-2 border-accent-muted/50 flex items-center justify-center shrink-0 shadow-card">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="font-mono text-xs text-accent">{method.step}</span>
                      <h3 className="text-fg text-base font-semibold">{method.title}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-fg-disabled ml-auto hidden sm:inline">
                        {method.note}
                      </span>
                    </div>
                    <p className="text-fg-muted text-sm leading-relaxed">{method.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
