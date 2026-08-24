import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-accent-glow blur-[100px] z-0 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-fg mb-6">
          See it on your own data
        </h2>
        <p className="text-lg text-fg-muted mb-10">Book a walkthrough and we'll show you what Aksiom finds in your entities.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/demo"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-accent text-fg-on-accent font-medium tracking-wide hover:bg-accent-muted transition-colors"
          >
            Request a Demo
          </Link>
          <a
            href="#platform"
            className="px-7 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto bg-transparent border border-divider text-fg-muted font-medium tracking-wide hover:border-divider-strong hover:text-fg transition-colors"
          >
            See the Platform
          </a>
        </div>
      </div>
    </section>
  )
}
