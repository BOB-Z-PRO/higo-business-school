import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '公司篇 | HIGO 全球商学院',
  description: '公司介绍、战略、全球布局、资质认证与文化体系总览。',
}

const modules = [
  ['/company/intro', '公司介绍', '了解集团背景、发展阶段与核心定位。'],
  ['/company/strategy', '全球战略', '明确长期方向、组织逻辑与增长主线。'],
  ['/company/five-sentences', '海购五句话', '统一对外表达框架，提升沟通一致性。'],
  ['/company/global', '全球布局', '各国家与区域的功能定位与协作关系。'],
  ['/company/strength', '企业实力', '研发、制造、供应链与服务体系能力。'],
  ['/company/certifications', '资质认证', '国际认证与质量体系材料。'],
  ['/company/culture', '企业文化', '价值观、行为准则与团队协作规范。'],
  ['/company/foundation', '基金会', '公益方向与社会责任实践。'],
  ['/company/future', '未来前景', '行业趋势与长期发展空间。'],
]

export default function CompanyPage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Corporate Story</span>
            <h1>公司篇</h1>
            <p className="module-hero-subtitle">先建立信任，再推进学习与行动</p>
            <p className="module-hero-description">
              公司篇用于统一“我们是谁、为什么做、如何长期做”的基础认知，支撑后续产品与经营表达。
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="academy-overview-link-grid">
            {modules.map(([href, title, desc]) => (
              <Link key={href} href={href} className="academy-overview-link">
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
