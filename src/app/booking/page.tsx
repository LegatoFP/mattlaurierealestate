import type { Metadata } from 'next'
import { BookingForm } from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Request a time to talk with Matt Laurie about buying, selling, investing, or any Bucks County and Philadelphia real estate question.',
}

const reasons = [
  'Buying your first home',
  'Selling and timing your next move',
  'Need quick advice on a property or neighborhood',
  'Want a local agent to actually call you back',
]

export default function BookingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,168,76,0.24),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.20),_transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
                Matt Laurie Real Estate
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Schedule a call with Matt.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
                If you want to talk buying, selling, timing, neighborhoods, strategy, or just figure out your next move — start here.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/88 backdrop-blur-sm"
                  >
                    {reason}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
                <span className="rounded-full border border-white/15 px-4 py-2">No call center</span>
                <span className="rounded-full border border-white/15 px-4 py-2">No spammy instant booking app</span>
                <span className="rounded-full border border-white/15 px-4 py-2">Direct follow-up from Matt</span>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-bg-section)] p-6 sm:grid-cols-3 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-dark)]">1</p>
              <h2 className="mt-2 text-lg font-bold text-[var(--color-primary)]">Send your request</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Tell Matt what kind of help you need and pick a time window that works.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-dark)]">2</p>
              <h2 className="mt-2 text-lg font-bold text-[var(--color-primary)]">Matt reviews it personally</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                No random VA, no generic automation. He sees it directly and follows up himself.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-dark)]">3</p>
              <h2 className="mt-2 text-lg font-bold text-[var(--color-primary)]">Lock in the time</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Matt confirms the appointment by text, call, or email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matt bio section */}
      <section className="bg-[var(--color-bg-section)] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
            <div className="shrink-0">
              <img
                src="/matt-headshot-new.jpg"
                alt="Matt Laurie, REALTOR®"
                className="h-36 w-36 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-44 sm:w-44"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">Who you&apos;re talking to</p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">Matt Laurie, REALTOR®</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Keller Williams Real Estate · Licensed in PA &amp; NJ · 10+ Years</p>
              <p className="mt-4 text-[var(--color-text-muted)] leading-7">
                I&apos;ve been helping buyers and sellers in Bucks County and Philadelphia for over 10 years.
                I live in Washington Crossing — this is my market, not just my job.
                When you reach out, you get me — not a call center, not a bot, not a random team member.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:2672255611"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-cta-hover)] transition-colors"
                >
                  📞 (267) 225-5611
                </a>
                <a
                  href="mailto:mattlaurie@kw.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-white transition-colors"
                >
                  ✉️ mattlaurie@kw.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Book a Call With Matt Laurie',
            url: 'https://mattlaurierealestate.com/booking/',
            description:
              'Request a time to talk with Matt Laurie about buying, selling, investing, or local real estate questions in Bucks County and Philadelphia.',
          }),
        }}
      />
    </>
  )
}
