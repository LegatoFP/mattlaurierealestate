'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Handshake, Trophy } from 'lucide-react'

const props = [
  {
    icon: MapPin,
    title: 'Hyper-Local Knowledge',
    desc: 'From Newtown to NE Philly — I work this market daily and know what drives value street by street.',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    desc: "Text or call me and I get back to you fast. No waiting days wondering what's going on.",
  },
  {
    icon: Handshake,
    title: 'Zero Pressure',
    desc: "Just information. Whether you're selling now or just curious — knowing your number is always smart.",
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    desc: '#1 Team at KW Langhorne. Top 1% in Greater Philadelphia. $100M+ team volume.',
  },
]

export function ValueProps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {props.map((prop, i) => {
        const Icon = prop.icon
        return (
          <motion.div
            key={i}
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-colors mb-5">
              <Icon className="w-7 h-7 text-[var(--color-accent)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">{prop.title}</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{prop.desc}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
