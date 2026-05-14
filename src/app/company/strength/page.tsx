import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = { title: '企业实力 | HIGO 全球商学院', description: '研发、制造、供应链与服务能力。' }

const items = ['研发协作体系', '生产与质控体系', '供应链与交付能力', '教育与服务支持']

export default function CompanyStrengthPage() {
  return <div className="page-shell"><Header activePath="/company" /><section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Strength</span><h1>企业实力</h1></div></div></section><section className="ui-section"><div className="container"><div className="seven-day-stack">{items.map((i)=><div key={i} className="seven-day-stack-card"><p>{i}</p></div>)}</div></div></section><Footer /><MobileNav activePath="/company" items={mobileNavItems} /></div>
}
