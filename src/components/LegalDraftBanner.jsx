import { AlertTriangle } from 'lucide-react'

export default function LegalDraftBanner() {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-warning-muted bg-warning-subtle px-4 py-3 mb-10">
      <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" strokeWidth={1.75} />
      <p className="text-sm text-fg">
        <strong className="font-semibold">DRAFT — NEEDS LEGAL REVIEW.</strong> This is a standard starting
        template, not legal advice. Have a lawyer review and approve it before removing this banner or
        relying on it publicly.
      </p>
    </div>
  )
}
