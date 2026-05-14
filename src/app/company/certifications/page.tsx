import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '资质认证 | HIGO 全球商学院',
  description: '国际认证体系与质量标准总览。',
}

const certs = [
  ['FDA', '美国食品药品监督管理体系相关标准'],
  ['cGMP', '动态药品生产质量管理规范'],
  ['ISO9001', '国际质量管理体系'],
  ['ISO22000', '食品安全管理体系'],
  ['HACCP', '危害分析与关键控制点'],
  ['KDA', '韩国市场相关认证标准'],
  ['NSF', '产品质量与安全认证标准'],
]

export default function CertificationsPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Certifications</span>
            <h1>资质认证</h1>
            <p className="module-hero-subtitle">7 大核心标准</p>
            <p className="module-hero-description">认证体系用于保障质量稳定和流程规范，不用于夸大宣传。</p>
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="seven-day-stack">
            {certs.map(([name, desc]) => (
              <div key={name} className="seven-day-stack-card">
                <div className="seven-day-note-title">{name}</div>
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
