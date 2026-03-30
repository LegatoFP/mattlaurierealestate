interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  { value: 'Up 3.5%', label: 'Bucks County Home Values' },
  { value: 'Up 3.3%', label: 'NE Philadelphia Home Values' },
  { value: '10+', label: 'Years Local Experience' },
  { value: '$100M+', label: 'Team Volume (2025)' },
]

export function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <section className="bg-[var(--color-primary)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-[var(--color-accent)]">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
