import { Link } from 'react-router-dom'
import { CompassIcon } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found')
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 font-sans">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent-muted/40 text-accent text-xs font-medium mb-6">
        <CompassIcon className="w-3.5 h-3.5" />
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">Page not found</h1>
      <p className="text-fg-muted mb-8 max-w-md">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-accent text-fg-on-accent font-medium hover:bg-accent-muted transition-colors"
      >
        Back to homepage
      </Link>
    </div>
  )
}
