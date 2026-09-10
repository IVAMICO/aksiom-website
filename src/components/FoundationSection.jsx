import { motion } from 'motion/react'
import { ShieldCheck, Scale, Repeat, FileCheck } from 'lucide-react'
import Eyebrow from './Eyebrow'

const outcomes = [
  { icon: ShieldCheck, title: 'Verified', description: 'Source issues flagged before classification' },
  { icon: Scale, title: 'Reconciled', description: 'Every side ties out' },
  { icon: Repeat, title: 'Consistent', description: 'Same rule, same result' },
  { icon: FileCheck, title: 'Evidenced', description: 'A trail behind every decision' },
]

export default function FoundationSection() {
  return (
    <section id="foundation" className="bg-transparent py-20 sm:py-24 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-subtle/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Eyebrow>The Foundation</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg leading-tight mb-5"
        >
          Every transaction accounted for. Every decision evidenced.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-fg-muted leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Aksiom checks the source data first, then classifies every transaction — rules and AI
          working together — into a clean, audit-ready dataset, automatically and the same way every
          time.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {outcomes.map((o, i) => {
            const Icon = o.icon
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center rounded-2xl bg-surface/40 border border-divider-subtle p-6 backdrop-blur-md shadow-card hover:border-accent-muted/50 hover:shadow-elevated transition-[border-color,box-shadow] duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-canvas-raised border-2 border-accent-muted/50 flex items-center justify-center shadow-card mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-fg text-sm font-semibold mb-1">{o.title}</h3>
                <p className="text-fg-subtle text-xs">{o.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
