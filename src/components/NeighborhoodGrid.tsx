'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Neighborhood {
  href: string
  name: string
  tag: string
  image: string
}

const neighborhoods: Neighborhood[] = [
  {
    href: '/newtown/',
    name: 'Newtown',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/yardley/',
    name: 'Yardley',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/washington-crossing/',
    name: 'Washington Crossing',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/bensalem/',
    name: 'Bensalem',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/bristol/',
    name: 'Bristol',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/levittown/',
    name: 'Levittown',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/langhorne/',
    name: 'Langhorne',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/doylestown/',
    name: 'Doylestown',
    tag: 'Bucks County',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/19154/',
    name: '19154',
    tag: 'Parkwood & Morrell Park',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/19116/',
    name: '19116',
    tag: 'Somerton & Bustleton',
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/19115/',
    name: '19115',
    tag: 'Rhawnhurst & Bustleton',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&auto=format',
  },
  {
    href: '/19114/',
    name: '19114',
    tag: 'Torresdale & Holmesburg',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&auto=format',
  },
]

export function NeighborhoodGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {neighborhoods.map((n, i) => (
        <motion.div
          key={n.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <Link
            href={n.href}
            className="group relative block h-48 md:h-56 rounded-xl overflow-hidden"
          >
            {/* Photo */}
            <img
              src={n.image}
              alt={`${n.name} homes`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors duration-300 group-hover:from-black/90" />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                {n.name}
              </div>
              <div className="text-white/70 text-xs mt-0.5">{n.tag}</div>
            </div>
            {/* Hover accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
