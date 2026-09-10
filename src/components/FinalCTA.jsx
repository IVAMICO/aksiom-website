import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-transparent">
      <motion.div
        className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-glow-strong rounded-full blur-[110px] z-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent-glow-strong rounded-full blur-[110px] z-0 pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-6"
        >
          See Aksiom on your own data.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-fg-muted mb-10"
        >
          Bring one ERP scope — any system. We'll show you what Aksiom finds in it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/demo"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors"
          >
            See it on your own data
          </Link>
          <a
            href="mailto:info@aksiom.ai"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-transparent border border-divider text-fg-muted font-medium tracking-wide hover:border-divider-strong hover:text-fg transition-colors"
          >
            Talk to the team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
