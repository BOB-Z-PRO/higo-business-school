import type { Metadata } from 'next'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'GnCELL | HIGO 全球商学院',
  description: '细胞健康支持产品介绍与合规表达边界。',
}

export default function GnCELLPage() {
  return (
    <div className="page-shell">
      <Header activePath="/products" />
      <section className="module-hero"><div className="container"><div className="module-hero-inner content-narrow"><span className="module-hero-kicker">Product Detail</span><h1>GnCELL</h1><p className="module-hero-subtitle">细胞健康支持</p></div></div></section>
      <section className="ui-section"><div className="container"><div className="seven-day-stack"><div className="seven-day-stack-card"><div className="seven-day-note-title">核心表达</div><p>围绕细胞健康与恢复支持进行规范表达。</p></div><div className="seven-day-stack-card"><div className="seven-day-note-title">适用场景</div><p>状态管理、恢复节奏与生活方式优化沟通。</p></div></div></div></section>
      <ComplianceNotice description="禁止疾病治疗承诺、禁止夸大案例、禁止替代医疗方案表达。" />
      <Footer />
      <MobileNav activePath="/products" items={mobileNavItems} />
    </div>
  )
}
