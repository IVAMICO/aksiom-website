import { motion } from 'motion/react'
import { AlertTriangle, Server, Lock, KeyRound, Sparkles, FileCheck, Trash2, Mail } from 'lucide-react'
import { useSEO } from '../lib/useSEO'
import PlaceholderBlock from '../components/PlaceholderBlock'
import Eyebrow from '../components/Eyebrow'

const sections = [
  {
    icon: Server,
    title: 'Hosting & infrastructure',
    body: '[Placeholder — pending internal alignment. State hosting provider, region(s), and whether customer data is region-pinned.]',
  },
  {
    icon: Lock,
    title: 'Data handling & isolation',
    body: '[Placeholder — pending internal alignment. State how each customer’s data is isolated and encrypted, in transit and at rest.]',
  },
  {
    icon: KeyRound,
    title: 'Access control',
    body: '[Placeholder — pending internal alignment. State who inside Aksiom can access customer data, and under what conditions.]',
  },
  {
    icon: Sparkles,
    title: 'AI & model usage',
    body: '[Placeholder — pending internal alignment. State plainly whether customer data is used to train models shared across customers.]',
  },
  {
    icon: FileCheck,
    title: 'Compliance & certifications',
    body: '[Placeholder — pending internal alignment. Only list a certification (e.g. SOC 2, ISO 27001) once it is actually held, with evidence available on request.]',
  },
  {
    icon: Trash2,
    title: 'Data retention & deletion',
    body: '[Placeholder — pending internal alignment. State how long data is retained after a pilot or contract ends, and how deletion is confirmed.]',
  },
]

export default function SecurityPage() {
  useSEO({
    title: 'Security',
    description:
      'How Aksiom secures your transfer pricing and ERP transaction data — encryption, access controls, and data handling practices.',
    path: '/security',
  })

  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>Security &amp; Data Handling</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-6 leading-tight">
            How we handle your data
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed max-w-2xl mb-10">
            Transfer pricing data is sensitive, and we know enterprise buyers will ask specific questions
            before a pilot goes ahead. This page will carry our verified answers — for now, contact us
            directly and we'll walk through our current setup.
          </p>

          <div className="flex items-start gap-3 rounded-lg border border-warning-muted bg-warning-subtle px-4 py-3 mb-12">
            <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" strokeWidth={1.75} />
            <p className="text-sm text-fg">
              <strong className="font-semibold">CONTENT PENDING SECURITY REVIEW.</strong> The sections below
              are placeholders. Each must be filled in and approved internally with facts true today —
              never a roadmap claim — before this page is treated as final.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          {sections.map((section, i) => {
            const Icon = section.icon
            return (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                  <h2 className="text-fg text-sm font-semibold uppercase tracking-wider">{section.title}</h2>
                </div>
                <PlaceholderBlock>{section.body}</PlaceholderBlock>
              </motion.section>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-divider-subtle flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-fg-muted text-sm max-w-sm">
            Have a specific security question ahead of a pilot? Ask us directly.
          </p>
          <a
            href="mailto:info@aksiom.ai?subject=Security%20question"
            className="px-6 py-3 rounded-lg flex items-center gap-2 bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors shrink-0"
          >
            <Mail className="w-4 h-4" />
            Ask about security
          </a>
        </motion.div>
      </div>
    </div>
  )
}
