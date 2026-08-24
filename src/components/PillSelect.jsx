export default function PillSelect({ fieldKey, label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-accent">{fieldKey}:</span>
        <span className="text-xs text-fg-disabled">// {label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(name, option)}
              className={`px-3.5 py-2 rounded-md text-sm font-mono border transition-colors ${
                isActive
                  ? 'bg-accent-subtle border-accent-muted text-accent'
                  : 'bg-canvas border-divider-subtle text-fg-muted hover:border-divider-strong hover:text-fg'
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
