import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = { title: '海购五句话 | HIGO 全球商学院', description: '统一对外表达的五句话框架。' }

const lines = [
  '一个生态系统：产品、平台、教育、服务',
  '两个体制：激励体制与成长体制',
  '三大空间：生存、生活、生命',
  '四大红利：产品、分享、团队、全球',
  '全球市场：多区域协同发展',
]

export default function CompanyFiveSentencesPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Framework</span><h1>海购五句话</h1></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack">{lines.map((l, i)=><div key={l} className="seven-day-stack-card"><div className="seven-day-note-title">第 {i+1} 句</div><p>{l}</p></div>)}</div></div></section>
      <Footer /><MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
