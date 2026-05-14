import type { Metadata } from 'next'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '企业文化 | HIGO 全球商学院',
  description: '核心价值观、团队精神与行为准则。',
}

const values = [
  ['真实', '真实表达，不夸大不承诺。'],
  ['长期', '关注长期价值，不做短期透支。'],
  ['共学', '通过标准课程和会议形成共学机制。'],
  ['协作', '强化团队协同与带教责任。'],
]

const dos = ['坚持合规表达', '按系统节奏学习执行', '主动复盘并沉淀内容', '尊重事实和数据边界']
const donts = ['夸大效果', '收益承诺', '情绪化压迫邀约', '未经校验发布内容']

export default function CulturePage() {
  return (
    <div className="page-shell">
      <Header activePath="/company" />
      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Culture</span>
            <h1>企业文化</h1>
            <p className="module-hero-subtitle">价值观决定组织质量</p>
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="overview-stat-grid ui-mobile-two">
            {values.map(([title, desc]) => (
              <div key={title} className="overview-stat-card">
                <div className="overview-stat-title">{title}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">建议行为</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {dos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">禁止行为</span>
              <ul className="seven-day-list" style={{ marginTop: '1rem' }}>
                {donts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav activePath="/company" items={mobileNavItems} />
    </div>
  )
}
