import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Database, Network, AlertCircle } from 'lucide-react'

const DOTS_COUNT = 48
const generateDots = () => {
  return Array.from({ length: DOTS_COUNT }).map((_, i) => {
    const p0x = 10 + Math.random() * 80
    const p0y = 10 + Math.random() * 80

    const col = i % 4
    const rowInCol = Math.floor(i / 4)
    const p1x = 25 + col * 16.66
    const p1y = 15 + rowInCol * (70 / (DOTS_COUNT / 4))

    const gridCol = i % 8
    const gridRow = Math.floor(i / 8)
    const p2x = 15 + gridCol * 10
    const p2y = 20 + gridRow * 12
    const isAnomaly = i === 12 || i === 27 || i === 41

    return {
      id: i,
      p0: { x: p0x, y: p0y },
      p1: { x: p1x, y: p1y },
      p2: { x: p2x, y: p2y },
      isAnomaly,
    }
  })
}

const stages = [
  {
    id: 'extraction',
    title: 'Millions of ERP Line Items',
    description: 'Every entity pair posts thousands of journal entries a year. Before you can price a single intercompany transaction, you first have to know it exists — and where.',
    icon: Database,
  },
  {
    id: 'taxonomy',
    title: 'Ambiguous Transaction Types',
    description: "Most entity pairs allow more than one transfer pricing category. Deciding which one applies to a given line item takes context a spreadsheet formula can't hold.",
    icon: Network,
  },
  {
    id: 'reconciliation',
    title: 'Unauditable Manual Review',
    description: "Analysts reconciling this by hand can't show their work at scale — no consistent evidence trail, no way to prove the same rule was applied the same way twice.",
    icon: AlertCircle,
  },
]

export default function ProblemSection() {
  const [activeStage, setActiveStage] = useState(0)
  const dots = useMemo(() => generateDots(), [])

  return (
    <section className="bg-transparent py-24 sm:py-32 relative overflow-hidden font-sans min-h-screen flex items-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(91,161,240,0.03)_0%,transparent_70%)] rounded-full"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-accent-muted/30" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-accent uppercase">
              The Transfer Pricing Challenge
            </span>
            <div className="w-12 h-[1px] bg-accent-muted/30" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-fg tracking-wide max-w-2xl leading-tight">
            Analysis starts <span className="text-fg-subtle">long before</span> the analysis itself.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[1px] bg-white/5 z-0 hidden lg:block" />

            {stages.map((stage, index) => {
              const isActive = activeStage === index
              const Icon = stage.icon

              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className="relative z-10 flex items-start gap-6 cursor-pointer group"
                >
                  <div className="relative shrink-0 mt-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-700 ${
                        isActive ? 'bg-accent-subtle border-accent-muted/60 shadow-[0_0_15px_rgba(91,161,240,0.2)]' : 'bg-canvas border-white/10'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-700 ${isActive ? 'bg-accent' : 'bg-fg-disabled'}`} />
                    </div>
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-4 h-4 transition-colors duration-700 ${isActive ? 'text-accent' : 'text-fg-disabled'}`} />
                      <h3
                        className={`text-base md:text-lg tracking-wide transition-colors duration-700 ${
                          isActive ? 'text-fg font-medium' : 'text-fg-subtle font-light'
                        }`}
                      >
                        {stage.title}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-2 text-sm text-fg-muted leading-relaxed font-light">{stage.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lg:col-span-7 h-[350px] md:h-[450px] relative rounded-2xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl overflow-hidden shadow-elevated">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle/40 to-transparent" />

            <AnimatePresence>
              {activeStage === 2 && (
                <motion.div
                  initial={{ top: '0%', opacity: 0 }}
                  animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-[1px] bg-danger/50 shadow-[0_0_20px_rgba(232,120,120,0.5)] z-20"
                />
              )}
            </AnimatePresence>

            <div className="absolute inset-0 p-8">
              {dots.map((dot) => {
                const targetPos = activeStage === 0 ? dot.p0 : activeStage === 1 ? dot.p1 : dot.p2

                const isAnomalyActive = activeStage === 2 && dot.isAnomaly
                const color = isAnomalyActive ? '#E87878' : activeStage === 1 || activeStage === 2 ? '#5BA1F0' : '#5A6170'
                const shadow = isAnomalyActive ? '0 0 10px rgba(232,120,120,0.6)' : activeStage > 0 ? '0 0 8px rgba(91,161,240,0.4)' : 'none'

                return (
                  <motion.div
                    key={dot.id}
                    initial={false}
                    animate={{ left: `${targetPos.x}%`, top: `${targetPos.y}%` }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: dot.id * 0.005 }}
                    className="absolute"
                  >
                    <motion.div
                      animate={{ backgroundColor: color, boxShadow: shadow, scale: isAnomalyActive ? [1, 1.5, 1] : 1 }}
                      transition={{ scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }, backgroundColor: { duration: 0.8 } }}
                      className="w-1.5 h-1.5 rounded-full"
                    />

                    <AnimatePresence>
                      {activeStage === 1 && dot.id % 4 !== 3 && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + dot.id * 0.01 }}
                          className="absolute top-[3px] left-[3px] h-[1px] w-[16.66vw] max-w-[80px] bg-accent-muted/20 origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <motion.div
                key={`metric-${activeStage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-mono text-[10px] tracking-widest uppercase text-fg-subtle"
              >
                {activeStage === 0 && 'SYSTEM: MULTI_NODE_SCATTER'}
                {activeStage === 1 && 'SYSTEM: TAXONOMY_ALIGNED'}
                {activeStage === 2 && <span className="text-danger">ERR_DETECTED: MISMATCH_ROW_42</span>}
              </motion.div>

              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-1 w-4 rounded-full transition-colors duration-500 ${activeStage >= i ? 'bg-accent' : 'bg-divider-strong'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
