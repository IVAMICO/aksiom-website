import { motion } from 'motion/react'
import { Building2, Target, Compass, Users, Mail } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'

const team = [
  { name: 'Vidak Rajovic', title: 'Co-Founder', email: 'vidak@aksiom.ai', photo: '/team/vidak.jpg' },
  { name: 'Vuk Rajovic', title: 'Co-Founder', email: 'vuk@aksiom.ai', photo: '/team/vuk.jpg' },
  { name: 'Milo Rajovic', title: 'Co-Founder', email: 'milo@aksiom.ai', photo: '/team/milo.jpg' },
]

function PlaceholderBlock({ children }) {
  return (
    <div className="rounded-xl border border-dashed border-divider-strong bg-surface/30 p-5 text-sm text-fg-subtle italic leading-relaxed">
      {children}
    </div>
  )
}

function Avatar({ name, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-full aspect-square rounded-2xl object-cover"
      />
    )
  }
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div className="w-full aspect-square rounded-2xl bg-elevated border border-divider-subtle flex items-center justify-center text-fg-subtle font-semibold text-2xl">
      {initials}
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

        <div id="team" className="border-t border-divider-subtle mt-20 pt-20 scroll-mt-24">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
              <Users className="w-3.5 h-3.5" />
              Meet the Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-6 leading-tight">
              The people behind Aksiom
            </h2>
            <p className="text-fg-muted text-sm leading-relaxed mb-10 max-w-xl">
              Founded by three brothers in Copenhagen, summer 2026. [Placeholder — a sentence or two on
              background / what unites the team.]
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col items-start gap-4 rounded-2xl bg-surface/40 border border-divider-subtle p-3 sm:p-4"
                >
                  <Avatar name={member.name} photo={member.photo} />
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
          </motion.section>
        </div>
      </div>
    </div>
  )
}
