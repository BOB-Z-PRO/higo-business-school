import Link from 'next/link'

type ComplianceNoticeProps = {
  title?: string
  description: string
  ctaHref?: string
  ctaLabel?: string
}

export default function ComplianceNotice({
  title = '合规提醒',
  description,
  ctaHref = '/compliance',
  ctaLabel = '查看合规规范',
}: ComplianceNoticeProps) {
  return (
    <section
      className="section"
      style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px' }}>{title}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px', opacity: 0.95 }}>
            {description}
          </p>
          <Link
            href={ctaHref}
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#E53E3E',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
