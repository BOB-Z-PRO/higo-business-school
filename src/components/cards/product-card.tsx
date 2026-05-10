import Link from 'next/link'

type ProductCardProps = {
  href: string
  icon: string
  name: string
  subtitle: string
  description: string
  color: string
  gradient: string
  keyBenefits: string[]
}

export default function ProductCard({
  href,
  icon,
  name,
  subtitle,
  description,
  color,
  gradient,
  keyBenefits,
}: ProductCardProps) {
  return (
    <Link href={href} className="product-card-large">
      <div style={{ background: gradient, padding: '24px', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
            }}
          >
            {icon}
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{name}</h3>
            <p style={{ opacity: 0.9, fontSize: '0.875rem' }}>{subtitle}</p>
          </div>
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '16px' }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {keyBenefits.map((benefit) => (
            <span
              key={benefit}
              style={{
                background: `${color}15`,
                color,
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
