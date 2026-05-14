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
    <section className="ui-section compliance-notice-section">
      <div className="container">
        <div className="compliance-notice-card content-narrow">
          <span className="ui-eyebrow">Compliance</span>
          <h2 className="ui-title">{title}</h2>
          <p className="ui-desc ui-readable">{description}</p>
          <Link href={ctaHref} className="btn btn-text">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
