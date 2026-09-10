import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  FileText,
  Database,
  Waypoints,
  ShieldCheck,
  Lock,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import Eyebrow from '../components/Eyebrow'
import HeroMeshBackground from '../components/HeroMeshBackground'
import TextField from '../components/TextField'

// Same-origin path — nginx proxies this to the self-hosted aksiom-demo-api service.
// In local dev, Vite's proxy config (vite.config.js) forwards it to localhost:8090.
const DEMO_API_ENDPOINT = '/api/demo-requests'

const trustPoints = [
  { icon: FileText, label: 'NDA first' },
  { icon: Database, label: 'One-time ERP extract' },
  { icon: ShieldCheck, label: 'No production integration to start' },
]

const outcomes = [
  {
    step: '01',
    icon: Database,
    title: 'The population',
    question: 'Are you starting with the right transactions?',
    description: 'Separate relevant intercompany activity from settlement, clearing, netting and other accounting mechanics.',
  },
  {
    step: '02',
    icon: Waypoints,
    title: 'The decisions',
    question: 'What can be resolved consistently?',
    description: 'See what rules, precedent and bounded AI can resolve — and what still requires judgement.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'The delta',
    question: 'Where does Aksiom differ from your current treatment?',
    description: 'Compare the result with your existing classification and review the evidence behind each difference.',
  },
]

const process = [
  { n: 1, title: 'Scope', description: 'Agree one representative scope.' },
  { n: 2, title: 'Data', description: 'NDA, then a one-time extract and existing classification where available.' },
  { n: 3, title: 'Results', description: 'Review the population, classifications, exceptions and delta together.' },
]

const needList = ['One ERP scope', 'Existing treatment where available', 'One TP/finance contact']
const getList = ['Transaction population', 'Classification', 'Exceptions', 'Delta']

function PilotModal({ open, onClose }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    primaryErp: '',
    entities: '',
    notes: '',
    website: '', // honeypot
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const message = [
      '[Pilot request]',
      form.primaryErp && `Primary ERP: ${form.primaryErp}`,
      form.entities && `Approx. legal entities: ${form.entities}`,
      form.notes,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      const res = await fetch(DEMO_API_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message,
          website: form.website,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-canvas/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Start a pilot"
            className="relative z-10 w-full max-w-md rounded-2xl bg-surface border border-divider-subtle shadow-elevated overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-fg-subtle hover:text-fg hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {status === 'success' ? (
              <div className="p-8 sm:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-success-subtle border border-success-muted/40 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-success" strokeWidth={1.75} />
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-fg mb-3">Request received</h2>
                <p className="text-fg-muted text-sm leading-relaxed">
                  Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we'll be in touch shortly to
                  agree scope.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-5">
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                />

                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-fg mb-1">Start a pilot</h2>
                  <p className="text-fg-muted text-sm">We'll follow up to agree scope, NDA and timeline.</p>
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-lg border border-danger-muted bg-danger-subtle px-4 py-3">
                    <AlertTriangle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
                    <p className="text-sm text-fg">
                      Something went wrong sending this. Please try again, or email{' '}
                      <a href="mailto:info@aksiom.ai" className="text-accent hover:underline">info@aksiom.ai</a> directly.
                    </p>
                  </div>
                )}

                <TextField label="Full name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
                <TextField label="Work email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                <TextField label="Company" name="company" required value={form.company} onChange={handleChange} placeholder="Acme Corp" />
                <TextField label="Primary ERP system" name="primaryErp" value={form.primaryErp} onChange={handleChange} placeholder="e.g. SAP, Oracle, Dynamics" />
                <TextField label="Approx. legal entities (optional)" name="entities" value={form.entities} onChange={handleChange} placeholder="e.g. 25" />
                <TextField
                  label="Anything useful to know? (optional)"
                  name="notes"
                  textarea
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Anything about your setup we should know before the first call"
                />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-6 py-3 rounded-lg bg-accent text-fg-on-accent font-medium hover:bg-accent-muted transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-1"
                >
                  {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'submitting' ? 'Sending…' : 'Start a pilot'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function GlowOrb({ className, animate: anim, transition }) {
  return <motion.div className={className} animate={anim} transition={transition} />
}

export default function PilotPage() {
  useDocumentTitle('Pilot')
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <HeroMeshBackground />
        </div>
        <GlowOrb
          className="absolute -top-1/4 right-0 w-[550px] h-[550px] bg-accent-glow-strong rounded-full blur-[120px] pointer-events-none"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>TP Minds Asia 2026 · Pilot</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-fg mb-6 leading-[1.1]">
              See Aksiom on{' '}
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent-muted via-accent to-accent-muted bg-[length:200%_auto]"
              >
                your own data.
              </motion.span>
            </h1>
            <p className="text-lg text-fg-muted leading-relaxed max-w-xl mb-9">
              Start with a focused scope from your ERP. We'll run Aksiom on your accounting data and
              compare the result with your current process.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              {trustPoints.map((t) => {
                const Icon = t.icon
                return (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full bg-surface/50 border border-divider-subtle px-3.5 py-2 text-xs sm:text-sm text-fg-muted backdrop-blur-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.75} />
                    {t.label}
                  </span>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group px-7 py-3 rounded-lg inline-flex items-center gap-2 bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors shadow-[0_0_0_0_rgba(35,93,254,0)] hover:shadow-[0_0_24px_2px_rgba(35,93,254,0.35)]"
            >
              Start a pilot
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Population / Decisions / Delta */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent-subtle/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Eyebrow>The pilot proves three things</Eyebrow>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg leading-tight"
            >
              Test Aksiom against the way you work today.
            </motion.h2>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-0 right-0 top-7 h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-divider-subtle to-transparent" />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_14px_rgba(35,93,254,0.9)]"
                animate={{ left: ['0%', '97%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-5">
              {outcomes.map((o, i) => {
                const Icon = o.icon
                return (
                  <motion.div
                    key={o.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative flex flex-col rounded-2xl bg-surface/40 border border-divider-subtle p-6 backdrop-blur-md shadow-card hover:border-accent-muted/50 hover:shadow-elevated transition-[border-color,box-shadow] duration-300"
                  >
                    <div className="relative z-10 w-14 h-14 rounded-full bg-canvas-raised border-2 border-accent-muted/50 flex items-center justify-center shrink-0 shadow-card mb-5">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="font-mono text-xs text-accent">{o.step}</span>
                      <h3 className="text-fg text-base font-semibold">{o.title}</h3>
                    </div>
                    <p className="text-fg text-sm font-medium mb-2.5">{o.question}</p>
                    <p className="text-fg-muted text-sm leading-relaxed">{o.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scope -> Data -> Results */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow-strong rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg text-center mb-16"
          >
            From your data to results.
          </motion.h2>

          <div className="relative mb-10">
            <div className="hidden sm:block absolute left-[8.3%] right-[8.3%] top-[22px] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-divider-subtle to-transparent" />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(35,93,254,0.9)]"
                animate={{ left: ['0%', '97%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative z-10 flex items-start gap-4 sm:flex-col sm:items-center sm:text-center"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center bg-canvas-raised border-2 border-accent-muted/60 text-accent font-mono font-semibold text-sm shrink-0 shadow-card">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="text-fg text-base font-semibold mb-1">{p.title}</h3>
                    <p className="text-fg-muted text-sm leading-relaxed max-w-[220px] sm:mx-auto">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 rounded-full border border-divider-subtle bg-surface/40 px-5 py-3 max-w-md mx-auto backdrop-blur-sm"
          >
            <Clock className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />
            <span className="text-fg-muted text-sm">Target: first result within two weeks of usable data.</span>
          </motion.div>
        </div>
      </section>

      {/* What we need / What you get + security strip */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-subtle/30 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-surface/40 border border-divider-subtle p-6 backdrop-blur-md shadow-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                <h3 className="text-fg text-sm font-semibold uppercase tracking-wider">What we need</h3>
              </div>
              <ul className="space-y-2.5">
                {needList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span className="text-fg-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl bg-surface/40 border border-divider-subtle p-6 backdrop-blur-md shadow-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-fg-muted" strokeWidth={1.75} />
                <h3 className="text-fg text-sm font-semibold uppercase tracking-wider">What you get</h3>
              </div>
              <ul className="space-y-2.5">
                {getList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span className="text-fg-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-divider-subtle bg-surface/30 px-5 py-4 backdrop-blur-sm"
          >
            <span className="flex items-center gap-3 text-fg-muted text-sm">
              <span className="w-8 h-8 rounded-lg bg-canvas-raised border border-divider-subtle flex items-center justify-center shrink-0">
                <Lock className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
              </span>
              NDA before data transfer. Data handling and access agreed upfront.
            </span>
            <Link
              to="/security"
              className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-muted transition-colors shrink-0"
            >
              Security &amp; data handling
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
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
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4"
          >
            Run Aksiom on your own data.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-lg text-fg-muted mb-9"
          >
            One ERP scope. Your process. Our result.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            type="button"
            onClick={() => setModalOpen(true)}
            className="group px-7 py-3 rounded-lg inline-flex items-center gap-2 bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors shadow-[0_0_0_0_rgba(35,93,254,0)] hover:shadow-[0_0_24px_2px_rgba(35,93,254,0.35)]"
          >
            Start a pilot
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </section>

      <PilotModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
