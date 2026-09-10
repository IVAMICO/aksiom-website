export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 mb-6 ${className}`}>
      <span className="w-[3px] h-4 rounded-sm bg-accent shrink-0" />
      <span className="text-xs font-medium tracking-[0.22em] text-fg-subtle uppercase">{children}</span>
    </div>
  )
}
