'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

type InquiryType = 'buyer' | 'seller' | 'both' | 'investor' | 'agent' | 'other'

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: 'buyer', label: 'Buying a home' },
  { value: 'seller', label: 'Selling a home' },
  { value: 'both', label: 'Buying and selling' },
  { value: 'investor', label: 'Investment property' },
  { value: 'agent', label: 'General real estate question' },
  { value: 'other', label: 'Something else' },
]

const timeframeOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '30-days', label: 'Within 30 days' },
  { value: '60-90-days', label: '60 to 90 days' },
  { value: '3-6-months', label: '3 to 6 months' },
  { value: 'just-starting', label: 'Just starting out' },
]

const slotOptions = [
  'Monday morning',
  'Monday afternoon',
  'Monday evening',
  'Tuesday morning',
  'Tuesday afternoon',
  'Tuesday evening',
  'Wednesday morning',
  'Wednesday afternoon',
  'Wednesday evening',
  'Thursday morning',
  'Thursday afternoon',
  'Thursday evening',
  'Friday morning',
  'Friday afternoon',
  'Friday evening',
  'Saturday morning',
  'Saturday afternoon',
]

function mapLeadType(inquiryType: InquiryType) {
  if (inquiryType === 'seller') return 'seller'
  return 'buyer'
}

function buildArea(inquiryType: InquiryType) {
  switch (inquiryType) {
    case 'seller':
      return 'seller_consultation'
    case 'both':
      return 'buy_sell_consultation'
    case 'investor':
      return 'investor_consultation'
    case 'agent':
      return 'general_consultation'
    case 'other':
      return 'other_consultation'
    default:
      return 'buyer_consultation'
  }
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const inquiryType = (formData.get('inquiry_type')?.toString() || 'buyer') as InquiryType
    const data: Record<string, string> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const slot = data.preferred_slot || ''
    const timeframe = data.timeframe || ''
    const details = data.details || ''

    data.lead_type = mapLeadType(inquiryType)
    data.area = buildArea(inquiryType)
    data.address = inquiryType === 'seller' || inquiryType === 'both'
      ? data.address || 'Booking request, address not provided yet'
      : 'Booking request'
    data.utm_source = 'booking_page'
    data.utm_campaign = 'booking_page'
    data.source_page = typeof window !== 'undefined' ? window.location.pathname : '/booking/'
    data.booking_request = 'yes'
    data.booking_slot = slot
    // Tag so booking leads show up distinctly in dashboard + Telegram
    const isSellType = inquiryType === 'seller' || inquiryType === 'both'
    data.tag = isSellType ? 'Seller Booking' : 'Buyer Booking'
    data.booking_notes = [
      'Booking request submitted from /booking/.',
      `Inquiry type: ${data.inquiry_type || 'Not specified'}`,
      `Timeline: ${timeframe || 'Not specified'}`,
      `Preferred slot: ${slot || 'Not specified'}`,
      details ? `Details: ${details}` : '',
    ]
      .filter(Boolean)
      .join(' ')

    try {
      await fetch('https://webhook.mattlaurierealestate.com/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors',
      })
    } catch {
      // fire and forget
    }

    if (typeof window !== 'undefined') {
      // @ts-expect-error gtag global
      window.gtag?.('event', 'conversion', { send_to: 'AW-898844952/lead' })
      // @ts-expect-error gtag global
      window.gtag?.('event', 'generate_lead', {
        event_category: 'booking',
        event_label: inquiryType,
      })
      // @ts-expect-error fbq global
      window.fbq?.('track', 'Lead', { content_name: `booking_${inquiryType}` })
    }

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-success-bg)] p-8 sm:p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
          ✅
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-primary)]">Request sent</h3>
        <p className="mt-3 text-[var(--color-text-muted)]">
          Matt will review it personally and reach out to lock in a real time.
        </p>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          Need something faster? Call or text{' '}
          <a href="tel:2672255611" className="font-semibold text-[var(--color-cta)]">
            (267) 225-5611
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">
          Quick booking request
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
          Tell Matt what you need, pick a rough time, and he&apos;ll confirm the best slot.
        </h2>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">
          Your info only goes to Matt, no spam.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Best number"
              className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Optional but helpful"
              className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">What is this about?</label>
            <select
              name="inquiry_type"
              required
              defaultValue="buyer"
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            >
              {inquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Rough timeline</label>
            <select
              name="timeframe"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            >
              <option value="" disabled>
                Select one
              </option>
              {timeframeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Preferred time slot</label>
            <select
              name="preferred_slot"
              defaultValue=""
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
            >
              <option value="">Pick a time slot</option>
              {slotOptions.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">Property address if this is about selling</label>
          <input
            type="text"
            name="address"
            placeholder="Optional, if you want Matt to see the property context"
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--color-primary)]">A few details</label>
          <textarea
            name="details"
            rows={4}
            placeholder="What are you looking for, where, and what would make this conversation useful?"
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-cta)]"
          />
        </div>

        <label className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-section)] px-4 py-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
          <span className="flex items-start gap-3">
            <input
              type="checkbox"
              name="sms_consent"
              value="yes"
              className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-cta)] focus:ring-[var(--color-cta)]"
            />
            <span>
              <strong>(Optional)</strong> I consent to receive SMS text messages from Matt Laurie regarding my real estate inquiry, including follow-up about buying, selling, appointment coordination, and requested property information. This is optional and won&apos;t affect whether Matt responds. Message frequency varies. Msg and data rates may apply. Reply STOP to opt out. See the{' '}
              <Link href="/privacy-policy/" className="font-semibold text-[var(--color-cta)] underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms/" className="font-semibold text-[var(--color-cta)] underline underline-offset-2">
                Terms
              </Link>
              .
            </span>
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[var(--color-cta)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-cta-hover)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Sending request...' : 'Request a Time With Matt →'}
        </button>

        <p className="text-center text-xs leading-relaxed text-[var(--color-text-light)]">
          Matt will get back to you ASAP and confirm the time!
        </p>
      </form>
    </div>
  )
}
