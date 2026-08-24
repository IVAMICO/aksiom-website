import { motion } from 'motion/react'
import { Scale } from 'lucide-react'
import LegalDraftBanner from './LegalDraftBanner'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function LegalPageLayout({ title, lastUpdated, children }) {
  useDocumentTitle(title)
  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
            <Scale className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-2 leading-tight">{title}</h1>
          <p className="text-fg-subtle text-sm mb-10">Last updated: {lastUpdated}</p>

          <LegalDraftBanner />

          <div
            className="space-y-5 text-fg-muted text-sm leading-relaxed
              [&_h2]:text-fg [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:pt-4
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5
              [&_a]:text-accent [&_a]:hover:underline
              [&_strong]:text-fg [&_strong]:font-medium"
          >
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
