import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'GN 荷尔蒙 | HIGO 全球商学院',
  description: '内分泌平衡支持产品介绍与合规表达边界。',
}

export default function GnHormonePage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Product Detail</span><h1>GN 荷尔蒙</h1><p className="module-hero-subtitle">内分泌平衡支持</p></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><div className="seven-day-note-title">核心表达</div><p>围绕睡眠、情绪与精力管理进行支持性沟通。</p></div><div className="seven-day-stack-card"><div className="seven-day-note-title">适用场景</div><p>作息管理与状态稳定相关学习分享。</p></div></div></div></section>
      <ComplianceNotice description="禁止宣称治疗内分泌疾病，禁止激素替代承诺，禁止绝对化效果表达。" />
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
