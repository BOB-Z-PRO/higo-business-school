import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '关于 HIGO | HIGO 全球商学院',
  description: 'HIGO 全球业务概览、发展里程碑与商学院定位。',
}

const stats = [
  ['6+', '年深耕'],
  ['6', '国家布局'],
  ['4', '大洲覆盖'],
  ['100+', '专家参与'],
  ['7', '国际认证'],
  ['4', '核心产品线'],
]

const milestones = [
  ['2020', '集团成立，启动全球化布局'],
  ['2021', '推进基因抗衰技术研发'],
  ['2022', '东南亚与东亚市场扩展'],
  ['2023', '强化国际科研合作'],
  ['2024', '四大产品线持续升级'],
  ['2026', '全球商学院体系化上线'],
]

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Header activePath="/about" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">About HIGO</span>
            <h1>关于 HIGO</h1>
            <p className="module-hero-subtitle">做全球抗衰健康的推动者和引领者</p>
            <p className="module-hero-description">
              以科技、产品和教育系统为抓手，帮助更多普通人建立长期健康与经营能力。
            </p>
            <div className="ui-action-row">
              <Link href="/" className="btn btn-primary">
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="overview-stat-grid ui-mobile-two">
            {stats.map(([value, label]) => (
              <div key={label} className="overview-stat-card">
                <div className="overview-stat-title">{value}</div>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">公司定位</span>
              <h2 className="seven-day-summary-title">HIGO Global Biotech Group</h2>
              <p className="ui-readable">
                聚焦基因抗衰科技研发与全球市场运营，通过标准化产品、课程和会议体系，支持团队长期发展。
              </p>
            </div>
            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">商学院定位</span>
              <p className="ui-readable">
                商学院承担统一认知、统一表达和统一执行路径的职责，帮助新人到团队领导者完成系统成长。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Milestones</span>
            <h2 className="ui-title">发展里程碑</h2>
          </div>
          <div className="seven-day-stack">
            {milestones.map(([year, event]) => (
              <div key={year} className="seven-day-stack-card">
                <div className="seven-day-note-title">{year}</div>
                <p>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/about" items={mobileNavItems} />
    </div>
  )
}
