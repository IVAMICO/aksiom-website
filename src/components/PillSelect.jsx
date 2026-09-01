export default function PillSelect({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-fg">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(name, option)}
              className={`px-3.5 py-2 rounded-lg text-sm border transition-colors ${
                isActive
                  ? 'bg-accent-subtle border-accent-muted text-accent'
                  : 'bg-canvas/50 border-divider-subtle text-fg-muted hover:border-divider-strong hover:text-fg'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
