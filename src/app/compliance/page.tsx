import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '合规中心 | HIGO 全球商学院',
  description: '统一合规边界、禁语规则与高频问答，确保团队表达长期可持续。',
}

const fiveBans = [
  '禁止疾病治疗承诺',
  '禁止收益承诺或暗示',
  '禁止绝对化效果表达',
  '禁止伪造或夸大案例',
  '禁止滥用认证和检测数据',
]

const productRules = [
  ['可以说', '说明成分与原理，分享真实体验，并注明因人而异。'],
  ['不可以说', '宣称治疗疾病、保证效果、用个案代表普遍结果。'],
]

const incomeRules = [
  ['可以说', '介绍制度结构和努力路径，强调结果依赖执行。'],
  ['不可以说', '承诺月入金额、暗示零风险高回报。'],
]

const qa = [
  ['可以说“状态改善”吗？', '可以，但必须是个人真实体验，并注明因人而异。'],
  ['可以晒收入截图吗？', '仅可做个体分享，不能作为对他人的收益承诺。'],
  ['别人问能不能治病怎么答？', '明确不能治疗承诺，引导到合规课程和公开说明会。'],
]

export default function CompliancePage() {
  return (
    <div className="page-shell">
      <Header activePath="/compliance" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">Compliance Center</span>
            <h1>合规中心</h1>
            <p className="module-hero-subtitle">所有表达先过合规边界</p>
            <p className="module-hero-description">
              合规不是限制动作，而是保证团队长期可信、可复制、可持续经营的底线系统。
            </p>
            <div className="ui-action-row">
              <Link href="/compliance/phrasebook" className="btn btn-primary">
                进入表达替换库
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Critical Rules</span>
            <h2 className="ui-title">五大禁忌</h2>
          </div>
          <div className="seven-day-stack">
            {fiveBans.map((item, index) => (
              <div key={item} className="seven-day-card">
                <div className="seven-day-card-hero">
                  <div className="seven-day-card-hero-main">
                    <div className="seven-day-day-badge">{index + 1}</div>
                    <div>
                      <h3>{item}</h3>
                      <p>触碰红线会直接影响团队经营安全。</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-grid-2 seven-day-hero-grid">
            <div className="seven-day-summary-card">
              <span className="ui-eyebrow">产品表达</span>
              <div className="seven-day-stack" style={{ marginTop: '1rem' }}>
                {productRules.map(([k, v]) => (
                  <div key={k} className="seven-day-stack-card">
                    <div className="seven-day-note-title">{k}</div>
                    <p>{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="seven-day-next-stage">
              <span className="ui-eyebrow">收益表达</span>
              <div className="seven-day-stack" style={{ marginTop: '1rem' }}>
                {incomeRules.map(([k, v]) => (
                  <div key={k} className="seven-day-stack-card">
                    <div className="seven-day-note-title">{k}</div>
                    <p>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">Q&A</span>
            <h2 className="ui-title">合规问答</h2>
          </div>
          <div className="seven-day-stack">
            {qa.map(([q, a]) => (
              <div key={q} className="seven-day-stack-card">
                <div className="seven-day-note-title">Q：{q}</div>
                <p>A：{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNav activePath="/compliance" items={mobileNavItems} />
    </div>
  )
}
