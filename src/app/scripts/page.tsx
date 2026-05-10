import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { scriptCategories, scriptItems } from '@/lib/scripts-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '话术训练库 | HIGO 全球商学院',
  description:
    '按邀约、产品、机会、跟进、异议、会议邀请和新人带教七类场景整理的合规表达训练库。',
}

export default function ScriptsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/business" />

      <section style={{ background: 'linear-gradient(135deg, #1A365D 0%, #2C5282 100%)', color: 'white', padding: '72px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.15)', fontSize: '0.84rem', fontWeight: 700, marginBottom: '18px' }}>
              Scripts Library
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>话术训练库</h1>
            <p style={{ fontSize: '1.05rem', opacity: 0.92, lineHeight: 1.8 }}>
              这里不是销售话术大全，而是合规表达训练库。每一类都围绕“怎么开口、怎么避免违规、什么时候借力会议和老师”来设计。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Categories</span>
            <h2 className="section-title">7 类训练场景</h2>
            <p className="section-desc">每一类至少 3 条示例，适合直接复制练习。</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {scriptCategories.map((category) => {
              const count = scriptItems.filter((item) => item.category === category.slug).length

              return (
                <Link
                  key={category.slug}
                  href={`/scripts/${category.slug}`}
                  style={{
                    background: 'white',
                    borderRadius: '18px',
                    padding: '22px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    borderTop: `4px solid ${category.color}`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)' }}>{category.title}</h3>
                    <span style={{ background: `${category.color}15`, color: category.color, padding: '5px 10px', borderRadius: '999px', fontSize: '0.76rem', fontWeight: 700 }}>
                      {count} 条
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.88rem' }}>{category.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ComplianceNotice description="话术训练的重点不是“更会说”，而是“说得更稳、更清楚、更合规”。所有表达都应避免疾病治疗、收益承诺和绝对化结果。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
