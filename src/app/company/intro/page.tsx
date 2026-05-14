import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '公司介绍 | HIGO 全球商学院',
  description: '集团背景、发展节奏与核心能力概览。',
}

const highlights = [
  ['集团定位', '聚焦基因抗衰科技与全球健康管理。'],
  ['发展节奏', '以产品、教育、会议和系统化运营协同推进。'],
  ['全球协作', '多区域分工协作，支持长期增长。'],
]

export default function CompanyIntroPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Company Intro</span>
            <h1>公司介绍</h1>
            <p className="module-hero-subtitle">HIGO Global Biotech Group</p>
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="seven-day-stack">
            {highlights.map(([title, desc]) => (
              <div key={title} className="seven-day-stack-card">
                <div className="seven-day-note-title">{title}</div>
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
