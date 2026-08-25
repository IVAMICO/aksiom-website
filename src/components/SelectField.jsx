export default function SelectField({ fieldKey, label, name, value, onChange, options, placeholder }) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-accent">{fieldKey}:</span>
        <span className="text-xs text-fg-disabled">// {label}</span>
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent border-b border-divider-subtle focus:border-accent px-0 py-2 text-sm font-mono text-fg focus:outline-none transition-colors"
      >
        <option value="" disabled className="bg-canvas text-fg-disabled">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-canvas text-fg">
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
