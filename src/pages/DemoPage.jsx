import { useState } from 'react'
import { motion } from 'motion/react'
import { Loader2, AlertTriangle, Video, CheckCircle2, CheckCircle } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import PillSelect from '../components/PillSelect'
import TextField from '../components/TextField'
import SelectField from '../components/SelectField'
import Calendar from '../components/Calendar'
import TimeSlotPicker from '../components/TimeSlotPicker'
import { COUNTRIES } from '../lib/countries'

// Same-origin path — nginx proxies this to the self-hosted aksiom-demo-api service.
// In local dev, Vite's proxy config (vite.config.js) forwards it to localhost:8090.
const DEMO_API_ENDPOINT = '/api/demo-requests'

const ERP_COUNT_OPTIONS = ['1', '2–5', '6+']
const ENTITY_COUNT_OPTIONS = ['Under 10', '10–50', '50–200', '200+']

const highlights = [
  '30-minute walkthrough on your own ERP data',
  'See the classification funnel and AI audit live',
  'No commitment — just a conversation',
]

function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  } catch {
    return '' // Intl not available — timezone just stays blank, no big deal
  }
}

export default function DemoPage() {
  useDocumentTitle('Request a Demo')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    timezone: detectTimezone(),
    erpCount: '',
    entityCount: '',
    preferredDate: '',
    preferredTime: '',
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
          className="max-w-md w-full rounded-2xl bg-surface/40 border border-divider-subtle p-8 sm:p-10 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-success-subtle border border-success-muted/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-6 h-6 text-success" strokeWidth={1.75} />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-fg mb-3">Request received</h1>
          <p className="text-fg-muted text-sm leading-relaxed">
            Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we'll reach out to
            {form.email ? ` ${form.email}` : ' you'}
            {form.preferredDate ? ` around ${form.preferredDate}${form.preferredTime ? ` at ${form.preferredTime}` : ''}` : ' shortly'}
            {form.timezone ? ` (${form.timezone})` : ''}.
          </p>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
            <Video className="w-3.5 h-3.5" />
            Request a Demo
          </div>
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
          className="rounded-2xl bg-surface/40 border border-divider-subtle overflow-hidden shadow-elevated"
        >
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

            <ul className="space-y-2">
              {highlights.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-fg-muted text-sm leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>

            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-lg border border-danger-muted bg-danger-subtle px-4 py-3">
                <AlertTriangle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
                <p className="text-sm text-fg">
                  Something went wrong sending this. Please try again, or email{' '}
                  <a href="mailto:info@aksiom.ai" className="text-accent hover:underline">info@aksiom.ai</a> directly.
                </p>
              </div>
            )}

            <TextField label="Your full name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
            <TextField label="Work email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
            <TextField label="Company name" name="company" required value={form.company} onChange={handleChange} placeholder="Acme Corp" />

            <div className="flex flex-col gap-1.5">
              <SelectField
                label="Where are you based? (so we know the time difference)"
                name="country"
                value={form.country}
                onChange={handleChange}
                options={COUNTRIES}
                placeholder="Select a country"
              />
              {form.timezone && (
                <span className="text-xs text-fg-disabled">
                  Detected timezone: {form.timezone}
                </span>
              )}
            </div>

            <PillSelect label="How many ERP systems do you run?" name="erpCount" options={ERP_COUNT_OPTIONS} value={form.erpCount} onChange={handlePillChange} />
            <PillSelect label="How many legal entities?" name="entityCount" options={ENTITY_COUNT_OPTIONS} value={form.entityCount} onChange={handlePillChange} />

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-fg">Best day &amp; time to call? (optional)</span>
              <Calendar
                value={form.preferredDate}
                onChange={(date) => setForm((prev) => ({ ...prev, preferredDate: date }))}
              />
              {form.preferredDate && (
                <TimeSlotPicker
                  value={form.preferredTime}
                  onChange={(time) => setForm((prev) => ({ ...prev, preferredTime: time }))}
                />
              )}
              {form.preferredDate && (
                <span className="text-xs text-fg-disabled">
                  Selected:{' '}
                  {new Date(`${form.preferredDate}T00:00:00`).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {form.preferredTime ? ` at ${form.preferredTime}` : ' — pick a time above'}
                </span>
              )}
            </div>

            <TextField
              label="Anything specific to cover? (optional)"
              name="message"
              textarea
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="We consolidate data from multiple systems"
            />

            <div className="pt-2">
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
