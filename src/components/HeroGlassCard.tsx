'use client'

import { motion } from 'framer-motion'

export function HeroGlassCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex justify-center mt-10"
    >
      <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 items-center gap-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">10+</div>
          <div className="text-[10px] uppercase tracking-wider text-white/60">Years</div>
        </div>
        <div className="w-px h-10 bg-white/20" />
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--color-accent)]">$100M+</div>
          <div className="text-[10px] uppercase tracking-wider text-white/60">Sold</div>
        </div>
        <div className="w-px h-10 bg-white/20" />
        <div className="text-center">
          <div className="text-2xl font-bold text-white">5.0</div>
          <div className="text-[10px] uppercase tracking-wider text-white/60">★ Rated</div>
        </div>
      </div>
    </motion.div>
  )
}
