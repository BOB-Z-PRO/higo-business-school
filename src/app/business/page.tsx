import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { businessObjections, businessSpaces } from '@/lib/business-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '经营篇 | HIGO 全球商学院',
  description: '经营篇围绕新人启动、稳定经营与复制成长三大空间，构建清晰、可执行、可复盘的成长路径。',
}

export default function BusinessPage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner">
            <span className="module-hero-kicker">Growth Path</span>
            <h1>经营篇</h1>
            <p className="module-hero-subtitle">三大空间，一条成长主线</p>
            <p className="module-hero-description">
              把经营过程拆成阶段、动作和表达三层结构，帮助新人知道当下该学什么、该做什么、该避免什么。
            </p>
            <div className="ui-action-row">
              <Link href="/business/survival" className="btn btn-primary">
                进入生存空间
              </Link>
              <Link href="/scripts" className="btn btn-text">
                查看话术训练库
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Path</span>
            <h2 className="ui-title">三大空间成长路径</h2>
            <p className="ui-desc ui-readable">先建立路径感，再安排课程、会议和日常动作。</p>
          </div>

          <div className="academy-grid-auto" style={{ marginTop: '2rem' }}>
            {businessSpaces.map((space) => (
              <article key={space.id} className="academy-link-card">
                <div className="academy-link-card-top" style={{ background: space.gradient }}>
                  <div className="academy-link-card-row">
                    <span className="academy-link-card-icon">{space.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{space.name}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                        {space.subtitle} · {space.level}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academy-link-card-body">
                  <p>{space.description}</p>

                  <div className="academy-chip-list" style={{ ['--accent-color' as string]: space.color }}>
                    {space.goals.map((goal) => (
                      <span key={goal} className="academy-chip">
                        {goal}
                      </span>
                    ))}
                  </div>

                  <div className="academy-grid-3">
                    {space.features.map((feature) => (
                      <div key={feature.title} className="academy-feature-card" style={{ ['--accent-color' as string]: space.color }}>
                        <div className="academy-feature-card-head">
                          <span className="academy-feature-card-mark">{feature.icon}</span>
                          <h3>{feature.title}</h3>
                        </div>
                        <p>{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="academy-cta-row">
                    <Link href={`/business/${space.id}`} className="btn btn-primary">
                      进入 {space.name}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="academy-overview-link-grid" style={{ marginBottom: '2rem' }}>
            {[
              {
                href: '/business/survival/7-day',
                title: '新人 7 天启动营',
                description: '以日任务方式完成新人第一周学习与执行闭环。',
              },
              {
                href: '/business/survival/30-day',
                title: '30 天经营训练',
                description: '把首周动作升级为可持续经营节奏。',
              },
              {
                href: '/business/survival/objections',
                title: '新人疑义解答',
                description: '围绕公司、产品、经营、分享和合规的高频问题库。',
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="academy-overview-link">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="ui-section-header">
            <span className="ui-eyebrow">Q&A</span>
            <h2 className="ui-title">新人常见疑问</h2>
            <p className="ui-desc ui-readable">先用结构化问答消除顾虑，再进入学习和行动。</p>
          </div>

          <div className="mobile-card-grid" style={{ marginTop: '2rem' }}>
            {businessObjections.map((item) => (
              <Link
                key={item.title}
                href="/business/survival/objections"
                className="objection-card mobile-card-body"
                style={{ borderTop: `4px solid ${item.color}` }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: `${item.color}15`,
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    marginBottom: '0.8rem',
                  }}
                >
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>收录 {item.count} 个高频问题</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="经营内容以学习路径、行动步骤和合规表达为核心，不做收益承诺，不做医疗化宣传。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
