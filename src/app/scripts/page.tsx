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
  description: '覆盖邀约、产品、机会、跟进、异议、会议邀请与新人带教场景的话术训练库。',
}

export default function ScriptsPage() {
  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/business" />

      <section className="academy-hero academy-hero-knowledge">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">Scripts Library</span>
            <h1 className="academy-hero-title">话术训练库</h1>
            <p className="academy-hero-subtitle">
              统一“推荐说法 / 不建议说法 / 合规提醒”的表达训练标准，支持团队复盘与复制。
            </p>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Categories</span>
            <h2 className="section-title">7类训练场景</h2>
            <p className="section-desc">按场景拆分，移动端双列，直接进入分类练习。</p>
          </div>

          <div className="academy-category-grid">
            {scriptCategories.map((category) => {
              const count = scriptItems.filter((item) => item.category === category.slug).length

              return (
                <Link key={category.slug} href={`/scripts/${category.slug}`} className="academy-category-card">
                  <div className="academy-category-head">
                    <h3>{category.title}</h3>
                    <span className="academy-pill">{count} 条</span>
                  </div>
                  <p>{category.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ComplianceNotice description="话术训练的重点不是“更会说”，而是“表达更稳、更清晰、更合规”。避免疾病治疗、收益承诺和绝对化结果。" />

      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
