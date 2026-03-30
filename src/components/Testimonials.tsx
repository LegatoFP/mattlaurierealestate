const testimonials = [
  {
    quote: "I can't recommend Matt enough. He knows the local real estate market, communicates quickly and effectively and just gets the job done.",
    author: 'Alexandra',
    detail: 'Bought & Sold in Roslyn, PA',
  },
  {
    quote: "Could not be happier. Matt anticipated every need, and made the whole process easy. Genuinely professional and always available. We felt that Matt always looked out for our best interests.",
    author: 'M. Semmel',
    detail: 'Bought in Washington Crossing, PA',
  },
  {
    quote: "Great agent and friend. He was always there for us, answered every question, and made sure we got the best deal possible.",
    author: 'T. Rudolph',
    detail: 'Sold in Yardley, PA',
  },
  {
    quote: "Matt was wonderful — he took me out to look at houses when no one else would. Very knowledgeable, knows what he's doing, and very personable.",
    author: 'Natalie H.',
    detail: 'Philadelphia, PA',
  },
  {
    quote: "Matt made our experience buying our first home so much easier. Very quick to answer all our questions and figured things out for us before we even knew we had a problem.",
    author: 'Zillow Client',
    detail: 'First-Time Buyer in PA',
  },
  {
    quote: "Matt was very helpful throughout the entire process of purchasing my new home — from fitting my schedule for showings to guiding me through closing. Couldn't have done it without him.",
    author: 'Dave C.',
    detail: 'Bristol, PA',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[var(--color-bg-warm)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
            ⭐ 5-Star Zillow Premier Agent
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            What Clients Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow"
            >
              <div className="text-[var(--color-accent)] text-sm mb-3">★★★★★</div>
              <p className="text-[var(--color-text)] text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  — {t.author}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
