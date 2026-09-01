export default function TextField({ label, name, type = 'text', value, onChange, placeholder, required, textarea, rows }) {
  const Component = textarea ? 'textarea' : 'input'
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-fg flex items-center gap-1.5">
        {label}
        {required && <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0" aria-label="required" />}
      </span>
      <Component
        required={required}
        type={textarea ? undefined : type}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`rounded-lg border border-divider-subtle bg-canvas/50 focus:border-accent px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-disabled focus:outline-none transition-colors ${textarea ? 'resize-none' : ''}`}
      />
    </label>
  )
}
