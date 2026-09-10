import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { ScrollText, Database, Tags, TrendingUp, RefreshCcw, ShieldCheck, Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import Eyebrow from './Eyebrow'

const stages = [
  {
    step: '01',
    icon: ScrollText,
    title: 'Set the policy',
    description: 'Benchmarking studies and intercompany agreements are translated into a method, a profit level indicator, and a target arm’s-length range for every transaction type.',
  },
  {
    step: '02',
    icon: Database,
    title: 'Collect the actuals',
    description: 'Every entity’s ERP posts thousands of journal entries a year. OTP starts from the real, transaction-level data behind the policy — not a year-end sample.',
    covered: true,
  },
  {
    step: '03',
    icon: Tags,
    title: 'Classify against policy',
    description: 'Each transaction is matched to its TP category and counterparty, so the right policy applies to the right flow — not the whole entity pair at once.',
    covered: true,
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Monitor through the year',
    description: 'Actual margins are tracked against the target range month over month, so a drift outside range is caught in Q2 — not discovered during the year-end audit.',
    covered: true,
  },
  {
    step: '05',
    icon: RefreshCcw,
    title: 'True-up and invoice',
    description: 'Where actuals land outside the range, the adjustment is calculated and posted as an intercompany credit or debit note before the books close.',
    covered: true,
  },
  {
    step: '06',
    icon: ShieldCheck,
    title: 'Document and defend',
    description: 'The reconciled, evidenced dataset — not a reconstruction after the fact — feeds the local file, the master file, and CbCR.',
    covered: true,
  },
]

export default function OperationalTPSection() {
  const [progress, setProgress] = useState(0)
  const done = progress >= stages.length

  return (
    <section id="otp" className="bg-transparent py-24 sm:py-32 relative overflow-hidden font-sans">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 140, repeat: Infinity, ease: 'linear' },
            scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-[75vw] h-[75vw] max-w-[750px] max-h-[750px] bg-[radial-gradient(circle,rgba(35,93,254,0.03)_0%,transparent_70%)] rounded-full"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex justify-center">
            <Eyebrow>Operational Transfer Pricing</Eyebrow>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg leading-tight mb-6"
          >
            Transfer pricing isn't a document. It's a process that runs all year.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-fg-muted leading-relaxed"
          >
            Operational Transfer Pricing (OTP) is the discipline of turning a policy into something that
            actually runs inside the business — priced consistently, monitored continuously, and
            defensible the moment it's tested. Check off each stage below and see how far Aksiom
            carries you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap mt-6 text-xs"
          >
            <span className="inline-flex items-center gap-2 text-fg-subtle">
              <span className="w-2 h-2 rounded-full border border-fg-disabled" />
              You do this
            </span>
            <span className="inline-flex items-center gap-2 text-fg-muted">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Together, we do this
            </span>
          </motion.div>
        </div>

        {/* Interactive checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl bg-white/[0.015] border border-white/[0.06] backdrop-blur-xl shadow-elevated p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-fg-disabled">
              {progress}/{stages.length} confirmed
            </span>
            {progress > 0 && (
              <button
                type="button"
                onClick={() => setProgress(0)}
                className="inline-flex items-center gap-1.5 text-xs text-fg-subtle hover:text-fg transition-colors"
              >
                <RotateCcw className="w-3 h-3" strokeWidth={1.75} />
                Start over
              </button>
            )}
          </div>

          <div className="h-1 rounded-full bg-divider-subtle overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-muted to-accent rounded-full"
              animate={{ width: `${(progress / stages.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="relative mt-6">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-white/10 via-accent-muted/25 to-accent-muted/20" />

            <div className="flex flex-col">
              {stages.map((stage, index) => {
                const Icon = stage.icon
                const isDone = index < progress
                const isCurrent = index === progress && !done
                const isLocked = index > progress || done

                return (
                  <div key={stage.step} className={`relative flex items-start gap-4 py-3 transition-opacity duration-300 ${isLocked ? 'opacity-40' : 'opacity-100'}`}>
                    <div className="relative z-10 shrink-0">
                      {isCurrent && (
                        <motion.span
                          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute inset-0 rounded-full bg-accent"
                        />
                      )}
                      <div
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                          isDone
                            ? 'bg-success-subtle border-success/60'
                            : isCurrent
                              ? 'bg-accent-subtle border-accent shadow-[0_0_15px_rgba(35,93,254,0.25)]'
                              : stage.covered
                                ? 'bg-canvas border-accent-muted/25'
                                : 'bg-canvas border-white/10'
                        }`}
                      >
                        {isDone ? (
                          <Check className="w-4 h-4 text-success" strokeWidth={2.25} />
                        ) : (
                          <Icon
                            className={`w-4 h-4 ${
                              isCurrent ? 'text-accent' : stage.covered ? 'text-accent/70' : 'text-fg-disabled'
                            }`}
                            strokeWidth={1.75}
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-1.5">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-mono text-[11px] text-fg-disabled">{stage.step}</span>
                        <h3
                          className={`text-sm md:text-base tracking-wide transition-colors duration-300 ${
                            isCurrent ? 'text-fg font-semibold' : isDone ? 'text-fg-muted font-light line-through decoration-fg-disabled/50' : 'text-fg-subtle font-light'
                          }`}
                        >
                          {stage.title}
                        </h3>
                        {stage.covered ? (
                          <span className="text-[9px] font-mono uppercase tracking-widest text-accent/70">together</span>
                        ) : (
                          <span className="text-[9px] font-mono uppercase tracking-widest text-fg-disabled">you</span>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {isCurrent && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-2 pr-2 text-sm text-fg-muted leading-relaxed font-light">{stage.description}</p>
                            <button
                              type="button"
                              onClick={() => setProgress((p) => Math.min(p + 1, stages.length))}
                              className="mt-3 mb-1 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-muted transition-colors group"
                            >
                              <span className="w-5 h-5 rounded-md border-2 border-accent flex items-center justify-center group-hover:bg-accent-subtle transition-colors">
                                <Check className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
                              </span>
                              Check it off — next stage
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Completion payoff */}
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-6 pt-6 border-t border-divider-subtle flex flex-col sm:flex-row sm:items-center gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-accent-subtle border-2 border-accent flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h3 className="text-fg text-base font-semibold mb-1">You've mapped the full cycle.</h3>
                  <p className="text-fg-muted text-sm leading-relaxed">
                    Two of those stages already run live at Aksiom. The rest run on the same dataset.
                  </p>
                </div>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-fg-on-accent text-sm font-medium hover:bg-accent-muted transition-colors shrink-0"
                >
                  See it on your own data
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 max-w-2xl mx-auto rounded-2xl border border-success/20 bg-gradient-to-br from-success-subtle/50 to-transparent p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <motion.span
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inline-flex h-full w-full rounded-full bg-success"
                />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success border border-canvas" />
              </span>
              <div className="w-11 h-11 rounded-full bg-canvas-raised border-2 border-success/50 flex items-center justify-center">
                <span className="text-[9px] font-mono uppercase tracking-widest text-success/80">live</span>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-fg text-lg font-semibold mb-2">The hard part is live.</h3>
              <p className="text-fg-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                Turning raw ERP journal entries into a classified, reconciled dataset — the foundation
                every later stage depends on — is live today. Monitoring, true-up and documentation
                aren't separate problems to solve from scratch; they're views onto the same structured,
                evidenced dataset.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
