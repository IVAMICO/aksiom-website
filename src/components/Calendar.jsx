import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

// All date math here stays in local calendar terms (no UTC conversion) —
// we only care "which day did they click," not a precise instant.
function toKey(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function parseKey(key) {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function startOfDay(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

function isWeekend(date) {
  const day = date.getDay()
  return day === 0 || day === 6
}

// Team is traveling for TP Minds Asia 2026 and can't take calls until
// they're back — self-obsoletes once this date passes, safe to delete after.
const FIRST_AVAILABLE_DATE = new Date(2026, 9, 10)

export default function Calendar({ value, onChange }) {
  const today = startOfDay(new Date())
  const firstAvailable = today < FIRST_AVAILABLE_DATE ? FIRST_AVAILABLE_DATE : today
  const [viewMonth, setViewMonth] = useState(() => {
    const base = value ? parseKey(value) : today
    return new Date(base.getFullYear(), base.getMonth(), 1)
  })

  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7 // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

  const monthLabel = viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const todayKey = toKey(today)

  return (
    <div className="rounded-lg border border-divider-subtle bg-canvas/50 p-4">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month - 1, 1))}
          className="p-1.5 rounded hover:bg-elevated text-fg-muted hover:text-fg transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium text-fg">{monthLabel}</span>
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month + 1, 1))}
          className="p-1.5 rounded hover:bg-elevated text-fg-muted hover:text-fg transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-fg-disabled mb-1.5">
        {WEEKDAYS.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={`blank-${i}`} />
          const key = toKey(date)
          const disabled = startOfDay(date) < firstAvailable || isWeekend(date)
          const isSelected = value === key
          const isToday = key === todayKey
          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onChange(key)}
              className={`aspect-square rounded-md text-sm transition-colors ${
                isSelected
                  ? 'bg-accent text-fg-on-accent font-medium'
                  : disabled
                    ? 'text-fg-disabled cursor-not-allowed'
                    : isToday
                      ? 'border border-accent-muted text-fg hover:bg-elevated'
                      : 'text-fg-muted hover:bg-elevated hover:text-fg'
              }`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
      {today < FIRST_AVAILABLE_DATE && (
        <p className="mt-3 text-xs text-fg-disabled">
          Our team is traveling for a conference and back to take calls from{' '}
          {FIRST_AVAILABLE_DATE.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.
        </p>
      )}
    </div>
  )
}
