import type { Metadata } from 'next'
import Link from 'next/link'
import ComplianceNotice from '@/components/common/compliance-notice'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import MobileNav from '@/components/layout/mobile-nav'
import { mobileNavItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: '30 天经营训练 | HIGO 全球商学院',
  description: '把新人启动营升级为 30 天可执行经营节奏：学习、邀约、会议、复盘与带新协同。',
}

const weeklyPlan = [
  {
    week: '第 1 周',
    focus: '稳定表达与动作固化',
    tasks: ['每日 1 次轻邀约', '完成 2 次产品体验分享', '参加 1 场会议并会后跟进'],
  },
  {
    week: '第 2 周',
    focus: '会议借力与异议处理',
    tasks: ['每周邀请 5 人进会', '沉淀高频异议回应清单', '完成 2 次一对一跟进复盘'],
  },
  {
    week: '第 3 周',
    focus: '内容资产化与效率提升',
    tasks: ['建立个人内容包（文案/语音）', '复用标准开场与结束话术', '形成可复制日计划模板'],
  },
  {
    week: '第 4 周',
    focus: '带新协作与节奏升级',
    tasks: ['带 1 名新人完成 7 天计划', '完成一次周复盘分享', '制定下一个 30 天升级计划'],
  },
]

export default function ThirtyDayPage() {
  return (
    <div className="page-shell">
      <Header activePath="/business" />

      <section className="module-hero">
        <div className="container">
          <div className="module-hero-inner content-narrow">
            <span className="module-hero-kicker">生存空间 · 进阶训练</span>
            <h1>30 天经营训练</h1>
            <p className="module-hero-subtitle">从启动动作到稳定经营</p>
            <p className="module-hero-description">
              目标不是堆学习量，而是稳定节奏：每天可执行、每周可复盘、月度可升级。
            </p>
            <div className="ui-action-row">
              <Link href="/business/survival/7-day" className="btn btn-text">
                返回 7 天启动营
              </Link>
              <Link href="/business/survival/objections" className="btn btn-primary">
                先看异议解答
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="container">
          <div className="ui-section-header">
            <span className="ui-eyebrow">30-Day Plan</span>
            <h2 className="ui-title">四周节奏图</h2>
            <p className="ui-desc ui-readable">每周一个核心目标，动作保持简单且可落地。</p>
          </div>

          <div className="seven-day-stack">
            {weeklyPlan.map((item) => (
              <article key={item.week} className="seven-day-card">
                <div className="seven-day-card-hero">
                  <div className="seven-day-card-hero-main">
                    <div className="seven-day-day-badge">{item.week}</div>
                    <div>
                      <h3>{item.focus}</h3>
                      <p>以周为单位推进经营节奏</p>
                    </div>
                  </div>
                </div>
                <div className="seven-day-card-body">
                  <div className="seven-day-block">
                    <div className="seven-day-label">本周动作</div>
                    <ul className="seven-day-list">
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ComplianceNotice description="30 天经营训练阶段同样遵循合规边界：不夸大效果、不承诺收益、不做压迫式邀约。" />
      <Footer />
      <MobileNav activePath="/business" items={mobileNavItems} />
    </div>
  )
}
