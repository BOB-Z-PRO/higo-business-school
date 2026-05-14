import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '公司战略 | HIGO 全球商学院',
  description: '愿景、使命、定位与全球化策略框架。',
}

const blocks = [
  ['愿景', '用科技推动长期健康管理与高质量生活方式。'],
  ['使命', '建立可复制、可持续的学习与经营系统。'],
  ['定位', '以产品、平台、教育、服务构建长期价值。'],
  ['全球化', '按区域分工协作，持续优化运营效率。'],
]

export default function CompanyStrategyPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Strategy</span>
            <h1>公司战略</h1>
            <p className="module-hero-subtitle">愿景 · 使命 · 定位 · 全球化</p>
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="overview-stat-grid ui-mobile-two">
            {blocks.map(([title, desc]) => (
              <div key={title} className="overview-stat-card">
                <div className="overview-stat-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
