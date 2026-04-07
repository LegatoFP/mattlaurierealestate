import Link from 'next/link'
import { AnimatedStats } from '@/components/AnimatedStats'
import { TestimonialsDark } from '@/components/TestimonialsDark'
import { LeadForm } from '@/components/LeadForm'
import { NeighborhoodGrid } from '@/components/NeighborhoodGrid'
import { ValueProps } from '@/components/ValueProps'
import { WaveDivider } from '@/components/WaveDivider'
import { HeroGlassCard } from '@/components/HeroGlassCard'
import { HeroFadeIn, AnimatedGradientOverlay } from '@/components/HeroAnimations'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      {/* HERO — Cinematic with visible photo */}
      <section className="relative bg-[var(--color-primary)] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image — higher opacity for visual impact */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/matt-street-cover.jpg')" }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/50 to-[var(--color-primary)]/90" />
        <AnimatedGradientOverlay />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <HeroFadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
              Your Move in Bucks County
              <br />
              <span className="text-[var(--color-accent)]">Starts Here</span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
              Whether you&apos;re selling your home or buying your first one — I&apos;m a local agent
              with 10 years in this market. No algorithms, no runaround. Just real answers.
            </p>
          </HeroFadeIn>

          {/* Clean pill CTAs */}
          <HeroFadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#seller-form"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-cta)] hover:bg-[var(--color-cta-hover)] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Get My Free Home Value
            </Link>
            <Link
              href="/first-time-homebuyer-bucks-county/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/25 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Explore Buyer Programs
            </Link>
          </HeroFadeIn>

          {/* Glassmorphism stat card — desktop only */}
          <HeroGlassCard />
        </div>
      </section>

      {/* Stats Bar — Animated counters */}
      <AnimatedStats />

      {/* Wave divider */}
      <WaveDivider color="#ffffff" />

      {/* WHY MATT — Value Props with icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">
                Why Homeowners in Bucks County & Philly Trust Me
              </h2>
              <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl mx-auto">
                I&apos;m not a Zillow algorithm or a corporate call center. I&apos;m a local agent who lives here,
                works here, and knows what buyers are actually paying right now.
              </p>
            </div>
          </ScrollReveal>

          <ValueProps />
        </div>
      </section>

      {/* Wave divider into neighborhoods */}
      <WaveDivider color="var(--color-bg-section)" />

      {/* NEIGHBORHOODS — Photo card grid */}
      <section className="py-20 bg-[var(--color-bg-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">
                Explore Local Markets
              </h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Every town hits a little different. Find yours.
              </p>
            </div>
          </ScrollReveal>

          <NeighborhoodGrid />
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider color="#ffffff" />

      {/* SELLER FORM */}
      <section className="py-20 bg-white" id="seller-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <LeadForm type="seller" />
          </ScrollReveal>
        </div>
      </section>

      {/* Wave divider into dark section */}
      <WaveDivider color="#1a2332" />

      {/* TESTIMONIALS — Dark section */}
      <TestimonialsDark />

      {/* Wave divider out of dark section */}
      <WaveDivider color="#ffffff" />

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="/matt-headshot-new.jpg"
                  alt="Matt Laurie, REALTOR®"
                  className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                />
                {/* Verified badge overlay */}
                <div className="absolute -bottom-3 -right-3 lg:bottom-4 lg:right-4 bg-[var(--color-primary)] text-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">10+ Years Licensed</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
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
                    className="inline-flex items-center px-5 py-2.5 rounded-full border border-[var(--color-border)] text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg-section)] transition-colors"
                  >
                    Learn More About Matt
                  </Link>
                  <a
                    href="tel:2672255611"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
                  >
                    Call or Text (267) 225-5611
                  </a>
                </div>
              </div>
            </ScrollReveal>
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
