import { motion } from 'motion/react'
import { ShieldCheck, ArrowLeftRight, CheckCircle2, Eye, GitCompareArrows, History } from 'lucide-react'

const points = [
  {
    icon: Eye,
    description: 'A separate AI auditor checks every classification — deterministic or AI — not just the ones flagged as uncertain.',
  },
  {
    icon: GitCompareArrows,
    description: 'When the auditor disagrees, you see both calls before anything reaches your team.',
  },
  {
    icon: History,
    description: 'Approved decisions become precedent, so the next identical pattern resolves automatically.',
  },
]

export default function HowItWorksDetailed() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden font-sans">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs sm:text-sm font-medium tracking-wider text-accent uppercase">Nothing ships unaudited</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fg leading-tight mb-6"
          >
            AI classifies. A second AI checks its work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-fg-muted leading-relaxed"
          >
            The classifier and the auditor are independent models with different jobs — so disagreements get
            caught before a human ever has to find them.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-divider-subtle bg-surface/40 overflow-hidden shadow-elevated"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-divider-subtle">
            <div className="p-7 sm:p-10">
              <div className="text-[10px] uppercase tracking-widest text-fg-subtle mb-4 font-mono">Classifier says</div>
              <div className="text-fg text-xl font-semibold mb-2">Service Fee</div>
              <div className="text-fg-muted text-sm">87% confidence</div>
            </div>
            <div className="p-7 sm:p-10">
              <div className="text-[10px] uppercase tracking-widest text-fg-subtle mb-4 font-mono">Auditor says</div>
              <div className="flex items-center gap-2 text-success text-xl font-semibold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                Agree
              </div>
              <div className="text-fg-muted text-sm">94% agreement score</div>
            </div>
          </div>

          <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-canvas-raised border border-accent-muted/50 items-center justify-center shadow-card">
            <ArrowLeftRight className="w-4 h-4 text-accent" strokeWidth={1.75} />
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
          {points.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.description}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-2.5 sm:max-w-[15rem]"
              >
                <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-fg-muted text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
