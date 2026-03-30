'use client'

import { useState, FormEvent } from 'react'

type FormType = 'seller' | 'buyer'

interface LeadFormProps {
  type: FormType
  town?: string
  className?: string
}

export function LeadForm({ type, town, className = '' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const isSeller = type === 'seller'
  const heading = isSeller
    ? town
      ? `Get Your Free ${town} Home Value`
      : 'Get Your Free Home Value'
    : 'See What Programs You May Qualify For'
  const subtext = isSeller
    ? "Takes 30 seconds. I'll personally review your home and send you a detailed estimate — no bots, no runaround."
    : 'Takes 30 seconds. Matt personally reviews and reaches out within a few hours — no pressure, no commitment.'

  const webhookUrl = isSeller
    ? 'https://mattlaurierealestate.com/api/lead'
    : 'https://mattlaurierealestate.com/api/lead'

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((val, key) => {
      data[key] = val.toString()
    })
    data.lead_type = type
    data.source_page = typeof window !== 'undefined' ? window.location.pathname : ''
    if (town) data.town = town

    try {
      // Send to webhook
      await fetch('https://178.156.230.106:443/webhook/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors',
      })
    } catch {
      // Fire and forget — webhook handles delivery
    }

    // Track conversions
    if (typeof window !== 'undefined') {
      // @ts-expect-error gtag global
      window.gtag?.('event', 'conversion', { send_to: 'AW-898844952/lead' })
      // @ts-expect-error gtag global
      window.gtag?.('event', 'generate_lead', { event_category: type, event_label: town || 'general' })
      // @ts-expect-error fbq global
      window.fbq?.('track', 'Lead', { content_name: `${type}_${town || 'general'}` })
    }

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className={`bg-[var(--color-success-bg)] rounded-2xl p-8 text-center ${className}`} id="lead-form">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">You&apos;re all set!</h3>
        <p className="text-[var(--color-text-muted)]">
          {isSeller
            ? "I'll have your home value estimate ready within 24 hours."
            : 'Matt will reach out personally — usually within a few hours.'}
        </p>
        <p className="text-sm text-[var(--color-text-muted)] mt-3">
          Questions? Call or text{' '}
          <a href="tel:2672255611" className="text-[var(--color-cta)] font-semibold">
            (267) 225-5611
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-[var(--color-border)] p-8 ${className}`} id="lead-form">
      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{heading}</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">{subtext}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent outline-none transition-all"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
            pattern="[0-9]{10}"
            title="10-digit phone number"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent outline-none transition-all"
          />
        </div>

        {isSeller && (
          <input
            type="text"
            name="address"
            placeholder="Property address"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent outline-none transition-all"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent outline-none transition-all"
        />

        {!isSeller && (
          <select
            name="area"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-cta)] focus:border-transparent outline-none transition-all text-[var(--color-text-muted)]"
          >
            <option value="">Where are you looking to buy?</option>
            <option value="bucks-county">Bucks County, PA</option>
            <option value="ne-philly">NE Philadelphia</option>
            <option value="south-philly">South Philadelphia</option>
            <option value="nj">New Jersey</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-lg bg-[var(--color-cta)] text-white font-semibold text-sm hover:bg-[var(--color-cta-hover)] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? 'Sending...'
            : isSeller
            ? 'Get My Free Home Value →'
            : 'Find Out What Free Money You Qualify For →'}
        </button>

        <p className="text-xs text-[var(--color-text-light)] text-center">
          🔒 Your info is private. No spam, ever. Matt reaches out personally.
        </p>
      </form>
    </div>
  )
}
