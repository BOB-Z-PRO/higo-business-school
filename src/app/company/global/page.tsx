import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = { title: '全球布局 | HIGO 全球商学院', description: '区域布局与协同分工。' }

const nodes = [['美国', '总部与战略协同'], ['马来西亚', '运营中心'], ['韩国', '东亚市场'], ['越南', '东南亚市场'], ['加拿大', '北美拓展'], ['日本', '高端市场']]

export default function CompanyGlobalPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Global</span><h1>全球布局</h1></div></div></section>
      <section className="ui-section"><div className="container"><div className="overview-stat-grid ui-mobile-two">{nodes.map(([a,b])=><div key={a} className="overview-stat-card"><div className="overview-stat-title">{a}</div><p>{b}</p></div>)}</div></div></section>
      <Footer /><MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
