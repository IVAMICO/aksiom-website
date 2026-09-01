function generateSlots(startHour = 8, endHour = 17, stepMinutes = 15) {
  const slots = []
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  return slots
}

const SLOTS = generateSlots()

export default function TimeSlotPicker({ value, onChange }) {
  return (
    <div className="rounded-lg border border-divider-subtle bg-canvas/50 p-3 max-h-52 overflow-y-auto">
      <div className="grid grid-cols-4 gap-2">
        {SLOTS.map((slot) => {
          const isSelected = value === slot
          return (
            <button
              key={slot}
              type="button"
              onClick={() => onChange(slot)}
              className={`px-2 py-2 rounded-md text-sm text-center transition-colors ${
                isSelected
                  ? 'bg-accent text-fg-on-accent font-medium'
                  : 'bg-canvas border border-divider-subtle text-fg-muted hover:border-divider-strong hover:text-fg'
              }`}
            >
              {slot}
            </button>
          )
        })}
      </div>
    </div>
  )
}
