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
      <div className="product-card-large-head" style={{ background: gradient }}>
        <div className="product-card-large-head-row">
          <div className="product-card-large-icon">
            {icon}
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>{name}</h3>
            <p style={{ opacity: 0.9, fontSize: '0.86rem', lineHeight: 1.6 }}>{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="product-card-large-body">
        <p style={{ color: 'var(--premium-slate)', lineHeight: 1.78 }}>{description}</p>
        <div className="product-card-large-benefits">
          {keyBenefits.map((benefit) => (
            <span
              key={benefit}
              className="product-card-large-benefit"
              style={{ background: `${color}14`, color, border: `1px solid ${color}22` }}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
