import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = { title: '未来前景 | HIGO 全球商学院', description: '行业趋势与长期增长方向。' }

export default function CompanyFuturePage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Future</span><h1>未来前景</h1><p className="module-hero-subtitle">长期主义与系统增长</p></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><p>围绕健康管理、教育系统与全球协同构建长期增长能力。</p></div></div></div></section>
      <Footer /><MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
