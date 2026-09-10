import { motion } from 'motion/react'

const principles = [
  'Automation without losing judgement.',
  'Both sides should reconcile — or the difference should be explainable.',
  'Every TP cycle should make the next one easier.',
]

export default function OperatingPrinciplesStrip() {
  return (
    <section className="bg-transparent py-10 sm:py-14 font-sans">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-divider-subtle">
          {principles.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-fg-subtle text-sm text-center leading-relaxed py-4 sm:py-0 sm:px-6 first:pl-0 last:pr-0"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
