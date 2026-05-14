import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = { title: '基金会 | HIGO 全球商学院', description: '公益方向与社会责任实践。' }

export default function CompanyFoundationPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Foundation</span><h1>基金会</h1></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><p>公益活动以长期、透明、可执行为原则，聚焦健康教育与社会支持。</p></div></div></div></section>
      <Footer /><MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
