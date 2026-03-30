import Link from 'next/link'
import { StatsBar } from '@/components/StatsBar'
import { Testimonials } from '@/components/Testimonials'
import { LeadForm } from '@/components/LeadForm'

export default function HomePage() {
  return (
    <>
      {/* HERO — Dual Path */}
      <section className="relative bg-[var(--color-primary)] overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/matt-street-cover.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 to-[var(--color-primary)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
              Your Move in Bucks County
              <br />
              <span className="text-[var(--color-accent)]">Starts Here</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Whether you&apos;re selling your home or buying your first one — I&apos;m a local agent
              with 10 years in this market. No algorithms, no runaround. Just real answers.
            </p>
          </div>

          {/* Dual CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sellers */}
            <Link
              href="#seller-form"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:scale-[1.02]"
            >
              <div className="text-3xl mb-3">🏡</div>
              <h2 className="text-xl font-bold text-white mb-2">
                Selling Your Home?
              </h2>
              <p className="text-white/70 text-sm mb-4">
                Find out what your home is worth in today&apos;s market. Free CMA based on
                real recent sales — not a Zillow guess.
              </p>
              <span className="inline-flex items-center text-[var(--color-accent)] font-semibold text-sm group-hover:gap-2 transition-all">
                Get My Free Home Value
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Buyers */}
            <Link
              href="/first-time-homebuyer-bucks-county/"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:scale-[1.02]"
            >
              <div className="text-3xl mb-3">🔑</div>
              <h2 className="text-xl font-bold text-white mb-2">
                Buying Your First Home?
              </h2>
              <p className="text-white/70 text-sm mb-4">
                PA has down payment programs most buyers never hear about.
                Find out what free money you may qualify for.
              </p>
              <span className="inline-flex items-center text-[var(--color-accent)] font-semibold text-sm group-hover:gap-2 transition-all">
                Explore Buyer Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* WHY MATT — Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Why Homeowners in Bucks County & Philly Trust Me
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl mx-auto">
              I&apos;m not a Zillow algorithm or a corporate call center. I&apos;m a local agent who lives here,
              works here, and knows what buyers are actually paying right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📍',
                title: 'Hyper-Local Knowledge',
                desc: 'From Newtown to NE Philly — I work this market daily and know what drives value street by street.',
              },
              {
                icon: '⚡',
                title: 'Fast Response',
                desc: "Text or call me and I get back to you fast. No waiting days wondering what's going on.",
              },
              {
                icon: '🤝',
                title: 'Zero Pressure',
                desc: "Just information. Whether you're selling now or just curious — knowing your number is always smart.",
              },
              {
                icon: '🏆',
                title: 'Proven Results',
                desc: '#1 Team at KW Langhorne. Top 1% in Greater Philadelphia. $100M+ team volume.',
              },
            ].map((prop, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">{prop.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS — Hub Links */}
      <section className="py-20 bg-[var(--color-bg-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Explore Local Markets
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Every town hits a little different. Find yours.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/newtown/', name: 'Newtown', tag: 'Bucks County' },
              { href: '/yardley/', name: 'Yardley', tag: 'Bucks County' },
              { href: '/washington-crossing/', name: 'Washington Crossing', tag: 'Bucks County' },
              { href: '/bensalem/', name: 'Bensalem', tag: 'Bucks County' },
              { href: '/bristol/', name: 'Bristol', tag: 'Bucks County' },
              { href: '/levittown/', name: 'Levittown', tag: 'Bucks County' },
              { href: '/langhorne/', name: 'Langhorne', tag: 'Bucks County' },
              { href: '/doylestown/', name: 'Doylestown', tag: 'Bucks County' },
              { href: '/19154/', name: '19154', tag: 'Parkwood & Morrell Park' },
              { href: '/19116/', name: '19116', tag: 'Somerton & Bustleton' },
              { href: '/19115/', name: '19115', tag: 'Rhawnhurst & Bustleton' },
              { href: '/19114/', name: '19114', tag: 'Torresdale & Holmesburg' },
            ].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group bg-white rounded-xl p-5 border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-cta-light)] transition-all"
              >
                <div className="font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-cta)]">
                  {n.name}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{n.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELLER FORM */}
      <section className="py-20 bg-white" id="seller-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm type="seller" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/matt-headshot-new.jpg"
                alt="Matt Laurie, REALTOR®"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                Meet Matt Laurie
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                I&apos;ve been helping people buy and sell homes in Bucks County and Philadelphia
                for over 10 years. I live in Washington Crossing — this isn&apos;t just my market, it&apos;s my home.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Before real estate, I spent a decade in finance and tech. That background means I think about
                your transaction differently — numbers, strategy, and making sure nothing slips through the cracks.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                My goal is simple: make the process smooth, easy, and free of surprises. Whether you&apos;re a
                first-time buyer figuring out grants or a homeowner wondering what your place is worth — I&apos;m here to help.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about/"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg-section)] transition-colors"
                >
                  Learn More About Matt
                </Link>
                <a
                  href="tel:2672255611"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
                >
                  Call or Text (267) 225-5611
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Matt Laurie, REALTOR®',
            description:
              'Local real estate agent serving Bucks County and Philadelphia. 10 years experience. Free home value estimates. First-time buyer specialist.',
            url: 'https://mattlaurierealestate.com',
            telephone: '+12672255611',
            email: 'mattlaurie@kw.com',
            image: 'https://mattlaurierealestate.com/matt-headshot-new.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '584 Middletown Blvd Suite A50',
              addressLocality: 'Langhorne',
              addressRegion: 'PA',
              postalCode: '19047',
              addressCountry: 'US',
            },
            areaServed: [
              { '@type': 'City', name: 'Newtown, PA' },
              { '@type': 'City', name: 'Yardley, PA' },
              { '@type': 'City', name: 'Washington Crossing, PA' },
              { '@type': 'City', name: 'Bensalem, PA' },
              { '@type': 'City', name: 'Bristol, PA' },
              { '@type': 'City', name: 'Levittown, PA' },
              { '@type': 'City', name: 'Langhorne, PA' },
              { '@type': 'City', name: 'Doylestown, PA' },
              { '@type': 'City', name: 'Philadelphia, PA' },
            ],
            memberOf: {
              '@type': 'Organization',
              name: 'Keller Williams Real Estate',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '6',
              bestRating: '5',
            },
          }),
        }}
      />
    </>
  )
}
