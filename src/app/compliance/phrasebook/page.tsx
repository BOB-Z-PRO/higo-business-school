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
  description:
    '按产品、收益、案例、公司和医疗等类别整理的表达替换库，帮助团队快速识别风险说法并改成合规表达。',
}

export default function CompliancePhrasebookPage() {
  const grouped = Object.entries(complianceCategoryMeta).map(([category, meta]) => ({
    category,
    meta,
    items: compliancePhrasebook.filter((item) => item.category === category),
  }))

  return (
    <div className="page-shell">
      <Header activePath="/compliance" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Compliance Phrasebook</span>
            <h1>合规表达替换库</h1>
            <p className="module-hero-description">
              与其只记“不能说什么”，不如把“可以怎么说”沉淀成标准库。这里按照产品、收益、案例、公司和医疗高风险五类集中展示替换表达。
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Phrasebook</span>
            <h2 className="ui-title">分类替换表达</h2>
            <p className="ui-desc ui-readable">至少 20 条高频替换表达，支持直接复制与团队共用。</p>
          </div>

          <div className="phrasebook-group-stack">
            {grouped.map(({ category, meta, items }) => (
              <section key={category} className="phrasebook-group">
                <div className="phrasebook-group-head">
                  <h3>{meta.title}</h3>
                  <span className="phrasebook-group-count">{items.length} 条</span>
                </div>
                <div className="phrasebook-grid">
                  {items.map((item) => (
                    <PhrasebookCard key={item.id} phrase={item} color={meta.color} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="所有高风险表达如果必须出现，只能出现在“不要说”“禁止表达”或风险提示语境中，不能作为正向宣传内容。" />

      <Footer />
      <MobileNav activePath="/compliance" items={mobileNavItems} />
    </div>
  )
}
