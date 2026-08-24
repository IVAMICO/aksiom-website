import { useState } from 'react'
import { motion } from 'motion/react'
import { Loader2, AlertTriangle } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import PillSelect from '../components/PillSelect'
import TextField from '../components/TextField'

// Same-origin path — nginx proxies this to the self-hosted aksiom-demo-api service.
// In local dev, Vite's proxy config (vite.config.js) forwards it to localhost:8090.
const DEMO_API_ENDPOINT = '/api/demo-requests'

const TEAM_SIZE_OPTIONS = ['1–10', '11–50', '51–200', '200+']
const ERP_COUNT_OPTIONS = ['1', '2–5', '6+']
const ENTITY_COUNT_OPTIONS = ['Under 10', '10–50', '50–200', '200+']

const comments = [
  '30-minute walkthrough on your own ERP data',
  'see the classification funnel and AI audit live',
  'no commitment — just a conversation',
]

const previewFields = [
  ['name', 'name'],
  ['email', 'email'],
  ['company', 'company'],
  ['team_size', 'teamSize'],
  ['erp_systems', 'erpCount'],
  ['entities', 'entityCount'],
]

function JsonPreview({ form }) {
  return (
    <div className="rounded-lg bg-canvas border border-divider-subtle p-4 font-mono text-xs leading-relaxed overflow-x-auto">
      <div className="text-fg-subtle">{'{'}</div>
      {previewFields.map(([key, formKey], i) => (
        <div key={key} className="pl-4 whitespace-nowrap">
          <span className="text-accent-muted">"{key}"</span>
          <span className="text-fg-subtle">: </span>
          <span className={form[formKey] ? 'text-fg' : 'text-fg-disabled'}>"{form[formKey]}"</span>
          {i < previewFields.length - 1 && <span className="text-fg-subtle">,</span>}
        </div>
      ))}
      <div className="text-fg-subtle">{'}'}</div>
    </div>
  )
}

export default function DemoPage() {
  useDocumentTitle('Request a Demo')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    erpCount: '',
    entityCount: '',
    message: '',
    website: '', // honeypot — stays empty for real users, left as-is if a bot fills it
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handlePillChange(name, value) {
    setForm((prev) => ({ ...prev, [name]: prev[name] === value ? '' : value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(DEMO_API_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans min-h-[70vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full rounded-xl bg-surface/40 border border-divider-subtle overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-divider-subtle bg-canvas-raised/60">
            <span className="w-2.5 h-2.5 rounded-full bg-danger/50" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/50" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/50" aria-hidden="true" />
            <span className="ml-2 text-xs font-mono text-fg-subtle">response</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="text-success mb-3">200 OK</div>
            <div className="text-fg-muted leading-relaxed">
              <span className="text-accent-muted">"status"</span>: <span className="text-fg">"received"</span>
              <br />
              <span className="text-accent-muted">"message"</span>:{' '}
              <span className="text-fg">
                "Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we'll reach out to
                {form.email ? ` ${form.email}` : ' you'} shortly."
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 font-sans">
      <div className="max-w-xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="font-mono text-xs text-fg-subtle mb-4">~/aksiom/demo-request</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-4 leading-tight">
            See it on your own data
          </h1>
          <p className="text-lg text-fg-muted leading-relaxed">
            Tell us a bit about your setup and we'll set up time to walk through it together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-xl bg-surface/40 border border-divider-subtle overflow-hidden shadow-elevated"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-divider-subtle bg-canvas-raised/60">
            <span className="w-2.5 h-2.5 rounded-full bg-danger/50" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/50" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/50" aria-hidden="true" />
            <span className="ml-2 px-2.5 py-0.5 rounded bg-elevated text-xs font-mono text-fg-muted">demo_request.json</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-6">
            {/* Honeypot — hidden from real users, left off-screen rather than display:none
                since some bots skip fields that are display:none but still fill this one. */}
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

            <div className="font-mono text-xs text-fg-disabled leading-relaxed">
              {comments.map((line) => (
                <div key={line}>// {line}</div>
              ))}
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

            <TextField fieldKey="name" label="your full name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
            <TextField fieldKey="email" label="work email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
            <TextField fieldKey="company" label="company name" name="company" required value={form.company} onChange={handleChange} placeholder="Acme Corp" />

            <PillSelect fieldKey="team_size" label="how many people on your team?" name="teamSize" options={TEAM_SIZE_OPTIONS} value={form.teamSize} onChange={handlePillChange} />
            <PillSelect fieldKey="erp_systems" label="how many ERP systems do you run?" name="erpCount" options={ERP_COUNT_OPTIONS} value={form.erpCount} onChange={handlePillChange} />
            <PillSelect fieldKey="entities" label="how many legal entities?" name="entityCount" options={ENTITY_COUNT_OPTIONS} value={form.entityCount} onChange={handlePillChange} />

            <TextField
              fieldKey="message"
              label="anything specific to cover? (optional)"
              name="message"
              textarea
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="we consolidate data from multiple systems"
            />

            <div className="pt-2">
              <div className="mb-3">
                <JsonPreview form={form} />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 rounded-lg bg-accent text-fg-on-accent font-medium hover:bg-accent-muted transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'submitting' ? 'Sending…' : 'Request a Demo'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
