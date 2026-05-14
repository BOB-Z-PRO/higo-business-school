import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import PhrasebookCard from '@/components/compliance/phrasebook-card'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import {
  complianceCategoryMeta,
  compliancePhrasebook,
} from '@/lib/compliance-phrasebook-data'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '合规表达替换库 | HIGO 全球商学院',
  description: '按产品、收益、案例、公司和医疗高风险类别整理的表达替换工具库。',
}

export default function CompliancePhrasebookPage() {
  const grouped = Object.entries(complianceCategoryMeta).map(([category, meta]) => ({
    category,
    meta,
    items: compliancePhrasebook.filter((item) => item.category === category),
  }))

  return (
    <div className="min-h-screen academy-shell">
      <Header activePath="/compliance" />

      <section className="academy-hero academy-hero-compliance">
        <div className="container">
          <div className="academy-hero-content">
            <span className="academy-hero-badge">Compliance Toolkit</span>
            <h1 className="academy-hero-title">合规表达替换库</h1>
            <p className="academy-hero-subtitle">
              “不要说 / 可以说”对照清晰，红色只用于风险提醒，支持团队快速复制与统一口径。
            </p>
          </div>
        </div>
      </section>

      <section className="section academy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Phrasebook</span>
            <h2 className="section-title">分类替换表达</h2>
            <p className="section-desc">按风险类别聚合高频表达，便于培训、复盘与现场纠偏。</p>
          </div>

          <div className="academy-stack academy-stack-lg">
            {grouped.map(({ category, meta, items }) => (
              <section key={category}>
                <div className="academy-list-header">
                  <h3>{meta.title}</h3>
                  <span className="academy-pill">{items.length} 条</span>
                </div>
                <div className="academy-category-grid">
                  {items.map((item) => (
                    <PhrasebookCard key={item.id} phrase={item} color={meta.color} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="高风险表述如果必须出现，只能用于“不要说/风险提示”语境，不可作为正向宣传内容。" />

      <Footer />
      <MobileNav activePath="/compliance" items={mobileNavItems} />
    </div>
  )
}
