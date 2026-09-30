import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { SiZillow } from 'react-icons/si'

const neighborhoods = [
  { href: '/newtown/', label: 'Newtown' },
  { href: '/yardley/', label: 'Yardley' },
  { href: '/washington-crossing/', label: 'Washington Crossing' },
  { href: '/bensalem/', label: 'Bensalem' },
  { href: '/bristol/', label: 'Bristol' },
  { href: '/levittown/', label: 'Levittown' },
  { href: '/langhorne/', label: 'Langhorne' },
  { href: '/doylestown/', label: 'Doylestown' },
]

const phillyZips = [
  { href: '/19154/', label: '19154 · Parkwood & Morrell Park' },
  { href: '/19116/', label: '19116 · Somerton & Bustleton' },
  { href: '/19115/', label: '19115 · Rhawnhurst & Bustleton' },
  { href: '/19114/', label: '19114 · Torresdale & Holmesburg' },
]

const resources = [
  { href: '/first-time-homebuyer-bucks-county/', label: 'First-Time Buyer Programs' },
  { href: '/sellers/', label: 'Sell Your Home' },
  { href: '/about/', label: 'About Matt' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Agent Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Matt Laurie, REALTOR®</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              The Kim Rock Group · Keller Williams Real Estate
              <br />
              #1 Team at KW Langhorne · Top 1% in Greater Philadelphia
            </p>
            <div className="space-y-1 mb-3">
              <a
                href="tel:2672255611"
                className="block text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-light)] transition-colors"
              >
                Cell: (267) 225-5611
              </a>
              <a
                href="tel:2157576100"
                className="block text-white/60 text-sm hover:text-white/80 transition-colors"
              >
                Office: (215) 757-6100
              </a>
            </div>
            <p className="text-white/50 text-xs mt-3">
              PA License #RS333171 · NJ License #2671376 · Licensed in PA &amp; NJ
              <br />
              584 Middletown Blvd Suite A50, Langhorne, PA 19047
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/mattlaurierealestate" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/mattlaurierealtor" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@mattlaurierealtor" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/50 hover:text-white transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mattlaurierealestate" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://share.google/FWzxXTqR0oCqld064" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="text-white/50 hover:text-white transition-colors text-xs font-semibold tracking-wide">
                GBP
              </a>
              <a href="https://www.zillow.com/profile/mattlaurierealestate" target="_blank" rel="noopener noreferrer" aria-label="Zillow" className="text-white/50 hover:text-white transition-colors">
                <SiZillow size={20} />
              </a>
            </div>
          </div>

          {/* Bucks County */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
              Bucks County
            </h4>
            <ul className="space-y-2">
              {neighborhoods.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NE Philly */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
              NE Philadelphia
            </h4>
            <ul className="space-y-2">
              {phillyZips.map((z) => (
                <li key={z.href}>
                  <Link
                    href={z.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <img
              src="/kw-realestate-logo.png"
              alt="Keller Williams Real Estate"
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/kimrock-logo.png"
              alt="The Kim Rock Group"
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity brightness-0 invert"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Matt Laurie, REALTOR® · Keller Williams Real Estate · PA License #RS333171 · NJ License #2671376
            </p>
            <p>
              Member: National Association of REALTORS® · Pennsylvania Association of Realtors® · Bucks County Association of Realtors®
            </p>
          </div>
          <p className="text-center text-[10px] text-white/25 mt-3">
            Market data sourced from Zillow Home Value Index (ZHVI). This is not a solicitation if you are already represented by a real estate agent.
          </p>
        </div>
      </div>
    </footer>
  )
}
