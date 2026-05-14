import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'GN 大脑 | HIGO 全球商学院',
  description: '认知营养支持产品介绍与合规表达边界。',
}

export default function GnBrainPage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Product Detail</span><h1>GN 大脑</h1><p className="module-hero-subtitle">认知营养支持</p></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><div className="seven-day-note-title">核心表达</div><p>围绕专注、记忆与脑力状态进行支持性分享。</p></div><div className="seven-day-stack-card"><div className="seven-day-note-title">适用场景</div><p>学习效率、脑力工作和认知状态维护沟通。</p></div></div></div></section>
      <ComplianceNotice description="禁止宣称治疗脑部疾病，禁止夸大认知提升，禁止替代医疗方案表达。" />
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
