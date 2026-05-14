import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '科研背景 | HIGO 全球商学院',
  description: '产品表达所需的科研基础框架与合规边界。',
}

const topics = [
  ['细胞能量', '围绕能量代谢与细胞活力的基础认知。'],
  ['氧化应激', '理解自由基与抗氧化平衡逻辑。'],
  ['内分泌平衡', '关注周期与调节，不做治疗承诺。'],
  ['认知支持', '聚焦日常状态支持和长期习惯管理。'],
]

export default function ProductSciencePage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />
      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Science</span>
            <h1>科研背景</h1>
            <p className="module-hero-subtitle">先讲机制，再讲体验</p>
            <p className="module-hero-description">以科学结构化表达支持产品沟通，避免医疗化和绝对化结论。</p>
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="overview-stat-grid ui-mobile-two">
            {topics.map(([title, desc]) => (
              <div key={title} className="overview-stat-card">
                <div className="overview-stat-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
