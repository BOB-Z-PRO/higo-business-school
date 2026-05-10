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
    <div className="min-h-screen" style={{ background: 'var(--bg-light)' }}>
      <Header activePath="/compliance" />

      <section style={{ background: 'linear-gradient(135deg, #E53E3E 0%, #FC8181 100%)', color: 'white', padding: '72px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>合规表达替换库</h1>
          <p style={{ fontSize: '1.04rem', opacity: 0.92, lineHeight: 1.8, maxWidth: '760px' }}>
            与其只记“不能说什么”，不如把“可以怎么说”沉淀成标准库。这里按照产品、收益、案例、公司和医疗高风险五类集中展示替换表达。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Phrasebook</span>
            <h2 className="section-title">分类替换表达</h2>
            <p className="section-desc">至少 20 条高频替换表达，支持直接复制与团队共用。</p>
          </div>

          <div style={{ display: 'grid', gap: '28px' }}>
            {grouped.map(({ category, meta, items }) => (
              <section key={category}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>{meta.title}</h3>
                  <span style={{ background: `${meta.color}15`, color: meta.color, padding: '6px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700 }}>
                    {items.length} 条
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
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
