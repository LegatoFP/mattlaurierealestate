'use client'

import { motion } from 'framer-motion'

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

export function TestimonialsDark() {
  return (
    <section className="py-20 bg-[#1a2332] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
            5-Star Zillow Premier Agent
          </div>
          <h2 className="text-3xl font-bold text-white">
            What Clients Are Saying
          </h2>
          {/* Gold star row */}
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-[var(--color-accent)] text-sm mb-3">★★★★★</div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-white">
                  — {t.author}
                </p>
                <p className="text-xs text-white/50">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
