'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 2 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const startTime = performance.now()
    const durationMs = duration * 1000

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(eased * end)
      setDisplay(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}

interface Stat {
  numericValue: number
  prefix?: string
  suffix?: string
  label: string
}

const defaultStats: Stat[] = [
  { numericValue: 3.5, prefix: 'Up ', suffix: '%', label: 'Bucks County Home Values' },
  { numericValue: 3.3, prefix: 'Up ', suffix: '%', label: 'NE Philadelphia Home Values' },
  { numericValue: 10, prefix: '', suffix: '+', label: 'Years Local Experience' },
  { numericValue: 100, prefix: '$', suffix: 'M+', label: 'Team Volume (2025)' },
]

export function AnimatedStats({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="bg-[var(--color-primary)] py-8 relative overflow-hidden">
      {/* Subtle gradient accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-[var(--color-accent)]">
                {stat.numericValue % 1 !== 0 ? (
                  // For decimal values, just animate and display with decimal
                  <AnimatedDecimal value={stat.numericValue} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                ) : (
                  <AnimatedNumber value={stat.numericValue} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedDecimal({ value, prefix, suffix, duration = 2 }: { value: number; prefix: string; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const durationMs = duration * 1000

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = (eased * value).toFixed(1)
      setDisplay(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}
