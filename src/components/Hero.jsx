import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-transparent">

      {/* Ambient orbital background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center [perspective:2000px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-accent-subtle/40 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent-glow-strong blur-[100px] rounded-full mix-blend-screen" />

        <div className="absolute bottom-[-20%] left-[-50%] right-[-50%] h-[70vh] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(75deg)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_80%)] mix-blend-overlay opacity-80" />

        <motion.div
          animate={{ rotateZ: 360, rotateX: [65, 75, 65] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/[0.03] border-t-white/[0.1] shadow-[inset_0_0_50px_rgba(255,255,255,0.01)]"
          style={{ transformStyle: 'preserve-3d' }}
        />

        <motion.div
          animate={{ rotateZ: -360, rotateY: [50, 65, 50] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full border border-accent-muted/[0.15] border-b-accent/[0.2] shadow-[0_0_30px_rgba(91,161,240,0.02)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-accent-muted rounded-full blur-[2px] shadow-[0_0_20px_rgba(91,161,240,0.8)]" />
          <div className="absolute top-1/4 left-0 w-1 h-1 bg-accent-muted rounded-full shadow-[0_0_10px_rgba(91,161,240,0.6)]" />
        </motion.div>

        <motion.div
          animate={{ rotateZ: 360, rotateX: [55, 70, 55], rotateY: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full border border-accent/[0.1] border-l-accent/[0.4] shadow-[inset_0_0_40px_rgba(91,161,240,0.05)]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-accent rounded-full blur-[1px] shadow-[0_0_25px_rgba(91,161,240,1)]" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center mt-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] mb-8 shadow-[0_0_20px_rgba(255,255,255,0.01)] backdrop-blur-md"
        >
          <div className="flex items-center justify-center relative">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-accent blur-[4px] animate-pulse" />
          </div>
          <span className="text-[11px] font-medium tracking-[0.2em] text-fg-subtle uppercase">
            Transfer Pricing Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-fg leading-[1.05] mb-8"
        >
          Automate Inter-company <br className="hidden sm:block" />
          <motion.span
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent-muted via-accent to-accent-muted bg-[length:200%_auto]"
          >
            Transaction Intelligence
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl leading-relaxed text-fg-muted mb-12 font-light max-w-2xl mx-auto"
        >
          Aksiom automates intercompany transaction classification for transfer pricing — turning millions of ERP journal entries into an audit-ready dataset your team can trust.
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
            Request a Demo
          </Link>

          <a
            href="#platform"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-transparent border border-divider text-fg-muted font-medium tracking-wide hover:border-divider-strong hover:text-fg transition-colors"
          >
            See the Platform
          </a>
        </motion.div>

      </div>
    </section>
  )
}
