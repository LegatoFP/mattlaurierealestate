import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval — Matt Laurie, Keller Williams',
  description: 'Start your mortgage pre-approval with John DePaul Jr at Movement Mortgage. Fast, local, works with PA and NJ buyers. Matt Laurie recommends him for a reason.',
  openGraph: {
    title: 'Mortgage Pre-Approval — Matt Laurie',
    description: 'Start your pre-approval today. 15 minutes. No commitment. Works with first-time buyers, self-employed buyers, and anyone told they don\'t qualify.',
    type: 'website',
  },
}

const MOVEMENT_URL = 'https://easyapp.movement.com/apply/create_profile?userid=10105721'
const JOHN_PHONE = '(215) 939-0184'

export default function PreapprovalPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1a2332] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a84c] via-transparent to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase mb-4">
          Call or Text Matt anytime:{' '}
          <a href="tel:2672255611" className="underline hover:text-white">(267) 225-5611</a>
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Ready to Buy?<br />
          <span className="text-[#c9a84c]">Start With Getting Pre-Approved.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Most buyers wait until they're "ready" — then realize they could've started months ago.
          Pre-approval tells you what you can actually afford, whether you qualify for buyer grants
          and credits, and what programs may be available to you before you start looking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <a
            href={MOVEMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            Start My Pre-Approval →
          </a>
        </div>
        <p className="text-gray-400 text-xs">
          Powered by EasyApp™ through Movement Mortgage
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Takes about 15 minutes. No commitment. Works with buyers in PA and NJ.
        </p>
      </div>
    </section>

      {/* ── WHY PRE-APPROVAL FIRST ─────────────────────────────── */}
      <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-4">
          Why Pre-Approval First?
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Skipping this step is the #1 mistake buyers make. Here's what you gain by starting here.
        </p>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#faf8f5] rounded-xl p-8 border border-gray-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Know Your Number</h3>
            <p className="text-gray-600 leading-relaxed">
              Don't fall in love with a house you can't afford. Pre-approval tells you exactly
              what you can borrow — before you start looking. No wasted time, no heartbreak.
            </p>
          </div>

          <div className="bg-[#faf8f5] rounded-xl p-8 border border-gray-100">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">See If You Qualify for Grants & Credits</h3>
            <p className="text-gray-600 leading-relaxed">
              PA and local buyer programs, closing cost assistance, grant money — John's team
              knows what's available and will tell you what you may qualify for. Most buyers
              leave thousands on the table without ever knowing.
            </p>
          </div>

          <div className="bg-[#faf8f5] rounded-xl p-8 border border-gray-100">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Lock In Your Rate</h3>
            <p className="text-gray-600 leading-relaxed">
              Rates change. Getting pre-approved locks in options so you're not at the mercy
              of the market when you find the right place.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-14">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">

          <div className="text-center">
            <div className="w-14 h-14 bg-[#1a2332] text-[#c9a84c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
              1
            </div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Fill Out the Form</h3>
            <p className="text-gray-600 leading-relaxed">
              About 15 minutes on your phone or computer. John DePaul Jr's team at Movement
              Mortgage will guide you through everything — no jargon, no runaround.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#1a2332] text-[#c9a84c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
              2
            </div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Get Your Numbers</h3>
            <p className="text-gray-600 leading-relaxed">
              You'll know exactly what you can borrow, what your monthly payment looks like,
              and what programs or buyer credits you may qualify for.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#1a2332] text-[#c9a84c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
              3
            </div>
            <h3 className="text-xl font-bold text-[#1a2332] mb-3">Shop With Confidence</h3>
            <p className="text-gray-600 leading-relaxed">
              When you find the right house, you're already pre-approved. Make your offer
              count — no scrambling for financing at the last minute.
            </p>
          </div>

        </div>

        <div className="text-center mt-14">
          <a
            href={MOVEMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Start My Pre-Approval →
          </a>
        </div>
      </div>
    </section>

      {/* ── ABOUT JOHN DEPAUL JR ─────────────────────────────── */}
      <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* John DePaul Jr info card — image from Movement Mortgage or local file */}
            <div className="bg-[#1a2332] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-5 mb-5">
                <img
                  src="/john-depauljr.jpg"
                  alt="John DePaul Jr, Movement Mortgage"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#c9a84c]"
                />
                <div>
                  <p className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase mb-1">
                    Preferred Lender
                  </p>
                  <h3 className="text-2xl font-bold">John DePaul Jr</h3>
                  <p className="text-gray-300 text-sm mt-0.5">Movement Mortgage</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>
                  <span className="text-gray-500">Phone:</span>{' '}
                  <a href={`tel:${JOHN_PHONE.replace(/[^0-9]/g, '')}`} className="text-white hover:text-[#c9a84c]">
                    {JOHN_PHONE}
                  </a>
                </p>
                <p>
                  <span className="text-gray-500">Email:</span>{' '}
                  <a href="mailto:john.depaul@movement.com" className="text-white hover:text-[#c9a84c]">
                    john.depaul@movement.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-500">Website:</span>{' '}
                  <a href="https://movement.com/lo/john-depauljr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c9a84c] underline">
                    movement.com/lo/john-depauljr
                  </a>
                </p>
                <p>
                  <span className="text-gray-500">License:</span>{' '}
                  <span className="text-white">NMLS #195172</span>
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                John's team works with Matt's clients regularly — they know the local market,
                the programs, and how to close deals in this area. When your agent and lender
                are aligned from day one, the whole process is smoother.
              </p>
              <a
                href={MOVEMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963f] text-[#1a2332] font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Start with John's Team →
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Who John's Team Works With
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Movement Mortgage isn't a one-size-fits-all shop. John DePaul Jr's team has programs
              for buyers who don't fit the traditional mold.
            </p>
            <ul className="space-y-3">
              {[
                'First-time buyers with limited credit or savings',
                'Self-employed buyers (bank statement programs, non-QM loans)',
                'PA and NJ residents — any town, any price range',
                'Anyone who\'s been told they don\'t qualify elsewhere',
                'Buyers using PA and NJ down payment assistance programs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#c9a84c] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-6 italic">
              If you've been turned down before — or think you won't qualify — start here.
              Programs change, and John's team knows what's available right now.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="bg-[#1a2332] text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Don't wait for the "perfect time."<br />
          <span className="text-[#c9a84c]">The perfect time is when you're pre-approved.</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          15 minutes. No commitment. And you'll know exactly where you stand before you
          start looking at houses.
        </p>
        <a
          href={MOVEMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors shadow-xl mb-3"
        >
          Start My Pre-Approval →
        </a>
        <p className="text-gray-500 text-xs">
          Powered by EasyApp™ through Movement Mortgage
        </p>
        <p className="text-gray-400 text-sm mt-6">
          Questions first? Text Matt anytime:{' '}
          <a href="tel:2672255611" className="underline hover:text-white">
            (267) 225-5611
          </a>
        </p>
      </div>
    </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-4">

          <details className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#1a2332] hover:bg-gray-50 list-none">
              How long does pre-approval take?
              <span className="text-[#c9a84c] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Usually about 15 minutes to fill out the application. The actual pre-approval
              letter can come within 24-48 hours depending on documentation. John's team
              moves fast.
            </div>
          </details>

          <details className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#1a2332] hover:bg-gray-50 list-none">
              Does pre-approval hurt my credit score?
              <span className="text-[#c9a84c] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              The initial application involves a soft pull that doesn't affect your credit
              score. Your score is only affected when you lock in a rate — and even then,
              the impact is minimal and temporary.
            </div>
          </details>

          <details className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#1a2332] hover:bg-gray-50 list-none">
              How long is pre-approval valid?
              <span className="text-[#c9a84c] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Typically 60-90 days. If your financial situation changes significantly
              (new job, major purchases), you may need to update it. Worth keeping in
              mind when you're shopping timelines.
            </div>
          </details>

          <details className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#1a2332] hover:bg-gray-50 list-none">
              I'm self-employed — can I still get pre-approved?
              <span className="text-[#c9a84c] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Yes. John DePaul Jr's team works with self-employed buyers using bank
              statements, asset depletion programs, and non-QM loans that traditional
              lenders don't offer. This is a big one — don't assume you don't qualify.
            </div>
          </details>

          <details className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-[#1a2332] hover:bg-gray-50 list-none">
              Do I have to use Matt's lender?
              <span className="text-[#c9a84c] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              No. You can work with whoever you choose. But if you're going to shop
              lenders, you might as well start with John's team — they know the local
              market, the programs, and how to close deals in this area better than most.
            </div>
          </details>

        </div>
      </div>
    </section>
    </>
  )
}
