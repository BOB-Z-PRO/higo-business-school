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
  description:
    '经营篇围绕新人启动、稳定经营与复制成长三大空间搭建路径，帮助团队以更清晰、合规、可复制的方式推进学习与动作。',
}

export default function BusinessPage() {
  return (
    <div className="academy-page-shell">
      <Header activePath="/business" />

      <section className="academy-hero" style={{ ['--hero-start' as string]: '#0f172a', ['--hero-end' as string]: '#0f766e' }}>
        <div className="container academy-hero-grid">
          <div className="academy-hero-inner">
            <span className="academy-kicker">Growth Path</span>
            <h1>经营篇</h1>
            <p className="academy-hero-copy">
              将经营过程拆成阶段、动作和表达三层结构，帮助页面内容更容易维护，也帮助伙伴按阶段前进。
            </p>
          </div>

          <div className="academy-hero-aside">
            <div className="academy-hero-stat">
              <strong>3 大空间</strong>
              <span>从新人启动到团队复制，建立清晰成长阶梯</span>
            </div>
            <div className="academy-hero-stat">
              <strong>动作优先</strong>
              <span>课程、会议、跟进和表达统一到可执行节奏中</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Path</span>
            <h2 className="premium-title">三大空间成长路径</h2>
            <p className="premium-desc content-narrow">先建立路径感，再安排课程、会议和日常动作。</p>
          </div>

          <div className="academy-grid-auto" style={{ marginTop: '2rem' }}>
            {businessSpaces.map((space) => (
              <article key={space.id} className="academy-link-card">
                <div className="academy-link-card-top" style={{ background: space.gradient }}>
                  <div className="academy-link-card-row">
                    <span className="academy-link-card-icon">{space.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.28rem' }}>{space.name}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.82rem', lineHeight: 1.65 }}>
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

      <section className="premium-section" style={{ background: 'rgba(226, 232, 240, 0.42)' }}>
        <div className="container">
          <div className="academy-overview-link-grid" style={{ marginBottom: '2rem' }}>
            {[
              {
                href: '/business/survival/7-day',
                title: '新人 7 天启动营',
                description: '先让新人知道今天学什么、做什么、哪些话不能说。',
              },
              {
                href: '/scripts',
                title: '话术训练库',
                description: '按邀约、产品、跟进、异议等场景统一表达。',
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="academy-overview-link">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="premium-section-header">
            <span className="premium-badge">Q&amp;A</span>
            <h2 className="premium-title">新人常见疑问</h2>
            <p className="premium-desc content-narrow">把常见问题分类沉淀下来，更利于后续扩展与统一答复。</p>
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
                    borderRadius: '14px',
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
                <p>沉淀 {item.count} 个常见问题</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="经营内容应聚焦路径、动作和标准表达，不要使用“收益确定”“承诺收益”或其他确定性收益暗示。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
