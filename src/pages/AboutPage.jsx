import { motion } from 'motion/react'
import { Building2, Target, Compass } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'

function PlaceholderBlock({ children }) {
  return (
    <div className="rounded-xl border border-dashed border-divider-strong bg-surface/30 p-5 text-sm text-fg-subtle italic leading-relaxed">
      {children}
    </div>
  )
}

export default function AboutPage() {
  useDocumentTitle('About')
  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
            <Building2 className="w-3.5 h-3.5" />
            About Aksiom
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-6 leading-tight">
            Built for teams who classify transfer pricing at scale.
          </h1>
        </motion.div>

        <div className="space-y-12 mt-12">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
              <h2 className="text-fg text-sm font-semibold uppercase tracking-wider">Our Story</h2>
            </div>
            <PlaceholderBlock>
              [Placeholder — replace with 2–3 paragraphs on why Aksiom was founded, the problem you saw in
              transfer pricing teams, and how the product came to be. This is the section prospects and
              journalists read first.]
            </PlaceholderBlock>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
              <h2 className="text-fg text-sm font-semibold uppercase tracking-wider">Our Mission</h2>
            </div>
            <PlaceholderBlock>
              [Placeholder — one or two sentences stating what Aksiom exists to do, in your own words.]
            </PlaceholderBlock>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
              <h2 className="text-fg text-sm font-semibold uppercase tracking-wider">Company</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-fg-subtle mb-1">Founded</div>
                <div className="text-fg-muted text-sm">Summer 2026</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-fg-subtle mb-1">Headquarters</div>
                <div className="text-fg-muted text-sm">Copenhagen, Denmark</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
