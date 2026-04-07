'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sellers/', label: 'Sellers' },
  { href: '/first-time-homebuyer-bucks-county/', label: 'Buyers' },
  { href: '/neighborhoods/', label: 'Neighborhoods' },
  { href: '/about/', label: 'About' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      {/* KW Compliance Bar */}
      <div className="bg-[var(--color-primary)] text-white/70 text-xs py-1 text-center">
        Matt Laurie, REALTOR® · Keller Williams Real Estate · (215) 757-6100
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <div className="text-lg font-bold text-[var(--color-primary)] leading-tight">
                Matt Laurie
              </div>
              <div className="text-xs text-[var(--color-text-muted)] leading-tight">
                REALTOR® · The Kim Rock Group · KW
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:2672255611"
              className="text-sm font-semibold text-[var(--color-primary)]"
            >
              (267) 225-5611
            </a>
            <Link
              href="#lead-form"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors shadow-sm"
            >
              Free Home Value
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--color-text-muted)]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[var(--color-text)] px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:2672255611"
                className="text-base font-semibold text-[var(--color-cta)] px-2 py-1"
              >
                📞 (267) 225-5611
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
