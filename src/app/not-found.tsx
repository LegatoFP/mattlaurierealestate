import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
        <p className="text-xl text-[var(--color-text-muted)] mb-8">
          Page not found — but we can still help you find your next home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-[var(--color-cta)] text-white font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
          >
            Go Home
          </Link>
          <a
            href="tel:2672255611"
            className="px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-bg-section)] transition-colors"
          >
            Call Matt: (267) 225-5611
          </a>
        </div>
      </div>
    </div>
  )
}
