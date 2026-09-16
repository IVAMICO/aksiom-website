import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import HeroMeshBackground from './HeroMeshBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-transparent">

      {/* Ambient background — a scattered mesh of the logo's triangle-node motif,
          per Visual Identity 1.0's dark-mode background treatment. Slow drift/breathe
          keeps the hero from feeling static before the copy even loads. */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
        animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HeroMeshBackground />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center mt-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-[3px] h-4 rounded-sm bg-accent shrink-0" />
          <span className="text-[11px] font-medium tracking-[0.22em] text-fg-subtle uppercase">
            Operational Transfer Pricing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-fg leading-[1.1] mb-8"
        >
          Turn ERP journal entries into <br className="hidden sm:block" />
          <motion.span
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent-muted via-accent to-accent-muted bg-[length:200%_auto]"
          >
            transfer pricing data you can defend
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl leading-relaxed text-fg-muted mb-6 font-light max-w-2xl mx-auto"
        >
          Aksiom starts at journal-entry level to identify the intercompany transaction population, separate accounting mechanics and classify what remains — with every decision traceable back to source.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-mono uppercase tracking-widest text-fg-disabled mb-12"
        >
          Gold Partner — TP Minds Asia 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/demo"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors"
          >
            See it on your own data
          </Link>

          <a
            href="#otp"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-transparent border border-divider text-fg-muted font-medium tracking-wide hover:border-divider-strong hover:text-fg transition-colors"
          >
            How it works
          </a>
        </motion.div>

      </div>
    </section>
  )
}
