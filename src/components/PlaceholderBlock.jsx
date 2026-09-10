export default function PlaceholderBlock({ children }) {
  return (
    <div className="rounded-xl border border-dashed border-divider-strong bg-surface/30 p-5 text-sm text-fg-subtle italic leading-relaxed">
      {children}
    </div>
  )
}
