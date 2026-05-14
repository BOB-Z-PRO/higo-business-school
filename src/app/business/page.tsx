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
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/business" />

      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '24px' }}>
            <div style={{ fontSize: '5rem' }}>📈</div>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px' }}>经营篇</h1>
              <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px' }}>
                将经营过程拆成阶段、动作和表达三层结构，帮助页面内容更容易维护，也帮助伙伴按阶段前进。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Path</span>
            <h2 className="section-title">三大空间成长路径</h2>
            <p className="section-desc">先建立路径感，再安排课程、会议和日常动作。</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '40px' }}>
            {businessSpaces.map((space) => (
              <div key={space.id} className="home-space-detail-card">
                <div style={{ background: space.gradient, padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '20px', color: 'white' }}>
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
                    {space.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{space.name}</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
                      {space.subtitle} · {space.level}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '8px', marginBottom: '4px' }}>
                      <div style={{ fontWeight: 700 }}>{space.courses} 门课程</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{space.duration}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px 32px' }}>
                  <p style={{ color: 'var(--text-gray)', marginBottom: '20px', lineHeight: 1.7 }}>{space.description}</p>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 600 }}>阶段目标</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {space.goals.map((goal) => (
                        <span
                          key={goal}
                          style={{
                            background: `${space.color}15`,
                            color: space.color,
                            padding: '6px 14px',
                            borderRadius: '50px',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                          }}
                        >
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    {space.features.map((feature) => (
                      <div key={feature.title} style={{ background: 'var(--bg-gray)', padding: '16px', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '1.25rem' }}>{feature.icon}</span>
                          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{feature.title}</span>
                        </div>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Link href={`/business/${space.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: space.color, color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>
                      进入 {space.name} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              {
                href: '/business/survival/7-day',
                title: '新人 7 天启动营',
                description: '先让新人知道今天学什么、做什么、哪些话不能说。',
                color: '#38A169',
              },
              {
                href: '/scripts',
                title: '话术训练库',
                description: '按邀约、产品、跟进、异议等场景统一表达。',
                color: '#805AD5',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.88rem' }}>{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="section-header">
            <span className="section-badge">Q&amp;A</span>
            <h2 className="section-title">新人常见疑问</h2>
            <p className="section-desc">把常见问题分类沉淀下来，更利于后续扩展与统一答复。</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginTop: '40px' }}>
            {businessObjections.map((item) => (
              <Link key={item.title} href="/business/survival/objections" className="objection-card" style={{ borderTop: `4px solid ${item.color}` }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: `${item.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '12px',
                  }}
                >
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>沉淀 {item.count} 个常见问题</p>
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

