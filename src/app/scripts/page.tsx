import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
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
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero module-hero-blue">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Scripts Library</span>
            <h1>话术训练库</h1>
            <p className="module-hero-description">
              这里不是销售话术大全，而是合规表达训练库。每一类都围绕“怎么开口、怎么避免违规、什么时候借力会议和老师”来设计。
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="container">
          <div className="premium-section-header">
            <span className="premium-badge">Categories</span>
            <h2 className="premium-title">7 类训练场景</h2>
            <p className="premium-desc content-narrow">每一类至少 3 条示例，适合直接复制练习。</p>
          </div>

          <div className="script-category-grid mobile-two-col">
            {scriptCategories.map((category) => {
              const count = scriptItems.filter((item) => item.category === category.slug).length

              return (
                <Link
                  key={category.slug}
                  href={`/scripts/${category.slug}`}
                  className="script-category-card premium-card mobile-compact-card"
                  style={{ ['--accent-color' as string]: category.color } as CSSProperties}
                >
                  <div className="script-category-card-head">
                    <h3>{category.title}</h3>
                    <span className="script-category-count">
                      {count} 条
                    </span>
                  </div>
                  <p>{category.description}</p>
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
