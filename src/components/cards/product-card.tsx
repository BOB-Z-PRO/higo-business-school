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
  keyBenefits,
}: ProductCardProps) {
  return (
    <Link href={href} className="product-card-large ui-card" style={{ ['--accent-color' as string]: color }}>
      <div className="product-card-large-head">
        <div className="product-card-large-head-row">
          <div className="product-card-large-icon">
            {icon}
          </div>
          <div>
            <h3>{name}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="product-card-large-body">
        <p>{description}</p>
        <div className="product-card-large-benefits">
          {keyBenefits.map((benefit) => (
            <span
              key={benefit}
              className="product-card-large-benefit"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
