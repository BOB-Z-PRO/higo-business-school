import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'GnAKG | HIGO 全球商学院',
  description: '细胞能量支持产品介绍与合规表达边界。',
}

export default function GnAKGPage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />
      <section className="module-hero">
        <div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Product Detail</span><h1>GnAKG</h1><p className="module-hero-subtitle">细胞能量支持</p></div></div>
      </section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><div className="seven-day-note-title">核心表达</div><p>围绕活力、能量与状态管理进行支持性分享。</p></div><div className="seven-day-stack-card"><div className="seven-day-note-title">适用场景</div><p>精力管理、日常状态维护、年轻态管理沟通。</p></div></div></div></section>
      <ComplianceNotice description="禁止疾病治疗承诺、禁止绝对化效果、禁止以个案替代普遍结论。" />
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
