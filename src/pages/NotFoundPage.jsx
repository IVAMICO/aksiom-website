import { Link } from 'react-router-dom'
import { useSEO } from '../lib/useSEO'
import Eyebrow from '../components/Eyebrow'

export default function NotFoundPage() {
  useSEO({ title: 'Page Not Found', noindex: true })
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 font-sans">
      <Eyebrow>404</Eyebrow>
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
