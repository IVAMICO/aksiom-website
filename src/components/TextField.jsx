export default function TextField({ fieldKey, label, name, type = 'text', value, onChange, placeholder, required, textarea, rows }) {
  const Component = textarea ? 'textarea' : 'input'
  return (
    <label className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-accent">{fieldKey}:</span>
        <span className="text-xs text-fg-disabled">// {label}</span>
      </div>
      <Component
        required={required}
        type={textarea ? undefined : type}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`bg-transparent border-b border-divider-subtle focus:border-accent px-0 py-2 text-sm font-mono text-fg placeholder:text-fg-disabled focus:outline-none transition-colors ${textarea ? 'resize-none' : ''}`}
      />
    </label>
  )
}
