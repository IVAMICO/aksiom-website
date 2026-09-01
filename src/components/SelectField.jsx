export default function SelectField({ label, name, value, onChange, options, placeholder, required }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-fg flex items-center gap-1.5">
        {label}
        {required && <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0" aria-label="required" />}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg border border-divider-subtle bg-canvas/50 focus:border-accent px-3.5 py-2.5 text-sm text-fg focus:outline-none transition-colors"
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
