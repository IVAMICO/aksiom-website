import { motion } from 'motion/react'
import { Users, Mail } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const team = [
  { name: 'Vidak Rajovic', title: 'Co-Founder', email: 'vidak@aksiom.ai' },
  { name: 'Vuk Rajovic', title: 'Co-Founder', email: 'vuk@aksiom.ai' },
  { name: 'Milo Rajovic', title: 'Co-Founder', email: 'milo@aksiom.ai' },
]

function Avatar({ name }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div className="w-16 h-16 rounded-full bg-elevated border border-divider-subtle flex items-center justify-center text-fg-subtle font-semibold text-lg shrink-0">
      {initials}
    </div>
  )
}

export default function TeamPage() {
  useDocumentTitle('Team')
  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
            <Users className="w-3.5 h-3.5" />
            The Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-4 leading-tight">
            The people behind Aksiom
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed max-w-2xl mb-16">
            Founded by three brothers in Copenhagen, summer 2026. [Placeholder — a sentence or two on
            background / what unites the team. Photos still needed below — currently showing initials.]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
          {team.map((member, i) => (
            <motion.div
              key={member.email}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-start gap-4 rounded-2xl bg-surface/40 border border-dashed border-divider-strong p-6"
            >
              <Avatar name={member.name} />
              <div>
                <h3 className="text-fg text-base font-semibold">{member.name}</h3>
                <p className="text-fg-muted text-sm">{member.title}</p>
              </div>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-1.5 text-fg-subtle hover:text-accent text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{member.email}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
